export function [PAGE_NAME]() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 text-center">
        <h1 className="text-2xl font-bold text-[#0F172A]">[PAGE_TITLE]</h1>
        <p className="text-gray-500 mt-2">This page is under construction.</p>
        <a href="/dashboard" className="inline-block mt-4 text-[#2563EB] hover:underline">Go to Dashboard</a>
      </div>
    </div>
  )
}
