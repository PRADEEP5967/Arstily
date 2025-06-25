import React from "react";

export default function BookingsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Manage Bookings</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-700 mb-4">All your bookings will appear here. (Feature coming soon!)</p>
        <table className="min-w-full bg-white rounded shadow mt-4">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-2 px-4 text-left font-semibold">Booking ID</th>
              <th className="py-2 px-4 text-left font-semibold">Artist</th>
              <th className="py-2 px-4 text-left font-semibold">Date</th>
              <th className="py-2 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-400" colSpan={4}>No bookings yet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
} 