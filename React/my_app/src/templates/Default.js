import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Header from "../partials/Header/Header"

const useStyles = makeStyles(() => ({
    title: {
        padding: '10px 0',
    }
}))


const Default = ({ children }) => {
    const classes = useStyles()

    return(
        <>
            <Header />
            <Container className={classes.title}>
                {children}
            </Container>
        </>
    )
}

export default Default