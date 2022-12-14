import React from "react";

import { ButtonSign } from "./Button";

export default {
  title: "App/Button",
  component: ButtonSign,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      // options: ['primary', 'secondary'],
      // control: { type: 'radio' },
    },
  },
};
const Template = (args) => <ButtonSign {...args} />;
export const Secondary = Template.bind({});
Secondary.args = {
  color: "primary",
  text: "text",
};
export const Success = Template.bind({});
Success.args = {
  color: "success",
  text: "text 2",
};
export const Info = Template.bind({});
Info.args = {
  color: "info",
  text: "text 3",
};
