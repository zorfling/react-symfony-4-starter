import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationForm from './RegistrationForm/registrationForm';
import FormTabs from './FormTabs/FormTabs';
import NewForm from './NewForm/NewForm';
import Home from './Home/Home';
import Schedule from './Schedule/schedule';


const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/calendar' component={Schedule}/>
    <Route path='/newForm' component={NewForm}/>  
    <Route path='/registrationForm' component={RegistrationForm}/>  
    
    </Switch>
  </main>
)
export default Main
