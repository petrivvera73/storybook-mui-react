import TextField from "@mui/material/TextField";

export const FieldLogin = ({
  margin,
  value,
  id,
  label,
  name,
  autoComplete,
}) => {
  return (
    <TextField
      requireds
      fullWidth
      {...{ margin, value, id, label, name, autoComplete }}
    />
  );
};
