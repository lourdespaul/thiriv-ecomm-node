'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Copy } from 'lucide-react';

interface CodeSnippet {
  id: number;
  title: string;
  description: string;
  code: string;
}

export default function CodeSnippetsPage() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = async (code: string, id: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('code_snippets')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        console.log(data);
        setSnippets(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchSnippets();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
      {snippets.length === 0 ? (
        <p className="text-gray-500">No code snippets found. Add your first snippet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {snippets.map((snippet) => (
            <div key={snippet.id} className="bg-white p-4 rounded shadow relative">
              <button
                onClick={() => copyToClipboard(snippet.code, snippet.id)}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors bg-gray-100 rounded hover:bg-gray-200"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
              {copiedId === snippet.id && (
                <div className="absolute top-2 right-12 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Copied!
                </div>
              )}
              <h2 className="text-lg font-semibold mb-2 pr-12">{snippet.title}</h2>
              <p className="text-gray-600 mb-4">{snippet.description}</p>
              <div className="relative bg-gray-50 rounded overflow-hidden">
                <pre className="p-4 overflow-x-auto overflow-y-auto" style={{ height: '200px', width: '100%' }}>
                  <code className="text-sm font-mono">{snippet.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 