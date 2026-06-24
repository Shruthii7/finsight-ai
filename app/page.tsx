export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          FinSight AI
        </h1>

        <div className="flex gap-6 items-center text-gray-600">
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

        <h2 className="text-5xl font-bold text-gray-600">
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

          <button className="border text-gray-600 px-6 py-3 rounded-xl">
            View Demo
          </button>
        </div>

      </section>


{/* Dashboard Preview */}

<section className="mt-32 px-10">

  <h3 className="text-4xl font-bold text-gray-600 text-center">
    See Your Business At A Glance
  </h3>

  <p className="text-center text-gray-600 mt-4">
    Revenue, expenses, profit and AI insights in one place.
  </p>

  <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">

    <div className="grid grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-md border">
      <p className="text-gray-600 font-medium">
          Revenue
      </p>

      <h4 className="text-3xl font-bold text-blue-600 mt-2">
          ₹12.5L
      </h4>

      <p className="text-green-600 mt-2">
          +15.4%
      </p>
   </div>

      <div className="bg-white p-6 rounded-xl shadow-md border">
      <p className="text-gray-600 font-medium">
          Expenses
      </p>

      <h4 className="text-3xl font-bold text-blue-600 mt-2">
          ₹8.2
      </h4>
   </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border">
      <p className="text-gray-600 font-medium">
          Profit
      </p>

      <h4 className="text-3xl font-bold text-blue-600 mt-2">
          ₹4.3L
      </h4>
   </div>

      <div className="bg-white p-6 rounded-xl shadow-md border">
      <p className="text-gray-600 font-medium">
          Cash Flow
      </p>

      <h4 className="text-3xl font-bold text-blue-600 mt-2">
          ₹6.7L
      </h4>
   </div>

    </div>

  </div>

</section>
    </main>
  );
}