/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Card = ({singleComment}) => {
    const {user}=useContext(AuthContext)
    const {photo,comment}=singleComment;
    console.log(singleComment)
    return (
        <div>
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
                        src={photo}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>{user.displayName}</p>
              </td>
              <td>
                <p>{comment}</p>
              </td>
            </tr>
            </tbody>
        
        </table>
      </div> 
    );
};

export default Card;