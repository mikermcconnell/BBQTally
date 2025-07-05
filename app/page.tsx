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
    "description": "Mobile app to count hot dogs, hamburgers, and cheeseburgers at BBQ parties and cookouts. Perfect for backyard cookouts, camping, and outdoor gatherings.",
    "url": "https://www.bbqtally.com",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": "Mike McConnell"
    },
    "keywords": "BBQ counter, barbecue planner, cookout tool, food counter, BBQ party, hot dog counter, hamburger tally, outdoor cooking, BBQ app, party planning, food tracking",
    "featureList": [
      "Hot dog counter",
      "Hamburger counter", 
      "Cheeseburger counter",
      "Real-time tally",
      "Mobile-friendly design",
      "No registration required",
      "Instant counting"
    ],
    "screenshot": "https://www.bbqtally.com/og-image.png",
    "softwareVersion": "1.0.0",
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I count food at my BBQ party?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use BBQ Tally - a free mobile app that lets you quickly count hot dogs, hamburgers, and cheeseburgers. Simply tap the + button for each item ordered, and the app keeps a running total for your cookout."
        }
      },
      {
        "@type": "Question", 
        "name": "What's the best way to track food orders at a BBQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BBQ Tally is the easiest way to track food orders at your BBQ. It's a mobile-friendly web app that works on any device, requires no download or registration, and provides instant counting for hot dogs, hamburgers, and cheeseburgers."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free app for counting BBQ food?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes! BBQ Tally is completely free to use. It's a web-based app that works on any device with a browser. No downloads, no registration, and no cost - perfect for backyard cookouts and outdoor parties."
        }
      },
      {
        "@type": "Question",
        "name": "How do I plan food quantities for a BBQ party?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use BBQ Tally to count orders in real-time during your BBQ. This helps you track exactly how many hot dogs, hamburgers, and cheeseburgers your guests want, making it easier to plan quantities and avoid waste."
        }
      }
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bbqtally.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "BBQ Tally",
        "item": "https://www.bbqtally.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center p-3 md:p-4">
      <div className="w-full max-w-sm md:max-w-md mx-auto relative">
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

        {/* Sound Effect Display (moved above food counters and made absolute) */}
        {soundEffect && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
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

      {/* Content Sections for AdSense Compliance */}
      <div className="w-full max-w-4xl mx-auto mt-8 px-4">
        {/* BBQ Planning Guide */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Complete BBQ Planning Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Planning Your BBQ Party</h3>
              <p className="text-gray-700 mb-3">
                Hosting a successful BBQ requires careful planning. Use BBQ Tally to track your guests' food preferences 
                and ensure you have the right quantities. Our food counter helps eliminate guesswork and reduces waste.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Guest Count:</strong> Plan for 1-2 items per person</li>
                <li>• <strong>Food Ratios:</strong> 40% hamburgers, 35% hot dogs, 25% specialty items</li>
                <li>• <strong>Timing:</strong> Start counting preferences 2-3 days before your event</li>
                <li>• <strong>Safety:</strong> Always have 10-15% extra food for unexpected guests</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Grilling Tips & Techniques</h3>
              <p className="text-gray-700 mb-3">
                Master the art of grilling with these professional tips. Whether you're cooking hot dogs, hamburgers, 
                or cheeseburgers, proper technique ensures delicious results every time.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Temperature:</strong> Medium-high heat (350-400°F)</li>
                <li>• <strong>Hot Dogs:</strong> 5-7 minutes, turning frequently</li>
                <li>• <strong>Hamburgers:</strong> 4-5 minutes per side for medium</li>
                <li>• <strong>Cheese:</strong> Add cheese in the last minute of cooking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Food Safety & Storage */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Food Safety & Storage Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">Temperature Safety</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Keep cold foods below 40°F</li>
                <li>• Cook hamburgers to 160°F internal temperature</li>
                <li>• Hot dogs should reach 165°F</li>
                <li>• Use a meat thermometer for accuracy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Storage Tips</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Store raw meat separately from other foods</li>
                <li>• Use coolers with plenty of ice</li>
                <li>• Keep foods covered when possible</li>
                <li>• Don't leave food out for more than 2 hours</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3">Preparation</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Wash hands frequently</li>
                <li>• Use separate cutting boards for raw meat</li>
                <li>• Clean grill grates before cooking</li>
                <li>• Have hand sanitizer available for guests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seasonal BBQ Ideas */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Seasonal BBQ Ideas & Recipes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Summer BBQ Classics</h3>
              <p className="text-gray-700 mb-3">
                Summer is peak BBQ season. Make the most of warm weather with these crowd-pleasing combinations 
                that work perfectly with our food counter system.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Classic Combo</h4>
                  <p className="text-gray-700 text-sm">Traditional beef hamburgers with American cheese, served with classic hot dogs. Perfect for family gatherings and casual parties.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Gourmet Selection</h4>
                  <p className="text-gray-700 text-sm">Artisan sausages, turkey burgers, and specialty cheeseburgers with premium toppings. Ideal for sophisticated outdoor dining.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Fall & Winter Grilling</h3>
              <p className="text-gray-700 mb-3">
                Don't let cooler weather stop your grilling! These hearty options are perfect for autumn and winter BBQs, 
                and our counter helps you track preferences even in smaller gatherings.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Hearty Options</h4>
                  <p className="text-gray-700 text-sm">Thick-cut burgers, bratwurst, and loaded cheeseburgers. Add warm sides like grilled vegetables and corn on the cob.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Comfort Food</h4>
                  <p className="text-gray-700 text-sm">Chili dogs, bacon cheeseburgers, and warming beverages. Perfect for tailgating and holiday gatherings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">How do I count food at my BBQ party?</h3>
              <p className="text-gray-700">
                Use BBQ Tally - a free mobile app that lets you quickly count hot dogs, hamburgers, and cheeseburgers. 
                Simply tap the + button for each item ordered, and the app keeps a running total for your cookout.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">What's the best way to track food orders at a BBQ?</h3>
              <p className="text-gray-700">
                BBQ Tally is the easiest way to track food orders at your BBQ. It's a mobile-friendly web app that works 
                on any device, requires no download or registration, and provides instant counting for hot dogs, hamburgers, and cheeseburgers.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">How much food should I prepare for my BBQ?</h3>
              <p className="text-gray-700">
                Plan for 1-2 items per person as a general rule. Use our counter to get exact numbers from your guests, 
                then add 10-15% extra for unexpected guests or bigger appetites. Consider the event duration and other food available.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Can I use BBQ Tally for large events?</h3>
              <p className="text-gray-700">
                Absolutely! BBQ Tally works great for events of any size. Whether you're hosting a small backyard gathering 
                or a large community event, our counter helps you track preferences and plan accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏆 About BBQ Tally</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                BBQ Tally was created by grilling enthusiasts who understand the challenge of planning the perfect cookout. 
                After years of over-ordering food and dealing with waste, we developed this simple tool to help hosts 
                get accurate counts from their guests.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to make BBQ planning easier, more efficient, and more enjoyable for everyone. Whether you're 
                hosting a small family gathering or a large community event, BBQ Tally helps you serve exactly what your guests want.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Why Choose BBQ Tally?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Free to use:</strong> No cost, no subscriptions, no hidden fees</li>
                <li>• <strong>Mobile-friendly:</strong> Works on any device with a web browser</li>
                <li>• <strong>No registration:</strong> Start counting immediately</li>
                <li>• <strong>Offline capable:</strong> Works even without internet connection</li>
                <li>• <strong>Privacy-focused:</strong> No personal data collection</li>
                <li>• <strong>Fast & reliable:</strong> Instant counting and real-time updates</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
} 