import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardTopbar } from "@/components/dashboard-topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="lg:pl-64">
        <DashboardTopbar />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
