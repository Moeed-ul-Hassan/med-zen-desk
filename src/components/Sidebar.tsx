import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  CreditCard, 
  Calendar, 
  MessageSquare, 
  BarChart3,
  Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Patients", path: "/patients", icon: Users },
  { title: "Visit Records", path: "/visits", icon: FileText },
  { title: "Billing", path: "/billing", icon: CreditCard },
  { title: "Staff Schedules", path: "/schedules", icon: Calendar },
  { title: "Messages", path: "/messages", icon: MessageSquare },
  { title: "Reports", path: "/reports", icon: BarChart3 },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-border min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">ClinicFlow</h1>
            <p className="text-sm text-muted-foreground">Management System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          © 2024 ClinicFlow
        </div>
      </div>
    </div>
  );
}