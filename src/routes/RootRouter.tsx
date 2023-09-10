import { Route, createRoutesFromElements } from "react-router";
import { Home } from "../pages";
import { Navbar } from "../HOC";
import { createBrowserRouter } from "react-router-dom";
import { AppErrorBoundary } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />} key={location.pathname}>
      <Route path="/" ErrorBoundary={AppErrorBoundary }>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

export default router;
