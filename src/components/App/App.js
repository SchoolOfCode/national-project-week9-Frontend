import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header";
import TopicPage from "../TopicPage";
import QuestionsPage from "../QuestionsPage";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="/questions/:query" element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
