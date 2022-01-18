import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Header from '../Header';
import TopicSection from "../TopicSection";


function App() {
  return (
    <div className="App">
      <Header></Header>



      <Routes>
        <Route path="/" element={<TopicSection />} />
      </Routes>
    </div>
  );
}

export default App;
