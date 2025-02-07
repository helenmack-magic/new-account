import { NewPurchaseOrderForm } from "@/components/purchase/new-purchase-order-form"

export default function NewPurchaseOrderPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">新建采购单</h1>
      </div>
      <NewPurchaseOrderForm />
    </div>
  )
}

