import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userLoginActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ user, loginUser }) => {
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token !== null) {
      return navigate('/Home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  return (
    <div className="form-container">
      <h1>
        Account Login <span className="text-primary">Login</span>
      </h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          loginUser(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { loginUser })(Login);
