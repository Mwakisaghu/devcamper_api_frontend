import React from 'react';

const CreateBtn = () => {
  return (
    <div>
      <a
        href="/create"
        className="btn-floating btn-large waves-effect waves-light red btn-small modal-trigger "
        style={{ float: 'right' }}
      >
        <i class="material-icons" title="create bootcamp">
          add
        </i>
      </a>
    </div>
  );
};

export default CreateBtn;
