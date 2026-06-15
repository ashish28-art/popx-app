import { useState } from 'react'

function CreateAccountScreen({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'no',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const fields = [
    { label: 'Full Name*', name: 'fullName', placeholder: 'Enter full name', type: 'text' },
    { label: 'Phone number*', name: 'phone', placeholder: 'Enter phone number', type: 'tel' },
    { label: 'Email address*', name: 'email', placeholder: 'Enter email address', type: 'email' },
    { label: 'Password*', name: 'password', placeholder: 'Enter password', type: 'password' },
    { label: 'Company name', name: 'company', placeholder: 'Enter company name', type: 'text' },
  ]

  return (
    <div className="bg-[#f5f5f5] rounded-2xl w-[480px] shadow-lg flex flex-col p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight mt-4">
        Create your PopX<br />account
      </h1>

      {fields.map(({ label, name, placeholder, type }) => (
        <div className="mb-4" key={name}>
          <label className="block text-xs font-semibold mb-1 text-[#6c35de]">{label}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#6c35de] bg-[#f5f5f5]"
          />
        </div>
      ))}

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-800 mb-2">Are you an Agency?*</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button
        onClick={() => navigate('account-settings')}
        className="w-full py-4 rounded-lg text-white font-semibold text-base bg-[#6c35de] hover:bg-[#5a2bc4] transition-colors"
      >
        Create Account
      </button>
    </div>
  )
}

export default CreateAccountScreen
