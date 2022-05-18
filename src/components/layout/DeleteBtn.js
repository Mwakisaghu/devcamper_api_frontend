import React from 'react';
import { Button } from 'antd';

const DeleteBtn = () => {
  return (
    <div>
      <Button size="small">
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

export default DeleteBtn;
