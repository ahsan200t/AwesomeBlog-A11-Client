import GoogleIcon from "@mui/icons-material/Google";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogIn();
      const { data } = await axios.post(
        "https://awesome-blog-steel.vercel.app/jwt",
        { email: result?.user?.email },
        { withCredentials: true },  
      );
      
      toast.success("Successfully Login");
      navigate(location.state || "/");
      
    } catch (err) {
    
      toast.error(err?.message);
    }
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
