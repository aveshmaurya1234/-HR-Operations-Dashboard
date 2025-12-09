import React from 'react'
import Chart from "react-apexcharts";

const AttritionLineChart = () => {
  const options = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#EF4444"],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    grid: { borderColor: "#F3F4F6" },
  };

  const series = [
    { name: "Attrition %", data: [3.2, 4.1, 3.8, 4.3, 4.0, 3.5] },
  ];

    return(
        <div className='bg-white rounded-md'>
            <h1 className='mx-5 mt-2 text-xl font-semibold'>Attrition Trend</h1>
            <Chart type="line" options={options} series={series} height={350} width={500} />
        </div>
    ) 
};

export default AttritionLineChart
