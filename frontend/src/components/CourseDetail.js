import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  return (
    <div className="course-detail">
      <h2>Course Detail for Course ID: {id}</h2>
      <p>Course description and details go here.</p>
    </div>
  );
}

export default CourseDetail;