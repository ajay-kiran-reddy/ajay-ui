import { Grid, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodoList from "./TodoList";
import axios from "axios";
import { ADD_TODO, API_END_POINT } from "../../../constants/apiKeys";
import { useDispatch, useSelector } from "react-redux";
import { snackBar, storeSnackBarData } from "../../../features/sharedUiSlice";
import SnackBar from "../../shared/SnackBar";
import { addTodoItem, storeTodoList } from "./saga/todoSlice";
import { watchAddTodo, watchTodoList } from "./saga/actions";

export const Todo: React.FC<{}> = () => {
  const [todoItem, setToDoItem] = useState("");
  const [todoList, setTodoList] = useState<Array<String>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(watchTodoList());
  }, []);

  const handleAddTodo = () => {
    dispatch(addTodoItem({ title: todoItem }));
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Add Todo"
                variant="outlined"
                onChange={(e) => setToDoItem(e.target.value)}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="outlined"
                startIcon={<AddCircleIcon />}
                onClick={() => handleAddTodo()}
              >
                Add
              </Button>
            </Grid>
          </Grid>

          <TodoList />
        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>
      {/* TODO LIST */}
    </>
  );
};
