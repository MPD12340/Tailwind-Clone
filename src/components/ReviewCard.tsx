import React from "react";
import { UserReviews } from "../utils/Links";

const ReviewCard: React.FC = () => {
  return (
    <>
      {UserReviews.map((review) => (
        <div key={review.id} className="border-sm bg-slate-50 p-5 rounded-lg">
          <div className="flex gap-x-4">
            <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full"/>
            <div>
              <h2 className="font-semibold">{review.name}</h2>
              <p>{review.position}</p>
            </div>
          </div>
          <div className="mt-5 text-left">
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
