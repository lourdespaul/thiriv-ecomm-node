export default function ChecklistPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checklist</h1>
      <p className="mb-4">This is the checklist page. You can manage your tasks here.</p>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Sample Checklist</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
} 