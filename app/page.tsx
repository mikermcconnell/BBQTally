'use client'

import React, { useState } from 'react'

type FoodItem = {
  id: string
  name: string
  emoji: string
  count: number
}

export default function Home() {
  const [foods, setFoods] = useState<FoodItem[]>([
    { id: 'hotdog', name: 'Hot Dog', emoji: '🌭', count: 0 },
    { id: 'hamburger', name: 'Hamburger', emoji: '🍔', count: 0 },
    { id: 'cheeseburger', name: 'Cheeseburger', emoji: '🧀🍔', count: 0 },
  ])

  const [animatingItem, setAnimatingItem] = useState<string | null>(null)
  const [celebration, setCelebration] = useState(false)
  const [soundEffect, setSoundEffect] = useState<string | null>(null)

  const updateCount = (id: string, increment: boolean) => {
    setFoods(prev => 
      prev.map(food => 
        food.id === id 
          ? { ...food, count: Math.max(0, food.count + (increment ? 1 : -1)) }
          : food
      )
    )
    
    // Trigger animation and sound effects
    setAnimatingItem(id)
    setTimeout(() => setAnimatingItem(null), 300)
    
    // Fun sound effects
    const soundEffects = increment 
      ? ["SIZZLE! 🔥", "YUM! 😋", "MORE! 🎉", "NICE! 👍", "BOOM! 💥"]
      : ["POP! 💨", "OOPS! 😅", "LESS! 📉", "OK! 👌"]
    
    setSoundEffect(soundEffects[Math.floor(Math.random() * soundEffects.length)])
    setTimeout(() => setSoundEffect(null), 800)
    
    // Celebration for milestones
    const newTotal = foods.reduce((sum, food) => 
      sum + (food.id === id ? Math.max(0, food.count + (increment ? 1 : -1)) : food.count), 0
    )
    
    if (increment && (newTotal === 10 || newTotal === 25 || newTotal === 50)) {
      setCelebration(true)
      setTimeout(() => setCelebration(false), 2000)
    }
  }

  const resetAll = () => {
    setFoods(prev => prev.map(food => ({ ...food, count: 0 })))
    setAnimatingItem('reset')
    setTimeout(() => setAnimatingItem(null), 500)
    
    // Fun reset sound effect
    setSoundEffect("FRESH START! 🧹✨")
    setTimeout(() => setSoundEffect(null), 1200)
  }

  const totalCount = foods.reduce((sum, food) => sum + food.count, 0)

  const getFunMessage = (count: number) => {
    if (count === 0) return "Ready to fire up the grill! 🔥"
    if (count <= 5) return "Getting started! Small but mighty BBQ 💪"
    if (count <= 10) return "Nice crowd gathering! 🎉"
    if (count <= 20) return "This is getting serious! 🚀"
    if (count <= 30) return "BBQ party mode activated! 🎊"
    if (count <= 50) return "Epic BBQ feast incoming! 🏆"
    return "BBQ LEGEND STATUS! 👑🔥"
  }

  const getRandomFireEmoji = () => {
    const emojis = ["🔥", "🌶️", "💥", "⚡", "🎯"]
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 relative">
            BBQ Tally 
            {totalCount > 0 && <span className="ml-2 animate-bounce">{getRandomFireEmoji()}</span>}
          </h1>
          <p className="text-gray-600 text-lg mb-3">Quick and easy way to count food preferences at your BBQ</p>
          
          <div className="text-lg font-medium text-orange-600 mb-2">
            {getFunMessage(totalCount)}
          </div>
          
          {totalCount > 0 && (
            <div className="text-2xl font-semibold text-gray-700 bg-white rounded-full px-4 py-2 shadow-md inline-block">
              🍽️ {totalCount} {totalCount === 1 ? 'item' : 'items'} to grill!
            </div>
          )}
        </div>

        {/* Celebration Overlay */}
        {celebration && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="text-6xl animate-bounce">
              🎉 MILESTONE! 🎉
            </div>
          </div>
        )}

        {/* Sound Effect Display */}
        {soundEffect && (
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40">
            <div className="text-3xl font-bold text-orange-600 animate-pop bg-white rounded-full px-4 py-2 shadow-lg border-2 border-orange-200">
              {soundEffect}
            </div>
          </div>
        )}

        {/* Food Counters */}
        <div className="space-y-4 mb-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className={`food-card ${animatingItem === food.id ? 'animate-pop' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl" role="img" aria-label={food.name}>
                    {food.emoji}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{food.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {food.count} {food.count === 1 ? food.name.toLowerCase() : 
                        food.id === 'hotdog' ? 'hot dogs' :
                        food.id === 'hamburger' ? 'hamburgers' : 'cheeseburgers'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateCount(food.id, false)}
                    className={`counter-btn minus-btn ${food.count === 0 ? 'animate-shake' : ''}`}
                    disabled={food.count === 0}
                    aria-label={`Decrease ${food.name} count`}
                    title="Remove one"
                  >
                    -
                  </button>
                  
                  <span className={`text-2xl font-bold text-gray-800 min-w-[3rem] text-center transition-all duration-200 ${animatingItem === food.id ? 'animate-wiggle text-orange-600' : ''}`}>
                    {food.count}
                  </span>
                  
                  <button
                    onClick={() => updateCount(food.id, true)}
                    className="counter-btn plus-btn hover:animate-pulse-fun"
                    aria-label={`Increase ${food.name} count`}
                    title="Add one more!"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={resetAll}
            className={`reset-btn ${animatingItem === 'reset' ? 'animate-bounce-gentle' : ''} ${totalCount === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            disabled={totalCount === 0}
            aria-label="Reset all counts to zero"
          >
            🧹 {totalCount > 0 ? 'Start Fresh' : 'Reset All'}
          </button>
        </div>

        {/* Fun Facts */}
        {totalCount > 15 && (
          <div className="text-center mt-6 p-4 bg-orange-100 rounded-2xl">
            <p className="text-orange-800 font-medium">
              🔥 Pro Tip: That's enough food to feed a hungry crowd! 
              Better start preheating! 🌡️
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p className="mb-2">Perfect for backyard BBQs and cookouts! 🔥</p>
          <p className="text-xs opacity-75">
            Made with ❤️ for grill masters everywhere
          </p>
        </div>
      </div>
    </div>
  )
} 