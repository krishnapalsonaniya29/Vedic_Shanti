import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery/1.webp";
import gallery2 from "../assets/gallery/2.webp";
import gallery3 from "../assets/gallery/3.webp";
import gallery4 from "../assets/gallery/4.webp";
import gallery5 from "../assets/gallery/5.webp";
import gallery6 from "../assets/gallery/6.webp";

const photos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="bg-[#30221b] py-24 text-white">
        <div className="container-wide">
          {/* Heading */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="section-kicker text-[#e3c681]">Glimpses of peace</p>

              <h2 className="font-dev mt-3 text-4xl">आश्रम की झलकियाँ</h2>
            </div>

            <Link
              to="/gallery"
              className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-[#30221b] sm:inline-flex"
            >
              सभी तस्वीरें देखें
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {photos.map((src, index) => (
              <button
                key={src}
                onClick={() => setSelectedImage(src)}
                className="image-wash group h-48 overflow-hidden rounded-lg text-left md:h-56"
              >
                <img
                  src={src}
                  alt={`Ashram experience ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </button>
            ))}
          </div>

          {/* Mobile button */}
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-[#30221b]"
            >
              सभी तस्वीरें देखें
              <ArrowRight size={16} />
            </Link>
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
    </>
  );
}
