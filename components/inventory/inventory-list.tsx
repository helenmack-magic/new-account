"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, FileDown } from "lucide-react"

interface InventoryItem {
  id: string
  image: string
  name: string
  specs: string
  color: string
  quantity: number
  stockQuantity: number
  stockLimit: string
  cost: string
  notes: string
  updateTime: string
}

const inventoryItems: InventoryItem[] = [
  {
    id: "1",
    image: "/placeholder.svg",
    name: "3339#中长玲珑花",
    specs: "10",
    color: "",
    quantity: 0,
    stockQuantity: 0,
    stockLimit: "0y",
    cost: "¥0 成本17.5/m起来, 27...",
    notes: "",
    updateTime: "2025-01-18 15:35:29",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    name: "1815#11w弹力蓝K[2A]铜",
    specs: "39",
    color: "",
    quantity: 0,
    stockQuantity: 0,
    stockLimit: "0y",
    cost: "¥0 成本19.5/m, 空99, 2...",
    notes: "",
    updateTime: "2025-01-17 22:25:37",
  },
]

export function InventoryList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [summaryType, setSummaryType] = useState("合并汇总")

  const totalStats = {
    总匹数: "****",
    总数: "****",
    总价: "****",
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            搜索
          </Button>
          <Select value={summaryType} onValueChange={setSummaryType}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="合并汇总" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="合并汇总">合并汇总</SelectItem>
              <SelectItem value="按颜色汇总">按颜色汇总</SelectItem>
              <SelectItem value="按规格汇总">按规格汇总</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">库存期初/期点</span>
          <Button variant="secondary" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            导出
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-end gap-4 text-sm">
          <span>总匹数: {totalStats.总匹数}</span>
          <span>总数: {totalStats.总数}</span>
          <span>总价: {totalStats.总价}</span>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">图片</TableHead>
              <TableHead>名称</TableHead>
              <TableHead>规格型号</TableHead>
              <TableHead>颜色</TableHead>
              <TableHead>匹数</TableHead>
              <TableHead>库存数量</TableHead>
              <TableHead>库存下限</TableHead>
              <TableHead>成本均价</TableHead>
              <TableHead>备注</TableHead>
              <TableHead>更新日期</TableHead>
              <TableHead className="w-[100px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded border"
                  />
                </TableCell>
                <TableCell>
                  <Link href={`/inventory/${item.id}`} className="font-medium hover:text-primary">
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell>{item.specs}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.stockQuantity}</TableCell>
                <TableCell className="text-red-500">{item.stockLimit}</TableCell>
                <TableCell>{item.cost}</TableCell>
                <TableCell>{item.notes}</TableCell>
                <TableCell>{item.updateTime}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8">
                    <Image src="/placeholder.svg" alt="Action" width={16} height={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">共****条</div>
            <div className="flex items-center gap-2">
              <span className="text-sm">20条/页</span>
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

