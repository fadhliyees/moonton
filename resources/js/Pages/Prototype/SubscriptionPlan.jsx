import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <Head title="Subscription Plan" />
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubscriptionCard
                        name="Basic"
                        price={99000}
                        durationInMonth={1}
                        features={[
                            "Unlock 10 basic movies",
                            "Up to 3 users",
                            "Support 24/7 ready",
                        ]}
                    />

                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        isPremium
                        name="For Greatest"
                        price={299000}
                        durationInMonth={3}
                        features={[
                            "Unlock 200 awards movies",
                            "180 subtitles available",
                            "Offline Mode",
                            "Up to 20 users",
                            "Support 24/7 ready",
                        ]}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
