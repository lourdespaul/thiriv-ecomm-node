export default function CodeSnippetsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
      <p className="mb-4">This is the code snippets page. You can add your code snippets here.</p>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Sample Code Snippet</h2>
        <pre className="bg-gray-100 p-2 rounded mt-2">
          <code>
            {`function example() {
  console.log("Hello, world!");
}`}
          </code>
        </pre>
      </div>
    </div>
  );
} 