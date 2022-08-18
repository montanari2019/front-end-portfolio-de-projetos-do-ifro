import "./login.css";

import Links from "@mui/material/Link";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../shared/contexts/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const auth = useAuth();

  const history = useNavigate();

  const [emailState, SetEmail] = useState<string>("");
  const [passwordState, SetPassword] = useState<string>("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetPassword(event.target.value);
  };

  async function handleLogin() {
    console.log("função login ativada");
    try {
      await auth.authenticated(emailState, passwordState);
      history("/homeAdmin");
    } catch (error) {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              value={emailState}
              onChange={handleChangeEmail}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={passwordState}
              onChange={handleChangePassword}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              onClick={handleLogin}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
