import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const slide = ({image,text}) => {
    return (
        <div
          className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
      >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-xl font-semibold text-gray-400 lg:text-3xl w-1/2 mx-auto'>
            {text}
          </h1>
          <br />
          <Link to='/all blogs' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#1E677c] rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
            Explore More <ArrowRightAltIcon></ArrowRightAltIcon>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default slide;