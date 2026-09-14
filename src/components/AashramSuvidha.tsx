const facilities = [
  {
    number: "01",
    title: "भैरव धार की हरियाली ",
  },
  {
    number: "02",
    title: "पातालपानी ",
  },
  {
    number: "03",
    title: "काला कुण्ड ",
  },
  {
    number: "04",
    title: "सिमरोल के झरने भैरव धार तक ",
  },
  {
    number: "05",
    title: "तिंचा फॉल ",
  },
  {
    number: "06",
    title: "पवित्र नदी नर्मदा मोरटक्का ",
  },
  {
    number: "07",
    title: "ओंकारेश्वर ज्योतिर्लिंग २२ किलोमीटर की दुरी ",
  },
];

export default function AashramSuvidha() {
  return (
    <section className="container-wide py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="section-kicker">Ashram Facilities</p>

        <h2 className="font-dev mt-3 text-4xl md:text-5xl">
          आश्रम में सुविधाएँ
        </h2>

        <p className="font-dev mt-4 max-w-2xl text-lg leading-8 text-[#725e51]">
          आश्रम में श्रद्धालुओं एवं आगंतुकों के लिए उपलब्ध विभिन्न सुविधाएँ।
        </p>
      </div>

      {/* Facilities */}
      <div className="grid gap-4 md:grid-cols-2">
        {facilities.map((facility) => (
          <div
            key={facility.number}
            className="group flex items-center gap-5 rounded-xl border border-[#e5d8c7] bg-white/60 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            {/* Number */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8b96f] text-sm font-bold text-[#30221b]">
              {facility.number}
            </div>

            {/* Text */}
            <div>
              <p className="font-dev text-xl text-[#30221b]">
                {facility.title}
              </p>

              <p className="mt-1 text-xs text-[#725e51]">Ashram Facility</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
