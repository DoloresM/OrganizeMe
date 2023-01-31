import {Link} from "react-router-dom";
import Nav from './Nav.js';
// import DashHome from "./Dashboard/DashHome.js"
import Footer from './Footer.js';

{/* <form onSubmit={this.handleSubmit}>
<label>
  Name:
  <input type="text" value={this.state.value} onChange={this.handleChange} />
</label>
<input type="submit" value="Submit" />
</form> */}

 const SignIn = ()=>{
    return(
        <>
          <Nav/>
            <form className="signIn "action="" methhod="POST">
              <div>
                <label for="firstName">
                  First:
                  <input type="text" name="firstName"required />
                </label>
              </div>
              <div>
                <label for="lastName">
                  Last:
                  <input type="text" name="lastName"required />
                </label>
              </div>
              <div>
                <label for="userName">
                  Username:
                  <input type="text" name="userName"required />
                </label>
              </div>
              <div>
                <label for="email">
                  Email:
                  <input type="email" name="email" required  />
                </label>
              </div>
              <div>
                <label for="email">
                  Confirm Email:
                  <input type="email" name="email" required  />
                </label>
              </div>
              <div>
                <label for="password">
                  Password:
                  <input type="password" name="password" required  />
                </label>
              </div>
              <div>
                <label for="confirmPassword">
                confirm passoword:
                <input type="password" name="confirmPassword" required  />
                </label>
              </div>
              <div>
                <label for="birthDate">
                Date of Birth:
                <input type="date" name="birthDate" required  />
                </label>
              </div>
              <div>
                <input type="submit" value="create account" />
              </div>
          </form>
          <button><Link className="form-button" to="/Dashboard/Home">View Dashboard</Link></button>
        <Footer/>
        </>
        
    )
}

export default SignIn;