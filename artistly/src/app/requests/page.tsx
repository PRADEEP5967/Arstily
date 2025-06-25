'use client';
import React, { useEffect, useState } from "react";
import { getBookings, BookingRequest } from "../../utils/booking";

export default function RequestsPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Booking Requests</h2>
      {bookings.length === 0 ? (
        <div className="bg-gray-50 rounded-lg shadow p-8 text-gray-500 text-center">
          Your booking and availability requests will appear here. (Submit one from an artist profile!)
        </div>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li key={b.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <span className="font-semibold text-blue-700">{b.artistName}</span>
                <span className="text-sm text-gray-500">{new Date(b.eventDate).toLocaleDateString()}</span>
              </div>
              <div className="text-gray-700 text-sm mb-1">Contact: {b.contactName} ({b.contactEmail})</div>
              {b.message && <div className="text-gray-600 text-sm mb-1">Message: {b.message}</div>}
              <div className="text-xs text-gray-400">Requested on {new Date(b.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
} 