export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="mb-4">This is your main dashboard page. You can add more content here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Card 1</h2>
          <p>Some content for card 1.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Card 2</h2>
          <p>Some content for card 2.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Card 3</h2>
          <p>Some content for card 3.</p>
        </div>
      </div>
    </div>
  );
} 