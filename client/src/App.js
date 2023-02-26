import React from "react";
import Content from "./components/Content";
import { UserProvider } from "./context/user";
import { ErrorProvider } from "./context/error";

export default function App() {
  
  return (
    <ErrorProvider>
      <UserProvider>
        <Content />   
      </UserProvider>
    </ErrorProvider>   
  );

};