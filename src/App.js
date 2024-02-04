import React from "react";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
// import { createBrowserRouter ,RouterProvider   } from "react-router-dom";
 
// const aapRouter = createBrowserRouter([
//   {
//     path :"/",
//     element : <LoginPage/>
//   },
//   {
//     path :"/signup",
//     element : <SignUp/>
//   }
// ])

function App() {
  return (

      <div className="App">
        <LoginPage/>
        {/* <SignUp/> */}
        
      </div>

  );
}


export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={aapRouter}/>
//   </React.StrictMode>
// );