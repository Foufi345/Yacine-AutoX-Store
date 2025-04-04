import React from "react";

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: "John Doe", review: "Excellent quality and fast shipping!" },
    { id: 2, name: "Sarah Smith", review: "Great customer service and amazing products." },
    { id: 3, name: "Mike Johnson", review: "Highly recommended for car lovers!" },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <p className="italic">"{review.review}"</p>
            <h3 className="font-semibold mt-2">- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
