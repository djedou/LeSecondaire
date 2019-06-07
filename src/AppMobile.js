import React from 'react';
import './AppMobile.css';
import { StateProvider } from "./services/stateManager/stateProvider";
import { mainReducer } from "./services/stateManager/reducers/mainReducer";
import { initialState } from "./services/stateManager/constants/initialState";
import AppRouter from "./routers/mobile/AppRouter";



function AppMobile() {
  return (
    <StateProvider 
      initialState={initialState} 
      reducer={mainReducer}
    >
      <AppRouter/>
    </StateProvider>
  );
}

export default AppMobile;
