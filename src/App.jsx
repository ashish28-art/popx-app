import { useState } from 'react'
import WelcomeScreen from './pages/WelcomeScreen'
import SigninScreen from './pages/SigninScreen'
import CreateAccountScreen from './pages/CreateAccountScreen'
import AccountSettingsScreen from './pages/AccountSettingsScreen'

function App() {
  const [screen, setScreen] = useState('welcome')

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':         return <WelcomeScreen navigate={setScreen} />
      case 'signin':          return <SigninScreen navigate={setScreen} />
      case 'create-account':  return <CreateAccountScreen navigate={setScreen} />
      case 'account-settings':return <AccountSettingsScreen />
      default:                return <WelcomeScreen navigate={setScreen} />
    }
  }

  return (
    <div style={{ backgroundColor: '#cbcbcb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {renderScreen()}
    </div>
  )
}

export default App
