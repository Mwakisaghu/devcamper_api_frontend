import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Bootcamp = () => {
  return <div>bootcamp</div>;
};

Bootcamp.propTypes = {
  bootcamp: PropTypes.object.isRequired,
  getBootcamps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bootcamp: state.bootcamp,
});

export default connect(mapStateToProps)(Bootcamp);
