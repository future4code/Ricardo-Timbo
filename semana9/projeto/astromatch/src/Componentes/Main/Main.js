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
            case 'Inicial':
                return <Inicial/>
            case 'DeuMatch':
                return <DeuMatch/>
        }
    }

    return (
        <MainContainer>
            <AppBar />
            <Inicial />
            <DeuMatch/>
        </MainContainer>
    )
    
}

export default Main 