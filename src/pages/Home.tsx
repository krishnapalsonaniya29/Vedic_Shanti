import { useState } from "react";
import {
  BedDouble,
  BookOpenText,
  ChevronRight,
  Flame,
  MapPin,
  Menu,
  Phone,
  Soup,
  Sparkles,
  X,
} from "lucide-react";

import invitation from "../assets/invitation.jpeg";
import invitation2 from "../assets/invitation2.png";
import Gallery from "../components/Gallery";
import omkareshwar from "../assets/Omkareshwar.jpg";
import god2 from "../assets/god2.jpg";
import YajnaSection from "../components/YajnaSection";
import MeditationSection from "../components/MeditationSection";
import logo from "../assets/Logo.png";
import accommodation from "../assets/accommodation.jpg";
import FoodSection from "../components/FoodSection";
import KathaSection from "../components/KathaSection";
import MantraSection from "../components/MantraSection";
const navItems = [
  "About",
  "Facilities",
  "Yajna",
  "Meditation",
  "Katha",
  "Gallery",
  "Contact",
];

//const photos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
const facilities = [
  {
    icon: BedDouble,
    title: "निवास",
    text: "सादा, स्वच्छ और शांत निवास व्यवस्था",
  },
  {
    icon: Soup,
    title: "भोजन / महाप्रसाद",
    text: "सात्विक भोजन और प्रेम से परोसा प्रसाद",
  },
  {
    icon: Flame,
    title: "यज्ञशाला",
    text: "वैदिक अनुष्ठानों के लिए पवित्र परिसर",
  },
  { icon: Sparkles, title: "ध्यान", text: "आत्मचिंतन के लिए शांत वातावरण" },
  {
    icon: BookOpenText,
    title: "कथा / सत्संग",
    text: "ज्ञान, भक्ति और संवाद के सत्र",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  return (
    <main className="overflow-x-hidden">
      <header className="absolute z-20 w-full text-white">
        <div className="container-wide flex h-20 items-center justify-between border-b border-white/25">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Vedic Shanti Ashram Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-dev text-base">वैदिक शांति आश्रम</span>
          </a>
          <nav className="hidden items-center gap-6 text-[11px] font-semibold tracking-[.13em] uppercase lg:flex">
            {navItems.map((i) => (
              <a
                key={i}
                href={"#" + i.toLowerCase()}
                className="transition hover:text-[#e3c681]"
              >
                {i}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="bg-[#30221b]/98 px-6 py-6 lg:hidden">
            <nav className="container-wide flex flex-col gap-4 text-sm">
              {navItems.map((i) => (
                <a
                  key={i}
                  onClick={() => setOpen(false)}
                  href={"#" + i.toLowerCase()}
                >
                  {i}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      <section
        id="home"
        className="relative flex min-h-[690px] items-end bg-[#30221b] pb-20 text-white md:min-h-[760px]"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={omkareshwar}
          alt="Indian temple at dawn"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d16]/85 via-[#2b1d16]/45 to-[#2b1d16]/20" />
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold tracking-[.28em] text-[#e3c681] uppercase">
              Omkareshwar · Madhya Pradesh
            </p>
            <h1 className="font-dev text-5xl leading-[1.25] md:text-7xl">
              वैदिक शांति आश्रम
            </h1>
            <p className="font-dev mt-5 max-w-xl text-lg leading-8 text-white/90 md:text-2xl">
              परंपरा, साधना और शांति का एक पवित्र स्थान
            </p>
            <button
              onClick={() => setShowInvitation(true)}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d8b96f] px-6 py-3.5 text-xs font-bold tracking-[.1em] text-[#30221b] uppercase transition hover:bg-white"
            >
              Upcoming Event <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="container-wide grid gap-12 py-24 lg:grid-cols-2 lg:items-center"
      >
        <div className="image-wash h-[410px] rounded-t-[9rem] bg-paper">
          <img
            src={god2}
            className="h-full w-full object-cover"
            alt="Quiet temple corridor"
          />
        </div>
        <div className="max-w-lg">
          <p className="section-kicker">About the Ashram</p>
          <h2 className="font-dev mt-4 text-4xl leading-tight md:text-5xl">
            जहाँ परंपरा
            <br />
            शांति से मिलती है
          </h2>
          <p className="mt-6 leading-8 text-[#725e51]">
            वैदिक शांति आश्रम एक आध्यात्मिक एवं सांस्कृतिक संस्था है, जिसका
            उद्देश्य भारतीय वैदिक परंपराओं, संस्कारों और सनातन संस्कृति के
            मूल्यों को जन-जन तक पहुँचाना है। आश्रम के माध्यम से यज्ञ, हवन,
            साधना, आध्यात्मिक सत्संग एवं धार्मिक आयोजनों का आयोजन किया जाता है,
            ताकि समाज में शांति, सद्भाव, सकारात्मकता और आध्यात्मिक चेतना का
            विकास हो। वैदिक शांति आश्रम लोगों को अपनी प्राचीन वैदिक संस्कृति से
            जोड़ने तथा जीवन में संस्कार, सेवा, संयम और सद्भाव को अपनाने के लिए
            प्रेरित करता है। विभिन्न धार्मिक पर्वों एवं विशेष आयोजनों के माध्यम
            से परिवारों और समाज को एक साथ जोड़ने का प्रयास किया जाता है। आश्रम
            का प्रमुख भाव है—“वैदिक संस्कृति, आध्यात्मिक चेतना और समाज सेवा के
            माध्यम से सुखी एवं संस्कारित समाज का निर्माण।” यहाँ आयोजित यज्ञ एवं
            धार्मिक अनुष्ठान केवल आध्यात्मिक साधना तक सीमित नहीं हैं, बल्कि
            सामूहिक एकता और सामाजिक सहभागिता का भी माध्यम हैं। वैदिक शांति आश्रम
            सभी श्रद्धालुओं को धर्म, संस्कृति और सेवा के इस पावन मार्ग से जुड़ने
            के लिए सादर आमंत्रित करता है।
          </p>
          <a
            href="#history"
            className="mt-7 inline-flex items-center gap-2 border-b border-saffron pb-1 text-sm font-bold text-clay"
          >
            हमारे बारे में <ChevronRight size={15} />
          </a>
        </div>
      </section>
      <section id="history" className="bg-paper py-20">
        <div className="container-wide grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="section-kicker">Our Story</p>
            <h2 className="font-dev mt-3 text-4xl">हमारी यात्रा</h2>
          </div>
          <p className="max-w-2xl font-dev text-xl leading-9 text-[#584236]">
            परम पूज्य गुरुदेवों की प्रेरणा से यह आश्रम वैदिक मूल्यों को आने वाली
            पीढ़ियों तक पहुँचाने के संकल्प के साथ आकार ले रहा है—एक ऐसा स्थान,
            जहाँ सेवा, संस्कार और साधना सहज रूप से साथ चलें।
          </p>
        </div>
      </section>
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
          <div className="grid md:grid-cols-[210px_1fr_auto]">
            <div className="bg-saffron p-8 text-center">
              <div className="font-dev text-5xl">26</div>
              <div className="mt-1 text-xs font-bold tracking-[.2em] uppercase">
                July 2026
              </div>
            </div>
            <div className="p-8">
              <p className="font-dev text-3xl">भूमि पूजन</p>
              <p className="font-dev mt-3 text-white/75">
                वैदिक शांति आश्रम · ग्राम – झीगड़ी इंदौर बड़वाह मार्ग पर बलवाड़ा से
                5 किमी आगे
                <br />
                जिला – खरगोन, मध्य प्रदेश, 451115
              </p>
            </div>
            <div className="flex items-center bg-white/5 px-8 text-sm font-semibold text-[#e3c681]">
              प्रातः 10:30 बजे
            </div>
          </div>
        </div>
      </section>
      <section id="facilities" className="bg-[#f1eadf] py-24">
        <div className="container-wide">
          <div className="max-w-xl">
            <p className="section-kicker">The Ashram</p>
            <h2 className="font-dev mt-3 text-4xl">साधना के लिए हर सुविधा</h2>
          </div>
          <div className="mt-11 grid gap-px overflow-hidden rounded-xl bg-[#d9ccba] sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="bg-[#f8f4ec] p-7 transition hover:bg-[#fffaf1]"
              >
                <Icon size={24} strokeWidth={1.4} className="text-saffron" />
                <h3 className="font-dev mt-7 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#725e51]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <YajnaSection />

      <MeditationSection />

      <section id="accommodation" className="container-wide py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="image-wash h-[420px] overflow-hidden rounded-2xl">
            <img
              src={accommodation}
              alt="Ashram accommodation"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="section-kicker">Simple & Peaceful Stay</p>

            <h2 className="font-dev mt-3 text-4xl leading-tight md:text-5xl">
              वादिक शांति आश्रम में सादा, स्वच्छ और शांत निवास व्यवस्था
            </h2>

            <div className="mt-6 max-h-[420px] overflow-y-auto pr-4">
              <div className="font-dev text-[16px] leading-8 text-[#725e51]">
                <p>
                  वादिक शांति आश्रम में निवास व्यवस्था का उद्देश्य केवल रहने के
                  लिए स्थान उपलब्ध कराना नहीं, बल्कि अतिथियों को ऐसा वातावरण
                  प्रदान करना है जहाँ वे स्वयं को प्रकृति, आध्यात्मिकता और शांति
                  के निकट अनुभव कर सकें। आश्रम की पूरी व्यवस्था सादगी, स्वच्छता,
                  अनुशासन और आत्मिक शांति की भावना पर आधारित है। यहाँ आने वाले
                  प्रत्येक व्यक्ति को एक ऐसा शांत वातावरण मिलता है, जहाँ वह कुछ
                  समय के लिए दैनिक जीवन की भागदौड़ और तनाव से दूर रहकर स्वयं के
                  साथ समय बिता सकता है।
                </p>

                <p className="mt-5">
                  आश्रम में निवास के लिए उपलब्ध कमरे सामान्य, सुविधाजनक और
                  स्वच्छ रखे जाते हैं। कमरों की सजावट में अनावश्यक दिखावे के
                  स्थान पर सादगी को प्राथमिकता दी जाती है। आवश्यक फर्नीचर,
                  बिस्तर, प्रकाश, वायु-संचार तथा मूलभूत सुविधाओं की व्यवस्था इस
                  प्रकार की जाती है कि आगंतुकों को आरामदायक अनुभव हो। यहाँ का
                  वातावरण आधुनिक विलासिता की अपेक्षा सहज और प्राकृतिक जीवनशैली
                  को प्रोत्साहित करता है।
                </p>

                <p className="mt-5">
                  स्वच्छता आश्रम की निवास व्यवस्था का एक महत्वपूर्ण हिस्सा है।
                  कमरों, स्नानघर, परिसर और आसपास के क्षेत्रों की नियमित सफाई पर
                  विशेष ध्यान दिया जाता है। स्वच्छ पेयजल, साफ-सुथरे शौचालय तथा
                  व्यवस्थित परिसर आगंतुकों के स्वास्थ्य और सुविधा को ध्यान में
                  रखते हुए बनाए जाते हैं। आश्रम में स्वच्छता को केवल बाहरी
                  व्यवस्था नहीं, बल्कि स्वस्थ और सकारात्मक जीवनशैली का आधार माना
                  जाता है।
                </p>

                <p className="mt-5">
                  वादिक शांति आश्रम की सबसे बड़ी विशेषता इसका शांत और प्राकृतिक
                  वातावरण है। हरे-भरे पेड़-पौधे, खुला परिसर, शुद्ध हवा और
                  प्रकृति के निकट रहने का अनुभव मन को सहज रूप से शांत करता है।
                  आश्रम में अनावश्यक शोर-शराबे और भागदौड़ से बचने का प्रयास किया
                  जाता है, जिससे निवासियों को ध्यान, योग, प्रार्थना और आत्मचिंतन
                  के लिए अनुकूल वातावरण मिल सके। सुबह की शांति और प्राकृतिक
                  वातावरण व्यक्ति को दिन की शुरुआत सकारात्मक ऊर्जा के साथ करने
                  का अवसर प्रदान करते हैं।
                </p>

                <p className="mt-5">
                  आश्रम की निवास व्यवस्था में अनुशासन और मर्यादा का भी विशेष
                  महत्व है। समय का पालन, स्वच्छता बनाए रखना, शांत वातावरण का
                  सम्मान करना तथा अन्य निवासियों की सुविधा का ध्यान रखना आश्रम
                  की संस्कृति का हिस्सा है। यहाँ रहने वाला प्रत्येक व्यक्ति
                  आश्रम के वातावरण को शांत और सकारात्मक बनाए रखने में अपनी
                  भूमिका निभाता है।
                </p>

                <p className="mt-5">
                  कुल मिलाकर, वादिक शांति आश्रम की निवास व्यवस्था{" "}
                  <strong>सादा जीवन, स्वच्छ वातावरण और शांत मन</strong> की
                  अवधारणा को साकार करती है। यहाँ का निवास व्यक्ति को केवल आराम
                  नहीं देता, बल्कि उसे प्रकृति के करीब आने, अपने भीतर झाँकने और
                  मानसिक शांति प्राप्त करने का अवसर भी प्रदान करता है। यही
                  सादगी, स्वच्छता और शांति इस आश्रम की निवास व्यवस्था को विशेष
                  और आत्मीय बनाती है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="katha" className="bg-[#f7f1e8] py-24">
        <div className="container-wide">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-kicker">Words that uplift</p>

            <h2 className="font-dev mt-3 text-4xl leading-tight md:text-5xl">
              श्रवण और अभ्यास
            </h2>

            <p className="font-dev mt-5 text-base leading-7 text-[#725e51]">
              कथा, सत्संग और मंत्र साधना के माध्यम से ज्ञान, शांति और आत्मिक
              संतुलन की ओर एक सरल यात्रा।
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 space-y-16">
            <KathaSection />

            <div className="mx-auto h-px max-w-5xl bg-[#d8cbbb]" />

            <MantraSection />
          </div>
        </div>
      </section>

      <FoodSection />

      <Gallery />

      <section
        id="contact"
        className="container-wide grid gap-12 py-24 lg:grid-cols-[1fr_.85fr]"
      >
        <div>
          <p className="section-kicker">Visit & Connect</p>
          <h2 className="font-dev mt-3 text-4xl md:text-5xl">संपर्क करें</h2>
          <p className="mt-6 max-w-md leading-8 text-[#725e51]">
            आश्रम, आयोजन या सेवाओं से संबंधित जानकारी के लिए हमसे संपर्क करें।
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="tel:+919000000000"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} /> फोन करें
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-[#c8b6a1] px-5 py-3 text-sm font-semibold"
            >
              मार्ग देखें <MapPin size={16} />
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-paper p-8">
          <p className="font-dev text-2xl">आश्रम संपर्क</p>
          <div className="mt-6 space-y-3 font-dev text-lg text-[#5d4536]">
            <p>राजेश नगराले</p>
            <p>गणेश कुशवाह</p>
            <p>आदित्य चेलविया</p>
            <p>अमर ठाकुर</p>
          </div>
          <div className="mt-7 border-t border-[#d9ccba] pt-6 text-sm leading-6 text-[#725e51]">
            ग्राम – झिरिया
            <br />
            जिला – खरगोन, मध्य प्रदेश
          </div>
        </div>
      </section>
      <footer className="bg-[#251912] py-14 text-[#e9ded0]">
        <div className="container-wide flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="font-dev text-4xl text-[#d8b96f]">ॐ</div>
            <p className="font-dev mt-2 text-xl">वैदिक शांति आश्रम</p>
            <p className="mt-2 text-xs tracking-[.17em] text-white/55">
              परंपरा • साधना • शांति
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div>
              <p className="mb-3 font-semibold text-[#d8b96f]">Quick Links</p>
              {navItems.slice(0, 4).map((i) => (
                <a
                  className="mb-2 block text-white/65 hover:text-white"
                  href={"#" + i.toLowerCase()}
                  key={i}
                >
                  {i}
                </a>
              ))}
            </div>
            <div>
              <p className="mb-3 font-semibold text-[#d8b96f]">Contact</p>
              <p className="text-white/65">झिरिया, खरगोन</p>
              <p className="mt-2 text-white/65">Madhya Pradesh</p>
            </div>
          </div>
        </div>
        <div className="container-wide mt-12 border-t border-white/10 pt-5 text-xs text-white/40">
          © 2026 Vedic Shanti Ashram
        </div>
      </footer>
      {showInvitation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowInvitation(false)}
        >
          <div
            className="relative max-h-[95vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInvitation(false)}
              className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#30221b] shadow-lg"
              aria-label="Close invitation"
            >
              ×
            </button>

            <div className="grid max-h-[90vh] grid-cols-2 gap-3 overflow-auto">
              <img
                src={invitation}
                alt="Upcoming event invitation"
                className="h-auto max-h-[90vh] w-full rounded-lg object-contain shadow-2xl"
              />

              <img
                src={invitation2}
                alt="Upcoming event invitation details"
                className="h-auto max-h-[90vh] w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
