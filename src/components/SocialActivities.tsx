const activities = [
  {
    number: "01",
    title: "सामाजिक",
    description: "समाज के कल्याण एवं विकास के लिए विभिन्न सामाजिक कार्य।",
  },
  {
    number: "02",
    title: "सभी प्रकार की शैक्षणिक",
    description:
      "शिक्षा के क्षेत्र में विभिन्न प्रकार के शैक्षणिक कार्य एवं सहयोग।",
  },
  {
    number: "03",
    title: "सांस्कृतिक",
    description:
      "भारतीय संस्कृति, परंपराओं एवं संस्कारों के संरक्षण और संवर्धन के लिए कार्य।",
  },
  {
    number: "04",
    title: "सभी समाज के आखरी व्यक्ति , सभी प्रकार की मुख्य धरा तक मदद",
    description: "सभी समाज के लोगों के हित एवं कल्याण के लिए कार्य।",
  },
  {
    number: "05",
    title: "प्राकृतिक धरोहर एवं पर्यावरण",
    description:
      "सम्पूर्ण भारत की प्राकृतिक धरोहर, प्राकृतिक वातावरण एवं भौगोलिक स्थिति के संरक्षण और संवर्धन के लिए कार्य करना।",
  },
  {
    number: "06",
    title: "आपदा सहायता",
    description:
      "प्राकृतिक आपदाओं से प्रभावित होने पर सभी वर्गों की सहायता करना।",
  },
];

export default function SocialActivities() {
  return (
    <section className="container-wide py-24">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <p className="section-kicker">Social & Cultural Activities</p>

        <h2 className="font-dev mt-3 text-4xl md:text-5xl">
          सामाजिक एवं सांस्कृतिक कार्य
        </h2>

        <p className="font-dev mt-4 text-lg leading-8 text-[#725e51]">
          समाज, शिक्षा, संस्कृति, पर्यावरण एवं मानव सेवा के क्षेत्र में आश्रम
          द्वारा किए जाने वाले विभिन्न कार्य।
        </p>
      </div>

      {/* Activities */}
      <div className="grid gap-5 md:grid-cols-2">
        {activities.map((activity) => (
          <div
            key={activity.number}
            className="group rounded-2xl border border-[#e5d8c7] bg-white/60 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            <div className="flex items-start gap-5">
              {/* Number */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8b96f] text-sm font-bold text-[#30221b]">
                {activity.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-dev text-2xl text-[#30221b]">
                  {activity.title}
                </h3>

                <p className="font-dev mt-3 text-base leading-7 text-[#725e51]">
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
