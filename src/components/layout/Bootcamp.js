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
