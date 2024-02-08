import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function () {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    </div>
  );
}
