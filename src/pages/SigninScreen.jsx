import { useState } from 'react'

function SigninScreen({ navigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="bg-[#f5f5f5] rounded-2xl w-[480px] min-h-[580px] shadow-lg flex flex-col p-8">
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Signin to your<br />PopX account
        </h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <div className="mb-5">
          <label className="block text-xs font-semibold mb-1 text-[#6c35de]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#6c35de] bg-[#f5f5f5]"
          />
        </div>

        <div className="mb-8">
          <label className="block text-xs font-semibold mb-1 text-[#6c35de]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#6c35de] bg-[#f5f5f5]"
          />
        </div>

        <button
          onClick={() => navigate('account-settings')}
          className="w-full py-4 rounded-lg text-white font-semibold text-base bg-[#9e9e9e] hover:bg-[#888] transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default SigninScreen
