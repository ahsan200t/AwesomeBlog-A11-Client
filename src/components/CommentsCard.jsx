import { useEffect, useState } from "react";

const CommentsCard = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://awesome-blog-steel.vercel.app/comments/")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
    const {photoURL,name,comment}=comments;
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>{name}</p>
              </td>
              <td>
                <p>{comment}</p>
              </td>
            </tr>
            </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default CommentsCard;
