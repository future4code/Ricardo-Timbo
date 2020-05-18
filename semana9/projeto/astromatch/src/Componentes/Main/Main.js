import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import Inicial from '../Inicial/Inicial'
import DeuMatch from '../DeuMatch/DeuMatch'
import styled from 'styled-components'

const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 30px;
`

function Main() {

    const [trocaPagina, setTrocaPagina] = useState('Inicial')

    const carregaMain = () => {
        switch(trocaPagina) {
            case 'inicial':
                return <Inicial/>
            case 'deuMatch':
                return <DeuMatch/>
            default:
                return <Inicial/>
        }
    }

    const vaiParaInicial = () => {
        setTrocaPagina('inicial')
    }

    const vaiParaDeuMatch = () => {
        setTrocaPagina('deuMatch')
    }

    return (
        <MainContainer>
            <AppBar 
            vaiParaInicial={vaiParaInicial} 
            vaiParaDeuMatch={vaiParaDeuMatch}
            />
            {carregaMain()}
        </MainContainer>
    )
    
}

export default Main 