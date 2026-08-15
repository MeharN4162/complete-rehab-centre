import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailTemplate from "@/components/shared/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Chiropractic",
  description:
    "Chiropractic care in Brampton at Complete Rehab Centre, treating lower back problems, spinal pain, headaches and muscle pain through manual, licensed treatment.",
};

export default function ChiropracticPage() {
  const service = getServiceBySlug("chiropractic")!;
  return <ServiceDetailTemplate service={service} />;
}
