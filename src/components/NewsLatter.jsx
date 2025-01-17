import toast from "react-hot-toast";
import newsLatter from "../assets/images/newsletter2.png";
const NewsLatter = () => {
    const handleSubscribe=(e)=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      form.reset();
      
      if(email){ 
        return toast.success("Thank You For Subscribing to Our Newsletter")
      }
       
    }
  return (
    <div className="text-center my-16 bg-pink-50 md:p-10 rounded-3xl">
      <img className="mx-auto mb-4 w-18" src={newsLatter} alt="" />
      <h1 className="mb-4 text-4xl font-serif font bold">Subscribe Newsletter</h1>
      <p className="w-1/2 mx-auto">
        You Will Never Miss Our Recent Blog Post. Our NewsLetter is Once A Week
        Every Friday.
      </p>
      <form onSubmit={handleSubscribe}>
          <div className="flex justify-center flex-row-reverse mt-4">
            <button className="flex bg-pink-500 items-center px-3 sm:text-sm rounded-r-3xl dark:bg-gray-300 text-white font-bold">
              Subscribe
            </button>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="flex border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
          </div>
        
      </form>
      <p className="mt-4">We Promise Not To Spam You</p>
    </div>
  );
};

export default NewsLatter;
