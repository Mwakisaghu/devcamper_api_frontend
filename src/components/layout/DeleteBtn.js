import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { deleteBootcamp } from '../../actions/bootcampActions';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteBtn = ({ deleteBootcampAction, token, _id }) => {
  const dispatch = useDispatch();

  //OnDelete
  const confirm = async (e) => {
    console.log(e);
    e.preventDefault();

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
      message.success('Bootcamp successfully deleted!');
    }
  };

  const cancel = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Button size="small">
        <Popconfirm
          title="Do you want to delete this bootcamp?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <i
            class="material-icons"
            style={{ color: 'red', zIndex: 10 }}
            title="delete"
          >
            delete
          </i>
        </Popconfirm>
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
