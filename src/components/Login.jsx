import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../redux/action/Action";

function Login() {
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const nav = useNavigate();
   const dispatch = useDispatch();
   const { users } = useSelector((state) => state);

   useEffect(() => {
      dispatch(getData());
   }, []);

   function cekLogin() {
      for (let index = 0; index < users.length; index++) {
         if (users[index].email == email && users[index].password == pass) {
            return users[index];
         }
      }
   }

   function handleLogin(e) {
      e.preventDefault();
      cekLogin();
      if (cekLogin() == undefined) {
         alert("Data tidak ditemukan, pastikan password dan email sudah benar");
      } else {
         localStorage.setItem("id_user", cekLogin().id);
         localStorage.setItem("role_user", cekLogin().role);
         localStorage.setItem("isLogin", true);
         nav("/");
      }
   }

   return (
      <div>
         <div className="container">
            <div className="row row-register">
               <center>
                  <h1 id="judul">LOGIN</h1>{" "}
               </center>
               <div className="col-lg-6 col-md-6 col-sm-6" id="content">
                  <div className="image">
                     <img
                        src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666281729/undraw_regain_focus_ecvj_o5lscs.svg"
                        alt=""
                     />
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-6 col-12" id="content1">
                  <form id="form" className="Auth-form" onSubmit={handleLogin}>
                     <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                           Email
                        </label>
                        <input
                           required
                           type="email"
                           className="form-control mt-1 input-form-login"
                           placeholder="Enter email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                           password
                        </label>
                        <input
                           required
                           type="password"
                           className="form-control mt-1 input-form-login"
                           placeholder="Enter password"
                           value={pass}
                           onChange={(e) => setPass(e.target.value)}
                        />
                     </div>
                     <div className="ask">
                        <p className="forgot-password text-right mt-2">
                           Forgot <a href="#">password?</a>
                        </p>
                        <div >Dont have an account?</div>
                        <Link to={"/register"} aria-current="page">
                           Register
                        </Link>
                        {/* <button onClick={() => nav("/register")}>
                           Register
                        </button> */}
                     </div>
                     <center>
                        <button
                           type="submit"
                           className="btn btn-primary btn-block"
                        >
                           Sign in
                        </button>
                     </center>
                  </form>
               </div>
            </div>
         </div>
      </div>

      // <div style={{ padding: "40px" }}>
      //    <div
      //       className="box"
      //       style={{ margin: "auto", maxWidth: "400px", height: "300px" }}
      //    >
      //       <div className="Auth-form-container">
      //          <form className="Auth-form" onSubmit={handleLogin}>
      //             <div className="Auth-form-content">
      //                <h3 className="Auth-form-title">Sign In</h3>
      //                <div className="form-group mt-3">
      //                   <label>Email address</label>
      //                   <input
      //  required
      //  type="email"
      //  className="form-control mt-1"
      //  placeholder="Enter email"
      //  value={email}
      //  onChange={(e) => setEmail(e.target.value)}
      //                   />
      //                </div>
      //                <div className="form-group mt-3">
      //                   <label>Password</label>
      //                   <input
      //  required
      //  type="password"
      //  className="form-control mt-1"
      //  placeholder="Enter password"
      //  value={pass}
      //  onChange={(e) => setPass(e.target.value)}
      //                   />
      //                </div>
      //                <div className="d-grid gap-2 mt-3">
      //                   <button type="submit" className="btn btn-primary">
      //                      Submit
      //                   </button>
      //                </div>
      //  <p className="forgot-password text-right mt-2">
      //     Forgot <a href="#">password?</a>
      //  </p>
      //  <button onClick={() => nav("/register")}>Register</button>
      //             </div>
      //          </form>
      //       </div>
      //    </div>
      // </div>
   );
}

export default Login;
