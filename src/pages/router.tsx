import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import TokenLaunch from "./TokenLaunch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="/token/launch" element={<TokenLaunch />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

export default router;
