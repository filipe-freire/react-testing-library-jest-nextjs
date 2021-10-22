import Increment from "@mui/icons-material/ArrowUpward";
import Decrement from "@mui/icons-material/ArrowDownward";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

interface CounterProps {
  description: string;
  defaultCount: number;
}

export default function Counter({ description, defaultCount }: CounterProps) {
  const [counter, setCounter] = useState(defaultCount);

  return (
    <Stack direction="row" spacing={2} mt="2rem">
      <Button
        aria-label="Increment the counter by 1"
        onClick={() => setCounter(counter + 1)}
        variant="contained"
        startIcon={<Increment />}
      >
        Increment
      </Button>
      <Typography>
        {" "}
        {description}: {counter}{" "}
      </Typography>
      <Button
        aria-label="Decrement the counter by 1"
        onClick={() => setCounter(counter - 1)}
        variant="contained"
        endIcon={<Decrement />}
      >
        Decrement
      </Button>
    </Stack>
  );
}
