import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
     Z`;
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const renderCustomAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#555"
        fontSize={12}
        fontWeight="bold"
      >
        {payload.value}
      </text>
    </g>
  );
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

const PriceChart = ({ lawyerList }) => {
  // Wrap the single object into an array for Recharts
  const coloredLawyers = lawyerList.map((lawyer) => ({
    ...lawyer,
    fill: getRandomColor(),
  }));

  return (
    <div className="my-10 border rounded-2xl border-gray-300 p-6">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={coloredLawyers}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" tick={renderCustomAxisTick} />
          <YAxis />
          {/* Tooltip removed */}
          <Bar
            dataKey="ConsultationFee"
            fill="#8884d8"
            shape={<TriangleBar />}
            barSize={100}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
