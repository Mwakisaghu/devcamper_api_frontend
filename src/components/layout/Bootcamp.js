import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBootcamps } from '../../actions/bootcampActions';
import DeleteBtn from '../layout/DeleteBtn';

import 'antd/dist/antd.css';
import { Card } from 'antd';

const Bootcamp = ({ token, bootcamps, getBootcampsAction }) => {
  console.log({ bootcamps, token });

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      return navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (token !== null) {
      getBootcampsAction(token);
    }
    /* eslint-disable */
  }, [token]);

  const { Meta } = Card;

  const { data } = bootcamps;
  console.log({ data, bootcamps });

  const renderData = data?.map((bootcamp) => (
    <Card
      className="gutter-row"
      key={bootcamp.id}
      title={bootcamp.name}
      style={{ marginTop: 16 }}
      extra={<DeleteBtn />}
    >
      <p>
        <li key={bootcamp.id}>AvCost: ${bootcamp.averageCost}</li>
        <li key={bootcamp.id}>Description: {bootcamp.description}</li>
        <li key={bootcamp.id}>Careers: {bootcamp.careers}</li>
      </p>
    </Card>
  ));
  console.log(renderData);

  return (
    <div className="site-card-border-less-wrapper">
      <Card>
        <>{renderData && <>{renderData}</>}</>
      </Card>
    </div>
  );
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
