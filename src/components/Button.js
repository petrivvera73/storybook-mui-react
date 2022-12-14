import Button from "@mui/material/Button";

export const ButtonSign = ({ color, text }) => {
  return (
    <Button
      type="submit"
      color={color}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {text}
    </Button>
  );
};
