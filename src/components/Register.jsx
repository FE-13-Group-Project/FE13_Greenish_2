import React from 'react'

function Register() {
  return (
    <div>
       <div className="container">
        <div className="row row-register">
            <center><h1 id="judul">REGISTER</h1> </center>
            <div className="col-lg-6 col-md-6 col-sm-6" id="content">
                <div className="image">
                    <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666280062/undraw_nature_on_screen_xkli_vhrtd5.svg" alt=""/>
                </div> 
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" id="content1">
                <form id="form">
                    <div className="mb-3">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="input first name"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="input last name"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">@gmail.com</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="current-password" className="form-control" id="password" placeholder="input password"/>
                      </div>
                      <div className="ask">
                        <p>Already have an account?</p>
                        <a href="loginPage.html" className="switch">Sign In</a>
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