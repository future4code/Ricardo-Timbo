import React, { useEffect, useState } from 'react' 
import ListaDeMatch from './ListaDeMatch'
import styled from 'styled-components'
import Axios from 'axios'

const ContainerLista = styled.div`
    padding: 10px;
`

function DeuMatch() {

    const [match, setMatch] = useState([])

    const matches = [
        {
          "id": "71gMbZs2txS9LDvGK5Ew",
          "age": 26,
          "name": "Anitta",
          "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
          "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
        }
      ]

      useEffect(() =>{
        Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/matches').then(response =>{
            setMatch(response.data.matches)
        })
      }, [])

    return(
        <ContainerLista>
            {matches.map((perfil) =>{
                return <ListaDeMatch perfil={perfil}/>
            })}
        </ContainerLista>
    )
}

export default DeuMatch