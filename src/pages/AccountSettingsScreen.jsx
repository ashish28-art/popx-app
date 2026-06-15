function AccountSettingsScreen() {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl w-[480px] min-h-[580px] shadow-lg flex flex-col">
      <div className="p-6 border-b border-dashed border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">Account Settings</h2>

        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/64?img=47"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#6c35de] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />
                <path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base">Marry Doe</p>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default AccountSettingsScreen
