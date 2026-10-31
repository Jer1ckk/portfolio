import SectionLabel from "./SectionLabel";

export default function SectionHeading({ label, title, children }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <h2
        className="mt-[19px] text-[clamp(28px,_3vw,_36px)] tracking-[-1.15px] font-semibold leading-[1.3]
        max-nav:text-[29px] max-mobile:text-[29px] max-mobile:tracking-[-0.9px]"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-[14px] text-[#a1a1aa] text-[14px] leading-[1.8] max-w-[510px] max-mobile:text-[13px]">
          {children}
        </p>
      )}
    </div>
  );
}
