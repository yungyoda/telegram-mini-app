export default function Component() {
  return (
    <div className="min-h-screen bg-purple-900 p-4 flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-6">
          <img 
            src="/placeholder.svg?height=96&width=96" 
            alt="Meme Army Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="text-yellow-400">Join The </span>
          <span className="text-pink-400">Meme.</span>
          <span className="text-purple-400">Army</span>
        </h1>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Imagine <span className="text-pink-500">100M</span> people
          <br />unlocking the meme
          <br />economy together?
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          The Meme.Army more than just a new meme token launchpad. It's a place
          where you will unlock financial freedom in the new Meme Economy.
        </p>

        {/* Whitelist Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <p className="flex-1">
            We are opening our early Whitelist: those who sign up will get{' '}
            <span className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              first access to mint new tokens and kickstart the movement.
            </span>
          </p>
          
          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap">
            <span>Whitelist Now</span>
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}