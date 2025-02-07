import NewCustomerForm from "@/components/new-customer-form"

export default function NewCustomerPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">新增客户</h1>
      <NewCustomerForm />
    </div>
  )
}

