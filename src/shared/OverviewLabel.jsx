import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const earningsData = [
  { title: "Total Clubs", amount: "5,000",  isMoney: false },
  { title: "Total Users", amount: "200",  isMoney: false },
  { title: "Monthy Earnings", amount: "5,000",  isMoney: true },
];

const OverviewCard = ({ title, amount, change, bgColor, isMoney }) => (
  <div className={`px-6 py-8 rounded-2xl ${bgColor}`}>
    <h3 className="text-2xl font-semibold text-dark1 mb-4">{title}</h3>

    <div className="flex items-center justify-between">
      <p className="text-3xl font-semibold text-[#1C1C1C] mt-2">
        {isMoney ? `$${amount}` : amount}
      </p>

   
    </div>
  </div>
);

const OverviewLabel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {earningsData.map((data, index) => (
        <OverviewCard
          key={index}
          title={data.title}
          amount={data.amount}
          change={data.change}
          isMoney={data.isMoney}
          bgColor={
            index === 0
              ? "bg-[#EDEEFC]"
              : index === 1
              ? "bg-[#E6F1FD]"
              : "bg-[#F0F4F8]"
          }
        />
      ))}
    </div>
  );
};

export default OverviewLabel;
