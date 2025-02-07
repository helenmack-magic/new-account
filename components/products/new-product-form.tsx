"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"
import { SpecificationTable } from "./specification-table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(1, "产品名称不能为空"),
  code: z.string(),
  unit: z.string().min(1, "请选择单位"),
  multiUnit: z.boolean().default(false),
  syncSpecs: z.boolean().default(false),
  syncColors: z.boolean().default(false),
  isStandard: z.boolean().default(false),
  isNew: z.boolean().default(false),
  isDiscontinued: z.boolean().default(false),
  notes: z.string(),
})

const units = ["y", "m", "件", "个", "条", "套"]

export function NewProductForm() {
  const [mainImage, setMainImage] = useState<string>("")
  const [extraImages, setExtraImages] = useState<string[]>(["", ""])
  const [specifications, setSpecifications] = useState<any[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      multiUnit: false,
      syncSpecs: false,
      syncColors: false,
      isStandard: false,
      isNew: false,
      isDiscontinued: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">产品信息</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  名称 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <Input {...form.register("name")} />
                  <span className="text-gray-500">11127</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">客户码</label>
                <Input {...form.register("code")} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">单位</label>
                <div className="flex items-center gap-4">
                  <Select onValueChange={(value) => form.setValue("unit", value)}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="请选择单位" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="multiUnit"
                      checked={form.watch("multiUnit")}
                      onCheckedChange={(checked) => form.setValue("multiUnit", checked as boolean)}
                    />
                    <label htmlFor="multiUnit" className="text-sm font-medium leading-none">
                      启用多单位
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <ImageUpload value={mainImage} onChange={setMainImage} label="上传主图" />
              {extraImages.map((image, index) => (
                <ImageUpload
                  key={index}
                  value={image}
                  onChange={(value) => {
                    const newImages = [...extraImages]
                    newImages[index] = value
                    setExtraImages(newImages)
                  }}
                  label={`上传副图${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-medium">规格型号</h3>
                <Checkbox
                  id="syncSpecs"
                  checked={form.watch("syncSpecs")}
                  onCheckedChange={(checked) => form.setValue("syncSpecs", checked as boolean)}
                />
                <label htmlFor="syncSpecs" className="text-sm font-medium leading-none">
                  同步到同产品设置统一规格型号
                </label>
              </div>
              <Button type="button" variant="outline" onClick={() => setSpecifications([...specifications, {}])}>
                添加规格
              </Button>
            </div>
            <SpecificationTable specifications={specifications} onSpecificationsChange={setSpecifications} />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isStandard"
                checked={form.watch("isStandard")}
                onCheckedChange={(checked) => form.setValue("isStandard", checked as boolean)}
              />
              <label htmlFor="isStandard" className="text-sm font-medium leading-none">
                标签
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isNew"
                checked={form.watch("isNew")}
                onCheckedChange={(checked) => form.setValue("isNew", checked as boolean)}
              />
              <label htmlFor="isNew" className="text-sm font-medium leading-none">
                新品
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isDiscontinued"
                checked={form.watch("isDiscontinued")}
                onCheckedChange={(checked) => form.setValue("isDiscontinued", checked as boolean)}
              />
              <label htmlFor="isDiscontinued" className="text-sm font-medium leading-none">
                停销
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">备注</label>
            <Textarea {...form.register("notes")} />
          </div>

          <div>
            <Button type="button" variant="outline">
              选择附件
            </Button>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="submit">保存</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

