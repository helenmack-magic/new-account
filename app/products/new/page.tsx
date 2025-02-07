import { NewProductForm } from "@/components/products/new-product-form"

export default function NewProductPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">新增产品</h1>
      </div>
      <NewProductForm />
    </div>
  )
}

