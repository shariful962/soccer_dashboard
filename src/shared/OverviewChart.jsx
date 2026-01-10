import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data for monthly earnings
const earnings2025 = [
  { month: 'Jan', earning: 3000 },
  { month: 'Feb', earning: 5000 },
  { month: 'Mar', earning: 10500 },
  { month: 'Apr', earning: 7000 },
  { month: 'May', earning: 6000 },
  { month: 'Jun', earning: 9000 },
  { month: 'Jul', earning: 11000 },
  { month: 'Aug', earning: 8500 },
  { month: 'Sept', earning: 9500 },
  { month: 'Oct', earning: 6500 },
  { month: 'Nov', earning: 8000 },
  { month: 'Dec', earning: 7500 },
];

const earnings2026 = [
  { month: 'Jan', earning: 4000 },
  { month: 'Feb', earning: 5500 },
  { month: 'Mar', earning: 11000 },
  { month: 'Apr', earning: 8000 },
  { month: 'May', earning: 7000 },
  { month: 'Jun', earning: 10000 },
  { month: 'Jul', earning: 12000 },
  { month: 'Aug', earning: 9500 },
  { month: 'Sept', earning: 10500 },
  { month: 'Oct', earning: 7500 },
  { month: 'Nov', earning: 8500 },
  { month: 'Dec', earning: 9000 },
];

const OverviewChart = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const data = selectedYear === '2025' ? earnings2025 : earnings2026;

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={{ width: '100%', height: 400, position: 'relative' }}>
      <div className="flex justify-between items-center mb-4">
        <h2>Earnings Overview {selectedYear}</h2>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="earning"
            stroke="#8A4FFF"
            fill="url(#gradient)"
            activeDot={{ r: 8 }}
            dot={{ stroke: '#8A4FFF', strokeWidth: 2, fill: '#fff' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stopColor="#8A4FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8A4FFF" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
