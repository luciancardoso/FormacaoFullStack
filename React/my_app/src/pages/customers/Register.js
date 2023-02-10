import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}));

const Register = () => {
    const classes = useStyles()
    return(
        <>
            <div className={classes.wrapper}>
                <TextField id="outlined-basic" label="Digite seu Nome" variant="outlined" />
            </div>
            <div className={classes.wrapper}>
                <TextField id="outlined-basic" label="Digite seu Cargo" variant="outlined" />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary">
                    Cadastrar
                </Button>
            </div>
        </>
    )
}

export default Register