import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BBQ Guide - Complete BBQ Planning & Grilling Tips | BBQ Tally',
  description: 'Complete guide to BBQ planning, grilling techniques, food safety, and seasonal recipes. Expert tips for hosting the perfect cookout with proper food quantities.',
  keywords: 'BBQ guide, grilling tips, BBQ planning, food safety, cookout recipes, grilling techniques, BBQ party planning, outdoor cooking guide',
  alternates: {
    canonical: 'https://www.bbqtally.com/bbq-guide'
  }
}

export default function BBQGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">🔥 BBQ Guide</h1>
              <p className="text-gray-600 mt-1">Your complete guide to perfect BBQ planning and grilling</p>
            </div>
            <div className="flex space-x-3">
              <Link 
                href="/bbq-planner"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                📋 BBQ Planner
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

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-8">
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

        {/* Equipment & Tools */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔧 Essential BBQ Equipment & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Must-Have Grilling Tools</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Meat Thermometer:</strong> Ensure proper cooking temperatures</li>
                <li>• <strong>Grill Brush:</strong> Keep grates clean for better flavor</li>
                <li>• <strong>Long-handled Tongs:</strong> Safe food handling and turning</li>
                <li>• <strong>Spatula:</strong> Wide blade for flipping burgers</li>
                <li>• <strong>Basting Brush:</strong> Apply sauces and marinades</li>
                <li>• <strong>Grill Basket:</strong> Perfect for vegetables and smaller items</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Grill Maintenance</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Pre-heat:</strong> Always preheat grill for 10-15 minutes</li>
                <li>• <strong>Clean grates:</strong> Before and after each use</li>
                <li>• <strong>Oil grates:</strong> Prevent sticking with light oil coating</li>
                <li>• <strong>Check fuel:</strong> Ensure adequate propane or charcoal</li>
                <li>• <strong>Cover when not in use:</strong> Protect from weather</li>
                <li>• <strong>Regular deep cleaning:</strong> Monthly thorough cleaning</li>
              </ul>
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
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">What's the ideal grilling temperature?</h3>
              <p className="text-gray-700">
                For most BBQ items, maintain a medium-high heat of 350-400°F. Hot dogs cook best at 375°F for 5-7 minutes, 
                while hamburgers need 400°F for 4-5 minutes per side. Always use a meat thermometer to ensure safety.
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

        {/* Call to Action */}
        <div className="text-center bg-orange-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">Ready to Plan Your Perfect BBQ?</h3>
          <p className="text-orange-700 mb-4">
            Use our free food counter to track your guests' preferences and ensure you have exactly what you need.
          </p>
          <Link 
            href="/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            🍔 Start Counting Food
          </Link>
        </div>
      </div>
    </div>
  )
} 