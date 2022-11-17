import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../redux/action/Action';


function Login() {
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData());
  }, []);

  function cekLogin() {

    for (let index = 0; index < users.length; index++) {
      if (users[index].email == email && users[index].password == pass) {
         return(users[index]) 
      }
      
    }
  }

  function handleLogin(e) {
    e.preventDefault()
    cekLogin()
    if (cekLogin() == undefined) {
      alert("Data tidak ditemukan, pastikan password dan email sudah benar")
    }else{
      localStorage.setItem('id_user',cekLogin().id)
      localStorage.setItem('role_user',cekLogin().role)
      localStorage.setItem('isLogin',true)
      nav("/")
    }
  }

  
  return (
    <div style={{padding:"40px"}}>
      <div className="box" style={{margin:'auto',maxWidth:'400px',height:'300px'}}>
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            required
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <button onClick={()=>nav('/register')}>Register</button>
        </div>
      </form>
    </div>
      </div>
    </div>
  )
}

export default Login