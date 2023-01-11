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
import React, { useState } from "react";
import { API_END_POINT, SIGN_UP } from "../../constants/apiKeys";

export default function SignUpFrom() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

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

  const [signUpResponse, setSignUpResponse] = useState({ message: "" });

  const handleSignUp = () => {
    axios
      .post(`${API_END_POINT}${SIGN_UP}`, formData)
      .then((res) => setSignUpResponse(res.data))
      .then(() => setOpen(true));
  };

  return (
    <div>
      <Grid item xs={8}>
        <div style={{ textAlign: "center" }}>
          <h3>Sign Up for an account</h3>
          <br></br>
          <p style={{ display: "block" }}>
            Let's get you all set up so you can start creating your first
            onboarding experience.
          </p>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="First Name"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Last Name"
              value={formData.lastName}
              placeholder="Your last name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
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
              id="outlined-required"
              label="Password"
              value={formData.password}
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              id="outlined-required"
              label="Mobile No"
              value={formData.phoneNumber}
              placeholder="Enter your mobile number"
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <span>
                  I accept <a href="/">term's and conditions</a>
                </span>
              }
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {signUpResponse?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
