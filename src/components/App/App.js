import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Header from '../Header';
import TopicPage from "../TopicPage";
import QuestionsPage from "../QuestionsPage";


function App() {
  return (
    <div className="App">
      <Header></Header>



      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
