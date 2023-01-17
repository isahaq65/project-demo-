import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    registration: '',
    department: '',
    password: '',
    role: '',
  });

  let name, value;

  const handleInputs = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
   // console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, email, department, registration, password, role } = user;
    try {
      const { data } = await axios.post('/user/signup', {
        name,
        email,
        role,
        regNo: registration,
        dept: department,
        password,
      });
      console.log(data);
      window.alert('registration successfull');
      navigate('/signin');

      // ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      window.alert(err);
    }
  };

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate(redirect);
  //     }
  //   }, [navigate, redirect, userInfo]);
  // }

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <MDBContainer>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
              <MDBCol col="12">
                <MDBCard
                  className="bg-white my-4 mx-auto"
                  style={{ borderRadius: '1rem', maxWidth: '500px' }}
                >
                  <MDBCardBody className="p-5  w-100 d-flex flex-column">
                    <div className="header-signup">
                      <div className="logo"></div>
                      <div className="">
                        <h2
                          className="fw-bold mb-2 text-center"
                          style={{ color: '#059669' }}
                        >
                          SUST Clearance System
                        </h2>
                      </div>
                    </div>
                    <h2 className="header-text">Sign Up</h2>
                    <p className="text-white-50 mb-3"></p>
                    <MDBInput
                      wrapperClass="mb-4 w-100 mt-4"
                      label="Name"
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleInputs}
                      size="lg"
                    />

                    <MDBInput
                      wrapperClass="mb-4 w-100 mb-4 "
                      label="Email address"
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleInputs}
                      size="lg"
                    />
                    <Form.Select
                      size="lg"
                      name="role"
                      placeholder="Role"
                      onChange={handleInputs}
                    >
                      {' '}
                      <option value="" disabled selected>
                        Role
                      </option>
                      <option>student</option>
                      <option>controler</option>
                      <option>medical Officer</option>
                      <option>proctor</option>
                    </Form.Select>

                    <MDBInput
                      wrapperClass="mb-4 w-100 mt-4 "
                      label="Registration"
                      id="registration"
                      type="text"
                      name="registration"
                      onChange={handleInputs}
                      size="lg"
                    />
                    <Form.Select
                      size="lg"
                      name="department"
                      placeholder="Departmet"
                      onChange={handleInputs}
                    >
                      <option>CSE</option>
                      <option>EEE</option>
                      <option>SWE</option>
                      <option>ME</option>
                    </Form.Select>
                    <MDBInput
                      wrapperClass="mb-4 w-100 mt-4"
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleInputs}
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Retype password"
                      id="formControlLg2"
                      type="password"
                      size="lg"
                    />

                    <MDBBtn size="lg" onClick={submitHandler}>
                      Register
                    </MDBBtn>

                    <hr className="my-4" />
                    <div>
                      <p className="mb-0">
                        I have an account? <Link to="/signin">Sign In</Link>
                      </p>
                    </div>

                    {/* <MDBBtn
                      className="mb-2 w-100"
                      size="lg"
                      style={{ backgroundColor: '#dd4b39' }}
                    >
                      <MDBIcon fab icon="google" className="mx-2" />
                      Sign in with google
                    </MDBBtn>

                    <MDBBtn
                      className="mb-4 w-100"
                      size="lg"
                      style={{ backgroundColor: '#3b5998' }}
                    >
                      <MDBIcon fab icon="facebook-f" className="mx-2" />
                      Sign in with facebook
                    </MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Signup;
