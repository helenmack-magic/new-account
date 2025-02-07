"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"
import Link from "next/link"

interface PurchaseOrder {
  id: string
  orderNumber: string
  supplierName: string
  date: string
  totalAmount: number
  receivedAmount: number
  unpaidAmount: number
  paidAmount: number
  paymentStatus: string
  collectionStatus: string
  creator: string
  relatedOrder: string
}

const purchaseOrders: PurchaseOrder[] = [
  {
    id: "1",
    orderNumber: "CG202501170003",
    supplierName: "德强五金配件",
    date: "2025-01-17",
    totalAmount: 17.0,
    receivedAmount: 0.0,
    unpaidAmount: 0.0,
    paidAmount: 17.0,
    paymentStatus: "全部付款",
    collectionStatus: "未收货",
    creator: "钟",
    relatedOrder: "XS202501170003",
  },
  {
    id: "2",
    orderNumber: "CG202501170002",
    supplierName: "福历",
    date: "2025-01-17",
    totalAmount: 80.0,
    receivedAmount: 0.0,
    unpaidAmount: 0.0,
    paidAmount: 80.0,
    paymentStatus: "全部付款",
    collectionStatus: "未收货",
    creator: "钟",
    relatedOrder: "XS202501170001",
  },
  // Add more sample data as needed
]

export function PurchaseOrderList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <Button variant="secondary">搜索</Button>
          <Button variant="outline">采购流水表</Button>
          <Button variant="outline">收货单</Button>
          <Button variant="outline">未完成</Button>
        </div>
        <div className="space-x-2">
          <Button variant="outline">批量操作</Button>
          <Link href="/purchase/new">
            <Button>+ 新建采购单</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedOrders.length === purchaseOrders.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedOrders(purchaseOrders.map((order) => order.id))
                    } else {
                      setSelectedOrders([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>单号</TableHead>
              <TableHead>供应商名称</TableHead>
              <TableHead>日期</TableHead>
              <TableHead>合同金额</TableHead>
              <TableHead>已收货</TableHead>
              <TableHead>未付款</TableHead>
              <TableHead>已付款</TableHead>
              <TableHead>付款状态</TableHead>
              <TableHead>收货状态</TableHead>
              <TableHead>制单人</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedOrders([...selectedOrders, order.id])
                      } else {
                        setSelectedOrders(selectedOrders.filter((id) => id !== order.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {order.supplierName}
                  </div>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>¥{order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>¥{order.receivedAmount.toFixed(2)}</TableCell>
                <TableCell>¥{order.unpaidAmount.toFixed(2)}</TableCell>
                <TableCell>¥{order.paidAmount.toFixed(2)}</TableCell>
                <TableCell>{order.paymentStatus}</TableCell>
                <TableCell className="text-red-500">{order.collectionStatus}</TableCell>
                <TableCell>{order.creator}</TableCell>
                <TableCell>
                  <Button variant="link" className="text-orange-500 h-auto p-0">
                    {order.relatedOrder}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">共634条</div>
            <Pagination
              currentPage={currentPage}
              totalPages={9}
              onPageChange={setCurrentPage}
              showFirst
              showLast
              itemsPerPage={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

