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
    <div className="w-64 bg-gradient-to-b from-card to-card/95 border-r border-border min-h-screen flex flex-col backdrop-blur-sm animate-slide-in-right shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground p-3 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">ClinicFlow</h1>
            <p className="text-sm text-muted-foreground">Management System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={item.path} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden",
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-accent hover:to-accent/50 hover:scale-102 hover:shadow-md"
                  )
                }
              >
                {/* Animated background for active state */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-hover/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <item.icon className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-200" />
                <span className="relative z-10">{item.title}</span>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground opacity-60 hover:opacity-100 transition-opacity duration-200">
          © 2024 ClinicFlow
        </div>
      </div>
    </div>
  );
}