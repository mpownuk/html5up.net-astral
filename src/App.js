import "./index.css";
import { Main } from "./Main";
import { Home } from "./Section/Home";
import { Work } from "./Section/Work";
import { ContactMe } from "./Section/ContactMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
        <Route path="*" element={<h2>Error 404: Page not found!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
