import React from "react";

const LoginOption = (props) => {

    const {logOpt, logTitle} = props;
    return (
        <div className={logOpt}>
            {logTitle}
        </div>
    )
}

export default LoginOption;