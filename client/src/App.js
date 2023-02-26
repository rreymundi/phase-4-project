import React from "react";
import Content from "./components/Content";
import { UserProvider } from "./context/user";
import { ErrorProvider } from "./context/error";

export default function App() {
  // const [user, setCurrentUser] = useState(null);
  // const [projects, setProjects] = useState([]);
  // const [errors, setErrors] = useState([]);


  // if (!user) 
  //   return (
  //     <Router>
  //       <NavBar 
  //         errors={errors}
  //         setErrors={setErrors}
  //       />
  //       <Content 
  //         projects={projects}
  //         setProjects={setProjects}
  //         onLogin={handleLogin} 
  //         errors={errors}
  //         setErrors={setErrors}
  //       />
  //       <Footer />
  //     </Router>
  //   );
  
  return (
    <ErrorProvider>
      <UserProvider>
        <Content />   
      </UserProvider>
    </ErrorProvider>   
  );

}