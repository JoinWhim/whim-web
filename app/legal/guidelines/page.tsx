import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Guidelines — Whim",
  description: "The rules and values that keep the Whim community safe, authentic, and welcoming.",
}

export default function GuidelinesPage() {
  return (
    <article className="prose prose-invert prose-sm max-w-none">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-white mb-2">Community Guidelines</h1>
        <p className="text-white/50 text-sm">Last Updated: April 24, 2026 &nbsp;·&nbsp; Effective Date: April 24, 2026</p>
      </div>

      <p className="text-white/70 leading-relaxed mb-10">
        Welcome to Whim. Our platform exists to cure boredom by connecting university students with spontaneous
        real-world events happening right now. To keep Whim a safe, authentic, and enjoyable space for everyone, we
        ask every member of our community to follow these guidelines. These rules apply to all content and conduct on
        Whim, including event listings, event chat messages, profile information, images, and in-person behavior
        connected to Whim events.
      </p>

      <Section number="1" title="Our Core Values">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              value: "Authenticity",
              color: "purple",
              desc: "Be real. Use your real identity, post real events, and represent yourself honestly. Whim is not a place for personas, fake events, or deceptive behavior.",
            },
            {
              value: "Safety",
              color: "blue",
              desc: "The safety of our community comes first. Every feature of Whim is designed with user safety in mind, and we expect users to prioritize safety in every interaction.",
            },
            {
              value: "Spontaneity",
              color: "green",
              desc: "Whim is about seizing the moment. Events are short-lived, last-minute, and local. Respect the spirit of the platform by keeping events genuine and timely.",
            },
            {
              value: "Inclusivity",
              color: "pink",
              desc: "University life brings together people of diverse backgrounds. Whim is a welcoming space for all students, regardless of race, ethnicity, religion, gender identity, sexual orientation, or any other characteristic.",
            },
          ].map((item) => (
            <div key={item.value} className="rounded-xl border border-white/8 bg-white/3 p-5">
              <p className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">{item.value}</p>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="2" title="Who Can Use Whim">
        <Subsection id="2.1" title="Eligibility">
          Whim may require institutional email verification (such as a .edu address) for registration or certain
          features. Where such verification is required, you must provide a valid institutional email address you are
          authorized to use and accurately represent any associated affiliation. Eligibility requirements may change
          at Whim&apos;s discretion.
        </Subsection>
        <Subsection id="2.2" title="Age Requirement">
          You must be at least 18 years of age to use Whim. Persons under 18 are not permitted to use the Service.
        </Subsection>
        <Subsection id="2.3" title="Identity Honesty">
          You are expected to use your real name and represent your identity honestly on Whim. Pseudonyms, aliases,
          and fictional personas are not permitted. Misrepresenting your identity is a violation of these guidelines.
        </Subsection>
        <Subsection id="2.4" title="One Account">
          Each person may have only one Whim account. Creating additional accounts to evade enforcement, access a
          banned account, or misrepresent your identity is strictly prohibited.
        </Subsection>
      </Section>

      <Section number="3" title="Event Standards">
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          Events are the heart of Whim. All events must meet the following standards:
        </p>
        <div className="space-y-3">
          {[
            { id: "3.1", title: "Events Must Be Real", desc: "Every event you post must be a genuine activity that is actually going to happen. Do not post fake events, placeholder events, or events you have no intention of hosting." },
            { id: "3.2", title: "Events Must Happen Within 24 Hours", desc: "Events on Whim are intended to be spontaneous and near-future. All events must be scheduled to occur within 24 hours of posting." },
            { id: "3.3", title: "Accurate Information Required", desc: "Your event's title, description, time, and location must be accurate and truthful." },
            { id: "3.4", title: "No Misleading or Bait Events", desc: "Do not create events with misleading titles, descriptions, or images designed to attract attendees under false pretenses." },
            { id: "3.5", title: "No Charging Attendees Without Disclosure", desc: "If your event has an entry fee, cover charge, or any cost to attendees, you must clearly disclose this in the event description before people join. Surprise fees are prohibited." },
            { id: "3.8", title: "Event Images", desc: "Cover images for events must not contain nudity, graphic violence, hateful imagery, or other prohibited content as defined in our Content Policy." },
            { id: "3.9", title: "One Event at a Time", desc: "Do not flood the platform with duplicate or near-duplicate events. Creating multiple listings for the same event is prohibited." },
          ].map((item) => (
            <div key={item.id} className="rounded-xl border border-white/8 bg-white/2 p-4">
              <p className="text-white/90 font-medium text-sm mb-1">
                <span className="text-purple-400/70 font-mono mr-2">{item.id}</span>
                {item.title}
              </p>
              <p className="text-white/60 text-sm leading-relaxed pl-8">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-red-300 font-medium text-sm mb-2">3.6 No Events for Illegal Activity</p>
          <p className="text-white/60 text-sm leading-relaxed pl-0">
            Events must not be created to facilitate illegal activities, including but not limited to:
          </p>
          <ul className="mt-2 space-y-1 text-white/60 text-sm list-disc pl-5">
            <li>Unlawful distribution, sale, or use of controlled substances</li>
            <li>Underage drinking events (events where the primary purpose involves alcohol for under-21 participants)</li>
            <li>Illegal gambling</li>
            <li>Trespassing or events at locations you are not authorized to use</li>
            <li>Events designed to facilitate harm to others</li>
          </ul>
        </div>
      </Section>

      <Section number="4" title="Social Interaction Standards">
        <Subsection id="4.1" title="Treat Everyone With Respect">
          Every Whim user is a real person. Treat all users with basic dignity and respect, whether in group chats,
          through direct interaction, or at in-person events.
        </Subsection>
        <Subsection id="4.2" title="No Harassment">
          Harassment of any kind is strictly prohibited. This includes persistent unwanted contact, threats of any
          kind, intimidation, targeted ridicule or humiliation, and sending repeated messages after someone has
          indicated they do not wish to communicate.
        </Subsection>
        <Subsection id="4.3" title="No Discrimination or Hate Speech">
          Whim is an inclusive platform. Content that demeans, dehumanizes, or attacks individuals or groups based on
          their race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, age,
          disability, or any other protected characteristic is strictly prohibited.
        </Subsection>
        <Subsection id="4.4" title="No Sexual Harassment or Unwanted Advances">
          Unsolicited romantic or sexual advances, comments of a sexual nature directed at another user without their
          consent, or sexually explicit messages are prohibited.
        </Subsection>
        <Subsection id="4.5" title="No Bullying">
          Whim is not a place to gang up on, single out, or bully other users. Coordinated attacks or campaigns
          against individual users are prohibited.
        </Subsection>
        <Subsection id="4.6" title="No Stalking">
          Do not use information obtained through Whim to track, monitor, or follow another user&apos;s movements or
          activities against their wishes.
        </Subsection>
        <Subsection id="4.7" title="Respect Boundaries">
          If another user blocks you, do not attempt to contact them through other means, create new accounts to
          circumvent the block, or show up to their events.
        </Subsection>
      </Section>

      <Section number="5" title="Chat Standards">
        <Subsection id="5.1" title="Event Chats Are Shared Spaces">
          Event group chats are visible to all attendees of an event. Remember that your messages are seen by
          everyone in the group.
        </Subsection>
        <Subsection id="5.2" title="Messages Are Permanent">
          Once sent, chat messages cannot be edited or deleted by users. Our platform intentionally preserves chat
          history for the duration of an event. Think carefully before you send a message.
        </Subsection>
        <Subsection id="5.3" title="Stay On Topic">
          Keep your messages relevant to the event. Excessive off-topic content or flooding a chat with repetitive
          messages is prohibited.
        </Subsection>
        <Subsection id="5.4" title="No Spam or Self-Promotion">
          Do not use event chats to advertise businesses, solicit followers or subscribers, distribute affiliate
          links, or promote services unrelated to the event.
        </Subsection>
        <Subsection id="5.5" title="No Sharing Others' Private Information">
          Do not share another person&apos;s private information — including their contact details, address, or
          anything they shared in confidence — in a group chat or elsewhere on the platform.
        </Subsection>
        <Subsection id="5.6" title="No Hate Speech or Slurs">
          The prohibition on hateful content applies equally to chat messages. Slurs, derogatory language, and hate
          speech are not tolerated in event chats.
        </Subsection>
      </Section>

      <Section number="6" title="Profile Standards">
        <Subsection id="6.1" title="Honest Identity">
          You are expected to represent your genuine identity on your profile, including using your real first and
          last name. Do not impersonate another real person, fictional character, celebrity, Whim employee, or any
          organization.
        </Subsection>
        <Subsection id="6.2" title="Accurate University Affiliation">
          Your listed university must be the institution associated with your registered email address. Do not claim
          affiliation with an institution you are not actually affiliated with.
        </Subsection>
        <Subsection id="6.3" title="Appropriate Profile and Banner Images">
          Profile photos and banner images must be appropriate for a general university audience. Prohibited images
          include nudity or sexually explicit imagery, graphic violence or gore, hateful symbols or imagery, and
          images designed to impersonate another person.
        </Subsection>
        <Subsection id="6.4" title="Clubs and Organizations">
          If you list club or organization affiliations, they must be real organizations at your institution that you
          genuinely participate in. Do not fabricate affiliations.
        </Subsection>
      </Section>

      <Section number="7" title="Reporting Violations">
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          If you encounter a user or event that violates these Community Guidelines, please use Whim&apos;s in-app
          reporting tools.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-white/8 bg-white/3 p-4">
            <p className="text-white/90 font-medium text-sm mb-2">Reporting a User</p>
            <p className="text-white/55 text-xs">Visit their profile and select the report option. Available reasons: Spam, Harassment, Inappropriate Content, Fake Profile, Other.</p>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/3 p-4">
            <p className="text-white/90 font-medium text-sm mb-2">Reporting an Event</p>
            <p className="text-white/55 text-xs">If you believe an event violates our guidelines, report it through the event&apos;s reporting option.</p>
          </div>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/2 p-4">
          <p className="text-white/80 font-medium text-sm mb-3">What happens after you report:</p>
          <ol className="space-y-2 text-white/60 text-sm list-decimal pl-4">
            <li>Your report is submitted to our moderation team</li>
            <li>Reports are reviewed on a priority basis, with safety-related reports receiving the highest priority</li>
            <li>We will investigate and take appropriate action</li>
            <li>We will not disclose the outcome of investigations to reporters to protect user privacy</li>
          </ol>
        </div>
      </Section>

      <Section number="8" title="Enforcement">
        <Subsection id="8.1" title="Enforcement Tiers">
          <div className="space-y-2 mt-2">
            {[
              { tier: "Content Removal", desc: "Removing violating content without suspension." },
              { tier: "Warning", desc: "Issuing a formal warning to your account." },
              { tier: "Temporary Suspension", desc: "Suspending your ability to access some or all features for a defined period (e.g., 7 days, 30 days)." },
              { tier: "Permanent Ban", desc: "Permanently removing your account and all associated data from the Service." },
            ].map((item) => (
              <div key={item.tier} className="flex gap-3 py-2 border-b border-white/5">
                <span className="text-purple-400 font-medium text-sm w-36 shrink-0">{item.tier}</span>
                <span className="text-white/60 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </Subsection>
        <Subsection id="8.2" title="Immediate Action">
          Certain severe violations — including posting child sexual abuse material (CSAM), making credible threats
          of violence, or coordinated harassment campaigns — may result in immediate permanent account termination
          without prior warning.
        </Subsection>
        <Subsection id="8.4" title="Appeals">
          If you believe an enforcement action was taken in error, you may appeal by emailing{" "}
          <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            appeals@joinwhim.net
          </a>{" "}
          within 30 days of the action. Include your registered email address and a description of why you believe
          the action was incorrect. Whim will review your appeal and respond within 15 business days.
        </Subsection>
      </Section>

      <Section number="9" title="Alcohol, Substances, and Sensitive Events">
        <Subsection id="9.1" title="Alcohol">
          Events involving alcohol are permitted only when all participants are of legal drinking age (21+ in the
          United States) and the event complies with all applicable laws. Events must not be designed to pressure,
          coerce, or incentivize alcohol consumption.
        </Subsection>
        <Subsection id="9.2" title="Controlled Substances">
          Events involving the use or distribution of controlled substances (illegal drugs) are strictly prohibited,
          regardless of whether such substances are decriminalized or legal in any particular jurisdiction.
        </Subsection>
        <Subsection id="9.3" title="Sensitive Events">
          Events related to mental health, grief, crisis support, or other sensitive topics are permitted and welcome,
          but must be clearly labeled and must adhere to our Content Policy. Do not exploit sensitive topics to
          attract participants under false pretenses.
        </Subsection>
        <Subsection id="9.4" title="Events Involving Physical Activity or Risk">
          If your event involves physical activity (sports, hiking, etc.) with inherent risk, you are strongly
          encouraged to disclose this in your event description.
        </Subsection>
      </Section>

      <Section number="10" title="Relationship With Terms of Service and Other Policies">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { doc: "Terms of Service", desc: "The master agreement governing your use of the platform.", href: "/legal/terms" },
            { doc: "Privacy Policy", desc: "How we collect, use, and protect your personal information.", href: "/legal/privacy" },
            { doc: "Content Policy", desc: "Detailed rules about the content you may and may not post.", href: "/legal/content" },
            { doc: "Safety Information", desc: "Guidance for staying safe when using Whim to attend real-world events.", href: "/legal/safety" },
          ].map((item) => (
            <a
              key={item.doc}
              href={item.href}
              className="rounded-xl border border-white/8 bg-white/3 p-4 hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors"
            >
              <p className="text-white/90 font-medium text-sm mb-1">{item.doc}</p>
              <p className="text-white/55 text-xs">{item.desc}</p>
            </a>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-4">
          In the event of any conflict between these Community Guidelines and the Terms of Service, the Terms of
          Service shall control.
        </p>
      </Section>

      <Section number="11" title="Questions and Contact">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
          <div className="space-y-2 text-sm">
            <p className="text-white/90 font-medium">Whim</p>
            <p>
              <span className="text-white/40 mr-2">General:</span>
              <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">support@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Safety:</span>
              <a href="mailto:safety@joinwhim.net" className="text-purple-400 hover:text-purple-300">safety@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Appeals:</span>
              <a href="mailto:appeals@joinwhim.net" className="text-purple-400 hover:text-purple-300">appeals@joinwhim.net</a>
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
