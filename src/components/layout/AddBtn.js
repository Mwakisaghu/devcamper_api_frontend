import React from 'react';

const AddBtn = () => {
  return (
    <div>
      <a
        href="add-bootcamp-modal"
        className="btn-floating btn-large waves-effect waves-light red btn-small modal-trigger"
        style={{ float: 'right' }}
      >
        <i class="material-icons" title="create bootcamp">
          add
        </i>
      </a>
    </div>
  );
};

export default AddBtn;
