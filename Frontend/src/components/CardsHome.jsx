import React from "react";

function CardsHome() {
  const features = [
    {
      img: "ieTrack.jpg",
      title: "Income & Expense Tracking",
      description: "Easily log and categorize your daily transactions",
    },
    {
      img: " ",
      title: "Budget Management",
      description: "Set budgets, track spending, and stay on top of your financial goals",
    },
    {
      img: " ",
      title: "Savings & Goal Tracking",
      description: "Set financial goals and monitor your progress effortlessly",
    },
    {
      img: " ",
      title: "Financial Reports & Insights",
      description: "Get Visual Insights with charts & reports",
    },
    {
      img: " ",
      title: "Investment Tracking",
      description: "Track stocks, mutual funds & crypto holdings in real-time",
    },
    {
      img: " ",
      title: "Debt Management",
      description: "Plan and track loans, EMI schedules, and credit card dues.",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 w-96 shadow-xl"
            >
              <figure>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsHome;
