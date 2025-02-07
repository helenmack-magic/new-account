import { ReportGrid } from "@/components/reports/report-grid"

export default function ReportsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">报表统计</h1>
      </div>
      <ReportGrid />
    </div>
  )
}

