import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
  <div class="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control"name="password" id="password"/>
  </div>
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
        </div>
    )
}

export default Login
