"use client";

type Props = {
  active: string;
  onChange: (category: string) => void;
};

const tabs = [
  "All",
  "Strategy",
  "Build",
  "Buy",
  "Acquire",
  "Expand",
  "Case Study",
  "Updates",
];

export default function CategoryTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">

      {tabs.map((tab) => {

        const selected = active === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-xl px-6 py-3 text-sm font-light transition duration-300 ${
              selected
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {tab}
          </button>
        );

      })}

    </div>
  );
}