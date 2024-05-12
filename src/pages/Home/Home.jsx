import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import RecentBlogCard from "../../components/RecentBlogCard";

const Home = () => {
    const blogs=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mt-16 mb-8">
                <h1 className="text-3xl font-bold font-lato hover:text-[#1E677C] underline">Recent Blogs</h1>
                
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog=><RecentBlogCard
                    key={blog._id}
                    blog={blog}
                    ></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default Home;