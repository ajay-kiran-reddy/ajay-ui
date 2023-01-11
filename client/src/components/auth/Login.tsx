import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { API_END_POINT, LOGIN, SIGN_UP } from "../../constants/apiKeys";
import axios from "axios";
import "./login.css";
import SignUpFrom from "./SignUpFrom";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [signUpResponse, setSignUpResponse] = useState();
  const [isSignActive, setIsSignInActive] = useState(true);

  const handleSignInOSignUp = () => {
    setIsSignInActive(!isSignActive);
  };

  return (
    <div className="containers">
      <Grid container spacing={3}>
        <Grid item xs={6} className="leftDiv">
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div>
                <h5 style={{ color: "white", textAlign: "center" }}>
                  Already Signed up?
                </h5>
                <br></br>
                <p style={{ color: "white", textAlign: "center" }}>
                  All users on MySpace will know that there are millions of
                  people out there. Every day besides so many people joining
                  this community.
                </p>
              </div>
              <br></br>

              <Button
                style={{
                  width: "100%",
                  border: "1px solid white",
                  color: "white",
                }}
                variant="outlined"
                onClick={handleSignInOSignUp}
              >
                {isSignActive ? "Sign Up" : "Sign In"}
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className="rightDiv">
          <Grid item xs={2}></Grid>

          <Grid item xs={8}>
            {isSignActive ? <SignInForm /> : <SignUpFrom />}
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
