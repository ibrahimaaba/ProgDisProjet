import React from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
  const courses = [
    { id: 1, title: 'React for Beginners' },
    { id: 2, title: 'Advanced Node.js' },
    { id: 3, title: 'Introduction to Python' },
  ];

  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-item">
          <h2>{course.title}</h2>
          <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;