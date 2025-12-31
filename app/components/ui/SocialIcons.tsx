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

export default function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {copyData.socialLinks.map((social) => {
        const Icon = iconMap[social.name];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-12 h-12 text-secondary hover:text-tertiary transition" />
          </a>
        );
      })}
    </div>
  );
}
