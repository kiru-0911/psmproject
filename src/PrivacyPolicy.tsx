export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-obsidian mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12 uppercase tracking-widest">Prime Street Media</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Preamble</h2>
            <p>
              At PRIME STREET MEDIA, accessible through website Prime Street Mediaindia.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PRIME STREET MEDIA and how we use it.
            </p>
            <p className="mt-3">
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PRIME STREET MEDIA. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
            <p className="mt-3">
              As the user, you acknowledge and consent that Prime Street Media.com is an online platform that enables communication about themselves and related matters, more specifically for outdoor advertising and the dissemination of information about billboards and/or out-of-home services. You also acknowledge and agree that we do not, at any time, acquire or participate in the sharing of any Personal Information of our clients and other stakeholders nor do we support, advertise, or promote any of the data or information provided to us by the client, without their express consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Personal Information</h2>
            <p>
              Within the context of this Privacy Policy, "Personal Information" refers to any data that can be used to identify, relate to, characterize, reasonably be associated with, or reasonably be linked, either directly or indirectly, to a specific client. Any information that the Client or other site users give us when registering for, posting, listing, or responding to outdoor advertising, in the feedback section (if applicable), via direct messages, the blog, or while utilizing any other service feature is also referred to as "Personal Information." You further acknowledge that You are solely liable and responsible for providing Personal Information. Certain categories apply to Personal Information, such as:
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Identifiers (for instance, username, address, phone number, email, and name)',
                'Private and Sensitive Data (for instance, government identity, specific location, and communication contents when we are not the intended receiver)',
                'Information that is legally protected (such as ethnicity, nationality, gender, and marital status)',
                'Information about jobs (such as previous or present employment)',
                'Utilizing biometrics (such as facial/voice prints, health information, DNA, and electrical, optical, thermal, or olfactory data)',
                'Commercial data (for instance, goods or services acquired, bought)',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-electric-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Provide, operate, and maintain our website.',
                'Improve, personalize, and expand our website tools such as ProLocator, Valudate, ADeX, AIP.',
                'Understand and analyze how you use our website.',
                'Develop new Planning\'s, Buying and developing services, campaigns Analysis further to Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.',
                'Send you emails.',
                'Find and prevent fraud.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-electric-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              PRIME STREET MEDIA follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Security</h2>
            <p>
              In order to protect your Personal Information from unintentional loss and unauthorized access, use, alteration, and disclosure, PRIME STREET MEDIA has put in place appropriate security measures. For instance, to safeguard the Personal Information you submit to us, both during transmission and after we receive it, we encrypt and adhere to widely recognized industry standards. Nonetheless, there is no completely safe way to transmit data online or store electronic files. Therefore, even while we work hard to safeguard your Personal Information using methods that are acceptable to businesses, we are unable to guarantee its complete protection.
            </p>
            <p className="mt-3">
              You are in charge of protecting the privacy of your login credentials and device access. To reduce security threats, it's also advised that you install anti-virus and anti-malware software on your devices and maintain all software updated. You submit any information using our services at your own risk and we are unable to guarantee its security while it is transmitted over the Internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Legally Compelled Disclosure</h2>
            <p>
              PRIME STREET MEDIA may disclose Personal Information if required to do so by law or in the good faith belief that such preservations or disclosure is reasonably necessary to: (a) comply with legal process or other governmental inquiry; (b) enforce any agreements, such as the website terms of use agreement; (c) take action regarding suspected illegal activities; (d) protect PRIME STREET MEDIA rights, reputation, and property, or that of PRIME STREET MEDIA affiliates, or the public. Court of law may have the authority, in certain circumstances, to permit your Personal Information to be shared or transferred to third parties without your permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Third Party Privacy Policies</h2>
            <p>
              PRIME STREET MEDIA Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Data Protection Rights</h2>
            <p>
              The rights of Clients and users of this website are governed by the respective laws of Indian Jurisdiction — The Information Technology Act 2000 as amended by the Information Technology (Amendment) Act 2008 (IT Act and IT Amendment Act) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011 to the extent applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-obsidian mb-3">Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We expect parents and guardians to observe, participate in, and/or monitor and guide their online activity. PRIME STREET MEDIA does not knowingly collect any Personal Information, specifically so identifiable, from children under the age of 13. The parent and guardian acknowledge and agree that any Personal Information collected on our website, is deemed to have been collected without any knowledge of the age of the person using the site.
            </p>
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
