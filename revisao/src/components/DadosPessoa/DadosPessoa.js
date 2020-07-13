import React from 'react'

const DadosPessoa = (props) => {
  return (
    <div>
      <div> {props.pessoa.nome}</div>
      <div>{props.pessoa.hobbie}</div>
    </div>
  )
}

export default DadosPessoa;