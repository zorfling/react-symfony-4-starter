<?php

namespace App\Controller;

use App\Form\LoginFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LoginController extends AbstractController
{
    /**
     * @Route("/", name="login")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request)
    {

        $form = $this->createForm(LoginFormType::class);

        $form->handleRequest($request);

        if( $form->isSubmitted() && $form->isValid() ) {
            $loginFormData = $form->getData();

            dump($loginFormData);

            $this->redirectToRoute('login');
        }

        return $this->render('login/login.html.twig', [
            'loginForm' => $form->createView()
        ]);
    }
}
