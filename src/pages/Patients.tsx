import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";

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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground">
            Manage patient records and information
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patients by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Records ({filteredPatients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date of Birth</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Contact</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Visit</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr 
                    key={patient.id} 
                    className="border-b border-border hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-foreground">{patient.name}</p>
                        <p className="text-sm text-muted-foreground">{patient.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-foreground">
                      {new Date(patient.dob).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-foreground">{patient.contact}</td>
                    <td className="py-4 px-4 text-foreground">
                      {new Date(patient.lastVisit).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === "Active" 
                          ? "bg-success/10 text-success" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm">
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