import React from 'react'
import Comentario from '../../components/Comentario/Comentario'

const TimeLine = () => {
  return (
    <Comentario
      data={comentario.data}
      comentario={comentario.comentario}
      autora={comentario.autora}
    />
  )
}

const comentario = {
  data: new Date(),
  comentario: 'Esse é o comentário',
  autora: {
    nome: 'Jéssica',
    hobbie: 'Patinar',
    fotoUrl: 'https://placekitten.com/g/64/64',
    fotoNome: 'Perfil'
  }
}

export default TimeLine;