import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
const Signup = () => {

    const [credential, setcredential] = useState({ email: "", password: "" });
    let history = useHistory();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });
      const json = await response.json();
  
      console.log(json);
      if (json.success) {
        //save the auth token and redirect it
        localStorage.setItem("token", json.authtoken);
        history.push("/");
      } else {
        alert("Invalid credential");
      }
    };
  
    const onChange = (e) => {
      setcredential({ ...credential, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="container">
         <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange}  aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} id="password" name="password" />
  </div>
  
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="cpassword" className="form-control" onChange={onChange}  id="cpassword" name="cpassword" />
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>

        </div>
    )
}

export default Signup
