export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          FinSight AI
        </h1>

        <div className="flex gap-6 items-center">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-24 px-6">

        <h2 className="text-5xl font-bold">
          AI-Powered Financial Analytics
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Upload financial statements and instantly receive
          business insights, forecasts, and AI-powered recommendations.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Start Free
          </button>

          <button className="border px-6 py-3 rounded-xl">
            View Demo
          </button>
        </div>

      </section>

    </main>
  );
}