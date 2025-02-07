import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const receiptData = [
  {
    date: "2017.5.9",
    product: "产品1",
    quantity: 4000,
  },
  {
    date: "2017.4.6",
    product: "产品2",
    quantity: 2000,
  },
  {
    date: "2017.4.3",
    product: "产品3",
    quantity: 1500,
  },
  {
    date: "2017.3.2",
    product: "产品4",
    quantity: 7500,
  },
]

export function ReceiptReport() {
  return (
    <ReportCard
      title="收货报表"
      description="这里是按计划收货日期临近3天，总览商户每天需要收到的货品明细，以及整个收货明细的历史账"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>产品</TableHead>
            <TableHead>收货数量</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {receiptData.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

