import React, { useEffect, useRef } from "react";
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
  {
    rating: 5,
    text: "The craftsmanship of my gold bracelet is exceptional. The attention to detail and the quality of the gold is exactly what I was looking for. Will definitely shop again!",
    name: "Sarah Johnson",
    role: "Loyal Customer",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="border border-[#DDB4FF] p-6 flex-none w-full lg:w-80">
      {/* Star Ratings */}
      <div className="flex mb-3 text-2xl gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < review.rating ? "text-[#F0EC30]" : "text-gray-300"}
          >
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
  const reviewsContainerRef = useRef(null);

  // Auto scroll every 3 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (reviewsContainerRef.current) {
        const container = reviewsContainerRef.current;
        container.scrollLeft += container.offsetWidth; // Scroll horizontally by the width of the container
        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
          container.scrollLeft = 0; // Reset scroll when reaching the end
        }
      }
    }, 3000); // Adjust time for auto-scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-6 px-6">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Customer Love</h2>
        <p className="text-gray-600 text-lg">
          Real reviews, happy customers! See what they love most.
        </p>
      </div>

      {/* Scrollable Container with hidden scrollbar */}
      <div className="relative overflow-hidden">
        <div
          ref={reviewsContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hidden"
          style={{
            width: "100%",
            scrollBehavior: "smooth",
            scrollbarWidth: "none", /* Firefox */
          }}
        >
          {/* Render all reviews */}
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          {/* Duplicate reviews for continuous loop effect */}
          {reviews.map((review, index) => (
            <ReviewCard key={index + reviews.length} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
