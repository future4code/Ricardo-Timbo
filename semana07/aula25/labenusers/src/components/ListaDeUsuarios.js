import React from 'react';
import axios from 'axios';


class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: []
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

  onClickDeletarUsuario = (idUsuario) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
    {
      headers: {
        Authorization: "ricardo-timbo-julian"
      }
    })
    .then(resposta =>{
      window.alert("Usuario apagado!")
      this.pegarUsuarios()
    }).catch(error =>{
      window.alert("Erro usuario não pode ser apagado!")
    })
  }

    render(){
      return(
        <div>
          <h1>Clientes Cadastrados</h1>
          <div>
            {this.state.usuarios.map((usuario) =>{
              return (
                <div>
                <p>{usuario.name}</p>
                <button onClick={() => this.onClickDeletarUsuario(usuario.id)}>
                  Apagar</button> 
                </div> 
                )
                })
              }
          </div>
        </div>
      )
    }
}  
  export default ListaDeUsuarios;