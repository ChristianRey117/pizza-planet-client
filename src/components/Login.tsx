const Login = () => {
  return (
    <div id="root">
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-column flex-lg-row flex-column-fluid"
          id="kt_login"
        >
          <div className="d-flex flex-column flex-lg-row-auto bg-primary w-lg-600px pt-15 pt-lg-0">
            <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15 text-center">
              <a className="mb-6" href="/start-react/">
                {/* <img alt="Logo" src="logo.svg" className="h-75px"> */}
              </a>
              <h3 className="fw-bolder fs-2x text-white lh-lg">
                Discover Start
                <br />
                with great build tools
              </h3>
            </div>
            <div className="d-flex flex-row-fluid bgi-size-contain bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-350px"></div>
          </div>
          <div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-20 px-10 p-lg-7 mx-auto mw-450px w-100">
            <div className="d-flex flex-column-fluid flex-center py-10">
              <form className="form w-100" id="kt_login_signin_form">
                <div className="pb-lg-15">
                  <h3 className="fw-bolder text-dark display-6">
                    Welcome to Start
                  </h3>
                  <div className="text-muted fw-bold fs-3">
                    New Here?{" "}
                    <a
                      className="text-primary fw-bolder"
                      id="kt_login_signin_form_singup_button"
                      href="/start-react/auth/registration"
                    >
                      Create Account
                    </a>
                  </div>
                </div>

                <div className="v-row mb-10 fv-plugins-icon-container">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    autoComplete="off"
                    value="admin@demo.com"
                  />
                </div>
                <div className="fv-row mb-10 fv-plugins-icon-container">
                  <div className="d-flex justify-content-between mt-n5">
                    <label className="form-label fs-6 fw-bolder text-dark pt-5">
                      Password
                    </label>
                    <a
                      className="text-primary fs-6 fw-bolder text-hover-primary pt-5"
                      id="kt_login_signin_form_password_reset_button"
                      href="/start-react/auth/forgot-password"
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    className="form-control form-control-lg form-control-solid"
                    value="demo"
                  />
                </div>
                <div className="pb-lg-0 pb-5">
                  <button
                    type="submit"
                    id="kt_login_signin_form_submit_button"
                    className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
                  >
                    <span className="indicator-label">Sign In</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center align-items-center py-7 py-lg-0">
              <span className="text-primary fw-bolder fs-4 cursor-pointer">
                Terms
              </span>
              <span className="text-primary ms-10 fw-bolder fs-4">Plans</span>
              <span className="text-primary ms-10 fw-bolder fs-4">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
