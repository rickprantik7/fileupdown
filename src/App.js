import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from "./Firebase";
import File from './File';
import { useState } from 'react';

function App() {
  const [val, setval] = useState(localStorage.getItem("email"));
  return (
    <div className="App">
       
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      {val ?<File/>:
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
}
      
    </div>
  );
}

export default App;
