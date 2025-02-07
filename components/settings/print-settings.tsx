"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  printFormat: z.string(),
  showLogo: z.boolean(),
  showBarcode: z.boolean(),
  showSignature: z.boolean(),
  showWatermark: z.boolean(),
  autoPreview: z.boolean(),
})

const printFormats = [
  { label: "A4纸张", value: "a4" },
  { label: "A5纸张", value: "a5" },
  { label: "热敏纸", value: "thermal" },
]

export function PrintSettings() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      printFormat: "a4",
      showLogo: true,
      showBarcode: true,
      showSignature: true,
      showWatermark: false,
      autoPreview: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">打印格式</label>
            <Select value={form.watch("printFormat")} onValueChange={(value) => form.setValue("printFormat", value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="选择打印格式" />
              </SelectTrigger>
              <SelectContent>
                {printFormats.map((format) => (
                  <SelectItem key={format.value} value={format.value}>
                    {format.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="showLogo"
                checked={form.watch("showLogo")}
                onCheckedChange={(checked) => form.setValue("showLogo", checked as boolean)}
              />
              <label htmlFor="showLogo" className="text-sm font-medium">
                显示公司Logo
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="showBarcode"
                checked={form.watch("showBarcode")}
                onCheckedChange={(checked) => form.setValue("showBarcode", checked as boolean)}
              />
              <label htmlFor="showBarcode" className="text-sm font-medium">
                显示条形码
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="showSignature"
                checked={form.watch("showSignature")}
                onCheckedChange={(checked) => form.setValue("showSignature", checked as boolean)}
              />
              <label htmlFor="showSignature" className="text-sm font-medium">
                显示签名栏
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="showWatermark"
                checked={form.watch("showWatermark")}
                onCheckedChange={(checked) => form.setValue("showWatermark", checked as boolean)}
              />
              <label htmlFor="showWatermark" className="text-sm font-medium">
                显示水印
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="autoPreview"
                checked={form.watch("autoPreview")}
                onCheckedChange={(checked) => form.setValue("autoPreview", checked as boolean)}
              />
              <label htmlFor="autoPreview" className="text-sm font-medium">
                打印前自动预览
              </label>
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

