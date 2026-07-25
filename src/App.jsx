import { useState, useEffect } from 'react';

export default function App() {
  // State to hold our environmental telemetry
  const [sensorData, setSensorData] = useState({
    temperature: 24.5,
    humidity: 60.2,
    status: "active"
  });

  // Simulate the live JSON data stream coming from the edge device
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        temperature: +(24.5 + (Math.random() - 0.5)).toFixed(1),
        humidity: +(60.2 + (Math.random() * 2 - 1)).toFixed(1),
        status: "active"
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center">
      
      {/* Dashboard Header */}
      <header className="w-full max-w-md mb-8 mt-4">
        <h1 className="text-2xl font-bold text-blue-400 tracking-tight">Environmental Twin</h1>
        <p className="text-gray-400 text-sm mt-1">Real-time Telemetry • Device: mega_edge_01</p>
      </header>

      {/* Grid Container - Mobile First Layout */}
      <div className="w-full max-w-md grid grid-cols-1 gap-5">
        
        {/* Temperature Card */}
        <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 font-bold tracking-widest text-xs uppercase">Temperature</h2>
            <span className="text-orange-500 text-xl">🌡️</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black text-white tracking-tighter">
              {sensorData.temperature}
            </span>
            <span className="text-2xl text-gray-500 font-medium">°C</span>
          </div>
        </div>

        {/* Humidity Card */}
        <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 font-bold tracking-widest text-xs uppercase">Ambient Humidity</h2>
            <span className="text-blue-500 text-xl">💧</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black text-white tracking-tighter">
              {sensorData.humidity}
            </span>
            <span className="text-2xl text-gray-500 font-medium">%</span>
          </div>
        </div>

        {/* System Status Card */}
        <div className="bg-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-800 flex items-center justify-between mt-2">
          <span className="text-gray-400 font-medium text-sm">System Status</span>
          <div className="flex items-center gap-3">
            {/* Pulsing online indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest">
              {sensorData.status}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}