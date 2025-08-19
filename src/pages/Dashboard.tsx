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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening at your clinic today.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
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
        <DashboardCard
          title="Total Patients"
          value="1,247"
          icon={Users}
          change="+12% from last month"
          changeType="positive"
        />
        <DashboardCard
          title="Today's Visits"
          value={24}
          icon={Calendar}
          change="6 completed, 18 scheduled"
          changeType="neutral"
        />
        <DashboardCard
          title="Today's Revenue"
          value="$3,240"
          icon={DollarSign}
          change="+8% from yesterday"
          changeType="positive"
        />
        <DashboardCard
          title="Active Staff"
          value={18}
          icon={UserCheck}
          change="All staff present"
          changeType="positive"
        />
      </div>

      {/* Recent Visits */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Recent Visit Records</CardTitle>
          <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVisits.map((visit) => (
              <div
                key={visit.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{visit.patient}</p>
                    <p className="text-sm text-muted-foreground">
                      {visit.doctor} • {visit.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{visit.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    visit.status === "Completed" ? "bg-success/10 text-success" :
                    visit.status === "In Progress" ? "bg-warning/10 text-warning" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {visit.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}