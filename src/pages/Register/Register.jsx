import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
     
    const { createUser,setUser,updateUserProfile } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, photoURL, fullName } = data;

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password should have at least one uppercase characters"
      );
      return;
    }
    if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Password should have at least one lowercase characters"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, photoURL,email)
        .then(()=>{
          navigate(location?.state || '/')
         setUser(true)
        })
        
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };


  return (
    <div>
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow bg-[#E6E7D4]">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm">
          <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-black">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign Up to Register your account
          </p>
        </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered border-[#E6E7D4]"
                  name="fullName"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-[#E6E7D4]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered border-[#E6E7D4]"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold font-lato">
                    Password
                  </span>
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="input input-bordered border-[#E6E7D4]"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                
                  <button className="btn bg-[#1E677C] text-white font-semibold font-lato w-full">
                    Register
                  </button>
                
              </div>
              <div className="text-center">
                <p className="font-lato">
                  Already Have An Account?{" "}
                  <Link
                    to="/login"
                    className="link text-[#1E677C] font-semibold no-underline font-lato"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 text-center mb-2">{registerError}</p>
            )}
          </div>
        </div>
       
      </div>








      {/* <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow bg-[#E6E7D4]">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-black">Sign Up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign Up to Register your account
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="photoURL" className="block mb-2 text-sm">
                PhotoURL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter Your Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-[#1E677C] text-white"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account?
              <Link to='/login'
                className="hover:underline text-[#1E677C] dark:text-violet-600 font-bold"
              >
                Sign In
              </Link>
              .
            </p>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Register;
