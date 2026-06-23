export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => { window.history.back(); }}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-electric-500 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-gray-200">|</span>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
            className="flex items-center gap-2"
          >
            <img src="/image.png" alt="Prime Street Media" className="h-10 w-10 object-contain" />
            <span className="text-base font-bold tracking-tight">
              <span className="text-obsidian">PRIME</span>{' '}
              <span className="text-electric-500">STREET</span>{' '}
              <span className="text-obsidian">MEDIA</span>
            </span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-obsidian mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-400 mb-12 uppercase tracking-widest">Prime Street Media</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <p>
              Welcome to Prime Street Media.com. These terms and conditions outline the rules and regulations for the use of PRIME STREET MEDIA Website, located at https://Prime Street Media.com/
            </p>
            <p className="mt-3">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Prime Street Media.com if you do not agree to all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Terminology</h2>
            <p>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refer to you, the person log on this website, and your principals, if any. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company, i.e., PRIME STREET MEDIA. "Party". The words "Party" or "Parties" refer collectively to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Terms of Use</h2>
            <ol className="space-y-4 list-none pl-0 counter-reset-none">
              {[
                'The user expressly agrees and accepts that the entire intellectual property associated with this website, i.e., Prime Street Media.com, are owned by PRIME STREET MEDIA and that the website is a property of our Company. No content of this website, either in part or full shall be copied, replicated, reproduced, reorganized, or redistributed by any one, in any type of media whatsoever, without the express consent of our Company. You may access this from Prime Street Media.com for your own personal use subjected to restrictions set in these terms and conditions.',
                'By using the Site, you agree to follow and be bound by all terms and conditions concerning your use of the Site. Certain areas of the Site may have different terms of use, posted at appropriate section. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.',
                'The Terms of Use, which are subject to change at any moment at PRIME STREET MEDIA sole discretion, govern your use of the Site. Any modifications to the Terms of Use will be presumed accepted by continuing to use the website, and it will be the User\'s sole obligation to stay informed of any such changes.',
                'You expressly acknowledge and accept that PRIME STREET MEDIA shall not be held accountable for any unlawful access to or modification of your transmissions or data, or for any content transmitted over the Site or not.',
                'You hereby grant PRIME STREET MEDIA a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit your Comments, if any, in any and all forms, formats or media.',
                'PRIME STREET MEDIA retains the right, at any time and for any reason, to immediately terminate User\'s access to all or any portion of the Site. The clauses pertaining to warranty disclaimer, accuracy of data, software, databases, other systems, or site functioning, and indemnity will remain in effect after such termination.',
                'You understand that at any time, including when a subscription fee is necessary in order to use the services, PRIME STREET MEDIA retains the unrestricted and discretionary right to alter, rearrange, add, or remove service offerings, the choices made within those offerings, prices, and any other service PRIME STREET may provide. The subscription costs (if any) collected from the user\'s account are not refundable, unless the conditions of refund are fulfilled in terms of our Refund Policy.',
                'You may not send, submit, post, or otherwise transmit, material or messages that contain software virus, or any other files that are designed to interrupt, destroy, and negatively affect in any manner whatsoever, any electronic equipment in connection with the use of the Site, or other user\'s ability to use the Site.',
                'Any once having knowledge or coming across an event of any breach or infringement of our Company\'s intellectual property rights may please be reported by email to the following designated email ID: help@Prime Street Media.com',
                'The laws of India shall apply with respect to any dispute on the usage of this website and the terms and conditions thereof, and such disputes shall be dealt with courts of appropriate jurisdiction within the City of Bangalore, Karnataka, India.',
                'The Terms of Use contain the entire understanding and supersedes all prior understandings between the parties relating to the subject matter herein and the Terms of Use can be changed by PRIME STREET MEDIA in the manner as provided in this Terms of Use.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-electric-50 border border-electric-200 text-electric-600 text-sm font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 py-8 px-6 text-center text-sm text-gray-400">
        © 2026 PRIME STREET MEDIA. All rights reserved.
      </footer>
    </div>
  );
}
