import { Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import HomePage from "./app/page";
import GeneratePage from "./app/generate/page";
import PreviewPage from "./app/preview/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="generate" element={<GeneratePage />} />
        <Route path="preview" element={<PreviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
