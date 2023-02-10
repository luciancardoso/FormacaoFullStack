import axios from "axios"
import { useState, useEffect } from "react"
import CustomersCard from '../../components/CustomersCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
    //   padding: theme.spacing(2),
    margin: theme.spacing(2),
    },
  }));

const List = () => {

    const classes = useStyles();

    const [customers, setCustomers] = useState([])

    // console.log(customers)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data

            setCustomers(data)
        })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users${id}`)
        .then(() => {
            const newCustomerState = customers.filter(customers => customers.id !== id)
            setCustomers(newCustomerState)
        })
    }

    return(
            <Grid container>
                {
                    customers.map(item => (
                        <Grid xs={6} md={4}>
                            <CustomersCard
                                id={item.id}
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                                onRemoveCustomer={handleRemoveCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
    )
}

export default List