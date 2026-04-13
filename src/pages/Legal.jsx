import React, { useState, useEffect } from 'react'
import { FileText, Shield, Lock, AlertCircle, Eye } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const TABS = [
  {
    key: 'risk',
    label: 'Risk Disclosure',
    icon: AlertCircle,
    content: `RISK STATEMENT

An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned in DojiFx should seek their own financial or professional advice. Trading of securities, Forex, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. 

Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex Trading are not allowed in some countries, before investing your money, make sure whether your country is allowing this or not.

You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any currency or spot metals trade. Nothing in this site should be read or construed as constituting advice on the part of DojiFx Limited or any of its affiliates, directors, officers or employees.

RESTRICTED REGIONS
DojiFx Limited does not provide services for citizens/residents of USA, Venezuela, Ukraine, Iran, Cuba, Myanmar, North Korea, Sudan. The services of DojiFx Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.

Information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulations.`,
  },
  {
    key: 'company',
    label: 'Company Information',
    icon: FileText,
    content: `COMPANY REGISTRATION

DojiFx Limited is Registered in ANGUILLA Registry of (ARCA). 

Address: Anguilla, No. 5 Alloyd Building, Crocus Hill, AI-2640

The objects of the Company are all subject matters not forbidden by International Business Companies (Amendment and Consolidation) Act, of the Laws of Anguilla, in particular but not exclusively all commercial, financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as to provide brokerage, training and managed account services in currencies, commodities, indexes, CFDs and leveraged financial instruments.

IMPORTANT TRADING POLICY UPDATE
At DojiFx, we allow High-Frequency Trading (HFT), arbitrage, or scalping with a duration of less than 180 seconds. However, we do permit scalping trades that last longer than 180 seconds and so, provided the client holds the position. Low spreads and zero commission depends on the product and account type. We provide an execution-only service. We do not provide investment advice or management services.

IMPORTANT KYC UPDATE
Users are allowed only one account per KYC. Creating multiple accounts under the same KYC is strictly prohibited. Please comply to avoid any issues!!

In compliance with regulatory guidelines, we are not offering our services to clients or citizens residing in the United States, Valenzuela, Ukraine, Iran, Cuba, Myanmar, North Korea, Sudan.

FRAUD WARNING
It has come our attention that fraudulent websites are impersonating our brand using fake or lookalike domains. Please note that we do not promote any get rich quick schemes. Our official website is DojiFx.com. Stay vigilant & verify website URLs before engaging with any platform.`,
  },
  {
    key: 'terms',
    label: 'Terms & Conditions',
    icon: FileText,
    content: `TERMS AND CONDITIONS

Last Updated: January 2024

1. ACCEPTANCE OF TERMS
By accessing and using DojiFx's services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions.

2. ELIGIBILITY
You must be at least 18 years of age and legally capable of entering into a binding agreement. Services are not available to residents of restricted jurisdictions including USA, Venezuela, Ukraine, Iran, Cuba, Myanmar, North Korea, and Sudan.

3. ACCOUNT REGISTRATION
You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.

4. KYC POLICY
Users are allowed only one account per KYC. Creating multiple accounts under the same KYC is strictly prohibited.

5. TRADING CONDITIONS
- All trades are executed at the best available market price
- We reserve the right to reject any order at our discretion
- Low spreads and zero commission depend on the product and account type
- We provide an execution-only service and do not provide investment advice

6. TRADING POLICIES
- High-Frequency Trading (HFT), arbitrage, or scalping with duration less than 180 seconds is allowed
- Scalping trades lasting longer than 180 seconds are permitted provided the client holds the position

7. INTELLECTUAL PROPERTY
All content on DojiFx platforms is proprietary. Reproduction without express written consent is prohibited.

8. LIMITATION OF LIABILITY
DojiFx shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.

9. GOVERNING LAW
These terms are governed by the laws of Anguilla.`,
  },
  {
    key: 'privacy',
    label: 'Privacy Policy',
    icon: Lock,
    content: `PRIVACY POLICY

Last Updated: January 2024

1. INFORMATION WE COLLECT
- Personal identification (name, email, phone, address, ID documents)
- Financial information (bank details, transaction history)
- Technical data (IP address, browser type, device information)
- Usage data (pages visited, features used, trading activity)

2. HOW WE USE YOUR INFORMATION
- To create and manage your trading account
- To process deposits and withdrawals
- To comply with legal and regulatory obligations
- To detect and prevent fraud
- To send service-related communications
- To improve our products and services

3. DATA SHARING
We do not sell your personal data. We may share data with:
- Regulatory bodies as required by law
- Payment processors for transaction processing
- Identity verification services for KYC compliance
- Technology partners under strict confidentiality agreements

4. DATA SECURITY
We use industry-standard encryption and security protocols. Access to personal data is restricted to authorized personnel.

5. DATA RETENTION
We retain personal data for a minimum of 5-7 years after account closure as required by financial regulations.

6. YOUR RIGHTS
You have the right to access, correct, or request deletion of your personal data, subject to legal retention requirements.

7. COOKIES
We use essential and analytics cookies. You can manage cookie preferences in your browser settings.`,
  },
  {
    key: 'aml',
    label: 'AML Policy',
    icon: Shield,
    content: `ANTI-MONEY LAUNDERING (AML) POLICY

This Anti-Money Laundering (AML) Policy outlines the procedures and internal controls implemented by DojiFx to prevent money laundering, terrorist financing, fraud, and other financial crimes in connection with its forex trading services.

COMPLIANCE COMMITMENT
DojiFx is committed to full compliance with applicable AML and Counter-Terrorist Financing (CTF) laws and regulations in the jurisdictions where it operates. DojiFx complies with all applicable AML/CTF legislation and regulatory requirements, including those imposed by its licensing authority depending on jurisdiction.

DEFINITIONS
Money Laundering – The process of concealing the origin of illegally obtained funds to make them appear legitimate.
Terrorist Financing – The provision or collection of funds with the intention that they be used to support terrorist activities.
Politically Exposed Person (PEP) – An individual who holds or has held a prominent public function.

RISK-BASED APPROACH
DojiFx applies a risk-based approach to AML compliance by:
- Assessing customer risk profiles
- Monitoring geographic risk
- Evaluating transaction patterns
- Applying enhanced due diligence where necessary
Clients are categorized as Low, Medium, or High risk.

CUSTOMER DUE DILIGENCE (CDD)
Before establishing a business relationship, DojiFx shall:

1. Individual Clients
- Obtain full name, date of birth, nationality
- Verify identity using government-issued ID
- Obtain proof of residential address
- Conduct sanctions and PEP screening
- Collect source of funds information where required

2. Corporate Clients
- Verify company registration documents
- Identify beneficial owners (25%+ ownership or control)
- Verify directors and authorized signatories
- Understand nature of business activities

ENHANCED DUE DILIGENCE (EDD)
EDD procedures are applied when:
- The client is a PEP
- The client is from a high-risk jurisdiction
- Transactions are unusually large or complex
- Suspicious behavior is detected

EDD measures may include:
- Additional source of wealth verification
- Senior management approval
- Increased transaction monitoring

ONGOING MONITORING
DojiFx continuously monitors:
- Trading activity
- Deposit and withdrawal patterns
- Account behavior inconsistencies
- Multiple account connections
Automated systems and manual reviews are used to detect suspicious activity.

SUSPICIOUS ACTIVITY REPORTING (SAR)
If suspicious activity is identified:
- The matter is escalated to the DojiFx employed AML Compliance Officer
- An internal investigation is conducted
- Where required, a Suspicious Activity Report (SAR) is filed with the relevant authority
Employees are strictly prohibited from "tipping off" clients about investigations.

RECORD KEEPING
DojiFx retains the following records for a minimum of 5–7 years (or as required by regulation):
- Client identification documents
- Transaction records
- Internal reports and SAR documentation
- Communication records

EMPLOYEE TRAINING
All employees of DojiFx will receive:
- AML/CTF training upon hiring
- Annual refresher training
- Guidance on identifying suspicious activity
Training records are maintained.

AML COMPLIANCE OFFICER
DojiFx appoints a qualified AML Compliance Officer responsible for:
- Implementing AML procedures
- Monitoring compliance
- Reporting to regulatory authorities
- Updating AML policies

SANCTIONS COMPLIANCE
DojiFx screens clients against:
- International sanctions lists
- Politically exposed persons (PEP) databases
- Adverse media sources
Accounts linked to sanctioned individuals or entities will be rejected or frozen in accordance with legal requirements.

POLICY REVIEW
This AML Policy is reviewed by DojiFx at least annually or whenever there are significant regulatory changes.`,
  },
]

export default function Legal() {
  const [tab, setTab] = useState('risk')
  const location = useLocation()
  const active = TABS.find(t => t.key === tab)

  useEffect(() => {
    // Check for hash in URL and set the corresponding tab
    if (location.hash) {
      const hash = location.hash.substring(1) // Remove the #
      const foundTab = TABS.find(t => t.key === hash)
      if (foundTab) {
        setTab(hash)
        // Scroll to top when tab changes
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div>
      <PageHero
        title="Legal Information"
        subtitle="Transparency in all our policies. Please read before trading."
        image="https://picsum.photos/seed/legal/1200/600"
      />

      <Section>
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setTab(key)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${tab === key ? 'bg-gold-500 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border shadow-sm">
          <div className="flex items-center gap-3 p-6 border-b">
            <active.icon className="w-5 h-5 text-gold-500" />
            <h2 className="text-xl font-bold">{active.label}</h2>
            <span className="ml-auto flex items-center gap-1 text-xs text-gray-400"><Eye className="w-4 h-4" /> Read carefully</span>
          </div>
          <div className="p-6">
            <pre className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap font-sans">{active.content}</pre>
          </div>
        </div>
      </Section>
    </div>
  )
}
