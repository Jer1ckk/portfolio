// Brand marks are kept local because Lucide's current release omits brand icons.
export function Github({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.6-.5-2.2 3.1-.3 6.5-1.5 6.5-6.9a5.4 5.4 0 0 0-1.5-3.7c.2-.9.2-2-.2-3.1 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C5.9 1.6 4.7 2 4.7 2c-.4 1.1-.4 2.2-.2 3.1A5.4 5.4 0 0 0 3 8.8c0 5.4 3.4 6.6 6.5 6.9-.5.5-.5 1.2-.5 2.2v3.4" />
    </svg>
  );
}

export function Linkedin({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      <circle cx="7.5" cy="7" r=".5" fill="currentColor" />
    </svg>
  );
}
