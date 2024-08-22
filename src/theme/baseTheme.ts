// theme.ts
import { createTheme } from "@mui/material/styles";
import { colors } from "./";

export const getTheme = (darkMode: "light" | "dark") =>
  createTheme({
    palette: {
      mode: darkMode,
      background: {
        default:
          darkMode === "dark" ? colors.primary.main : colors.secondary.main,
      },
    },
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
      body1: {
        fontSize: "1rem",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor:
                darkMode === "dark"
                  ? colors.primary.darker
                  : colors.secondary.main,
              border: `1px solid ${
                darkMode === "dark"
                  ? colors.border.default
                  : colors.border.disabledLm
              }`,
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  darkMode === "dark"
                    ? colors.border.default
                    : colors.border.disabledLm
                }`,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  darkMode === "dark"
                    ? colors.border.focused
                    : colors.border.focusedLm
                }`,
                boxShadow: colors.shadows.defaultInputFocus,
              },
              "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  darkMode === "dark"
                    ? colors.error.main
                    : colors.error.lighter
                }`,
              },
              "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  darkMode === "dark"
                    ? colors.error.main
                    : colors.error.lighter
                }`,
                boxShadow: colors.shadows.errorInputFocus,
              },
              "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  darkMode === "dark"
                    ? colors.border.disabled
                    : colors.border.disabledLm
                }`,
              },
              "&.Mui-disabled": {
                color: colors.text.disabled.placeholder,
              },
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color:
              darkMode === "dark"
                ? colors.text.primary.main
                : colors.text.secondary.main,
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color:
              darkMode === "dark"
                ? colors.text.secondary.darker
                : colors.text.primary.darker,
            "& .MuiSvgIcon-root": {
              "@media (max-width:900px)": {
                fontSize: "16px",
              },
              "@media (min-width:1200px)": {
                fontSize: "28px",
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "12px",
          },
          arrow: {
            color: "#000",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color:
              darkMode === "dark"
                ? colors.secondary.main
                : colors.border.default,
            "&:hover": {
              backgroundColor:
                darkMode === "dark"
                  ? colors.border.default
                  : colors.text.disabled.annottationLm,
            },
          },
        },
      },
    },
  });
