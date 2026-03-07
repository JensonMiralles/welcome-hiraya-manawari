import { LegalLayout } from './LegalLayout'

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2026">
      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> Name, email address, and password
          when you create an account.
        </li>
        <li>
          <strong>Wedding site content:</strong> Text, images, and other content you
          upload to create your wedding invitation.
        </li>
        <li>
          <strong>RSVP data:</strong> Guest names, email addresses, attendance
          responses, dietary restrictions, and messages submitted through your wedding
          site's RSVP form.
        </li>
        <li>
          <strong>Usage data:</strong> Browser type, device information, and pages
          visited to help improve the Service.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service</li>
        <li>Process and display your wedding invitation content</li>
        <li>Manage RSVP responses for your wedding</li>
        <li>Communicate with you about your account and the Service</li>
        <li>Ensure the security of the Service</li>
      </ul>

      <h2>3. Data Storage and Security</h2>
      <p>
        Your data is stored securely using Supabase, a cloud database platform. We
        implement appropriate technical and organizational measures to protect your
        personal information against unauthorized access, alteration, or destruction.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> Third-party services that help us
          operate the platform (hosting, database, authentication).
        </li>
        <li>
          <strong>Your wedding guests:</strong> Information you choose to publish on
          your wedding site is visible to anyone with the link or invite code.
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law or to protect our
          rights.
        </li>
      </ul>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access and download your personal data</li>
        <li>Correct inaccurate information</li>
        <li>Delete your account and associated data</li>
        <li>Withdraw consent for data processing</li>
        <li>Request restriction of processing</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use essential cookies to maintain your session and preferences. These
        cookies are necessary for the Service to function and cannot be disabled. We
        do not use third-party tracking cookies.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active. When you delete
        your account, we will remove your personal data within 30 days, except where
        retention is required by law.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The Service is not intended for children under 16. We do not knowingly collect
        personal information from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. We will notify you of significant
        changes through the Service or by email.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy-related questions or to exercise your rights, please contact us
        at{' '}
        <a href="mailto:hiraya.manawari.weddings@gmail.com">hiraya.manawari.weddings@gmail.com</a>.
      </p>
    </LegalLayout>
  )
}
