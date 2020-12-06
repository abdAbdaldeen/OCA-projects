import React, { useContext, useState } from "react";
import Form from "./ValiationForm";

import { LoginContext } from "../../LoginContext";
export default function LoginPage() {
  const { setIsLogIn } = useContext(LoginContext);
  return <Form setlogin={setIsLogIn} />;
}
