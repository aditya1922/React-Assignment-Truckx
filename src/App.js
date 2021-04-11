//import Demo from "./demo";
import React from "react";
import Redirect from "react-router-dom";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import MaterialTableDemo from "./demo";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from "@material-ui/core";
const LoginPage = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const Redi = () => {
    return <Redirect to="/demo" />;
  };

  return (
    <>
      <Router>
        <Route path="/demo">
          <MaterialTableDemo />
        </Route>

        <div style={{ padding: 30 }}>
          <Paper>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField label="Email"></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" type={"password"}></TextField>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Button>
                  <Link to="/demo">Sign up</Link>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Router>
    </>
  );
};

export default LoginPage;
