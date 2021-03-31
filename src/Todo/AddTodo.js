import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="standard-basic"
        label="Добавьте задачу"
        value={value}
        onChange={(Event) => setValue(Event.target.value)}
      />
      <Button type='submit' variant="contained" color="primary">
        Новая задача
      </Button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func,
};

export default AddTodo;
