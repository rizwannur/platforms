"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { cn } from "@/lib/utils"

type InputOTPProps = Omit<
  React.ComponentProps<typeof OTPInput>,
  "render"
> & { children?: React.ReactNode }

function InputOTP({
  className,
  containerClassName,
  children,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("flex-1", className)}
      {...props}
    >
      {children}
    </OTPInput>
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <div className="h-4 w-px bg-border" />
    </div>
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const context = React.useContext(OTPInputContext)
  if (!context) return null
  const { slots } = context
  const slot = slots[index]
  if (!slot) return null

  return (
    <div
      data-slot="input-otp-slot"
      data-active={slot.isActive}
      className={cn(
        "border-input bg-background relative flex h-9 w-9 items-center justify-center rounded-md border text-sm shadow-sm transition-all",
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:ring-[3px]",
        "outline-none",
        className
      )}
      {...props}
    >
      {slot.char ?? slot.placeholderChar}
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
