import { Route, createRoutesFromElements } from "react-router";
import { Home } from "../pages";
import { Navbar } from "../HOC";
import { createBrowserRouter } from "react-router-dom";
import { AppErrorBoundary } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} key={location.pathname} ErrorBoundary={AppErrorBoundary }>
        <Route index element={<Home />} key={location.pathname} />
    </Route>
  )
);

export default router;
