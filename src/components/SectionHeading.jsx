export default function SectionHeading({ number, label, title, children }) {
  return (
    <div>
      <p className="eyebrow font-mono flex items-center gap-3 text-[#b6a0f4] text-[11px] font-medium tracking-[1.9px]
        leading-[1.6] max-mobile:text-[9px] max-mobile:tracking-[1.5px]">
        <span className="text-[#9790a1]">{number} /</span> {label}
      </p>
      <h2 className="mt-[19px] text-[clamp(28px,_3vw,_36px)] tracking-[-1.15px] font-semibold leading-[1.3]
        max-nav:text-[29px] max-mobile:text-[29px] max-mobile:tracking-[-0.9px]">{title}</h2>
      {children && <p className="mt-[14px] text-[#a1a1aa] text-[14px] leading-[1.8] max-w-[510px] max-mobile:text-[13px]">{children}</p>}
    </div>
  );
}
