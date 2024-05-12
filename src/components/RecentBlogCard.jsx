import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const RecentBlogCard = ({blog}) => {
    const {user}=useContext(AuthContext)
    const {photo,title,description,longdescription,category,_id}=blog;

    const handleWishList=()=>{
        const photo=blog.photo;
        const title=blog.title;
        const description=blog.description;
        const category=blog.category;
        const id=blog._id;
        const email=user?.email;
        const longdescription=blog.longdescription;
        const listOfWish={
          photo,title,description,category,id,email,longdescription
        }

        fetch("http://localhost:5000/wish", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(listOfWish),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Blog Successfully Added to WishList",
                icon: "success",
                confirmButtonText: "Ok",
              });
              
            }
          });
        }

    return (
        <div>
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={photo}
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div>
                <p className="text-xl font-semibold">{category}</p>
            </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">
              {title.slice(0,20)}
            </h2>
            <p className="dark:text-gray-800">
              {description.slice(0,52)}...
            </p>
            <p>{longdescription.slice(0,100)}...</p>
          </div>
         <div>
         <Link to={`/details/${_id}`}>
         <button
            type="button"
            className="p-3 font-semibold rounded-md mr-8 btn-wide mb-4
            bg-[#1E677C] text-white dark:bg-violet-600 dark:text-gray-50"
          >
            Details
          </button>
         </Link>
         
         <button
         onClick={handleWishList}
            type="button"
            className="p-3 font-semibold rounded-md bg-[#1E677C] text-white btn-wide
            dark:bg-violet-600 dark:text-gray-50"
          >
            WishList
          </button>
         
         </div>
        </div>
      </div> 
        </div>
    );
};

export default RecentBlogCard;