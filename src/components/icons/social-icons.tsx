type SocialIconProps = {
  className?: string;
};

export function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.1 8.8h2V5.4c-.35-.05-1.55-.15-2.95-.15-2.9 0-4.9 1.82-4.9 5.16v2.84H5v3.8h3.25V23h3.95v-5.95h3.1l.6-3.8h-3.7v-2.46c0-1.1.3-1.99 1.9-1.99Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        width="15"
        height="15"
        x="4.5"
        y="4.5"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3.4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="16.6" cy="7.4" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.2 9.5h3.4V20H6.2V9.5Zm1.7-5.2a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9ZM11.5 9.5h3.25v1.43h.05c.45-.86 1.56-1.76 3.22-1.76 3.45 0 4.08 2.27 4.08 5.22V20h-3.38v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64V20H11.5V9.5Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M15.55 4.5c.32 2.14 1.55 3.7 3.7 4.1v3.18a7.18 7.18 0 0 1-3.62-1.12v4.98c0 3.16-2.18 5.36-5.35 5.36-2.92 0-5.03-1.92-5.03-4.63 0-3.08 2.52-5.03 5.55-4.72v3.18c-1.25-.35-2.36.28-2.36 1.52 0 .98.82 1.65 1.8 1.65 1.25 0 2-.74 2-2.33V4.5h3.31Z" />
    </svg>
  );
}

export const socialLinks = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "TikTok", icon: TikTokIcon },
] as const;
