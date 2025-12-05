import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', WhatsApp: 140000, Email: 95000, SMS: 45000 },
  { day: 'Tue', WhatsApp: 160000, Email: 105000, SMS: 55000 },
  { day: 'Wed', WhatsApp: 170000, Email: 110000, SMS: 50000 },
  { day: 'Thu', WhatsApp: 190000, Email: 125000, SMS: 65000 },
  { day: 'Fri', WhatsApp: 210000, Email: 140000, SMS: 70000 },
  { day: 'Sat', WhatsApp: 230000, Email: 150000, SMS: 75000 },
  { day: 'Sun', WhatsApp: 200000, Email: 130000, SMS: 60000 },
];

export function CampaignChart() {
  const [activeMetric, setActiveMetric] = useState<'Revenue' | 'Clicks' | 'Conversions'>('Revenue');
  
  const formatValue = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${value}`;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900 text-xl">Campaign performance – last 7 days</h2>
        
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {(['Revenue', 'Clicks', 'Conversions'] as const).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                activeMetric === metric
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {metric}
            </button>
          ))}
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={formatValue}
          />
          <Tooltip
            formatter={(value: number) => formatValue(value)}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="WhatsApp" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Email" 
            stroke="#7c3aed" 
            strokeWidth={3}
            dot={{ fill: '#7c3aed', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="SMS" 
            stroke="#14b8a6" 
            strokeWidth={3}
            dot={{ fill: '#14b8a6', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
