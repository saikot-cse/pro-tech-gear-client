import React from 'react';
import Blogs from '../../Component/Blogs/Blogs';
import useBlogs from '../../Hooks/useBlogs';

const Article = () => {
  const [blogs] = useBlogs();
  return (
    <div className="d-grid container">
      <h2 className="text-center mt-3">
        Our
        <span className="text-info"> Articals</span>
      </h2>
      <div className="bg-info mx-auto rounded-3" style={{ width: "175px", height: "4px" }}>
        .
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <Blogs key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Article;