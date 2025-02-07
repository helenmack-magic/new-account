import { InventoryDetail } from "@/components/inventory/inventory-detail"

export default function InventoryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <InventoryDetail id={params.id} />
    </div>
  )
}

