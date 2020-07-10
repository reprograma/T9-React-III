import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './styles.css'

class Main extends Component {
  state = {
    biographies: [],
    pages: 1,
    page: 1
  }

  componentDidMount() {
    this.loadBiographies();
  }

  loadBiographies = async (page = 1) => {
    const response = await api.get(`/biographies?page=${page}`)
    const { docs, pages } = response.data


    this.setState({ biographies: docs, page, pages })
  }


  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadBiographies(pageNumber)

  }

  nextPage = () => {
    const { page, pages } = this.state;

    if (page === pages) return;

    const pageNumber = page + 1;

    this.loadBiographies(pageNumber)
  }



  render() {
    const { biographies, page, pages } = this.state;
    return (
      <div className="biography-list">
        {biographies.map(biography => (
          <article key={biography._id}>
            <strong>{biography.nome}</strong>
            <p className="biography-description">{biography.description}</p>
            <Link to={`/biography/${biography._id}`}>Acessar</Link>
          </article>
        ))}

        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    )
  }
}

export default Main