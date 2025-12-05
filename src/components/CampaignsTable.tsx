import { Eye, Edit2, MessageCircle, Mail, MessageSquare, Bell } from 'lucide-react';

interface Campaign {
  name: string;
  status: 'Running' | 'Scheduled' | 'Paused';
  channel: 'WhatsApp' | 'Email' | 'SMS' | 'Push';
  audience: number;
  revenue: number;
  ctr: number;
  projected?: boolean;
}

const campaigns: Campaign[] = [
  {
    name: 'Weekend WhatsApp Blast',
    status: 'Running',
    channel: 'WhatsApp',
    audience: 18500,
    revenue: 420000,
    ctr: 6.3,
  },
  {
    name: 'Loyalty Email Series',
    status: 'Running',
    channel: 'Email',
    audience: 12000,
    revenue: 310000,
    ctr: 4.8,
  },
  {
    name: 'End of Season SMS',
    status: 'Scheduled',
    channel: 'SMS',
    audience: 22000,
    revenue: 210000,
    ctr: 3.5,
    projected: true,
  },
  {
    name: 'New Arrivals Push',
    status: 'Running',
    channel: 'Push',
    audience: 35000,
    revenue: 280000,
    ctr: 5.2,
  },
  {
    name: 'Cart Abandonment Email',
    status: 'Paused',
    channel: 'Email',
    audience: 8500,
    revenue: 145000,
    ctr: 7.1,
  },
];

const statusColors = {
  Running: 'bg-green-100 text-green-700',
  Scheduled: 'bg-blue-100 text-blue-700',
  Paused: 'bg-gray-100 text-gray-700',
};

const channelIcons = {
  WhatsApp: <MessageCircle className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
  SMS: <MessageSquare className="w-4 h-4" />,
  Push: <Bell className="w-4 h-4" />,
};

const channelColors = {
  WhatsApp: 'text-green-600',
  Email: 'text-purple-600',
  SMS: 'text-teal-600',
  Push: 'text-blue-600',
};

export function CampaignsTable() {
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN');
  };

  const formatRevenue = (num: number) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)}L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-gray-900 text-xl">Running campaigns</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Campaign Name</th>
              <th className="text-left px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Channel</th>
              <th className="text-right px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Audience</th>
              <th className="text-right px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Revenue</th>
              <th className="text-right px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">CTR</th>
              <th className="text-right px-6 py-3 text-xs text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {campaigns.map((campaign, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-900">{campaign.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs ${statusColors[campaign.status]}`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-2 ${channelColors[campaign.channel]}`}>
                    {channelIcons[campaign.channel]}
                    <span className="text-gray-900">{campaign.channel}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-gray-900">{formatNumber(campaign.audience)}</td>
                <td className="px-6 py-4 text-right text-gray-900">
                  {formatRevenue(campaign.revenue)}
                  {campaign.projected && <span className="text-xs text-gray-500 ml-1">(projected)</span>}
                </td>
                <td className="px-6 py-4 text-right text-gray-900">{campaign.ctr}%</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-purple-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-purple-600 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
