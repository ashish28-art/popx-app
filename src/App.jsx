import { useState } from 'react'
import WelcomeScreen from './pages/WelcomeScreen'
import SigninScreen from './pages/SigninScreen'
import CreateAccountScreen from './pages/CreateAccountScreen'
import AccountSettingsScreen from './pages/AccountSettingsScreen'

function App() {
  const [screen, setScreen] = useState('welcome')

  const renderScreen = () => {
    switch (screen) {
      case 'welcome': return <WelcomeScreen navigate={setScreen} />
      case 'signin': return <SigninScreen navigate={setScreen} />
      case 'create-account': return <CreateAccountScreen navigate={setScreen} />
      case 'account-settings': return <AccountSettingsScreen navigate={setScreen} />
      default: return <WelcomeScreen navigate={setScreen} />
    }
  }

  return (
    <div className="min-h-screen bg-[#e0dede] flex items-center justify-center p-5">
      {renderScreen()}
    </div>
  )
}

export default App
