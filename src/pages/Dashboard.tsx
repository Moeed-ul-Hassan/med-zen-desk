import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  UserCheck,
  Clock,
  ChevronRight
} from "lucide-react";

const recentVisits = [
  {
    id: 1,
    patient: "Sarah Johnson",
    doctor: "Dr. Smith",
    time: "09:30 AM",
    type: "Consultation",
    status: "Completed"
  },
  {
    id: 2,
    patient: "Michael Davis",
    doctor: "Dr. Williams",
    time: "10:15 AM",
    type: "Follow-up",
    status: "In Progress"
  },
  {
    id: 3,
    patient: "Emily Brown",
    doctor: "Dr. Johnson",
    time: "11:00 AM",
    type: "Check-up",
    status: "Scheduled"
  },
  {
    id: 4,
    patient: "David Wilson",
    doctor: "Dr. Smith",
    time: "11:30 AM",
    type: "Consultation",
    status: "Scheduled"
  }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div>
          <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening at your clinic today.
          </p>
        </div>
        <div className="text-sm text-muted-foreground bg-card px-4 py-2 rounded-lg shadow-sm border animate-scale-in" style={{ animationDelay: '200ms' }}>
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div style={{ animationDelay: '300ms' }}>
          <DashboardCard
            title="Total Patients"
            value="1,247"
            icon={Users}
            change="+12% from last month"
            changeType="positive"
          />
        </div>
        <div style={{ animationDelay: '400ms' }}>
          <DashboardCard
            title="Today's Visits"
            value={24}
            icon={Calendar}
            change="6 completed, 18 scheduled"
            changeType="neutral"
          />
        </div>
        <div style={{ animationDelay: '500ms' }}>
          <DashboardCard
            title="Today's Revenue"
            value="$3,240"
            icon={DollarSign}
            change="+8% from yesterday"
            changeType="positive"
          />
        </div>
        <div style={{ animationDelay: '600ms' }}>
          <DashboardCard
            title="Active Staff"
            value={18}
            icon={UserCheck}
            change="All staff present"
            changeType="positive"
          />
        </div>
      </div>

      {/* Recent Visits */}
      <Card className="animate-fade-in shadow-lg border-0 bg-gradient-to-br from-card to-card/50" style={{ animationDelay: '700ms' }}>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            Recent Visit Records
          </CardTitle>
          <button className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-200 group">
            <span>View All</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            {recentVisits.map((visit, index) => (
              <div
                key={visit.id}
                className="group flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-gradient-to-r hover:from-accent/30 hover:to-transparent transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-0.5 animate-fade-in"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-full group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300 group-hover:scale-110">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {visit.patient}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {visit.doctor} • {visit.type}
                    </p>
                  </div>
                </div>
                
                <div className="text-right flex items-center gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{visit.time}</p>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 ${
                      visit.status === "Completed" ? "bg-success/10 text-success group-hover:bg-success/20" :
                      visit.status === "In Progress" ? "bg-warning/10 text-warning group-hover:bg-warning/20" :
                      "bg-muted text-muted-foreground group-hover:bg-muted/80"
                    }`}>
                      {visit.status}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}