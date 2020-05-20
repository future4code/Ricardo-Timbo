import React from 'react';
import { useHistory } from 'react-router-dom';

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
            <p>HOME</p>
            <button onClick={vaiParaLogin}>Login</button>
            <button onClick={vaiParaForm}>Form</button>
        </div>
    )
}

export default HomePage