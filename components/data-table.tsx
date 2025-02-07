"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash, Eye, FileText, Download } from "lucide-react"

const data = [
  {
    name: "德州五月花服装",
    total: "¥51.00",
    paid: "¥0.00",
    prepaid: "¥0.00",
    unpaid: "¥0.00",
    balance: "¥51.00",
  },
  {
    name: "华丰服饰",
    total: "¥30.00",
    paid: "¥0.00",
    prepaid: "¥0.00",
    unpaid: "¥0.00",
    balance: "¥30.00",
  },
  {
    name: "乐创服饰",
    total: "¥2467.00",
    paid: "¥0.00",
    prepaid: "¥0.00",
    unpaid: "¥0.00",
    balance: "¥2467.00",
  },
]

export function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>供应商名称</TableHead>
          <TableHead>合同金额</TableHead>
          <TableHead>已收款</TableHead>
          <TableHead>预收款</TableHead>
          <TableHead>未付款</TableHead>
          <TableHead>已付款</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.total}</TableCell>
            <TableCell>{row.paid}</TableCell>
            <TableCell>{row.prepaid}</TableCell>
            <TableCell>{row.unpaid}</TableCell>
            <TableCell>{row.balance}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" title="查看">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" title="编辑">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" title="文档">
                  <FileText className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" title="下载">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" title="删除">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

