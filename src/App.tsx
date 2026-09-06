import { useState, useEffect, useRef } from 'react';
import { Phone, Truck, ShieldCheck, Clock, CheckCircle2, Star, Box, Home, Briefcase, Wrench, Siren, MapPin, MessageCircle, Menu, X } from 'lucide-react';
import { motion, useInView, animate } from 'motion/react';

const stats = [
  { end: 1000, suffix: '+', label: 'Zadovoljnih klijenata', decimals: 0 },
  { end: 5, suffix: '', label: 'Google ocena', decimals: 1 },
  { end: 24, suffix: '/7', label: 'Dostupnost', decimals: 0 },
  { end: 45, suffix: ' min', label: 'Brz dolazak', decimals: 0 },
];

const services = [
  { icon: Home, title: 'Selidbe stanova', desc: 'Kompletne selidbe bez stresa i komplikacija.' },
  { icon: Briefcase, title: 'Selidbe firmi', desc: 'Brzo preseljenje kancelarija i poslovnih prostora.' },
  { icon: Truck, title: 'Transport robe', desc: 'Siguran transport robe širom Srbije.' },
  { icon: Box, title: 'Pakovanje stvari', desc: 'Pucketava folija, stretch folija i kutije.' },
  { icon: Wrench, title: 'Montaža nameštaja', desc: 'Demontaža i montaža svih vrsta nameštaja.' },
  { icon: Siren, title: 'Hitne selidbe', desc: 'Dostupni 24/7 za hitne intervencije.' },
];

const pricing = [
  { title: 'Kombi prevoz', price: 'Od 2.000 dinara' },
  { title: 'Radnici po satu', price: '1.000 dinara / h' },
  { title: 'Pucketava folija', price: 'Od 700 RSD' },
  { title: 'Stretch folija', price: 'Od 500 RSD' },
  { title: 'Kutije za pakovanje', price: 'Od 150 RSD' },
  { title: 'Nošenje bez lifta', price: 'Po dogovoru' },
];

const reviews = [
  { text: 'Све похвале за момке. Свака препорука. Потпуно фер за сваки договор.', author: 'Jelena Djordjevic' },
  { text: 'Потпуно у реду посао, потпуно фер цена 👍', author: 'Dragan Gosic' },
  { text: 'Невероватна снага кичме направљене од еластина 😂', author: 'Andrija Dimitrijevc' },
  { text: 'Најбољи тим', author: 'Slobodan Bakić' },
  { text: 'Све препоруке и похвале за власника и његове раднике. Искусни, вредни, а тако млади. Браво момци!', author: 'Nikola Stanic' },
  { text: 'Момци су пуни хвале, брзи, ефикасни и све је како је договорено.', author: 'Damjan Popović' },
  { text: 'Момак је љубазан и фер, све препоруке.', author: 'Branko Djordjevic' },
  { text: 'Све похвале, веома одговорни и озбиљни момци', author: 'Ksenija Mihajlovic' },
  { text: 'Одлично, прецизно, педантно. Све похвале!!!', author: 'Aleksandar Brasic' },
  { text: 'Све препоруке брза и квалитетна услуга, повољан договор, прецизно вађење и убацивање ваших ствари без оштећења, чак су ми обрисали ствари од прашине што ме је веома пријатно изненадило... Све препоруке за услугу', author: 'X Xxa' },
  { text: 'Веома сам задовољан овом компанијом. Лака комуникација. Брз и лак договор. Веома сам задовољан паковањем и транспортом робе на адресу. Све похвале.', author: 'Goran Antanasijevic' }
];

const faqs = [
  { q: 'Da li radite vikendom?', a: 'Da, dostupni smo 24/7 uključujući vikende i praznike.' },
  { q: 'Da li pakujete stvari?', a: 'Da, nudimo kompletno profesionalno pakovanje.' },
  { q: 'Koliko traje selidba?', a: 'Zavisi od količine stvari i lokacije.' },
  { q: 'Da li radite hitne selidbe?', a: 'Da, hitne selidbe radimo tokom celog dana i noći.' },
];

function StatCounter({ end, suffix, decimals = 0 }: { end: number, suffix: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = value.toFixed(decimals) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, end, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#ff1e1e] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full px-4 py-3 md:px-12 md:py-4 flex justify-between items-center bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <a href="#" className="flex items-center relative z-50 group p-2 rounded-2xl">
          <motion.div 
            className="absolute inset-0 rounded-2xl border-2 border-[#ff1e1e]/50"
            animate={{ 
              boxShadow: ['0px 0px 5px rgba(255,30,30,0.4)', '0px 0px 30px rgba(255,30,30,1)', '0px 0px 5px rgba(255,30,30,0.4)'],
              borderColor: ['rgba(255,30,30,0.5)', 'rgba(255,30,30,1)', 'rgba(255,30,30,0.5)'],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1e1e]/20 to-transparent blur-[25px] opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <img src="/logo.png" alt="Transport Speed Selidbe" className="h-16 md:h-24 w-auto relative z-10 drop-shadow-[0_5px_15px_rgba(255,30,30,0.4)] group-hover:scale-105 group-hover:drop-shadow-[0_5px_25px_rgba(255,30,30,0.6)] transition-all duration-500" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 text-base font-semibold">
          <a href="#" className="hover:text-[#ff1e1e] transition-colors">Početna</a>
          <a href="#usluge" className="hover:text-[#ff1e1e] transition-colors">Usluge</a>
          <a href="#cenovnik" className="hover:text-[#ff1e1e] transition-colors">Cenovnik</a>
          <a href="#recenzije" className="hover:text-[#ff1e1e] transition-colors">Recenzije</a>
          <a href="#faq" className="hover:text-[#ff1e1e] transition-colors">FAQ</a>
          <a href="#kontakt" className="hover:text-[#ff1e1e] transition-colors">Kontakt</a>
          <a href="tel:0645055050" className="flex items-center gap-2 bg-[#ff1e1e]/10 text-[#ff1e1e] border-2 border-[#ff1e1e] hover:bg-[#ff1e1e] hover:text-white transition-colors px-5 py-2.5 rounded-xl ml-4">
            <Phone size={18} />
            <span className="font-bold">064 505 5050</span>
          </a>
        </nav>

        {/* Mobile Nav Top Bar Actions */}
        <div className="flex xl:hidden items-center gap-3 relative z-50">
          <a href="tel:0645055050" className="flex items-center justify-center bg-[#ff1e1e] text-white p-2.5 rounded-xl border border-red-600">
            <Phone size={20} fill="currentColor" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-white bg-white/5 border border-white/10 rounded-xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 pt-24 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center gap-6 text-xl font-bold xl:hidden px-6 overflow-y-auto pb-10">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">Početna</a>
          <a href="#usluge" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">Usluge</a>
          <a href="#cenovnik" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">Cenovnik</a>
          <a href="#recenzije" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">Recenzije</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">FAQ</a>
          <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ff1e1e] transition-colors">Kontakt</a>
          <a href="tel:0645055050" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-3 bg-[#ff1e1e] text-white w-full py-4 rounded-2xl shadow-lg border border-red-600">
            <Phone size={24} fill="currentColor" />
            <span>Pozovi odmah</span>
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-center px-4 md:px-6 pt-28 pb-12 overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.82),rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1800&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-up mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] font-black uppercase leading-[1.1] tracking-tight">
            Селидбе <span className="text-[#ff1e1e]">Београд</span><br/>
            комби превоз ствари
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed md:leading-relaxed">
            Најпоузданија фирма за селидбе и транспорт намештаја у Београду.<br className="hidden md:block" />
            Нудимо сигурне селидбе станова, кућа и пословних простора. Брз долазак, паковање и заштита ствари уз приступачне цене.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5 pt-6 md:pt-8 w-full">
            <a href="tel:0645055050" className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 bg-[#ff1e1e] hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] text-white rounded-2xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 transition-all duration-300">
              <Phone size={24} fill="currentColor" />
              Pozovi: 064 505 5050
            </a>
            <a href="#kontakt" className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 bg-[#111] hover:border-[#ff1e1e] border border-gray-800 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300">
              <Box size={24} />
              Besplatna procena
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] leading-[1.2] md:text-6xl font-black mb-4 md:mb-6">
            Zašto je <span className="text-[#ff1e1e]">Transport Speed</span> najbolji izbor?
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Od prvog kontakta do istovara poslednjeg komada nameštaja — radimo brzo, bezbedno i profesionalno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: '5 godina iskustva', desc: 'Selimo sve — od malih stanova do luksuznih poslovnih prostora.', icon: Clock },
            { title: 'Kombi i kamioni', desc: 'Pikap, kombi i kamionski prevoz za sve vrste selidbi.', icon: Truck },
            { title: 'Zaštita nameštaja', desc: 'Stretch folija, pucketava folija i profesionalna zaštita.', icon: ShieldCheck },
            { title: 'Fiksna cena', desc: 'Bez skrivenih troškova i čekanja procenitelja.', icon: CheckCircle2 },
          ].map((item, i) => (
            <div key={i} className="bg-[#101010] p-6 md:p-8 rounded-[24px] border border-[#1d1d1d] hover:border-[#ff1e1e] hover:-translate-y-2 transition-all duration-400 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-[#ff1e1e] group-hover:bg-[#ff1e1e] group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#ff1e1e] mb-3 md:mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#101010] p-6 md:p-12 rounded-[20px] text-center border border-white/5">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#ff1e1e] mb-2">
                <StatCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black">Naše <span className="text-[#ff1e1e]">usluge</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3, delay: i * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-[#101010] p-6 md:p-8 rounded-[24px] border border-[#1d1d1d] hover:border-[#ff1e1e] hover:-translate-y-2 transition-all duration-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#ff1e1e] bg-[#ff1e1e]/10 p-3 md:p-4 rounded-xl">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#ff1e1e]">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="cenovnik" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black">Naš <span className="text-[#ff1e1e]">cenovnik</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pricing.map((item, i) => (
            <div key={i} className="bg-[#101010] p-6 md:p-8 rounded-[24px] border border-[#1d1d1d] hover:border-[#ff1e1e] hover:-translate-y-2 transition-all duration-400 flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">{item.title}</h3>
              <p className="text-2xl md:text-3xl font-black text-[#ff1e1e]">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center text-gray-400 px-2 text-sm md:text-base">
          * Cene su podložne promenama u zavisnosti od obima posla. Kontaktirajte nas za tačnu procenu.
        </div>
      </section>

      {/* Reviews */}
      <section id="recenzije" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black mb-3 md:mb-4">Google <span className="text-[#ff1e1e]">recenzije</span></h2>
          <p className="text-base md:text-lg text-gray-400">5.0 ocena • preko 1000 zadovoljnih klijenata</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#101010] p-6 md:p-8 rounded-[25px] border-l-[6px] border-[#ff1e1e] hover:-translate-y-2 transition-all duration-400">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="flex gap-1 text-[#ff1e1e]">
                  {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6 italic">"{review.text}"</p>
              <strong className="text-base md:text-lg text-white font-bold">— {review.author}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-4 md:px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black">FAQ <span className="text-[#ff1e1e]">pitanja</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111] p-6 md:p-8 rounded-2xl border border-[#222]">
              <h4 className="text-lg md:text-xl font-bold text-[#ff1e1e] mb-2 md:mb-3">{faq.q}</h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black">Селидбе <span className="text-[#ff1e1e]">Београд</span> и локације</h2>
        </div>
        <div className="bg-[#101010] p-6 md:p-12 rounded-[25px] border border-[#222] text-center">
          <p className="text-base md:text-xl text-gray-300 leading-loose md:leading-[2.5] font-medium tracking-wide">
            Transport Sped пружа услуге на целој територији Београда. Било да вам је потребна најбржа <strong>селидба Нови Београд</strong>, транспорт опреме и ствари - центар града (Врачар, Дорћол, Стари град), или комби превоз за насеља као што су Земун, Вождовац, Чукарица и Раковица, ми смо ту за вас. Покривамо све београдске општине: Палилула (Карабурма, Борча), Звездара (Миријево), Савски венац (Сењак, Дедиње), Сурчин, Батајница, Гроцка, Обреновац, Барајево и све околне градове у Србији (Панчево, Нова Пазова, Стара Пазова). Наша екипа детаљно познаје Београд, што нам гарантује избор најбоље руте, избегавање гужви и максималну ефикасност.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-gradient-to-br from-[#4d0000] to-[#ff1e1e] p-6 md:p-14 rounded-[30px] shadow-2xl">
            <div className="mb-8 md:mb-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4">Besplatna <span className="text-black">procena</span></h2>
              <p className="text-base md:text-lg text-white/90">Pošaljite zahtev i dobijte ponudu u roku od nekoliko minuta.</p>
            </div>
            <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ime i prezime" className="w-full p-4 md:p-5 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-colors text-base md:text-lg" required />
              <input type="tel" placeholder="Broj telefona" className="w-full p-4 md:p-5 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-colors text-base md:text-lg" required />
              <input type="email" placeholder="Email adresa (opciono)" className="w-full p-4 md:p-5 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-colors text-base md:text-lg" />
              <textarea rows={5} placeholder="Detaljno opišite vašu selidbu..." className="w-full p-4 md:p-5 bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-colors text-base md:text-lg resize-y" required></textarea>
              <button type="submit" className="w-full p-4 md:p-5 bg-black hover:bg-[#111] text-white rounded-2xl font-bold text-lg md:text-xl uppercase tracking-wide transition-colors shadow-xl border border-white/10 mt-2">
                Pošalji zahtev
              </button>
            </form>
          </div>
          
          <div className="h-[400px] md:h-full md:min-h-[600px] rounded-[30px] overflow-hidden border border-[#222]">
            <iframe 
              className="w-full h-full border-none pointer-events-none md:pointer-events-auto"
              title="Google Maps Location"
              src="https://maps.google.com/maps?q=Sremcica&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020202] py-16 md:py-20 px-4 md:px-6 border-t border-[#111] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-[#ff1e1e]">Transport Speed Selidbe</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-lg text-gray-300">
            <div className="flex items-center gap-3"><MapPin className="text-[#ff1e1e]" /> Gnjionska 26, Sremčica</div>
            <div className="flex items-center gap-3"><Phone className="text-[#ff1e1e]" /> 064 505 5050</div>
            <div className="flex items-center gap-3"><Clock className="text-[#ff1e1e]" /> Otvoreno 24 sata</div>
          </div>
          <div className="pt-12 border-t border-[#222] text-gray-500 font-medium text-sm md:text-base">
            © {new Date().getFullYear()} Transport Speed Selidbe. Sva prava zadržana.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/381645055050" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-[75px] md:h-[75px] bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-all duration-300 z-50 group border-[3px] md:border-[4px] border-[#050505]"
        aria-label="Kontaktirajte nas preko WhatsApp-a"
      >
        <MessageCircle size={28} className="md:w-9 md:h-9 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </a>
    </div>
  );
}