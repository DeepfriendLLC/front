import LegalTermsBannerComponent from "@/components/legal-terms-banner";
import LegalTermsTextContainerComponent from "@/components/legal-terms-text";
import { CSSProperties } from "react";

export default function LegalTerms() {
  const containerStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      <LegalTermsBannerComponent />
      <LegalTermsTextContainerComponent />
    </div>
  );
}
