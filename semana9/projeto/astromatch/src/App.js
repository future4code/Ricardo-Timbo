import React from 'react';


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
          </header>
          <Inicial />
        </div>
        :
        <div>
          <header>
            <div/>
            <logo src={logo}/>
            <a className = 'voltar-para-Inicial' onClick={alteraCard}></a>
          </header>
          <DeuMatch />
        </div>
      }
    </div>
  );
}

export default App;
