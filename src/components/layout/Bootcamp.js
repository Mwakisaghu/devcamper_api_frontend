import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBootcamps } from '../../actions/bootcampActions';

import 'antd/dist/antd.css';

const Bootcamp = ({ token, bootcamps, getBootcampsAction }) => {
  console.log({ bootcamps, token });

  useEffect(() => {
    if (token !== null) {
      getBootcampsAction(token);
    }
    /* eslint-disable */
  }, [token]);

  const data = [
    {
      _id: '5d713995b721c3bb38c1f5d0',
      user: '5d7a514b5d2c12c7449be045',
      name: 'Devworks Bootcamp',
      description:
        'Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer',
      website: 'https://devworks.com',
      phone: '(111) 111-1111',
      email: 'enroll@devworks.com',
      address: '233 Bay State Rd Boston MA 02215',
      careers: ['Web Development', 'UI/UX', 'Business'],
      housing: true,
      jobAssistance: true,
      jobGuarantee: false,
      acceptGi: true,
    },
  ];

  return <div></div>;
};

Bootcamp.propTypes = {
  token: PropTypes.object.isRequired,
  getBootcamps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
  bootcamps: state.bootcamp.bootcamps,
});

export default connect(mapStateToProps, { getBootcampsAction: getBootcamps })(
  Bootcamp
);
