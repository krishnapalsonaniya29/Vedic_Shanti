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

import invitation from "./assets/invitation.jpeg";
import Gallery from "./components/Gallery";
import omkareshwar from "./assets/Omkareshwar.jpg";
import god2 from "./assets/god2.jpg";
import yagya from "./assets/yagya.jpg";
import meditation from "./assets/meditation.jpg";
import logo from "./assets/Logo.png";
import accommodation from "./assets/accommodation.jpg";
import food from "./assets/food.jpg";
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

export default function App() {
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
      <Split
        id="yajna"
        kicker="Sacred Ritual"
        title="यज्ञशाला"
        body="वैदिक शांति आश्रम की *यज्ञशाला* आध्यात्मिक, सांस्कृतिक और पर्यावरणीय चेतना का एक महत्वपूर्ण केंद्र है। यहाँ यज्ञ केवल धार्मिक अनुष्ठान के रूप में नहीं, बल्कि मन, शरीर और वातावरण की शुद्धि तथा सकारात्मक ऊर्जा के संचार के माध्यम के रूप में किया जाता है। यज्ञशाला का वातावरण मंत्रोच्चार, हवन और वैदिक परंपराओं से जुड़कर शांति एवं आत्मिक आनंद का अनुभव कराता है।
यज्ञशाला में वैदिक विधि-विधान के अनुसार अग्निहोत्र एवं हवन आयोजित किए जाते हैं। अग्नि को पवित्रता, ऊर्जा और परिवर्तन का प्रतीक माना जाता है। यज्ञ में घी, औषधीय वनस्पतियों, जड़ी-बूटियों और प्राकृतिक सामग्री की आहुति दी जाती है। वैदिक मंत्रों के उच्चारण के साथ होने वाला यह अनुष्ठान व्यक्ति में एकाग्रता, अनुशासन और सकारात्मक सोच विकसित करने में सहायक माना जाता है।
वैदिक शांति आश्रम की यज्ञशाला सामाजिक और सांस्कृतिक दृष्टि से भी महत्वपूर्ण है। यहाँ विभिन्न अवसरों पर सामूहिक यज्ञ, आध्यात्मिक कार्यक्रम, संस्कार एवं वैदिक ज्ञान से संबंधित गतिविधियाँ आयोजित की जा सकती हैं। सामूहिक रूप से यज्ञ करने से लोगों में सहयोग, सद्भाव, सेवा और प्रकृति के प्रति जिम्मेदारी की भावना मजबूत होती है।
यज्ञशाला नई पीढ़ी को भारतीय संस्कृति और वैदिक परंपराओं से जोड़ने का भी माध्यम है। यहाँ विद्यार्थी और युवा यज्ञ की वैज्ञानिक एवं आध्यात्मिक अवधारणाओं, संस्कृत मंत्रों तथा भारतीय जीवन-दर्शन के बारे में जानकारी प्राप्त कर सकते हैं।
इस प्रकार, वैदिक शांति आश्रम की यज्ञशाला केवल पूजा-अनुष्ठान का स्थान नहीं, बल्कि *शांति, संस्कार, पर्यावरण चेतना, आध्यात्मिक विकास और सामाजिक सद्भाव का केंद्र* है। यह भारतीय संस्कृति की प्राचीन परंपराओं को वर्तमान जीवन से जोड़ने का प्रेरणादायी प्रयास प्रस्तुत करती है।"
        image={yagya}
        alt="Vedic ritual fire"
      />
      <Split
        id="meditation"
        reverse
        kicker="Inner Quiet"
        title="ध्यान एवं साधना"
        body="
वैदिक शांति आश्रम में *ध्यान एवं साधना* का उद्देश्य व्यक्ति को बाहरी तनाव और भागदौड़ से दूर ले जाकर उसके भीतर शांति, संतुलन और आत्मिक जागरूकता का विकास करना है। आश्रम का वातावरण प्राकृतिक, शांत और आध्यात्मिक ऊर्जा से परिपूर्ण होता है, जहाँ साधक अपने मन को एकाग्र करने और स्वयं को भीतर से समझने का प्रयास करता है।

ध्यान साधना की शुरुआत सामान्यतः शांत वातावरण में बैठकर श्वास पर ध्यान केंद्रित करने से होती है। नियमित रूप से श्वास-प्रश्वास का निरीक्षण करने से मन की चंचलता धीरे-धीरे कम होती है और एकाग्रता बढ़ती है। इसके साथ *मंत्र-जप, प्राणायाम और योगाभ्यास* साधना को और प्रभावी बनाते हैं। वैदिक परंपरा में मंत्रों और सकारात्मक विचारों के माध्यम से मन, शरीर और चेतना के बीच संतुलन स्थापित करने पर विशेष बल दिया जाता है।

आश्रम में साधना केवल ध्यान तक सीमित नहीं रहती, बल्कि यह जीवन जीने की एक अनुशासित और सकारात्मक पद्धति बन जाती है। प्रातःकालीन ध्यान, योग, प्राणायाम, सत्संग तथा आध्यात्मिक चिंतन व्यक्ति को आत्म-अनुशासन और संयम की ओर प्रेरित करते हैं। सात्त्विक भोजन और सरल दिनचर्या भी साधना का महत्वपूर्ण हिस्सा माने जाते हैं।

आज के तनावपूर्ण जीवन में ध्यान का महत्व और भी बढ़ गया है। लगातार बढ़ती प्रतिस्पर्धा, डिजिटल माध्यमों का अत्यधिक उपयोग और मानसिक दबाव के बीच कुछ समय स्वयं के लिए निकालना आवश्यक है। आश्रम में ध्यान एवं साधना व्यक्ति को वर्तमान क्षण में जीना सिखाती है तथा मानसिक शांति, सकारात्मक सोच और भावनात्मक संतुलन विकसित करने में सहायक बनती है।

वैदिक शांति आश्रम में साधना का मूल संदेश यही है कि *वास्तविक शांति बाहरी परिस्थितियों में नहीं, बल्कि मन की स्थिरता और आत्म-जागरूकता में निहित है।* नियमित ध्यान, अनुशासन और सकारात्मक चिंतन के माध्यम से व्यक्ति अपने भीतर छिपी ऊर्जा और सामर्थ्य को पहचान सकता है। इस प्रकार आश्रम की ध्यान एवं साधना की परंपरा शरीर, मन और आत्मा के समन्वय के माध्यम से जीवन को अधिक शांत, संतुलित और सार्थक बनाने की प्रेरणा देती है।"
        image={meditation}
        alt="Meditation hall"
      />

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

      <section id="katha" className="container-wide py-24">
        <div className="text-center">
          <p className="section-kicker">Words that uplift</p>
          <h2 className="font-dev mt-3 text-4xl">श्रवण और अभ्यास</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Practice
            title="कथा"
            text="वादिक शांति आश्रम केवल एक धार्मिक स्थल नहीं, बल्कि आत्मिक शांति, सकारात्मक ऊर्जा और भारतीय आध्यात्मिक परंपराओं से जुड़ने का एक सुंदर केंद्र है। यहाँ आयोजित *कथा, आध्यात्मिक प्रवचन एवं सत्संग* व्यक्ति को बाहरी जीवन की भागदौड़ से कुछ समय दूर ले जाकर अपने भीतर झाँकने और जीवन के वास्तविक उद्देश्य को समझने का अवसर प्रदान करते हैं।

आध्यात्मिक कथा भारतीय संस्कृति की एक महत्वपूर्ण परंपरा रही है। रामायण, श्रीमद्भागवत, गीता तथा विभिन्न संतों और महापुरुषों के जीवन प्रसंगों के माध्यम से जीवन के गहरे संदेश सरल भाषा में समझाए जाते हैं। इन कथाओं का उद्देश्य केवल धार्मिक जानकारी देना नहीं, बल्कि मनुष्य को सत्य, प्रेम, करुणा, सेवा, संयम और सदाचार के मार्ग पर चलने की प्रेरणा देना है। कथा के प्रसंगों में छिपे जीवन-मूल्यों को वर्तमान परिस्थितियों से जोड़कर समझाया जाता है, जिससे श्रोता अपने दैनिक जीवन में भी उनका उपयोग कर सकें।

*सत्संग* का अर्थ है—सत्य और श्रेष्ठ विचारों का संग। वादिक शांति आश्रम में सत्संग के दौरान आध्यात्मिक विचारों, भजन, मंत्र, ध्यान और जीवन से जुड़े महत्वपूर्ण विषयों पर चर्चा होती है। सत्संग का वातावरण मन को शांत करने के साथ-साथ सकारात्मक सोच विकसित करने में सहायक होता है। जब व्यक्ति कुछ समय के लिए तनाव, चिंता और नकारात्मक विचारों से दूर होकर ईश्वर, अध्यात्म और सद्विचारों से जुड़ता है, तो उसके भीतर नई ऊर्जा का अनुभव होता है।

आज के आधुनिक और तेज़ जीवन में मानसिक तनाव, प्रतिस्पर्धा, पारिवारिक दबाव और डिजिटल दुनिया का प्रभाव लगातार बढ़ रहा है। ऐसे समय में आध्यात्मिक कथा और सत्संग व्यक्ति को अपने जीवन में संतुलन बनाने की प्रेरणा देते हैं। यह हमें याद दिलाते हैं कि सफलता केवल धन, पद या भौतिक उपलब्धियों में नहीं, बल्कि मन की शांति, अच्छे संबंधों, संतोष और समाज के प्रति जिम्मेदारी में भी निहित है।

आश्रम में होने वाले ऐसे आध्यात्मिक आयोजन परिवार और समाज को भी जोड़ने का माध्यम बनते हैं। बच्चे, युवा, महिलाएँ, बुजुर्ग और विभिन्न आयु वर्ग के लोग एक साथ बैठकर कथा सुनते हैं, भजन करते हैं और सकारात्मक विचारों का आदान-प्रदान करते हैं। इससे भारतीय संस्कारों और संस्कृति की परंपरा अगली पीढ़ी तक पहुँचती है।

*वादिक शांति आश्रम की कथा और सत्संग का मूल संदेश यही है कि बाहरी दुनिया को बदलने से पहले हमें अपने मन को शांत, विचारों को सकारात्मक और कर्मों को श्रेष्ठ बनाना चाहिए।* आध्यात्मिकता जीवन से दूर जाने का नहीं, बल्कि जीवन को बेहतर ढंग से जीने का मार्ग है। कथा हमें ज्ञान देती है, सत्संग सही दिशा दिखाता है और साधना उस दिशा पर चलने की शक्ति प्रदान करती है। यही आत्मिक शांति और सार्थक जीवन की वास्तविक यात्रा है।"
            icon={<BookOpenText />}
          />

          <Practice
            title="मंत्र जाप"
            text="वैदिक शांति आश्रम में *मंत्र जाप, मंत्र साधना एवं आध्यात्मिक अभ्यास* का उद्देश्य व्यक्ति को बाहरी तनाव और मानसिक अशांति से दूर ले जाकर आत्मिक शांति, सकारात्मक ऊर्जा और आंतरिक संतुलन की ओर प्रेरित करना है। भारतीय वैदिक परंपरा में मंत्रों को केवल शब्दों का उच्चारण नहीं, बल्कि चेतना को एकाग्र करने और मन को शुद्ध करने का प्रभावी माध्यम माना गया है। आश्रम का शांत एवं प्राकृतिक वातावरण साधना के लिए अनुकूल वातावरण प्रदान करता है।

*मंत्र जाप* आध्यात्मिक अभ्यास का एक सरल और प्रभावशाली माध्यम है। किसी निर्धारित मंत्र का श्रद्धा, एकाग्रता और नियमितता के साथ उच्चारण करने से मन की चंचलता कम करने में सहायता मिलती है। प्रातःकाल या संध्या के समय शांत वातावरण में मंत्र जाप करने से व्यक्ति अपने विचारों को व्यवस्थित कर सकता है और कुछ समय के लिए दैनिक जीवन की चिंताओं से स्वयं को अलग कर पाता है। ॐ, गायत्री मंत्र, महामृत्युंजय मंत्र तथा अन्य वैदिक मंत्रों का जाप भारतीय आध्यात्मिक परंपरा में विशेष महत्व रखता है।

*मंत्र साधना* मंत्र जाप से आगे का अभ्यास है, जिसमें मंत्र के अर्थ, उच्चारण, भाव और नियमित साधना पर विशेष ध्यान दिया जाता है। साधक अनुशासन के साथ निर्धारित समय पर ध्यान, प्राणायाम और मंत्र-जाप का अभ्यास करता है। इसका उद्देश्य केवल किसी बाहरी उपलब्धि की कामना करना नहीं, बल्कि आत्मचिंतन, आत्मसंयम और सकारात्मक सोच को विकसित करना है। निरंतर अभ्यास व्यक्ति में धैर्य, एकाग्रता और मानसिक स्थिरता जैसे गुणों को मजबूत करने में सहायक हो सकता है।

आश्रम में *ध्यान और प्राणायाम* भी आध्यात्मिक अभ्यास का महत्वपूर्ण हिस्सा हैं। ध्यान के माध्यम से साधक अपने मन और विचारों को शांत करने का प्रयास करता है, जबकि प्राणायाम श्वास के प्रति जागरूकता बढ़ाता है। योग, मौन साधना, स्वाध्याय और सत्संग जैसे अभ्यास भी व्यक्ति को अपनी आंतरिक चेतना से जुड़ने का अवसर प्रदान करते हैं।

आज की तेज गति वाली जीवनशैली में तनाव, चिंता और निरंतर डिजिटल व्यस्तता के कारण मन को विश्राम देना चुनौतीपूर्ण हो गया है। ऐसे समय में वैदिक शांति आश्रम जैसे आध्यात्मिक वातावरण में कुछ समय बिताना व्यक्ति को स्वयं के साथ संवाद करने का अवसर देता है। यहाँ साधना का केंद्र केवल धार्मिक अनुष्ठान नहीं, बल्कि *मन की शांति, आत्मअनुशासन, सकारात्मक दृष्टिकोण और जीवन के प्रति संतुलित सोच* विकसित करना है।

इस प्रकार, वैदिक शांति आश्रम में मंत्र जाप, मंत्र साधना और आध्यात्मिक अभ्यास व्यक्ति को अपनी आंतरिक शक्ति पहचानने की दिशा में प्रेरित करते हैं। नियमित साधना के माध्यम से व्यक्ति अपने जीवन में शांति, संयम, एकाग्रता और सकारात्मकता को स्थान देने का प्रयास कर सकता है। यही वैदिक आध्यात्मिक परंपरा का मूल संदेश है—*बाहरी संसार को बदलने से पहले अपने भीतर शांति और संतुलन स्थापित करना।*"
            icon={<Sparkles />}
          />
        </div>
      </section>

      <section id="food" className="bg-[#f1eadf] py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="lg:order-1">
              <p className="section-kicker">Sattvic Food & Mahaprasad</p>

              <h2 className="font-dev mt-3 text-4xl leading-tight md:text-5xl">
                वैदिक शांति आश्रम में भोजन और महाप्रसाद : सात्त्विकता, सेवा और
                प्रेम का संगम
              </h2>

              <div className="mt-6">
                <div className="font-dev text-[16px] leading-8 text-[#725e51]">
                  <p>
                    वैदिक शांति आश्रम में भोजन केवल शरीर की भूख मिटाने का माध्यम
                    नहीं है, बल्कि यह मन की शांति, आत्मिक संतुष्टि और सेवा-भाव
                    से जुड़ी एक सुंदर परंपरा है। आश्रम में परोसा जाने वाला{" "}
                    <strong>सात्त्विक भोजन और महाप्रसाद</strong> अपनी सादगी,
                    शुद्धता और प्रेम के कारण विशेष अनुभव प्रदान करता है। यहां
                    भोजन को केवल भोजन नहीं माना जाता, बल्कि उसे ईश्वर का
                    आशीर्वाद और प्रसाद समझकर ग्रहण किया जाता है।
                  </p>

                  <p className="mt-5">
                    आश्रम के भोजन की सबसे बड़ी विशेषता उसकी{" "}
                    <strong>सात्त्विकता</strong> है। ताजा, शुद्ध और पौष्टिक
                    सामग्री से तैयार भोजन शरीर को ऊर्जा देने के साथ-साथ मन को भी
                    शांत रखने में सहायक माना जाता है। भोजन में सादगी का विशेष
                    ध्यान रखा जाता है। दाल, सब्जी, चावल, रोटी, खिचड़ी, सलाद, फल
                    और अन्य पारंपरिक व्यंजन जब प्रेम और श्रद्धा के साथ बनाए और
                    परोसे जाते हैं, तो उनका स्वाद केवल मसालों से नहीं, बल्कि
                    भावना से भी बढ़ जाता है।
                  </p>

                  <p className="mt-5">
                    वैदिक परंपरा में भोजन बनाने और परोसने को भी{" "}
                    <strong>सेवा</strong> का रूप माना गया है। आश्रम में भोजन
                    तैयार करने वाले सेवक केवल रसोई का कार्य नहीं करते, बल्कि
                    श्रद्धा और समर्पण के साथ अपनी सेवा देते हैं। भोजन परोसते समय
                    उनके चेहरे पर सहज मुस्कान और अपनापन दिखाई देता है। यही प्रेम
                    भोजन को महाप्रसाद का रूप देता है। यहां आने वाला प्रत्येक
                    व्यक्ति स्वयं को अतिथि नहीं, बल्कि परिवार का हिस्सा महसूस
                    करता है।
                  </p>

                  <p className="mt-5">
                    महाप्रसाद ग्रहण करने का अनुभव भी अपने आप में आध्यात्मिक होता
                    है। भोजन से पहले प्रार्थना और ईश्वर का स्मरण वातावरण में
                    सकारात्मकता भर देता है। जब सभी लोग एक साथ बैठकर शांतिपूर्वक
                    भोजन करते हैं, तो वहां समानता, भाईचारे और सामूहिकता की भावना
                    मजबूत होती है। किसी के लिए अधिक या कम का भाव नहीं, बल्कि सभी
                    के लिए समान प्रेम और सम्मान दिखाई देता है।
                  </p>

                  <p className="mt-5">
                    आश्रम का भोजन हमें यह भी सिखाता है कि{" "}
                    <strong>
                      भोजन का वास्तविक मूल्य उसकी कीमत में नहीं, बल्कि उसे बनाने
                      और परोसने की भावना में होता है।
                    </strong>{" "}
                    आधुनिक जीवन की भागदौड़ में जहां भोजन अक्सर केवल एक आवश्यकता
                    बनकर रह गया है, वहीं आश्रम का महाप्रसाद हमें भोजन के प्रति
                    कृतज्ञ होना सिखाता है। एक साधारण भोजन भी तब विशेष बन जाता
                    है, जब उसमें शुद्धता, सेवा और प्रेम जुड़ जाता है।
                  </p>

                  <p className="mt-5">
                    वैदिक शांति आश्रम का सात्त्विक भोजन इसलिए केवल स्वाद की
                    अनुभूति नहीं देता, बल्कि मन में संतोष और शांति भी उत्पन्न
                    करता है। यहां परोसा गया महाप्रसाद{" "}
                    <strong>
                      अन्न, आध्यात्मिकता, सेवा और प्रेम का सुंदर संगम
                    </strong>{" "}
                    है। यही भावना आश्रम के भोजन को विशेष बनाती है और उसे ग्रहण
                    करने वाले प्रत्येक व्यक्ति के मन में एक सुखद, शांत और आत्मीय
                    स्मृति छोड़ जाती है।
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="image-wash h-[420px] overflow-hidden rounded-2xl lg:order-2">
              <img
                src={food}
                alt="Sattvic food and Mahaprasad at the Ashram"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
            className="relative max-h-[95vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInvitation(false)}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#30221b] shadow-lg"
              aria-label="Close invitation"
            >
              ×
            </button>

            <img
              src={invitation}
              alt="Upcoming event invitation"
              className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
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
