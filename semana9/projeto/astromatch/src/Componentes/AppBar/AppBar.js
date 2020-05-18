import React from 'react'
import styled from 'styled-components'

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding 0 10px;
`
function AppBar() {
    return(
        <AppBarContainer>
            <button>Escolher Pagina</button>
            <p>astromach</p>
            <button>Lista</button>
        </AppBarContainer>
    )
}

export default AppBar