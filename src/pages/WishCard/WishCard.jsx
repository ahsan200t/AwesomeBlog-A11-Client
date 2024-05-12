/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const WishCard = ({ wish }) => {
  const { photo, title, category, description, _id } = wish;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={photo} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#1E677C]">{category}</h2>
          <h2 className="text-xl font-semibold">{title.slice(0,20)}...</h2>
          <p>{description.slice(0,52)}...</p>
          <div className="card-actions justify-between mt-4">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#1E677C] text-white">Details</button>
            </Link>
            <button className="btn bg-transparent text-3xl text-red-700">
              {" "}
              <MdDeleteForever />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
