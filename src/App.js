import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <ToastContainer autoClose={3000} />
      <AppRoutes />
    </div>
  )
}

export default App
