import { Bike, BriefcaseBusiness, Leaf, Search } from "lucide-react";

const artworkBackgrounds = {
  market:
    "[background:radial-gradient(ellipse_at_50%_30%,_#294738,_#14271f_70%)]",
  bike: "[background:radial-gradient(ellipse_at_55%_50%,_#253e50,_#15232f_80%)]",
  jobs: "[background:radial-gradient(ellipse_at_55%_40%,_#423555,_#251e31_80%)]",
};

// Decorative editorial artwork, intentionally not represented as a real screenshot.
export default function ProjectArtwork({ type, title }) {
  return (
    <div
      className={`w-full aspect-[1.6] object-cover relative overflow-hidden block max-mobile:aspect-[1.75] ${artworkBackgrounds[type] ?? ""}`}
      role="img"
      aria-label={`Illustrative artwork for ${title}; not an application screenshot`}
    >
      <div
        className="absolute inset-0
        [background-image:linear-gradient(#ffffff06_1px,_transparent_1px),_linear-gradient(90deg,_#ffffff06_1px,_transparent_1px)]
        [background-size:23px_23px] [mask-image:radial-gradient(ellipse,_black,_transparent_95%)]"
        aria-hidden="true"
      />
      {type === "market" && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute top-[39%] left-[50%] [transform:translate(-50%,_-50%)] rounded-full border
            border-[#bbd89b18] w-[155px] h-[155px]"
          />
          <div
            className="absolute top-[39%] left-[50%] [transform:translate(-50%,_-50%)] rounded-full border
            border-[#bbd89b18] w-[235px] h-[235px]"
          />
          <div
            className="absolute left-[50%] top-[39%] [transform:translate(-50%,_-50%)] grid place-items-center w-[77px]
            h-[77px] border border-[#97bd8d3b] rounded-[22px] bg-[#7d9f6721] text-[#c4dab1]
            shadow-[0_0_45px_#a9cb7b0d]"
          >
            <Leaf size={48} strokeWidth={1.2} />
          </div>
          <span
            className="absolute top-[64%] left-0 right-0 text-center text-[24px] font-semibold tracking-[-1px]
            text-[#e1e8d7] [&_>_span]:font-light [&_>_span]:text-[#b0c79b] [&_i]:block [&_i]:font-mono
            [&_i]:not-italic [&_i]:text-[7px] [&_i]:font-normal [&_i]:tracking-[2px] [&_i]:mt-[3px]
            [&_i]:text-[#b6c4aa]"
          >
            kase<span>app</span>
            <i>market module</i>
          </span>
          <span
            className="absolute w-[6px] h-[6px] rounded-full bg-[#87a67a] border-3 border-[#294430] box-content left-[20%]
            top-[30%]"
          />
          <span
            className="absolute w-[6px] h-[6px] rounded-full bg-[#87a67a] border-3 border-[#294430] box-content right-[18%]
            top-[55%]"
          />
          <span
            className="absolute w-[6px] h-[6px] rounded-full bg-[#87a67a] border-3 border-[#294430] box-content right-[30%]
            top-[12%]"
          />
        </div>
      )}
      {type === "bike" && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute w-[165px] h-[165px] border border-[#a3c8df1a] rounded-full left-[53%] top-[48%]
            [transform:translate(-50%,_-50%)] shadow-[0_0_0_29px_#c7e6f405,_0_0_0_57px_#c7e6f403]"
          />
          <span
            className="absolute left-[25px] top-[19px] text-[29px] font-bold italic tracking-[-1px] text-[#cce4ef]
            [&_span]:text-[#b6d5ed] [&_span]:font-normal [&_span]:ml-[3px] [&_span]:text-[20px]"
          >
            velo<span>↗</span>
          </span>
          <Bike
            className="absolute left-[50%] top-[51%] [transform:translate(-50%,_-50%)_rotate(-8deg)] text-[#c1dceb]
            [filter:drop-shadow(0_8px_10px_#0004)]"
            size={145}
            strokeWidth={0.85}
          />
          <span className="absolute bottom-[23px] right-[19px] text-[7px] text-[#afc6d4] font-mono tracking-[0.4px]">
            A different way to move.
          </span>
        </div>
      )}
      {type === "jobs" && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="px-3 py-3 absolute flex items-center w-[162px] h-14 rounded-lg bg-[#8e7da3]
            shadow-[0_10px_25px_#0003] gap-[10px] left-[50%] top-[34%]
            [transform:translate(-45%,_-50%)_rotate(9deg)]"
          >
            <span className="w-6 h-6 rounded-[6px] bg-[#b9a8c7]" />
            <span
              className="block w-[73px] h-[5px] bg-[#71627f] rounded-[3px] [&.short]:w-[46px] [&.short]:h-[3px]
              [&.short]:mt-[7px] [&.short]:bg-[#aa9bb5]"
            />
            <span
              className="short block w-[73px] h-[5px] bg-[#71627f] rounded-[3px] [&.short]:w-[46px] [&.short]:h-[3px]
              [&.short]:mt-[7px] [&.short]:bg-[#aa9bb5]"
            />
          </div>
          <div
            className="px-3 py-3 absolute flex items-center w-[177px] h-14 rounded-lg bg-[#e1d6f1]
            shadow-[0_10px_25px_#0003] gap-[10px] left-[50%] top-[49%]
            [transform:translate(-50%,_-50%)_rotate(-6deg)]"
          >
            <span className="text-[#67527f] bg-[#c8b7dc] w-[30px] h-[30px] rounded-[6px] grid place-items-center">
              <BriefcaseBusiness size={20} strokeWidth={1.5} />
            </span>
            <div>
              <span
                className="block w-[73px] h-[5px] bg-[#71627f] rounded-[3px] [&.short]:w-[46px] [&.short]:h-[3px]
                [&.short]:mt-[7px] [&.short]:bg-[#aa9bb5]"
              />
              <span
                className="short block w-[73px] h-[5px] bg-[#71627f] rounded-[3px] [&.short]:w-[46px] [&.short]:h-[3px]
                [&.short]:mt-[7px] [&.short]:bg-[#aa9bb5]"
              />
            </div>
            <span className="ml-auto text-[#67527f]">↗</span>
          </div>
          <div
            className="px-3 py-2 absolute top-[65%] left-[50%] [transform:translate(-50%,_-50%)] flex items-center gap-2
            bg-[#2d253a] text-[#c8badc] border border-[#76648e] rounded-[5px] text-[7px] w-[190px]
            shadow-[0_5px_12px_#0003]"
          >
            <Search size={13} />
            <span>Find your next opportunity</span>
          </div>
          <span
            className="absolute bottom-[18px] right-[18px] text-[#ece2f7] text-[15px] font-semibold tracking-[-0.3px]
            [&_>_span]:font-light [&_.finder-dot]:text-[#c0a2ef]"
          >
            mhob<span>finder</span>
            <span className="finder-dot">.</span>
          </span>
        </div>
      )}
      <span className="font-mono absolute bottom-[10px] left-[13px] text-[#d7d7e0b3] tracking-[1px] text-[6px]">
        ILLUSTRATIVE PREVIEW
      </span>
    </div>
  );
}
