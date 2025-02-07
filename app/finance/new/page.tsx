import { FinanceTransactionForm } from "@/components/finance/finance-transaction-form"

export default function NewFinanceTransactionPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">新增流水</h1>
      </div>
      <FinanceTransactionForm />
    </div>
  )
}

