import "../assets/css/logincss.css";
// import KeyIcon from '@mui/icons-material/Key';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login()

{
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
  return(
    <div className="Logindiv">
          <div className="logi">
          <form>
            <div id="l1">
              <h2 id="h2id">Sign In</h2>
              
              <label id="userid"><strong>Username:</strong></label>
              <input type="name" id="uiid"required placeholder="Enter your username here"  value={username} onChange={(event)=>setUsername(event.target.value)}></input>
              </div>
              <h4 id="logh4iderror" style={{color:"red"}}>{}</h4>

              <div id="l2">
              
              <label id="passwordid"><strong>Password:</strong></label>
              <input type="password" id="piid" required placeholder="Enter your password here"  value={password} onChange={(event)=>setPassword(event.target.value)}></input>
              </div>
              <h4 id="logh4iderror" style={{color:"red"}}>{}</h4>
              <br></br>
              <button id="lbtn"><center>Sign in</center></button>
              <br></br><br></br>
              <div id="forgotpassword">Forgot Password?</div>
              <div id="l3"><h3 id="h3id"> Dont have an account ?</h3><div id="emojiid"></div></div>
              <button id="upid"><Link to="/Signuppage"><strong>SignUp</strong></Link></button>
              </form>
              
          </div>
        
    </div>
  )
}
export default Login;