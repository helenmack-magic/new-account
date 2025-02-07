import { Button } from "@/components/ui/button"
import { CustomerTable } from "@/components/customer-table"
import Link from "next/link"

export default function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">客户管理</h1>
        <Link href="/customers/new" passHref>
          <Button as="a">+ 新增客户</Button>
        </Link>
      </div>
      <CustomerTable />
    </div>
  )
}

