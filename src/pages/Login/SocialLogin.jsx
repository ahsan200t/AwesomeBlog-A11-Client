import GoogleIcon from '@mui/icons-material/Google';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const SocialLogin = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const handleSocialLogin = (provider) => {
    provider()
    .then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };
  const { googleLogIn } = useContext(AuthContext);
    return (
        <div className="text-center">
        <h1 className="text-xl font-semibold mb-3 divider font-serif">
          Login With
        </h1>
         <div  onClick={()=>handleSocialLogin(googleLogIn)} className='text-red-600'>
         <GoogleIcon></GoogleIcon><span className='text-[#1E677C] font-lato font-bold'>OOGLE</span>
         </div>
      </div>
    );
};

export default SocialLogin;