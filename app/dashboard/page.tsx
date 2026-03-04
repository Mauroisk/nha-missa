import { Card, CardContent } from "@/components/ui/card"
import { Church, Calendar, Radio, Users, Clock, ArrowUpRight } from "lucide-react"
import { dashboardStats, recentActivity } from "@/lib/mock-data"

const statCards = [
  {
    label: "Paroquias",
    value: dashboardStats.totalParishes,
    icon: Church,
    change: "+1 este mes",
  },
  {
    label: "Eventos",
    value: dashboardStats.totalEvents,
    icon: Calendar,
    change: "+3 esta semana",
  },
  {
    label: "Visualizacoes Ao Vivo",
    value: dashboardStats.liveViews.toLocaleString(),
    icon: Radio,
    change: "+12% vs. semana anterior",
  },
  {
    label: "Subscritores",
    value: dashboardStats.subscribers.toLocaleString(),
    icon: Users,
    change: "+48 este mes",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <stat.icon className="h-4 w-4 text-accent" />
                </div>
              </div>
              <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowUpRight className="h-3 w-3 text-green-600" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-border">
        <CardContent className="p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Actividade Recente</h2>
          <div className="flex flex-col gap-4">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
