/* eslint-disable react/prop-types */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const WishCard = ({ wish }) => {
  const [myWishList, setMyWishList] = useState(null);
  const { photo, title, category, description, _id } = wish;
  const handleDelete = async(_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:5000/wish/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setMyWishList(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });
            }
          });
      
    })
  };
  return (
    <div>
      <div className="card glass">
        <figure>
        <PhotoProvider>
       <PhotoView src={photo}>
       <img
          src={photo}
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
       </PhotoView>
       </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#1E677C]">{category}</h2>
          <h2 className="text-xl font-semibold">{title.slice(0, 20)}...</h2>
          <p>{description.slice(0, 52)}...</p>
          <div className="card-actions justify-between mt-4">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#1E677C] text-white">Details</button>
            </Link>
            <button
              onClick={() => handleDelete(wish._id)}
              className="btn bg-transparent text-3xl text-red-700"
            >
              {" "}
              <MdDeleteForever />{" "}
            </button>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default WishCard;
