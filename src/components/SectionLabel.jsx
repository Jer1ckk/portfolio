export default function SectionLabel({ children }) {
  return (
    <p
      className="eyebrow flex items-center gap-3 text-[#b6a0f4] text-[16px] font-semibold uppercase
      tracking-[1.7px] leading-[1.6] max-mobile:text-[10px] max-mobile:tracking-[1.2px]"
    >
      <span
        className="h-[2px] w-7 shrink-0 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#a78bfa33]"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
