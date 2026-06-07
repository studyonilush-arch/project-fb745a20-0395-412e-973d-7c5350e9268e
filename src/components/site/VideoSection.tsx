import { useState } from "react";
import { Play } from "lucide-react";
import posterAsset from "@/assets/video-poster.png.asset.json";

const VIDEO_ID = "7NgyGN8g89g";
const POSTER_URL = posterAsset.url;

const VideoSection = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="bg-gradient-calm py-16 md:py-24">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-3">וידאו</p>
          <h2 className="section-title">להכיר את מל״ד מקרוב</h2>
          <p className="lead mt-4">
            הצצה למרחב הלמידה, הקשר והקהילה של מל״ד.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-card ring-1 ring-border">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {!active ? (
                <button
                  onClick={() => setActive(true)}
                  className="group absolute inset-0 block w-full h-full cursor-pointer"
                  aria-label="הפעל סרטון"
                >
                  <img
                    src={POSTER_URL}
                    alt="תמונת פתיחה מהסרטון – להכיר את מל״ד מקרוב"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-smooth group-hover:bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/95 shadow-card transition-smooth group-hover:scale-110 md:h-20 md:w-20">
                      <Play className="h-7 w-7 fill-primary text-primary md:h-8 md:w-8" />
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="להכיר את מל״ד מקרוב"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
