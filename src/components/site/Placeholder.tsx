import { ImageIcon } from "lucide-react";

interface PlaceholderProps {
  label?: string;
  className?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
}

const ratios: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export const ImagePlaceholder = ({ label = "תמונה תתווסף בהמשך", className = "", ratio = "video" }: PlaceholderProps) => (
  <div
    className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-secondary/40 bg-gradient-warm text-secondary ${ratios[ratio]} ${className}`}
  >
    <div className="flex flex-col items-center gap-2 px-6 text-center">
      <ImageIcon className="h-8 w-8 opacity-70" />
      <p className="text-sm font-medium opacity-80">{label}</p>
    </div>
  </div>
);

export const ContentPlaceholder = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-dashed border-highlight/50 bg-highlight/10 p-5 text-sm text-foreground/75">
    <span className="placeholder-tag mb-2">תוכן לעריכה</span>
    <div>{children}</div>
  </div>
);
