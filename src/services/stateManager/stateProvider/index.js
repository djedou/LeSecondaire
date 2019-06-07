import React, { useReducer } from "react";

import { DefaultStateContext } from "../contexts/stateContext";

export const StateProvider = ({reducer, initialState, children}) => (
    <DefaultStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DefaultStateContext.Provider>
)