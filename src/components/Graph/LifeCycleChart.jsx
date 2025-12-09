import React from 'react'
import Chart from 'react-apexcharts'
const LifeCycleChart = () => {
  const options = {
    chart: { toolbar: { show: false } },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    colors: ["#A5B4FC", "#C4B5FD", "#FBCFE8", "#FDE68A", "#A7F3D0"],
    dataLabels: {
      enabled: true,
      style: { colors: ["#111827"] },
      formatter: (val) => `${val}%`,
    },
    xaxis: { categories: ["Applied", "Interviewed", "Selected", "Joined", "Active"] },
    grid: { show: false },
  };

  const series = [
    {
      data: [100, 60, 40, 30, 25], // percentages
    },
  ];

  return(
    <div className='bg-white rounded-md'>
      <h1 className='mx-5 mt-2 text-xl font-semibold'>Employee Lifecycle</h1>
      <Chart type="bar" series={series} options={options} height={350} width={500} />
    </div>
  );
};


export default LifeCycleChart
