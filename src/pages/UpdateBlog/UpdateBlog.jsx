import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const blogs = useLoaderData();
 
  const { photo, title, description, longdescription, email, _id } = blogs;

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const longdescription = form.longdescription.value;
    const description = form.description.value;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;

    const updatedBlog = {
      description,
      email,
      photo,
      title,
      longdescription,
    };
    fetch(`https://awesome-blog-steel.vercel.app/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#E6E7D4] border border-emerald-700 p-4 m-4 md:p-24 rounded-3xl">
      <h1 className="text-3xl font-extrabold text-center mb-8 font-serif">
        Update Your Blog
      </h1>
      <form onSubmit={handleUpdateBlog}>
        {/* Title and Description */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text card-title font-serif">
                Title
              </span>
            </label>
            <input
              type="text"
              placeholder="Blog Title"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="title"
              defaultValue={title}
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Short Description
              </span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="description"
              defaultValue={description}
            />
          </div>
        </div>
      
        {/* form User Email and Photo URL */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="photo"
              defaultValue={photo}
            />
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                User Email
              </span>
            </label>
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="email"
              defaultValue={email}
            />
          </div>
        </div>
        {/* Long Description row */}
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text card-title font-serif">
                Long Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Long Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="longdescription"
              defaultValue={longdescription}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Now"
          className="btn btn-block font-bold mt-4 bg-[#1E677E] text-white font-serif"
        />
      </form>
    </div>
  );
};

export default UpdateBlog;
