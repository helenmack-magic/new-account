import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const deliveryDetailsData = [
  {
    product: "产品1",
    quantity: 23,
    amount: 4000.0,
  },
  {
    product: "产品2",
    quantity: 32,
    amount: 2000.0,
  },
  {
    product: "产品3",
    quantity: 45,
    amount: 1500.0,
  },
  {
    product: "产品4",
    quantity: 28,
    amount: 7500.0,
  },
]

export function DeliveryDetails() {
  return (
    <ReportCard title="送货明细表" description="这里根据送货日期来筛选的，总览商户每天需要送出的货品明细，同时区分批">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>产品</TableHead>
            <TableHead>送货数量</TableHead>
            <TableHead>送货金额</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveryDetailsData.map((row) => (
            <TableRow key={row.product}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

