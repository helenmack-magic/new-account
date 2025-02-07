"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Package,
  Warehouse,
  DollarSign,
  BarChart,
  Settings,
  Users,
  FileText,
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "仪表盘", href: "/" },
  { icon: Users, label: "客户管理", href: "/customers" },
  { icon: ShoppingCart, label: "销售订单", href: "/sales" },
  { icon: ClipboardList, label: "采购订单", href: "/purchase" },
  { icon: Package, label: "产品管理", href: "/products" },
  { icon: Warehouse, label: "库存管理", href: "/inventory" },
  { icon: DollarSign, label: "费用收入", href: "/finance" },
  { icon: BarChart, label: "报表统计", href: "/reports" },
  { icon: Settings, label: "系统设置", href: "/settings" },
  { icon: Users, label: "员工管理", href: "/staff" },
  { icon: FileText, label: "文档管理", href: "/documents" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-primary">秒账系统</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

