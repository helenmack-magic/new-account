"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  type: z.string().min(1, "请选择类型"),
  details: z.string(),
  employee: z.string(),
  amount: z.string().min(1, "请输入金额"),
  account: z.string().min(1, "请选择账户"),
  date: z.date(),
  notes: z.string(),
})

const transferFormSchema = z.object({
  fromAccount: z.string().min(1, "请选择付款账户"),
  toAccount: z.string().min(1, "请选择收款账户"),
  amount: z.string().min(1, "请输入转账金额"),
  employee: z.string(),
  date: z.date(),
  notes: z.string(),
})

const expenseTypes = ["热敏纸", "快递", "物流", "档口每季度管理费", "其他"]

const incomeTypes = ["2023年1月利润收入", "其他收入"]

const accounts = [
  {
    name: "现金",
    balance: 1000.0,
  },
  {
    name: "银行转账",
    balance: 5000.0,
  },
  {
    name: "微信支付",
    balance: 2000.0,
  },
  {
    name: "支付宝",
    balance: 3000.0,
  },
]

const employees = ["钟", "李", "王"]

export function FinanceTransactionForm() {
  const [activeTab, setActiveTab] = useState("expense")
  const expenseNumber = "ZC202501260001"
  const incomeNumber = "SR202501260001"
  const transferNumber = "HZ202501260001"

  const expenseForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      notes: "",
    },
  })

  const incomeForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      notes: "",
    },
  })

  const transferForm = useForm<z.infer<typeof transferFormSchema>>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      date: new Date(),
      notes: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema> | z.infer<typeof transferFormSchema>) => {
    console.log(data)
  }

  const [selectedFromAccount, setSelectedFromAccount] = useState<string>("")
  const [selectedToAccount, setSelectedToAccount] = useState<string>("")

  const getAccountBalance = (accountName: string) => {
    const account = accounts.find((a) => a.name === accountName)
    return account ? account.balance.toFixed(2) : "0.00"
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="expense" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="expense"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "expense" && "border-primary",
            )}
          >
            费用支出
          </TabsTrigger>
          <TabsTrigger
            value="income"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "income" && "border-primary",
            )}
          >
            资金收入
          </TabsTrigger>
          <TabsTrigger
            value="transfer"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 py-2",
              activeTab === "transfer" && "border-primary",
            )}
          >
            账户互转单
          </TabsTrigger>
        </TabsList>

        <TabsContent value="expense" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">基本信息</h2>
                <div className="grid gap-6">
                  <div className="flex justify-between items-start">
                    <div className="text-sm text-gray-500">流水单号：{expenseNumber}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">类型</label>
                      <Select onValueChange={(value) => expenseForm.setValue("type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择类型" />
                        </SelectTrigger>
                        <SelectContent>
                          {expenseTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">明细</label>
                      <Input {...expenseForm.register("details")} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">员工</label>
                      <Select onValueChange={(value) => expenseForm.setValue("employee", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择员工" />
                        </SelectTrigger>
                        <SelectContent>
                          {employees.map((employee) => (
                            <SelectItem key={employee} value={employee}>
                              {employee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">金额</label>
                      <Input {...expenseForm.register("amount")} type="number" step="0.01" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">账户</label>
                      <Select onValueChange={(value) => expenseForm.setValue("account", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择账户" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              {account.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">日期</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !expenseForm.watch("date") && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {expenseForm.watch("date") ? format(expenseForm.watch("date"), "yyyy-MM-dd") : "选择日期"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={expenseForm.watch("date")}
                            onSelect={(date) => date && expenseForm.setValue("date", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">备注</label>
                    <Textarea {...expenseForm.register("notes")} placeholder="订单备注" />
                  </div>

                  <div>
                    <Button type="button" variant="outline">
                      选择附件
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <Button onClick={() => expenseForm.handleSubmit(onSubmit)()} type="submit">
              保存
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="income" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">基本信息</h2>
                <div className="grid gap-6">
                  <div className="flex justify-between items-start">
                    <div className="text-sm text-gray-500">流水单号：{incomeNumber}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">类别</label>
                      <Select onValueChange={(value) => incomeForm.setValue("type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择类别" />
                        </SelectTrigger>
                        <SelectContent>
                          {incomeTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">明细</label>
                      <Input {...incomeForm.register("details")} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">员工</label>
                      <Select onValueChange={(value) => incomeForm.setValue("employee", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择" />
                        </SelectTrigger>
                        <SelectContent>
                          {employees.map((employee) => (
                            <SelectItem key={employee} value={employee}>
                              {employee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">金额</label>
                      <Input {...incomeForm.register("amount")} type="number" step="0.01" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">账户</label>
                      <Select onValueChange={(value) => incomeForm.setValue("account", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="现金" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              {account.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">日期</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !incomeForm.watch("date") && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {incomeForm.watch("date") ? format(incomeForm.watch("date"), "yyyy-MM-dd") : "选择日期"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={incomeForm.watch("date")}
                            onSelect={(date) => date && incomeForm.setValue("date", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">备注</label>
                    <Textarea {...incomeForm.register("notes")} placeholder="(打印时显示)" className="min-h-[100px]" />
                  </div>

                  <div>
                    <Button type="button" variant="outline">
                      选择附件
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <Button onClick={() => incomeForm.handleSubmit(onSubmit)()} type="submit">
              保存
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="transfer" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">基本信息</h2>
                <div className="grid gap-6">
                  <div className="flex justify-between items-start">
                    <div className="text-sm text-gray-500">流水单号：{transferNumber}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        付款账户 <span className="text-red-500">*</span>
                      </label>
                      <Select
                        onValueChange={(value) => {
                          transferForm.setValue("fromAccount", value)
                          setSelectedFromAccount(value)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="请选择" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              {account.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedFromAccount && (
                        <div className="text-sm text-gray-500 mt-1">
                          付款账户余额: {getAccountBalance(selectedFromAccount)}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        收款账户 <span className="text-red-500">*</span>
                      </label>
                      <Select
                        onValueChange={(value) => {
                          transferForm.setValue("toAccount", value)
                          setSelectedToAccount(value)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="请选择" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem
                              key={account.name}
                              value={account.name}
                              disabled={account.name === selectedFromAccount}
                            >
                              {account.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedToAccount && (
                        <div className="text-sm text-gray-500 mt-1">
                          收款账户余额: {getAccountBalance(selectedToAccount)}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        转账金额 <span className="text-red-500">*</span>
                      </label>
                      <Input {...transferForm.register("amount")} type="number" step="0.01" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">日期</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !transferForm.watch("date") && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {transferForm.watch("date") ? format(transferForm.watch("date"), "yyyy-MM-dd") : "选择日期"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={transferForm.watch("date")}
                            onSelect={(date) => date && transferForm.setValue("date", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">员工</label>
                      <Select onValueChange={(value) => transferForm.setValue("employee", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择" />
                        </SelectTrigger>
                        <SelectContent>
                          {employees.map((employee) => (
                            <SelectItem key={employee} value={employee}>
                              {employee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">备注</label>
                    <Textarea {...transferForm.register("notes")} placeholder="打印时显示" />
                  </div>

                  <div>
                    <Button type="button" variant="outline">
                      选择附件
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <Button onClick={() => transferForm.handleSubmit(onSubmit)()} type="submit">
              保存
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

