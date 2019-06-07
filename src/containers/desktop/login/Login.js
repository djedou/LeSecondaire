import React from "react";
import { withStyles } from '@material-ui/styles';
import styles from "./style"
import LoginOption from "../../../components/login/LoginOption";

const Login = (props) => {

    const { classes } = props;
    const personnel = [
        {
            title:"Administration",
            path:"administration"
        },
        {
            title:"Professeur",
            path:"professeur"
        },
        {
            title:"Elève",
            path:"eleve"
        },
        {
            title:"Parent",
            path:"parent"
        }
    ];
    const LoginItems = personnel.map((item) =>{
        return (
            <LoginOption
                key={item.title}
                logOpt={classes.option} 
                logTitle={item.title}
                path={item.path}
            />

        )
    });
    return(
        <div className="App">
            <div className={classes.login}>
                <p className={classes.title}>Sign-In</p>
                {LoginItems}
            </div>
        </div>
    )
}

export default withStyles(styles)(Login);