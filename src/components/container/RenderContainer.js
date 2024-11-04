import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/Main.js";
import ToDoList from "../toDoList/ToDoList.js";
import About from "../about/About.js";
import NotFound from "../notFound/NotFound.js";
import ErrorBoundary from "../errorBounary/ErrorBoundary.js";
import "./renderContainer.styles.css";

export default () => {
  return (
    <div className="render_container">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
