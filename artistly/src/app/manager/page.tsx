'use client';
import React, { useState } from 'react';
import Table from '../../components/Table';

const TABS = [
  { key: 'artists', label: 'Artists' },
  { key: 'bookings', label: 'Bookings' },
  { key: 'requests', label: 'Requests' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'profile', label: 'Profile' },
];

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState('artists');
  const [artists, setArtists] = useState<any[]>([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('artistly_onboarded_artists') || '[]');
    setArtists(data);
  }, []);

  const handleDelete = (idx: number) => {
    const updated = artists.filter((_, i) => i !== idx);
    setArtists(updated);
    localStorage.setItem('artistly_onboarded_artists', JSON.stringify(updated));
  };

  const handleView = (artist: any) => {
    alert(`Artist Details:\nName: ${artist.name}\nCategories: ${artist.categories?.join(', ')}\nLocation: ${artist.location}\nFee: ${artist.feeRange}`);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Manager Dashboard</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <nav className="md:w-56 flex md:flex-col gap-2 mb-4 md:mb-0">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-left px-4 py-2 rounded font-medium transition-all ${activeTab === tab.key ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {/* Main Content */}
        <section className="flex-1 bg-white rounded-lg shadow p-6 min-h-[400px]">
          {activeTab === 'artists' && (
            <>
              <a href="/manager/onboard" className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">+ Add New Artist</a>
              {artists.length === 0 ? (
                <div className="bg-gray-50 rounded-lg shadow p-8 text-gray-500 text-center">
                  No onboarded artists yet. Add one!
                </div>
              ) : (
                <Table
                  columns={[
                    { header: 'Name', accessor: 'name' },
                    { header: 'Category', accessor: 'categories', render: (v) => Array.isArray(v) ? v.join(', ') : String(v) },
                    { header: 'City', accessor: 'location' },
                    { header: 'Fee', accessor: 'feeRange' },
                  ]}
                  data={artists}
                  actions={(artist, idx) => (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(artist)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-medium"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(idx)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                />
              )}
            </>
          )}
          {activeTab === 'bookings' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Bookings</h3>
              <p>Manage and view all booking activities here. (Coming soon!)</p>
            </div>
          )}
          {activeTab === 'requests' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Booking Requests</h3>
              <p>Review and respond to booking requests here. (Coming soon!)</p>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <p>View platform analytics and insights here. (Coming soon!)</p>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Profile</h3>
              <p>Manage your manager profile and settings here. (Coming soon!)</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
} 