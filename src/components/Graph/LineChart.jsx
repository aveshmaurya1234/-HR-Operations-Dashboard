import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#6366F1"],
    grid: { borderColor: "#E5E7EB" },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["01", "05", "10", "15", "20", "25", "30"],
    },
  };

  const series = [
    { name: "Late Comers", data: [5, 8, 6, 10, 7, 4, 6] },
  ];

    return(
        <div className='bg-white rounded-md'>
            <h1 className='mx-5 mt-2 text-xl font-semibold'>Late Coming Trend</h1>
            <Chart type="line" options={options} series={series}  />
        </div>
    )
};

export default LineChart;
