import React from 'react';

interface Props {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  accent?: 'emerald' | 'indigo' | 'stone';
  className?: string;
  delay?: number;
}

const SectionCard: React.FC<Props> = ({
  title, icon, children, accent = 'stone', className = '', delay = 0,
}) => {
  const borderColor =
    accent === 'emerald' ? 'border-brand-200 dark:border-brand-800' :
    accent === 'indigo'  ? 'border-accent-200 dark:border-accent-800' :
                            'border-canvas-200 dark:border-dark-600';
  const badgeColor =
    accent === 'emerald' ? 'text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 border-brand-200 dark:border-brand-800' :
    accent === 'indigo'  ? 'text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30 border-accent-200 dark:border-accent-800' :
                            'text-stone-700 dark:text-dark-300 bg-canvas-50 dark:bg-dark-700 border-canvas-200 dark:border-dark-600';

  return (
    <section
      className={`bg-white dark:bg-dark-800 rounded-2xl border ${borderColor} shadow-soft dark:shadow-soft-dark p-5 md:p-6 animate-float-in transition-colors duration-300 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {icon && (
            <span className={`flex items-center justify-center w-8 h-8 rounded-lg border transition-colors duration-300 ${badgeColor}`}>
              {icon}
            </span>
          )}
          <h2 className="font-display font-semibold text-lg text-stone-800 dark:text-stone-100 tracking-tight transition-colors duration-300">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionCard;
