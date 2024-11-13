'use client';

import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (username === 's') {
      setIsLoggedIn(true);
    } else {
      alert('ชื่อผู้ใช้ไม่ถูกต้อง');
    }
  };
  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">สวัสดี!</h1>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">เฮียเซฟ</span>
            <br />
            <span className="font-medium">fvfmbpmfbmfmb</span>
          </p>
          <p className="text-gray-500">succc</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">เข้าสู่ระบบ</h1>
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          ล็อกอิน
        </button>
      </form>
    </div>
  );
}