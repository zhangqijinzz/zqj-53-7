import React from 'react';
import { Eye } from 'lucide-react';
import { usePaletteStore } from '@/store/usePaletteStore';
import { VisionType, VISION_ORDER, VISION_LABELS } from '@/utils/colorBlindEngine';

const VisionTabs: React.FC = () => {
  const { currentVision, setVision } = usePaletteStore();

  return (
    <div>
      <div className="flex items-center mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800 mr-2 transition-colors duration-300">
          <Eye size={16} />
        </span>
        <div>
          <h3 className="font-display font-semibold text-stone-800 dark:text-stone-100 transition-colors duration-300">色觉模拟类型</h3>
          <p className="text-[11px] text-stone-500 dark:text-dark-400 transition-colors duration-300">
            {VISION_LABELS[currentVision].desc} · {VISION_LABELS[currentVision].prevalence}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 md:grid-cols-8 lg:grid-cols-4">
        {VISION_ORDER.map((v: VisionType) => {
          const label = VISION_LABELS[v];
          const active = currentVision === v;
          return (
            <button
              key={v}
              onClick={() => setVision(v)}
              className={`relative px-2 py-2 rounded-lg text-[11px] font-semibold transition-all duration-150 ${
                active
                  ? 'bg-accent-500 text-white shadow-lifted dark:shadow-lifted-dark -translate-y-0.5'
                  : 'bg-canvas-100 dark:bg-dark-700 text-stone-600 dark:text-dark-300 hover:bg-canvas-200 dark:hover:bg-dark-600 hover:-translate-y-0.5'
              }`}
              title={`${label.name} · ${label.desc}`}
            >
              {label.short}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VisionTabs;
