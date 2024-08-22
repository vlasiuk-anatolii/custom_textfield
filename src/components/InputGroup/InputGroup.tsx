import React from "react";
import { Stack, SxProps, Theme } from "@mui/material";
import { InputText } from "../InputText";
import { InputLabel } from "../InputLabel";
import { colors } from "../../theme";
import { useTheme } from "@mui/material/styles";
import { InputAnnotation } from "../InputAnnotation";

export interface InputGroupProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  labelText: string;
  labelSx?: SxProps<Theme>;
  textFieldSx?: SxProps<Theme>;
  infoIconSx?: SxProps<Theme>;
  searchIconSx?: SxProps<Theme>;
  helpOutlineIconSx?: SxProps<Theme>;
  boxSx?: SxProps<Theme>;
  disabled: boolean;
  error: boolean;
  text: string;
}

const getLabelColor = (isDarkMode: boolean, disabled: boolean) => {
  if (disabled) {
    return isDarkMode ? colors.text.disabled.label : colors.text.secondary.darker;
  }
  return isDarkMode ? colors.text.primary.main : colors.text.secondary.main;
};

export const InputGroup: React.FC<InputGroupProps> = ({
  id,
  value,
  onChange,
  placeholder,
  labelText,
  labelSx,
  textFieldSx,
  infoIconSx,
  searchIconSx,
  helpOutlineIconSx,
  boxSx,
  disabled,
  error,
  text,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  
  return (
    <Stack
      spacing={0.5}
      sx={{
        width: {
          xs: "100%",
          sm: "80%",
          md: "60%",
          lg: "50%",
          xl: "40%",
        },
        margin: "50px auto",
        maxWidth: "600px",
        minWidth: "150px",
      }}
    >
      <InputLabel
        htmlFor={id}
        labelSx={{
          color: getLabelColor(isDarkMode, disabled),
          ...labelSx,
        }}
        infoIconSx={infoIconSx}
      >
        {labelText}
      </InputLabel>
      <InputText
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        textFieldSx={textFieldSx}
        searchIconSx={searchIconSx}
        helpOutlineIconSx={helpOutlineIconSx}
        boxSx={boxSx}
        disabled={disabled}
        error={error}
      />
      <InputAnnotation
        text={text}
        disable={disabled}
        error={error}
      />
    </Stack>
  );
};
