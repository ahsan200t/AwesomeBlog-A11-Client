import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import WishCard from "../WishCard/WishCard";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
    
 
    useEffect(() => {
      const getWishData = async () => {
        const { data } = await axios(
          `http://localhost:5000/blogs/${user?.email}`,
          
        );
        setBlogs(data);
      };
      getWishData();
    }, [user]);


    if (blogs.length === 0) return <p className="text-center md:my-40 text-gray-400">Opps!!! <br /> You did not Add Any data in Wishlist</p>

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {blogs.map((wish) => (
        <WishCard key={wish._id} wish={wish}></WishCard>
      ))}
    </div>
  );
};

export default WishList;
