import React, { useState } from "react";
import { LoginSinghTek } from "./Service/Api";
import { Link } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userType, setusertype] = useState("Singhtek Users");
  const loginIn = useSignIn();
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const navigate = useNavigate();
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setemail(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);
        break;
      case "selectuser":
        setusertype(e.target.value);
        break;
      default:
    }
  };

  const submitform = async () => {
    console.log(email, password.userType);
    const userData = {
      email,
      password,
    };
    console.log(userData);
    try {
      const result = await LoginSinghTek(userData, userType);
      if (result != "error") {
        loginIn({
          token: result,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { isAuthenticated: true },
        });
        navigate("/");
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="mb-4 text-center">
                  <img
                    src="assets/images/justapay.png"
                    className="logo-text"
                    alt="logo icon"
                    width={180}
                  />
                  {/* <img src="assets/images/logo-img.png" width={180} alt /> */}
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="form-body">
                        <form
                          className="row g-3"
                          onSubmit={handleSubmit(submitform)}
                        >
                          <div className="text-center">
                            <label className="form-label fw-bold fs-4 mb-2 text-muted d-block ">
                              Sign in
                            </label>
                          </div>
                          <div className="col-12">
                            <label
                          
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                              name="email"
                              onChange={handleChange}
                              required

                            />
                          </div>
                          <div className="col-12">
                            <label
                    
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <div
                              className="input-group password"
                              id="show_hide_password"
                            >
                              <input
                                type="password"
                                className="form-control border-end-0"
                                id="inputChoosePassword"
                                defaultValue={12345678}
                                onChange={handleChange}
                                name="password"
                                placeholder="Enter Password"
                              />{" "}
                              <Link to="" className="input-group-text bg-transparent">
                                <i className="bx bx-hide" />
                              </Link>

                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                          
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>

                          <div className="mb-3">

                            <select
                              className="single-select select2-hidden-accessible form-control"
                              data-select2-id={1}
                              tabIndex={-1}
                              aria-hidden="true"
                              onChange={handleChange}
                              name="selectuser"
                            >
                              <option value="Singhtek Users" data-select2-id={1}>
                                Select
                              </option>
                              <option value="Singhtek Users" data-select2-id={2}>
                                Singhtek Users
                              </option>
                              <option value="Merchants" data-select2-id={3}>
                                Merchants
                              </option>

                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                              dir="ltr"
                              data-select2-id={2}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-2yzs-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-2yzs-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Afghanistan"
                                  >

                                  </span>
                                  <span className="select2-selection__arrow" role="presentation">
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                          </div>



                          <div className="col-md-6 text-end">
                            {" "}
                            <a href="authentication-forgot-password.html ">
                              Forgot Password ?
                            </a>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                              >
                                {isSubmitting && (
                                  <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <i className="bx bxs-lock-open" />
                                Sign in
                              </button>
                            </div>
                          </div>
                        </form>
                        <div className="text-center">
                          <p>
                            Don't have an account yet?{" "}
                            {/* <Link to="../Register">Sign up here</Link> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
