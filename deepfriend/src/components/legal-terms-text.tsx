"use client";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function LegalTermsTextContainerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="legal-text-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            <h1 className="legal-title">
                1. Acceptance of Terms
            </h1>
            <h1 className="legal-text">
                Welcome to Deepfriend, your trusted companion for mental well-being. These User Agreement and Terms of Use ("Terms") govern your access to and use of Deepfriend's services, including our mobile application, website, and our AI-powered psychological support service, Bubbles (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </h1>
            <h1 className="legal-title">
                2. Description of Service
            </h1>
            <h1 className="legal-text">
                Deepfriend provides compassionate, AI-powered psychological support services through our advanced chatbot, Bubbles. Our Service is designed to offer accessible mental health support and may include supervised therapy options with licensed professionals. While we strive to provide valuable support, our Service is not a substitute for professional medical advice, diagnosis, or treatment.
            </h1>
            <h1 className="legal-title">
                3. Eligibility
            </h1>
            <h1 className="legal-text">
                You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you are at least 13 years old and that you have the right, authority, and capacity to agree to and abide by these Terms.
            </h1>
            <h1 className="legal-title">
                4. User Accounts
            </h1>
            <h1 className="legal-text-tabulated">
                · Registration: To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </h1>
            <h1 className="legal-text-tabulated">
                · Account Security: You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </h1>
            <h1 className="legal-title">
                5. User Conduct
            </h1>
            <h1 className="legal-text">
                You agree not to:
            </h1>
            <h1 className="legal-text-tabulated">
                · Use the Service for any illegal purpose or in violation of any local, state, national, or international law.
            </h1>
            <h1 className="legal-text-tabulated">
                · Harass, abuse, or harm another person.
            </h1>
            <h1 className="legal-text-tabulated">
                · Impersonate or misrepresent your affiliation with any person or entity.
            </h1>
            <h1 className="legal-text-tabulated">
                · Interfere with or disrupt the Service or servers or networks connected to the Service.
            </h1>
            <h1 className="legal-text-tabulated">
                · Attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service.
            </h1>
            <h1 className="legal-title">
                6. Content
            </h1>
            <h1 className="legal-text-tabulated">
                · User-Generated Content: You retain all rights in, and are solely responsible for, the content you create, post, or share through the Service ("User Content").
            </h1>
            <h1 className="legal-text-tabulated">
                · License Grant: By posting User Content, you grant Deepfriend a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content solely for the purposes of providing and improving the Service.
            </h1>
            <h1 className="legal-text-tabulated">
                · Content Removal: Deepfriend reserves the right to remove any User Content that violates these Terms or is otherwise objectionable.
            </h1>
            <h1 className="legal-title">
                7. Intellectual Property
            </h1>
            <h1 className="legal-text">
                The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of Deepfriend and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </h1>
            <h1 className="legal-title">
                8. Privacy and Data Protection
            </h1>
            <h1 className="legal-text">
                Your privacy is paramount to us. Your use of the Service is governed by our Privacy Policy, which is incorporated into these Terms by reference. We want to emphasize that:
            </h1>
            <h1 className="legal-text-tabulated">
                · We will never sell your personal data. This is a core principle of Deepfriend that will not change.
            </h1>
            <h1 className="legal-text-tabulated">
                · No company, except for our AI provider that powers Bubbles, has access to any user data. This AI provider is contractually bound to strict confidentiality and data protection measures.
            </h1>
            <h1 className="legal-text-tabulated">
                · All your interactions with Bubbles and any professionals through our platform are kept strictly confidential.
            </h1>
            <h1 className="legal-title">
                9. Disclaimers
            </h1>
            <h1 className="legal-text-tabulated">
                · Medical Disclaimer: The Service is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </h1>
            <h1 className="legal-text-tabulated">
                · AI Limitations: While our AI, Bubbles, is designed to provide support, it has limitations and may not always provide accurate or appropriate responses. Users should exercise judgment when interpreting AI-generated content.
            </h1>
            <h1 className="legal-text-tabulated">
                · No Warranty: The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Deepfriend expressly disclaims all warranties of any kind, whether express or implied.
            </h1>
            <h1 className="legal-title">
                10. Limitation of Liability
            </h1>
            <h1 className="legal-text">
                In no event shall Deepfriend, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </h1>
            <h1 className="legal-title">
                11. Indemnification
            </h1>
            <h1 className="legal-text">
                You agree to defend, indemnify, and hold harmless Deepfriend LLC, its members, shareholders, and their respective employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
            </h1>
            <h1 className="legal-title">
                12. Changes to Service
            </h1>
            <h1 className="legal-text">
                Deepfriend reserves the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
            </h1>
            <h1 className="legal-title">
                13. Amendments to Terms
            </h1>
            <h1 className="legal-text">
                We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
            </h1>
            <h1 className="legal-title">
                14. Governing Law
            </h1>
            <h1 className="legal-text">
                These Terms shall be governed and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </h1>
            <h1 className="legal-title">
                15. Dispute Resolution
            </h1>
            <h1 className="legal-text">
                Any dispute arising out of or relating to these Terms or the Service will be resolved through binding arbitration conducted in accordance with the rules of the American Arbitration Association.
            </h1>
            <h1 className="legal-title">
                16. Severability
            </h1>
            <h1 className="legal-text">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </h1>
            <h1 className="legal-title">
                17. Entire Agreement
            </h1>
            <h1 className="legal-text">
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and Deepfriend regarding our Service and supersede and replace any prior agreements we might have had between us regarding the Service.
            </h1>
            <h1 className="legal-title">
                18. Contact Us
            </h1>
            <h1 className="legal-text">
                We value open communication with our users. If you have any questions about these Terms or our Service, please don't hesitate to contact us at:
            </h1>
            <h1 className="legal-text text-center">
                Deepfriend LLC
            </h1>
            <h1 className="legal-text text-center">
                Email: hello@dfbubbles.com
            </h1>
            <h1 className="legal-title">
                19. Our Commitment to You
            </h1>
            <h1 className="legal-text">
                At Deepfriend, we are committed to providing a safe, supportive, and confidential environment for your mental well-being journey. We believe in the power of technology to make mental health support more accessible, but we also understand the importance of human connection. Our aim is to complement, not replace, traditional mental health services.
                Remember, your mental health matters, and seeking support is a sign of strength. We're here to support you every step of the way.
            </h1>
            <h1 className="legal-text">
                By using our Service, you acknowledge that you have read and understood these Terms and agree to be bound by them. Welcome to the Deepfriend community.
            </h1>
            <h1 className="legal-title">
                Last Updated:
            </h1>
            <h1 className="legal-text">
                09-10-2024
            </h1>
        </div>
    );
}
