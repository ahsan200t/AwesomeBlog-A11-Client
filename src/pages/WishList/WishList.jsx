import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const WishList = () => {
    const {user}=useContext(AuthContext)
    const {myWish, setMyWish}=useState([])
    const [blogs,setBlogs]=useState(myWish)

     useEffect(()=>{
          fetch(`https://localhost:5000/wish/${user?.email}`)
          .then(res=>res.json())
          .then(data=>{
            setMyWish(data)
          })
     }, [user,setMyWish])

     
    return (
        <div>
           <h1>Wish:{myWish.length} </h1>
        </div>
    );
};

export default WishList;