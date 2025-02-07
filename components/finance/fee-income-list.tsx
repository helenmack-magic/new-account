"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

interface FeeRecord {
  id: string
  orderNumber: string
  date: string
  category: string
  account: string
  amount: number
  operator: string
  notes?: string
}

const feeRecords: FeeRecord[] = [
  {
    id: "1",
    orderNumber: "ZC202501030001",
    date: "2025-01-03",
    category: "跑腿",
    account: "现金",
    amount: 10.0,
    operator: "钟",
  },
  {
    id: "2",
    orderNumber: "ZC202412240002",
    date: "2024-12-22",
    category: "档口每季度管理费",
    account: "银行转账",
    amount: 2200.0,
    operator: "钟",
  },
  {
    id: "3",
    orderNumber: "ZC202412180002",
    date: "2024-12-18",
    category: "快递",
    account: "现金",
    amount: 20.0,
    operator: "钟",
  },
  // Add more sample data as needed
]

export function FeeIncomeList() {
  const [selectedRecords, setSelectedRecords] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button variant="secondary">搜索</Button>
        <div className="space-x-2">
          <Button variant="outline">批量操作</Button>
          <Link href="/finance/new">
            <Button>+ 新增流水</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedRecords.length === feeRecords.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedRecords(feeRecords.map((record) => record.id))
                    } else {
                      setSelectedRecords([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>单号</TableHead>
              <TableHead>日期</TableHead>
              <TableHead>类别-明细</TableHead>
              <TableHead>账户</TableHead>
              <TableHead>金额</TableHead>
              <TableHead>制单人</TableHead>
              <TableHead>备注</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRecords.includes(record.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRecords([...selectedRecords, record.id])
                      } else {
                        setSelectedRecords(selectedRecords.filter((id) => id !== record.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{record.orderNumber}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {record.category}
                  </div>
                </TableCell>
                <TableCell>{record.account}</TableCell>
                <TableCell>¥{record.amount.toFixed(2)}</TableCell>
                <TableCell>{record.operator}</TableCell>
                <TableCell>{record.notes || ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">共60条</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                {"<"}
              </Button>
              <Button variant="secondary" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
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

