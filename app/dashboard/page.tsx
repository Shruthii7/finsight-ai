import KPICard from "../components/KPICard";
import RevenueChart from "../components/RevenueChart";
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-600">
        Dashboard
      </h1>

      <p className="text-gray-600 mt-2">
        Welcome to FinSight AI
      </p>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mt-10">

  <KPICard
    title="Revenue"
    value="₹12.5L"
    color="text-blue-600"
  />

  <KPICard
    title="Expenses"
    value="₹8.2L"
    color="text-red-500"
  />

  <KPICard
    title="Profit"
    value="₹4.3L"
    color="text-green-600"
  />

  <KPICard
    title="Cash Flow"
    value="₹6.7L"
    color="text-purple-600"
  />

</div>

      {/* Chart Placeholder */}

      <div className="bg-white mt-10 rounded-xl shadow p-8 h-80">

        <h2 className="text-xl text-gray-700  font-semibold mb-4">
          Revenue Trend
        </h2>

        <div className="h-56 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400">
          <RevenueChart />
        </div>

      </div>

      {/* AI Insights */}

      <div className="bg-white mt-10 rounded-xl shadow p-8">

        <h2 className="text-xl text-gray-700 font-semibold mb-4">
          AI Insights
        </h2>

        <ul className="space-y-3 text-gray-700">

          <li>📈 Revenue increased by 15.4%</li>

          <li>💰 Profit margin improved by 3%</li>

          <li>⚠ Marketing expenses increased this month</li>

        </ul>

      </div>

    </main>
  );
}