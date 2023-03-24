import React from "react";
import { Route } from "react-router";

//@ts-ignore
export default ({ component: C, props: cProps, ...rest }) =>
  <p>teste</p>
  // <Route {...rest} children={(props: any) => <C {...props} {...cProps} />} />;