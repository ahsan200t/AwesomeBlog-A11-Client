import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({blog}) => {
    const {photo,title,description,category,}=blog;
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
            <h2 className="text-3xl font-semibold tracking-wide">
              {title}
            </h2>
            <p className="dark:text-gray-800">
              {description}
            </p>
          </div>
         <div>
         <Link to='/details'>
         <button
            type="button"
            className="p-3 font-semibold rounded-md mr-8 btn-wide mb-4
            bg-[#1E677C] text-white dark:bg-violet-600 dark:text-gray-50"
          >
            Details
          </button>
         </Link>
         <Link to='/wish'>
         <button
            type="button"
            className="p-3 font-semibold rounded-md bg-[#1E677C] text-white btn-wide
            dark:bg-violet-600 dark:text-gray-50"
          >
            WishList
          </button>
         </Link>
         </div>
        </div>
      </div>
        </div>
    );
};

export default BlogCard;