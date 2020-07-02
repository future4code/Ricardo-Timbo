import React, { useEffect, useState } from 'react'
import CardPerfil from './CardPerfil'
import BotoesEscolha from './BotoesEscolha'
import Axios from 'axios'

function Inicial() {

  const [perfil, setPerfil] = useState(undefined)

  const pegaInicial = () =>{
    Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/person')
    .then(response =>{setPerfil(response.data.profile)})
  }

  useEffect(() => {
   pegaInicial()
  }, [])

  const escolheOpçao = (choice) => {
    const body ={
      choice: choice,
      id: perfil.id
    }

    setPerfil(undefined)

  Axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/choose-person', body).then(response =>{
    pegaInicial()
    })
  }

  const onCLickNao = () => {
    escolheOpçao(false)
  }

  const onCLickSim = () => {
    escolheOpçao(true)
  }

  return(
    <div>
      { perfil ? 
        (<>
          <CardPerfil perfil={perfil}/>
          <BotoesEscolha 
          onCLickNao={onCLickNao}
          onCLickSim={onCLickSim}
          />
        </>) : <p>Carregando ...</p> 
      // material Ui para o carregando
      }
    </div>
  )

}

export default Inicial