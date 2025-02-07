"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash, Eye } from "lucide-react"

const data = [
  {
    name: "德州五月花服装",
    type: "批发客户",
    phone: "0534-1234567",
    address: "山东省德州市德城区xxx路xx号",
    balance: "¥51.00",
  },
  {
    name: "华丰服饰",
    type: "经销商",
    phone: "0534-2345678",
    address: "山东省德州市陵城区xxx路xx号",
    balance: "¥30.00",
  },
]

export function CustomerTable() {
  return (
    <div className="bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>客户名称</TableHead>
            <TableHead>客户类型</TableHead>
            <TableHead>联系电话</TableHead>
            <TableHead>地址</TableHead>
            <TableHead>账户余额</TableHead>
            <TableHead>操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((customer, i) => (
            <TableRow key={i}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.type}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.balance}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" title="查看">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="编辑">
                    <Edit className="h-4 w-4" />
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
    </div>
  )
}

