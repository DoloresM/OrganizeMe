import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Nav from '../MainHome/MainHeader/Nav.js';
// import DashHome from "./Dashboard/DashHome.js"
import Footer from '../MainHome/Footer/Footer.js';


const SignIn = ()=>{

const [profile, setProfile] = useState([]);


const handleProfile = (event)=>{
  // let name = event.target.name;
  // let value = event.target.value
  // profile[name] = value;
  // setProfile(profile)
  console.log(event.target.value)
  console.log(event.target.name)
  };

//CAPTURE VALUE & RETURN COMPONENT
const handleSubmit = (event)=>{
  event.preventDefault()
//  console.log( ...event.currentTarget);
// console.log(event.target.value)
//  console.log(event)
}




    return(
        <>
          <Nav/>
          <h1>Create Your Account! </h1>
            <form  onSubmit={e => {handleSubmit(e)}} className="signIn "action="" methhod="POST" >
              <div> <label for="firstName">First:<input id="one" type="text" name="firstName" onChange={handleProfile}/> </label></div>
              <div> <label for="lastName">Last:<input id="two" type="text" name="lastName" onChange={handleProfile} /></label> </div>
              <div><label for="userName"> Username: <input type="text" name="userName" onChange={handleProfile}/></label></div>
              <div><label for="email">Email <input type="email" name="email" onChange={handleProfile} /> </label></div>
              <div><label for="email"> Confirm Email: <input type="email" name="email" onChange={handleProfile}  /> </label></div>
              <div><label for="password">Password:<input type="password" name="password"/></label></div>
                
              
                  
                
              
              <div>
                <label for="confirmPassword">
                confirm passoword:
                <input type="password" name="confirmPassword"  />
                </label>
              </div>
              <div>
                <label for="birthDate">
                Date of Birth:
                <input type="date" name="birthDate" onBlur={handleProfile}/>
                </label>
              </div>
              <div>
                <input type="submit" value="create account"  />
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