// CommentForm.js
import React from "react";
import PropTypes from "prop-types";

const CommentForm = ({
  name,
  comment,
  onChangeName,
  onChangeComment,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Nome</label>
      <br />
      <input type="text" required value={name} onChange={onChangeName} />
    </div>
    <div>
      <label>Comentário</label>
      <br />
      <textarea value={comment} required onChange={onChangeComment} />
    </div>
    <div>
      <button>Salvar</button>
    </div>
  </form>
);

CommentForm.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeComment: PropTypes.func,
  onSubmit: PropTypes.func
};

CommentForm.defaultProps = {
  name: "",
  comment: "",
  onChangeName: () => {},
  onChangeComment: () => {},
  onSubmit: () => {}
};

export default CommentForm;