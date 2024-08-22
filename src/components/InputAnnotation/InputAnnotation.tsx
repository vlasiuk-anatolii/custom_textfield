import React from "react";
import { Typography, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { colors } from "../../theme";

export interface InputAnnotationProps {
  text: string;
  sx?: SxProps<Theme>;
  disable: boolean;
  error: boolean;
}

const getColor = (isDarkMode: boolean, isError: boolean, disable: boolean) => {
  if (isError) {
    return isDarkMode
      ? colors.error.main
      : colors.error.mainLm;
  }
  return isDarkMode
    ? (disable
      ? colors.text.disabled.annottation
      : colors.text.primary.darker)
    : (disable
      ? colors.text.disabled.annottationLm
      : colors.text.secondary.lighter);
};

export const InputAnnotation: React.FC<InputAnnotationProps> = ({
  text,
  sx,
  disable,
  error,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Typography
      variant="caption"
      sx={{
        fontSize: {
          xs: "12px",
          lg: "14px",
        },
        color: getColor(isDarkMode, error, disable),
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};
