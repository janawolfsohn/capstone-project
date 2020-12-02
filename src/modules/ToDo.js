import PropTypes from "prop-types";
import styled from "styled-components/macro";
export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
};

function Todo({ title, isDone, onToggleTodo, onDelete }) {
  return (
    <Wrapper>
      <label>
        <BigCheckbox type="checkbox" checked={isDone} onChange={onToggleTodo} />
        <span>{title}</span>
      </label>

      <span className="Todo__delete" onClick={onDelete}>
        &times;
      </span>
    </Wrapper>
  );
}

const BigCheckbox = styled.input`
  transform: scale(1.5);
  margin-right: 10px;
`;

const Wrapper = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  .Todo__delete {
    padding: 0.5em;
  }
`;
