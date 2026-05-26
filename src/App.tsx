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
  { title: 'Kombi prevoz', price: 'Od 3000 RSD' },
  { title: 'Radnici po satu', price: '1200 RSD/h' },
  { title: 'Pucketava folija', price: 'Od 700 RSD' },
  { title: 'Stretch folija', price: 'Od 500 RSD' },
  { title: 'Kutije za pakovanje', price: 'Od 150 RSD' },
  { title: 'Nošenje bez lifta', price: 'Po dogovoru' },
];

const reviews = [
  { text: 'Momci ozbiljni profesionalci, tačni i maksimalno pažljivi.', author: 'Mihajlo Savić' },
  { text: 'Odlična organizacija selidbe bez oštećenja.', author: 'Tatjana' },
  { text: 'Profesionalnost na prvom mestu. Sve preporuke.', author: 'Boban Mišić' },
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
        <div className="flex items-center relative z-50">
          <img src="/logo.png" alt="Transport Speed Selidbe" className="h-16 md:h-24 w-auto drop-shadow-xl" />
        </div>
        
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
            Profesionalne <span className="text-[#ff1e1e]">Selidbe</span><br/>
            Bez Stresa
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed md:leading-relaxed">
            Specijalizovana firma za selidbe i transport robe u Beogradu.<br className="hidden md:block" />
            Brze • Sigurne • Pouzdane selidbe sa preko 1000+ zadovoljnih klijenata.
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
              <div className="flex gap-1 text-[#ff1e1e] mb-4 md:mb-6">
                {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
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

      {/* Map & Coverage */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] leading-tight md:text-6xl font-black">Mapa <span className="text-[#ff1e1e]">pokrivenosti</span></h2>
        </div>
        <div className="bg-[#101010] p-6 md:p-12 rounded-[25px] border border-[#222] text-center">
          <p className="text-base md:text-xl text-gray-300 leading-loose md:leading-[2.5] font-medium tracking-wide">
            Beograd • Novi Beograd • Zemun • Voždovac • Rakovica • Čukarica • Dorćol • Senjak • Vračar • Surčin • Pančevo • Batajnica • Mirijevo • Karaburma • Žarkovo • Vidikovac • Borča • Grocka • Obrenovac • Nova Pazova • Stara Pazova • Lazarevac • Sopot • Barajevo
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