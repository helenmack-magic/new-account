import { ProductList } from "@/components/products/product-list"
import { ProductSearch } from "@/components/products/product-search"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <ProductSearch />
        <div className="space-x-2">
          <Button variant="outline">批量操作</Button>
          <Link href="/products/new">
            <Button>+ 新增产品</Button>
          </Link>
        </div>
      </div>
      <ProductList />
    </div>
  )
}

