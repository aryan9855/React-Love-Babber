import React, { useState } from 'react';
import Card from './Card';

function Cards({ courses, category }) {
  const [likeCourses, setLikeCourses] = useState([]);

  function getCourses() {
    if (!courses) return [];

    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        if (Array.isArray(array)) {
          array.forEach(courseData => {
            allCourses.push(courseData);
          });
        }
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  }

  const courseList = getCourses();

  if (courseList.length === 0) {
    return <p className="text-white">No courses available</p>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {courseList.map(course => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likeCourses}
          setLikeCourses={setLikeCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
