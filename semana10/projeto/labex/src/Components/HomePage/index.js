import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()

    const vaiParaLogin = () =>{
        history.push(`/login`)
    }

    const vaiParaForm = () =>{
        history.push(`/form`)
    }
    
    return(
        <div>

            <Typography variant="h1" align={'center'} gutterBottom>LabeX</Typography>

            <ButtonsContainer>
                <Link to={'/login'}>
                <Button variant={'outlined'} color={'secondary'}>Área do administrador</Button>
                </Link>
                <Link to={'/inscricao'}>
                <Button variant={'contained'} color={'primary'}>Quero me candidatar!</Button>
                </Link>
                
            </ButtonsContainer>
            
        </div>
    )
}

export default HomePage