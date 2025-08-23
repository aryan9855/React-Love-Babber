import React from 'react';
import { FcLike , FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikeCourses }) => {
  
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikeCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikeCourses([course.id]);
      } else {
        setLikeCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-[#181818] rounded-md overflow-hidden text-white">
      <div className="relative">
        <img src={course?.image?.url || ""} alt={course?.title || "Course"} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute bottom-3 right-2
        grid place-items-center cursor-pointer">
          <button onClick={clickHandler}>{
            likedCourses.includes(course.id) ?
            <FcLike className="cursor-pointer" fontSize="1.75rem"/>
            :<FcLikePlaceholder className="cursor-pointer" fontSize="1.75rem" />
            }
            
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course?.title}</p>
        <p className="text-white mt-2">
  {course.description.length > 100
    ? course.description.substr(0, 100) + " ..."
    : course.description}
</p>
      </div>
    </div>
  );
};

export default Card;
