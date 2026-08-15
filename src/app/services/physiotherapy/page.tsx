import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailTemplate from "@/components/shared/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Physiotherapy",
  description:
    "Physiotherapy in Brampton at Complete Rehab Centre: non-invasive, medication-free treatment including hydrotherapy, manual therapy, exercise and electrotherapy.",
};

export default function PhysiotherapyPage() {
  const service = getServiceBySlug("physiotherapy")!;
  return <ServiceDetailTemplate service={service} />;
}
