import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import TokenLaunch from "./TokenLaunch";
import SwapPage from "./SwapPage";
import NftLaunchCatalogue from "./NftLaunchCatalogue";
import BridgePage from "./BridgePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />

        <Route path="/token/launch" element={<TokenLaunch />} />

        <Route path="/nft/launch" element={<NftLaunchCatalogue />} />

        <Route path="/swap" element={<SwapPage />} />

        <Route path="/bridge" element={<BridgePage />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);

export default router;
