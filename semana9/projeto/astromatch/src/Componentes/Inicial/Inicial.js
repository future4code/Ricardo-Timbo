import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Inicial()  {
    const [perfil, setPerfil] = useState({})

    useEffect(() =>{
      pegaPerfil()
      
      }, 
        [])

      const pegaPerfil = () => {
        console.log(perfil)

      Axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/person")
        .then(resposta=>{
          return setPerfil(resposta.data.profile)
        })
        
        .catch(error => {
          return alert(`Erro! não foi possivel carregar o perfil`)
          })
        }

      const onClickCurtiu = (event) => {
        const body = {
          id: perfil.id,
          choice: event.currentTarget.value
        }
      }

      setPerfil({})

      axios 
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/choose-person", body)
        .then(resposta =>{
          return pegaPerfil()
        })
        .catch(erro =>{
          return alert()
        })
    return(
        <div>
            <div>

            </div>
        </div>
    )
}
export default Inicial