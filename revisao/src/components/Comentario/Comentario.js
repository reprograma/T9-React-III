import React from 'react';
import InformacoesGerais from '../InformacoesGerais/InformacoesGerais'
import { formatarData } from '../../utils/formatar'

const Comentario = (props) => {
  return (
    <div className="comentario__wrapper">
      <InformacoesGerais pessoa={props.autora} />
      <div>{props.comentario}</div>
      {formatarData(props.data)}
    </div>
  )
}

export default Comentario;