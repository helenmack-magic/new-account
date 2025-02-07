"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

interface Product {
  id: string
  image: string
  name: string
  unit: string
  price: number
  specifications: string
}

const products: Product[] = [
  {
    id: "1",
    image: "/placeholder.svg",
    name: "0.2盈远格",
    unit: "y",
    price: 14.8,
    specifications: "成本5/m, 14.8/y",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    name: "0.2盈远东",
    unit: "y",
    price: 14.8,
    specifications: "成本5/m, 14.8/y",
  },
  {
    id: "3",
    image: "/placeholder.svg",
    name: "0004#28w弹力牛仔",
    unit: "y",
    price: 26.8,
    specifications: "成本19.5/m, 95, 26.8/码",
  },
  {
    id: "4",
    image: "/placeholder.svg",
    name: "001-SH#",
    unit: "y",
    price: 14.8,
    specifications: "诺纶丝14.8元/y",
  },
  {
    id: "5",
    image: "/placeholder.svg",
    name: "002-JJ#",
    unit: "y",
    price: 19.8,
    specifications: "19.8元/y-雪花",
  },
]

export function ProductList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9
  const itemsPerPage = 20

  return (
    <div className="bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">图片</TableHead>
            <TableHead>名称</TableHead>
            <TableHead className="w-[100px]">单位</TableHead>
            <TableHead className="w-[300px]">参考售价</TableHead>
            <TableHead>备注</TableHead>
            <TableHead className="w-[100px]">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded border"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.unit}</TableCell>
              <TableCell>
                ¥{product.price} {product.specifications}
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">共2145条</div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showFirst
            showLast
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  )
}

