import React from "react";
import { withStyles } from '@material-ui/styles';
import styles from "./dstyle"
import LoginOption from "../../components/login/LoginOption";

const Login = (props) => {

    const { classes } = props;
    const personnel = [
        "Administration",
        "Professeur",
        "Elève",
        "Parent"
    ];
    const LoginItems = personnel.map((item) =>{
        return (
            <LoginOption
                key={item}
                logOpt={classes.option} 
                logTitle={item}
            />
        )
    });
    return(
        <div className={classes.login}>
            <p className={classes.title}>Sign-In</p>
            {LoginItems}
        </div>
    )
}

export default withStyles(styles)(Login);