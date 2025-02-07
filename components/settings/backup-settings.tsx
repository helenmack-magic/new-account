"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, UploadCloud } from "lucide-react"

const backupHistory = [
  {
    date: "2025-01-28 14:30:00",
    size: "2.5MB",
    type: "自动备份",
    status: "成功",
  },
  {
    date: "2025-01-27 14:30:00",
    size: "2.4MB",
    type: "手动备份",
    status: "成功",
  },
  {
    date: "2025-01-26 14:30:00",
    size: "2.3MB",
    type: "自动备份",
    status: "成功",
  },
]

export function BackupSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium">数据备份</h3>
            <p className="text-sm text-gray-500 mt-1">系统每天凌晨自动备份数据，您也可以手动备份</p>
          </div>
          <div className="space-x-4">
            <Button variant="outline">
              <UploadCloud className="h-4 w-4 mr-2" />
              导入备份
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              立即备份
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>备份时间</TableHead>
              <TableHead>文件大小</TableHead>
              <TableHead>备份类型</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backupHistory.map((record) => (
              <TableRow key={record.date}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.size}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.status}</TableCell>
                <TableCell>
                  <Button variant="link" className="h-auto p-0">
                    下载
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

