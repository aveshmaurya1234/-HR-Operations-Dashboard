import { MdPersonPinCircle } from "react-icons/md";
import { FaUserMinus } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdHourglassEmpty } from "react-icons/md";
import { MdTrendingDown } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { MdWarning } from "react-icons/md";

const StatCard = () => {
  const cart = [
    { color: "bg-blue-300", title: "Present today", value: 20,  icon : <MdTrendingDown/> },
    { color: "bg-cyan-300", title: "Absent today", value: 30,  icon :  <MdPersonPinCircle size={28} color="#2ecc71" /> },
    { color: "bg-green-300", title: "Employees on leave", value: 50,  icon : <FaUserClock size={28} color="#f39c12" /> },
    { color: "bg-fuchsia-300", title: "New joiners this month", value: 5, icon :<FaUserPlus size={28} color="#27ae60" /> },
    { color: "bg-neutral-300", title: "Pending approvals", value: 10,  icon : <MdHourglassEmpty size={28} color="#f1c40f" /> },
    { color: "bg-yellow-300", title: "Attrition rate", value: 230,  icon : <MdTrendingDown size={28} color="#d9534f" /> },
    { color: "bg-violet-300", title: "Active workforce", value: 50, icon : <FaUsers size={28} color="#2980b9" /> },
    { color: "bg-emerald-300", title: "Overtime hours", value: 7, icon : <MdAccessTime size={28} color="#8e44ad" /> },
    { color: "bg-teal-300", title: "Compliance issues", value: 8, icon :<MdWarning size={28} color="#e67e22" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cart.map((item, index) => (
        <div key={index}  className={`${item.color} shadow-md rounded-xl p-6 flex  justify-between 
                      transition-transform duration-300 hover:scale-105`} >
          <div>
            <p className="text-gray-700 text-sm font-medium">{item.title}</p>
            <h2 className="text-3xl font-extrabold mt-3">{item.value}</h2>
          </div>
          {item.icon}
          
        </div>
        

      ))}
    </div>
  );
};

export default StatCard;

