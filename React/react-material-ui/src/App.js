import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <>
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
      <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}

export default App;
