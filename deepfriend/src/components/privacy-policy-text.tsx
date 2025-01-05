"use client";

import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "@/app/layout";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function PrivacyPolicyTextContainerComponent() {
    const { systemColor } = useSelector((state: RootState) => state.systemColor);

    return (
        <div className="legal-text-container" style={{ color: systemColor === "light" ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR }}>
            <h1 className="legal-title">
                1. Introduction
            </h1>
            <h1 className="legal-text">
                Deepfriend LLC ("Deepfriend," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our psychological support service, Bubbles, and related services (collectively, the "Service"). By using our Service, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
            </h1>
            <h1 className="legal-title">
                2. Information We Collect
            </h1>
            <h1 className="legal-text">
                We collect the following types of information:
            </h1>
            <h1 className="legal-text-tabulated">
                a) Personal Information:
            </h1>
            <h1 className="legal-text-double-tabulated">
                · Email address
            </h1>
            <h1 className="legal-text-double-tabulated">
                · Name
            </h1>
            <h1 className="legal-text-double-tabulated">
                · Date of birth
            </h1>
            <h1 className="legal-text-tabulated">
                b) User-Generated Content:
            </h1>
            <h1 className="legal-text-double-tabulated">
                · Chat messages and interactions with Bubbles (our AI)
            </h1>
            <h1 className="legal-text-double-tabulated">
                · Chat messages with other users or professionals (if applicable)
            </h1>
            <h1 className="legal-title">
                3. How We Use Your Information
            </h1>
            <h1 className="legal-text">
                We use the collected information for the following purposes:
            </h1>
            <h1 className="legal-text-tabulated">
                · To provide and maintain our Service
            </h1>
            <h1 className="legal-text-tabulated">
                · To improve our psychological support services
            </h1>
            <h1 className="legal-text-tabulated">
                · To allow professionals to supervise and provide therapy (when chosen by the user)
            </h1>
            <h1 className="legal-text-tabulated">
                · To anonymously retrain and improve our AI, Bubbles
            </h1>
            <h1 className="legal-text-tabulated">
                · To communicate with you about Service-related issues
            </h1>
            <h1 className="legal-title">
                4. Data Sharing and Disclosure
            </h1>
            <h1 className="legal-text">
                We do not share or sell your personal information to third parties. The only exception is our AI provider, who is contractually prohibited from using this information for any purpose other than providing the AI service to Deepfriend.
            </h1>
            <h1 className="legal-title">
                5. Data Storage and Security
            </h1>
            <h1 className="legal-text">
                Your data is stored in an isolated database with no direct internet connection. It is only accessible through Deepfriend's secure servers. All passwords are encrypted. We implement industry-standard security measures to protect your personal information.
            </h1>
            <h1 className="legal-title">
                6. Data Retention
            </h1>
            <h1 className="legal-text">
                We retain your data indefinitely until you request its deletion. This retention is necessary for the continuous improvement of our AI service and to provide ongoing psychological support.
            </h1>
            <h1 className="legal-title">
                7. Cookies and Tracking
            </h1>
            <h1 className="legal-text">
                We do not use cookies or any tracking systems in our mobile application.
            </h1>
            <h1 className="legal-title">
                8. Your Data Rights
            </h1>
            <h1 className="legal-text">
                You have the right to:
            </h1>
            <h1 className="legal-text-tabulated">
                · Access your personal information
            </h1>
            <h1 className="legal-text-tabulated">
                · Request deletion of your data
            </h1>
            <h1 className="legal-text">
                To exercise these rights, please send a request from your registered email address to it@dfbubbles.com.
            </h1>
            <h1 className="legal-title">
                9. Use of Artificial Intelligence
            </h1>
            <h1 className="legal-text">
                Our Service primarily uses AI to provide psychological support and to organize conversation data intelligently. The AI's use of your data is protected by contract and does not compromise your privacy.
            </h1>
            <h1 className="legal-title">
                10. Legal Requests
            </h1>
            <h1 className="legal-text">
                We take user trust seriously. If we receive a legal request for information, we will respond as promptly as possible. Users can make inquiries about such requests by emailing it@dfbubbles.com from their registered email address.
            </h1>
            <h1 className="legal-title">
                11. Marketing and Advertising
            </h1>
            <h1 className="legal-text">
                We do not use your personal data for marketing or advertising purposes. In the future, we may publish completely anonymized, aggregate statistics for research purposes in the field of psychology.
            </h1>
            <h1 className="legal-title">
                12. Chat Interactions Privacy
            </h1>
            <h1 className="legal-text">
                All interactions with Bubbles and/or other users are private. Group chats are private to their members. All traffic is protected by HTTPS encryption.
            </h1>
            <h1 className="legal-title">
                13. Children's Privacy
            </h1>
            <h1 className="legal-text">
                Our Service is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13.
            </h1>
            <h1 className="legal-title">
                14. Changes to This Privacy Policy
            </h1>
            <h1 className="legal-text">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </h1>
            <h1 className="legal-title">
                15. Contact Us
            </h1>
            <h1 className="legal-text">
                If you have any questions about this Privacy Policy, please contact us at:
            </h1>
            <h1 className="legal-text text-center">
                Deepfriend LLC
            </h1>
            <h1 className="legal-text text-center">
                Email: it@dfbubbles.com
            </h1>
            <h1 className="legal-title">
                16. Governing Law
            </h1>
            <h1 className="legal-text">
                This Privacy Policy is governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any principles of conflicts of law.
            </h1>
            <h1 className="legal-text">
                By using our Service, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Service. Your continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes.
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
