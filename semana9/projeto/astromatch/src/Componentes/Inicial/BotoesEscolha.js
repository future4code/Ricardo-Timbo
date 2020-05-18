import React from 'react'
import styled from 'styled-components'

const  ContainerBotao = styled.div`
    display: flex;
    justify-content: space-around;
    
`

function BotoesEscolha() {

    return(
        <ContainerBotao>
           <button>Sim</button>
           <button>Não</button>
        </ContainerBotao>
    )
}

export default BotoesEscolha