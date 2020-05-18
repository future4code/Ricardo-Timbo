import React, { useEffect, useState } from 'react' 
import ListaDeMatch from './ListaDeMatch'
import styled from 'styled-components'
import Axios from 'axios'

const ContainerLista = styled.div`
    padding: 10px;
`

function DeuMatch() {

    const [match, setMatch] = useState([])

      useEffect(() =>{
        Axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/matches').then(response =>{
            setMatch(response.data.matches)
        })
      }, [])

    return(
        <ContainerLista>
            {match.map((perfil) =>{
                return <ListaDeMatch perfil={perfil}/>
            })}
        </ContainerLista>
    )
}

export default DeuMatch