"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, Search, Trash, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadedBy: string
  uploadDate: string
  status: "active" | "archived"
}

const documents: Document[] = [
  {
    id: "1",
    name: "2025年度销售合同模板",
    type: "Word文档",
    size: "258KB",
    uploadedBy: "张三",
    uploadDate: "2025-01-28 14:30:00",
    status: "active",
  },
  {
    id: "2",
    name: "产品价格表",
    type: "Excel表格",
    size: "1.2MB",
    uploadedBy: "李四",
    uploadDate: "2025-01-27 16:45:00",
    status: "active",
  },
  {
    id: "3",
    name: "员工手册V2.0",
    type: "PDF文档",
    size: "3.5MB",
    uploadedBy: "王五",
    uploadDate: "2025-01-26 09:20:00",
    status: "archived",
  },
]

export function DocumentList() {
  const [selectedDocs, setSelectedDocs] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">文档管理</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            导出
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            上传文档
          </Button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索文档..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedDocs.length === documents.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedDocs(documents.map((doc) => doc.id))
                    } else {
                      setSelectedDocs([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>文档名称</TableHead>
              <TableHead>类型</TableHead>
              <TableHead>大小</TableHead>
              <TableHead>上传人</TableHead>
              <TableHead>上传时间</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedDocs.includes(doc.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedDocs([...selectedDocs, doc.id])
                      } else {
                        setSelectedDocs(selectedDocs.filter((id) => id !== doc.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-400" />
                  {doc.name}
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>{doc.uploadedBy}</TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell>
                  <Badge variant={doc.status === "active" ? "default" : "secondary"}>
                    {doc.status === "active" ? "使用中" : "已归档"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
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
      </div>
    </div>
  )
}

