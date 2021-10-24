import Increment from "@mui/icons-material/ArrowUpward";
import Decrement from "@mui/icons-material/ArrowDownward";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { Button, Input, InputLabel, Typography } from "@mui/material";

interface CounterProps {
  description: string;
  defaultCount: number;
}

export default function Counter({ description, defaultCount }: CounterProps) {
  const [counter, setCounter] = useState(defaultCount);
  const [chosenValue, setChosenValue] = useState(1);
  const [bigEnough, setBigEnough] = useState(defaultCount >= 15);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (counter >= 15) {
      id = setTimeout(() => setBigEnough(true), 300);
    }

    return function cleanup() {
      clearTimeout(id);
    };
  });

  return (
    <Stack direction="row" spacing={2} mt="2rem">
      <InputLabel>
        Value
        <Input
          value={chosenValue}
          onChange={(evt) => setChosenValue(parseInt(evt.target.value) || 0)}
        />
      </InputLabel>
      <Button
        aria-label={`Increment the counter`}
        onClick={() => setCounter(counter + chosenValue)}
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
        aria-label={`Decrement the counter`}
        onClick={() => setCounter(counter - chosenValue)}
        variant="contained"
        endIcon={<Decrement />}
      >
        Decrement
      </Button>
      {bigEnough ? null : <div>I am too small</div>}
    </Stack>
  );
}
