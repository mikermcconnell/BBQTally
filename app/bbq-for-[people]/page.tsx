// New file for dynamic programmatic SEO pages
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { people: string }
}

const PEOPLE_SIZES = ["10", "20", "30", "50", "100"]

export function generateStaticParams() {
  return PEOPLE_SIZES.map((p) => ({ people: p }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const count = params.people
  return {
    title: `BBQ for ${count} People – Food Quantity Calculator | BBQ Tally`,
    description: `Exact shopping list and food quantities for grilling for ${count} people. Burgers, hot dogs, buns, sides and more – free BBQ party calculator.`,
    alternates: { canonical: `https://www.bbqtally.com/bbq-for-${count}-people` }
  }
}

export default function BBQForPeoplePage({ params }: PageProps) {
  const count = parseInt(params.people, 10)
  if (!PEOPLE_SIZES.includes(params.people)) {
    // Only allow predefined sizes; others show 404
    notFound()
  }

  const hotdogs = Math.ceil(count * 0.4)
  const hamburgers = Math.ceil(count * 0.6)
  const buns = hotdogs + hamburgers + Math.ceil((hotdogs + hamburgers) * 0.1)
  const cheeseSlices = Math.ceil(hamburgers * 0.7)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">BBQ Food Calculator for {count} People</h1>
      <p className="text-gray-700 max-w-2xl text-center mb-6">
        Planning a cookout for {count} guests? Use this quick reference to buy the right amount of food and avoid leftovers.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md space-y-4">
        <div className="flex justify-between font-medium text-gray-800"><span>Hot Dogs 🌭</span><span>{hotdogs}</span></div>
        <div className="flex justify-between font-medium text-gray-800"><span>Hamburgers 🍔</span><span>{hamburgers}</span></div>
        <div className="flex justify-between text-gray-700"><span>Buns (10% extra)</span><span>{buns}</span></div>
        <div className="flex justify-between text-gray-700"><span>Cheese Slices 🧀</span><span>{cheeseSlices}</span></div>
      </div>
      <p className="mt-6 text-center text-gray-600 max-w-xl text-sm">
        Need a different number? Try our <a href="/bbq-planner" className="text-orange-600 font-semibold underline">BBQ Planner</a> or <a href="/" className="text-orange-600 font-semibold underline">Food Counter</a> for real-time tracking.
      </p>
    </div>
  )
} 