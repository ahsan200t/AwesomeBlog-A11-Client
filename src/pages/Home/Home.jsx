import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import RecentBlogCard from "../../components/RecentBlogCard";
import NewsLatter from "../../components/NewsLatter";

const Home = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mt-16 mb-12">
        <h1 className="text-3xl font-bold font-lato hover:text-[#1E677C] underline">
          Recent Blogs
        </h1>
        <p className="w-2/3 mt-2 mx-auto">
          Stay up-to-date with our latest articles covering a wide range of
          topics. From travel adventures to remote work tips and holistic health
          insights, explore captivating content that inspires, educates, and
          entertains.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, 6).map((blog) => (
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>

      <div>
        <NewsLatter></NewsLatter>
      </div>
    </div>
  );
};

export default Home;
