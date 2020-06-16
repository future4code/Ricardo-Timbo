import React from 'react'
import Axios from 'axios'

function BotaoReset() {
    const onClickReset = () => {
        Axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-timbo/clear').then(response =>{
            console.log(response)
        })
    }
    return (
        <div>
            <button onClick={onClickReset}>Limpar swipes e matches</button>
        </div>
    )
    
}

export default BotaoReset 