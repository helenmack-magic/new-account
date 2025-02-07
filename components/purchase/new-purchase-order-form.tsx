"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { OrderItemsGrid } from "./order-items-grid"
import { PaymentInfo } from "./payment-info"

const formSchema = z.object({
  orderNumber: z.string(),
  supplierName: z.string().min(1, "请选择供应商"),
  purchaseDate: z.date(),
  plannedPaymentDate: z.date().optional(),
  deliveryDate: z.date().optional(),
  deliveryAddress: z.string(),
  taxRate: z.string(),
  discount: z.string(),
  notes: z.string(),
  nonProductUse: z.boolean().default(false),
  plusMinus: z.boolean().default(false),
  batchPlusMinus: z.boolean().default(false),
  matrixOrder: z.boolean().default(false),
  customerItemNumber: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

export function NewPurchaseOrderForm() {
  const [orderItems, setOrderItems] = useState<any[]>([])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderNumber: `CG${format(new Date(), "yyyyMMdd")}001`,
      purchaseDate: new Date(),
      taxRate: "0",
      discount: "0",
      nonProductUse: false,
      plusMinus: false,
      batchPlusMinus: false,
      matrixOrder: false,
      customerItemNumber: false,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data, orderItems)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">基本信息</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2 gap-6 flex-1">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    供应商名称 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <Input {...register("supplierName")} placeholder="请选择供应商" />
                    <Button type="button" variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {errors.supplierName && <p className="text-sm text-red-500 mt-1">{errors.supplierName.message}</p>}
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nonProductUse" {...register("nonProductUse")} />
                    <label htmlFor="nonProductUse" className="text-sm">
                      非产品费用
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">采购日期</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !watch("purchaseDate") && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {watch("purchaseDate") ? format(watch("purchaseDate"), "yyyy-MM-dd") : "选择日期"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={watch("purchaseDate")}
                      onSelect={(date) => {
                        if (date) {
                          register("purchaseDate").onChange({
                            target: { value: date },
                          })
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">计划付款日期</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !watch("plannedPaymentDate") && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {watch("plannedPaymentDate") ? format(watch("plannedPaymentDate"), "yyyy-MM-dd") : "请选择时间"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={watch("plannedPaymentDate")}
                      onSelect={(date) => {
                        if (date) {
                          register("plannedPaymentDate").onChange({
                            target: { value: date },
                          })
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">收货日期</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !watch("deliveryDate") && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {watch("deliveryDate") ? format(watch("deliveryDate"), "yyyy-MM-dd") : "请选择时间"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={watch("deliveryDate")}
                      onSelect={(date) => {
                        if (date) {
                          register("deliveryDate").onChange({
                            target: { value: date },
                          })
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">收货地址</label>
              <Input {...register("deliveryAddress")} placeholder="请选择收货地址" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">订单信息</h2>
            <div className="flex items-center space-x-4">
              {[
                { name: "plusMinus", label: "+/-" },
                { name: "batchPlusMinus", label: "批量+/-" },
                { name: "matrixOrder", label: "矩阵开单" },
                { name: "customerItemNumber", label: "客户货号" },
              ].map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <Checkbox id={item.name} {...register(item.name as keyof FormValues)} />
                  <label htmlFor={item.name} className="text-sm">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <OrderItemsGrid items={orderItems} onItemsChange={setOrderItems} />

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">税率:</label>
              <Input {...register("taxRate")} className="w-24" type="number" min="0" max="100" />
              <span>%</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">优惠金额:</label>
              <Input {...register("discount")} className="w-32" type="number" min="0" />
            </div>
            <div className="ml-auto text-lg font-bold">合同金额: ¥0.00</div>
          </div>
        </div>

        <PaymentInfo />

        <div>
          <label className="block text-sm font-medium mb-1">备注</label>
          <Textarea {...register("notes")} placeholder="订单备注" />
        </div>

        <div>
          <Button type="button" variant="outline">
            选择附件
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="submit" variant="outline">
          保存
        </Button>
        <Button type="submit" variant="outline">
          保存并打印
        </Button>
      </div>
    </form>
  )
}

