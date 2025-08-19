import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function DashboardCard({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeType = "neutral" 
}: DashboardCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-card to-card/50 border-0 shadow-md">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {title}
        </CardTitle>
        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="h-5 w-5 text-primary group-hover:text-primary-hover" />
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {value}
        </div>
        {change && (
          <p className={`text-xs transition-all duration-200 ${
            changeType === "positive" ? "text-success" :
            changeType === "negative" ? "text-destructive" :
            "text-muted-foreground"
          }`}>
            {change}
          </p>
        )}
        
        {/* Animated border */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-hover w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </CardContent>
    </Card>
  );
}