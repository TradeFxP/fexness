import React from "react";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "../data/socialMedia.js";
import PageHero from "../components/PageHero";
import Section from "../components/Section";

export default function Contact() {
	return (
		<div>
			<PageHero
				title="Talk to Us"
				subtitle="Our team is available to assist you with any inquiries."
				image="https://picsum.photos/seed/contact/1200/600"
			/>
			<Section title="Get in Touch">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="bg-white border rounded-2xl p-6 shadow-sm">
						<h3 className="font-bold text-lg mb-4">Send Us a Message</h3>
						<form className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-gray-500 mb-1">First Name</label>
									<input
										type="text"
										placeholder="John"
										className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
									/>
								</div>
								<div>
									<label className="block text-xs font-semibold text-gray-500 mb-1">Last Name</label>
									<input
										type="text"
										placeholder="Doe"
										className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
									/>
								</div>
							</div>
							<div>
								<label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
								<input
									type="email"
									placeholder="you@example.com"
									className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
								/>
							</div>
							<div>
								<label className="block text-xs font-semibold text-gray-500 mb-1">Subject</label>
								<select className="w-full border rounded-lg px-3 py-2 text-sm">
									<option>Account Inquiry</option>
									<option>Deposit / Withdrawal</option>
									<option>Technical Support</option>
									<option>Complaint</option>
									<option>Other</option>
								</select>
							</div>
							<div>
								<label className="block text-xs font-semibold text-gray-500 mb-1">Message</label>
								<textarea
									rows={4}
									placeholder="Describe your query..."
									className="w-full border rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold-400"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-gold-500 text-white py-3 rounded-xl font-semibold hover:bg-gold-600 transition-colors"
							>
								Send Message
							</button>
						</form>
					</div>
					<div className="space-y-4">
						{[
							{ icon: Phone, title: "DojiFx Hotline", body: "+44 7853 329918" },
							{
								icon: MapPin,
								title: "London Office",
								body: "123 Financial District, Canary Wharf, London E14 5AB, United Kingdom",
							},
							{
								icon: MapPin,
								title: "New York Office",
								body: "456 Wall Street, Financial District, New York, NY 10005, USA",
							},
							{ icon: Mail, title: "General Support", body: "support@dojifx.com" },
							{ icon: Clock, title: "Business Hours", body: "Mon–Fri: 9 AM – 6 PM GMT | Weekends: Email only" },
						].map(({ icon: Icon, title, body }, i) => (
							<div
								key={i}
								className="bg-gray-50 rounded-2xl p-5 flex gap-4"
							>
								<div className="p-3 rounded-xl bg-gold-100 text-gold-600 flex-shrink-0">
									<Icon className="w-5 h-5" />
								</div>
								<div>
									<h4 className="font-bold">{title}</h4>
									{title === "DojiFx Hotline" ? (
										<a
											href="tel:+447853329918"
											className="text-gold-600 hover:text-gold-700 text-sm mt-0.5 block"
										>
											{body}
										</a>
									) : title === "General Support" ? (
										<a
											href="mailto:support@dojifx.com"
											className="text-gold-600 hover:text-gold-700 text-sm mt-0.5 block"
										>
											{body}
										</a>
									) : (
										<p className="text-gray-500 text-sm mt-0.5">{body}</p>
									)}
								</div>
							</div>
						))}

						{/* Department Emails */}
						<div className="bg-gradient-to-br from-gold-50 to-orange-50 rounded-2xl p-5 border-2 border-gold-200">
							<h4 className="font-bold text-lg mb-3 text-gray-900">Department Contact</h4>
							<div className="grid grid-cols-1 gap-2 text-sm">
								{[
									{ dept: "Accounts", email: "accounts@dojifx.com" },
									{ dept: "Info", email: "info@dojifx.com" },
									{ dept: "Contact", email: "contact@dojifx.com" },
									{ dept: "Sales", email: "sales@dojifx.com" },
									{ dept: "Partnerships", email: "partner@dojifx.com" },
									{ dept: "Career", email: "career@dojifx.com" },
									{ dept: "HR", email: "hr@dojifx.com" },
									{ dept: "Office", email: "office@dojifx.com" },
									{ dept: "Admin", email: "admin@dojifx.com" },
									{ dept: "Technical Support", email: "tech@dojifx.com" },
									{ dept: "Marketing", email: "marketing@dojifx.com" },
									{ dept: "Investor Relations", email: "investor@dojifx.com" },
								].map(({ dept, email }, i) => (
									<div
										key={i}
										className="flex justify-between items-center py-2 border-b border-gold-200 last:border-0"
									>
										<span className="font-medium text-gray-700">{dept}:</span>
										<a
											href={`mailto:${email}`}
											className="text-gold-600 hover:text-gold-700 font-semibold"
										>
											{email}
										</a>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-wrap gap-3 pt-2">
							{SOCIAL_LINKS.map(({ Icon, href, color, label }) => (
								<div key={label} className="relative group">
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:text-white transition-all block"
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = color;
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = "";
										}}
									>
										<Icon className="w-5 h-5" />
									</a>
									<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
										{label}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}
