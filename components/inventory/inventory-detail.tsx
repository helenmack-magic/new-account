"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileDown } from "lucide-react"

interface InventoryMovement {
  date: string
  orderNumber: string
  inStock: string
  outStock: string
  stockBalance: string
  stockPrice: string
  notes: string
  operator: string
}

const movements: InventoryMovement[] = [
  {
    date: "2025-01-18 15:35:22",
    orderNumber: "",
    inStock: "0y (0匹)",
    outStock: "",
    stockBalance: "0y (0匹)",
    stockPrice: "¥0",
    notes: "期初录入",
    operator: "钟",
  },
]

interface InventoryDetailProps {
  id: string
}

export function InventoryDetail({ id }: InventoryDetailProps) {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium">3339#中长玲珑花</h1>
        <Button variant="secondary" className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          导出
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>日期</TableHead>
              <TableHead>红号</TableHead>
              <TableHead>入库</TableHead>
              <TableHead>出库</TableHead>
              <TableHead>库存结余</TableHead>
              <TableHead>库存均价</TableHead>
              <TableHead>详情</TableHead>
              <TableHead>操作人</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movements.map((movement, index) => (
              <TableRow key={index}>
                <TableCell>{movement.date}</TableCell>
                <TableCell>{movement.orderNumber}</TableCell>
                <TableCell>{movement.inStock}</TableCell>
                <TableCell>{movement.outStock}</TableCell>
                <TableCell>{movement.stockBalance}</TableCell>
                <TableCell>{movement.stockPrice}</TableCell>
                <TableCell>{movement.notes}</TableCell>
                <TableCell>{movement.operator}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">共1条</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                {"<"}
              </Button>
              <Button variant="secondary" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm" disabled>
                {">"}
              </Button>
              <span className="text-sm mx-4">20条/页</span>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm">
                  1
                </Button>
                <span className="text-sm">页</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

