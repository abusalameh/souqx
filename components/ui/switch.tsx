'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

const colors = {
  red: 'group-data-checked:bg-red-600 group-data-checked:group-data-hover:bg-red-500 group-data-checked:group-data-active:bg-red-600',
  orange:
    'group-data-checked:bg-orange-500 group-data-checked:group-data-hover:bg-orange-400 group-data-checked:group-data-active:bg-orange-500',
  amber:
    'group-data-checked:bg-amber-400 group-data-checked:group-data-hover:bg-amber-300 group-data-checked:group-data-active:bg-amber-400',
  yellow:
    'group-data-checked:bg-yellow-300 group-data-checked:group-data-hover:bg-yellow-200 group-data-checked:group-data-active:bg-yellow-300',
  lime: 'group-data-checked:bg-lime-300 group-data-checked:group-data-hover:bg-lime-200 group-data-checked:group-data-active:bg-lime-300',
  green:
    'group-data-checked:bg-green-600 group-data-checked:group-data-hover:bg-green-500 group-data-checked:group-data-active:bg-green-600',
  emerald:
    'group-data-checked:bg-emerald-600 group-data-checked:group-data-hover:bg-emerald-500 group-data-checked:group-data-active:bg-emerald-600',
  teal: 'group-data-checked:bg-teal-600 group-data-checked:group-data-hover:bg-teal-500 group-data-checked:group-data-active:bg-teal-600',
  cyan: 'group-data-checked:bg-cyan-600 group-data-checked:group-data-hover:bg-cyan-500 group-data-checked:group-data-active:bg-cyan-600',
  sky: 'group-data-checked:bg-sky-600 group-data-checked:group-data-hover:bg-sky-500 group-data-checked:group-data-active:bg-sky-600',
  blue: 'group-data-checked:bg-blue-600 group-data-checked:group-data-hover:bg-blue-500 group-data-checked:group-data-active:bg-blue-600',
  indigo:
    'group-data-checked:bg-indigo-600 group-data-checked:group-data-hover:bg-indigo-500 group-data-checked:group-data-active:bg-indigo-600',
  violet:
    'group-data-checked:bg-violet-600 group-data-checked:group-data-hover:bg-violet-500 group-data-checked:group-data-active:bg-violet-600',
  purple:
    'group-data-checked:bg-purple-600 group-data-checked:group-data-hover:bg-purple-500 group-data-checked:group-data-active:bg-purple-600',
  fuchsia:
    'group-data-checked:bg-fuchsia-600 group-data-checked:group-data-hover:bg-fuchsia-500 group-data-checked:group-data-active:bg-fuchsia-600',
  pink: 'group-data-checked:bg-pink-600 group-data-checked:group-data-hover:bg-pink-500 group-data-checked:group-data-active:bg-pink-600',
  rose: 'group-data-checked:bg-rose-600 group-data-checked:group-data-hover:bg-rose-500 group-data-checked:group-data-active:bg-rose-600',
  zinc: 'group-data-checked:bg-zinc-900 group-data-checked:group-data-hover:bg-zinc-800 group-data-checked:group-data-active:bg-zinc-900 dark:group-data-checked:bg-zinc-600 dark:group-data-checked:group-data-hover:bg-zinc-500 dark:group-data-checked:group-data-active:bg-zinc-600',
}

type Color = keyof typeof colors

export function SwitchGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} data-slot="control" className={clsx(className, 'space-y-3')} />
}

export function SwitchField({
  className,
  ...props
}: { className?: string } & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>) {
  return (
    <div
      {...props}
      data-slot="field"
      className={clsx(
        className,
        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',
        // Control layout
        '[&>[data-slot=control]]:col-start-2 [&>[data-slot=control]]:self-center',
        // Label layout
        '[&>[data-slot=label]]:col-start-1 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start',
        // Description layout
        '[&>[data-slot=description]]:col-start-1 [&>[data-slot=description]]:row-start-2',
        // With description
        '[&_[data-slot=label]]:has-[[data-slot=description]]:font-medium'
      )}
    />
  )
}

export function Switch({
  color = 'zinc',
  className,
  ...props
}: { color?: Color; className?: string } & Omit<Headless.SwitchProps, 'className'>) {
  return (
    <Headless.Switch
      {...props}
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        'group relative isolate inline-flex h-6 w-10 cursor-pointer rounded-full p-1 transition',
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        'before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow',
        // Background color when checked
        colors[color as keyof typeof colors],
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        'dark:before:hidden',
        // Background color applied to control in dark mode
        'dark:bg-white/5 dark:group-data-checked:bg-white/25',
        // Border
        'before:ring-1 before:ring-zinc-950/10 before:ring-inset',
        'dark:ring-1 dark:ring-white/25 dark:ring-inset',
        // Inner highlight shadow
        'after:absolute after:inset-0 after:z-10 after:rounded-full after:shadow-[inset_0_1px_theme(colors.white/15%)]',
        'dark:after:-inset-px dark:after:rounded-full dark:after:shadow-[inset_0_1px_theme(colors.white/15%)]',
        // Focus ring
        'group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500',
        // Disabled
        'group-data-disabled:opacity-50',
        'group-data-disabled:cursor-not-allowed',
        'group-data-disabled:before:bg-gray-950/5',
        'group-data-disabled:dark:group-data-checked:bg-white/15',
        'group-data-disabled:dark:bg-white/[2.5%]',
      ])}
    >
      <span
        className={clsx([
          // Basic layout
          'pointer-events-none relative inline-block size-4 translate-x-0 rounded-full bg-white shadow-sm ring-1 ring-zinc-950/10 transition duration-200 ease-in-out',
          // Move the ball when checked
          'group-data-checked:translate-x-4',
          // Colors
          'group-data-checked:bg-white group-data-checked:shadow-sm group-data-checked:ring-white/20',
          // Disabled
          'group-data-disabled:bg-gray-950/40 group-data-disabled:group-data-checked:bg-white',
          'group-data-disabled:group-data-checked:ring-white/30',
          // Forced colors mode
          'forced-colors:outline forced-colors:outline-1 forced-colors:outline-ButtonText',
          'group-data-disabled:forced-colors:outline-GrayText',
        ])}
      />
    </Headless.Switch>
  )
}