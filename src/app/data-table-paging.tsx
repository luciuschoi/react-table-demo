import React from 'react'
import { Button } from '@/components/ui/button'
import { Table } from "@tanstack/react-table"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface DataTablePagingProps<TData> {
  table: Table<TData>
}
function DataTablePaging<TData>({ table }: DataTablePagingProps<TData>) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdOutlineKeyboardArrowLeft className='mr-1' /> Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next <MdOutlineKeyboardArrowRight className='ml-1' />
      </Button>
    </div>
  )
}

export default DataTablePaging