import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    postagens: [
      {
        usuario: "Ricardo",
        fotoPerfil: "https://picsum.photos/50/50",
        foto: "https://picsum.photos/200/150"
      },
      {
        usuario: "Anne",
        fotoPerfil: "https://picsum.photos/50/51",
        foto: "https://picsum.photos/200/151"
      },
      {
        usuario: "Luana",
        fotoPerfil: "https://picsum.photos/50/52",
        foto: "https://picsum.photos/200/152"
      }
    ],

    valorInputUsuario: "",
    valorInputPerfil: "",
    valorInputFoto: ""
  }

  adicionaPost = () => {
    const novoPost = {
      usuario: this.state.valorInputUsuario,
      fotoPerfil: this.state.valorInputPerfil,
      foto: this.state.valorInputFoto
    }

    const novoPosts = [novoPost, ...this.state.postagens]

    this.setState({postagens: novoPosts})
    this.setState({valorInputUsuario: "", valorInputPerfil: "", valorInputFoto: ""})
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeInputPerfil = (event) => {
    this.setState({valorInputPerfil: event.target.value})
  }

  onChangeInputFoto = (event) => {
    this.setState({valorInputFoto: event.target.value})
  }

  

  render() {

    const FormularioPost = styled.div`
      display: flex
    `

    const listaDeComponentes = this.state.postagens.map(pessoa => {
      return (
        <Post
          nomeUsuario= {pessoa.usuario}
          fotoUsuario={pessoa.fotoPerfil}
          fotoPost={pessoa.foto} 
        />
      )
    })
    return (
      <div className={'app-container'}>
        <FormularioPost>
          <input
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome do Usuário"}
            />
            <input
              value={this.state.valorInputPerfil}
              onChange={this.onChangeInputPerfil}
              placeholder={"Foto do Usuario"}
            />
            <input
              value={this.state.valorInputFoto}
              onChange={this.onChangeInputFoto}
              placeholder={"foto da postagem"}
            />
            <button onClick={this.adicionaPost}>Postar</button>
        </FormularioPost>    
        {listaDeComponentes}
      </div>
    );
  }
}

export default App;
