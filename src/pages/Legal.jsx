import React, { useState } from 'react'
import { FileText, Shield, Lock, AlertCircle, Eye } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const TABS = [
  {
    key: 'risk',
    label: 'Risk Disclosure',
    icon: AlertCircle,
    content: `RISK DISCLOSURE STATEMENT

Trading in foreign exchange ("Forex"), CFDs, commodities, indices, shares, and other financial instruments involves significant risk of loss and may not be suitable for all investors. 

1. GENERAL RISKS
The high degree of leverage available in Forex and CFD trading can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.

2. LEVERAGE RISK
Leveraged trading means that a small movement in the market price of an instrument can result in significant profits or losses relative to your initial deposit. Losses can exceed your initial deposit.

3. MARKET RISK
Financial markets are subject to rapid and unpredictable price movements driven by economic, political, and other factors. These may result in prices moving against your position.

4. TECHNOLOGY RISK
Online trading is subject to technology risks including internet connectivity issues, system failures, and cyber-attacks which may affect the execution of orders.

5. COUNTERPARTY RISK
Fexness acts as the counterparty to all client trades. All client funds are held in segregated accounts to mitigate counterparty risk.

6. PSYCHOLOGICAL RISK
Trading can be psychologically stressful. Emotional decisions often lead to poor trading outcomes. Always follow a trading plan.

You should not invest money that you cannot afford to lose. Past performance of any trading system or strategy is not necessarily indicative of future results.`,
  },
  {
    key: 'terms',
    label: 'Terms & Conditions',
    icon: FileText,
    content: `TERMS AND CONDITIONS

Last Updated: January 2024

1. ACCEPTANCE OF TERMS
By accessing and using Fexness's services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions.

2. ELIGIBILITY
You must be at least 18 years of age and legally capable of entering into a binding agreement. Services are not available to residents of restricted jurisdictions.

3. ACCOUNT REGISTRATION
You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.

4. TRADING CONDITIONS
- Minimum deposit: $10 for most account types
- All trades are executed at the best available market price
- We reserve the right to reject any order at our discretion
- Stop-out level: 20% of used margin

5. PROHIBITED ACTIVITIES
The following are strictly prohibited:
- Arbitrage trading exploiting server latency
- Use of any automated software without prior written approval
- Multiple accounts for the purpose of bonus abuse
- Any form of market manipulation

6. INTELLECTUAL PROPERTY
All content on Fexness platforms is proprietary. Reproduction without express written consent is prohibited.

7. LIMITATION OF LIABILITY
Fexness shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.

8. GOVERNING LAW
These terms are governed by the laws of Saint Lucia.`,
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
We use industry-standard encryption (TLS 1.3) and security protocols. Access to personal data is restricted to authorized personnel.

5. DATA RETENTION
We retain personal data for a minimum of 5 years after account closure as required by financial regulations.

6. YOUR RIGHTS
You have the right to access, correct, or request deletion of your personal data, subject to legal retention requirements. Contact: privacy@fexness.com

7. COOKIES
We use essential and analytics cookies. You can manage cookie preferences in your browser settings.`,
  },
  {
    key: 'aml',
    label: 'AML Policy',
    icon: Shield,
    content: `ANTI-MONEY LAUNDERING (AML) & COUNTER-TERRORISM FINANCING (CTF) POLICY

1. COMMITMENT
Fexness is committed to preventing money laundering and terrorism financing. We implement robust AML/CTF controls in compliance with international standards.

2. CUSTOMER DUE DILIGENCE (CDD)
All clients must undergo identity verification before accessing our services:
- Government-issued photo ID
- Proof of address dated within 90 days
- Source of funds declaration for deposits exceeding $10,000

3. ENHANCED DUE DILIGENCE (EDD)
EDD is applied to:
- Politically Exposed Persons (PEPs)
- High-value transactions
- Clients from high-risk jurisdictions
- Complex or unusual transaction patterns

4. SUSPICIOUS ACTIVITY MONITORING
Our compliance system monitors all transactions for suspicious patterns including:
- Rapid fund cycling (deposit and immediate withdrawal without trading)
- Structuring (breaking large transactions into smaller ones)
- Transactions with no apparent business purpose

5. REPORTING OBLIGATIONS
Fexness is obligated to report suspicious transactions to relevant financial intelligence units without disclosing such reports to clients.

6. RECORD KEEPING
Transaction records and client identification documents are retained for a minimum of 5 years.

7. EMPLOYEE TRAINING
All Fexness employees receive regular AML/CTF training and are aware of their obligations under applicable laws.`,
  },
]

export default function Legal() {
  const [tab, setTab] = useState('risk')
  const active = TABS.find(t => t.key === tab)

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
              onClick={() => setTab(key)}
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
