import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">合同总额</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥372300.85</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">已收款</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥0.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">预收款</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥0.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">已付款</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥372300.85</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">客户账户</h2>
          <Button>+ 新增客户</Button>
        </div>
        <div className="p-4">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

