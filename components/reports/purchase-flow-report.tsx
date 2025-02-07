import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const purchaseFlowData = [
  {
    date: "2017.5.9",
    supplier: "供应商1",
    amount: 4000.0,
  },
  {
    date: "2017.4.6",
    supplier: "供应商2",
    amount: 2000.0,
  },
  {
    date: "2017.4.3",
    supplier: "供应商3",
    amount: 1500.0,
  },
  {
    date: "2017.3.2",
    supplier: "供应商4",
    amount: 7500.0,
  },
]

export function PurchaseFlowReport() {
  return (
    <ReportCard
      title="采购流水"
      description="它就是商户采购的流水账单，完全按时间的发生顺序统计采购额、采购的明细账本账"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>供应商名称</TableHead>
            <TableHead>金额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchaseFlowData.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.supplier}</TableCell>
              <TableCell>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

