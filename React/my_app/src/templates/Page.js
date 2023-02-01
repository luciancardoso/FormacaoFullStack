import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        padding: '10px 0',
    }
}))

const Page = ({ title, Component }) => {
    const classes = useStyles()

    return(
        <Typography variant='h3'>
            {title}
            <Component />
        </Typography>
    )
}

export default Page
