import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from "../../components/spinners/Loading";
import Loadable from 'react-loadable';


function AppRouter() {

  const Login = Loadable({
    loader: () => import("../../containers/mobile/login/Login"),
    loading: Loading,
  });

  const Eleve = Loadable({
    loader: () => import("../../pages/mobile/Eleve"),
    loading: Loading,
  });

  const Professeur = Loadable({
    loader: () => import("../../pages/mobile/Professeur"),
    loading: Loading,
  });

  const Administration = Loadable({
    loader: () => import("../../pages/mobile/Administration"),
    loading: Loading,
  });

  const Parent = Loadable({
    loader: () => import("../../pages/mobile/Parent"),
    loading: Loading,
  });


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route exact path={`/`} component={Login} />
          <Route path={`/administration`} component={Administration} />
          <Route path={`/professeur`} component={Professeur} />
          <Route path={`/eleve`} component={Eleve} />
          <Route path={`/parent`} component={Parent} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
