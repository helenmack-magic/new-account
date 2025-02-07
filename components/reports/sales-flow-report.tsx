import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const salesFlowData = [
  {
    date: "2017.5.9",
    product: "客户1",
    amount: 4000.0,
  },
  {
    date: "2017.4.6",
    product: "客户2",
    amount: 2000.0,
  },
  {
    date: "2017.4.3",
    product: "客户3",
    amount: 1500.0,
  },
  {
    date: "2017.3.2",
    product: "客户4",
    amount: 7500.0,
  },
]

export function SalesFlowReport() {
  return (
    <ReportCard
      title="销售流水"
      description="它就是商户销售的流水账单，完全按时间的发生顺序统计销售额、成本价、毛利润等本账"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>客户名称</TableHead>
            <TableHead>金额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salesFlowData.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

