import { MessageCircle, Mail, GitBranch, ArrowRight } from 'lucide-react';

interface Action {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
}

const actions: Action[] = [
  {
    title: 'Re-engage churn-risk customers',
    description: 'Target the 60+ days inactive segment with a WhatsApp campaign',
    buttonText: 'Start WhatsApp campaign',
    icon: <MessageCircle className="w-6 h-6" />,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Upsell to high-value customers',
    description: 'Recommend a personalized email with premium collection',
    buttonText: 'Create email journey',
    icon: <Mail className="w-6 h-6" />,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Welcome new customers',
    description: 'Setup an onboarding journey for customers in last 30 days',
    buttonText: 'Design onboarding flow',
    icon: <GitBranch className="w-6 h-6" />,
    iconBgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
];

export function RecommendedActions() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-gray-900 text-xl mb-6">Recommended next actions</h2>
      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-purple-200 transition-all cursor-pointer group"
          >
            <div className="flex gap-4">
              <div className={`${action.iconBgColor} ${action.iconColor} p-3 rounded-lg h-fit`}>
                {action.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group-hover:shadow-md">
                  <span className="text-sm">{action.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
