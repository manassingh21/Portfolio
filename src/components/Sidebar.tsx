import React from "react";

interface SidebarProps {
  steps?: string[];
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  steps = ["Home", "About", "Project", "Contact"],
  currentStep=0,
}) => {
  return (
    <aside
      className="
        fixed left-8 top-2/3 -translate-y-1/2 
        -rotate-90 origin-left z-40
      "
    >
      <div className="flex flex-row gap-10 items-center">
        {steps.map((label, idx) => {
          const isActive = idx === currentStep;

          return (
            <button
              key={label}
              className={`tracking-widest transition-all text-sm
                ${isActive ? "text-orange-500 font-semibold" : "text-slate-400"}
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
