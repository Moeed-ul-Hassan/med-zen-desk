import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, MoreHorizontal, Users } from "lucide-react";

const patientsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    dob: "1985-03-15",
    contact: "(555) 123-4567",
    email: "sarah.johnson@email.com",
    lastVisit: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Davis",
    dob: "1978-11-22",
    contact: "(555) 234-5678",
    email: "michael.davis@email.com",
    lastVisit: "2024-01-10",
    status: "Active"
  },
  {
    id: 3,
    name: "Emily Brown",
    dob: "1992-07-08",
    contact: "(555) 345-6789",
    email: "emily.brown@email.com",
    lastVisit: "2023-12-20",
    status: "Inactive"
  },
  {
    id: 4,
    name: "David Wilson",
    dob: "1965-09-30",
    contact: "(555) 456-7890",
    email: "david.wilson@email.com",
    lastVisit: "2024-01-12",
    status: "Active"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    dob: "1980-12-05",
    contact: "(555) 567-8901",
    email: "lisa.anderson@email.com",
    lastVisit: "2024-01-08",
    status: "Active"
  }
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patientsData.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contact.includes(searchTerm)
  );

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div>
          <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Patients
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage patient records and information
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '200ms' }}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="animate-fade-in shadow-lg border-0 bg-gradient-to-br from-card to-card/50" style={{ animationDelay: '300ms' }}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
              <Input
                placeholder="Search patients by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-0 bg-background/50 focus:bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:shadow-lg"
              />
            </div>
            <Button variant="outline" size="sm" className="hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 hover:scale-105">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card className="animate-fade-in shadow-lg border-0 bg-gradient-to-br from-card to-card/50" style={{ animationDelay: '400ms' }}>
        <CardHeader className="border-b border-border/50">
          <CardTitle className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            Patient Records ({filteredPatients.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/20">
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">Name</th>
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">Date of Birth</th>
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">Contact</th>
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">Last Visit</th>
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground text-sm">Status</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr 
                    key={patient.id} 
                    className="group border-b border-border/30 hover:bg-gradient-to-r hover:from-accent/30 hover:to-transparent transition-all duration-300 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${500 + index * 50}ms` }}
                  >
                    <td className="py-5 px-6">
                      <div className="group-hover:translate-x-1 transition-transform duration-200">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {patient.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{patient.email}</p>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-foreground">
                      {new Date(patient.dob).toLocaleDateString()}
                    </td>
                    <td className="py-5 px-6 text-foreground">{patient.contact}</td>
                    <td className="py-5 px-6 text-foreground">
                      {new Date(patient.lastVisit).toLocaleDateString()}
                    </td>
                    <td className="py-5 px-6">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        patient.status === "Active" 
                          ? "bg-success/10 text-success group-hover:bg-success/20 group-hover:shadow-sm" 
                          : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary/5 hover:scale-110">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}