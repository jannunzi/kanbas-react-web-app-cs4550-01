import React, { useState } from "react";
import db from "../Database";
import { useParams } from "react-router";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { Routes, Route, Link } from "react-router-dom";
import ModuleForm from "./ModuleForm"
function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modulesReducer.modules).filter(module => module.course === courseId);
  const module = useSelector((state) => state.modulesReducer.module);


  return (
    <div className="modules-container">
      <div className="modules-actions">
  <button className="mybtn action-btn">Collapse All</button>
  <button className="mybtn action-btn">View Progress</button>
  <button className="mybtn action-btn dropdown-btn">Publish All ▼</button>
  <Link to="ModuleForm">
    <button className="mybtn add-module-btn">+ Module</button>
  </Link>
  <button className="mybtn action-btn">
    <FontAwesomeIcon icon={faEllipsisV} />
  </button>
</div>
      <hr className="modules-divider" />
      <div>
        <ul className="module-list-group">
          <li className="module-list-group-item">
            <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
            <button onClick={() => dispatch(updateModule(module))}>Update</button> {/* Added the Update button */}
            <input 
              value={module.name}
              onChange={(e) => 
                dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <textarea 
              value={module.description}
              onChange={(e) => 
                dispatch(setModule({ ...module, description: e.target.value }))}
            />
          </li>
          {modules.map((module, index) => (
            <li key={index} className="module-list-group-item">
              <button onClick={() => dispatch(setModule(module))}>Edit</button> {/* Added the Edit button */}
              <button onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
              <div className="module-content">
                <div className="module-header">
                  <span className="module-icon">::</span> {module.name}
                </div>
                <div className="module-actions">
                  <span className="checkmark">✔</span>
                  <span className="plus">+</span>
                  <span className="ellipsis">:</span>
                </div>
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="lesson-list-group">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="lesson-list-group-item">
                      {lesson.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModuleList;
