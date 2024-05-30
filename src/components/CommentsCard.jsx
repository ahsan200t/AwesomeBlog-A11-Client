import { useEffect, useState } from "react";
import Card from "./Card";

const CommentsCard = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/comments/")
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
