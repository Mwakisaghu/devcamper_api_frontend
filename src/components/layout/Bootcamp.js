import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBootcamps } from '../../actions/bootcampActions';

const Bootcamp = () => {
  return <div></div>;
};

Bootcamp.propTypes = {
  bootcamp: PropTypes.object.isRequired,
  getBootcamps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bootcamp: state.bootcamp,
});

export default connect(mapStateToProps, { getBootcamps })(Bootcamp);
