import React from 'react';
import './AppDesktop.css';
import { StateProvider } from "./services/stateManager/stateProvider";
import { mainReducer } from "./services/stateManager/reducers/mainReducer";
import { initialState } from "./services/stateManager/constants/initialState";
import AppRouter from "./routers/desktop/AppRouter";


function AppDesktop() {

  return (
    <StateProvider 
      initialState={initialState} 
      reducer={mainReducer}
    >
      <AppRouter/>
    </StateProvider>
  );
}

export default AppDesktop;
