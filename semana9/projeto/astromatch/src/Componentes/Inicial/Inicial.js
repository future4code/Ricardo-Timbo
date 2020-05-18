import React, { useEffect, useState } from 'react'
import CardPerfil from './CardPerfil'
import BotoesEscolha from './BotoesEscolha'
import Axios from 'axios'

function Inicial() {

  const [perfil, setPerfil] = useState({})


  useEffect(() => {
    Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/person')
    .then(response =>{setPerfil(response.data.profile)})
  }, [])

  return(
    <div>
      <CardPerfil perfil={perfil}/>
      <BotoesEscolha/>
    </div>
  )

}

export default Inicial