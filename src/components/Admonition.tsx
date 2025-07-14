import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb
} from 'lucide-react';

type AdmonitionType = 'info' | 'warning' | 'success' | 'danger' | 'tip';

interface Props {
  type: AdmonitionType;
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: 'bg-blue-50 text-blue-800 border-blue-400',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-400',
  success: 'bg-green-50 text-green-800 border-green-400',
  danger: 'bg-red-50 text-red-800 border-red-400',
  tip: 'bg-purple-50 text-purple-800 border-purple-400',
};

const icons = {
  info: <Info className="inline mr-2" size={18} />,
  warning: <AlertTriangle className="inline mr-2" size={18} />,
  success: <CheckCircle className="inline mr-2" size={18} />,
  danger: <XCircle className="inline mr-2" size={18} />,
  tip: <Lightbulb className="inline mr-2" size={18} />,
};

export default function Admonition({ type, title, children }: Props) {
  return (
    <div className={`border-l-4 p-4 my-4 rounded-md ${styles[type]}`}>
      <div className="font-semibold mb-1 flex items-center">
        {icons[type]} {title ?? type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

