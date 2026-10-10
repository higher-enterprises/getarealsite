import {
    ShieldCheck,
    Rocket,
    RefreshCcw,
    BadgeDollarSign,
} from "lucide-react";

const items = [
    {
        icon: ShieldCheck,
        title: "100% Yours",
        text: "Once purchased, the website, assets and domain belong to you.",
    },
    {
        icon: Rocket,
        title: "Launch Fast",
        text: "Go live in days instead of months.",
    },
    {
        icon: RefreshCcw,
        title: "Use As-Is or Rebrand",
        text: "Keep the existing brand or replace everything with your own.",
    },
    {
        icon: BadgeDollarSign,
        title: "No Hidden Costs",
        text: "Simple pricing. No surprises.",
    },
];

export default function FeatureBar() {
    return (
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-4">

            {items.map((item) => {

                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="flex gap-5"
                    >
                        <div className="mt-1">

                            <Icon
                                className="text-purple-400"
                                size={34}
                            />

                        </div>

                        <div>

                            <h4 className="text-xl font-light">
                                {item.title}
                            </h4>

                            <p className="mt-2 leading-7 text-white/60">
                                {item.text}
                            </p>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}