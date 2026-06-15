function WelcomeScreen({ navigate }) {
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
        justifyContent: 'flex-end',
        padding: '40px 28px',
      }}
    >
      {/* Text content at bottom */}
      <div>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '10px',
            lineHeight: '1.2',
          }}
        >
          Welcome to PopX
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
          consectetur adipiscing elit.
        </p>

        {/* Create Account - solid purple */}
        <button
          onClick={() => navigate('create-account')}
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
            marginBottom: '12px',
          }}
        >
          Create Account
        </button>

        {/* Login - light purple */}
        <button
          onClick={() => navigate('signin')}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#c5b8f0',
            color: '#3a3a3a',
            fontWeight: '600',
            fontSize: '15px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen
