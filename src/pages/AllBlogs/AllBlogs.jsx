import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard";

const AllBlogs = () => {
  const allBlog = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        allBlog.map(blog=><BlogCard
        key={blog._id}
        blog={blog}
        ></BlogCard>)
       }
    </div>
  );
};

export default AllBlogs;
