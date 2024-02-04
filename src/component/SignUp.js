import "../css/login.css";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignUp = () => {
  const [user_details, set_user_details] = useState({
    user_id: "",
    password: "",
    confirmPassword : ""
  });
  const [userMsg, set_userMsg] = useState("");
  const [passwordMsg, set_passwordMsg] = useState("");
  const [confirm_passMsg,setConfirm_passMsg] = useState("");
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');


  function hide_userMsg(e) {
    if (e.target.value == "") {
      set_userMsg("User Id required");
    } else {
      set_userMsg("");
    }
    console.log(e.target.value);
  }

  function hide_passwordMsg() {
    set_passwordMsg("");
  }

  function handle_user_change(e) {
    set_user_details({
      user_id: e.target.value,
      password: user_details.password,
      confirmPassword : user_details.confirmPassword
    });
  }

  function handle_password_change(e) {
    set_user_details({
      user_id: user_details.user_id,
      password: e.target.value,
      confirmPassword : user_details.confirmPassword
    });
  }

  function handle_Confirmpass_change(e){
    set_user_details({
        user_id: user_details.user_id,
        password: user_details.password,
        confirmPassword : e.target.value    
    })
  }
//   function verifyUserid(e) {
//     for (var user of users) {
//       if (user.user_id == e.target.value) {
//         set_userMsg("User ID Taken - Try another");
//         console.log("User ID Taken - Try another");
//         break;
//       } else {
//         set_userMsg("User ID Available");
//         console.log("User Availble");
//       }
//     }
//   }

  function verifyPassword(e) {
    if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
      set_passwordMsg("Strong Password");
    } else {
      if (e.target.value < 4) {
        set_passwordMsg("Poor Password");
      } else {
        set_passwordMsg("Weak Password");
      }
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }

  const verifyConfirmPass = (e) => {
    if (user_details.password != user_details.confirmPassword){
     
        setConfirm_passMsg("Password not matched")
        console.log(user_details.password,user_details.confirmPassword)
    }else{
        onSubmit(e)
        setConfirm_passMsg("Resister Successfully")
    }
  }

  const dotElement = []
  for(let i= 500 ; i < 542 ;i++){
    dotElement.push(<div className="dot"  key={i}></div>)
  }
  return (
    <>
      {/* <div className="ellipse"></div> */}
   
      <div className="login_page">
      <div className="right">
      {dotElement}
      </div>
      <div className="main_content">
                <h1 >SignUp</h1>
                <div>Create New Account</div>
                <br/>
                <form>
                    <input type="email" id="email" placeholder="Mail ID" onBlur={hide_userMsg} onChange={handle_user_change} /><br/>
                    <dd>{userMsg}</dd>
                    <input type="password" id="password" placeholder="Password" onBlur={hide_passwordMsg} onChange={handle_password_change} onKeyUp={verifyPassword}/><br/>
                    <dd>{passwordMsg}</dd>
                    <input type="password" id="confirm_password" placeholder="Confirm Password" onChange={handle_Confirmpass_change} /><br/>
               
                </form>
                <br/>
                <br/>
                <button type="button" onClick={verifyConfirmPass} className="sign-in-btn" >Sign Up</button>
                <dd>{confirm_passMsg}</dd>
            </div>
        <div className="left">{dotElement}</div>
      </div>
    </>
  );
};

export default SignUp;