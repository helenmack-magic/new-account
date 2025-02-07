"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z
  .object({
    currentPassword: z.string().min(1, "请输入当前密码"),
    newPassword: z.string().min(6, "新密码至少6位"),
    confirmPassword: z.string().min(6, "确认密码至少6位"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  })

export function AccountSettings() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">当前密码</label>
            <Input type="password" {...form.register("currentPassword")} />
            {form.formState.errors.currentPassword && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.currentPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">新密码</label>
            <Input type="password" {...form.register("newPassword")} />
            {form.formState.errors.newPassword && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.newPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">确认新密码</label>
            <Input type="password" {...form.register("confirmPassword")} />
            {form.formState.errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">修改密码</Button>
        </div>
      </form>
    </div>
  )
}

