interface ReportCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ReportCard({ title, description, children }: ReportCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

