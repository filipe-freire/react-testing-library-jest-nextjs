import { FormGroup, TextField, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Counter from "../components/Counter/Counter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant="h1">React Testing Library + Jest</Typography>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="First Name"
        />
      </FormGroup>
      <Counter defaultCount={0} description="My Counter" />
    </div>
  );
}
