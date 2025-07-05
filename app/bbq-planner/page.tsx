'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

type ShoppingItem = {
  id: string
  name: string
  category: string
  quantity: string
  unit: string
  checked: boolean
  essential: boolean
}

type FoodCalculation = {
  hotdogs: number
  hamburgers: number
  cheeseburgers: number
  buns: number
  cheese: number
}

export default function BBQPlanner() {
  const [guestCount, setGuestCount] = useState<number>(8)
  const [eventDuration, setEventDuration] = useState<number>(3)
  const [mealType, setMealType] = useState<string>('lunch')
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([])
  const [customItems, setCustomItems] = useState<ShoppingItem[]>([])
  const [newItemName, setNewItemName] = useState('')
  const [calculations, setCalculations] = useState<FoodCalculation>({
    hotdogs: 0,
    hamburgers: 0,
    cheeseburgers: 0,
    buns: 0,
    cheese: 0
  })

  // Base shopping list with smart calculations
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([
    // Proteins
    { id: 'hotdogs', name: 'Hot Dogs', category: 'Proteins', quantity: '0', unit: 'packages', checked: false, essential: true },
    { id: 'hamburger-patties', name: 'Hamburger Patties', category: 'Proteins', quantity: '0', unit: 'lbs', checked: false, essential: true },
    { id: 'cheese-slices', name: 'Cheese Slices', category: 'Proteins', quantity: '0', unit: 'packages', checked: false, essential: true },
    
    // Buns & Bread
    { id: 'hotdog-buns', name: 'Hot Dog Buns', category: 'Buns & Bread', quantity: '0', unit: 'packages', checked: false, essential: true },
    { id: 'hamburger-buns', name: 'Hamburger Buns', category: 'Buns & Bread', quantity: '0', unit: 'packages', checked: false, essential: true },
    
    // Condiments & Toppings
    { id: 'ketchup', name: 'Ketchup', category: 'Condiments', quantity: '2', unit: 'bottles', checked: false, essential: true },
    { id: 'mustard', name: 'Mustard', category: 'Condiments', quantity: '2', unit: 'bottles', checked: false, essential: true },
    { id: 'mayo', name: 'Mayonnaise', category: 'Condiments', quantity: '1', unit: 'jar', checked: false, essential: false },
    { id: 'relish', name: 'Relish', category: 'Condiments', quantity: '1', unit: 'jar', checked: false, essential: false },
    { id: 'onions', name: 'Onions', category: 'Fresh Produce', quantity: '2', unit: 'large', checked: false, essential: true },
    { id: 'lettuce', name: 'Lettuce', category: 'Fresh Produce', quantity: '2', unit: 'heads', checked: false, essential: true },
    { id: 'tomatoes', name: 'Tomatoes', category: 'Fresh Produce', quantity: '4', unit: 'large', checked: false, essential: true },
    { id: 'pickles', name: 'Pickles', category: 'Condiments', quantity: '1', unit: 'jar', checked: false, essential: false },
    
    // Sides
    { id: 'chips', name: 'Potato Chips', category: 'Sides', quantity: '3', unit: 'bags', checked: false, essential: true },
    { id: 'coleslaw', name: 'Coleslaw Mix', category: 'Sides', quantity: '2', unit: 'bags', checked: false, essential: false },
    { id: 'baked-beans', name: 'Baked Beans', category: 'Sides', quantity: '2', unit: 'cans', checked: false, essential: false },
    
    // Beverages
    { id: 'water', name: 'Water Bottles', category: 'Beverages', quantity: '2', unit: 'cases', checked: false, essential: true },
    { id: 'soda', name: 'Assorted Sodas', category: 'Beverages', quantity: '2', unit: 'cases', checked: false, essential: true },
    { id: 'beer', name: 'Beer', category: 'Beverages', quantity: '1', unit: 'case', checked: false, essential: false },
    
    // Supplies
    { id: 'plates', name: 'Paper Plates', category: 'Supplies', quantity: '2', unit: 'packages', checked: false, essential: true },
    { id: 'napkins', name: 'Napkins', category: 'Supplies', quantity: '2', unit: 'packages', checked: false, essential: true },
    { id: 'cups', name: 'Cups', category: 'Supplies', quantity: '2', unit: 'packages', checked: false, essential: true },
    { id: 'utensils', name: 'Plastic Utensils', category: 'Supplies', quantity: '1', unit: 'package', checked: false, essential: true },
    { id: 'aluminum-foil', name: 'Aluminum Foil', category: 'Supplies', quantity: '1', unit: 'roll', checked: false, essential: true },
    { id: 'charcoal', name: 'Charcoal', category: 'Supplies', quantity: '1', unit: 'bag', checked: false, essential: true },
    { id: 'lighter-fluid', name: 'Lighter Fluid', category: 'Supplies', quantity: '1', unit: 'bottle', checked: false, essential: true },
  ])

  // Calculate food quantities based on guest count and preferences
  useEffect(() => {
    const basePerPerson = mealType === 'dinner' ? 1.5 : 1.2
    const durationMultiplier = eventDuration > 4 ? 1.3 : 1.0
    const totalMultiplier = basePerPerson * durationMultiplier

    const hotdogCount = Math.ceil(guestCount * 0.4 * totalMultiplier)
    const hamburgerCount = Math.ceil(guestCount * 0.6 * totalMultiplier)
    const cheeseburgerRatio = 0.7 // 70% of hamburgers will be cheeseburgers
    const cheeseCount = Math.ceil(hamburgerCount * cheeseburgerRatio)
    const bunCount = Math.ceil((hotdogCount + hamburgerCount) * 1.1) // 10% extra

    const newCalculations = {
      hotdogs: hotdogCount,
      hamburgers: hamburgerCount,
      cheeseburgers: cheeseCount,
      buns: bunCount,
      cheese: cheeseCount
    }

    setCalculations(newCalculations)

    // Update shopping list quantities
    setShoppingList(prev => prev.map(item => {
      switch (item.id) {
        case 'hotdogs':
          return { ...item, quantity: Math.ceil(hotdogCount / 8).toString() } // 8 per package
        case 'hamburger-patties':
          return { ...item, quantity: Math.ceil(hamburgerCount / 4).toString() } // 4 per lb
        case 'cheese-slices':
          return { ...item, quantity: Math.ceil(cheeseCount / 12).toString() } // 12 per package
        case 'hotdog-buns':
          return { ...item, quantity: Math.ceil(hotdogCount / 8).toString() } // 8 per package
        case 'hamburger-buns':
          return { ...item, quantity: Math.ceil(hamburgerCount / 8).toString() } // 8 per package
        case 'chips':
          return { ...item, quantity: Math.ceil(guestCount / 4).toString() } // 1 bag per 4 people
        case 'water':
          return { ...item, quantity: Math.ceil(guestCount / 12).toString() } // 24 bottles per case
        case 'soda':
          return { ...item, quantity: Math.ceil(guestCount / 12).toString() }
        case 'plates':
          return { ...item, quantity: Math.ceil(guestCount / 25).toString() } // 25 per package
        case 'cups':
          return { ...item, quantity: Math.ceil(guestCount / 25).toString() }
        case 'napkins':
          return { ...item, quantity: Math.ceil(guestCount / 50).toString() } // 50 per package
        default:
          return item
      }
    }))
  }, [guestCount, eventDuration, mealType])

  const toggleDietaryRestriction = (restriction: string) => {
    setDietaryRestrictions(prev => 
      prev.includes(restriction) 
        ? prev.filter(r => r !== restriction)
        : [...prev, restriction]
    )
  }

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const addCustomItem = () => {
    if (newItemName.trim()) {
      const newItem: ShoppingItem = {
        id: `custom-${Date.now()}`,
        name: newItemName.trim(),
        category: 'Custom',
        quantity: '1',
        unit: 'item',
        checked: false,
        essential: false
      }
      setCustomItems(prev => [...prev, newItem])
      setNewItemName('')
    }
  }

  const removeCustomItem = (id: string) => {
    setCustomItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleCustomItem = (id: string) => {
    setCustomItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const groupedItems = [...shoppingList, ...customItems].reduce((groups, item) => {
    const category = item.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {} as Record<string, ShoppingItem[]>)

  const completedItems = [...shoppingList, ...customItems].filter(item => item.checked).length
  const totalItems = shoppingList.length + customItems.length
  const completionPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">📋 BBQ Planner</h1>
              <p className="text-gray-600 mt-1">Smart shopping list and event planning</p>
            </div>
            <div className="flex space-x-3">
              <Link 
                href="/bbq-guide"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                📖 BBQ Guide
              </Link>
              <Link 
                href="/"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                🍔 Food Counter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Planning Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Event Planning</h2>
              
              {/* Guest Count */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Event Duration */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Duration (hours)
                </label>
                <select
                  value={eventDuration}
                  onChange={(e) => setEventDuration(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                  <option value={4}>4 hours</option>
                  <option value={5}>5+ hours</option>
                </select>
              </div>

              {/* Meal Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meal Type
                </label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Light Snack</option>
                </select>
              </div>

              {/* Dietary Restrictions */}
              {/* Removed Dietary Considerations section as requested */}
            </div>

            {/* Food Calculations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Food Calculations</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">🌭 Hot Dogs:</span>
                  <span className="font-semibold text-orange-600">{calculations.hotdogs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">🍔 Hamburgers:</span>
                  <span className="font-semibold text-orange-600">{calculations.hamburgers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">🧀 Cheese Slices:</span>
                  <span className="font-semibold text-orange-600">{calculations.cheese}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">🥖 Total Buns:</span>
                  <span className="font-semibold text-orange-600">{calculations.buns}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>💡 Tip:</strong> Calculations include 10% extra for unexpected guests and bigger appetites.
                </p>
              </div>
            </div>
          </div>

          {/* Shopping List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">🛒 Smart Shopping List</h2>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    {completedItems} of {totalItems} items ({completionPercentage}%)
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Add Custom Item */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Add Custom Item</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter item name..."
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={addCustomItem}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Shopping List by Category */}
              <div className="space-y-6">
                {Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                      {category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 ${
                            item.checked 
                              ? 'bg-green-50 border-green-200' 
                              : item.essential 
                                ? 'bg-white border-orange-200' 
                                : 'bg-white border-gray-200'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={item.checked}
                              onChange={() => 
                                item.category === 'Custom' 
                                  ? toggleCustomItem(item.id)
                                  : toggleShoppingItem(item.id)
                              }
                              className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                            />
                            <div>
                              <span className={`font-medium ${item.checked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                {item.name}
                              </span>
                              {item.essential && !item.checked && (
                                <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                  Essential
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm ${item.checked ? 'text-gray-500' : 'text-gray-700'}`}>
                              {item.quantity} {item.unit}
                            </span>
                            {item.category === 'Custom' && (
                              <button
                                onClick={() => removeCustomItem(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Tips */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🎯 Shopping Tips</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Shop for non-perishables 2-3 days before the event</li>
                  <li>• Buy fresh produce and meat the day before or day of</li>
                  <li>• Check weather forecast - have backup indoor options</li>
                  <li>• Don't forget ice for drinks and keeping food cold</li>
                  <li>• Consider dietary restrictions when shopping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 