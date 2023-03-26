import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
  // When call UseFetch component and send url I will destruct states that returned
  // From UseFetch component to track state in a UseFetch component
  const {
    data: blogs,
    isPending,
    error,
  } = UseFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Is Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
//     { title: "Web dev tips", body: "lorem ipsum...", author: "mario", id: 3 },
//   ]);

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };
//   const [name, setName] = useState("Mohamed");
//   useEffect(() => {
//     console.log("Use effect ran");
//     console.log(name);
//   }, [name]);

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//       {/*
//       <BlogList
//         blogs={blogs.filter((blog) => blog.author === "mario")}
//         title="Mario Blogs!"
//         handleDelete={handleDelete}
//       />*/}

//       <button onClick={() => setName("Ahmed")}>Change Name</button>
//     </div>
//   );
// };

// const Home = () => {
//   const [name, setName] = useState("Mohamed");
//   const [age, setAge] = useState(26);

//   const handleClick = (e) => {
//     setName("Ahmed");
//     setAge(20);
//   };

//   const handleClickAgain = (name, e) => {
//     console.log(`Hello ${name}`);
//   };
//   return (
//     <div className="home">
//       <h2>Home Page</h2>
//       <h1>
//         {name} is {age} years old
//       </h1>
//       <button onClick={handleClick}>Click Me</button>
//       <div>
//         <button onClick={(e) => handleClickAgain("Mohamed", e)}>
//           Click Me Again
//         </button>
//       </div>
//     </div>
//   );
// };

export default Home;
