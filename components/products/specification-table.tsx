"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"

interface Specification {
  id?: string
  specs?: string
  color?: string
  image?: string
  initialInventory?: number
  inventoryStorage?: string
  storageLocation?: string
  unit?: string
  price?: number
}

interface SpecificationTableProps {
  specifications: Specification[]
  onSpecificationsChange: (specs: Specification[]) => void
}

export function SpecificationTable({ specifications, onSpecificationsChange }: SpecificationTableProps) {
  const handleDelete = (index: number) => {
    const newSpecs = specifications.filter((_, i) => i !== index)
    onSpecificationsChange(newSpecs)
  }

  const handleChange = (index: number, field: keyof Specification, value: any) => {
    const newSpecs = [...specifications]
    newSpecs[index] = { ...newSpecs[index], [field]: value }
    onSpecificationsChange(newSpecs)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>规格</TableHead>
          <TableHead>颜色</TableHead>
          <TableHead>图片</TableHead>
          <TableHead>期初库存</TableHead>
          <TableHead>库存存储</TableHead>
          <TableHead>库存下限</TableHead>
          <TableHead>单位</TableHead>
          <TableHead>售价</TableHead>
          <TableHead>进价</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specifications.map((spec, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input value={spec.specs || ""} onChange={(e) => handleChange(index, "specs", e.target.value)} />
            </TableCell>
            <TableCell>
              <Input value={spec.color || ""} onChange={(e) => handleChange(index, "color", e.target.value)} />
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                选择
              </Button>
            </TableCell>
            <TableCell>
              <Input
                type="number"
                value={spec.initialInventory || ""}
                onChange={(e) => handleChange(index, "initialInventory", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                value={spec.inventoryStorage || ""}
                onChange={(e) => handleChange(index, "inventoryStorage", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                value={spec.storageLocation || ""}
                onChange={(e) => handleChange(index, "storageLocation", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input value={spec.unit || ""} onChange={(e) => handleChange(index, "unit", e.target.value)} />
            </TableCell>
            <TableCell>
              <Input
                type="number"
                value={spec.price || ""}
                onChange={(e) => handleChange(index, "price", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="number"
                value={spec.price || ""}
                onChange={(e) => handleChange(index, "price", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(index)}>
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {specifications.length === 0 && (
          <TableRow>
            <TableCell colSpan={10} className="text-center py-4 text-gray-500">
              点击"添加规格"按钮添加产品规格
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

