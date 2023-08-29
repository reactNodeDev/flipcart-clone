import { Route, Routes } from "react-router"
import { Home } from "../pages"

const RootRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
  )
}

export default RootRouter