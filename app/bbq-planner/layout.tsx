import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BBQ Planner - Smart Shopping List & Event Planning | BBQ Tally',
  description: 'Plan your perfect BBQ with our smart shopping list calculator. Get accurate food quantities, track dietary restrictions, and organize your cookout with professional planning tools.',
  keywords: 'BBQ planner, BBQ shopping list, BBQ calculator, event planning, cookout planner, BBQ party planning, food quantity calculator, BBQ supplies list',
  alternates: {
    canonical: 'https://www.bbqtally.com/bbq-planner'
  }
}

export default function BBQPlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 