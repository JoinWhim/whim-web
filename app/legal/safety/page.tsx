import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safety Information — Whim",
  description: "Safety tips and resources for using Whim to attend real-world events.",
}

export default function SafetyPage() {
  return (
    <article className="prose prose-invert prose-sm max-w-none">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">Legal</p>
        <h1 className="text-3xl font-bold text-white mb-2">Safety Information</h1>
        <p className="text-white/50 text-sm">Last Updated: April 24, 2026 &nbsp;·&nbsp; Effective Date: April 24, 2026</p>
      </div>

      <p className="text-white/70 leading-relaxed mb-6">
        At Whim, your safety is our top priority. Whim is a platform that connects university students with
        spontaneous real-world events. Unlike purely online services, Whim is designed to bring people together in
        person — which makes safety information particularly important, not just for your digital experience, but for
        your physical safety in the real world.
      </p>

      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-4 mb-10">
        <p className="text-red-300 font-semibold text-sm mb-1">In an Emergency</p>
        <p className="text-white/70 text-sm">
          If you are in danger or witness a crime, call <strong className="text-white">911</strong> immediately.
          Whim cannot contact emergency services on your behalf.
        </p>
      </div>

      <Section number="1" title="Whim's Approach to Safety">
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          Whim connects real people at real locations. We have built the platform with several safety features, but
          technology cannot replace personal judgment and caution. We encourage every user to:
        </p>
        <ul className="space-y-2 text-white/65 text-sm mb-6">
          <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Trust your instincts. If something feels off about an event or a person, leave.</li>
          <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Prioritize your safety over your check-in status.</li>
          <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Use Whim&apos;s safety tools. Block and report features exist for a reason.</li>
          <li className="flex gap-2"><span className="text-purple-400 shrink-0">→</span> Know that you are never alone. Our moderation team and law enforcement are resources available to you.</li>
        </ul>
        <div className="rounded-xl border border-white/8 bg-white/3 p-5">
          <p className="text-white/80 font-medium text-sm mb-3">Platform-Level Safety Features</p>
          <ul className="space-y-2 text-white/60 text-sm">
            {[
              "Email verification for all accounts — reducing anonymity and fake accounts",
              "GPS-based attendance verification that processes location at check-in without continuously tracking you",
              "User blocking to prevent unwanted contact",
              "In-app user reporting for policy violations",
              "Account deletion with full data removal",
              "A moderation team that reviews reported content and accounts",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section number="2" title="Before You Attend an Event">
        <Subsection id="2.1" title="Evaluate the Event">
          <div className="space-y-2 mt-2">
            {[
              { tip: "Check the host's profile", desc: "Does the host have a complete profile with a real photo, name, and university affiliation? How many events have they previously hosted?" },
              { tip: "Look at attendees", desc: "Are there other people attending whom you recognize or who have mutual connections with you?" },
              { tip: "Read the full description", desc: "Does the event listing seem specific and genuine? Vague or overly enticing descriptions with no real details can be a red flag." },
              { tip: "Verify the location makes sense", desc: "Is the listed location a real, publicly accessible place? Be cautious of events at private residences you have never been to." },
              { tip: "Check for red flags", desc: "Events with exaggerated promises, pressure to attend quickly, or unusual requests should be approached with caution." },
            ].map((item) => (
              <div key={item.tip} className="rounded-lg border border-white/6 bg-white/2 px-4 py-3">
                <p className="text-white/80 font-medium text-sm">{item.tip}</p>
                <p className="text-white/55 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </Subsection>
        <Subsection id="2.2" title="Let Someone Know Where You Are Going">
          Whenever you attend an event through Whim — especially one where you do not know any of the other attendees
          — we strongly recommend telling a trusted friend, roommate, or family member where you are going, when you
          expect to return, and who the host is. Arrange a check-in system with a friend (e.g., "Text me when you
          get there and when you leave").
        </Subsection>
        <Subsection id="2.3" title="Plan Your Transportation">
          Arrange reliable transportation to and from the event before you go. Do not rely on a stranger for a ride
          home. Have a rideshare app ready as a backup.
        </Subsection>
        <Subsection id="2.4" title="Charge Your Phone">
          Ensure your phone is charged before attending an event. A dead phone can leave you unable to call for help,
          navigate home, or access Whim&apos;s features.
        </Subsection>
      </Section>

      <Section number="3" title="At the Event">
        <Subsection id="3.1" title="Trust Your Instincts">
          If you arrive at an event and something feels wrong, leave immediately. Do not feel obligated to stay
          because you RSVP&apos;d or joined the chat. Your safety is more important than any social awkwardness.
        </Subsection>
        <Subsection id="3.2" title="Staying Aware">
          <ul className="space-y-1 mt-2">
            <li>Stay alert and aware of your surroundings at all times</li>
            <li>Avoid being isolated with people you do not know or trust</li>
            <li>Keep an eye on your belongings</li>
            <li>Know the exits and how to leave quickly if needed</li>
          </ul>
        </Subsection>
        <Subsection id="3.3" title="Your Check-In Is Optional">
          Verifying your attendance via GPS check-in is a voluntary feature. You should never feel pressured to
          remain at an unsafe event to complete a check-in. You can leave at any point — your safety is the priority.
          Partial check-in data will not negatively affect your account.
        </Subsection>
        <Subsection id="3.4" title="Leaving Early">
          If you leave an event early because you feel unsafe: (1) Get to a safe location first; (2) Then report the
          event or the host via the app if appropriate; (3) Contact emergency services if you experienced or witnessed
          a crime.
        </Subsection>
        <Subsection id="3.5" title="Alcohol and Substances">
          <ul className="space-y-1 mt-2">
            <li>Never accept drinks from people you do not know and trust</li>
            <li>Never leave your drink unattended at events</li>
            <li>Know your limits and make decisions about alcohol or substances soberly and intentionally</li>
            <li>If a friend appears to be in distress or impaired without their consent, seek help immediately</li>
          </ul>
        </Subsection>
      </Section>

      <Section number="4" title="Blocking and Reporting">
        <Subsection id="4.1" title="How to Block a User">
          <div className="mt-2 space-y-3">
            <div className="rounded-xl border border-white/8 bg-white/2 p-4">
              <p className="text-white/80 font-medium text-sm mb-2">Steps to block</p>
              <ol className="list-decimal pl-4 space-y-1 text-white/60 text-sm">
                <li>Navigate to the user&apos;s profile</li>
                <li>Select the block option from their profile menu</li>
                <li>Confirm the block</li>
              </ol>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/2 p-4">
              <p className="text-white/80 font-medium text-sm mb-2">When you block someone</p>
              <ul className="space-y-1 text-white/60 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> They cannot see your profile or events</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Their messages in shared chats will be hidden from you</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> They will not appear in your event discovery feed</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> The block is private — the blocked user is not notified</li>
              </ul>
            </div>
          </div>
        </Subsection>
        <Subsection id="4.2" title="How to Report a User">
          Navigate to the user&apos;s profile, select the report option, choose a reason (Spam, Harassment,
          Inappropriate Content, Fake Profile, or Other), and submit. Reports are reviewed by our moderation team.
          High-priority safety reports (harassment, threats) are escalated for faster review.
        </Subsection>
        <Subsection id="4.3" title="How to Report an Event">
          Open the event listing, select the report option from the event menu, describe the concern, and submit.
        </Subsection>
        <Subsection id="4.4" title="After You Report">
          We take all reports seriously. Our moderation team will review the report, may reach out for additional
          information, and will take appropriate action based on our findings. Due to privacy considerations, we
          generally cannot disclose the specific outcome of reports.
        </Subsection>
        <Subsection id="4.5" title="False Reports">
          Reporting someone in bad faith or as a form of harassment is itself a violation of our Community Guidelines
          and may result in action against your account.
        </Subsection>
      </Section>

      <Section number="5" title="Your Location Data and Privacy">
        <Subsection id="5.1" title="What Whim Sees">
          Whim collects your precise GPS location only in specific, limited circumstances: (a) when you create an
          event and choose to use your current location; and (b) when you use the GPS check-in feature to verify
          event attendance. We do NOT continuously monitor your location or build a record of your physical movements.
        </Subsection>
        <Subsection id="5.2" title="What Other Users See">
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-3">
              <p className="text-green-300 font-medium text-xs mb-2">CAN see</p>
              <ul className="space-y-1 text-white/60 text-xs">
                <li>That you have joined or attended an event</li>
                <li>Your verified attendance at events on your public profile</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
              <p className="text-red-300 font-medium text-xs mb-2">CANNOT see</p>
              <ul className="space-y-1 text-white/60 text-xs">
                <li>Your real-time GPS location</li>
                <li>Your home address or any private address</li>
                <li>Your movement patterns or routes</li>
              </ul>
            </div>
          </div>
        </Subsection>
        <Subsection id="5.4" title="Do NOT Use Personal Addresses as Event Locations">
          We strongly advise against listing your home address, dorm room, or any private residence as an event
          location — especially for events open to strangers. Consider using a nearby public location (campus quad,
          dining hall, public park) as the meeting point instead.
        </Subsection>
        <Subsection id="5.5" title="Location Data Security">
          All location data transmitted to Whim is encrypted in transit. Our servers use Row-Level Security to ensure
          that your location information is only accessible to authorized systems and personnel.
        </Subsection>
      </Section>

      <Section number="6" title="Account Security">
        <Subsection id="6.1" title="Use a Strong Password">
          Your Whim password must be at least 8 characters. We recommend using a strong, unique password that you do
          not use for other accounts. Consider using a password manager.
        </Subsection>
        <Subsection id="6.2" title="Do Not Share Your Login Credentials">
          Never share your email address and password with anyone else. Whim staff will never ask for your password.
          If someone claiming to be from Whim asks for your password, it is a scam — report it to{" "}
          <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            support@joinwhim.net
          </a>
          .
        </Subsection>
        <Subsection id="6.3" title="Log Out on Shared Devices">
          If you access your Whim account on a shared device, be sure to log out when you are done to prevent
          unauthorized access to your account.
        </Subsection>
        <Subsection id="6.4" title="Suspicious Activity">
          If you notice unusual activity on your account — messages you did not send, events you did not create, or
          profile changes you did not make — contact{" "}
          <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            support@joinwhim.net
          </a>{" "}
          immediately and change your password.
        </Subsection>
      </Section>

      <Section number="7" title="Emergency Situations">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/8 p-6 mb-6">
          <p className="text-red-300 font-semibold text-base mb-2">In an Emergency, Call 911</p>
          <p className="text-white/70 text-sm leading-relaxed">
            Whim cannot contact emergency services on your behalf. If you are in a dangerous situation or witness a
            crime, call 911 (or your local emergency services number) immediately. Do not wait to report something
            within the app first — your safety comes first.
          </p>
        </div>
        <Subsection id="7.2" title="When to Call 911">
          <ul className="space-y-1 mt-2">
            <li>You are physically threatened or assaulted</li>
            <li>You witness a crime</li>
            <li>Someone is experiencing a medical emergency</li>
            <li>You feel your safety or the safety of others is at immediate risk</li>
          </ul>
        </Subsection>
        <Subsection id="7.3" title="After an Emergency">
          After ensuring your immediate safety, you can report what happened to Whim at{" "}
          <a href="mailto:safety@joinwhim.net" className="text-purple-400 hover:text-purple-300">
            safety@joinwhim.net
          </a>
          . Provide as much detail as possible, including the event ID, the relevant user profiles, and a description
          of what occurred.
        </Subsection>
        <Subsection id="7.4" title="Campus Safety Resources">
          <p className="mb-2">We strongly encourage you to familiarize yourself with your university&apos;s campus safety resources:</p>
          <ul className="space-y-1">
            <li>Your campus public safety or police department</li>
            <li>Your university&apos;s student affairs or dean of students office</li>
            <li>On-campus crisis support lines and counseling centers</li>
            <li>Your university&apos;s Title IX coordinator</li>
          </ul>
        </Subsection>
      </Section>

      <Section number="8" title="Online Safety">
        <Subsection id="8.1" title="Protect Your Personal Information">
          Be thoughtful about what personal information you share with other users on Whim. Avoid sharing your home
          or dorm address, phone number, class schedule or daily routine, or financial information of any kind.
        </Subsection>
        <Subsection id="8.2" title="Scams">
          Be alert to potential scams, including events asking for payment or personal financial information, users
          offering prizes or money in exchange for personal information, and requests to move conversations
          off-platform quickly before you have a chance to evaluate the person.
        </Subsection>
        <Subsection id="8.3" title="Phishing">
          Whim will only communicate with you via your registered university email address or through in-app
          notifications. Be cautious of emails that claim to be from Whim but arrive from non-Whim email addresses.
          Legitimate Whim communications come from @joinwhim.net email addresses.
        </Subsection>
      </Section>

      <Section number="9" title="Contact Whim Safety Team">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
          <p className="text-white/70 text-sm mb-4">
            For non-emergency safety concerns related to Whim:
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-white/40 mr-2">Safety Team:</span>
              <a href="mailto:safety@joinwhim.net" className="text-purple-400 hover:text-purple-300">safety@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">General Support:</span>
              <a href="mailto:support@joinwhim.net" className="text-purple-400 hover:text-purple-300">support@joinwhim.net</a>
            </p>
            <p>
              <span className="text-white/40 mr-2">Website:</span>
              <a href="https://joinwhim.net" className="text-purple-400 hover:text-purple-300">joinwhim.net</a>
            </p>
          </div>
          <p className="text-white/40 text-xs mt-4">
            For immediate physical emergencies, always contact local emergency services (911) first.
          </p>
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
