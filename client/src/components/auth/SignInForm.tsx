import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import { API_END_POINT, LOGIN } from "../../constants/apiKeys";
import { useNavigate } from "react-router-dom";
import { storeUserDetails } from "../../features/authReducer";
import { useDispatch } from "react-redux";

interface Props {}

function SignInForm(props: Props) {
  const {} = props;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [signInResponse, setSignInResponse] = useState({ message: "" });
  const [errResponse, setErrResponse] = useState({ message: "" });

  const handleSignIn = () => {
    axios
      .post(`${API_END_POINT}${LOGIN}`, formData)
      .then((resp) => setSignInResponse(resp.data))
      .catch((err) => setErrResponse(err.response.data))
      .finally(() => setOpen(true));
  };

  console.log(errResponse, signInResponse, "[errResponse]");

  useEffect(() => {
    if (signInResponse?.message) {
      dispatch(storeUserDetails(signInResponse));
      navigate("/home");
    }
  }, [signInResponse]);

  return (
    <>
      <Grid item xs={8}>
        <div style={{ textAlign: "center" }}>
          <h3>Login to your account</h3>
          <br></br>
          <p style={{ display: "block" }}>
            Let's login to your account so you can continue building and editing
            your boarding flows onboarding experience.
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              value={formData.email}
              id="outlined-required"
              label="Email"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              value={formData.password}
              id="outlined-required"
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={<span>Remember me</span>}
            />
          </Grid>
          <Grid item xs={6}>
            <a href="/">Forgot password</a>
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {signInResponse?.message && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {signInResponse?.message}
          </Alert>
        </Snackbar>
      )}

      {errResponse?.message && (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errResponse?.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default SignInForm;
