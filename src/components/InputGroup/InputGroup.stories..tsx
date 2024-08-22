import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputGroup, InputGroupProps } from "./InputGroup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  decorators: [(Story) => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )],
  argTypes: {
    id: {
      control: 'text',
      description: 'Унікальний ідентифікатор атрибут для текстового поля.',
    },
    value: {
      control: 'text',
      description: 'Поточне значення текстового поля.',
    },
    onChange: {
      action: 'changed',
      description: 'Обробник для зміни значення текстового поля.',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-підказка для текстового поля.',
    },
    labelText: {
      control: 'text',
      description: 'Текст, що відображається у лейблі.',
    },
    labelSx: {
      control: 'object',
      description: 'Користувацьке стилізування для лейбла.',
    },
    textFieldSx: {
      control: 'object',
      description: 'Користувацьке стилізування для текстового поля.',
    },
    infoIconSx: {
      control: 'object',
      description: 'Користувацьке стилізування для іконки тултіпа.',
    },
    searchIconSx: {
      control: 'object',
      description: 'Користувацьке стилізування для іконки лупи.',
    },
    helpOutlineIconSx: {
      control: 'object',
      description: 'Користувацьке стилізування для іконки довідки.',
    },
    boxSx: {
      control: 'object',
      description: 'Користувацьке стилізування для обгортки.',
    },
    disabled: {
      control: 'boolean',
      description: 'Чи вимкнене текстове поле.',
    },
    error: {
      control: 'boolean',
      description: 'Чи знаходиться текстове поле в стані помилки.',
    },
    text: {
      control: 'text',
      description: 'Текст примітки, що відображається під текстовим полем.',
    },
  },
} as Meta;

const Template: StoryFn<InputGroupProps> = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "input1",
  value: "",
  onChange: (event) => console.log(event.target.value),
  placeholder: "Enter text",
  labelText: "Label",
  disabled: false,
  error: false,
  text: "Annotation text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

export const DarkMode = Template.bind({});
DarkMode.decorators = [(Story) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)];
DarkMode.args = {
  ...Default.args,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  ...Default.args,
  labelSx: { fontWeight: 'bold', fontSize: '1rem' },
  textFieldSx: { backgroundColor: '#f0f0f0' },
  infoIconSx: { color: 'blue' },
  searchIconSx: { color: 'green' },
  helpOutlineIconSx: { color: 'red' },
  boxSx: { border: '1px solid #ccc' },
};
