import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <Legal
      title="Terms of Use"
      updated="October 2, 2026"
      sections={[
        {
          h: "Using this website",
          p: [
            `By using this website you agree to these terms. If you don't agree, please don't use the site. This site provides information about ${site.name}'s services; it is not an offer or contract.`,
          ],
        },
        {
          h: "Eligibility",
          p: [
            "Applications are accepted only from adults aged 18 or over. By submitting an application you confirm you are at least 18 and that the information you provide is accurate.",
          ],
        },
        {
          h: "No guarantee of results",
          p: [
            "Case studies and figures on this site are illustrative or historical and do not guarantee future results. Outcomes depend on many factors, including the creator's content, consistency and market conditions.",
          ],
        },
        {
          h: "Partnership agreements",
          p: [
            "Any working relationship is governed by a separate written agreement covering services, revenue share, confidentiality and termination. Nothing on this site creates that relationship.",
          ],
        },
        {
          h: "Intellectual property",
          p: [
            `All site content, branding and design belong to ${site.name} unless stated otherwise and may not be reused without permission.`,
          ],
        },
        {
          h: "Limitation of liability",
          p: [
            "This website is provided “as is”. To the extent permitted by law, we are not liable for any loss arising from your use of the site.",
          ],
        },
        {
          h: "Governing law",
          p: [
            `These terms are governed by the laws of the State of Florida, United States. Any disputes will be handled by the courts located in Florida.`,
          ],
        },
        { h: "Contact", p: [`Questions about these terms: ${site.email}.`] },
      ]}
    />
  );
}
