import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBootcamp } from '../../actions/bootcampActions';
import { Formik, Form, Field } from 'formik';

// Messages
// const required = 'This field is required';
// const maxLength = 'Your input exceed maximum length';

// Error Component
// const errorMessage = (error) => {
//   return <div className="invalid-feedback">{error}</div>;
// };

// const name = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (value.length > 12) {
//     error = maxLength;
//   }
//   return error;
// };

// const email = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// };

// const phone = (value) => {
//   let error;
//   if (value.length > 20) {
//     error = maxLength;
//   }
//   return error;
// };

// const description = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   }
//   return error;
// };

// const careers = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   }
//   return error;
// };

// const housing = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   }
//   return error;
// };

const CreateBootcampForm = ({ token, createBootcamp }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        website: '',
        phone: '',
        email: '',
        address: '',
        // careers: '',
        housing: false,
        jobAssistance: false,
        jobGuarantee: false,
        acceptGi: false,
      }}
      onSubmit={(values, { resetForm }) => {
        console.log({ values, token });

        if (values === '') {
          console.log('Please fill in all the fields');
        } else {
          const newBootcamp = {
            ...values,
            date: new Date(),
          };
          createBootcamp(token, newBootcamp);

          //Clear form
          resetForm({ values: '' });
        }
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div
          className="container"
          style={{
            boxSizing: 'border-box',
            border: '1px solid red',
          }}
        >
          <div className="col-sm-12">
            <h3>Create Bootcamp</h3>
          </div>
          <div className="col-sm-12">
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="name"
                  name="name"
                  // validate={name}
                />
                {/* {errors.name && touched.name && errorMessage(errors.name)} */}
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="url"
                  placeholder="website"
                  name="website"
                />
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="tel"
                  placeholder="phone"
                  name="phone"
                  // validate={phone}
                />
                {/* {errors.phone && touched.phone && errorMessage(errors.phone)} */}
              </div>

              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  // validate={email}
                />
                {/* {errors.email && touched.email && errorMessage(errors.email)} */}
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="address"
                  name="address"
                />
                {/* {errors.address &&
                  touched.address &&
                  errorMessage(errors.address)} */}
              </div>

              {/* <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="careers"
                  name="careers"
                  // validate={careers}
                /> */}
              {/* {errors.careers &&
                  touched.careers &&
                  errorMessage(errors.careers)} */}
              {/* </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="housing"
                  name="housing" */}
              {/* validate={housing} */}
              {/* /> */}
              {/* {errors.housing &&
                  touched.housing &&
                  errorMessage(errors.housing)} */}
              {/* </div> */}

              {/* <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="jobAssistance"
                  name="jobAssistance"
                />
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="jobGuarantee"
                  name="jobGuarantee"
                />
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="acceptGi"
                  name="acceptGi"
                />
              </div> */}

              <div className="form-group">
                <Field
                  component="textarea"
                  className="form-control"
                  type="text"
                  placeholder="description"
                  name="description"
                  // validate={description}
                />
              </div>

              <div
                className="form-group"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

CreateBootcampForm.propTypes = {
  token: PropTypes.object.isRequired,
  createBootcamp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, { createBootcamp })(CreateBootcampForm);
