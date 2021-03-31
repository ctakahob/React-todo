import React, { useContext } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".4rem 1rem",
    border: "1px solid grey",
    borderRadius: "4px",
    marginBottom: ".4rem",
  },
};

function TodoItem({ todo, index, onChange }) {
  const {removeTodo} = useContext(Context);
  return (
    <li style={styles.li}>
      <span className={` ${todo.completed ? "done" : ""} `}>
        <Checkbox
          onChange={() => onChange(todo.id)}
          defaultChecked={todo.competed}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        {index + 1}
        &nbsp;
        {todo.title}
      </span>
      <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

TodoItem.prototype = {
  todo: PropTypes.object,
  index: PropTypes.number,
  onChange: PropTypes.func,
};

export default TodoItem;
