import React from "react";
import sarah from "../assets/images/sarah.png";

const reviews = [
  {
    rating: 4,
    text: "The craftsmanship of my gold bracelet is exceptional. The attention to detail and the quality of the gold is exactly what I was looking for. Will definitely shop again!",
    name: "Sarah Johnson",
    role: "Loyal Customer",

  },
  {
    rating: 4,
    text: "The craftsmanship of my gold bracelet is exceptional. The attention to detail and the quality of the gold is exactly what I was looking for. Will definitely shop again!",
    name: "Sarah Johnson",
    role: "Loyal Customer",
    
  },
  {
    rating: 5,
    text: "The craftsmanship of my gold bracelet is exceptional. The attention to detail and the quality of the gold is exactly what I was looking for. Will definitely shop again!",
    name: "Sarah Johnson",
    role: "Loyal Customer",

  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="border border-[#DDB4FF] p-6 ">
    {/* Star Ratings */}
    <div className="flex mb-3 text-2xl gap-1">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < review.rating ? "text-[#F0EC30]" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>

    {/* Review Text */}
    <p className="text-gray-700 mb-6 text-base leading-relaxed">{review.text}</p>

    {/* Reviewer Info */}
    <div className="flex items-center gap-4">
      <img src={sarah} alt={review.name} className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
        <p className="text-gray-500 text-sm">{review.role}</p>
      </div>
    </div>
  </div>
  );
};

const CustomerReviews = () => {
  return (
    <section className="max-w-7xl mx-auto py-6 px-6">
    <div className=" text-left mb-8">
      <h2 className="text-3xl font-semibold text-gray-900">Customer Love</h2>
      <p className="text-gray-600 text-lg">Real reviews, happy customers! See what they love most.</p>
    </div>

    {/* Responsive Grid Layout */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  </section>
  );
};

export default CustomerReviews;
