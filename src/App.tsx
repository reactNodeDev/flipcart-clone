import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RootRouter } from './routes/index.ts'

function App() {
  return (
    <RouterProvider router={RootRouter} />
  )
}

export default App
