import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory()

    const vaiParaAdmin = () =>{
        history.replace(`/admin`)
    }
    return(
        <div>
            
            <button onClick={vaiParaAdmin}>Entrar</button>
        </div>
    )
}

export default LoginPage