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
    { id: 'cheeseburger', name: 'Cheese-burger', emoji: '🧀🍔', count: 0 },
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
      ? [
          "SIZZLE! 🔥", "YUM! 😋", "MORE! 🎉", "NICE! 👍", "BOOM! 💥",
          "TASTY! 🤤", "HUNGRY! 😋", "FEAST! 🍽️", "GRILL! 🔥", "COOK! 👨‍🍳",
          "PARTY! 🎊", "FIRE! 🌶️", "HOT! 🥵", "CRISPY! ✨", "JUICY! 💧",
          "MMMMM! 😍", "SMOKY! 💨", "PERFECT! 💯", "GOLDEN! ⭐", "EPIC! 🚀",
          "LOADED! 📈", "AWESOME! 🙌", "CHOICE! 👌", "STELLAR! ⭐", "WICKED! 😎"
        ]
      : [
          "POP! 💨", "OOPS! 😅", "LESS! 📉", "OK! 👌",
          "MINUS! ➖", "NOPE! 🙅", "BACK! ⬅️", "DOWN! ⬇️", "UNDO! ↩️",
          "REMOVE! ❌", "DELETE! 🗑️", "WHOOPS! 😬", "REDUCE! 📉", "TRIM! ✂️",
          "SHRINK! 📉", "LOWER! ⬇️", "CUT! ✂️", "DROP! 💧", "TAKE! 👋"
        ]
    
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
    const resetEffects = [
      "RESET! 🧹", "CLEAN! ✨", "FRESH! 🆕", "START! 🎯", "CLEAR! 🧽",
      "WIPE! 🗑️", "NEW! 🔄", "BLANK! 📄", "ZERO! 0️⃣", "EMPTY! 🗳️"
    ]
    setSoundEffect(resetEffects[Math.floor(Math.random() * resetEffects.length)])
    setTimeout(() => setSoundEffect(null), 1200)
  }

  const totalCount = foods.reduce((sum, food) => sum + food.count, 0)

  const getFunMessage = (count: number) => {
    const messages = {
      0: ["Ready to fire up the grill! 🔥", "Let's start grilling! 🌭", "BBQ time begins! 🍔", "Fire up those coals! ⚡"],
      small: ["Getting warmed up! 💪", "Nice start! 🎯", "Building the feast! 🔨", "Small but mighty! ⭐", "Just getting started! 🚀"],
      medium: ["Crowd is gathering! 🎉", "This is heating up! 🌡️", "Party vibes! 🎊", "Getting good! 👍", "Momentum building! 📈"],
      large: ["Getting serious now! 🚀", "Big crowd incoming! 👥", "This is major! 💯", "Feast mode! 🍽️", "Going big! 🎯"],
      huge: ["PARTY MODE! 🎊", "Epic proportions! 🏆", "Massive BBQ! 🎪", "Going all out! 🚀", "Beast mode! 💪"],
      legendary: ["LEGEND STATUS! 👑", "BBQ MASTER! 🥇", "EPIC FEAST! 🏆", "GRILL CHAMPION! 🔥", "BBQ HERO! 🦸"]
    }
    
    if (count === 0) return messages[0][Math.floor(Math.random() * messages[0].length)]
    if (count <= 5) return messages.small[Math.floor(Math.random() * messages.small.length)]
    if (count <= 10) return messages.medium[Math.floor(Math.random() * messages.medium.length)]
    if (count <= 20) return messages.large[Math.floor(Math.random() * messages.large.length)]
    if (count <= 30) return messages.huge[Math.floor(Math.random() * messages.huge.length)]
    return messages.legendary[Math.floor(Math.random() * messages.legendary.length)]
  }

  const getRandomFireEmoji = () => {
    const emojis = [
      "🔥", "🌶️", "💥", "⚡", "🎯", "🚀", "⭐", "💯", "🎉", "🔆", 
      "✨", "💫", "🌟", "🎊", "🥵", "🌪️", "💨", "🌈", "🔸", "💎"
    ]
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BBQ Tally",
    "description": "Mobile app to count hot dogs, hamburgers, and cheeseburgers at BBQ parties and cookouts",
    "url": "https://bbqtally.com",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Mike McConnell"
    },
    "keywords": "BBQ counter, barbecue planner, cookout tool, food counter, BBQ party, hot dog counter, hamburger tally"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center p-3 md:p-4">
      <div className="w-full max-w-sm md:max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 relative">
            BBQ Tally 
            {totalCount > 0 && <span className="ml-1 animate-bounce">{getRandomFireEmoji()}</span>}
          </h1>
          <p className="text-gray-600 text-xs md:text-base mb-1">Quick and easy way to count food preferences at your BBQ</p>
          
          <div className="text-xs md:text-base font-medium text-orange-600 mb-1">
            {getFunMessage(totalCount)}
          </div>
          
          {totalCount > 0 && (
            <div className="text-base md:text-xl font-semibold text-gray-700 bg-white rounded-full px-3 py-1 shadow-md inline-block">
              🍽️ {totalCount} {totalCount === 1 ? 'item' : 'items'} to grill!
            </div>
          )}
        </div>

        {/* Celebration Overlay */}
        {celebration && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="text-4xl md:text-6xl animate-bounce">
              🎉 MILESTONE! 🎉
            </div>
          </div>
        )}

        {/* Sound Effect Display */}
        {soundEffect && (
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40">
            <div className="text-lg md:text-2xl font-bold text-orange-600 animate-pop bg-white rounded-full px-3 py-1 shadow-lg border-2 border-orange-200 whitespace-nowrap">
              {soundEffect}
            </div>
          </div>
        )}

        {/* Food Counters */}
        <div className="space-y-2 mb-4">
          {foods.map((food) => (
            <div
              key={food.id}
              className={`food-card ${animatingItem === food.id ? 'animate-pop' : ''}`}
            >
              <div className="flex items-center justify-between min-h-[70px]">
                <div className="flex items-center space-x-2">
                  <span className="text-xl md:text-2xl flex-shrink-0" role="img" aria-label={food.name}>
                    {food.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">{food.name}</h3>
                    <p className="text-gray-500 text-xs leading-tight">
                      {food.count} {food.count === 1 ? food.name.toLowerCase().replace('-', '') : 
                        food.id === 'hotdog' ? 'hot dogs' :
                        food.id === 'hamburger' ? 'hamburgers' : 'cheeseburgers'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => updateCount(food.id, false)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full font-bold text-base md:text-lg transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 ${food.count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
                    disabled={food.count === 0}
                    aria-label={`Decrease ${food.name} count`}
                    title="Remove one"
                  >
                    -
                  </button>
                  
                  <span className={`text-lg md:text-xl font-bold text-gray-800 min-w-[2rem] md:min-w-[2.5rem] text-center transition-all duration-200 ${animatingItem === food.id ? 'animate-wiggle text-orange-600' : ''}`}>
                    {food.count}
                  </span>
                  
                  <button
                    onClick={() => updateCount(food.id, true)}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full font-bold text-base md:text-lg transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 hover:shadow-lg hover:animate-pulse-fun"
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
            className={`bg-gray-600 hover:bg-gray-700 text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${animatingItem === 'reset' ? 'animate-bounce-gentle' : ''} ${totalCount === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            disabled={totalCount === 0}
            aria-label="Reset all counts to zero"
          >
            🧹 {totalCount > 0 ? 'Start Fresh' : 'Reset All'}
          </button>
        </div>

        {/* Fun Facts */}
        {totalCount > 15 && (
          <div className="text-center mt-3 p-2 md:p-3 bg-orange-100 rounded-2xl">
            <p className="text-orange-800 font-medium text-xs md:text-sm">
              🔥 Pro Tip: That's enough food to feed a hungry crowd! 
              Better start preheating! 🌡️
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-4 text-gray-500 text-xs">
          <p className="opacity-75">
            Made with ❤️ for grill masters everywhere
          </p>
        </div>
      </div>
    </div>
    </>
  )
} 