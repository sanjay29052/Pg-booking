import React from 'react';
import {
  Wifi,
  Utensils,
  Wind,
  Car,
  Shirt,
  Video,
  Zap,
  Droplets,
  Dumbbell,
  Sparkles,
  ShieldCheck,
  Flame,
  Check
} from 'lucide-react';

interface FacilityBadgeProps {
  facility: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'outline' | 'filled';
}

export const FacilityBadge: React.FC<FacilityBadgeProps> = ({
  facility,
  size = 'md',
  variant = 'subtle'
}) => {
  const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    const iconClass = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

    if (lower.includes('wi-fi') || lower.includes('wifi')) return <Wifi className={iconClass} />;
    if (lower.includes('food') || lower.includes('meal')) return <Utensils className={iconClass} />;
    if (lower.includes('ac')) return <Wind className={iconClass} />;
    if (lower.includes('parking')) return <Car className={iconClass} />;
    if (lower.includes('laundry')) return <Shirt className={iconClass} />;
    if (lower.includes('cctv')) return <Video className={iconClass} />;
    if (lower.includes('power')) return <Zap className={iconClass} />;
    if (lower.includes('water') || lower.includes('ro')) return <Droplets className={iconClass} />;
    if (lower.includes('gym')) return <Dumbbell className={iconClass} />;
    if (lower.includes('housekeeping')) return <Sparkles className={iconClass} />;
    if (lower.includes('security')) return <ShieldCheck className={iconClass} />;
    if (lower.includes('geyser')) return <Flame className={iconClass} />;
    return <Check className={iconClass} />;
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs font-medium px-2.5 py-1 gap-1.5',
    lg: 'text-sm font-medium px-3.5 py-1.5 gap-2'
  };

  const variantClasses = {
    subtle: 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 transition-colors',
    outline: 'border border-slate-200 text-slate-700 bg-white shadow-xs',
    filled: 'bg-blue-50 text-blue-700 border border-blue-100 font-semibold'
  };

  return (
    <span
      id={`facility-badge-${facility.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className={`inline-flex items-center rounded-lg ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {getIcon(facility)}
      <span className="whitespace-nowrap">{facility}</span>
    </span>
  );
};
