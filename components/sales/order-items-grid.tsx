"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash, Copy } from "lucide-react"

interface OrderItem {
  id: number
  product: string
  image: string
  specs: string
  color: string
  size: string
  quantity: number
  unit: string
  price: number
  amount: number
  deliveryNotes: string
  notes: string
}

interface OrderItemsGridProps {
  items: OrderItem[]
  onItemsChange: (items: OrderItem[]) => void
}

export function OrderItemsGrid({ items, onItemsChange }: OrderItemsGridProps) {
  const addNewRow = () => {
    const newItem: OrderItem = {
      id: items.length + 1,
      product: "",
      image: "",
      specs: "",
      color: "",
      size: "",
      quantity: 0,
      unit: "",
      price: 0,
      amount: 0,
      deliveryNotes: "",
      notes: "",
    }
    onItemsChange([...items, newItem])
  }

  const deleteRow = (id: number) => {
    onItemsChange(items.filter((item) => item.id !== id))
  }

  const duplicateRow = (item: OrderItem) => {
    const newItem = { ...item, id: items.length + 1 }
    onItemsChange([...items, newItem])
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">操作</TableHead>
            <TableHead>编号</TableHead>
            <TableHead>产品</TableHead>
            <TableHead>图片</TableHead>
            <TableHead>规格型号</TableHead>
            <TableHead>颜色</TableHead>
            <TableHead>尺码</TableHead>
            <TableHead>总数量</TableHead>
            <TableHead>单位</TableHead>
            <TableHead>单价</TableHead>
            <TableHead>金额</TableHead>
            <TableHead>送货数量</TableHead>
            <TableHead>备注</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={13} className="text-center py-4">
                暂无数据，点击下方"添加行"按钮添加商品
              </TableCell>
            </TableRow>
          ) : (
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" onClick={() => deleteRow(item.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => duplicateRow(item)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <Input className="w-full" value={item.product} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    选择
                  </Button>
                </TableCell>
                <TableCell>
                  <Input className="w-full" value={item.specs} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" value={item.color} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" value={item.size} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" type="number" value={item.quantity} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" value={item.unit} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" type="number" value={item.price} onChange={() => {}} />
                </TableCell>
                <TableCell>{(item.quantity * item.price).toFixed(2)}</TableCell>
                <TableCell>
                  <Input className="w-full" value={item.deliveryNotes} onChange={() => {}} />
                </TableCell>
                <TableCell>
                  <Input className="w-full" value={item.notes} onChange={() => {}} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <div className="p-2 border-t">
        <Button variant="ghost" onClick={addNewRow}>
          <Plus className="h-4 w-4 mr-2" />
          添加行
        </Button>
      </div>
      <div className="p-2 border-t bg-gray-50">
        <div className="flex justify-end text-sm">
          <span>合计：</span>
          <span className="ml-2">0 匹</span>
          <span className="ml-4">0</span>
          <span className="ml-4">0.00</span>
          <span className="ml-4">0</span>
        </div>
      </div>
    </div>
  )
}

