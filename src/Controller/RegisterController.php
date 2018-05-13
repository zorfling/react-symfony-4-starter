<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Form\RegisterFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegisterController extends Controller
{
    /**
     * @Route("/register", name="register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $form = $this->createForm(RegisterFormType::class);

        $form->handleRequest($request);

        if( $form->isSubmitted() && $form->isValid() ){
            $registerFormData = $form->getData();

            $username = $registerFormData['username'];
            $email = $registerFormData['email'];
            $password = $registerFormData['password'];
            $cPassword = $registerFormData['confirmPassword'];


            $repository = $this->getDoctrine()->getRepository(User::class);

            $existing_username = $repository->findBy([
                "username" => $username
            ]);

            $existing_email = $repository->findBy([
                "email" => $email
            ]);

            if( !empty($existing_username) ){
                $this->addFlash('danger', 'User with that username exists. Pick another one.');
                return $this->redirectToRoute('register');
            }

            if( !empty($existing_email) ){
                $this->addFlash('danger', 'User with that email exists. Pick another one.');
                return $this->redirectToRoute('register');
            }

            if( $password == $cPassword ){

                $entityManager = $this->getDoctrine()->getManager();
                $user = new User();

                $user->setUsername($username);
                $user->setEmail($email);

                $encoded = $encoder->encodePassword($user, $password);

                $user->setPassword($encoded);

                $entityManager->persist($user);

                $entityManager->flush();

                $this->addFlash('success', 'Successfully Registered!');

                return $this->redirectToRoute('login');
            } else {
                $this->addFlash('danger', 'Passwords are different. Need to be the same.');
            }


        }

        return $this->render('register/register.html.twig', [
            'registerForm' => $form->createView()
        ]);
    }
}
