import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailTemplate from "@/components/shared/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Acupuncture",
  description:
    "Acupuncture in Brampton at Complete Rehab Centre — a traditional Chinese method used to treat pain, reduce stress and support overall wellness.",
};

export default function AcupuncturePage() {
  const service = getServiceBySlug("acupuncture")!;
  return <ServiceDetailTemplate service={service} />;
}
