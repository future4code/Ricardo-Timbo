import React from 'react'
import styled from 'styled-components'

const ListaDeItens = styled.div`
    display:flex;
    align-items: center;
    border-bottom: 1px solid gray;

    :hover{
        background-color: rgba(0,0,0,0.3)
    }
`
const Avatar = styled.img`
    border-radius:50%;
    margin-right:10px;
    height: 30px;
    width: 30px;
`

function ListaDeMatch(props) {
    const perfil = props.perfil
    return(
        <ListaDeItens>
            <Avatar src={perfil.photo}/>
            <p>{perfil.name}</p>
        </ListaDeItens>
    )
}
export default ListaDeMatch