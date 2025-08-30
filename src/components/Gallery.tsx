import { ExternalLink } from "lucide-react";

function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row gap-x-6">
      <div className="container px-5  mx-auto flex flex-wrap">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Desktop View
        </h2>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/screenshots/desktop/LyricsSearchResultF_D.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/screenshots/desktop/MainUI2_D.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/screenshots/desktop/ArtistAlbumPage_D.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/screenshots/desktop/LyricsSearchResult2_D.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/screenshots/desktop/MainUI_D.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/screenshots/desktop/SearchResults_D.png"
              />
            </div>
          </div>
        </div>
        <a
          href="https://github.com/YBTopaz8/Dimmer-MAUI/tree/master/ScreenShots"
          target="_blank"
          className="scroll-m-20 text-md text-center py-3 font-semibold tracking-tight"
        >
          <span>See all Screenshots</span>{" "}
          <ExternalLink className="inline-block w-4 h-4 mb-1 ml-1" />
        </a>
      </div>
    </section>
  );
}

export default Gallery;
