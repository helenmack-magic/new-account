"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function PaymentInfo() {
  const summaryData = {
    received: "0.00",
    paid: "0.00",
    prepaid: "0.00",
    unpaid: "0.00",
    advancePayment: "0.00",
  }

  const paymentRecords = [
    {
      date: "2025-01-26",
      amount: "0.00",
      account: "现金",
      notes: "",
      number: "",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-8 text-sm">
        <h3 className="font-medium">付款信息</h3>
        <div className="flex items-center gap-4">
          <span>已收货: ¥{summaryData.received}</span>
          <span>已付款: ¥{summaryData.paid}</span>
          <span>已冲销: ¥{summaryData.prepaid}</span>
          <span>未付款: ¥{summaryData.unpaid}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Checkbox id="useAdvancePayment" />
          <label htmlFor="useAdvancePayment">使用预付款冲销</label>
          <span>¥{summaryData.advancePayment}</span>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>操作</TableHead>
            <TableHead>付款日期</TableHead>
            <TableHead>付款金额</TableHead>
            <TableHead>付款账户</TableHead>
            <TableHead>备注</TableHead>
            <TableHead>付款单号</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>
                <button className="text-red-500 hover:text-red-700">删除</button>
              </TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>{record.account}</TableCell>
              <TableCell>
                <Input value={record.notes} onChange={() => {}} className="min-w-[200px]" />
              </TableCell>
              <TableCell>{record.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

