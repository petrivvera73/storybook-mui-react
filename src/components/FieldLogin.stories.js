import React from "react";

import { FieldLogin } from "./FieldLogin";

export default {
  title: "App/FieldLogin",
  component: FieldLogin,
};
const Template = (args) => <FieldLogin {...args} />;
export const LoginBox = Template.bind({});
LoginBox.args = {
  margin: "normal",
  value: "",
  name: "password",
  label: "Password",
  type: "password",
  id: "password",
  autoComplete: "off",
};
