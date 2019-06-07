import React from "react";
import { Route } from 'react-router-dom'

const LoginOption = ({logOpt, logTitle, path}) => (
        <Route render={({ history}) => (
            <div 
                className={logOpt}
                onClick={() => { history.push(`/${path}`) }}
            >
                {logTitle}
            </div>
            
          )} 
        />
)

export default LoginOption;
