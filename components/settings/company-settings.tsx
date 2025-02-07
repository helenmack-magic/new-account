"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "@/components/products/image-upload"

const formSchema = z.object({
  companyName: z.string().min(1, "公司名称不能为空"),
  phone: z.string(),
  address: z.string(),
  taxNumber: z.string(),
  bankName: z.string(),
  bankAccount: z.string(),
  notes: z.string(),
})

export function CompanySettings() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "秒账系统",
      phone: "",
      address: "",
      taxNumber: "",
      bankName: "",
      bankAccount: "",
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                公司名称 <span className="text-red-500">*</span>
              </label>
              <Input {...form.register("companyName")} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">联系电话</label>
              <Input {...form.register("phone")} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">公司地址</label>
              <Input {...form.register("address")} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">税号</label>
              <Input {...form.register("taxNumber")} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">开户行</label>
              <Input {...form.register("bankName")} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">银行账号</label>
              <Input {...form.register("bankAccount")} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">公司Logo</label>
              <ImageUpload value="" onChange={() => {}} label="上传Logo" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">备注</label>
              <Textarea {...form.register("notes")} className="h-[120px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">保存设置</Button>
        </div>
      </form>
    </div>
  )
}

