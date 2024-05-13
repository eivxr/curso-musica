import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import {NavLink} from 'react-router-dom';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Username:', username);
    console.log('Password:', password);
    // Después de enviar los datos, puedes redirigir al usuario a otra página, por ejemplo, la página de inicio
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          margin="normal"
          label="Nombre de usuario"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Iniciar sesión
        </Button>
      </form>
      <div>
        ¿No tienes una cuenta? <Button
            component={NavLink}
            to={"/register"}
          >Regístrate</Button>
      </div>
    </Container>
  );
}

export default LoginForm;
