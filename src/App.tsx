import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { useReducer } from "react";
import { getTheme } from "./theme";
import { ThemeToggleButton, DisableToggleButton, ErrorToggleButton } from "./components/additionalComponents";
import { InputGroupComponent } from "./components/additionalComponents";
import { reducer, initialState } from "./reducer";
import { Action, State } from "./types";

function App() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

  const theme = getTheme(state.darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ThemeToggleButton
          darkMode={state.darkMode}
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        />
        <DisableToggleButton
          isDisabled={state.isDisabled}
          onClick={() => dispatch({ type: "TOGGLE_DISABLED" })}
        />
        <ErrorToggleButton
          isError={state.isError}
          onClick={() => dispatch({ type: "TOGGLE_ERROR" })}
        />

        <InputGroupComponent
          valueInput={state.valueInput}
          setValueInput={(value: string) => dispatch({ type: "SET_INPUT", payload: value })}
          darkMode={state.darkMode}
          isDisabled={state.isDisabled}
          isError={state.isError}
          text={state.helpText}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
