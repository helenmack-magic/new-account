import { SettingsTabs } from "@/components/settings/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">系统设置</h1>
      </div>
      <SettingsTabs />
    </div>
  )
}

