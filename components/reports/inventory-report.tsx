import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportCard } from "./report-card"

const inventoryData = [
  {
    product: "产品1",
    inStock: 230,
    outStock: 500,
  },
  {
    product: "产品2",
    inStock: 500,
    outStock: 2000,
  },
  {
    product: "产品3",
    inStock: 800,
    outStock: 1500,
  },
  {
    product: "产品4",
    inStock: 300,
    outStock: 7500,
  },
]

export function InventoryReport() {
  return (
    <ReportCard title="进销存报表" description="这是按月已统计的，您可以查看产品期初期末数据以及出入库和盘点的汇总情况">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>产品</TableHead>
            <TableHead>入库数量</TableHead>
            <TableHead>出库数量</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryData.map((row) => (
            <TableRow key={row.product}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.inStock}</TableCell>
              <TableCell>{row.outStock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ReportCard>
  )
}

