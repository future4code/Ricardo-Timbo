import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    usuarios: [],
    novoNomeValor: "",
    novoEmailValor: ""
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () =>{ 
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",  {
      headers: {
        Authorization: "ricardo-timbo-julian"
      }
    })
    .then((resposta) => {
      console.log(resposta)
      this.setState({usuarios: resposta.data})
    }).catch((error) => {
      console.log(error)
    })
  }

  onChangeNomeUsuario = (event) => {
    this.setState({novoNomeValor: event.target.value})
  }

  onChangeEmailUsuario = (event) => {
    this.setState({novoEmailValor: event.target.value})
  }

  onCreateUsuario = () => {
    this.criarUsuario(this.state.novoNomeValor, this.state.novoEmailValor)
  }

  criarUsuario = (nomeUsuario,  emailUsuario) => {
    const body = {
      name: nomeUsuario,
      email: emailUsuario
    }
  
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "ricardo-timbo-julian"
      }
    })
    .then((resposta) => {
      this.pegarUsuarios()
    }).catch((error) => {
      console.log("Erro!!")
    })
  }

  render(){
    return(
    <div>
      <button>Ir para a lista de Cadastros</button>
      <div>
        <h2>Cadastro de Usuario</h2>
        <label>Nome:</label>
        <input value={this.state.novoNomeValor} 
          onChange={this.onChangeNomeUsuario}
        />
        <label>Email:</label>
        <input value={this.state.novoEmailValor}
          onChange={this.onChangeEmailUsuario}
        />
        <button onClick={this.onCreateUsuario} >Cadastrar</button>
      </div>
      <div>
      <h1>Clientes Cadastrados</h1>
      {this.state.usuarios.map((usuario) =>{
        return <p>{usuario.name}</p>
      })}
      </div>
    </div>
    )
  }
}

export default App;




