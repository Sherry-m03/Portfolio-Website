import React, { useEffect } from "react";
import ShreyaMasta from "./ShreyaMasta";
import TodoList from "./ToDoList";
import DiceGame from "./DiceGame";
import PlanPack from "./PlanPack";
import EatnSplit from "./EatnSplit";
import CineLog from "./CineLog";
import WorldLit from "./WorldLit";
import BICulture from "./BICulture";
import NovelNote from "./NovelNote";
import SimonGame from "./SimonGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShreyaMasta />} />
        <Route path="TodoList/*" element={<TodoList />} />
        <Route path="DiceGame/*" element={<DiceGame />} />
        <Route path="SimonGame/*" element={<SimonGame />} />
        <Route path="PlanPack/*" element={<PlanPack />} />
        <Route path="EatnSplit/*" element={<EatnSplit />} />
        <Route path="CineLog/*" element={<CineLog />} />
        <Route path="WorldLit/*" element={<WorldLit />} />
        <Route path="BICulture/*" element={<BICulture />} />
        <Route path="NovelNote/*" element={<NovelNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
