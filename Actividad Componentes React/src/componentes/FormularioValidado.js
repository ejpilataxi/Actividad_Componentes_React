import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Stack,
} from "@mui/material";

function FormularioValidado({ titulo = "Formulario Validado" }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Formulario enviado:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" mb={3} align="center">
        {titulo}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          {/* Input Texto */}
          <Controller
            name="texto"
            control={control}
            defaultValue=""
            rules={{
              required: "El texto es requerido",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Texto"
                variant="outlined"
                error={!!errors.texto}
                helperText={errors.texto ? errors.texto.message : ""}
                fullWidth
              />
            )}
          />

          {/* Input Password */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "La contraseña es requerida",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Contraseña"
                type="password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                fullWidth
              />
            )}
          />

          {/* Input Email */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                fullWidth
              />
            )}
          />

          {/* Input Teléfono */}
          <Controller
            name="telefono"
            control={control}
            defaultValue=""
            rules={{
              required: "El teléfono es requerido",
              minLength: { value: 10, message: "Mínimo 10 dígitos" },
              pattern: {
                value: /^[0-9()+-\s]*$/,
                message: "Teléfono inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Teléfono"
                type="tel"
                variant="outlined"
                error={!!errors.telefono}
                helperText={errors.telefono ? errors.telefono.message : ""}
                fullWidth
              />
            )}
          />

          {/* Input URL */}
          <Controller
            name="url"
            control={control}
            defaultValue=""
            rules={{
              required: "La URL es requerida",
              pattern: {
                value:
                  /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\w\-\._~:/?#[\]@!$&'()*+,;=.])*$/,
                message: "URL inválida",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="URL"
                type="url"
                variant="outlined"
                error={!!errors.url}
                helperText={errors.url ? errors.url.message : ""}
                fullWidth
              />
            )}
          />

          {/* Input Search */}
          <Controller
            name="busqueda"
            control={control}
            defaultValue=""
            rules={{ required: "La búsqueda es requerida" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Buscar"
                type="search"
                variant="outlined"
                error={!!errors.busqueda}
                helperText={errors.busqueda ? errors.busqueda.message : ""}
                fullWidth
              />
            )}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default FormularioValidado;
