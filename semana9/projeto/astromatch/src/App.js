import React, { useState } from 'react';
import logo from './Imagens/logo-astromatch.png'
import Inicial from'./Componentes/Inicial/Inicial'
import DeuMatch from './Componentes/DeuMatch/DeuMatch'


function App()  {
  const [inicio, setInicio] = useState(true)

  const alteraCard = () => {
    setInicio(!inicio)
  }

  return (
    <div>
      {inicio 
        ? 
        <div>
          <header>
            <div/>
            <logo src={logo}/>
            <a className = 'matches' onClick={alteraCard}></a>
              {/* mudar para Material icons */}
          </header>
          <Inicial />
        </div>
        :
        <div>
          <header>
            <div/>
            <logo src={logo}/>
            <a className = 'voltar-para-Inicial' onClick={alteraCard}></a>
              {/* mudar para Material icons */}
          </header>
          <DeuMatch />
        </div>
      }
      <button>Limpar swipes e matches</button>
    </div>
  );
}

export default App;
