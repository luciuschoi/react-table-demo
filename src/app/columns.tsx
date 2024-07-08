'use client'

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { format } from 'date-fns';
import { FaArrowsAltV } from "react-icons/fa";
import { DataTableColumnHeader } from './data-table-column-header';
import Link from 'next/link';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  sex: string;
  dob: Date;
  avatar: string;
}

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className='mr-2'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className='ml-1'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    // header: () => <div className='text-center'>ID</div>,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className='text-center'>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'avatar',
    header: () => <div className='text-center'>Avatar</div>,
    cell: ({ row }) => (
      <Image src={row.getValue('avatar')} width={24} height={24} alt='avatar' className='rounded-full mx-auto' />
    ),
  },
  {
    accessorKey: 'first_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
  },
  {
    accessorKey: 'last_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
  },
  {
    accessorKey: 'sex',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => <div className='text-center'>{row.getValue('sex')}</div>
  },
  {
    accessorKey: 'dob',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Birth" />
    ),
    cell: ({ row }) => <div className='text-center'>{format(row.getValue('dob'), 'yyyy-MM-dd')}</div>,
  },
  {
    id: 'actions',
    header: () => <div className='text-center'>Actions</div>,
    cell: ({ row }) => (
      <div className='flex justify-center items-center gap-3'>
        <Link href={`/users/${row.getValue('id')}`} className='text-blue-500'>
          <FaRegEdit />
        </Link>
        <Link href={`/user`} className='text-red-500'>
          <RiDeleteBin5Line />
        </Link>
      </div>
    ),
  }
]