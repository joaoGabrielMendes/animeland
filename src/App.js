import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import AnimeInfo from "./views/AnimeInfo/AnimeInfo";
import Episodes from "./views/Episodes/Episodes";
import NotFound from "./views/NotFound/NotFound";
import Search from "./views/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/animes/:animeId" element={<AnimeInfo />}></Route>
      <Route path="/episodes/:episodeId" element={<Episodes />}></Route>
      <Route path="/*" element={<NotFound />} />
      <Route path="/search/:animeTitle" element={<Search />} />
    </Routes>
  );
}
//yo
export default App;
