import React from "react";
import { withStyles } from '@material-ui/styles';
import styles from "./style"
import LoginOption from "../../../components/login/LoginOption";
import { useDefaultState } from "../../../services/stateManager/hooks/useDefaultState"

const Login = (props) => {

    const { classes } = props;
    const [state] = useDefaultState();
    const LoginItems = state.personnel.map((item) =>{
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