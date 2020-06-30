/*Component imports */
import React,{useState} from 'react';
import {BrowserRouter,Switch,Route,MemoryRouter} from 'react-router-dom';


import {createBrowserHistory} from 'history';

import PageNotFound from './components/404Page/Page404';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import Blog from './components/blog/Blog';
import Contato from './components/contato/Contato';
import Cursos from './components/cursos/Cursos';
import Loja from './components/loja/Loja';
import Podcasts from './components/podcasts/Podcasts';



/*css imports */
import './index.css';

/*functions import */
import store from './store/index';
import { Provider } from 'react-redux'

export default function Routes(){
    const [] = useState([])
    const history = createBrowserHistory();
   // window.location.pathname= "/";
   // console.log()

    return(
        <Provider store={store}>
            <BrowserRouter history={history} basename="/">     
            
            <Header/>
            <Switch>                    
                <Route exact path="/" component={Inicio}/>   
                <Route exact path="/loja" component={Loja}/> 
                <Route exact path="/podcast" component={Podcasts}/> 
                <Route exact path="/cursos" component={Cursos}/> 
                <Route exact path="/contato" component={Contato}/> 
                <Route exact path="/blog" component={Blog}/> 
    
                
                
                
   
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
            
         
            
            
            
            
            
            </BrowserRouter>     
        </Provider>                  
         );
  
}