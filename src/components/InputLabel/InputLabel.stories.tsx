import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { InputLabel, InputLabelProps } from "./InputLabel";
import { colors } from "../../theme";

export default {
  title: "Components/InputLabel",
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: "text",
      description: "Id атрибут для асоціації з полем вводу",
    },
    children: { control: "text", description: "Текст лейбла" },
    labelSx: { control: "object", description: "Стилі для лейбла" },
    infoIconSx: {
      control: "object",
      description: "Стилі для іконки тултіпа",
    },
    tooltipTitle: { control: "text", description: "Текст тултіпу" },
  },
} as Meta;

const Template: StoryFn<InputLabelProps> = (args) => <InputLabel {...args} />;

export const DarkModeStyled = Template.bind({});
DarkModeStyled.args = {
  htmlFor: "input-text",
  children: "Email",
  tooltipTitle: "Custom tooltip text.",
  labelSx: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    fontWeight: 500,
    color: colors.text.primary.main,
  },
  infoIconSx: {
    verticalAlign: "middle",
    marginLeft: "8px",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    color: colors.text.secondary.darker,
  },
};

export const LightModeStyled = Template.bind({});
LightModeStyled.args = {
  htmlFor: "input-text",
  children: "Email",
  tooltipTitle: "Custom tooltip text.",
  labelSx: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    fontWeight: 500,
    color: colors.text.secondary.main,
  },
  infoIconSx: {
    verticalAlign: "middle",
    marginLeft: "8px",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    color: colors.text.secondary.darker,
  },
};
