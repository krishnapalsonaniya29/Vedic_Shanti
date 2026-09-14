export default function UpcomingEventSection() {
  return (
    <section className="container-wide py-24">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker">Gather in prayer</p>
          <h2 className="font-dev mt-3 text-4xl">आगामी आयोजन</h2>
        </div>

        <span className="text-sm text-[#725e51]">
          श्रद्धा से आपका स्वागत है
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl bg-[#30221b] text-white shadow-xl">
        {/* Event 1 */}
        <div className="grid md:grid-cols-[210px_1fr_auto]">
          {/* Date */}
          <div className="bg-saffron p-8 text-center">
            <div className="font-dev text-5xl">26</div>

            <div className="mt-1 text-xs font-bold tracking-[.2em] uppercase">
              July 2026
            </div>
          </div>

          {/* Event Details */}
          <div className="p-8">
            <p className="font-dev text-3xl">भूमि पूजन</p>

            <p className="font-dev mt-3 text-white/75">
              वैदिक शांति आश्रम · ग्राम – झीगड़ी इंदौर बड़वाह मार्ग पर बलवाड़ा से 5
              किमी आगे
              <br />
              जिला – खरगोन, मध्य प्रदेश, 451115
            </p>
          </div>

          {/* Time */}
          <div className="flex items-center bg-white/5 px-8 text-sm font-semibold text-[#e3c681]">
            प्रातः 10:30 बजे
          </div>
        </div>
        <div className="mx-8 border-t border-white/10 md:mx-0" />
        {/* Event 2 */}
        <div className="grid md:grid-cols-[210px_1fr_auto]">
          {/* Date */}
          <div className="bg-saffron p-8 text-center">
            <div className="font-dev text-5xl">21</div>

            <div className="mt-1 text-xs font-bold tracking-[.2em] uppercase">
              September 2026
            </div>
          </div>

          {/* Event Details */}
          <div className="p-8">
            <p className="font-dev text-3xl">101 कोटियज्ञ के लिए भूमि पूजन </p>

            <p className="font-dev mt-3 text-white/75">
              महालक्ष्मी नगर मेला ग्राउंड साईं कृपा कॉलोनी, इंदौर
            </p>
          </div>

          {/* Time */}
          <div className="flex items-center bg-white/5 px-8 text-sm font-semibold text-[#e3c681]">
            प्रातः 10:30 बजे
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#30221b] text-white shadow-xl"></div>
        <div className="mx-8 border-t border-white/10 md:mx-0" />
        {/* Event 3 */}
        <div className="grid md:grid-cols-[210px_1fr_auto]">
          {/* Date */}
          <div className="bg-saffron p-8 text-center">
            <div className="font-dev text-5xl">21–29</div>

            <div className="mt-1 text-xs font-bold tracking-[.2em] uppercase">
              October 2028
            </div>

            <div className="font-dev mt-2 text-sm">अक्टूबर २०२८</div>
          </div>

          {/* Event Details */}
          <div className="p-8">
            <p className="font-dev text-3xl">शारदीय नवरात्रि १०१ कुंडी यज्ञ</p>

            <p className="mt-2 text-sm text-white/70">
              Sharadiya Navratri 101 Kundi Yagya
            </p>

            <p className="font-dev mt-3 text-white/75">
              महालक्ष्मी नगर मेला ग्राउंड साईं कृपा कॉलोनी, इंदौर
            </p>
          </div>

          {/* Time */}
          <div className="flex items-center bg-white/5 px-8 text-sm font-semibold text-[#e3c681]">
            प्रातः 10:30 बजे
          </div>
        </div>
      </div>
    </section>
  );
}
