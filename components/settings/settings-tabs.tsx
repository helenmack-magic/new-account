"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanySettings } from "./company-settings"
import { PrintSettings } from "./print-settings"
import { AccountSettings } from "./account-settings"
import { BackupSettings } from "./backup-settings"
import { cn } from "@/lib/utils"

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("company")

  return (
    <Tabs defaultValue="company" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
        <TabsTrigger
          value="company"
          className={cn(
            "rounded-none border-b-2 border-transparent px-4 py-2",
            activeTab === "company" && "border-primary",
          )}
        >
          公司信息
        </TabsTrigger>
        <TabsTrigger
          value="print"
          className={cn(
            "rounded-none border-b-2 border-transparent px-4 py-2",
            activeTab === "print" && "border-primary",
          )}
        >
          打印设置
        </TabsTrigger>
        <TabsTrigger
          value="account"
          className={cn(
            "rounded-none border-b-2 border-transparent px-4 py-2",
            activeTab === "account" && "border-primary",
          )}
        >
          账户设置
        </TabsTrigger>
        <TabsTrigger
          value="backup"
          className={cn(
            "rounded-none border-b-2 border-transparent px-4 py-2",
            activeTab === "backup" && "border-primary",
          )}
        >
          数据备份
        </TabsTrigger>
      </TabsList>

      <TabsContent value="company" className="mt-6">
        <CompanySettings />
      </TabsContent>
      <TabsContent value="print" className="mt-6">
        <PrintSettings />
      </TabsContent>
      <TabsContent value="account" className="mt-6">
        <AccountSettings />
      </TabsContent>
      <TabsContent value="backup" className="mt-6">
        <BackupSettings />
      </TabsContent>
    </Tabs>
  )
}

