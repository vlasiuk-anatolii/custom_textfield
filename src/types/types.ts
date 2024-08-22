import { SET_HELP_TEXT, SET_INPUT, TOGGLE_DISABLED, TOGGLE_ERROR, TOGGLE_THEME } from "../actions";

export interface ToggleThemeAction {
    type: typeof TOGGLE_THEME;
  }
  
  export interface ToggleDisabledAction {
    type: typeof TOGGLE_DISABLED;
  }
  
  export interface ToggleErrorAction {
    type: typeof TOGGLE_ERROR;
  }
  
  export interface SetInputAction {
    type: typeof SET_INPUT;
    payload: string;
  }

  export interface SetHelpTextAction {
    type: typeof SET_HELP_TEXT;
    payload: string;
  }
  
  export type Action = 
    | ToggleThemeAction
    | ToggleDisabledAction
    | ToggleErrorAction
    | SetInputAction
    | SetHelpTextAction;
  
  export interface State {
    darkMode: "light" | "dark";
    isDisabled: boolean;
    isError: boolean;
    valueInput: string;
    helpText: string;
  }
  