import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/link";

function Sidebar() {
  return (
    <div className="bg-blue-900 w-48">
      {/* Profile */}
      <div className="text-white flex flex-col py-16 items-center">
        <CircleUserRound size={48} />
        <p>Welcome ... to hell</p>
      </div>

      {/* NavLink */}

      {sidebarLink.map((item) => {
        return (
          <Link
            key={item.label}
            to={item.link}
            className="text-white flex gap-2 px-4 py-4 hover:bg-blue-700"
          >
            <span>
              {item.icon}
            </span>
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
