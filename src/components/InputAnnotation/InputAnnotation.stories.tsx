import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { InputAnnotation, InputAnnotationProps } from "./InputAnnotation";
import { colors } from "../../theme";

export default {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
  tags: ['autodocs'],
  argTypes: {
    text: { control: "text", description: "Текст анотації" },
    sx: { control: "object", description: "Додаткові стилі" },
    disable: { control: "boolean", description: "Інпут текст вимкнено" },
    error: { control: "boolean", description: "Статус помилки" },
  },
} as Meta;

const Template: StoryFn<InputAnnotationProps> = (args) => <InputAnnotation {...args} />;

export const DarkModeStyled = Template.bind({});
DarkModeStyled.args = {
  text: "This is a hint text to help user.",
  disable: false,
  error: false,
  sx: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    fontWeight: 400,
    color: colors.text.primary.darker,
  },
};

export const LightModeStyled = Template.bind({});
LightModeStyled.args = {
  text: "This is a hint text to help user.",
  disable: false,
  error: false,
  sx: {
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    fontWeight: 400,
    color: colors.text.secondary.lighter,
  },
};


