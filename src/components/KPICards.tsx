import { TrendingUp, TrendingDown, IndianRupee, Users, Zap, Repeat, ShoppingCart } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

function KPICard({ title, value, trend, icon, bgColor, iconColor }: KPICardProps) {
  const isPositive = trend >= 0;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-gray-600 text-sm mb-2">{title}</div>
          <div className="text-3xl text-gray-900 mb-3">{value}</div>
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? '+' : ''}{trend}%</span>
            <span className="text-gray-500 ml-1">vs previous</span>
          </div>
        </div>
        <div className={`${bgColor} ${iconColor} p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export function KPICards() {
  return (
    <div>
      <h1 className="text-gray-900 text-2xl mb-4">Today at a glance</h1>
      <div className="grid grid-cols-5 gap-4">
        <KPICard
          title="Campaign Revenue"
          value="₹12,40,000"
          trend={18}
          icon={<IndianRupee className="w-6 h-6" />}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        <KPICard
          title="Customers Reached"
          value="58,200"
          trend={12}
          icon={<Users className="w-6 h-6" />}
          bgColor="bg-teal-100"
          iconColor="text-teal-600"
        />
        <KPICard
          title="Active Campaigns"
          value="7"
          trend={0}
          icon={<Zap className="w-6 h-6" />}
          bgColor="bg-indigo-100"
          iconColor="text-indigo-600"
        />
        <KPICard
          title="Repeat Purchase Rate"
          value="32%"
          trend={4}
          icon={<Repeat className="w-6 h-6" />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <KPICard
          title="Average Order Value"
          value="₹2,150"
          trend={7}
          icon={<ShoppingCart className="w-6 h-6" />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
      </div>
    </div>
  );
}
