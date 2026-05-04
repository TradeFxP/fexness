import { Linkedin, Facebook, Youtube } from "lucide-react";
import { IconTikTok, IconX, IconTelegram } from "../icons.jsx";

/**
 * Central social media configuration.
 * Update links, labels, and brand colors here — changes apply everywhere.
 */
export const SOCIAL_LINKS = [
	{
		Icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/dojifx",
		color: "#0077B5",
	},
	{
		Icon: IconX,
		label: "Twitter / X",
		href: "https://x.com/DojifxC72364",
		color: "#000000",
	},
	{
		Icon: Facebook,
		label: "Facebook",
		href: "https://www.facebook.com/profile.php?id=61571000288404",
		color: "#1877F2",
	},
	{
		Icon: Youtube,
		label: "YouTube",
		href: "https://www.youtube.com/@DojiFX-k2q5j",
		color: "#FF0000",
	},
	{
		Icon: IconTikTok,
		label: "TikTok",
		href: "https://www.tiktok.com/@dojifxforex",
		color: "#010101",
	},
	{
		Icon: IconTelegram,
		label: "Telegram",
		href: "https://t.me/DojifxForex",
		color: "#2CA5E0",
	},
];
