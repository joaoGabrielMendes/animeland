import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import AnimeInfo from "./views/AnimeInfo/AnimeInfo";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/animes/:animeId" element={<AnimeInfo />}></Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
//yo
export default App;
