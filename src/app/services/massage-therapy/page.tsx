import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailTemplate from "@/components/shared/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Massage Therapy",
  description:
    "Registered massage therapy in Brampton at Complete Rehab Centre to lower muscle stiffness, ease joint movement and improve circulation.",
};

export default function MassageTherapyPage() {
  const service = getServiceBySlug("massage-therapy")!;
  return <ServiceDetailTemplate service={service} />;
}
