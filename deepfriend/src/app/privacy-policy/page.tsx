import PrivacyPolicyBannerComponent from "@/components/privacy-policy-banner";
import PrivacyPolicyTextContainerComponent from "@/components/privacy-policy-text";
import { CSSProperties } from "react";

export default function PrivacyPolicy() {
  const containerStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      <PrivacyPolicyBannerComponent />
      <PrivacyPolicyTextContainerComponent />
    </div>
  );
}
