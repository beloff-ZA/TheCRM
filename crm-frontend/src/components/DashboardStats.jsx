export default function DashboardStats() {
  // Sample static stats, you can replace with props/api data later
  const stats = [
    { title: 'Staff', value: 128 },
    { title: 'Students', value: 1024 },
    { title: 'Classes', value: 42 },
    { title: 'Pending Tasks', value: 7 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map(({ title, value }) => (
        <div key={title} className="bg-navyBlue text-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-extrabold">{value}</p>
        </div>
      ))}
    </div>
  );
}
