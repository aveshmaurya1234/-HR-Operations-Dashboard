import React from 'react'
import Chart from 'react-apexcharts'

const Heatmap = () => {
  const days = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const series = weekdays.map((day) => ({
    name: day,
    data: days.map(() => Math.floor(Math.random() * 60)), // random attendance
  }));

  const options = {
    chart: { toolbar: { show: false } },
    dataLabels: { enabled: false },
    xaxis: { categories: days, labels: { style: { fontSize: "10px" } } },
    yaxis: { labels: { style: { fontSize: "10px" } } },
    legend: { show: false },
    colors: ["#E0E7FF"],
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 4,
        colorScale: {
          ranges: [
            { from: 0, to: 20, color: "#DBEAFE" },
            { from: 21, to: 40, color: "#93C5FD" },
            { from: 41, to: 60, color: "#3B82F6" },
          ],
        },
      },
    },
  };

    return(
        <div className='bg-white rounded-md'>
            <h1 className='mx-5 mt-2 text-xl font-semibold'>Attendance</h1>
            <Chart type="heatmap" series={series} options={options}  />
        </div>
    ) 
};


export default Heatmap





