import React from 'react';
import { Link } from 'react-router-dom';

const CreateBtn = () => {
  return (
    <div>
      <Link
        to="/create"
        className="btn-floating btn-large waves-effect waves-light red btn-small modal-trigger "
        style={{ float: 'right' }}
      >
        <i class="material-icons" title="create bootcamp">
          add
        </i>
      </Link>
    </div>
  );
};

export default CreateBtn;
