import { Users, TrendingDown, UserPlus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface Segment {
  name: string;
  count: number;
  metric: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const segments: Segment[] = [
  {
    name: 'High-value customers',
    count: 8200,
    metric: 'Avg order',
    value: '₹3,400',
    icon: <Users className="w-5 h-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Churn-risk customers (60+ days inactive)',
    count: 15600,
    metric: 'Last purchase',
    value: '75 days ago',
    icon: <TrendingDown className="w-5 h-5" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'New customers (Last 30 days)',
    count: 6900,
    metric: 'Conversion rate',
    value: '21%',
    icon: <UserPlus className="w-5 h-5" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

const revenueData = [
  { name: 'High-value', value: 480000, percentage: 48 },
  { name: 'Churn-risk', value: 280000, percentage: 28 },
  { name: 'New customers', value: 240000, percentage: 24 },
];

const colors = ['#7c3aed', '#f59e0b', '#14b8a6'];

export function SegmentsCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-gray-900 text-xl mb-6">Customer segments & loyalty</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className={`${segment.bgColor} ${segment.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              {segment.icon}
            </div>
            <h3 className="text-gray-900 text-sm mb-2 min-h-[40px]">{segment.name}</h3>
            <div className="text-2xl text-gray-900 mb-1">
              {segment.count.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-gray-600">
              {segment.metric}: <span className="text-gray-900">{segment.value}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-gray-900 mb-4">Revenue by segment</h3>
        <div className="space-y-3">
          {revenueData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-900">
                  ₹{(item.value / 100000).toFixed(1)}L ({item.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: colors[index],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
