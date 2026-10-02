import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Legal
      title="Privacy Policy"
      updated="October 2, 2026"
      sections={[
        {
          h: "Who we are",
          p: [
            `${site.name} ("we", "us") is a creator management agency. This policy explains how we collect, use and protect personal information submitted through this website.`,
          ],
        },
        {
          h: "Information we collect",
          p: [
            "When you apply, we collect the details you provide: name, email address, social media handles, country and time zone, content niche, approximate earnings range, goals, and optionally a link to an existing creator profile.",
            "We also collect basic technical data (such as browser type and pages visited) to keep the site secure and working.",
          ],
        },
        {
          h: "How we use it",
          p: [
            "We use application data only to assess fit, contact you about your application, and, if we work together, deliver our services. We do not sell your personal information.",
          ],
        },
        {
          h: "Age requirement",
          p: [
            "Our services are only for adults aged 18 or over. We do not knowingly collect information from anyone under 18, and we delete any such submission we become aware of. Identity and age are verified before any partnership begins.",
          ],
        },
        {
          h: "Storage & retention",
          p: [
            "Applications are stored securely with restricted access. If we don't proceed with an application, we delete the data within 12 months, or sooner on request.",
          ],
        },
        {
          h: "Your rights",
          p: [
            `You can request access to, correction of, or deletion of your data at any time by emailing ${site.email}. Depending on where you live (for example the UK, EU or California), you may have additional rights under local law.`,
          ],
        },
        { h: "Contact", p: [`Questions about this policy: ${site.email}.`] },
      ]}
    />
  );
}
