import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header";
import TopicPage from "../TopicPage";
import QuestionsPage from "../QuestionsPage";
import ResourcesPage from "../ResourcesPage"

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="/questions/:query" element={<QuestionsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </div>
  );
}

export default App;
