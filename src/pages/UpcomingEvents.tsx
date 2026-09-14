import { useState } from "react";
import { ArrowLeft, X, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import invitation from "../assets/events/invitation.jpg";
import invitation2 from "../assets/events/invitation2.jpg";
import invitation3 from "../assets/events/invitation3.jpg";

interface Event {
  title: string;
  titleHindi: string;
  date: string;
  dateHindi: string;
  location: string;
  locationHindi: string;
  time: string;
  timeHindi: string;
  images: string[];
}

export default function UpcomingEvents() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events: Event[] = [
    {
      title: "भूमि पूजन",
      titleHindi: "भूमि पूजन",
      date: "26 July 2026",
      dateHindi: "26 जुलाई 2026",
      location: "Vedic Shanti Ashram",
      locationHindi:
        "वैदिक शांति आश्रम · ग्राम – झीगड़ी, इंदौर-बड़वाह मार्ग पर बलवाड़ा से 5 किमी आगे, जिला – खरगोन, मध्य प्रदेश, 451115",
      time: "10:30 AM",
      timeHindi: "प्रातः 10:30 बजे",
      images: [invitation],
    },

    {
      title: "101 कोटियज्ञ के लिए भूमि पूजन",
      titleHindi: "101 कोटियज्ञ के लिए भूमि पूजन",
      date: "21 September 2026",
      dateHindi: "21 सितंबर 2026",
      location: "Vedic Shanti Ashram",
      locationHindi:
        "वैदिक शांति आश्रम · ग्राम – झीगड़ी, इंदौर-बड़वाह मार्ग पर बलवाड़ा से 5 किमी आगे, जिला – खरगोन, मध्य प्रदेश, 451115",
      time: "10:30 AM",
      timeHindi: "प्रातः 10:30 बजे",
      images: [invitation3],
    },

    {
      title: "Sharadiya Navratri 101 Kundi Yagya",
      titleHindi: "शारदीय नवरात्रि १०१ कुंडी यज्ञ",
      date: "21 October – 29 October 2028",
      dateHindi: "२१ अक्टूबर – २९ अक्टूबर २०२८",
      location: "Vedic Shanti Ashram",
      locationHindi:
        "वैदिक शांति आश्रम · ग्राम – झीगड़ी, इंदौर-बड़वाह मार्ग पर बलवाड़ा से 5 किमी आगे, जिला – खरगोन, मध्य प्रदेश, 451115",
      time: "10:30 AM",
      timeHindi: "प्रातः 10:30 बजे",

      images: [invitation2],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f1e8]">
      <section className="container-wide py-20">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#725e51] transition hover:text-[#30221b]"
        >
          <ArrowLeft size={16} />
          Back to Ashram
        </Link>

        {/* Header */}
        <div className="mt-12 max-w-3xl">
          <p className="section-kicker">Upcoming Events · आगामी कार्यक्रम</p>

          <h1 className="font-dev mt-3 text-5xl leading-tight md:text-6xl">
            Upcoming Events
          </h1>

          <p className="font-dev mt-2 text-3xl text-[#30221b]">
            आगामी कार्यक्रम
          </p>

          <p className="font-dev mt-5 text-lg leading-8 text-[#725e51]">
            आश्रम में आयोजित होने वाले आगामी धार्मिक, आध्यात्मिक एवं सांस्कृतिक
            कार्यक्रमों की जानकारी यहाँ प्राप्त करें।
          </p>

          <p className="mt-2 text-sm leading-7 text-[#725e51]">
            Explore upcoming spiritual, religious and cultural events at Vedic
            Shanti Ashram.
          </p>
        </div>

        {/* Events */}
        <div className="mt-14 max-w-6xl space-y-10">
          {events.map((event, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-[#e5d8c7] bg-white/60 shadow-sm"
            >
              {/* Event Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="font-dev text-3xl leading-tight text-[#30221b] md:text-4xl">
                      {event.title}
                    </h2>

                    <p className="font-dev mt-1 text-2xl text-[#725e51]">
                      {event.titleHindi}
                    </p>
                  </div>

                  <p className="text-sm text-[#725e51]">
                    Click an invitation to view it
                    <br />
                    <span className="font-dev">
                      निमंत्रण देखने के लिए चित्र पर क्लिक करें
                    </span>
                  </p>
                </div>

                {/* Date, Location & Time */}
                <div className="mt-7 flex flex-col gap-5 border-t border-[#e5d8c7] pt-6 text-[#725e51] sm:flex-row sm:flex-wrap sm:gap-10">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <CalendarDays
                      size={19}
                      className="mt-1 shrink-0 text-[#9b7a42]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-[#30221b]">
                        {event.date}
                      </p>

                      <p className="font-dev mt-1 text-base">
                        {event.dateHindi}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-[#9b7a42]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-[#30221b]">
                        {event.location}
                      </p>

                      <p className="font-dev mt-1 max-w-xl text-base">
                        {event.locationHindi}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-[19px] w-[19px] shrink-0 rounded-full border-2 border-[#9b7a42]" />

                    <div>
                      <p className="text-sm font-semibold text-[#30221b]">
                        {event.time}
                      </p>

                      <p className="font-dev mt-1 text-base">
                        {event.timeHindi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invitation Gallery */}
              <div className="border-t border-[#e5d8c7] p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {event.images.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group overflow-hidden rounded-xl bg-[#f7f1e8] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={image}
                        alt={`${event.title} - Invitation ${imageIndex + 1}`}
                        className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    </button>
                  ))}
                </div>

                <p className="font-dev mt-4 text-center text-sm text-[#725e51]">
                  चित्र को बड़ा देखने के लिए क्लिक करें
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#30221b] shadow-lg transition hover:scale-105"
              aria-label="Close invitation"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage}
              alt="Event invitation"
              className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
