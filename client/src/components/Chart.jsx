import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const data = [
//   {
//     Timestamp: '2022-09-11',
//     Profit_Percentage: 30,
//   },
//   {
//     Timestamp: '2022-09-11',
//     Profit_Percentage: 7,
//   },
//   {
//     Timestamp: '2022-10-11',
//     Profit_Percentage: 8,
//   },
//   {
//     Timestamp: '2022-11-11',
//     Profit_Percentage: 14,
//   },
//   {
//     Timestamp: '2022-12-11',
//     Profit_Percentage: 12,
//   },
//   {
//     Timestamp: '2023-01-12',
//     Profit_Percentage: 35,
//   },
//   {
//     Timestamp: '2022-09-11',
//     Profit_Percentage: 24,
//   },
// ];

export const Chart = ({ year }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (year) {
      const filteredData = data.filter((item) => {
        return item.Timestamp.substring(0, 4) === year;
      });
      setFiltered(filteredData);
    }
  });
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://samplingserver.onrender.com/api/getData',
      );
      const data = response.data;
      data.map((item) => {
        return {
          Timestamp: item.Timestamp.substring(0, 10),
          Profit_Percentage: item.Profit_Percentage,
        };
      });
      setData(data);
    })();
  }, []);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={filtered.length ? filtered : data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Timestamp" />
        <YAxis dataKey="Profit_Percentage" />
        <Tooltip />
        <defs>
          <linearGradient
            id="lightGreenGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: 'rgba(144, 238, 144, 1)', stopOpacity: 1 }}
            />
            <stop
              offset="99.59%"
              style={{ stopColor: 'rgba(144, 238, 144, 0.2)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="Profit_Percentage"
          stroke="url(#lightGreenGradient)"
          fill="url(#lightGreenGradient)"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
