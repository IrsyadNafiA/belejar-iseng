import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 p-4 text-white h-screen">
      <h3>SIDEBAR</h3>
      <div className="flex flex-col">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product">product</Link>
      </div>
    </div>
  );
};

export default Sidebar;
