import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const salesPaymentData = [
  {
    customer: "客户1",
    date: "2017.5.9",
    amount: 4000.0,
  },
  {
    customer: "客户2",
    date: "2017.4.6",
    amount: 1500.0,
  },
  {
    customer: "客户3",
    date: "2017.4.3",
    amount: 4500.0,
  },
  {
    customer: "客户4",
    date: "2017.3.2",
    amount: 6500.0,
  },
]

export function SalesPaymentSummary() {
  return (
    <ReportCard
      title="销售付款汇总"
      description="在这里可以看到，与商户发生交易的所有客户的销售额汇总，以及发生交易产品的次数汇总和未付款汇总的数据统计"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>客户</TableHead>
            <TableHead>日付款</TableHead>
            <TableHead>本月额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salesPaymentData.map((row) => (
            <TableRow key={row.customer}>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

