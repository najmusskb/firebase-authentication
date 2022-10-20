import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth=getAuth(app)
function App() {
  const [user,setUser]=useState({})
  const provider = new  GoogleAuthProvider();
  const HandleGoogleSignin= ()=>{
    // console.log('Google comming');
    signInWithPopup(auth, provider)
    .then(result =>{
      const user=result.user;
      setUser(user)
      console.log(user);
    })
    .catch(error=>{
      console.log.error('error',error);
    })
  }
  return (
    <div className="App">
      <button onClick={HandleGoogleSignin} >Google Sign in</button>
      <div>
        user Name: {user.displayName}
      </div>

      <div>
        Email Address: {user.email}
      </div>
      <img src={user.photoURL} alt=""/>
      
    </div>
  );
}
export default App;
