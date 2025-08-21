"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  username: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]