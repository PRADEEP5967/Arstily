"use client";
import React, { useState } from "react";
import { addBooking } from "../utils/booking";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  artistId: string;
  artistName: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose, artistId, artistName }) => {
  const [eventDate, setEventDate] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addBooking({
      artistId,
      artistName,
      eventDate,
      contactName,
      contactEmail,
      message,
    });
    setLoading(false);
    setSuccess(true);
    setEventDate("");
    setContactName("");
    setContactEmail("");
    setMessage("");
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Animated Gradient Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100 rounded-full blur-3xl opacity-40 animate-float pointer-events-none z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-float2 pointer-events-none z-0"></div>
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center animate-fade-in-up z-10">
        {/* Modern Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold transition-transform duration-200 hover:scale-125 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        {/* Animated Icon */}
        <div className="mb-4">
          <span className="inline-block p-3 rounded-full bg-gradient-to-tr from-blue-400 via-pink-300 to-yellow-200 shadow-lg animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M12 11v7m0 0l-3-3m3 3l3-3" />
            </svg>
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 mb-4 text-center drop-shadow-lg tracking-tight">
          Request Booking for <span className="whitespace-nowrap">{artistName}</span>
        </h3>
        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <svg className="w-14 h-14 text-green-400 mb-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-green-600 font-semibold text-center text-lg">Booking request sent!</div>
          </div>
        ) : (
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-blue-700">Event Date</span>
              <input
                type="date"
                required
                className="border border-blue-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
                placeholder="Event Date"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-blue-700">Your Name</span>
              <input
                type="text"
                required
                className="border border-blue-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-blue-700">Your Email</span>
              <input
                type="email"
                required
                className="border border-blue-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                placeholder="Your Email"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-blue-700">Message <span className="text-gray-400 font-normal">(optional)</span></span>
              <textarea
                className="border border-blue-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Message (optional)"
                rows={3}
              />
            </label>
            <button
              type="submit"
              className={`bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-2xl px-4 py-2 font-semibold shadow-lg hover:from-blue-700 hover:to-purple-600 transition-all duration-200 text-lg w-full flex items-center justify-center gap-2 ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  Send Booking Request
                </>
              )}
            </button>
          </form>
        )}
        {/* Modern floating animation keyframes */}
        <style jsx>{`
          .animate-float {
            animation: float 8s ease-in-out infinite alternate;
          }
          .animate-float2 {
            animation: float2 7s ease-in-out infinite alternate;
          }
          @keyframes float {
            0% { transform: translateY(0px) scale(1);}
            100% { transform: translateY(40px) scale(1.05);}
          }
          @keyframes float2 {
            0% { transform: translateY(0px) scale(1);}
            100% { transform: translateY(-30px) scale(1.04);}
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}</style>
      </div>
    </div>
  );
};

export default BookingModal; 