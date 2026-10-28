import React from 'react';

interface MetricBadgeProps {
  value: string;
  label: string;
  subtext?: string;
  trend?: string;
  color?: 'cyan' | 'emerald' | 'amber' | 'indigo' | 'purple';
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({
  value,
  label,
  subtext,
  trend,
  color = 'cyan',
}) => {
  const colorMap = {
    cyan: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60',
    emerald: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400/60',
    amber: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60',
    indigo: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400/60',
    purple: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400 group-hover:border-purple-400/60',
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorMap[color]} p-4 sm:p-5 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
          {value}
        </span>
        {trend && (
          <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            {trend}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-slate-200">
        {label}
      </p>
      {subtext && (
        <p className="mt-0.5 text-xs text-slate-400">
          {subtext}
        </p>
      )}
    </div>
  );
};

