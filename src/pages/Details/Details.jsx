import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import CommentsCard from "../../components/CommentsCard";

const Details = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { photo, title, description, longdescription, _id } = details;

  const handleComment = (e) => {
    e.preventDefault();
    if (user?.email === details.email) return toast.error("Action Not Permitted")
    const form = e.target;
    const comment = form.comment.value;
    const photo = form.photo.value;
    const email = form.email.value;

    const commentData = {
      comment,
      photo,
      email,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Comment Successfully Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Blog Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            <img src={photo} alt="" />
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {title}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            {longdescription}
          </p>
        </div>
       <Link to={`/update/${_id}`}>
       {user?.email===details.email &&(
          <div className='text-right'>
          <button className='btn bg-[#1E677E] text-white mt-4 '>Update</button>
        </div>
        )}
       </Link>
      </div>
      {/* Comment section Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-3xl font-lato font-bold text-gray-700 capitalize mb-10 text-center ">
          Please Share Your Idea:
        </h2>

        <form onSubmit={handleComment}>
          <div className="text-center mb-10">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className="font-semibold">{user?.displayName}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="photo">
                Image URL
              </label>
              <input
                id="photo"
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-700 " htmlFor="comment">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              type="text"
              required
              placeholder="Write Your Comment"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div className="flex mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#1E677C] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 border bg-[#E6E7D4] px-4 py-2">
          <CommentsCard></CommentsCard>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default Details;
