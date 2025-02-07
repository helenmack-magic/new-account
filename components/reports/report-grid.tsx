"use client"

import { useState } from "react"
import { SalesFlowReport } from "./sales-flow-report"
import { PurchaseFlowReport } from "./purchase-flow-report"
import { ProductSalesOverview } from "./product-sales-overview"
import { InventoryReport } from "./inventory-report"
import { DeliveryReport } from "./delivery-report"
import { ReceiptReport } from "./receipt-report"
import { SalesPaymentSummary } from "./sales-payment-summary"
import { PurchasePaymentSummary } from "./purchase-payment-summary"
import { DeliveryDetails } from "./delivery-details"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function ReportGrid() {
  const [activeTab, setActiveTab] = useState("sales")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="sales" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="sales"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "sales" && "border-primary",
            )}
          >
            销售单
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "reports" && "border-primary",
            )}
          >
            报表
          </TabsTrigger>
          <TabsTrigger
            value="sales-flow"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "sales-flow" && "border-primary",
            )}
          >
            销售流水
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SalesFlowReport />
            <PurchaseFlowReport />
            <ProductSalesOverview />
            <InventoryReport />
            <DeliveryReport />
            <ReceiptReport />
            <SalesPaymentSummary />
            <PurchasePaymentSummary />
            <DeliveryDetails />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

