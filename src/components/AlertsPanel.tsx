import { AlertTriangle, XCircle, Info, ArrowRight } from 'lucide-react';

interface Alert {
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  action: string;
}

const alerts: Alert[] = [
  {
    type: 'error',
    title: 'Campaign Failed',
    description: 'WhatsApp campaign "Weekend WhatsApp Blast" failed for 1,200 customers',
    action: 'Retry now',
  },
  {
    type: 'warning',
    title: 'Journey Error',
    description: 'Journey "Winback 60 days inactive" has an error in Step 3',
    action: 'Fix journey',
  },
  {
    type: 'info',
    title: 'Approval Needed',
    description: 'Offer "LOYAL20" needs approval before activation',
    action: 'Review & approve',
  },
  {
    type: 'warning',
    title: 'Low Engagement',
    description: 'Email campaign "Summer Sale" has CTR below 2% threshold',
    action: 'View details',
  },
  {
    type: 'info',
    title: 'Segment Updated',
    description: 'High-value customers segment grew by 12% this week',
    action: 'View segment',
  },
];

const alertConfig = {
  error: {
    icon: <XCircle className="w-5 h-5" />,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    iconColor: 'text-red-600',
    badgeColor: 'bg-red-100 text-red-700',
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5" />,
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  info: {
    icon: <Info className="w-5 h-5" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
};

export function AlertsPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-fit sticky top-24">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-gray-900 text-xl">Alerts & tasks</h2>
      </div>
      
      <div className="p-4 space-y-3 max-h-[800px] overflow-y-auto">
        {alerts.map((alert, index) => {
          const config = alertConfig[alert.type];
          
          return (
            <div
              key={index}
              className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4 hover:shadow-md transition-all`}
            >
              <div className="flex gap-3">
                <div className={config.iconColor}>
                  {config.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-gray-900">{alert.title}</h3>
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs ${config.badgeColor} shrink-0`}>
                      {alert.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{alert.description}</p>
                  
                  <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 group">
                    <span>{alert.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
