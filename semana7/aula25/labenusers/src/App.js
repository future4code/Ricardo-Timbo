import React from 'react';
import Home from './components/Home';
import ListaDeUsuarios from './components/ListaDeUsuarios';


class App extends React.Component {

  state = {
    currentPage: "FORM",
  }

  onClickMudaDePagina = () => {
    const nextPage = this.state.currentPage === "FORM" ? "LIST" : "FORM";

    this.setState({currentPage: nextPage})
  };

  render(){
    return(
    <div>
      <button onClick={this.onClickMudaDePagina} >
        {this.state.currentPage === "FORM"
            ? "Ir para lista"
            : "Voltar para cadastro"}
      </button>
      {this.state.currentPage === "FORM" ? (
          <Home />
        ) : (
          <ListaDeUsuarios />
        )}
    </div>
    )
  }
}

export default App;




