function WelcomeScreen({ navigate }) {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl w-[480px] min-h-[580px] shadow-lg flex flex-col justify-end p-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>
        <button
          onClick={() => navigate('create-account')}
          className="w-full py-4 rounded-lg text-white font-semibold text-base mb-3 bg-[#6c35de] hover:bg-[#5a2bc4] transition-colors"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('signin')}
          className="w-full py-4 rounded-lg font-semibold text-gray-700 text-base bg-[#d8cff0] hover:bg-[#c9bde8] transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen
