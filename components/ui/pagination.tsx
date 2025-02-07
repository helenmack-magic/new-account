import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Input } from "./input"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirst?: boolean
  showLast?: boolean
  itemsPerPage?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirst = false,
  showLast = false,
  itemsPerPage = 20,
}: PaginationProps) {
  const pages = Array.from({ length: Math.min(totalPages, 9) }, (_, i) => i + 1)

  return (
    <div className="flex items-center space-x-2">
      {showFirst && (
        <Button variant="outline" size="icon" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      )}
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      {showLast && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      )}
      <div className="flex items-center space-x-2 ml-4">
        <span className="text-sm">{itemsPerPage}条/页</span>
        <div className="flex items-center space-x-1">
          <Input
            type="number"
            value={currentPage}
            onChange={(e) => {
              const value = Number.parseInt(e.target.value)
              if (value > 0 && value <= totalPages) {
                onPageChange(value)
              }
            }}
            className="w-16 h-8"
          />
          <span className="text-sm">页</span>
        </div>
      </div>
    </div>
  )
}

