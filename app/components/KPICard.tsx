type KPICardProps = {
  title: string;
  value: string;
  color: string;
};

export default function KPICard({
  title,
  value,
  color,
}: KPICardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <p className="text-gray-700 font-medium">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
}