import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Nav from '../MainHome/MainHeader/Nav.js';
// import DashHome from "./Dashboard/DashHome.js"
import Footer from '../MainHome/Footer/Footer.js';

const SignIn = ()=>{
const [profile, setProfile] = useState();


const handleProfile = (event)=>{
  let {name, value} = event.target;
 
  setProfile(existingValues => ({
    // Retain the existing values
    ...existingValues,
    // update the profile object w/ event.target "name:value" as properties
    [name]:value
  })) 
};

  console.log(profile)

  const emailConfirmation = ()=>{
    return profile.email === profile.email2 ? console.log("yes"): console.log("no")
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e);
    emailConfirmation()
    }
    
   
  


    return(
        <>
          <Nav/>
          <h1>Create Your Account! </h1>
            <form  onSubmit={handleSubmit} className="signIn "action="" methhod="POST" >
              <div> <label for="firstName">First:<input id="one" type="text" name="firstName" onChange={handleProfile} required/> </label></div>
              <div> <label for="lastName">Last:<input id="two" type="text" name="lastName" onChange={handleProfile} required /></label> </div>
              <div><label for="userName"> Username: <input type="text" name="userName" onChange={handleProfile} required /></label></div>
              <div><label for="email">Email <input type="email" name="email" placeholder="Enter a valid email address" onChange={handleProfile} required/> </label></div>
              <div><label for="email"> Confirm Email: <input type="email" name="email2"  onChange={handleProfile} required /> </label></div>
              <div><label for="password">Password:<input type="password" name="password" required/></label></div>
                
              <div>
                <label for="confirmPassword">
                confirm passoword:
                <input type="password" name="confirmPassword" required />
                </label>
              </div>
              <div>
                <label for="birthDate">
                Date of Birth:
                <input type="date" name="birthDate" onBlur={handleProfile}/>
                </label>
              </div>
              <div>
                <button type="submit">Sign Up</button>
              </div>
          </form>
          <button><Link className="form-button" to="/Dashboard/Home">View Dashboard</Link></button>
        <Footer/>
        </>
        
    )
}

export default SignIn;



{/* <form onSubmit={this.handleSubmit}>
<label>
  Name:
  <input type="text" value={this.state.value} onChange={this.handleChange} />
</label>
<input type="submit" value="Submit" />
</form> */}