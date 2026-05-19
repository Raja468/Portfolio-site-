import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}