import { useEffect, useState } from "react";
import Card from "./Card";

const CommentsCard = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://awesome-blog-steel.vercel.app/comments/")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      {comments.map((singleComment) => (
        <Card 
        key={singleComment.i} 
        singleComment={singleComment}></Card>
      ))}
    </div>
  );
};

export default CommentsCard;
