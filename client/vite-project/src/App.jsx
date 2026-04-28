function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="font-bold text-lg">Scalable Payment Processing System</h1>
        <button className="bg-white text-blue-600 px-4 py-1 rounded">Login </button>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-4xl font-bold mb-4">Fast & Secure Payment Processing</h2>
        <p className="text-lg text-gray-600 mb-6">Send & receive payments instantly with our secure platform.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Get Started</button>
      </div>
    </div>
  )
}
export default App