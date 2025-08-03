'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Navbar } from './navbar'

function MobileSidebar({
  open,
  close,
  children,
}: {
  open: boolean
  close: () => void
  children: React.ReactNode
}) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition-opacity duration-300 ease-out data-closed:opacity-0"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-out data-closed:-translate-x-full"
      >
        <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-3 px-4 pt-3">
            <Headless.CloseButton as={Navbar} aria-label="Close navigation">
              <Headless.DialogTitle className="sr-only">Navigation</Headless.DialogTitle>
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  )
}

export function StackedLayout({
  navbar,
  sidebar,
  children,
}: {
  navbar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  let [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <div className="relative isolate flex min-h-svh w-full bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      <div className="flex flex-1 flex-col">
        <div className="grow p-2 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-4">
              <Headless.Button
                type="button"
                className="flex size-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 lg:hidden dark:hover:bg-white/5"
                aria-label="Open navigation"
                onClick={() => setShowSidebar(true)}
              >
                <svg viewBox="0 0 15 15" className="size-4 stroke-zinc-900 dark:stroke-white">
                  <path d="m0.5,2.5 14,0 m-14,5 14,0 m-14,5 14,0" fill="none" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </Headless.Button>
              <div className="min-w-0 flex-1">{navbar}</div>
            </div>
            <main className="mt-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}