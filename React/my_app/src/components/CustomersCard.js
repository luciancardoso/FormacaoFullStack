import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ModalConfirm from './ModalConfirm';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }
}));

const CustomersCard = ({ id, name, lastname, email, avatar, className, onRemoveCustomer }) => {
  const classes = useStyles();

  const [modalOpen, setOpenModal] = useState(false)  

  const handleToggleModal = () => {
    setOpenModal(!modalOpen)
  };

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleModal()
  }

  return (
    <>
      <Card className={classNames(className ,classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              L
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Editar Cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Remover Cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={modalOpen}
        onClose={handleToggleModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja realmente excluir este cadastro ?"
        message="Ao confirmar não sera possível reverter a operação!" 
      />
    </>
  );
}

export default CustomersCard