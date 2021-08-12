import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import UserDetails from "../Pages/UserDetails";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button } from 'react-bootstrap';

const API_URL = "https://cmr-api.herokuapp.com/login";

const LoginForm = () => (
  <div>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = "Required"
        }
        return errors;
      }
      }
      onSubmit={async (values, { resetForm }) => {
        console.log(values);

        try {
          const { email, password, role } = values;
          await axios.post(API_URL, {
            email,
            password,
            role
          });
        } catch (err) {
          console.error(err);
        }

        resetForm({ values: '' })
        // redirectUserPage(
        //   <Link to="UserDetails"></Link>
        // )
      }}
    >
      {() => (

        <Container className="container">

          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form className="Form">
            <label>Email id :  </label><br /><br />
            <Field type="email" name="email" />
            <ErrorMessage name="email" /><br /><br />
            <label>Password :  </label><br /><br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" /><br /><br />
            <label>Role :  </label><br /><br />
            <label>
              <Field type="radio" name="role" value="Admin" />
              Admin
            </label>
            <label>
              <Field type="radio" name="role" value="Manager" />
              Manager
            </label>
            <label>
              <Field type="radio" name="role" value="Employee" />
              Employee
            </label>
            <br /><br />
            <Link to="/forgotpassword">Forgot Password</Link><br /><br />
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  </div>
);

export default LoginForm;