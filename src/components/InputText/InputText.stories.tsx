import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputText, InputTextProps } from "./InputText";
import { colors } from "../../theme";

export default {
  title: "Components/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Унікальний ідентифікатор атрибут для поля вводу.",
    },
    value: {
      control: "text",
      description: "Поточне значення поля вводу.",
    },
    onChange: {
      action: "changed",
      description: "Функція для обробки зміни значення поля.",
    },
    placeholder: {
      control: "text",
      description: "Текст-заповнювач для поля вводу.",
    },
    textFieldSx: {
      control: "object",
      description: "Стилі для поля вводу у форматі sx з Material.",
    },
    searchIconSx: {
      control: "object",
      description: "Стилі для іконки пошуку у форматі sx з Material.",
    },
    helpOutlineIconSx: {
      control: "object",
      description: "Стилі для іконки підказки  у форматі sx з Material.",
    },
    boxSx: {
      control: "object",
      description: "Стилі для контейнера зі знаками у форматі sx з Material.",
    },
    disabled: {
      control: "boolean",
      description: "Чи є поле вводу вимкненим.",
    },
    error: {
      control: "boolean",
      description: "Чи відображати поле вводу у стані помилки.",
    },
  },
} as Meta<InputTextProps>;

const Template: StoryFn<InputTextProps> = (args) => {
  return <InputText {...args} />;
};

export const DarkModeStyled = Template.bind({});
DarkModeStyled.args = {
  id: "input-text",
  value: "Example text",
  onChange: () => {},
  placeholder: "Input...",
  textFieldSx: {
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    "& input::placeholder": {
      opacity: 1,
      fontFamily: "Inter, Arial, sans-serif",
      color: colors.text.primary.main,
      fontWeight: 400,
    },
    "& input": {
      fontFamily: "Inter, Arial, sans-serif",
      color: colors.text.primary.main,
      fontWeight: 400,
    },
    padding: "0",
    height: {
      xs: "24px",
      md: "36px",
      lg: "40px",
      xl: "48px",
    },

    border: `1px solid ${colors.border.default}`,
    borderRadius: "4px",
    backgroundColor: colors.primary.darker,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.border.focused,
        boxShadow: colors.shadows.defaultInputFocus,
      },
      "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.error.main,
        boxShadow: colors.shadows.errorInputFocus,
      },
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.error.main,
    },

    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border.disabled,
    },
    "&.Mui-disabled": {
      color: colors.text.disabled.placeholder,
    },
  },
  searchIconSx: {
    color: colors.text.secondary.darker,
    fontSize: {
      xs: "16px",
      lg: "28px",
    },
  },
  helpOutlineIconSx: {
    color: colors.text.secondary.darker,
    fontSize: {
      xs: "16px",
      lg: "28px",
    },
  },
  boxSx: {
    border: `1px solid ${colors.border.box}`,
    color: colors.text.primary.darker,
    display: "flex",
    justifyContent: "center",
  },
  disabled: false,
  error: false,
};

export const LightModeStyled = Template.bind({});
LightModeStyled.args = {
  id: "input-text",
  value: "Example text",
  onChange: () => {},
  placeholder: "Input...",
  textFieldSx: {
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    "& input::placeholder": {
      opacity: 1,
      fontFamily: "Inter, Arial, sans-serif",
      color: colors.text.secondary.main,
      fontWeight: 400,
    },
    "& input": {
      fontFamily: "Inter, Arial, sans-serif",
      color: colors.text.secondary.main,
      fontWeight: 400,
    },
    padding: "0",
    height: {
      xs: "24px",
      md: "36px",
      lg: "40px",
      xl: "48px",
    },

    border: `1px solid ${colors.border.defaultLm}`,
    borderRadius: "4px",
    backgroundColor: colors.secondary.main,
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border.disabledLm,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.border.focusedLm,
        boxShadow: colors.shadows.defaultInputFocus,
      },
      "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.error.mainLm,
        boxShadow: colors.shadows.errorInputFocus,
      },
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.error.mainLm,
    },

    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border.disabledLm,
    },
    "&.Mui-disabled": {
      color: colors.text.disabled.placeholder,
    },
  },
  searchIconSx: {
    color: colors.text.primary.darker,
    fontSize: {
      xs: "16px",
      lg: "28px",
    },
  },
  helpOutlineIconSx: {
    color: colors.text.primary.darker,
    fontSize: {
      xs: "16px",
      lg: "28px",
    },
  },
  boxSx: {
    border: `1px solid ${colors.border.boxLm}`,
    color: colors.text.primary.darker,
    display: "flex",
    justifyContent: "center",
  },
  disabled: false,
  error: false,
};
