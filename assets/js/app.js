import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './Components/NavMenu';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './ContentNav'

//render((
  //<BrowserRouter>
   // <App />
  //</BrowserRouter>
//), document.getElementById('root'));

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import ItemCard from './Components/ItemCard';

//class App extends React.Component {
  //constructor() {
    //super();

    //this.state = {
      //entries: []
    //};
  //}



  //componentDidMount() {
    //fetch('/data')
      //.then(response => response.json())
      //.then(entries => {
        //this.setState({
          //entries
        //});
      //});
  //}

  //render() {
    //return (<div>hello</div>);}
      //<MuiThemeProvider>
        //<div style={{ display: 'flex' }}>
          //{this.state.entries.map(
            //({ id, author, avatarUrl, title, description }) => (
              //<ItemCard
                //key={id}
                //author={author}
                //title={title}
                //avatarUrl={avatarUrl}
                //style={{ flex: 1, margin: 10 }}
              //>
                //{description}
              //</ItemCard>
            //)
         // )}
        //</div>
      //</MuiThemeProvider>
    //);
  //}
//}

render((
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ), document.getElementById('root'));
