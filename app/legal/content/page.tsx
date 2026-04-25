import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Policy — Whim",
  description: "Rules governing all user-generated content submitted to the Whim platform.",
}

export default function ContentPolicyPage() {
  return (
    <article className="prose prose-invert prose-sm max-w-none">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-white mb-2">Content Policy</h1>
        <p className="text-white/50 text-sm">Last Updated: April 24, 2026 &nbsp;·&nbsp; Effective Date: April 24, 2026</p>
      </div>

      <p className="text-white/70 leading-relaxed mb-6">
        This Content Policy governs all user-generated content submitted to the Whim platform, including event
        listings, event descriptions, event cover images, profile photos, profile information, banner images, chat
        messages, and any other content users create or share through the Service.
      </p>
      <p className="text-white/70 leading-relaxed mb-10">
        Whim is a platform for spontaneous, real-world university events. Content on Whim should serve this purpose
        — helping students discover, share, and engage with real, safe, and genuine experiences. Content that
        undermines the safety, authenticity, or inclusivity of our community is prohibited.
      </p>

      <Section number="1" title="Scope of This Policy">
        <p className="text-white/70 text-sm leading-relaxed mb-3">
          This Content Policy applies to all content that can be submitted, posted, or displayed on Whim, including:
        </p>
        <ul className="space-y-2 text-white/65 text-sm">
          {[
            "Event Listings: Titles, descriptions, times, locations, cover images, tags, and organization names",
            "Chat Messages: All messages sent in event group chats, including text and any embedded content",
            "User Profiles: Name, username, biography, profile photo, banner image, major, graduation year, and club affiliations",
            "Reports and Feedback: Content submitted in user reports and bug reports",
            "Any Other User-Submitted Content: Any text, image, or data submitted through any interface in the app",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-purple-400 shrink-0">·</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section number="2" title="User Content Ownership and License">
        <Subsection id="2.1" title="You Own Your Content">
          You retain all intellectual property rights to content you create and submit to Whim. We do not claim
          ownership of your event listings, profile information, or messages.
        </Subsection>
        <Subsection id="2.2" title="License to Whim">
          By posting content to Whim, you grant Whim a non-exclusive, royalty-free, worldwide, sublicensable, and
          transferable license to use, display, reproduce, and distribute your content within the Service for the
          purpose of operating the platform and providing the Service to users.
        </Subsection>
        <Subsection id="2.3" title="Scope of License">
          This license is limited to: displaying your event listings to other users, displaying your profile to
          other users, transmitting your messages to event attendees, and using your content to provide, improve,
          and promote the Service.
        </Subsection>
        <Subsection id="2.4" title="License Termination">
          The license terminates when: (a) you delete a specific piece of content; or (b) you delete your account,
          with respect to all remaining content. Due to the nature of distributed systems, some residual data may
          take up to 30 days to fully propagate deletions.
        </Subsection>
        <Subsection id="2.6" title="Third-Party Rights">
          You represent and warrant that you own all rights to the content you post or have obtained all necessary
          permissions to grant Whim the license described above. Do not post content that infringes copyrights,
          trademarks, or other intellectual property rights belonging to others.
        </Subsection>
      </Section>

      <Section number="3" title="Prohibited Content">
        <p className="text-white/70 text-sm leading-relaxed mb-6">
          The following categories of content are strictly prohibited on Whim. Posting prohibited content may result
          in immediate removal of the content, suspension, or permanent termination of your account.
        </p>

        <div className="space-y-4">
          <ProhibitedCategory
            number="3.1"
            title="Illegal Content"
            color="red"
            items={[
              "Child Sexual Abuse Material (CSAM): Any sexually explicit depiction of a minor is strictly prohibited and will be immediately reported to NCMEC and law enforcement.",
              "Drug Trafficking and Sales: Event listings, messages, or profile content that advertise, facilitate, or solicit the sale, distribution, or purchase of illegal controlled substances.",
              "Weapons: Content facilitating the illegal sale, transfer, or acquisition of firearms, ammunition, explosives, or other weapons.",
              "Human Trafficking or Exploitation: Content that promotes, facilitates, or solicits human trafficking, forced labor, or sexual exploitation.",
              "Fraud and Scams: Content designed to defraud users of money, personal information, or other value.",
            ]}
          />

          <ProhibitedCategory
            number="3.2"
            title="Violent and Threatening Content"
            color="orange"
            items={[
              "Credible Threats: Any content that constitutes a credible threat of violence against an identifiable person, group, or institution.",
              "Glorification of Violence: Content that celebrates, glorifies, encourages, or promotes acts of violence, terrorism, or mass harm.",
              "Graphic Violence: Gratuitously graphic, gory, or disturbing depictions of injury, death, or suffering.",
              "Incitement: Content intended to incite others to engage in violent or unlawful acts.",
            ]}
          />

          <ProhibitedCategory
            number="3.3"
            title="Sexual Content"
            color="pink"
            items={[
              "Nudity: Explicit or implicit nudity in profile photos, banner images, or event cover images.",
              "Pornographic Content: Sexually explicit images, videos, or descriptions of a pornographic nature.",
              "Sexual Solicitation: Content that solicits sexual services, exchanges, or arrangements.",
              "Non-Consensual Sexual Content: Any depiction or description of sexual acts without the consent of the depicted individual(s), including revenge porn.",
              "Sexualization of Minors: Any content that sexualizes individuals under 18.",
            ]}
          />

          <ProhibitedCategory
            number="3.4"
            title="Hate Speech and Discriminatory Content"
            color="amber"
            items={[
              "Content that dehumanizes individuals or groups on the basis of protected characteristics, including race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, age, or disability.",
              "Slurs used to attack or demean individuals or groups.",
              "Calls for discrimination against protected groups.",
              "Symbols associated with hate groups when used in a hateful context.",
            ]}
          />

          <ProhibitedCategory
            number="3.5"
            title="Harassment and Abuse"
            color="yellow"
            items={[
              "Content targeting an individual with the purpose of causing emotional distress, humiliation, or fear.",
              "Doxxing: Publishing another person's private personal information without their consent.",
              "Coordinated Harassment: Organizing or participating in a campaign to harass, intimidate, or target a specific individual or group.",
              "Blackmail or Extortion: Threatening to share private or embarrassing information about someone unless demands are met.",
              "Malicious Use of Reporting: Filing false or bad-faith reports about other users as a form of harassment.",
            ]}
          />

          <ProhibitedCategory
            number="3.6"
            title="Misinformation and Deception"
            color="blue"
            items={[
              "Fake Events: Posting events that you know will not occur, do not exist, or are created for deceptive purposes.",
              "False Location: Providing a false or deliberately misleading event location.",
              "Impersonation: Creating a profile or posting content that falsely represents you as another person or organization.",
              "False Credentials: Claiming to be affiliated with a university or club that you are not affiliated with.",
            ]}
          />

          <ProhibitedCategory
            number="3.7"
            title="Spam and Platform Manipulation"
            color="green"
            items={[
              "Spam: Posting repetitive, irrelevant, or low-quality content in bulk.",
              "Unsolicited Commercial Content: Using event listings, profiles, or chats to advertise commercial products or services.",
              "Fake Accounts: Creating accounts specifically to inflate attendance numbers or circumvent enforcement actions.",
              "Gaming Attendance Metrics: Inflating your 'events attended' or 'show rate' statistics through dishonest means.",
            ]}
          />

          <ProhibitedCategory
            number="3.8"
            title="Privacy Violations"
            color="purple"
            items={[
              "Unauthorized Personal Information: Sharing another person's private information without their explicit consent.",
              "Non-Consensual Photography or Video: Posting images or videos of identifiable individuals in private situations without their consent.",
              "Screen-Captured Private Messages: Sharing screenshots of private conversations without the consent of all parties depicted.",
            ]}
          />

          <ProhibitedCategory
            number="3.9"
            title="Intellectual Property Violations"
            color="indigo"
            items={[
              "Copyright Infringement: Posting content that infringes the copyright of another party, including images, music, or text you do not own.",
              "Trademark Infringement: Using another company's logos or trademarks in a way that falsely implies affiliation.",
              "Plagiarism: Presenting others' original content as your own.",
            ]}
          />

          <ProhibitedCategory
            number="3.10"
            title="Self-Harm and Suicide"
            color="teal"
            items={[
              "Content that promotes, glorifies, or provides detailed instructions for self-harm, suicide, or eating disorders.",
              "Content that may trigger vulnerable individuals without appropriate context or safety information.",
              "Note: We support events and communities focused on mental wellness, provided they are framed supportively and do not contain harmful instructions.",
            ]}
          />
        </div>
      </Section>

      <Section number="4" title="Context-Specific Rules">
        <Subsection id="4.1" title="Event Listings">
          In addition to the prohibitions above, event listings must contain a real, accurate title, use a cover
          image that accurately represents the event, list a real location where the event will occur, and must not
          include contact information for the sole purpose of moving interactions off-platform.
        </Subsection>
        <Subsection id="4.2" title="Event Chat Messages">
          Chat messages are permanently stored until the event expires (approximately 24 hours after event time).
          They cannot be edited or deleted after sending. Do not post content in event chats that you would not want
          permanently associated with your account.
        </Subsection>
        <Subsection id="4.3" title="Profile Content">
          Profile photos and banner images are visible to all users and must be appropriate for a general university
          audience. Profile bios must not be used to communicate threats, slurs, or prohibited content. Usernames
          that include slurs, threats, or impersonation of others are prohibited.
        </Subsection>
      </Section>

      <Section number="5" title="Moderation Approach">
        <Subsection id="5.1" title="No Prior Review">
          Whim does not review content before it is posted. Content is published immediately and subject to
          moderation after posting. We rely on automated detection tools and user reports to identify potential
          violations.
        </Subsection>
        <Subsection id="5.2" title="Automated Detection">
          We use automated systems to detect certain categories of prohibited content, including known CSAM hashes
          and spam patterns. These systems may flag content for human review.
        </Subsection>
        <Subsection id="5.3" title="Human Review">
          Our moderation team manually reviews content flagged by automated systems or reported by users. We aim to
          review high-priority safety reports within 24 hours and other reports within 7 days.
        </Subsection>
        <Subsection id="5.4" title="Context Matters">
          We consider context when reviewing flagged content. Content that might appear to violate policy in
          isolation may be acceptable in a clear educational, artistic, or critical context. We assess content
          holistically.
        </Subsection>
        <Subsection id="5.6" title="Moderation Errors">
          We recognize that moderation systems are imperfect. Content may be incorrectly removed or incorrectly left
          up. If you believe content was incorrectly removed, please appeal. If you see content that should have been
          removed, please report it.
        </Subsection>
      </Section>

      <Section number="6" title="Enforcement">
        <Subsection id="6.1" title="Content Actions">
          When prohibited content is identified, we may remove the content immediately, replace the content with a
          notice that it was removed for policy violation, or preserve the content for use in safety investigations
          before removal.
        </Subsection>
        <Subsection id="6.2" title="Account Actions">
          <div className="space-y-2 mt-2">
            {[
              { tier: "Warning", desc: "A formal notice that a violation was identified. Recorded and considered in future enforcement decisions." },
              { tier: "Feature Restriction", desc: "Restricting your ability to use specific features (e.g., event creation) while allowing continued access to other parts." },
              { tier: "Temporary Suspension", desc: "Suspending your account for a defined period (e.g., 7 days, 30 days)." },
              { tier: "Permanent Termination", desc: "Permanently removing your account and all associated data." },
            ].map((item) => (
              <div key={item.tier} className="flex gap-3 py-2 border-b border-white/5">
                <span className="text-purple-400 font-medium text-sm w-44 shrink-0">{item.tier}</span>
                <span className="text-white/60 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </Subsection>
        <Subsection id="6.3" title="Immediate Termination">
          Whim reserves the right to immediately permanently terminate any account that posts CSAM, makes credible
          threats of violence, engages in doxxing, or commits other severe violations. No warning is required.
        </Subsection>
        <Subsection id="6.4" title="Reporting to Authorities">
          For content involving illegal activity — particularly CSAM, credible threats, or fraud — Whim may report
          the content and associated account information to law enforcement or relevant authorities.
        </Subsection>
        <Subsection id="6.5" title="Repeat Violations">
          Repeat violations escalate the severity of enforcement response. A pattern of violations, even of a less
          severe nature, may result in escalating responses up to permanent termination.
        </Subsection>
      </Section>

      <Section number="7" title="Appeals">
        <Subsection id="7.1" title="Right to Appeal">
          If your content is removed or your account is suspended or banned, you have the right to appeal the
          decision.
        </Subsection>
        <Subsection id="7.2" title="How to Appeal">
          Submit your appeal to{" "}
          <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            appeals@joinwhim.net
          </a>{" "}
          within 30 days of the enforcement action. Include your registered email address, a description of the
          enforcement action taken, your explanation of why you believe the decision was incorrect, and any relevant
          context.
        </Subsection>
        <Subsection id="7.3" title="Review">
          Our appeals team will review your submission independently from the original moderation decision. We aim
          to respond to appeals within 15 business days.
        </Subsection>
        <Subsection id="7.5" title="No Appeals for CSAM">
          There are no appeals for enforcement actions related to CSAM. Such accounts are permanently and
          irrevocably terminated.
        </Subsection>
      </Section>

      <Section number="8" title="Changes to This Policy">
        <p className="text-white/70 text-sm leading-relaxed">
          We may update this Content Policy as the platform evolves and as new types of content or threats emerge.
          We will notify users of material changes by posting notice within the app and/or via email. Your continued
          use of the Service after any update constitutes acceptance of the revised policy.
        </p>
      </Section>

      <Section number="9" title="Contact">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
          <div className="space-y-2 text-sm">
            <p className="text-white/90 font-medium">Whim</p>
            <p>
              <span className="text-white/40 mr-2">General:</span>
              <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">support@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Appeals:</span>
              <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">appeals@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Safety:</span>
              <a href="mailto:safety@joinwhim.net" className="text-purple-400 hover:text-purple-300">safety@joinwhim.net</a>
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

function ProhibitedCategory({
  number,
  title,
  items,
  color,
}: {
  number: string
  title: string
  items: string[]
  color: string
}) {
  const borderColors: Record<string, string> = {
    red: "border-red-500/20 bg-red-500/5",
    orange: "border-orange-500/20 bg-orange-500/5",
    pink: "border-pink-500/20 bg-pink-500/5",
    amber: "border-amber-500/20 bg-amber-500/5",
    yellow: "border-yellow-500/20 bg-yellow-500/5",
    blue: "border-blue-500/20 bg-blue-500/5",
    green: "border-emerald-500/20 bg-emerald-500/5",
    purple: "border-purple-500/20 bg-purple-500/5",
    indigo: "border-indigo-500/20 bg-indigo-500/5",
    teal: "border-teal-500/20 bg-teal-500/5",
  }

  const textColors: Record<string, string> = {
    red: "text-red-300",
    orange: "text-orange-300",
    pink: "text-pink-300",
    amber: "text-amber-300",
    yellow: "text-yellow-300",
    blue: "text-blue-300",
    green: "text-emerald-300",
    purple: "text-purple-300",
    indigo: "text-indigo-300",
    teal: "text-teal-300",
  }

  return (
    <div className={`rounded-xl border p-5 ${borderColors[color] ?? "border-white/10 bg-white/3"}`}>
      <p className={`font-semibold text-sm mb-3 ${textColors[color] ?? "text-white/80"}`}>
        <span className="font-mono mr-2 opacity-70">{number}</span>
        {title}
      </p>
      <ul className="space-y-2 text-white/65 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-white/30 shrink-0 mt-0.5">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
