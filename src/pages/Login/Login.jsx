import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          setUser(true);
        }
      })
      .catch(() => {
        setLoginError("Password did Not Match");
      });
  };
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow bg-[#E6E7D4]">
        <div className="hero-content flex-col">
         <div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-black font-lato">Sign in</h1>
		<p className="text-sm dark:text-gray-600 font-lato">Sign in to access your account</p>
	</div>
          <div className="card shrink-0 w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-emerald-700"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-serif">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered border-emerald-700"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <button className="btn text-white font-semibold text-xl bg-[#1E677C] w-full font-lato mt-4">
                  Sign In
                </button>
              </div>
              <div className="text-center">
                <p className="font-semibold">
                  Don't Have An Account?{" "}
                  <Link
                    to="/register"
                    className="link text-[#1E677C] font-bold no-underline font-lato"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 text-center mb-2">{loginError}</p>
            )}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto border border-[#1E677C] shadow bg-[#E6E7D4]">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-black font-lato">Sign in</h1>
		<p className="text-sm dark:text-gray-600 font-lato">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-lato">Email address</label>
				<input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm font-lato">Password</label>
					<a className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#1E677C] text-white font-lato">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<Link to='/register' className="hover:underline text-[#1E677C] dark:text-violet-600 font-bold font-lato">Sign up</Link>.
			</p>
		</div>
	</form>
   </div> */}
    </div>
  );
};

export default Login;
