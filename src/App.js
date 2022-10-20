import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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
  const handleSignout=()=>{



const auth = getAuth();
signOut(auth)
.then(() => {
  setUser({});
})
.catch((error) => {
  setUser({});
});

  }
  return (
    <div className="App">
      {
        user.email ?  <button onClick={handleSignout} >Sign Out</button>:
        <button onClick={HandleGoogleSignin} >Google Sign in</button> 
      }

     {
      user.email &&  <div>
      <h3> user Name: {user.displayName}</h3>
     <p> Email Address: {user.email}</p>
     <img src={user.photoURL} alt=""/>
     </div>
     }
      
    </div>
  );
}
export default App;
