import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Inicial()  {
    const [perfil, setPerfil] = useState({})

    useEffect(() =>{
        Axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/person")
        .then(resposta=>{
          setPerfil(resposta.data.profile)
          console.log(resposta.data.profile)
        })
        .catch(error => {
          return alert(`Status do erro: ${error.response.status}\nMensagem: ${error.response.data.message}`)
        })
    }, 
    [setPerfil])
    return(
        <div>
            <div>

            </div>
        </div>
    )
}
export default Inicial