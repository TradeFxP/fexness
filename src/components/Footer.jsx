import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart2, Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, MapPin, Phone, Send } from "lucide-react";
import { IconTikTok } from "../icons.jsx";

const COLS = [
	{
		title: "Trade",
		links: [
			{ label: "Markets", to: "/markets" },
			{ label: "Platforms", to: "/platforms" },
			{ label: "Account Types", to: "/#accounts" },
			{ label: "Pricing & Spreads", to: "/pricing" },
			{ label: "Leverage", to: "/leverage" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About Us", to: "/about" },
			{ label: "Why DojiFx", to: "/why-us" },
			{ label: "Regulation", to: "/regulation" },
			{ label: "IB Program", to: "/ib" },
			{ label: "Promotions", to: "/promotions" },
		],
	},
	{
		title: "Funding",
		links: [
			{ label: "Deposits & Withdrawals", to: "/deposits" },
			{ label: "Copy Trading", to: "/copy-trading" },
			{ label: "Client Portal", to: "/portal" },
		],
	},
	{
		title: "Learn",
		links: [
			{ label: "Education Centre", to: "/education" },
			{ label: "Research & Analysis", to: "/research" },
			{ label: "Trading Tools", to: "/tools" },
			{ label: "Blog", to: "/blog" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Help Centre", to: "/support" },
			{ label: "FAQ", to: "/faq" },
			{ label: "Contact Us", to: "/contact" },
			{ label: "Careers", to: "/careers" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Risk Disclosure", to: "/legal#risk" },
			{ label: "Terms & Conditions", to: "/legal#terms" },
			{ label: "Privacy Policy", to: "/legal#privacy" },
			{ label: "AML Policy", to: "/legal#aml" },
		],
	},
];

export default function Footer() {
	const navigate = useNavigate();

	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-4 py-14">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-1 lg:col-span-1">
						<div className="mb-4">
							<img
								src="/images/footer-logo.png"
								alt="DojiFx Logo"
								className="w-[220px] h-auto"
							/>
						</div>
						<p className="text-gray-400 text-xs leading-relaxed mb-4">
							A globally recognized forex & CFD broker offering competitive spreads, fast execution, and a secure
							trading environment.
						</p>
						<div className="flex gap-3 mb-4">
							{[
								{ icon: Linkedin, href: "https://www.linkedin.com/company/dojifx" },
								{ icon: Twitter, href: "https://x.com/DojifxC72364" },
								{ icon: Facebook, href: "https://www.facebook.com/profile.php?id=61571000288404" },
								{ icon: Youtube, href: "https://www.youtube.com/@DojiFX-k2q5j" },
								// { icon: Send, href: "https://t.me/DojiFxtech" },
							].map(({ icon: Icon, href }, i) => (
								<a
									key={i}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-gray-800 hover:bg-gold-500 text-gray-400 hover:text-white transition-all"
								>
									<Icon className="w-4 h-4" />
								</a>
							))}
							<a
								href="https://www.tiktok.com/@dojifxforex"
								target="_blank"
								rel="noopener noreferrer" 
								className="p-2 rounded-lg bg-gray-800 hover:bg-gold-500 text-gray-400 hover:text-white transition-all"
							>
								<IconTikTok className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Nav Columns */}
					{COLS.map((col) => (
						<div key={col.title}>
							<h3 className="text-white font-bold text-sm mb-4">{col.title}</h3>
							<ul className="space-y-2">
								{col.links.map((link) => (
									<li key={link.label}>
										{link.to.includes("#") ? (
											<a
												href={link.to}
												className="text-gray-400 hover:text-gold-400 text-xs transition-colors"
												onClick={(e) => {
													e.preventDefault();
													const [path, hash] = link.to.split("#");

													if (window.location.pathname === path || path === "") {
														// Already on the same page, just update hash
														navigate(link.to);
														// For homepage accounts section
														if (hash && path === "/") {
															setTimeout(() => {
																const element = document.getElementById(hash);
																if (element) {
																	element.scrollIntoView({ behavior: "smooth", block: "start" });
																}
															}, 100);
														}
													} else {
														// Navigate to different page
														navigate(link.to);
													}
												}}
											>
												{link.label}
											</a>
										) : (
											<Link
												to={link.to}
												className="text-gray-400 hover:text-gold-400 text-xs transition-colors"
											>
												{link.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Offices */}
				<div className="grid md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-800">
					{[
						{ city: "London Office", address: "123 Financial District, Canary Wharf, London E14 5AB, United Kingdom" },
						{ city: "New York Office", address: "456 Wall Street, Financial District, New York, NY 10005, USA" },
					].map((office, i) => (
						<div
							key={i}
							className="flex gap-3"
						>
							<MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
							<div>
								<div className="text-white text-xs font-bold mb-0.5">{office.city}</div>
								<div className="text-gray-400 text-xs">{office.address}</div>
							</div>
						</div>
					))}
					<div className="flex gap-3">
						<Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
						<div>
							<div className="text-white text-xs font-bold mb-0.5">DojiFx Hotline</div>
							<a
								href="tel:+447878755178"
								className="text-gray-400 hover:text-gold-400 text-xs transition-colors"
							>
								+44 7878 755178
							</a>
						</div>
					</div>
					<div className="flex gap-3">
						<Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
						<div>
							<div className="text-white text-xs font-bold mb-0.5">Email Support</div>
							<a
								href="mailto:support@dojifx.com"
								className="text-gray-400 hover:text-gold-400 text-xs transition-colors"
							>
								support@dojifx.com
							</a>
						</div>
					</div>
				</div>

				{/* Risk Warning */}
				<div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-600/30 rounded-xl p-5 mb-8">
					<h4 className="text-orange-400 font-bold text-sm mb-2 flex items-center gap-2">
						<span className="text-lg">⚠️</span> Risk Warning
					</h4>
					<p className="text-gray-300 text-xs leading-relaxed">
						Trading Forex and CFDs involves significant risk of loss and may not be suitable for all investors. Leverage
						can work against you. You may lose more than your initial investment. Please ensure you fully understand the
						risks involved and seek independent financial advice if necessary. Past performance is not indicative of
						future results.
					</p>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
						<div className="text-xs text-gray-400">
							<p className="flex flex-wrap items-center justify-center md:justify-start gap-2">
								<span>
									© {new Date().getFullYear()} <strong className="text-white">DojiFx Limited</strong>. All rights
									reserved.
								</span>
								<span className="hidden md:inline text-gray-600">|</span>
								<span>
									Proposed & Licensed in <strong className="text-white">Anguilla</strong>
								</span>
							</p>
						</div>
						<div className="flex gap-4 text-xs">
							<Link
								to="/legal"
								className="text-gray-400 hover:text-gold-400 transition-colors"
							>
								Privacy
							</Link>
							<Link
								to="/legal"
								className="text-gray-400 hover:text-gold-400 transition-colors"
							>
								Terms
							</Link>
							<Link
								to="/legal"
								className="text-gray-400 hover:text-gold-400 transition-colors"
							>
								Risk
							</Link>
							<Link
								to="/legal"
								className="text-gray-400 hover:text-gold-400 transition-colors"
							>
								AML
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
