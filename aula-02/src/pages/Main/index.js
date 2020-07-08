import React, { Component } from 'react'

import api from '../../services/api/api'

import './styles.css'

class Main extends Component {
  state = {
    biographies: []
  }

  componentDidMount() {
    this.loadBiographies();
  }

  loadBiographies = async () => {
    //resposta da minha API = response/resposta
    const response = await api.get(`/biographies`)

    const { docs } = response.data

    this.setState({ biographies: docs })
  }

  render() {
    const { biographies } = this.state;

    return (
      <div className="list-biography">
        {biographies.map(biography => (
          <article key={biography._id}>
            <strong>{biography.nome}</strong>
            <p>{biography.description}</p>
          </article>
        ))}
      </div>
    )
  }
}

export default Main