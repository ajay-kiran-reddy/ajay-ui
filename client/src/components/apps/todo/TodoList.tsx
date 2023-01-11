import { ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { watchDeleteTodo } from "./saga/actions";
import { deleteTodoItem, todoList } from "./saga/todoSlice";

export default function TodoList(props: any) {
  const dispatch = useDispatch();
  const todoData: any = useSelector(todoList);

  const [refreshData, setRefreshData] = useState(props.refreshData);

  useEffect(() => {
    setRefreshData(refreshData);
  }, [props.refreshData]);

  const handleDelete = (id: string) => {
    dispatch(deleteTodoItem({ id }));
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>List of Todo's</h4>

      {todoData.map((todo: any) => {
        return (
          <ListItemButton component="a">
            <ListItemText primary={todo.title} />
            <DeleteIcon onClick={() => handleDelete(todo._id)} />
          </ListItemButton>
        );
      })}
    </div>
  );
}
