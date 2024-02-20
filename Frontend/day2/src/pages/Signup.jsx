
// import Input from '@mui/material/Input';
import { Link } from 'react-router-dom';
// import { Login } from './Login';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
// import KeyIcon from '@mui/icons-material/Key';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react';
import '../assets/css/signupcss.css';
function Signuppage()
{
    const[name,setName]=useState('');
    const[emailid,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[contact,setContact]=useState('');
    const [err,setErr]=useState([]);
    function validate(e)
    {
        e.preventDefault();
        var currerr=[];
        if(name.length<3)
        {
            currerr.name="Please enter a valid name";
        }
        if(emailid.length<7)
        {
                currerr.emailid="Please enter a valid email";
        }
        if(password.length<8)
        {
            currerr.password="Password length should be greater than 8";
        }
        if(contact.length>10)
        {
            currerr.contact="Check your mobile number";
        }
        setErr(currerr);
    }
    return(
        <div className="signupdiv">

            <div className="sform">
        <form onSubmit={validate}>
        <h2 id ="h2id">Signup Here</h2>
            <div className="dc-1">
              <div id="t1" >  
            {/* <PermIdentityIcon/> */}
            <label id="sname"><strong>Name</strong></label>
                <input type="name" id="siname" required placeholder="Enter your name here..." value={name} onChange={(event)=>setName(event.target.value)}  ></input>
               </div>
                <h4 id="h4nameiderror" style={{color:"red"}}>{err.name}</h4>
                <div id="t2">  
                {/* <MailOutlineIcon/> */}
                <label id="semail"><strong>Email-ID</strong></label>
                <br></br>  
                <input type="email"id="siemail" required placeholder="Enter your email here..." value={emailid} onChange={(event)=>setEmail(event.target.value)}></input>
                </div>
                <h4 id="h4idemailerror" style={{color:"red"}}>{err.emailid}</h4>
                <div id="t3">  
                {/* <KeyIcon/> */}
                <label id="spassword"><strong>Password</strong></label>
                <br></br>   
                <input type="password" id="sipassword" required placeholder="Set your password " value={password} onChange={(event)=>setPassword(event.target.value)}></input>
                </div>
                <h4 id="h4idpswderror" style={{color:"red"}}>{err.password}</h4>
                <div id="t4">  
                {/* <ContactPageIcon /> */}
                <label id="scontact"><strong>Contact</strong></label>
                <input type="tel" id="sicontact" required placeholder="Enter your mobile number " value={contact} onChange={(event)=>setContact(event.target.value)} name="phone" /><br/>
                </div>
                <h4 id="h4idcontacterror" style={{color:"red"}}>{err.contact}</h4><br/>
                <button id="bid">Signup</button>
                <div id="move">Already have an Account?</div>
                <Link to="/Login">
                <button id="sbtn" >Sign in</button></Link>
            </div>
        </form>
        </div>
        </div>
    );
}
export default Signuppage;