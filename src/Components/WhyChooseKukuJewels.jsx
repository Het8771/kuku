import React from "react";

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "100% certified gold jewelry",
  },
  {
    id: 2,
    title: "Unique Designs",
    description: "Handcrafted by skilled artisans",
  },
  {
    id: 3,
    title: "Lifetime Warranty",
    description: "On all our jewelry pieces",
  },
  {
    id: 4,
    title: "Secure Payments",
    description: "Multiple payment options",
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="border border-[#DDB4FF] p-6 text-center shadow-md bg-white">
      <div className="bg-[#EAD8FF] text-[#7A29FF] w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold mx-auto mb-3">
        {feature.id}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  );
};

const WhyChooseKukuJewels = () => {
  return (
    <div className="bg-slate-100">
      <section className="max-w-7xl mx-auto py-15 px-6">
        <div className=" mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">Why Choose Kuku Jewels</h2>
          <p className="text-gray-600 text-lg">Unique designs, premium quality—discover the beauty of KUKU JEWELS.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseKukuJewels;
