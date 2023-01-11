import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../shared/Appbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Apps() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pageLayout">
        <Card sx={{ minWidth: 275, maxWidth: "500px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              TODO list
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              List of todo items
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              onClick={() => navigate("/apps/todo")}
            >
              Open
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
