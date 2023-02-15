import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Nav from './Nav.js';
// import DashHome from "./Dashboard/DashHome.js"
import Footer from './Footer.js';



// const [ingredients, setIngredients] = useState([]);
// useEffect(() => {
//   getList().then(ingredients => {
//     setIngredients(ingredients)
//      console.log(ingredients);
//   }); 
// },[]); 

//COLLECT DATA

// this.setState(prevState => {
//   let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
//   jasper.name = 'someothername';                     // update the name property, assign a new value                 
//   return { jasper };                                 // return new object jasper object
// })

// let jasper = { ...prevState.jasper };


const SignIn = ()=>{

const [profile, createProfile] = useState({});
console.log(profile);

// objectName[expression]   // x = "age"; person[x]

const report = (event)=>{
  let name = event.target.name;
  let value = event.target.value
  profile[name] = value;
  console.log(profile);
  return profile;

  

  // createProfile(profile[name] = value) <-- creates bug in assigning new property to previous string as property

  };







// const dynamic1 = "Age";
// const dynamic2 = "Marks";
// const user = {
//                 Name : "GeeksForGeeks",
//                 [dynamic1] : "57",
//                 [dynamic2] : "42"
//               };

// console.log(user);


// const [ingredients, setIngredients] = useState([]);
// useEffect(() => {
//   getList().then(ingredients => {
//     setIngredients(ingredients)
//      console.log(ingredients);
//   }); 
// },[]); 




 


    return(
        <>
          <Nav/>
          <h1>Create Your Account! </h1>
            <form  className="signIn "action="" methhod="POST" >
              <div>
                <label for="firstName">
                  First:
                  <input id="one" type="text" name="firstName" onBlur={report}  />
                </label>
              </div>
              <div>
                <label for="lastName">
                  Last:
                  <input id="two" type="text" name="lastName" onBlur={report} />
                </label>
              </div>
              <div>
                <label for="userName">
                  Username:
                  <input type="text" name="userName" onBlur={report}/>
                </label>
              </div>
              <div>
                <label for="email">
                  Email:
                  <input type="email" name="email" onBlur={report} />
                </label>
              </div>
              <div>
                <label for="email">
                  Confirm Email:
                  <input type="email" name="email" onBlur={report}  />
                </label>
              </div>
              <div>
                <label for="password">
                  Password:
                  <input type="password" name="password"   />
                </label>
              </div>
              <div>
                <label for="confirmPassword">
                confirm passoword:
                <input type="password" name="confirmPassword"  />
                </label>
              </div>
              <div>
                <label for="birthDate">
                Date of Birth:
                <input type="date" name="birthDate" onBlur={report}/>
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