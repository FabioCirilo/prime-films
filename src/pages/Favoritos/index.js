import React, { useEffect, useState } from 'react'
import './favorito.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primefilms')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function excluirFilmes(id) {
    let filtroFilmes = filmes.filter(item => {
      return item.id !== id
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('@primefilms', JSON.stringify(filtroFilmes))
    toast.success('Filme removido com sucesso')
  }

  return (
    <div className="meus-favoritos">
      <h1>Meus favoritos</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}
      <ul>
        {filmes.map(item => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilmes(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
