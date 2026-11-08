import React, { useEffect, useState } from 'react'
import './filmes.css'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
export default function Filmes() {
  const { id } = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '217664cf927a172889057ad67c699fdd',
            language: 'pt-BR',
            page: 1
          }
        })
        .then(response => {
          setFilme(response.data)
          setLoading(false)
        })
        .catch(() => {
          console.log('Filme não encontrado')
        })
    }

    loadFilmes()

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes do filme...</h2>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}
