import { ReportCard } from "./report-card"

const productSalesData = [
  { product: "产品1", percentage: "50%" },
  { product: "产品2", percentage: "30%" },
  { product: "产品3", percentage: "10%" },
  { product: "产品4", percentage: "20%" },
]

export function ProductSalesOverview() {
  return (
    <ReportCard
      title="产品销售总览"
      description="在这里展示照销售排名的排列，可以看到所有产品的销售排名、销售占比、毛利润"
    >
      <div className="space-y-4">
        {productSalesData.map((item) => (
          <div key={item.product} className="flex items-center justify-between">
            <span className="font-medium">{item.product}</span>
            <div className="flex items-center gap-4">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: item.percentage }} />
              </div>
              <span className="text-sm text-gray-500 w-12">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </ReportCard>
  )
}

