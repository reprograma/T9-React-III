import React, { Component } from 'react'

import './styles.css'

class Main extends Component {

  render() {
    return (
      <div className="list-biography">
        <article>
          <p className="name">Nome</p>
          <p className="description-biography">Descrição</p>
          <a href="" className="read-more">Leia mais</a>
        </article>
      </div>
    )
  }
}

export default Main