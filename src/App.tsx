import { useState, type ReactNode } from "react";
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
import omkareshwar from "./assets/Omkareshwar.jpg";
import god2 from "./assets/god2.jpg";
import yagya from "./assets/yagya.jpg";
import meditation from "./assets/meditation.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import gallery4 from "./assets/gallery4.jpg";
import gallery5 from "./assets/gallery5.jpg";
import gallery6 from "./assets/gallery6.jpg";
const navItems = [
  "About",
  "Facilities",
  "Yajna",
  "Meditation",
  "Katha",
  "Gallery",
  "Contact",
];
const photos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
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

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="overflow-x-hidden">
      <header className="absolute z-20 w-full text-white">
        <div className="container-wide flex h-20 items-center justify-between border-b border-white/25">
          <a href="#home" className="flex items-center gap-3">
            <span className="font-dev text-3xl text-[#e3c681]">ॐ</span>
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
            <a
              href="#about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d8b96f] px-6 py-3.5 text-xs font-bold tracking-[.1em] text-[#30221b] uppercase transition hover:bg-white"
            >
              Explore Ashram <ChevronRight size={16} />
            </a>
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
            वैदिक शांति आश्रम भारतीय संस्कृति, वैदिक यज्ञ, ध्यान और आध्यात्मिक
            सीख की जीवंत भूमि है। यहाँ साधना के माध्यम से जीवन में शांति और
            सद्भाव का अनुभव किया जाता है।
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
                वैदिक शांति आश्रम · ग्राम – झिरिया
                <br />
                जिला – खरगोन, मध्य प्रदेश
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
      <Split
        id="yajna"
        kicker="Sacred Ritual"
        title="यज्ञशाला"
        body="वैदिक यज्ञ एवं भारतीय परंपराओं के लिए एक पवित्र स्थान। अग्नि, मंत्र और समर्पण के इस संगम में सामूहिक कल्याण की भावना जागृत होती है।"
        image={yagya}
        alt="Vedic ritual fire"
      />
      <Split
        id="meditation"
        reverse
        kicker="Inner Quiet"
        title="ध्यान एवं साधना"
        body="मन की शांति और आत्मचिंतन के लिए एक शांत वातावरण। प्रकृति की गोद में कुछ पल स्वयं के साथ बिताइए।"
        image={meditation}
        alt="Meditation hall"
      />
      <section id="katha" className="container-wide py-24">
        <div className="text-center">
          <p className="section-kicker">Words that uplift</p>
          <h2 className="font-dev mt-3 text-4xl">श्रवण और अभ्यास</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
          <Practice
            title="कथा"
            text="आध्यात्मिक कथा एवं सत्संग"
            icon={<BookOpenText />}
          />
          <Practice
            title="मंत्र जाप"
            text="मंत्र साधना एवं आध्यात्मिक अभ्यास"
            icon={<Sparkles />}
          />
        </div>
      </section>
      <section id="gallery" className="bg-[#30221b] py-24 text-white">
        <div className="container-wide">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="section-kicker text-[#e3c681]">Glimpses of peace</p>
              <h2 className="font-dev mt-3 text-4xl">आश्रम की झलकियाँ</h2>
            </div>
            <span className="hidden text-sm text-white/60 sm:block">
              प्रकृति · परंपरा · प्रार्थना
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {photos.map((src) => (
              <div
                key={src}
                className="image-wash group h-48 overflow-hidden rounded-lg md:h-56"
              >
                <img
                  src={src}
                  alt="Ashram experience"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
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
    </main>
  );
}
function Split({
  id,
  kicker,
  title,
  body,
  image,
  alt,
  reverse = false,
}: {
  id: string;
  kicker: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-wide py-24">
      <div
        className={
          "grid gap-12 lg:grid-cols-2 lg:items-center " +
          (reverse ? "lg:[&>*:first-child]:order-2" : "")
        }
      >
        <div className="image-wash h-[380px] rounded-xl">
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        </div>
        <div className="max-w-md">
          <p className="section-kicker">{kicker}</p>
          <h2 className="font-dev mt-4 text-4xl md:text-5xl">{title}</h2>
          <p className="font-dev mt-6 text-lg leading-9 text-[#6b5344]">
            {body}
          </p>
          <div className="mt-8 leaf-mark" />
        </div>
      </div>
    </section>
  );
}
function Practice({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-xl border border-[#e0d3c0] bg-[#fffaf2] p-8 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f2e6ce] text-saffron">
        {icon}
      </div>
      <h3 className="font-dev mt-5 text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-[#725e51]">{text}</p>
    </article>
  );
}
