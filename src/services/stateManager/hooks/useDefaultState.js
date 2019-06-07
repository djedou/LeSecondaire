import { useContext } from "react";
import { DefaultStateContext } from "../contexts/stateContext";

export const useDefaultState = () => useContext(DefaultStateContext);