import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddBlogs = () => {
     
    const { user } = useContext(AuthContext);
    const handleAddBlog = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const title = form.title.value;
      const photo = form.photo.value;
      const category = form.category.value;
      const description = form.description.value;
      const longdescription=form.longdescription.value;
      const email = form.email.value;
      const user = form.user.value;
      const time=form.time.value;
  
      const newBlog = {
        title,
        photo,
        category,
        description,
        longdescription,
        email,
        user,
        time
       
      };
      fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
    }
  return (
    <div className="bg-[#E6E7D4] border-emerald-700 p-4 m-4 md:p-24 rounded-3xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 font-serif">
          Add New Blog
        </h1>
      <form onSubmit={handleAddBlog}>
      <div className="mr-4">
      <input defaultValue={user?.metadata?.lastSignInTime} type="datetime" name="time" className="w-1/2 p-2 rounded-md text-center text-[#C57F23]" />
      </div>
        {/* title Name and photo Name */}
        <div className="md:flex">
            
        <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                Category
              </span>
            </label>
            <select
              type="text"
              placeholder="category"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="category"
            >
               <option>Select Your Category</option>
              <option>Travel</option>
              <option>Thailand</option>
              <option>Indonesia</option> 
            </select>
          </div>

          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">
                Title
              </span>
            </label>

            <input
              type="text"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="title"
            >
            </input>
          </div>
        </div>
        {/* short and long Description */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text card-title font-serif">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="description"
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
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
            />
          </div>
        </div>
        {/* form User Email and User Name row */}
        <div className="md:flex">
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
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text card-title font-serif">
                User Name
              </span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered border-emerald-700 w-full"
              required
              name="user"
              defaultValue={user?.displayName}
            />
          </div>
        </div>
        {/* form Photo url row */}
        <div>
        <div className="form-control w-full md:w-full">
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
            />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-block font-bold mt-4 bg-[#1E677C] text-white font-lato"
        />
      </form>
    </div>
  );
};

export default AddBlogs;
