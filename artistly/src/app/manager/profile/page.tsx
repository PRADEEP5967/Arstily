"use client";
import React, { useState } from "react";

const mockProfile = {
  name: "Alex Manager",
  email: "alex.manager@email.com",
  avatar: "https://ui-avatars.com/api/?name=Alex+Manager&background=0D8ABC&color=fff",
  role: "Manager",
  location: "Mumbai, India",
  bio: "Empowering artists to succeed. Passionate about music, events, and creative growth.",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(profile);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    setTimeout(() => {
      setProfile(form);
      setEdit(false);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 1200);
    }, 900);
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profile.avatar}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-blue-500 shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">{profile.name}</h2>
          <span className="text-sm text-gray-500">{profile.role} · {profile.location}</span>
        </div>
        <button
          className="ml-auto btn-modern px-4 py-1 text-sm"
          onClick={() => setEdit((v) => !v)}
        >
          {edit ? "Cancel" : "Edit"}
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        {edit ? (
          <form className="space-y-4" onSubmit={handleSave} autoComplete="off">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                className="border rounded px-3 py-2 w-full"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                className="border rounded px-3 py-2 w-full"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Bio</label>
              <textarea
                className="border rounded px-3 py-2 w-full"
                name="bio"
                rows={2}
                value={form.bio}
                onChange={handleChange}
                maxLength={160}
              />
            </div>
            <button
              type="submit"
              className="btn-modern w-full"
              disabled={status === "saving"}
            >
              {status === "saving" ? "Saving..." : "Save Changes"}
            </button>
          </form>
        ) : (
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-700">Email: </span>
              <span className="text-gray-600">{profile.email}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Bio: </span>
              <span className="text-gray-600">{profile.bio}</span>
            </div>
          </div>
        )}
        {status === "saved" && (
          <div className="mt-3 text-green-600 text-sm text-center animate-pulse">
            Profile updated!
          </div>
        )}
        <hr className="my-6" />
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <a
            href="mailto:support@artistly.com"
            className="text-blue-600 hover:underline text-sm"
          >
            Contact Support
          </a>
          <button
            className="text-red-500 hover:underline text-sm"
            onClick={() => alert("Account deactivation coming soon.")}
          >
            Deactivate Account
          </button>
        </div>
      </div>
    </main>
  );
}