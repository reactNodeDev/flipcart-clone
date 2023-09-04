import { Route, createRoutesFromElements } from "react-router";
import { Home } from "../pages";
import { Navbar } from "../HOC";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" errorElement={<ErrorBoundary />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

export default router;
