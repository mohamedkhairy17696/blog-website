import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

// const BlogList = ({ blogs, title, handleDelete }) => {
//   return (
//     <div className="blog-list">
//       <h1>{title}</h1>
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;
//   return (
//     <div className="blog-list">
//       <h1>{title}</h1>
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const BlogList = (props) => {
//   return (
//     <div className="blog-list">
//       <h1>{props.title}</h1>
//       {props.blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default BlogList;
