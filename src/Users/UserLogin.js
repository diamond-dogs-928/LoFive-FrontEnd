function UserLogin() {
    return (
      <div className="UserLogin">
            <form>
                
                <label>
                    <p>UserName</p>
                    <input type='text' >type in username</input>
                </label>
                <label>
                    <p>Password</p>
                    <input type='password'></input>
                </label>
                <div>
                    <button type="submit" onClick='submit'>submit</button>            
                </div>
            </form>
      </div>
    );
  }
  
  export default UserLogin;
  