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
    { label: 'Full Name*',      name: 'fullName',  placeholder: 'Enter full name',      type: 'text'     },
    { label: 'Phone number*',   name: 'phone',     placeholder: 'Enter phone number',   type: 'tel'      },
    { label: 'Email address*',  name: 'email',     placeholder: 'Enter email address',  type: 'email'    },
    { label: 'Password*',       name: 'password',  placeholder: 'Enter password',       type: 'password' },
    { label: 'Company name',    name: 'company',   placeholder: 'Enter company name',   type: 'text'     },
  ]

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        width: '390px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 28px',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '28px',
          lineHeight: '1.25',
        }}
      >
        Create your PopX<br />account
      </h1>

      {fields.map(({ label, name, placeholder, type }) => (
        <div key={name} style={{ marginBottom: '20px', position: 'relative' }}>
          <label
            style={{
              position: 'absolute',
              top: '-9px',
              left: '12px',
              backgroundColor: '#ffffff',
              padding: '0 4px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6c35de',
            }}
          >
            {label}
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            style={{
              width: '100%',
              border: '1.5px solid #c0c0c0',
              borderRadius: '8px',
              padding: '14px 14px',
              fontSize: '14px',
              color: '#555',
              outline: 'none',
              backgroundColor: '#ffffff',
            }}
          />
        </div>
      ))}

      {/* Agency Radio */}
      <div style={{ marginBottom: '28px', marginTop: '4px' }}>
        <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', marginBottom: '10px' }}>
          Are you an Agency?*
        </p>
        <div style={{ display: 'flex', gap: '28px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#444', cursor: 'pointer' }}>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === 'yes'}
              onChange={handleChange}
              style={{ accentColor: '#6c35de', width: '16px', height: '16px' }}
            />
            Yes
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#444', cursor: 'pointer' }}>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === 'no'}
              onChange={handleChange}
              style={{ accentColor: '#6c35de', width: '16px', height: '16px' }}
            />
            No
          </label>
        </div>
      </div>

      {/* Create Account Button */}
      <button
        onClick={() => navigate('account-settings')}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#6c35de',
          color: '#ffffff',
          fontWeight: '600',
          fontSize: '15px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Create Account
      </button>
    </div>
  )
}

export default CreateAccountScreen
