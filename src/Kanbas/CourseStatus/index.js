import React from "react";
import "./index.css";

function CourseStatus() {
  return (
    <div className="course-status-container">
      {/* Course Actions */}
      <div className="course-action">
        <span className="course-action-icon">📄</span>
        Import Existing Content
      </div>
      <div className="course-action">
        <span className="course-action-icon">🔗</span>
        Import from Commons
      </div>
      <div className="course-action">
        <span className="course-action-icon">🏠</span>
        Choose Home Page
      </div>
      <div className="course-action">
        <span className="course-action-icon">📊</span>
        View Course Stream
      </div>
      <div className="course-action">
        <span className="course-action-icon">📢</span>
        New Announcement
      </div>
      <div className="course-action">
        <span className="course-action-icon">📈</span>
        New Analytics
      </div>
      <div className="course-action">
        <span className="course-action-icon">🔔</span>
        View Course Notifications
      </div>

      {/* To Do Section */}
      <div className="todo-section">
        <strong>To Do</strong>
        <div className="todo-item">
          <span className="todo-item-title">Grade A1 - ENV + HTML</span>
          <button className="todo-item-close">✕</button>
        </div>
        <div className="todo-item">
          <span className="todo-item-title">Grade A2 - CSS + BOOTSTRAP</span>
          <button className="todo-item-close">✕</button>
        </div>
      </div>
    </div>
  );
}

export default CourseStatus;
