import { SalesOrderForm } from "@/components/sales/sales-order-form"

export default function SalesOrderPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">新建销售订单</h1>
      </div>
      <SalesOrderForm />
    </div>
  )
}

