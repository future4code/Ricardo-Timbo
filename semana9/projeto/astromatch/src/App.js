import React, { useState } from 'react';
import Inicial from'./Componentes/Inicial/Inicial'
import DeuMatch from './Componentes/DeuMatch/DeuMatch'
import Main from './Componentes/Main/Main';
import BotaoReset from './Componentes/BotaoReset/BotaoReset';

function App()  {
  const [inicio, setInicio] = useState(true)

  const alteraCard = () => {
    setInicio(!inicio)
  }

  return (
    <div>
      <Main />
      <BotaoReset />
    </div>
  );
}

export default App;