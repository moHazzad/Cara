import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

function Login() {
  const [errorMes, setErrorMes] = useState("");
  const { user, signInUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("welcome");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMes(errorMessage);
      });
    form.reset();
  };

  useEffect(() => {
    if (user) {
      navigate(location.state?.pathname || "/");
    }
  }, [user]);

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <Link to={"/register"}>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Don't Have an account?
                  </a>
                </label>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-red-500">{errorMes}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
