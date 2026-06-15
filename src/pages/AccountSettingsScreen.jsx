function AccountSettingsScreen() {
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
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '24px 24px 0 24px',
          borderBottom: '1px dashed #d0d0d0',
          paddingBottom: '24px',
        }}
      >
        <h2
          style={{
            fontSize: '17px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '20px',
          }}
        >
          Account Settings
        </h2>

        {/* Profile row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          {/* Avatar with camera badge */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="Profile"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            {/* Camera icon badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '20px',
                height: '20px',
                backgroundColor: '#6c35de',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
                <path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
              </svg>
            </div>
          </div>

          {/* Name & email */}
          <div>
            <p style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a', marginBottom: '2px' }}>
              Marry Doe
            </p>
            <p style={{ fontSize: '13px', color: '#7a7a7a' }}>
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        {/* Bio text */}
        <p style={{ fontSize: '13px', color: '#4a4a4a', lineHeight: '1.6' }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default AccountSettingsScreen
