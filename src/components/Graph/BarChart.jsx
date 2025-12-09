import Chart from "react-apexcharts";

const BarChart = () => {

  const options = {
    chart: { stacked: false, toolbar: { show: false } },
    colors: ["#4ADE80", "#F87171"],
    dataLabels: { enabled: false },
    legend: { position: "top" },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    grid: { show: false },
  };

  const series = [
    { name: "Overtime", data: [2, 3, 1, 4, 2, 1] },
    { name: "Undertime", data: [1, 2, 1, 1, 3, 2] },
  ];

  return(
    <div className='bg-white rounded-md'>
        <h1 className='mx-5 mt-2 text-xl font-semibold'>Overtime vs Undertime</h1>
        <Chart type="bar" options={options} series={series} />
    </div>
  )
};


export default BarChart;
