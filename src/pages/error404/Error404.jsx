import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
  return (
    <div className="Error404">
      <div>
        <div>
          <h1>404</h1>
        </div>
        <div className="oups">
          Oups! la page que vous demander n'existe pas.
        </div>
      </div>
      <Link to="/">Retourner sur la page d'Accueil</Link>
    </div>
  )
}

export default Error404
