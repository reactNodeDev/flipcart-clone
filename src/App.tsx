import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RootRouter } from './routes/index.ts'
import { LazyMotion, domAnimation } from 'framer-motion'

function App() {
  return (
    <LazyMotion features={domAnimation}>
    <RouterProvider router={RootRouter} />
    </LazyMotion>
  )
}

export default App
