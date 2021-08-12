import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button } from 'react-bootstrap';

const API_URL = "https://cmr-api.herokuapp.com/register";

const RegistrationForm = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '', firstname: '', lastname: '' }}
      validate={values => {
        const errors = {};

        if (!values.lastname) {
          errors.lastname = "Required"
        } if (!values.firstname) {
          errors.firstname = "Required"
        }
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

        console.log(values.email);

        try {
          const { firstname, lastname, email, password, role } = values;
          await axios.post(API_URL, {
            firstname,
            lastname,
            email,
            password, role
          });
        } catch (err) {
          console.error(err);
        }
        resetForm({ values: '' })
      }}
    >
      {() => (
        <Container className="container">

          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form>
            <label>First Name :  </label><br /><br />
            <Field type="text" name="firstname" />
            <ErrorMessage name="firstname" /><br /><br />
            <label>Last Name :  </label><br /><br />
            <Field type="text" name="lastname" />
            <ErrorMessage name="lastname" />
            <br /><br />

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
            <Button type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  </div>
);

export default RegistrationForm;