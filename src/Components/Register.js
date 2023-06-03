import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addSinghTek } from './Service/Api';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const FormData = require("form-data");
export default function Register() {

    const [username, setusername] = useState("");
    const [department, setdepartment] = useState("");
    const [first_name, setfirst_name] = useState("");
    const [email, setemail] = useState("");
    const [designation, setdesignation] = useState("");
    const [user_type, setuser_type] = useState("");
    const [last_name, setlast_name] = useState("");
    const [password, setpassword] = useState("");
    const [mobile_no, setmobile_no] = useState("");
    const [image, setimage] = useState("");
    const [docsFile, setdocsFile] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        switch (e.target.name) {
            case "username":
                setusername(e.target.value);
                break;
            case "department":
                setdepartment(e.target.value);
                break;
            case "first_name":
                setfirst_name(e.target.value);
                break;
            case "email":
                setemail(e.target.value);
                break;
            case "designation":
                setdesignation(e.target.value);
                break;
            case "user_type":
                setuser_type(e.target.value);
                break;
            case "last_name":
                setlast_name(e.target.value);
                break;
            case "password":
                setpassword(e.target.value);
                break;
            case "mobile_no":
                setmobile_no(e.target.value);
                break;
            case "image":
                setimage(e.target.value);
                break;
            case "docsFile":
                setdocsFile(e.target.value);
                break;
            default: ;

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, department, first_name)
        const userData = {
            username,
            department,
            department,
            email,
            designation,
            user_type,
            last_name,
            image,
            docsFile,
            password,
            mobile_no

        }
        console.log(userData)

        const result = await addSinghTek(userData);
        if (result != "error") {
            navigate("/Login");
        }

    };
    return (
        <div>
            <div classname="wrapper">
                <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                            <div className="col mx-auto">
                                <div className="my-4 text-center">
                                    {/* <Link to="">
                                        <img
                                            src="assets/images/justapay.png"
                                            className="logo-text"
                                            alt="logo icon"
                                        />
                                    </Link> */}

                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border p-4 rounded">
                                            <div className="text-center">
                                                <h3 className>Sign Up</h3>
                                                <p>
                                                    Already have an account?{' '}
                                                    <Link to="../Login">Sign in here</Link>
                                                </p>
                                            </div>

                                            <div className="form-body">
                                                <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            User Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="username"
                                                            placeholder="Enter Username"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            // id="customername"
                                                            name="first_name"
                                                            required
                                                            placeholder="Enter First Name"
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            // id="username"
                                                            name="last_name"
                                                            placeholder="Enter Last name"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <div className="input-group" id="show_hide_password">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                // id="inputChoosePassword"
                                                                placeholder="Enter Email"
                                                                name="email"
                                                                required
                                                                onChange={handleChange}
                                                            />{' '}


                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Passwrod
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            // id="DebitAccountNumber"
                                                            name="password"
                                                            placeholder="Enter Password"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Designation
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            // id="DebitAccountNumber"
                                                            name="designation"
                                                            placeholder="Enter Designation"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Mobile No
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            // id="productCode"
                                                            name="mobile_no"
                                                            required
                                                            placeholder="Enter Mobile No"
                                                            onChange={handleChange}
                                                            maxLength="10"
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Dealer Code
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="dealerCode"
                                                            placeholder="Enter Dealer Code"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            Department
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="department"
                                                            placeholder="Enter Department"
                                                            required
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="form-label">
                                                            User Type
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="user_type"
                                                            placeholder="Enter User Type"
                                                            required
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">

                                                        <label for="formFileMultiple" class="form-label">Image</label>
                                                        <input class="form-control" type="file" id="formFileMultiple" name="docs"
                                                            onChange={handleChange} />

                                                    </div>
                                                    <div className="col-sm-6">

                                                        <label for="formFileMultiple" class="form-label">Docs File</label>
                                                        <input class="form-control" type="file" id="formFileMultiple" name="docsFile"
                                                            onChange={handleChange} />

                                                    </div>


                                                    <div className="col-12">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckChecked"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                            >
                                                                I read and agree to Terms &amp; Conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button type="submit" className="btn btn-light">
                                                                <i className="bx bx-user" />
                                                                Sign up
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
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
    )
};

// export default Register