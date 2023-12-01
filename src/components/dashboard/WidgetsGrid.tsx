'use client'

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from ".."
import { useAppSelector } from "@/store"


export const WidgetsGrid = () => {
    const isCart = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap gap-4 p-2 mt-8">
            <SimpleWidget
                title={`${isCart}`}
                subtitle="Products in Cart"
                label="Counter"
                icon={<IoCartOutline size={50} className="text-blue-500" />}
                href="/dashboard/counter"
            />
            {/* <SimpleWidget /> */}
        </div>
    )
}
