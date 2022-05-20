import React from 'react';
import { Button } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { deleteBootcamp } from '../../actions/bootcampActions';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteBtn = ({ deleteBootcampAction, token, _id }) => {
  const dispatch = useDispatch();

  const onDelete = async (e) => {
    e.preventDefault();

    console.log(token, _id);

    const res = await axios({
      method: 'delete',
      url: `/api/v1/bootcamps/${_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log({ res });
    if (res.status === 200) {
      dispatch(deleteBootcamp(_id));
    }
  };

  return (
    <div>
      <Button size="small" onClick={(e) => onDelete(e)}>
        <i
          class="material-icons"
          style={{ color: 'red', zIndex: 10 }}
          title="delete"
        >
          delete
        </i>
      </Button>
    </div>
  );
};

DeleteBtn.propTypes = {
  deleteBootcamp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, {
  deleteBootcampAction: deleteBootcamp,
})(DeleteBtn);
