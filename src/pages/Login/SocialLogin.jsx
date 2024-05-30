import GoogleIcon from "@mui/icons-material/Google";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    googleLogIn().then((result) => {
      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("Successfully Login");
        navigate(location.state || "/");
      });
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-3 divider font-serif">
        Login With
      </h1>
      <div
        onClick={() => handleGoogleLogin(googleLogIn)}
        className="text-red-600 hover:cursor-pointer"
      >
        <GoogleIcon></GoogleIcon>
      </div>
      <Toaster />
    </div>
  );
};

export default SocialLogin;
