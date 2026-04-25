import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Whim",
  description: "Learn how Whim collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert prose-sm max-w-none">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/50 text-sm">Last Updated: April 24, 2026 &nbsp;·&nbsp; Effective Date: April 24, 2026</p>
      </div>

      <p className="text-white/70 leading-relaxed mb-10">
        This Privacy Policy describes how Whim ("Whim," "we," "us," or "our") collects, uses, stores, shares, and
        protects your personal information when you use the Whim mobile application and website (collectively, the
        "Service") available at joinwhim.net. This policy is designed to comply with applicable privacy laws,
        including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR).
      </p>

      <Section number="1" title="About Us and Data Controller">
        <p className="text-white/70 text-sm leading-relaxed">
          Whim is the controller of your personal data. We operate a social event discovery platform that enables
          users to find, create, attend, and check in to spontaneous local events. Access to certain features of the
          Service may require institutional email verification.
        </p>
        <ContactInline />
      </Section>

      <Section number="2" title="Who Can Use Whim">
        <p className="text-white/70 text-sm leading-relaxed">
          Whim is intended for individuals aged 18 and older. Whim may require institutional email verification (such
          as a .edu address) for registration or certain features; these requirements may change at Whim&apos;s
          discretion.
        </p>
        <p className="text-white/70 text-sm leading-relaxed mt-3">
          We do not knowingly collect personal information from individuals under the age of 18. If we discover that
          we have inadvertently collected information from someone under 18, we will promptly delete that information.
          If you believe a minor has provided us with personal information, please contact us at{" "}
          <a href="mailto:privacy@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            privacy@joinwhim.net
          </a>
          .
        </p>
      </Section>

      <Section number="3" title="Information We Collect">
        <Subsection id="3.1" title="Information You Provide Directly">
          <div className="space-y-4">
            <DataCategory title="Account and Identity Information">
              <ul className="space-y-1">
                <li>First name and last name</li>
                <li>Institutional or other email address used for registration</li>
                <li>Password (stored in cryptographic hash form — we never store plaintext passwords)</li>
                <li>Email verification responses (one-time passcode confirmation)</li>
              </ul>
            </DataCategory>
            <DataCategory title="Profile Information">
              <ul className="space-y-1">
                <li>Username (optional, up to 30 characters)</li>
                <li>Profile photograph / avatar image (optional)</li>
                <li>Banner or header image (optional)</li>
                <li>Biography (optional, up to 300 characters)</li>
                <li>College or university name (auto-populated from your email domain at registration)</li>
                <li>Academic major or field of study (optional)</li>
                <li>Graduation year (optional)</li>
                <li>Club or organization affiliations (optional)</li>
              </ul>
            </DataCategory>
            <DataCategory title="Event Content">
              <ul className="space-y-1">
                <li>Event title, description, and any other text you include in event listings</li>
                <li>Event location (text address you enter)</li>
                <li>Event date and time</li>
                <li>Event cover image (optional)</li>
                <li>Organization name associated with an event (optional)</li>
                <li>Event tags selected from predefined categories</li>
                <li>Maximum participant limits (optional)</li>
              </ul>
            </DataCategory>
            <DataCategory title="Chat Messages">
              <ul className="space-y-1">
                <li>Text content of messages you send in event group chats</li>
                <li>Timestamps and message metadata</li>
              </ul>
            </DataCategory>
            <DataCategory title="Social and Safety Data">
              <ul className="space-y-1">
                <li>Friend requests sent and received</li>
                <li>Accepted friendship connections</li>
                <li>Users you have blocked</li>
                <li>Reports you submit about other users</li>
                <li>Bug reports or feedback you submit</li>
              </ul>
            </DataCategory>
          </div>
        </Subsection>

        <Subsection id="3.2" title="Information We Collect Automatically">
          <div className="space-y-4">
            <DataCategory title="Location Information">
              <p className="mb-3">
                We collect precise geolocation data (GPS coordinates) in the following specific circumstances:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-white/80">Event Creation:</strong> When you create an event and choose to
                  use your current location, we collect your precise GPS coordinates to populate the event&apos;s
                  location.
                </li>
                <li>
                  <strong className="text-white/80">Attendance Check-In:</strong> When you use the in-app check-in
                  feature, we collect your precise GPS coordinates at the moment of check-in to verify that you are
                  physically within approximately 150 meters of the event location.
                </li>
                <li>
                  <strong className="text-white/80">Background Location:</strong> We may request "background
                  location" permission to enable check-in reminder notifications. We do not continuously track or
                  record your location in the background beyond what is necessary for these specific functions.
                </li>
              </ul>
              <div className="mt-3 rounded-xl border border-purple-500/20 bg-purple-500/5 px-4 py-3">
                <p className="text-purple-300 text-sm">
                  Your precise real-time GPS coordinates are NOT shared with other Whim users.
                </p>
              </div>
            </DataCategory>
            <DataCategory title="Device and Usage Information">
              <ul className="space-y-1">
                <li>Device operating system and version</li>
                <li>App version</li>
                <li>Push notification token (used solely for delivering push notifications)</li>
                <li>Session and authentication tokens (stored securely on-device)</li>
                <li>App interaction data, such as events viewed, swiped, or joined</li>
              </ul>
            </DataCategory>
            <DataCategory title="Log Data">
              <ul className="space-y-1">
                <li>Internet Protocol (IP) address</li>
                <li>Browser type and version (for website access)</li>
                <li>Pages viewed and time spent</li>
                <li>Access timestamps</li>
                <li>Error logs and crash reports</li>
              </ul>
            </DataCategory>
          </div>
        </Subsection>

        <Subsection id="3.3" title="Information from Third Parties">
          We may receive information from third-party services that we use to operate the Service, including Supabase
          (our database and authentication provider) and Expo (our push notification provider). We do not purchase
          data about you from data brokers or other third-party sources.
        </Subsection>
      </Section>

      <Section number="4" title="How We Use Your Information">
        <p className="text-white/70 text-sm leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
        <div className="space-y-3">
          {[
            {
              title: "Account Management and Authentication",
              items: [
                "To create and manage your account",
                "To verify your email address and eligibility for the Service",
                "To authenticate you when you sign in",
                "To enforce our one-account-per-person policy",
              ],
            },
            {
              title: "Providing the Service",
              items: [
                "To display events to you based on your location and preferences",
                "To enable you to create, edit, and manage events",
                "To facilitate attendance verification at events",
                "To display and deliver event group chat messages",
                "To manage friend requests and connections",
              ],
            },
            {
              title: "Safety and Moderation",
              items: [
                "To investigate reports of violations of our Terms, Community Guidelines, or Content Policy",
                "To enforce our policies and take action against accounts that violate them",
                "To prevent fraud, abuse, and unauthorized access",
              ],
            },
            {
              title: "Analytics and Improvement",
              items: [
                "To understand how users interact with the Service",
                "To generate aggregated, anonymized statistics about platform usage",
                "To diagnose technical issues and monitor platform performance",
              ],
            },
          ].map((group) => (
            <DataCategory key={group.title} title={group.title}>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DataCategory>
          ))}
        </div>
      </Section>

      <Section number="5" title="How We Share Your Information">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 mb-6">
          <p className="text-green-300 text-sm font-medium">We do not sell your personal information.</p>
        </div>
        <Subsection id="5.1" title="With Other Users (In-App Visibility)">
          Certain profile and activity information is visible to other authenticated Whim users as part of normal
          platform operation, including your name, profile picture, username, college, major, graduation year, club
          affiliations, event hosting history, and verified attendance at events. We do not share your precise GPS
          coordinates, email address, or password with other users.
        </Subsection>
        <Subsection id="5.2" title="With Third-Party Service Providers">
          <div className="space-y-3 mt-2">
            <ProviderCard
              name="Supabase (Supabase Inc.)"
              role="Database infrastructure, authentication, and cloud storage provider"
              data="All database contents, including your profile, events, messages, and attendance records"
              link="supabase.com/privacy"
            />
            <ProviderCard
              name="Expo (Expo Technology Inc.)"
              role="Push notification delivery service"
              data="Your device's push notification token"
              link="expo.dev/privacy"
            />
          </div>
        </Subsection>
        <Subsection id="5.3" title="For Legal Reasons">
          We may disclose your information if we believe in good faith that such disclosure is necessary to comply
          with a legal obligation, enforce our Terms, protect the safety of our users, or prevent fraud or security
          issues.
        </Subsection>
        <Subsection id="5.4" title="Business Transfers">
          If Whim is involved in a merger, acquisition, or sale of assets, your information may be transferred as
          part of that transaction. We will provide notice before your personal information is subject to a different
          privacy policy.
        </Subsection>
      </Section>

      <Section number="6" title="Location Data — Detailed Disclosure">
        <Subsection id="6.1" title="What Location Data We Collect">
          We collect precise GPS coordinates (latitude and longitude) in two specific contexts: (a) when you create
          an event using your current location; and (b) when you check in to an event. Only the verification result
          (true/false) is permanently stored — your raw check-in coordinates are processed and not permanently stored
          in our database.
        </Subsection>
        <Subsection id="6.2" title="What Location Data We Do NOT Collect">
          <ul className="space-y-1 text-white/65 text-sm mt-2">
            <li className="flex gap-2"><span className="text-red-400">✕</span> We do not continuously track your location</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> We do not build a history of your physical movements</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> We do not share your real-time location with other users</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> We do not use your location for advertising purposes</li>
          </ul>
        </Subsection>
        <Subsection id="6.3" title="Background Location Permission">
          We may request permission to access your location while the app is in the background only to send timely
          check-in reminder notifications and to allow check-in verification without manually opening the app. You
          can revoke this permission in your device settings at any time.
        </Subsection>
      </Section>

      <Section number="7" title="Data Retention">
        <div className="space-y-3">
          {[
            { label: "Event Listings and Messages", value: "Automatically deleted approximately 24 hours after the event's scheduled end time." },
            { label: "Attendance Records", value: "Retained indefinitely as part of your profile's attendance history." },
            { label: "Profile Data", value: "Retained until you delete your account." },
            { label: "Authentication Data", value: "Retained until account deletion, subject to mandatory legal retention requirements." },
            { label: "Bug and User Reports", value: "Retained by our administrative team for safety and compliance purposes, even after account deletion." },
          ].map((row) => (
            <div key={row.label} className="flex gap-4 py-3 border-b border-white/5">
              <span className="text-white/80 text-sm font-medium w-48 shrink-0">{row.label}</span>
              <span className="text-white/60 text-sm">{row.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section number="8" title="Your Rights and Choices">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Right to Access", desc: "Request information about what personal data we hold about you." },
            { title: "Right to Correction", desc: "Correct inaccurate or incomplete personal data." },
            { title: "Right to Deletion", desc: "Request deletion of your personal data through account settings." },
            { title: "Right to Data Portability", desc: "Receive a machine-readable copy of your personal data." },
            { title: "Right to Opt Out", desc: "Opt out of push notifications through your device's notification settings." },
            { title: "GDPR Rights", desc: "EEA users may request restriction of processing or object to processing based on legitimate interests." },
          ].map((right) => (
            <div key={right.title} className="rounded-xl border border-white/8 bg-white/3 p-4">
              <p className="text-white/90 font-medium text-sm mb-1">{right.title}</p>
              <p className="text-white/55 text-sm">{right.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-4">
          To exercise your privacy rights, contact us at{" "}
          <a href="mailto:privacy@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            privacy@joinwhim.net
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section number="9" title="California Privacy Rights (CCPA)">
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          If you are a California resident, you have specific rights under the California Consumer Privacy Act
          (CCPA), including the right to know, right to delete, right to non-discrimination, and the right to opt
          out of sale. We do not sell personal information as defined under CCPA.
        </p>
        <Subsection id="9.1" title="Categories of Personal Information Collected">
          <ul className="space-y-1 mt-2">
            <li>Identifiers: name, email address, user ID</li>
            <li>Personal information (Cal. Civ. Code 1798.80(e)): name, account credentials</li>
            <li>Geolocation data: precise GPS coordinates during check-in and event creation</li>
            <li>Internet or other electronic network activity: app interaction data</li>
            <li>Professional or employment-related information: major, graduation year</li>
            <li>Inferences drawn from the above: attendance statistics, event preferences</li>
          </ul>
        </Subsection>
      </Section>

      <Section number="10" title="Data Security">
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          We implement technical and organizational measures to protect your personal information:
        </p>
        <ul className="space-y-2 text-white/65 text-sm">
          {[
            "Row-Level Security (RLS) policies on all database tables",
            "Encrypted authentication using Supabase's secure authentication infrastructure",
            "HTTPS/TLS encryption for all data in transit",
            "Secure, hashed password storage (plaintext passwords are never stored)",
            "Access controls limiting data access to authorized personnel",
            "Automated event cleanup removing sensitive chat data after events expire",
            "Secure local token storage on devices using Expo SecureStore",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-green-400 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-white/50 text-sm mt-4">
          If you discover a security vulnerability, please report it to{" "}
          <a href="mailto:security@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            security@joinwhim.net
          </a>
          .
        </p>
      </Section>

      <Section number="11" title="International Data Transfers">
        <p className="text-white/70 text-sm leading-relaxed">
          Whim is operated from the United States. If you access the Service from outside the United States, your
          information will be transferred to and processed in the United States. For users in the European Economic
          Area, we ensure that any such transfers comply with applicable data protection laws, including through
          standard contractual clauses or other appropriate safeguards as required.
        </p>
      </Section>

      <Section number="12" title="Cookies and Local Storage">
        <p className="text-white/70 text-sm leading-relaxed">
          The Whim mobile application uses Expo SecureStore to securely store your authentication session token on
          your device. This is necessary to keep you signed in between app sessions. Expo SecureStore uses the
          device&apos;s native secure storage mechanisms (iOS Keychain and Android Keystore).
        </p>
      </Section>

      <Section number="13" title="Changes to This Privacy Policy">
        <p className="text-white/70 text-sm leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.
          We will notify you of material changes by posting the updated policy within the Service and/or by sending
          an email notification to your registered address. Your continued use of the Service after the effective date
          of any changes constitutes your acceptance of the updated Privacy Policy.
        </p>
      </Section>

      <Section number="14" title="Contact Us">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
          <p className="text-white/70 text-sm mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-white/90 font-medium">Whim — Privacy Team</p>
            <p>
              <span className="text-white/40 mr-2">Privacy:</span>
              <a href="mailto:privacy@joinwhim.net" className="text-purple-400 hover:text-purple-300">privacy@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Security:</span>
              <a href="mailto:security@joinwhim.net" className="text-purple-400 hover:text-purple-300">security@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Support:</span>
              <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">support@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Website:</span>
              <a href="https://joinwhim.net" className="text-purple-400 hover:text-purple-300">joinwhim.net</a>
            </p>
          </div>
        </div>
      </Section>
    </article>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-white/8">
        <span className="text-purple-400 font-mono text-sm">{number}.</span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  )
}

function Subsection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white/90 font-medium text-sm mb-2">
        <span className="text-purple-400/70 font-mono mr-2">{id}</span>
        {title}
      </h3>
      <div className="text-white/65 text-sm leading-relaxed pl-8">{children}</div>
    </div>
  )
}

function DataCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/2 p-4">
      <p className="text-white/80 font-medium text-sm mb-2">{title}</p>
      <div className="text-white/60 text-sm [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1">{children}</div>
    </div>
  )
}

function ProviderCard({ name, role, data, link }: { name: string; role: string; data: string; link: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/2 p-4">
      <p className="text-white/90 font-medium text-sm mb-1">{name}</p>
      <p className="text-white/55 text-xs mb-1"><span className="text-white/40">Role:</span> {role}</p>
      <p className="text-white/55 text-xs mb-1"><span className="text-white/40">Data:</span> {data}</p>
      <p className="text-white/55 text-xs"><span className="text-white/40">Reference:</span> {link}</p>
    </div>
  )
}

function ContactInline() {
  return (
    <div className="mt-4 text-sm text-white/60">
      <p>
        For privacy-related inquiries:{" "}
        <a href="mailto:privacy@joinwhim.net" className="text-purple-400 hover:text-purple-300">
          privacy@joinwhim.net
        </a>
      </p>
    </div>
  )
}
