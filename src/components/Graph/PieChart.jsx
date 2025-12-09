import Chart from "react-apexcharts";
import Drop from "./Drop";

const PieChart = () => {
  const options = {
    labels: ["Sick", "Casual", "Earned", "LOP"],
    legend: { show: false },
    dataLabels: { enabled: false },
    chart: { toolbar: { show: false } },
    colors: ["#60A5FA", "#34D399", "#FBBF24", "#F87171"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: { show: true, label: "Leaves", fontSize: "16px" },
          },
        },
      },
    },
  };

  const series = [25, 15, 10, 5];

    return(
        <div className='bg-white rounded-md'>
            <div className="flex justify-between">
                <h1 className='mx-5 mt-2 text-xl font-semibold'>Leave Distribution</h1>
                <Drop/>
            </div>
            <div className="flex justify-center items-center">
                <Chart type="donut" options={options} series={series} height={300}  />
            </div>
        </div>
    )  
};

export default PieChart;
