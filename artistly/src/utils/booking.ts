export interface BookingRequest {
  id: string;
  artistId: string;
  artistName: string;
  eventDate: string;
  contactName: string;
  contactEmail: string;
  message: string;
  createdAt: string;
}

const BOOKINGS_KEY = "artistly_bookings";

export function getBookings(): BookingRequest[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addBooking(booking: Omit<BookingRequest, "id" | "createdAt">) {
  const current = getBookings();
  const newBooking = {
    ...booking,
    id: Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify([newBooking, ...current]));
  return newBooking;
} 