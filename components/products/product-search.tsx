"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function ProductSearch() {
  return (
    <Button variant="secondary">
      <Search className="h-4 w-4 mr-2" />
      搜索
    </Button>
  )
}

