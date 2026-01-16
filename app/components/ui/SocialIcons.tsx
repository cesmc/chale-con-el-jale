"use client";

import { FaFacebook, FaYoutube, FaSpotify, FaTiktok, FaInstagram } from "react-icons/fa";
import copyData from "../../data/copy.json";

const iconMap: Record<string, any> = {
  Facebook: FaFacebook,
  YouTube: FaYoutube,
  Spotify: FaSpotify,
  TikTok: FaTiktok,
  Instagram: FaInstagram
};

const colorClasses: Record<string, string> = {
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
};
interface SocialIconsProps {
  color?: string
}

export default function SocialIcons({ color = 'secondary' }: SocialIconsProps) {
  return (
    <div className="flex justify-center items-center gap-8 mt-4 mb-4">
      {copyData.socialLinks.map((social) => {
        const Icon = iconMap[social.name];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className={`w-8 h-8 md:w-12 md:h-12 ${colorClasses[color]} hover:text-tertiary transition`} />
          </a>
        );
      })}
    </div>
  );
}
