import Nav from './Nav.js';

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
        <form >
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required  />
        </label>
        <label>
        <label>
          Password:
          <input type="date" required  />
        </label>
        <label>
          confirm passoword:
          <input type="date" required  />
        </label>
          Date of Birth:
          <input type="date" required  />
        </label>

        <input type="submit" value="Submit" />
      </form>
        </>
        
    )
}

export default SignIn;