import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const purchasePaymentData = [
  {
    supplier: "供应商1",
    date: "2017.5.9",
    amount: 4000.0,
  },
  {
    supplier: "供应商2",
    date: "2017.4.6",
    amount: 1500.0,
  },
  {
    supplier: "供应商3",
    date: "2017.4.3",
    amount: 4500.0,
  },
  {
    supplier: "供应商4",
    date: "2017.3.2",
    amount: 6500.0,
  },
]

export function PurchasePaymentSummary() {
  return (
    <ReportCard
      title="采购付款汇总"
      description="在这里可以看到，与商户发生交易的所有供应商的采购额汇总，以及商户各种费用用途出账、发生交易产品的次数汇总和未付款汇总的数据统计"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>供应商</TableHead>
            <TableHead>日付款</TableHead>
            <TableHead>本月额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchasePaymentData.map((row) => (
            <TableRow key={row.supplier}>
              <TableCell>{row.supplier}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

