import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const Drop = () => {
  return (
        <DropdownMenu  >
            <DropdownMenuTrigger asChild >
                <button className="m-4 h-8 w-8  rounded-full flex items-center justify-center hover:bg-gray-100">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  align="end" className='border-b-2 z-50 bg-white py-4 px-4 rounded-md shadow-lg border'>
                    <DropdownMenuItem className='px-2 py-1 hover:bg-blue-100 rounded cursor-pointer outline-none' > This week </DropdownMenuItem>
                    <DropdownMenuItem className='px-2 py-1 hover:bg-blue-100 rounded cursor-pointer outline-none' > This month</DropdownMenuItem>
                    <DropdownMenuItem className='px-2 py-1 hover:bg-blue-100 rounded cursor-pointer outline-none' > Previous month</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Drop
