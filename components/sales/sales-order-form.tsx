"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { OrderItemsGrid } from "./order-items-grid"
import { CollectionInfo } from "./collection-info"

const formSchema = z.object({
  orderNumber: z.string(),
  customerName: z.string().min(1, "请选择客户"),
  saleDate: z.date(),
  plannedPaymentDate: z.date().optional(),
  deliveryDate: z.date().optional(),
  deliveryAddress: z.string(),
  taxRate: z.string(),
  discount: z.string(),
  notes: z.string(),
  quickOrder: z.boolean().default(false),
  nonProductUse: z.boolean().default(false),
  mainCode: z.boolean().default(false),
  plusMinus: z.boolean().default(false),
  batchPlusMinus: z.boolean().default(false),
  traditionalPopup: z.boolean().default(false),
  matrixOrder: z.boolean().default(false),
  averagePrice: z.boolean().default(false),
  customerItemNumber: z.boolean().default(false),
})

type FormValues = z.infer<typeof formSchema>

export function SalesOrderForm() {
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
      orderNumber: `XS${format(new Date(), "yyyyMMdd")}001`,
      saleDate: new Date(),
      taxRate: "0",
      discount: "0",
      quickOrder: false,
      nonProductUse: false,
      mainCode: false,
      plusMinus: false,
      batchPlusMinus: false,
      traditionalPopup: false,
      matrixOrder: false,
      averagePrice: false,
      customerItemNumber: false,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data, orderItems)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-4">
        <Controller
          name="quickOrder"
          control={control}
          render={({ field }) => (
            <div className="flex items-center space-x-2">
              <Checkbox id="quickOrder" checked={field.value} onCheckedChange={field.onChange} />
              <label htmlFor="quickOrder" className="text-sm font-medium leading-none">
                快捷开单
              </label>
            </div>
          )}
        />
        <div className="ml-auto">销售单号：{watch("orderNumber")}</div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">客户名称</label>
          <Input {...register("customerName")} placeholder="请输入或选择客户" />
          {errors.customerName && <p className="text-sm text-red-500 mt-1">{errors.customerName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">销售日期</label>
          <Controller
            control={control}
            name="saleDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? format(field.value, "yyyy-MM-dd") : "选择日期"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                </PopoverContent>
              </Popover>
            )}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">计划收款日期</label>
          <Controller
            control={control}
            name="plannedPaymentDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? format(field.value, "yyyy-MM-dd") : "选择日期"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                </PopoverContent>
              </Popover>
            )}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">送货地址</label>
        <Input {...register("deliveryAddress")} placeholder="请选择送货地址" />
      </div>

      <div>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-medium">订单信息</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "mainCode", label: "主码" },
              { name: "plusMinus", label: "+/-" },
              { name: "batchPlusMinus", label: "批量+/-" },
              { name: "traditionalPopup", label: "传统弹框" },
              { name: "matrixOrder", label: "矩阵开单" },
              { name: "averagePrice", label: "均价" },
              { name: "customerItemNumber", label: "客户货号" },
              { name: "nonProductUse", label: "非产品费用" },
            ].map((item) => (
              <Controller
                key={item.name}
                name={item.name as keyof FormValues}
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox id={item.name} checked={field.value} onCheckedChange={field.onChange} />
                    <label htmlFor={item.name} className="text-sm font-medium leading-none">
                      {item.label}
                    </label>
                  </div>
                )}
              />
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

      <CollectionInfo />

      <div>
        <label className="block text-sm font-medium mb-1">备注</label>
        <Input {...register("notes")} placeholder="订单备注" />
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline">
          选择附件
        </Button>
        <div className="space-x-2">
          <Button type="submit" variant="outline">
            存为草稿
          </Button>
          <Button type="submit" variant="outline">
            单独开打印
          </Button>
          <Button type="submit">保存销售单</Button>
        </div>
      </div>
    </form>
  )
}

