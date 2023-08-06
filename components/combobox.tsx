"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { ListItem } from "@/types/popover"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"




interface ComboBoxProps {
    value: string,
    setValue: Function,
    label: string,
    list: ListItem[]
}
export function Combobox({ value,setValue,label,list }: ComboBoxProps) {
    const placeholder = `Search ${label}...`
    const selectOptions = `Select ${label}...`
    const [open, setOpen] = React.useState(false)
    

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? list.find((list: { value: string }) => list.value === value)?.label
                        : selectOptions}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>No options found.</CommandEmpty>
                    <CommandGroup>
                        {list.map((options: { value: React.Key | null | undefined; label: any }) => (
                            <CommandItem
                                key={options.value}
                                onSelect={(currentValue: React.SetStateAction<string>) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === options.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {options.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
