import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery/1.webp";
import gallery2 from "../assets/gallery/2.webp";
import gallery3 from "../assets/gallery/3.webp";
import gallery4 from "../assets/gallery/4.webp";
import gallery5 from "../assets/gallery/5.webp";
import gallery6 from "../assets/gallery/6.webp";
import gallery7 from "../assets/gallery/7.webp";
import gallery8 from "../assets/gallery/35.webp";
import gallery9 from "../assets/gallery/9.webp";
import gallery10 from "../assets/gallery/10.webp";
import gallery11 from "../assets/gallery/11.webp";
import gallery12 from "../assets/gallery/12.webp";
import gallery13 from "../assets/gallery/13.webp";
import gallery14 from "../assets/gallery/14.webp";
import gallery15 from "../assets/gallery/15.webp";
import gallery16 from "../assets/gallery/16.webp";
import gallery17 from "../assets/gallery/17.webp";
import gallery18 from "../assets/gallery/18.webp";
import gallery19 from "../assets/gallery/19.webp";
import gallery20 from "../assets/gallery/20.webp";
import gallery21 from "../assets/gallery/21.webp";
import gallery22 from "../assets/gallery/22.webp";
import gallery23 from "../assets/gallery/23.webp";
import gallery24 from "../assets/gallery/24.webp";
import gallery25 from "../assets/gallery/25.webp";
import gallery26 from "../assets/gallery/26.webp";
import gallery27 from "../assets/gallery/27.webp";
import gallery28 from "../assets/gallery/28.webp";
import gallery29 from "../assets/gallery/29.webp";
import gallery30 from "../assets/gallery/30.webp";
import gallery31 from "../assets/gallery/31.webp";
import gallery32 from "../assets/gallery/32.webp";
import gallery33 from "../assets/gallery/33.webp";
import gallery34 from "../assets/gallery/34.webp";

const photos = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
];

const IMAGES_PER_PAGE = 6;

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalPages = Math.ceil(photos.length / IMAGES_PER_PAGE);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const visiblePhotos = photos.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-[#30221b] text-white">
      <section className="container-wide py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Ashram
          </Link>

          <div className="mt-10">
            <p className="section-kicker text-[#e3c681]">Glimpses of peace</p>

            <h1 className="font-dev mt-3 text-4xl md:text-5xl">
              आश्रम की झलकियाँ
            </h1>

            <p className="mt-4 text-sm text-white/50">
              प्रकृति · परंपरा · प्रार्थना
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {visiblePhotos.map((src, index) => (
            <button
              key={src}
              onClick={() => setSelectedImage(src)}
              className="image-wash group h-48 overflow-hidden rounded-lg text-left md:h-56"
            >
              <img
                src={src}
                alt={`Ashram experience ${startIndex + index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-sm text-white/40">
            {startIndex + 1}–
            {Math.min(startIndex + IMAGES_PER_PAGE, photos.length)} of{" "}
            {photos.length}
          </p>

          <div className="flex items-center gap-2">
            {/* Previous */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#30221b] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition ${
                    currentPage === page
                      ? "bg-[#d8b96f] text-[#30221b]"
                      : "border border-white/20 text-white/70 hover:bg-white hover:text-[#30221b]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#30221b] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <img
            src={selectedImage}
            alt="Ashram experience"
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
