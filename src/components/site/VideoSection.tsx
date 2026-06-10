const VIDEO_ID = "7NgyGN8g89g";

const VideoSection = () => {
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
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
                title="להכיר את מל״ד מקרוב"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
