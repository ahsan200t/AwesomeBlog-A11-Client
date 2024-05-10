import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
const Banner = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-full dark:text-gray-900">
        <button
          aria-label="Slide back"
          type="button"
          className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={banner1}
              alt="Image 1"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={banner2}
              alt="Image 2"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={banner3}
              alt="Image 3"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
