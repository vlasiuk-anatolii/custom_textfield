import { ChangeEvent } from "react";
import { InputGroup } from "../InputGroup";
import { colors } from "../../theme";
import { SxProps, Theme } from "@mui/material";

interface BoxSx {
  border: string;
  color: string;
  display: string;
  justifyContent: string;
}

interface InputGroupComponentProps {
  valueInput: string;
  setValueInput: (value: string) => void;
  darkMode: "light" | "dark";
  isDisabled: boolean;
  isError: boolean;
  text: string;
}

const getTextFieldSx = (): SxProps<Theme> => ({
  "& input::placeholder": {
    opacity: 1,
  },
});

const getBoxSx = (darkMode: "light" | "dark"): BoxSx => ({
  border: `1px solid ${
    darkMode === "dark" ? colors.border.box : colors.border.boxLm
  }`,
  color: darkMode === "dark"
    ? colors.text.primary.darker
    : colors.text.secondary.darker,
  display: "flex",
  justifyContent: "center",
});

export const InputGroupComponent = ({
  valueInput,
  setValueInput,
  darkMode,
  isDisabled,
  isError,
  text,
}: InputGroupComponentProps) => (
  <InputGroup
    id="custom-input"
    value={valueInput}
    onChange={(event: ChangeEvent<HTMLInputElement>): void => setValueInput(event.target.value)}
    placeholder="Input..."
    labelText="Email"
    textFieldSx={getTextFieldSx()}
    boxSx={getBoxSx(darkMode)}
    disabled={isDisabled}
    error={isError}
    text={text}
  />
);
