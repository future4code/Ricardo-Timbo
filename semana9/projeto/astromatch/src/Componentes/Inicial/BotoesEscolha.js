import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const  ContainerBotao = styled.div`
    display: flex;
    justify-content: space-around;

`

function BotoesEscolha(props) {

    

    return(
        <ContainerBotao>
           <button onClick={props.onCLickNao}>Não</button>
           <button onClick={props.onCLickSim}>Sim</button>
        </ContainerBotao>
    )
}

export default BotoesEscolha