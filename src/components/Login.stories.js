import React from "react";

import { Login } from "./Login";

export default {
  title: "App/LoginBox",
  component: Login,
};
const Template = (args) => <Login {...args} />;
export const LoginBox = Template.bind({});
LoginBox.args = {
  title: "hello",
  question: "world",
};
