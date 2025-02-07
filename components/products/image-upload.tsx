"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Plus } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  value: string
  onChange: (value: string) => void
  label: string
}

export function ImageUpload({ value, onChange, label }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setPreview(result)
        onChange(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative">
      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id={`image-upload-${label}`} />
      {preview ? (
        <div className="relative w-full aspect-square">
          <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover rounded-lg" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 bg-white/80 hover:bg-white/90"
            onClick={() => {
              setPreview(null)
              onChange("")
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <label
          htmlFor={`image-upload-${label}`}
          className="flex flex-col items-center justify-center w-full aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer"
        >
          <Plus className="h-8 w-8 text-gray-400" />
          <span className="mt-2 text-sm text-gray-500">{label}</span>
        </label>
      )}
    </div>
  )
}

