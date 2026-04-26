import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ka" | "en";

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.menu": "Menu",
  "nav.about": "About",
  "nav.gallery": "Gallery",
  "nav.visit": "Visit",
  "nav.callReserve": "Call to reserve",
  "nav.directions": "Get directions",
  // brand
  "brand.name": "Acharulebi",
  "brand.tagline": "on Lagidze",
  // hero
  "hero.eyebrow": "ლაღიძეზე · since the old days",
  "hero.title": "Authentic Adjarian Khachapuri in the Heart of Tbilisi",
  "hero.sub": "A local favorite for generations — affordable, authentic, unforgettable. Step downstairs into a warm Tbilisi tradition on Rustaveli Avenue.",
  "hero.cta.menu": "View the Menu",
  "hero.cta.dir": "Get Directions",
  "hero.trust.reviews": "4.2 · 820 reviews",
  "hero.trust.price": "10–20 GEL per person",
  "hero.trust.rec": "Recommended by locals & hotels",
  // about strip
  "about.eyebrow": "Our Story",
  "about.title.l1": "A beloved Tbilisi spot,",
  "about.title.l2": "rooted in Georgian tradition.",
  "about.desc": "Tucked beneath Rustaveli Avenue, Acharulebi on Lagidze has been serving generations of Tbilisi families. We never chased trends — we kept doing what we know best: real Adjarian khachapuri, hot khinkali, and the cold Lagidze waters our grandparents grew up with.",
  "about.feat1.t": "Family-friendly",
  "about.feat1.d": "Generous portions, warm welcomes, and a calm pace — bring everyone.",
  "about.feat2.t": "Underground charm",
  "about.feat2.d": "Brick arches, candle glow, and that unmistakable old-Tbilisi feeling.",
  "about.readMore": "Read more about us",
  "about.since": "since the 60s",
  "about.tradition": "a Tbilisi tradition",
  // highlights
  "high.eyebrow": "Menu Highlights",
  "high.title": "What our guests come back for",
  "high.desc": "A short list of the dishes that built our reputation. The full menu has dozens more — soups, salads, grills, and homemade desserts.",
  "high.full": "See the full menu",
  "dish.acharuli.name": "Adjarian Khachapuri",
  "dish.acharuli.desc": "Boat-shaped sourdough filled with bubbling sulguni, crowned with a golden yolk and butter.",
  "dish.khinkali.name": "Khinkali Dumplings",
  "dish.khinkali.desc": "Hand-twisted dumplings filled with spiced beef and pork. Hold by the stem, sip the broth.",
  "dish.lagidze.name": "Lagidze Waters",
  "dish.lagidze.desc": "The legendary Tbilisi sodas — tarragon, cream, chocolate. A sip of Soviet-era Georgia.",
  // history
  "hist.eyebrow": "since 1887 — the recipe",
  "hist.title": "Taste a Piece of Georgian History",
  "hist.desc": "From Mitrofan Lagidze's legendary fountain waters of old Tbilisi to the cheese-laden boats of Adjara — every plate at our table carries a story. Sit down, tear the bread, swirl the yolk. You're tasting more than a meal.",
  // reviews
  "rev.eyebrow": "What Guests Say",
  "rev.title": "Loved by locals, discovered by travelers",
  "rev.desc": "4.2 stars across 820 reviews — from neighborhood regulars to first-time visitors.",
  "rev.1.text": "Best khachapuri in the world. I have been coming here since I was a child.",
  "rev.1.origin": "Tbilisi local",
  "rev.2.text": "Affordable and not a tourist trap — this is the real Georgia.",
  "rev.2.origin": "Visitor from Berlin",
  "rev.3.text": "My dad's favorite place since Soviet times. Nothing has changed, in the best way.",
  "rev.3.origin": "Regular for 30 years",
  "rev.4.text": "Cozy underground atmosphere, Lagidze water, perfect cheese boats. Magical.",
  "rev.4.origin": "Travel writer",
  // visit cta
  "visit.eyebrow": "come hungry",
  "visit.title": "We're open daily until 10 PM",
  "visit.desc": "Walk in, dine in, or take it home. No reservations needed for small parties — give us a call for groups.",
  "visit.address": "Address",
  "visit.address.v": "24 Shota Rustaveli Avenue, Tbilisi",
  "visit.phone": "Phone",
  "visit.hours": "Hours",
  "visit.hours.v": "Every day · until 10 PM",
  "visit.plan": "Plan your visit",
  // menu page
  "menu.eyebrow": "The Menu",
  "menu.title": "Honest Georgian cooking, served generously",
  "menu.desc": "Most guests dine well for 10–20 GEL. Cash or card welcome.",
  "menu.specialties": "specialties",
  "menu.board.title": "The original menu board",
  "menu.board.desc": "Hand-painted prices, just as you'll see them in the dining room.",
  "menu.signature": "signature",
  "menu.sec.khachapuri": "Khachapuri",
  "menu.sec.khinkali": "Khinkali & Hot Plates",
  "menu.sec.cold": "Cold Starters",
  "menu.sec.drinks": "Drinks",
  // about page
  "ap.eyebrow": "Our Story",
  "ap.h1.l1": "A Tbilisi tradition,",
  "ap.h1.l2": "still served warm.",
  "ap.title": "From Soviet-era Tbilisi to today",
  "ap.desc": "Acharulebi on Lagidze was born in an era when Tbilisi was a city of poets, fountains, and Mitrofan Lagidze's famous mineral waters. We took our name from that street and that spirit — and we've been feeding the neighborhood ever since.",
  "ap.p1": "Our underground dining room has barely changed in decades. Brick arches, white tablecloths, the soft clink of glasses, and the unmistakable smell of fresh khachapuri pulled from a stone oven. Some guests have been coming here since they were children. Many bring their own children now.",
  "ap.p2": "We are not a tourist trap. We are not trying to be modern. We are simply trying to do one thing extraordinarily well — serve the food that Georgia has loved for centuries, at a price a working family can afford.",
  "ap.p3": "If you're visiting Tbilisi for the first time and a local tells you to come here, listen to them. If you've lived here all your life, you already know.",
  "ap.values.eyebrow": "What we believe in",
  "ap.values.title": "Three things we'll never change",
  "ap.v1.t": "Authenticity over fashion",
  "ap.v1.d": "Our recipes are old. We trust them. The dough is hand-kneaded, the cheese is real Georgian sulguni, the dumplings are folded by hand every morning.",
  "ap.v2.t": "Affordable, always",
  "ap.v2.d": "10 to 20 GEL per person, full stop. A neighborhood restaurant should be a place anyone can afford to come back to.",
  "ap.v3.t": "A warm welcome",
  "ap.v3.d": "Whether you're a regular of thirty years or you wandered in tonight from Rustaveli Avenue, you'll be treated the same way: like family.",
  // gallery
  "gal.eyebrow": "Gallery",
  "gal.title": "Cheese, candlelight, and Lagidze fizz",
  "gal.desc": "A few moments from the room. The food is even better in person.",
  // contact
  "ct.eyebrow": "Find Us",
  "ct.title": "On Rustaveli Avenue, just downstairs",
  "ct.desc": "Walk in or call ahead — we keep things simple.",
  "ct.address": "Address",
  "ct.addr.l1": "24 Shota Rustaveli Avenue",
  "ct.addr.l2": "Tbilisi, Georgia",
  "ct.openMaps": "Open in Maps",
  "ct.phone": "Phone",
  "ct.tapCall": "Tap to call",
  "ct.hours": "Hours",
  "ct.hours.l1": "Open every day",
  "ct.hours.l2": "Until 10:00 PM",
  "ct.getting": "Getting here",
  "ct.get.l1": "2 min from Rustaveli Metro",
  "ct.get.l2": "Look for the staircase down",
  // footer
  "ft.about": "A beloved Tbilisi address for Adjarian khachapuri, hand-pulled dumplings, and Soviet-era Lagidze waters — generous, honest, and unforgettable.",
  "ft.visit": "Visit",
  "ft.openDaily": "Open daily until 10 PM",
  "ft.explore": "Explore",
  "ft.menu": "The Menu",
  "ft.story": "Our Story",
  "ft.gallery": "Gallery",
  "ft.contact": "Contact",
};

const ka: Dict = {
  "nav.home": "მთავარი",
  "nav.menu": "მენიუ",
  "nav.about": "ჩვენ შესახებ",
  "nav.gallery": "გალერეა",
  "nav.visit": "მისამართი",
  "nav.callReserve": "დარეკეთ ჯავშნისთვის",
  "nav.directions": "მარშრუტი",
  "brand.name": "აჭარულები",
  "brand.tagline": "ლაღიძეზე",
  "hero.eyebrow": "ლაღიძეზე · ძველი დღეებიდან",
  "hero.title": "ნამდვილი აჭარული ხაჭაპური თბილისის გულში",
  "hero.sub": "თაობების საყვარელი ადგილი — ხელმისაწვდომი, ავთენტური, დაუვიწყარი. ჩამოდით ქვევით თბილისურ ტრადიციაში რუსთაველის გამზირზე.",
  "hero.cta.menu": "ნახეთ მენიუ",
  "hero.cta.dir": "მარშრუტი",
  "hero.trust.reviews": "4.2 · 820 შეფასება",
  "hero.trust.price": "10–20 ლარი ერთ სტუმარზე",
  "hero.trust.rec": "რეკომენდებული ადგილობრივებისგან",
  "about.eyebrow": "ჩვენი ისტორია",
  "about.title.l1": "თბილისის საყვარელი ადგილი,",
  "about.title.l2": "ქართულ ტრადიციაში ფესვგადგმული.",
  "about.desc": "რუსთაველის გამზირის ქვეშ, აჭარულები ლაღიძეზე უკვე თაობებია ემსახურება თბილისურ ოჯახებს. ჩვენ არასდროს დავდევდით მოდას — ვაკეთებთ იმას, რაც კარგად ვიცით: ნამდვილი აჭარული ხაჭაპური, ცხელი ხინკალი და ლაღიძის წყლები, რომელზეც ჩვენი ბაბუა-ბებიები გაიზარდნენ.",
  "about.feat1.t": "ოჯახური გარემო",
  "about.feat1.d": "უხვი ულუფები, თბილი მისალმება და მშვიდი ტემპი — მოიყვანეთ ყველანი.",
  "about.feat2.t": "მიწისქვეშა ხიბლი",
  "about.feat2.d": "აგურის თაღები, სანთლის შუქი და ძველი თბილისის შეუცვლელი განცდა.",
  "about.readMore": "წაიკითხეთ მეტი ჩვენ შესახებ",
  "about.since": "60-იანებიდან",
  "about.tradition": "თბილისური ტრადიცია",
  "high.eyebrow": "მენიუს რჩეული",
  "high.title": "რისთვის ბრუნდებიან ჩვენი სტუმრები",
  "high.desc": "მოკლე სია კერძებისა, რომლებმაც ჩვენი რეპუტაცია შექმნა. სრულ მენიუში ათეულობით სხვაა — სუპები, სალათები, შემწვრები და სახლის დესერტები.",
  "high.full": "ნახეთ სრული მენიუ",
  "dish.acharuli.name": "აჭარული ხაჭაპური",
  "dish.acharuli.desc": "ნავის ფორმის ცომი ადუღებული სულგუნით, ოქროსფერი გულითა და კარაქით.",
  "dish.khinkali.name": "ხინკალი",
  "dish.khinkali.desc": "ხელით დაგრეხილი ხინკალი ცხარე საქონლისა და ღორის ხორცით. დაიჭირეთ კუდით, შეუსვით წვენი.",
  "dish.lagidze.name": "ლაღიძის წყალი",
  "dish.lagidze.desc": "ლეგენდარული თბილისური გამაგრილებელი — ტარხუნა, კრემი, შოკოლადი. საბჭოური საქართველოს ერთი ყლუპი.",
  "hist.eyebrow": "1887 წლიდან — რეცეპტი",
  "hist.title": "გასინჯეთ ქართული ისტორიის ნაჭერი",
  "hist.desc": "მიტროფანე ლაღიძის ლეგენდარული წყლებიდან ძველ თბილისში, აჭარის ყველიანი ნავებამდე — ჩვენი მაგიდის ყოველი კერძი ისტორიას ატარებს. დაჯექით, გატეხეთ პური, აურიეთ გული. თქვენ უბრალო კერძზე მეტს გემოვნებთ.",
  "rev.eyebrow": "რას ამბობენ სტუმრები",
  "rev.title": "უყვართ ადგილობრივებს, აღმოჩენილი მოგზაურების მიერ",
  "rev.desc": "4.2 ვარსკვლავი 820 შეფასებაში — უბნის მუდმივი სტუმრებიდან პირველად მოსულებამდე.",
  "rev.1.text": "საუკეთესო ხაჭაპური მსოფლიოში. ბავშვობიდან დავდივარ აქ.",
  "rev.1.origin": "თბილისელი",
  "rev.2.text": "ხელმისაწვდომი და არ არის ტურისტული ხაფანგი — ეს ნამდვილი საქართველოა.",
  "rev.2.origin": "სტუმარი ბერლინიდან",
  "rev.3.text": "მამაჩემის საყვარელი ადგილი საბჭოთა დროიდან. არაფერი შეცვლილა, საუკეთესო გაგებით.",
  "rev.3.origin": "30 წლის მუდმივი სტუმარი",
  "rev.4.text": "მყუდრო მიწისქვეშა ატმოსფერო, ლაღიძის წყალი, სრულყოფილი ხაჭაპური. ჯადოსნურია.",
  "rev.4.origin": "მოგზაურობის ჟურნალისტი",
  "visit.eyebrow": "მოდით მშივრები",
  "visit.title": "ღიაა ყოველდღე 22:00-მდე",
  "visit.desc": "შემოდით, ისადილეთ ან წაიღეთ სახლში. პატარა ჯგუფებისთვის ჯავშანი არ სჭირდება — დიდი ჯგუფისთვის დაგვირეკეთ.",
  "visit.address": "მისამართი",
  "visit.address.v": "შოთა რუსთაველის გამზირი 24, თბილისი",
  "visit.phone": "ტელეფონი",
  "visit.hours": "სამუშაო საათები",
  "visit.hours.v": "ყოველდღე · 22:00-მდე",
  "visit.plan": "დაგეგმეთ ვიზიტი",
  "menu.eyebrow": "მენიუ",
  "menu.title": "გულწრფელი ქართული სამზარეულო, უხვად მირთმეული",
  "menu.desc": "სტუმრების უმეტესობა კარგად ისადილებს 10–20 ლარად. ნაღდი და ბარათი მიიღება.",
  "menu.specialties": "სპეციალობები",
  "menu.board.title": "ორიგინალური მენიუს დაფა",
  "menu.board.desc": "ხელით დახატული ფასები, ისე როგორც დარბაზში დაინახავთ.",
  "menu.signature": "ფირმისეული",
  "menu.sec.khachapuri": "ხაჭაპური",
  "menu.sec.khinkali": "ხინკალი და ცხელი კერძები",
  "menu.sec.cold": "ცივი წინაკერძები",
  "menu.sec.drinks": "სასმელები",
  "ap.eyebrow": "ჩვენი ისტორია",
  "ap.h1.l1": "თბილისური ტრადიცია,",
  "ap.h1.l2": "კვლავ თბილად მირთმეული.",
  "ap.title": "საბჭოური თბილისიდან დღემდე",
  "ap.desc": "აჭარულები ლაღიძეზე დაიბადა ეპოქაში, როცა თბილისი იყო პოეტების, შადრევნებისა და მიტროფანე ლაღიძის ცნობილი მინერალური წყლების ქალაქი. ჩვენ ავიღეთ სახელი იმ ქუჩიდან და იმ სულისკვეთებიდან — და მას შემდეგ ვკვებავთ უბანს.",
  "ap.p1": "ჩვენი მიწისქვეშა დარბაზი ათწლეულების მანძილზე თითქმის არ შეცვლილა. აგურის თაღები, თეთრი სუფრები, ჭიქების ნაზი წკრიალი და ღუმელიდან ამოღებული ახალი ხაჭაპურის შეუცვლელი სუნი. ზოგი სტუმარი აქ ბავშვობიდან დადის. ბევრი ახლა საკუთარ შვილებს მოჰყავს.",
  "ap.p2": "ჩვენ არ ვართ ტურისტული ხაფანგი. არ ვცდილობთ თანამედროვე ვიყოთ. უბრალოდ ვცდილობთ ერთი რამ ვაკეთოთ შესანიშნავად — მივართვათ ის საჭმელი, რომელიც საქართველოს საუკუნეების განმავლობაში უყვარს, ფასად, რომელიც მუშა ოჯახს შეუძლია.",
  "ap.p3": "თუ პირველად ხართ თბილისში და ადგილობრივი გეტყვით, რომ აქ მოხვიდეთ — დაუჯერეთ. თუ მთელი ცხოვრება აქ ცხოვრობთ, უკვე იცით.",
  "ap.values.eyebrow": "რის გვჯერა",
  "ap.values.title": "სამი რამ, რასაც არასდროს შევცვლით",
  "ap.v1.t": "ავთენტურობა მოდის ნაცვლად",
  "ap.v1.d": "ჩვენი რეცეპტები ძველია. ჩვენ მათი გვჯერა. ცომი ხელით ზელილია, ყველი ნამდვილი ქართული სულგუნია, ხინკალი ყოველ დილით ხელით იხვევა.",
  "ap.v2.t": "ხელმისაწვდომი, ყოველთვის",
  "ap.v2.d": "10-დან 20 ლარამდე ერთ სტუმარზე, წერტილი. უბნის რესტორანი უნდა იყოს ადგილი, სადაც ნებისმიერს დაბრუნება შეუძლია.",
  "ap.v3.t": "თბილი მისალმება",
  "ap.v3.d": "ოცდაათი წლის მუდმივი სტუმარი ხართ თუ დღეს რუსთაველიდან შემოხვედით — ერთნაირად მოგექცევით: როგორც ოჯახს.",
  "gal.eyebrow": "გალერეა",
  "gal.title": "ყველი, სანთლები და ლაღიძის ბუშტუკები",
  "gal.desc": "რამდენიმე მომენტი დარბაზიდან. რეალურად კიდევ უკეთესია.",
  "ct.eyebrow": "მოგვძებნეთ",
  "ct.title": "რუსთაველის გამზირზე, ქვევით",
  "ct.desc": "შემოდით ან დაგვირეკეთ — ვაკეთებთ მარტივად.",
  "ct.address": "მისამართი",
  "ct.addr.l1": "შოთა რუსთაველის გამზირი 24",
  "ct.addr.l2": "თბილისი, საქართველო",
  "ct.openMaps": "გახსენით რუკაზე",
  "ct.phone": "ტელეფონი",
  "ct.tapCall": "დასარეკად დააჭირეთ",
  "ct.hours": "სამუშაო საათები",
  "ct.hours.l1": "ღიაა ყოველდღე",
  "ct.hours.l2": "22:00-მდე",
  "ct.getting": "როგორ მოხვიდეთ",
  "ct.get.l1": "2 წუთი მეტრო რუსთაველიდან",
  "ct.get.l2": "მოძებნეთ ჩასასვლელი კიბე",
  "ft.about": "თბილისის საყვარელი მისამართი აჭარული ხაჭაპურისთვის, ხელით ნაკეთი ხინკლისთვის და საბჭოური ლაღიძის წყლისთვის — უხვი, გულწრფელი და დაუვიწყარი.",
  "ft.visit": "მისამართი",
  "ft.openDaily": "ღიაა ყოველდღე 22:00-მდე",
  "ft.explore": "გვერდები",
  "ft.menu": "მენიუ",
  "ft.story": "ჩვენი ისტორია",
  "ft.gallery": "გალერეა",
  "ft.contact": "კონტაქტი",
};

const dicts: Record<Lang, Dict> = { en, ka };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const I18nContext = createContext<Ctx>({ lang: "ka", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ka" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const t = (key: string) => dicts[lang][key] ?? dicts.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
