import React from 'react'
import styled from 'styled-components'

const CardPerfilContainer = styled.div`
    margin: 16px;

`
const FotoPerfil = styled.img`
    width: 100%;
    display: block;
    max-height: 350px;
`
const InfoPerfil = styled.div`
    border: 1px solid black;
    padding: 0 10px;
`
function CardPerfil(props){
    const perfil = props.perfil
    return(
        <CardPerfilContainer>
            <FotoPerfil src={perfil.photo} />
            <InfoPerfil>
                <h3>{perfil.name}, {perfil.age}</h3>
                <p>{perfil.bio}</p>
            </InfoPerfil>
        </CardPerfilContainer>

    )
}

export default CardPerfil