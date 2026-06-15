import { useState } from 'react'

function SigninScreen({ navigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        width: '390px',
        minHeight: '600px',
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
          marginBottom: '10px',
          lineHeight: '1.25',
        }}
      >
        Signin to your<br />PopX account
      </h1>

      <p
        style={{
          fontSize: '15px',
          color: '#7a7a7a',
          marginBottom: '32px',
          lineHeight: '1.5',
        }}
      >
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      {/* Email Field */}
      <div style={{ marginBottom: '20px', position: 'relative' }}>
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
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      {/* Password Field */}
      <div style={{ marginBottom: '32px', position: 'relative' }}>
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
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      {/* Login Button - grey when empty */}
      <button
        onClick={() => navigate('account-settings')}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#b0b0b0',
          color: '#ffffff',
          fontWeight: '600',
          fontSize: '15px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  )
}

export default SigninScreen
