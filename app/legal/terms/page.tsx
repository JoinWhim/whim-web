import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Whim",
  description: "Whim Terms of Service. Read the legal agreement governing your use of Whim.",
}

export default function TermsPage() {
  return (
    <article className="prose prose-invert prose-sm max-w-none">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/50 text-sm">Last Updated: April 24, 2026 &nbsp;·&nbsp; Effective Date: April 24, 2026</p>
      </div>

      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 px-6 py-4 mb-10">
        <p className="text-amber-300 text-sm leading-relaxed">
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING WHIM. BY CREATING AN ACCOUNT, ACCESSING, OR USING
          THE WHIM APPLICATION OR WEBSITE (COLLECTIVELY, THE "SERVICE"), YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU
          DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.
        </p>
      </div>

      <p className="text-white/70 leading-relaxed mb-10">
        These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your")
        and Whim ("Whim," "we," "us," or "our"), the operator of the Whim mobile application available at joinwhim.net
        (the "Service"). Whim is a platform that enables university students to discover, create, and attend spontaneous
        local events.
      </p>

      <Section number="1" title="Eligibility">
        <Subsection id="1.1" title="Age Requirement">
          You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that
          you are 18 years of age or older. If you are under 18, you may not create an account or use the Service.
        </Subsection>
        <Subsection id="1.2" title="Institutional Email Verification">
          Whim may require institutional email verification for certain features or access to the Service. Currently,
          registration requires a valid institutional email address (such as a .edu address) recognized by Whim. By
          providing an institutional email address, you represent and warrant that: (a) You are authorized to use the
          email address you provided; (b) Any affiliation you represent is accurate and truthful. Whim reserves the
          right to modify, expand, or remove email verification requirements at any time at its sole discretion.
        </Subsection>
        <Subsection id="1.3" title="Onboarding Requirements">
          Whim may require invitations, referrals, or other onboarding steps as a condition of accessing the full
          Service. These requirements may change or be removed at any time at Whim&apos;s discretion.
        </Subsection>
        <Subsection id="1.4" title="Geographic Restrictions">
          The Service is currently intended for users located in the United States. We make no representation that the
          Service is appropriate or available for use in other locations.
        </Subsection>
        <Subsection id="1.5" title="Legal Capacity">
          You represent and warrant that you have the full legal capacity to enter into these Terms and that you are not
          barred from using the Service under applicable law.
        </Subsection>
      </Section>

      <Section number="2" title="Account Registration and Security">
        <Subsection id="2.1" title="Account Creation">
          To access most features of the Service, you must create an account. You agree to provide accurate, current,
          and complete information during registration, including your name and a valid email address meeting any
          applicable verification requirements. You are expected to represent your identity honestly. You further agree
          to maintain and promptly update this information as necessary.
        </Subsection>
        <Subsection id="2.2" title="Email Verification">
          Upon registration, you will be required to verify your email address via a one-time password (OTP) sent to
          your provided institutional email. Your account will not be activated until email verification is complete.
        </Subsection>
        <Subsection id="2.3" title="Account Credentials">
          You are responsible for maintaining the confidentiality of your account credentials, including your password.
          You agree not to share your credentials with any third party. You are fully responsible for all activities
          that occur under your account. You agree to notify Whim immediately at{" "}
          <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            support@joinwhim.net
          </a>{" "}
          of any unauthorized access to or use of your account.
        </Subsection>
        <Subsection id="2.4" title="One Account Per Person">
          You may only create and maintain one account. Creating multiple accounts to circumvent enforcement actions,
          bans, or platform restrictions is strictly prohibited and may result in permanent removal from the Service.
        </Subsection>
        <Subsection id="2.5" title="Account Security">
          Whim is not liable for any loss or damage arising from your failure to maintain the security of your account
          credentials. You are solely responsible for any activity conducted through your account.
        </Subsection>
        <Subsection id="2.6" title="Username">
          If you choose a username, it must not impersonate another person, constitute a trademark infringement, or be
          obscene, offensive, or otherwise in violation of these Terms.
        </Subsection>
      </Section>

      <Section number="3" title="The Service">
        <Subsection id="3.1" title="Description">
          Whim is a social platform that allows users to discover events created by other university students, create
          and post events, join events, participate in event-based group chats, verify attendance at events using GPS
          technology, and build connections with other university students.
        </Subsection>
        <Subsection id="3.2" title="Event Discovery">
          The Service provides a swipe-based interface to discover and join events posted by other users within
          configurable distance parameters. Events are displayed based on proximity to your device&apos;s location,
          relevance, and time.
        </Subsection>
        <Subsection id="3.3" title="Event Creation">
          You may create events through the Service. Events are limited to activities that will occur within the
          following 24-hour period from the time of posting. By creating an event, you represent that: (a) The event is
          real and will actually take place; (b) The event location, time, and description are accurate; (c) You have
          the authority to host the described event at the listed location; (d) The event complies with all applicable
          laws, campus rules, and these Terms.
        </Subsection>
        <Subsection id="3.4" title="Event Attendance and Check-In">
          When you join an event, you become a member of that event&apos;s attendee list and associated group chat.
          The Service includes a GPS-based attendance verification feature that allows you to confirm your physical
          presence at an event within approximately 150 meters of the event&apos;s listed coordinates. By using the
          check-in feature, you consent to the collection and processing of your precise GPS location at the time of
          check-in solely for the purpose of verifying attendance.
        </Subsection>
        <Subsection id="3.5" title="Event Chat">
          Joining an event grants you access to a group chat for that event. Messages sent in event chats are visible
          to all attendees of that event. Messages are retained until the event is automatically archived (generally
          within 24 hours after the event time). Once posted, messages cannot be edited or deleted by users. You are
          solely responsible for the content of messages you send.
        </Subsection>
        <Subsection id="3.6" title="Social Features">
          The Service includes features to send and receive friend requests, view other users&apos; public profiles,
          and see mutual connections. These features are intended to facilitate real-world social interactions in
          connection with events.
        </Subsection>
        <Subsection id="3.7" title="Notifications">
          By using the Service, you consent to receive push notifications related to events you have joined, friend
          requests, and other platform activity. You may manage notification preferences through your device&apos;s
          notification settings.
        </Subsection>
        <Subsection id="3.8" title="Service Availability">
          We do not guarantee that the Service will be available at all times, without interruption, or free from
          errors. We reserve the right to modify, suspend, or discontinue the Service or any feature thereof at any
          time, with or without notice, and without liability to you.
        </Subsection>
      </Section>

      <Section number="4" title="User Conduct and Acceptable Use">
        <Subsection id="4.1" title="General Obligations">
          You agree to use the Service only for lawful purposes and in a manner consistent with these Terms, our
          Community Guidelines, Content Policy, and all applicable local, state, federal, and international laws and
          regulations.
        </Subsection>
        <Subsection id="4.2" title="Prohibited Conduct">
          <p className="mb-3">You agree that you will NOT:</p>
          <ul className="space-y-2 text-white/70">
            {[
              "Post false, misleading, deceptive, or fraudulent events, locations, or information;",
              "Impersonate any person or entity, including other Whim users, university officials, law enforcement, or Whim employees;",
              "Create events for illegal activities, including but not limited to events involving unlawful distribution of controlled substances, illegal gambling, or other criminal conduct;",
              "Harass, bully, intimidate, stalk, threaten, or otherwise harm any other user or person;",
              "Post or transmit content that is defamatory, obscene, pornographic, hateful, racially or ethnically offensive, or otherwise objectionable;",
              "Engage in any form of discrimination based on race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, age, disability, or any other protected characteristic;",
              "Collect or harvest personal information of other users without their explicit consent;",
              "Use the Service to transmit unsolicited commercial communications (spam);",
              "Attempt to gain unauthorized access to other users' accounts, Whim's systems, or any related networks;",
              "Reverse engineer, disassemble, decompile, or otherwise attempt to derive source code from the Service;",
              "Use automated tools, bots, scrapers, or other non-human means to access or interact with the Service;",
              "Create multiple accounts or use the Service after being banned or suspended;",
              "Interfere with or disrupt the integrity or performance of the Service;",
              "Use the Service in any way that could damage, disable, overburden, or impair our servers or networks;",
              "Facilitate, assist, or encourage any third party to do any of the foregoing.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-purple-400 shrink-0">({String.fromCharCode(97 + i)})</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Subsection>
        <Subsection id="4.3" title="Real-World Safety">
          You acknowledge that Whim is a platform for discovering and attending real-world events and that meeting
          strangers in person carries inherent risks. You agree to exercise reasonable caution when attending events
          organized through the Service. Whim is not responsible for any harm, injury, loss, or damage that occurs as
          a result of your participation in any event or your interaction with other users, online or in person.
        </Subsection>
        <Subsection id="4.4" title="Alcohol and Controlled Substances">
          You agree not to create or promote events that involve the unlawful use, distribution, or sale of alcohol or
          controlled substances. Events involving alcohol must comply with all applicable laws, including minimum age
          requirements. You agree not to pressure, coerce, or encourage other users to consume alcohol or substances.
        </Subsection>
        <Subsection id="4.5" title="No Background Checks or Identity Verification">
          WHIM DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON USERS AND DOES NOT INDEPENDENTLY VERIFY USER IDENTITIES
          BEYOND EMAIL VERIFICATION. The presence of a user on the platform does not constitute any endorsement,
          vetting, or certification of that user&apos;s character, background, or intentions. You are solely
          responsible for exercising caution when interacting with other users, both online and in person.
        </Subsection>
        <Subsection id="4.6" title="User Responsibility for Events">
          Users are solely responsible for ensuring that any event they create or participate in complies with all
          applicable laws, university policies, and venue rules. Whim does not review events for legal compliance and
          is not liable for any violation of law, policy, or venue rules arising from an event created or attended
          through the Service.
        </Subsection>
      </Section>

      <Section number="5" title="User-Generated Content">
        <Subsection id="5.1" title="Your Content">
          The Service allows you to submit, post, and share content, including but not limited to event listings,
          descriptions, images, profile information, and chat messages ("User Content"). You retain all ownership
          rights in any User Content you submit.
        </Subsection>
        <Subsection id="5.2" title="License to Whim">
          By submitting User Content to the Service, you grant Whim a non-exclusive, royalty-free, worldwide,
          sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display,
          and perform your User Content solely in connection with operating and providing the Service. This license
          terminates when your User Content is deleted from the Service or when your account is permanently deleted.
        </Subsection>
        <Subsection id="5.3" title="Representations and Warranties">
          You represent and warrant that: (a) You own or otherwise have the right to grant the license described in
          Section 5.2; (b) Your User Content does not infringe upon any third party&apos;s intellectual property
          rights, privacy rights, or any other rights; (c) Your User Content complies with these Terms, our Content
          Policy, and all applicable laws.
        </Subsection>
        <Subsection id="5.4" title="Whim's Right to Review">
          Whim reserves the right, but has no obligation, to review, monitor, or remove User Content at our sole
          discretion, at any time, and for any reason, including if we believe the content violates these Terms or
          applicable law.
        </Subsection>
        <Subsection id="5.5" title="No Endorsement">
          Whim does not endorse, support, represent, or guarantee the completeness, truthfulness, accuracy, or
          reliability of any User Content. You understand that by using the Service, you may be exposed to content
          that might be offensive, harmful, inaccurate, or otherwise inappropriate.
        </Subsection>
        <Subsection id="5.6" title="Feedback">
          If you provide Whim with any feedback, suggestions, or ideas regarding the Service, you grant Whim an
          unrestricted, perpetual, irrevocable, royalty-free license to use that feedback in any way, without any
          obligation to you.
        </Subsection>
      </Section>

      <Section number="6" title="Intellectual Property">
        <Subsection id="6.1" title="Whim's Intellectual Property">
          The Service and its entire contents, features, and functionality are owned by Whim and are protected by
          United States and international copyright, trademark, patent, trade secret, and other intellectual property
          laws.
        </Subsection>
        <Subsection id="6.2" title="Limited License">
          Subject to your compliance with these Terms, Whim grants you a limited, non-exclusive, non-transferable,
          non-sublicensable, revocable license to access and use the Service for your personal, non-commercial use.
        </Subsection>
        <Subsection id="6.3" title="Restrictions">
          You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
          republish, download, store, or transmit any of the material on the Service except as permitted by these Terms
          or with Whim&apos;s prior written consent.
        </Subsection>
        <Subsection id="6.4" title="Trademarks">
          "Whim," the Whim logo, and related marks are trademarks of Whim. You may not use these marks without
          Whim&apos;s prior written permission.
        </Subsection>
      </Section>

      <Section number="7" title="Privacy and Data">
        <Subsection id="7.1" title="Privacy Policy">
          Your use of the Service is also governed by our{" "}
          <a href="/legal/privacy" className="text-purple-400 hover:text-purple-300">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference. By using the Service, you consent to the collection,
          use, and disclosure of your information as described in our Privacy Policy.
        </Subsection>
        <Subsection id="7.2" title="Location Data">
          You acknowledge that use of certain Service features, including event creation and attendance verification,
          requires your device to share precise GPS location data with Whim. You may be asked to grant background
          location permissions on your device to enable check-in reminder notifications. You may withdraw location
          permissions through your device&apos;s settings, but doing so may limit your ability to use certain features
          of the Service.
        </Subsection>
        <Subsection id="7.3" title="Communications">
          By creating an account, you consent to receive email communications from Whim related to your account,
          including verification emails, security alerts, and important notices regarding these Terms or the Service.
        </Subsection>
      </Section>

      <Section number="8" title="Third-Party Services">
        <Subsection id="8.1" title="Third-Party Integrations">
          The Service integrates with third-party services, including Supabase (database and authentication
          infrastructure) and Expo (push notification delivery). Your use of the Service is subject to the terms and
          privacy policies of these third-party providers.
        </Subsection>
        <Subsection id="8.2" title="Third-Party Links">
          The Service may contain links to third-party websites or services. Whim has no control over, and assumes no
          responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </Subsection>
        <Subsection id="8.3" title="No Endorsement">
          The inclusion of any link to a third-party website or service does not imply Whim&apos;s endorsement of that
          site or service.
        </Subsection>
      </Section>

      <Section number="9" title="Account Termination and Suspension">
        <Subsection id="9.1" title="Termination by You">
          You may terminate your account at any time by using the account deletion feature within the
          Service&apos;s settings. Upon account deletion, Whim will permanently delete your profile and all associated
          personal data as described in our Privacy Policy, subject to applicable retention requirements. Deletion is
          irreversible.
        </Subsection>
        <Subsection id="9.2" title="Termination by Whim">
          Whim reserves the right to suspend or permanently terminate your account and access to the Service, with or
          without notice, for any reason, including but not limited to: (a) Violation of these Terms, the Community
          Guidelines, or the Content Policy; (b) Conduct that Whim, in its sole discretion, believes is harmful to
          other users, the platform, or third parties; (c) Fraudulent, deceptive, or illegal activity; (d) Extended
          periods of account inactivity; (e) At Whim&apos;s sole discretion for any other reason.
        </Subsection>
        <Subsection id="9.3" title="Effect of Termination">
          Upon termination of your account, your license to use the Service will immediately cease. Provisions of
          these Terms that by their nature should survive termination shall survive, including but not limited to
          Sections 5.2, 6, 10, 11, 12, 13, and 14.
        </Subsection>
        <Subsection id="9.4" title="Appeals">
          If you believe your account was terminated in error, you may contact us at{" "}
          <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            appeals@joinwhim.net
          </a>{" "}
          within thirty (30) days of termination. Whim will review your appeal but is under no obligation to reinstate
          your account.
        </Subsection>
      </Section>

      <Section number="10" title="Disclaimers of Warranties">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-4">
          <DisclaimerItem title="As-Is Basis">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED. WHIM EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </DisclaimerItem>
          <DisclaimerItem title="No Warranty of Accuracy">
            WHIM DOES NOT WARRANT THAT THE SERVICE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED; THAT
            DEFECTS WILL BE CORRECTED; THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS; OR THAT THE SERVICE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </DisclaimerItem>
          <DisclaimerItem title="No Responsibility for Events">
            WHIM IS A TECHNOLOGY PLATFORM THAT ENABLES USERS TO DISCOVER AND ORGANIZE EVENTS. WHIM IS NOT AN EVENT
            ORGANIZER AND DOES NOT CONTROL THE EVENTS LISTED ON THE SERVICE. YOUR ATTENDANCE AT ANY EVENT IS AT YOUR
            OWN RISK.
          </DisclaimerItem>
          <DisclaimerItem title="User Conduct and Assumption of Risk">
            WHIM IS NOT RESPONSIBLE FOR THE CONDUCT OF ANY USER, ONLINE OR IN PERSON. YOU VOLUNTARILY ASSUME ALL
            RISKS ASSOCIATED WITH ATTENDING EVENTS, INTERACTING WITH OTHER USERS, AND ANY OTHER USE OF THE SERVICE.
          </DisclaimerItem>
        </div>
      </Section>

      <Section number="11" title="Limitation of Liability">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 space-y-4">
          <DisclaimerItem title="Exclusion of Damages">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WHIM, ITS OFFICERS, DIRECTORS,
            EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
            SERVICE.
          </DisclaimerItem>
          <DisclaimerItem title="Cap on Liability">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WHIM'S TOTAL CUMULATIVE LIABILITY TO YOU SHALL NOT
            EXCEED THE GREATER OF (A) ONE HUNDRED DOLLARS ($100) OR (B) THE TOTAL AMOUNTS PAID BY YOU TO WHIM IN
            THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </DisclaimerItem>
        </div>
      </Section>

      <Section number="12" title="Indemnification">
        <p className="text-white/70 leading-relaxed">
          You agree to defend, indemnify, and hold harmless Whim and its officers, directors, employees, agents,
          licensors, and service providers from and against any claims, liabilities, damages, judgments, awards,
          losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
          (a) Your violation of these Terms; (b) Your User Content; (c) Your use of the Service; (d) Your attendance
          at or organization of any event; (e) Your interaction with any other user, online or in person; (f) Your
          violation of any applicable law or regulation; (g) Your violation of any third party&apos;s rights.
        </p>
      </Section>

      <Section number="13" title="Dispute Resolution">
        <Subsection id="13.1" title="Informal Resolution">
          Before initiating any formal dispute proceeding, you agree to first contact Whim at{" "}
          <a href="mailto:legal@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            legal@joinwhim.net
          </a>{" "}
          and attempt to resolve the dispute informally. Whim will attempt to respond and resolve the dispute within
          thirty (30) days of receiving your notice.
        </Subsection>
        <Subsection id="13.2" title="Binding Arbitration">
          If the dispute is not resolved informally, any dispute, claim, or controversy arising out of or relating to
          these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration
          Association ("AAA") under its Consumer Arbitration Rules. The arbitration shall take place in New York, and
          the Federal Arbitration Act shall govern.
        </Subsection>
        <Subsection id="13.3" title="Class Action Waiver">
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND WHIM AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
          ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
          CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
        </Subsection>
        <Subsection id="13.4" title="Exceptions">
          Either party may seek emergency injunctive or other equitable relief from a court of competent jurisdiction
          to prevent irreparable harm pending resolution of a dispute. Claims of intellectual property infringement
          may also be brought in court.
        </Subsection>
        <Subsection id="13.5" title="Time Limitation">
          Any claim arising out of or relating to these Terms or the Service must be filed within one (1) year of when
          it accrues. Claims not filed within this period are permanently barred.
        </Subsection>
      </Section>

      <Section number="14" title="Governing Law">
        <p className="text-white/70 leading-relaxed">
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and
          construed in accordance with the laws of the State of New York, without giving effect to any choice or
          conflict of law provision. Subject to Section 13, any legal suit, action, or proceeding shall be instituted
          exclusively in the federal courts of the United States or the courts of the State of New York.
        </p>
      </Section>

      <Section number="15" title="Changes to Terms">
        <Subsection id="15.1" title="Right to Modify">
          Whim reserves the right to modify these Terms at any time. If we make material changes, we will notify you
          by posting the updated Terms within the Service, sending you an email notification at your registered
          address, or both.
        </Subsection>
        <Subsection id="15.2" title="Acceptance of Changes">
          Your continued use of the Service after any modification to these Terms constitutes your acceptance of the
          modified Terms. If you do not agree to the modified Terms, you must stop using the Service and may delete
          your account.
        </Subsection>
      </Section>

      <Section number="16" title="General Provisions">
        <Subsection id="16.1" title="Entire Agreement">
          These Terms, together with the Privacy Policy, Community Guidelines, Content Policy, and Safety Information,
          constitute the entire agreement between you and Whim regarding the Service.
        </Subsection>
        <Subsection id="16.2" title="Severability">
          If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and
          the remaining provisions shall continue in full force and effect.
        </Subsection>
        <Subsection id="16.3" title="Waiver">
          Whim&apos;s failure to enforce any provision of these Terms shall not be deemed a waiver of Whim&apos;s right to
          do so in the future.
        </Subsection>
        <Subsection id="16.4" title="Assignment">
          You may not assign or transfer any of your rights or obligations under these Terms without Whim&apos;s prior
          written consent. Whim may assign these Terms or any of its rights or obligations hereunder without
          restriction.
        </Subsection>
        <Subsection id="16.5" title="Notices">
          Notices to you may be sent to the email address associated with your account. Notices to Whim should be
          sent to{" "}
          <a href="mailto:legal@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            legal@joinwhim.net
          </a>
          .
        </Subsection>
      </Section>

      <Section number="17" title="Contact Information">
        <ContactBlock />
      </Section>
    </article>
  )
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
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

function Subsection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
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

function DisclaimerItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">{title}</p>
      <p className="text-white/60 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function ContactBlock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
      <p className="text-white/70 text-sm mb-4">
        If you have questions about these Terms of Service, please contact us:
      </p>
      <div className="space-y-2 text-sm">
        <p className="text-white/90 font-medium">Whim</p>
        <p>
          <span className="text-white/40 mr-2">Legal:</span>
          <a href="mailto:legal@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            legal@joinwhim.net
          </a>
        </p>
        <p>
          <span className="text-white/40 mr-2">Support:</span>
          <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            support@joinwhim.net
          </a>
        </p>
        <p>
          <span className="text-white/40 mr-2">Privacy:</span>
          <a href="mailto:privacy@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            privacy@joinwhim.net
          </a>
        </p>
        <p>
          <span className="text-white/40 mr-2">Safety:</span>
          <a href="mailto:safety@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            safety@joinwhim.net
          </a>
        </p>
        <p>
          <span className="text-white/40 mr-2">Appeals:</span>
          <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            appeals@joinwhim.net
          </a>
        </p>
        <p>
          <span className="text-white/40 mr-2">Website:</span>
          <a href="https://joinwhim.net" className="text-purple-400 hover:text-purple-300">
            joinwhim.net
          </a>
        </p>
      </div>
    </div>
  )
}
