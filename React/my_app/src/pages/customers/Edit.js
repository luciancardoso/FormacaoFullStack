import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useParams } from "react-router-dom";

import Toasty from '../../components/Toasty';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}));

const Edit = () => {
    const classes = useStyles()
    const { id } = useParams()
    
    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToast, setOpenToast] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(response => {
            const { data } = response.data

            setForm({
                name: {
                    value: data.first_name,
                    error: false,
                },
                job: {
                    value: data.job,
                    error: false,
                },
            })
        })
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError = false

        let newFormState = {
            ...form,
        }

        if(!form.name.value){
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome Corretamente',
            }
        }

        if(!form.job.value){
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo job Corretamente',
            }
        }

        if(hasError){
            return setForm(newFormState)
        }
        
        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            // console.log('OK', response)
            setOpenToast(true)
            setIsLoading(true)
        })

    }

    return(
        <>
            <div className={classes.wrapper}>
                <TextField 
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    label="Digite seu Nome" 
                    variant="outlined" 
                    name="name"
                    value={form.name.value}
                    onChange={handleInputChange}
                />
            </div>
            <div className={classes.wrapper}>
                <TextField 
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    label="Digite seu Cargo" 
                    variant="outlined" 
                    name="job"
                    value={form.job.value}
                    onChange={handleInputChange}
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleRegisterButton} disabled={isLoading}>
                    {
                        isLoading ? 'Aguarde...' : 'Salvar Alterações'
                    }
                </Button>
            </div>
            <Toasty 
                open={openToast} 
                severity="success"
                text="Registro atualizado com Sucesso!"
                onClose={() => setOpenToast(false)} 
            />
        </>
    )
}

export default Edit