import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postUser } from '../redux/action/Action'

function Register() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const data = {
    "firstName": fname,
    "lastName": lname,
    "email": email,
    "password": pass,
    "role": 1
  }
  function handleRegis(e) {
    e.preventDefault()
    dispatch(postUser(data))
    alert("berhasil daftar !")
    nav("/login")
  }

  return (
    <div className='register-background'>
       <div className="container">
        <div className="row row-register">
            <center><h1 id="judul">REGISTER</h1> </center>
            <div className="col-lg-6 col-md-6 col-sm-6" id="content">
                <div className="image">
                    <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666280062/undraw_nature_on_screen_xkli_vhrtd5.svg" alt=""/>
                </div> 
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" id="content1">
                <form id="form" onSubmit={handleRegis}>
                    <div className="mb-3">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="input first name" value={fname} onChange={(e)=>setFname(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="input last name" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">@gmail.com</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="current-password" className="form-control" id="password" placeholder="input password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                      </div>
                      <div className="ask">
                        <p>Already have an account?</p>
                        <Link
                           to={"/login"}
                           aria-current="page"
                        >Sign In</Link>
                      </div>
                    <center><button type="submit" className="btn btn-primary">Sign Up</button></center>
                  </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register