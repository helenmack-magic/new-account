"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Edit, Trash, UserPlus } from "lucide-react"

interface StaffMember {
  id: string
  name: string
  role: string
  department: string
  phone: string
  email: string
  status: "active" | "inactive"
  lastLogin: string
}

const staffMembers: StaffMember[] = [
  {
    id: "1",
    name: "张三",
    role: "管理员",
    department: "销售部",
    phone: "13800138000",
    email: "zhangsan@example.com",
    status: "active",
    lastLogin: "2025-01-28 14:30:00",
  },
  {
    id: "2",
    name: "李四",
    role: "销售经理",
    department: "销售部",
    phone: "13800138001",
    email: "lisi@example.com",
    status: "active",
    lastLogin: "2025-01-28 13:45:00",
  },
  {
    id: "3",
    name: "王五",
    role: "仓库管理员",
    department: "仓储部",
    phone: "13800138002",
    email: "wangwu@example.com",
    status: "inactive",
    lastLogin: "2025-01-27 16:20:00",
  },
]

export function StaffList() {
  const [selectedStaff, setSelectedStaff] = useState<string[]>([])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">员工管理</h1>
        <div className="space-x-2">
          <Button variant="outline">批量操作</Button>
          <Link href="/staff/new">
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              新增员工
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedStaff.length === staffMembers.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedStaff(staffMembers.map((staff) => staff.id))
                    } else {
                      setSelectedStaff([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>姓名</TableHead>
              <TableHead>角色</TableHead>
              <TableHead>部门</TableHead>
              <TableHead>联系电话</TableHead>
              <TableHead>邮箱</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>最后登录</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffMembers.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedStaff.includes(staff.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStaff([...selectedStaff, staff.id])
                      } else {
                        setSelectedStaff(selectedStaff.filter((id) => id !== staff.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>{staff.department}</TableCell>
                <TableCell>{staff.phone}</TableCell>
                <TableCell>{staff.email}</TableCell>
                <TableCell>
                  <Badge variant={staff.status === "active" ? "default" : "secondary"}>
                    {staff.status === "active" ? "在职" : "离职"}
                  </Badge>
                </TableCell>
                <TableCell>{staff.lastLogin}</TableCell>
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
      </div>
    </div>
  )
}

