import React from 'react';
import axios from 'axios';
import sytled from 'styled-components';

const ContainerPrincipal = sytled.div`
display : flex;
flex-direction: column;
justify-content: center;
aling-itens: center;
width: 100vw;
height: 50vh;

`

const FormCadastro = sytled.div`
display : flex;
flex-direction: column;
width: 20vw;
justify-content: center;
aling-itens: center;
padding: 20px;
background-color: black;
color: white;
margin: 20px;
`

class Home extends React.Component {

  state = {

    nomeValor: "",
    emailValor: ""

  }


  onChangeNomeUsuario = (event) => {
    this.setState({nomeValor: event.target.value})
  }

  onChangeEmailUsuario = (event) => {
    this.setState({emailValor: event.target.value})
  }

  onCreateUsuario = () => {
    this.criarUsuario(this.state.nomeValor, this.state.emailValor)
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
      window.alert("Usuario cadastrado com sucesso!")
    }).catch((error) => {
      window.alert("Erro!!")
    })
  }

  render(){
    return(
      <ContainerPrincipal>
        <h2>Cadastro de Usuario</h2>
        <FormCadastro>
        <label>Nome:</label>
        <input
         value={this.state.nomeValor} 
          onChange={this.onChangeNomeUsuario}
        />
        <label>Email:</label>
        <input
         value={this.state.emailValor}
          onChange={this.onChangeEmailUsuario}
        />
        <button onClick={this.onCreateUsuario} >Cadastrar</button>
        </FormCadastro>
      </ContainerPrincipal>
    )
  }
}

export default Home;

