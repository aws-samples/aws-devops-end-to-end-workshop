import React, { Component, Fragment } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import "./App.css";
import { useNavigate } from 'react-router';
import { AuthContextProvider } from "./context/auth-context";
import { LoadPages } from "./modules/loadPages/LoadPages";

export const withRouter = (Component: any) =>{
    const Wrapper = (props: any) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

interface AppProps {
  history: any;
}

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    document.title = "Bookstore Demo"
  }

  render() {

    return (
      <AuthContextProvider>
        <LoadPages/>
      </AuthContextProvider>
    );
  }
}

export default withRouter(App as any);