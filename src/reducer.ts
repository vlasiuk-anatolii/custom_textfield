import {
  SET_INPUT,
  TOGGLE_DISABLED,
  TOGGLE_ERROR,
  TOGGLE_THEME,
  SET_HELP_TEXT,
} from "./actions";
import { Action, State } from "./types";

export const initialState: State = {
  darkMode: "dark" as "light" | "dark",
  isDisabled: false,
  isError: false,
  valueInput: "",
  helpText: "This is a hint text to help user.",
};

const toggleTheme = (state: State): State => ({
  ...state,
  darkMode: state.darkMode === "light" ? "dark" : "light",
});

const toggleDisabled = (state: State): State => ({
  ...state,
  isDisabled: !state.isDisabled,
});

const toggleError = (state: State): State => ({
  ...state,
  isError: !state.isError,
});

const setInput = (state: State, payload: string): State => ({
  ...state,
  valueInput: payload,
});

const setHelpText = (state: State, payload: string): State => ({
  ...state,
  helpText: payload,
});

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case TOGGLE_THEME:
      return toggleTheme(state);
    case TOGGLE_DISABLED:
      return toggleDisabled(state);
    case TOGGLE_ERROR:
      return toggleError(state);
    case SET_INPUT:
      return setInput(state, action.payload);
    case SET_HELP_TEXT:
      return setHelpText(state, action.payload);
    default:
      return state;
  }
};

// we can use Redux but current project is small that is cause why we use useReducer hook
