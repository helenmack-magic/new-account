"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Upload } from "lucide-react"

// 重用现有的 UI 组件
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(1, "客户名称不能为空"),
  type: z.string().min(1, "请选择客户分类"),
  initialAmount: z.string(),
  phone: z.string(),
  commonPhone: z.string(),
  fax: z.string(),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string(),
  address: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function NewCustomerForm() {
  const [addresses, setAddresses] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      initialAmount: "",
      phone: "",
      commonPhone: "",
      fax: "",
      email: "",
      notes: "",
      address: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // 这里您可以处理表单提交逻辑
  }

  const handleAddAddress = () => {
    const currentAddress = watch("address")
    if (currentAddress) {
      setAddresses([...addresses, currentAddress])
      setValue("address", "")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)])
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">基本信息</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              客户名称 <span className="text-red-500">*</span>
            </label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              客户分类
            </label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <option value="">请选择客户分类</option>
                  <option value="retail">零售客户</option>
                  <option value="wholesale">批发客户</option>
                  <option value="distributor">经销商</option>
                </Select>
              )}
            />
            {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="initialAmount" className="block text-sm font-medium text-gray-700">
                期初欠款
              </label>
              <Input id="initialAmount" type="number" {...register("initialAmount")} />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                电话
              </label>
              <Input id="phone" {...register("phone")} />
            </div>

            <div>
              <label htmlFor="commonPhone" className="block text-sm font-medium text-gray-700">
                常用电话
              </label>
              <Input id="commonPhone" {...register("commonPhone")} />
            </div>

            <div>
              <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
                传真
              </label>
              <Input id="fax" {...register("fax")} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              邮箱
            </label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              备注
            </label>
            <Textarea id="notes" {...register("notes")} />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              地址
            </label>
            <div className="flex gap-2">
              <Input id="address" {...register("address")} />
              <Button type="button" onClick={handleAddAddress}>
                添加地址
              </Button>
            </div>
            {addresses.length > 0 && (
              <div className="space-y-2 mt-2">
                {addresses.map((address, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded flex justify-between items-center">
                    <span>{address}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAddresses(addresses.filter((_, i) => i !== index))
                      }}
                    >
                      删除
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">附件</label>
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                选择附件
              </Button>
              <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
            </div>
            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded">
                    {file.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit">保存</Button>
        </div>
      </form>
    </div>
  )
}

