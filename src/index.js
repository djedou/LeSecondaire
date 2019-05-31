import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Loadable from 'react-loadable';
import Loading from "./components/spinners/Loading";

const mobile = () => {

    let size = window.screen.availWidth;
    if(size > 768){
        return false;
    }
    else {
        return true;
    } 
}




const App = mobile() ?  Loadable({
    loader: () => import("./AppMobile"),
    loading: Loading,
  }) : Loadable({
    loader: () => import("./AppDesktop"),
    loading: Loading,
  });


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
