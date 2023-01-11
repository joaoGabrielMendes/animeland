import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Info from "./views/Info/Info";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
//yo
export default App;
