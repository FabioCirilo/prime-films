import { Link } from 'react-router-dom'
import './styles.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 </h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  )
}
