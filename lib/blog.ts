// Blog articles. Add a new post by adding an entry to POSTS (newest first); the blog pages pick it up.
// Every post sets its own search title, keywords and FAQ, and links to the shop pages it talks about.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "links"; title: string; items: Array<{ label: string; href: string }> };

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string; // shown in Google; keep it under about 60 characters
  excerpt: string; // also the meta description
  keywords: string[];
  category: string;
  date: string; // ISO date
  readMinutes: number;
  image: string;
  imageAlt: string;
  body: Block[];
  faq: Array<{ q: string; a: string }>;
}

const DATE = "2026-11-03";

export const POSTS: BlogPost[] = [
  {
    slug: "diwali-home-decor-ideas-siliguri",
    title: "Diwali Home Decor Ideas for Siliguri Homes: Lights, Lanterns and Diyas",
    seoTitle: "Diwali Lights and Diya Decor Ideas for Siliguri Homes",
    excerpt:
      "How to light up your home for Diwali and Kali Puja in Siliguri with string lights, lanterns, brass diyas and tea lights, with a simple plan for every budget.",
    keywords: ["Diwali home decor Siliguri", "Diwali lights Siliguri", "akash kandil", "brass diya Siliguri", "floating diyas", "Diwali decoration ideas home"],
    category: "Decor",
    date: DATE,
    readMinutes: 4,
    image: "/assets/hd-string-lights.webp",
    imageAlt: "A home decorated for Diwali with string lights on the wall and lit diyas on the floor",
    body: [
      { type: "p", text: "The quickest way to decorate a home for Diwali is to work in two layers: light up the outside first, then add diyas and tea lights inside. You can do both in an evening, and most of it can be used again next year." },
      { type: "h2", text: "Light up the outside" },
      { type: "ul", items: ["Run LED string lights along the balcony rail, windows or stairs. This is what people see from the road.", "Hang a paper lantern, or kandil, at the door or balcony with a light inside.", "Add a star lantern to a window that faces the street."] },
      { type: "tip", text: "Paper lanterns are for hanging, not flying. West Bengal has restricted unauthorised sky lanterns during the festive season, so please check the current rules." },
      { type: "h2", text: "Add diyas inside" },
      { type: "ul", items: ["Keep a brass lamp in your puja corner and an aarti diya ready for Lakshmi Puja or Kali Puja.", "Fill a brass bowl with water, flower petals and floating diyas, and place it by the entrance.", "Set coloured glass tea light holders along a shelf or table for a soft glow."] },
      { type: "h2", text: "Clay diyas or brass diyas?" },
      { type: "table", head: ["Type", "Good for", "Lasts"], rows: [["Clay diyas", "Rows along steps and balconies", "One or a few festivals"], ["Brass diyas", "Puja corner and aarti", "Many years with cleaning"], ["Glass tea light holders", "Shelves and tables", "Many years"]] },
      { type: "h2", text: "A simple plan for every budget" },
      { type: "table", head: ["Budget", "What to buy", "Best for"], rows: [["Around ₹1,000", "String lights, a paper lantern and clay diyas", "A flat or a small balcony"], ["Around ₹2,000", "Add a brass flower bowl and glass tea light holders", "Reaching the minimum order with decor alone"], ["Around ₹3,000", "Add a brass lamp and an aarti diya", "A full puja corner"]] },
      { type: "h2", text: "Keep it safe" },
      { type: "p", text: "Keep diyas and candles away from curtains and paper lanterns, and never leave a flame burning when you go out or go to sleep. Use an LED light in a paper lantern, not an open flame." },
      { type: "links", title: "Shop Diwali decor", items: [{ label: "All Diwali home decor", href: "/collections/home-decor" }, { label: "Warm LED string lights", href: "/products/warm-led-string-lights" }, { label: "Hanging paper lantern", href: "/products/hanging-paper-lantern-kandil" }, { label: "Brass aarti diya", href: "/products/brass-aarti-diya" }, { label: "Clay diyas", href: "/products/hand-painted-clay-diyas" }] },
    ],
    faq: [
      { q: "How can I decorate my home for Diwali on a small budget?", a: "Start with LED string lights, one paper lantern and a pack of clay diyas. These cover the outside and the entrance, and the lights and lantern can be used again next year." },
      { q: "What is a kandil?", a: "A kandil, or akash kandil, is a traditional hanging paper lantern. It is hung at a door or balcony with a light inside, and it is not meant to fly." },
      { q: "Can I order Diwali lights and diyas with crackers in Siliguri?", a: "Yes. Siliguri Pataka lets you mix lights, diyas, crackers and gift hampers in one order, with delivery the same day or the next day within Siliguri." },
    ],
  },
  {
    slug: "siliguri-firecracker-mela-guide",
    title: "Siliguri Firecracker Mela (Baji Bazar) at Kawakhali: A Complete Guide",
    seoTitle: "Siliguri Firecracker Mela at Kawakhali: Complete Guide",
    excerpt:
      "What the Siliguri Fireworks Mela at Kawakhali ground is, how it has worked in past years, what to check before you go, and how to get crackers delivered instead.",
    keywords: [
      "firecrackers in siliguri",
      "siliguri cracker market photos",
      "wholesale crackers shop in siliguri",
      "siliguri cracker market 2026",
      "rony enterprise siliguri",
      "pataka shop",
      "cracker wholesale market near me",
      "Siliguri firecracker mela",
      "Siliguri fireworks mela",
      "baji bazar Siliguri",
      "Kawakhali cracker market",
      "green crackers Siliguri",
    ],
    category: "Local Guide",
    date: DATE,
    readMinutes: 6,
    image: "/assets/blog-cracker-stall.webp",
    imageAlt: "Shoppers at a Diwali firecracker stall in India",
    body: [
      { type: "p", text: "Every year before Diwali and Kali Puja, people in Siliguri start asking the same question: where is the cracker market this year? For the last few years the best-known answer has been the Siliguri Fireworks Mela, also called the Baji Bazar, at Kawakhali ground. Here is what is known about it and how to plan your visit." },
      { type: "h2", text: "What is the Siliguri Fireworks Mela?" },
      { type: "p", text: "It is an organised fireworks fair where licensed traders sell crackers from stalls in one place. Millennium Post reported in October 2024 that the fair was organised by the Darjeeling district administration at Kawakhali ground, with 50 stalls set up by traders from Siliguri and the Siliguri Mahakuma Parishad area. Traders had to apply for permits, and only green crackers were allowed." },
      { type: "p", text: "The same report said the Baji Bazar began the year before at the request of traders, to create a central market for better quality crackers and to curb illegal and spurious fireworks. Most of the green crackers came from Sivakasi in Tamil Nadu, and some from Kolkata." },
      { type: "h2", text: "Past years at a glance" },
      { type: "table", head: ["Detail", "What was reported in 2024"], rows: [["Venue", "Kawakhali ground, Siliguri"], ["Organiser", "Darjeeling district administration"], ["Stalls", "50"], ["Duration", "12 days, ending 1 November"], ["Allowed products", "Green crackers only"]] },
      { type: "tip", text: "Dates and details can change every year. Before you travel, check this year's notice from the district administration or the local news." },
      { type: "h2", text: "Tips for visiting the mela" },
      { type: "ul", items: ["Go on a weekday or early in the run. The last days before Diwali are the busiest.", "Carry a sturdy bag, because boxes of crackers add up quickly.", "Check for the green cracker logo and the QR code on the pack.", "Plan how you will get home. Avoid carrying crackers on crowded public transport.", "Keep crackers away from heat and flames on the way home, and don't leave them in a hot vehicle."] },
      { type: "h2", text: "Mela or home delivery: which suits you?" },
      { type: "table", head: ["", "Going to a mela", "Home delivery in Siliguri"], rows: [["Good for", "Seeing many stalls and comparing in person", "Saving time and avoiding crowds"], ["Carrying", "You carry everything home", "Delivered to your door"], ["Gifts and decor", "Usually separate shops", "Same order as your crackers"], ["Timing", "During fair hours", "Same day or next day"]] },
      { type: "p", text: "If you would rather skip the traffic around Kawakhali, Siliguri Pataka delivers crackers, gift hampers, diyas and rangoli across Siliguri, the same day or the next day. Siliguri Pataka is a separate shop and is not part of the mela." },
      { type: "h2", text: "Finding a wholesale crackers shop in Siliguri or cracker wholesale market near me" },
      { type: "p", text: "When preparing for festive celebrations, many customers search for a cracker wholesale market near me or an authentic wholesale crackers shop in siliguri to get direct Sivakasi rates. Reputed dealers like Rony Enterprise Siliguri as well as the seasonal stalls at the siliguri cracker market 2026 draw large crowds from across North Bengal." },
      { type: "p", text: "Browsing siliguri cracker market photos gives you an idea of the wide variety of firecrackers in siliguri available during festival time. If you want to avoid the traffic and heavy lifting, Siliguri Pataka is your direct online pataka shop, delivering 100% certified green crackers straight to your home." },
      { type: "links", title: "Shop from home", items: [{ label: "Our 3 mega packs", href: "/collections/mega-packs" }, { label: "All crackers and gifts", href: "/collections/all" }, { label: "Delivery areas in Siliguri", href: "/delivery-areas" }, { label: "Green cracker rules", href: "/blog/green-crackers-west-bengal-rules" }] },
    ],
    faq: [
      { q: "Where is the firecracker mela in Siliguri?", a: "In recent years the Siliguri Fireworks Mela has been held at Kawakhali ground, organised by the Darjeeling district administration. Please check this year's notice, as details can change." },
      { q: "Where can I find a cracker wholesale market near me or wholesale crackers shop in Siliguri?", a: "Prominent options for firecrackers in Siliguri include licensed wholesale dealers like Rony Enterprise Siliguri, the seasonal Siliguri cracker market 2026 at Kawakhali ground, and the online pataka shop Siliguri Pataka (siliguripataka.shop)." },
      { q: "Where can I see Siliguri cracker market photos?", a: "Siliguri cracker market photos and stall updates are regularly shared by local news portals during Diwali and Kali Puja. You can also view our complete product photo gallery online at Siliguri Pataka." },
      { q: "Are only green crackers sold at the Siliguri mela?", a: "Reports from 2024 say that only green crackers were allowed at the fair, and traders needed permits." },
      { q: "Is Siliguri Pataka part of the mela?", a: "No. Siliguri Pataka is a separate shop that delivers to homes within Siliguri." },
    ],
  },
  {
    slug: "buy-diwali-crackers-online-siliguri",
    title: "How to Buy Diwali Crackers Online in Siliguri: A Simple Guide",
    seoTitle: "Buy Diwali Crackers Online in Siliguri: Simple Guide",
    excerpt:
      "How to order crackers, gift hampers and diyas for Diwali and Kali Puja in Siliguri: what to pick, how much to spend, and how same-day and next-day delivery works.",
    keywords: ["buy crackers online Siliguri", "Diwali crackers Siliguri", "pataka Siliguri", "firecrackers home delivery Siliguri", "Kali Puja crackers Siliguri"],
    category: "Buying Guide",
    date: DATE,
    readMinutes: 5,
    image: "/assets/blog-crackers.webp",
    imageAlt: "Sparklers, flower pots and aerial shots laid out on a table for Diwali",
    body: [
      { type: "p", text: "Diwali and Kali Puja are the busiest days of the year in Siliguri, and the markets around Hill Cart Road and Sevoke Road fill up fast. Ordering online lets you compare prices, see what is in stock and have it all brought to your door, without carrying heavy boxes through festival traffic." },
      { type: "h2", text: "Step 1: Decide what kind of celebration you want" },
      { type: "ul", items: ["A family evening at home: a mega pack with sparklers, flower pots and chakkars is the easiest choice.", "A terrace or open ground: add sky shot cakes and rockets for a big finish.", "Children at home: choose pop pops, magic snakes and colour smoke, and keep an adult nearby."] },
      { type: "h2", text: "Step 2: Add gifts and decor to the same order" },
      { type: "p", text: "Siliguri Pataka sells crackers, gift hampers, clay diyas, rangoli colours and marigold torans in one place. Putting them in the same cart means one delivery instead of several trips to the market." },
      { type: "h2", text: "Step 3: Check the minimum order and delivery" },
      { type: "table", head: ["What", "Details"], rows: [["Minimum order", "₹2,000 in total"], ["Delivery speed", "Same day or next day"], ["Delivery charge", "Free within Siliguri"], ["Free gift", "1 lighter with every order"], ["Delivery area", "Only within Siliguri"], ["Payment", "UPI, or cash on delivery where available"]] },
      { type: "h2", text: "Step 4: Order early" },
      { type: "p", text: "Popular boxes and sky shots can sell out in the last days before Diwali, and the roads get slow. Order a few days ahead so that everything is ready before the evening of Lakshmi Puja or Kali Puja." },
      { type: "h2", text: "What to check when your order arrives" },
      { type: "ol", items: ["Count the items against your order.", "Check the packs for damage or dampness.", "Store crackers in a cool, dry place, away from flames and out of reach of children.", "If anything is wrong, contact us within 48 hours with photos."] },
      { type: "tip", text: "Keep your phone handy after ordering. Our delivery person may call to confirm your landmark in Siliguri." },
      { type: "links", title: "Start here", items: [{ label: "Mega packs", href: "/collections/mega-packs" }, { label: "Sparklers", href: "/collections/sparklers" }, { label: "Gift hampers", href: "/collections/gift-hampers" }, { label: "Delivery areas", href: "/delivery-areas" }] },
    ],
    faq: [
      { q: "Do you deliver crackers across Siliguri?", a: "Yes, we deliver within Siliguri, usually the same day or the next day. We don't deliver outside Siliguri." },
      { q: "What is the minimum order?", a: "The minimum order is ₹2,000 in total. You can mix crackers, hampers and decor." },
      { q: "Do I get anything free?", a: "Yes. Every order comes with 1 lighter free." },
    ],
  },
  {
    slug: "best-cracker-combos-siliguri-budget",
    title: "Which Mega Cracker Pack Should You Buy? ₹2,499 vs ₹4,999 vs ₹9,999",
    seoTitle: "Best Diwali Cracker Pack in Siliguri: ₹2,499 to ₹9,999",
    excerpt:
      "Compare our 3 mega cracker packs for Diwali in Siliguri: what is inside each one, how much you save compared with buying separately, and which suits your family.",
    keywords: ["cracker combo Siliguri", "mega cracker pack price", "family cracker box", "crackers under 5000", "best Diwali cracker pack"],
    category: "Buying Guide",
    date: DATE,
    readMinutes: 5,
    image: "/assets/mega-family.webp",
    imageAlt: "A large carton of assorted Diwali crackers",
    body: [
      { type: "p", text: "Buying crackers one by one takes time, and it is easy to end up with too many of one thing. A mega pack gives you a good mix for one price, and it costs less than buying the same items separately." },
      { type: "h2", text: "The 3 packs at a glance" },
      { type: "table", head: ["Pack", "Price", "Bought separately", "You save"], rows: [["Mega Starter Pack", "₹2,499", "₹3,145", "₹646 (21%)"], ["Mega Family Pack", "₹4,999", "₹7,323", "₹2,324 (32%)"], ["Mega Grand Show Pack", "₹9,999", "₹13,600", "₹3,601 (26%)"]] },
      { type: "p", text: "The savings are worked out from the prices of the same items in our shop. Prices can change, so please check the product page for today's price. Delivery is free within Siliguri, and every order includes 1 lighter." },
      { type: "h2", text: "Mega Starter Pack: for a small family evening" },
      { type: "p", text: "50 sparklers, 10 flower pots, 20 ground chakkars, 10 rockets and one 30-shot sky cake. It is a complete evening for a small family, and it clears the ₹2,000 minimum order on its own." },
      { type: "h2", text: "Mega Family Pack: the best value" },
      { type: "p", text: "100 sparklers, 20 flower pots, 5 jumbo anars, 40 chakkars, 20 rockets, two sky cakes and a kids box. For ₹2,500 more than the Starter, you get ₹4,178 more crackers at our own prices, which is why this pack has the biggest percentage saving." },
      { type: "h2", text: "Mega Grand Show Pack: for a terrace or ground" },
      { type: "p", text: "Everything you need for a proper show, ending with a 120-shot grand finale cake. It suits a big family, a housing society or a club with a large open space." },
      { type: "h2", text: "How to choose" },
      { type: "ol", items: ["Count the people who will join in, especially children.", "Think about your space. Sky shots and rockets need an open terrace or ground.", "Check the permitted hours for your area, so that you can use everything in time.", "If you are between two packs, compare the saving: the Family Pack saves the most for its price."] },
      { type: "h2", text: "Build your own for ₹2,000" },
      { type: "p", text: "Prefer to choose for yourself? Royal Electric Sparklers (₹349), Deluxe Tri-Color Flower Pots (₹499), Deluxe Ground Chakkar (₹399) and the Kids Fun Fiesta Box (₹899) come to ₹2,146, which clears the minimum order." },
      { type: "tip", text: "A big pack in a small lane is no fun. If you only have a courtyard, buy more sparklers and flower pots, and fewer sky shots." },
      { type: "links", title: "See the packs", items: [{ label: "Mega Starter Pack", href: "/products/mega-starter-pack" }, { label: "Mega Family Pack", href: "/products/mega-family-pack" }, { label: "Mega Grand Show Pack", href: "/products/mega-grand-show-pack" }, { label: "All mega packs", href: "/collections/mega-packs" }] },
    ],
    faq: [
      { q: "Which mega pack is the best value?", a: "The Mega Family Pack at ₹4,999. It saves ₹2,324, or 32%, compared with buying the same items separately." },
      { q: "Which pack suits a small family?", a: "The Mega Starter Pack at ₹2,499 suits one evening for a small family." },
      { q: "Can I build my own box instead?", a: "Yes. Add any products to your cart. The total needs to reach the ₹2,000 minimum order." },
      { q: "Is delivery free on mega packs?", a: "Yes. Delivery within Siliguri is free, and every order comes with 1 lighter." },
    ],
  },
  {
    slug: "green-crackers-west-bengal-rules",
    title: "Green Crackers in West Bengal: What Siliguri Families Should Know",
    seoTitle: "Green Crackers Rules in West Bengal: Siliguri Guide",
    excerpt:
      "What green crackers are, how to check for them, and the timings reported for Diwali and Kali Puja in West Bengal. Always check the current notice.",
    keywords: ["green crackers West Bengal", "green crackers Siliguri", "cracker timing Kali Puja", "Diwali firecracker rules Bengal", "QR code green crackers"],
    category: "Rules & Safety",
    date: DATE,
    readMinutes: 5,
    image: "/assets/blog-sky.webp",
    imageAlt: "Fireworks over a town at night during Diwali",
    body: [
      { type: "p", text: "Rules on crackers have changed a lot over the last few years, and it can be hard to keep up. This guide sums up what has been reported for West Bengal. It is general information and not legal advice, so please check the latest notice from the authorities." },
      { type: "h2", text: "What are green crackers?" },
      { type: "p", text: "Green crackers are made to formulations developed by CSIR-NEERI, designed to give lower emissions than regular crackers. They look and work much like the crackers you know, but they carry a green cracker logo and a QR code on the pack." },
      { type: "h2", text: "What has been reported for West Bengal" },
      { type: "ul", items: ["Only green crackers: the state pollution control board has allowed only green crackers in recent years.", "Timings on Diwali and Kali Puja: reports from recent years give a window of 8 pm to 10 pm.", "Chhath Puja: reports give a window of 6 am to 8 am.", "QR codes: the courts have said that green crackers sold in the state should carry QR codes."] },
      { type: "tip", text: "These rules are announced each year and can change. Before the festival, check the current notice from the West Bengal Pollution Control Board or the local police." },
      { type: "h2", text: "How to check a pack" },
      { type: "ol", items: ["Look for the green cracker logo on the box.", "Scan the QR code with your phone camera.", "Check the maker's name and the instructions on the pack.", "If a pack has no markings at all, ask the seller about it before buying."] },
      { type: "h2", text: "Being a good neighbour" },
      { type: "ul", items: ["Stay within the permitted hours.", "Keep away from hospitals, and from homes with elderly people, babies and pets.", "Clear up the waste the next morning.", "Report unsafe storage or sales to the local authorities."] },
      { type: "links", title: "Read next", items: [{ label: "Cracker safety guide", href: "/blog/diwali-cracker-safety-guide" }, { label: "Siliguri firecracker mela guide", href: "/blog/siliguri-firecracker-mela-guide" }, { label: "Shop crackers", href: "/collections/all" }] },
    ],
    faq: [
      { q: "What time can I burst crackers on Diwali in West Bengal?", a: "Reports from recent years give 8 pm to 10 pm on Diwali and Kali Puja night. Please check this year's official notice." },
      { q: "How do I know if a cracker is green?", a: "Look for the green cracker logo and the QR code on the pack, and scan the code with your phone." },
      { q: "Is this legal advice?", a: "No. This is general information. For the current rules, please check the notice from the authorities." },
    ],
  },
  {
    slug: "diwali-cracker-safety-guide",
    title: "Diwali Cracker Safety Guide for Siliguri Families",
    seoTitle: "Diwali Cracker Safety Guide for Siliguri Families",
    excerpt:
      "Simple rules to keep your family safe this Diwali and Kali Puja: where to light crackers, what to keep nearby and what to do if something goes wrong.",
    keywords: ["Diwali cracker safety", "firecracker safety tips", "Diwali safety for kids", "how to use crackers safely", "burn first aid Diwali"],
    category: "Rules & Safety",
    date: DATE,
    readMinutes: 5,
    image: "/assets/blog-sparkler.webp",
    imageAlt: "A sparkler burning in a hand at night during Diwali",
    body: [
      { type: "p", text: "Crackers are a big part of Diwali, but they need care. A few simple habits make the evening safer for your family, your neighbours and your home." },
      { type: "h2", text: "Before you start" },
      { type: "ul", items: ["Read the instructions on every pack, and keep crackers in a cool, dry place away from flames.", "Choose an open space, away from vehicles, dry leaves, wires and hanging clothes.", "Keep a bucket of water and a bucket of sand nearby.", "Wear cotton clothes and closed footwear. Avoid loose synthetic clothes."] },
      { type: "h2", text: "While lighting crackers" },
      { type: "ol", items: ["Only an adult should light flower pots, rockets and sky shots.", "Light one item at a time, at arm's length, and step back straight away.", "Never hold a cracker in your hand unless it is a sparkler, and never lean over it.", "Never light crackers indoors, in a closed space or inside a container.", "Keep children with an adult at all times, and put used sparklers into water.", "Keep your lighter away from children, and away from the crackers when it is not in use."] },
      { type: "h2", text: "If a cracker does not go off" },
      { type: "p", text: "Do not go back to it or try to relight it. Wait for some time, then pour water over it from a distance and throw it away safely." },
      { type: "h2", text: "If someone gets hurt" },
      { type: "ul", items: ["Burns: hold the area under cool running water for several minutes. Do not apply ice, butter or toothpaste.", "Eye injury: do not rub the eye. Go to a doctor or hospital straight away.", "For anything serious, get medical help immediately."] },
      { type: "tip", text: "Keep your first aid box and a torch near the door before the celebrations begin." },
      { type: "links", title: "Read next", items: [{ label: "Green cracker rules in West Bengal", href: "/blog/green-crackers-west-bengal-rules" }, { label: "Which crackers should you buy?", href: "/blog/which-crackers-to-buy-diwali" }, { label: "Kids special crackers", href: "/collections/kids-special" }] },
    ],
    faq: [
      { q: "What should I keep nearby when lighting crackers?", a: "Keep a bucket of water, a bucket of sand and a first aid box nearby." },
      { q: "What should I do if a cracker doesn't go off?", a: "Don't go back to it or relight it. Wait, then pour water over it from a distance and throw it away safely." },
      { q: "Can children light crackers?", a: "Children should always be with an adult. Only adults should light flower pots, rockets and sky shots." },
    ],
  },
  {
    slug: "which-crackers-to-buy-diwali",
    title: "Phuljhari, Tubri, Chorki or Sky Shots: Which Crackers Should You Buy?",
    seoTitle: "Phuljhari, Tubri, Chorki: Which Crackers to Buy?",
    excerpt:
      "The common types of Diwali crackers, what they are called in Hindi and Bengali, and which ones suit a courtyard, a terrace or an open ground.",
    keywords: ["types of Diwali crackers", "phuljhari", "tubri", "chorki", "anar cracker", "hawai rocket", "baji"],
    category: "Buying Guide",
    date: DATE,
    readMinutes: 4,
    image: "/assets/action-anar.webp",
    imageAlt: "A flower pot cracker sending up a fountain of sparks at night",
    body: [
      { type: "p", text: "Whether you call them pataka, baji or crackers, it helps to know what each type does before you fill your cart. Here is how the most common ones compare." },
      { type: "table", head: ["Type", "Also called", "Best for"], rows: [["Sparklers", "Phuljhari, phuljhadi", "Everyone, with an adult nearby"], ["Flower pots", "Anar, tubri", "Courtyards and open terraces"], ["Ground chakkars", "Chakri, chorki", "Flat, clear ground"], ["Rockets", "Hawai", "Open terraces and grounds"], ["Sky shots", "Aerial cakes", "Open terraces and grounds"], ["Mega packs", "Combo packs", "A bit of everything"]] },
      { type: "h2", text: "A simple plan for one family evening" },
      { type: "ol", items: ["Start with sparklers and small items for the children.", "Move on to flower pots and ground chakkars.", "End with rockets or one sky shot cake for the finish."] },
      { type: "h2", text: "Match your crackers to your space" },
      { type: "ul", items: ["Narrow lane or small courtyard: stick to sparklers and small flower pots.", "Open terrace: flower pots and chakkars work well, and a sky shot if the area above is clear.", "Open ground: this is the best place for rockets and bigger sky shots."] },
      { type: "tip", text: "If you can't decide, start with a mega pack. It already has a mix of everything, and you can add extra sparklers or a sky shot." },
      { type: "links", title: "Shop by type", items: [{ label: "Sparklers", href: "/collections/sparklers" }, { label: "Flower pots", href: "/collections/flower-pots" }, { label: "Ground chakkars", href: "/collections/ground-chakkars" }, { label: "Rockets", href: "/collections/rockets" }, { label: "Sky shots", href: "/collections/aerial-shots" }] },
    ],
    faq: [
      { q: "What is a tubri?", a: "Tubri is the Bengali name for a flower pot, also called an anar. It sends up a fountain of sparks." },
      { q: "What is a chorki?", a: "Chorki is the Bengali name for a ground chakkar, which spins across the floor in a ring of sparks." },
      { q: "Which crackers are best for a small space?", a: "Sparklers and small flower pots suit small spaces. Keep rockets and sky shots for open areas." },
    ],
  },
  {
    slug: "kali-puja-siliguri-guide",
    title: "Kali Puja 2026 in Siliguri: Date and Shopping Checklist",
    seoTitle: "Kali Puja 2026 in Siliguri: Date & Shopping Checklist",
    excerpt:
      "Kali Puja and Diwali both fall on Sunday, 8 November 2026. Here is a simple checklist of decor, puja items, gifts and crackers for Siliguri homes.",
    keywords: ["Kali Puja 2026 date", "Kali Puja Siliguri", "Kali Puja shopping list", "Diwali Siliguri 2026", "puja items Siliguri"],
    category: "Local Guide",
    date: DATE,
    readMinutes: 4,
    image: "/assets/blog-puja.webp",
    imageAlt: "A puja thali with a lit diya and flowers",
    body: [
      { type: "p", text: "In Siliguri and across Bengal, the night of Diwali is also the night of Kali Puja. In 2026, both fall on Sunday, 8 November. Many homes and clubs in the city prepare for both, so it helps to shop early." },
      { type: "h2", text: "A simple Kali Puja and Diwali checklist" },
      { type: "h3", text: "For the puja" },
      { type: "ul", items: ["Puja thali with kumkum, haldi, rice and incense", "Clay diyas, oil or ghee, and cotton wicks", "Marigold garlands"] },
      { type: "h3", text: "For the home" },
      { type: "ul", items: ["A marigold toran for the door", "Rangoli colours for the doorstep", "Candles or diyas for the balcony"] },
      { type: "h3", text: "For the celebration" },
      { type: "ul", items: ["Sparklers for everyone", "Flower pots and chakkars", "One sky shot cake if you have an open terrace", "A bucket of water and a bucket of sand"] },
      { type: "h2", text: "When should you order?" },
      { type: "p", text: "We deliver the same day or the next day within Siliguri, but the last days before the festival are the busiest. Order by Friday, 6 November if you can." },
      { type: "tip", text: "Dates in this guide come from published festival calendars. For exact puja timings, please follow your local panjika." },
      { type: "links", title: "Shop your list", items: [{ label: "Puja thali set", href: "/products/diwali-puja-thali-set" }, { label: "Marigold toran", href: "/products/marigold-door-toran" }, { label: "Clay diyas", href: "/products/hand-painted-clay-diyas" }, { label: "Rangoli colours", href: "/products/rangoli-colour-set" }] },
    ],
    faq: [
      { q: "When is Kali Puja in 2026?", a: "Kali Puja falls on the night of Sunday, 8 November 2026, the same night as Diwali. Please check your panjika for exact timings." },
      { q: "Can I get puja items and crackers in one order?", a: "Yes. Puja items, decor and crackers can all go in one order, with delivery within Siliguri." },
    ],
  },
  {
    slug: "diwali-gift-hampers-siliguri",
    title: "Diwali Gift Hamper Ideas in Siliguri for Family, Office and Clients",
    seoTitle: "Diwali Gift Hamper Ideas in Siliguri: Family & Office",
    excerpt:
      "Choosing a Diwali gift in Siliguri? Hamper ideas for family, staff and clients, what to put inside, and how to send them across the city.",
    keywords: ["Diwali gift hamper Siliguri", "corporate Diwali gifts Siliguri", "gift box Siliguri", "Diwali gifts for staff", "Diwali gift box Siliguri"],
    category: "Gifting",
    date: DATE,
    readMinutes: 4,
    image: "/assets/blog-hampers.webp",
    imageAlt: "Diwali gift hampers with diyas and flowers",
    body: [
      { type: "p", text: "A good Diwali gift feels personal without needing a whole day at the market. Hampers make that easy. Here are some ideas, depending on who you are buying for." },
      { type: "h2", text: "Who are you gifting?" },
      { type: "table", head: ["For", "Try", "Why"], rows: [["Parents and elders", "Lakshmi Puja Gift Hamper", "Useful puja essentials"], ["Family you are visiting", "Family Diwali Gift Hamper", "Enough for the whole house"], ["Friends and neighbours", "Festive Diya Gift Hamper", "Simple and always welcome"], ["Staff and clients", "Office Diwali Gift Hamper", "Neat boxes in packs of 5 or 10"], ["Someone who loves crackers", "Pataka + Diya Diwali Hamper", "Crackers and diyas together"]] },
      { type: "h2", text: "Tips for office gifting" },
      { type: "ol", items: ["Fix a budget per person first, then choose the box.", "Tell us the number of gifts and your delivery date as early as you can.", "Ask us about adding a card with your company's name.", "Avoid crackers for gifts sent to offices, and choose decor or a puja hamper instead."] },
      { type: "h2", text: "Adding a personal touch" },
      { type: "p", text: "A short handwritten note goes a long way. Add clay diyas or a marigold toran to a gift box, and it feels like a gift you put together yourself." },
      { type: "links", title: "Shop gifts", items: [{ label: "All gift hampers", href: "/collections/gift-hampers" }, { label: "Office gift hamper", href: "/products/office-diwali-gift-hamper" }, { label: "Corporate gifting", href: "/pages/corporate-gifting-2026" }] },
    ],
    faq: [
      { q: "Do you make bulk Diwali hampers for offices in Siliguri?", a: "Yes. Choose a pack on the site, or use our corporate gifting page to ask about bigger orders." },
      { q: "Can hampers go to different addresses?", a: "Within Siliguri, this can be arranged. Please contact us with your list." },
    ],
  },
  {
    slug: "rangoli-diwali-decoration-ideas",
    title: "Easy Rangoli and Diwali Decoration Ideas for Your Home in Siliguri",
    seoTitle: "Easy Rangoli & Diwali Decoration Ideas for Your Home",
    excerpt:
      "Rangoli, diyas, torans and candles: simple ways to get your home ready for Diwali and Kali Puja without spending a whole day on it.",
    keywords: ["easy rangoli design Diwali", "rangoli colours Siliguri", "Diwali decoration ideas", "marigold toran", "clay diyas Siliguri"],
    category: "Decor",
    date: DATE,
    readMinutes: 4,
    image: "/assets/blog-rangoli.webp",
    imageAlt: "A colourful rangoli design made with powder for a festival",
    body: [
      { type: "p", text: "You don't need much to make your home feel festive. A little rangoli, a few well-placed diyas and a fresh toran can change the whole mood." },
      { type: "h2", text: "Making an easy rangoli" },
      { type: "ol", items: ["Sweep and dry a small patch near your door.", "Draw a simple outline with chalk: a circle with petals works well.", "Fill in the outer shapes first, then move inwards so that you don't smudge your work.", "Use two or three colours if you are a beginner.", "Place a diya in the centre or around the edge, once the colours are done."] },
      { type: "tip", text: "Short on time? A stencil makes neat patterns in minutes, and it is a fun job to do with children." },
      { type: "h2", text: "Start at the door" },
      { type: "ul", items: ["Hang a marigold toran over your main door.", "Place a row of clay diyas along the steps or the balcony edge.", "Add candles among flowers on a side table."] },
      { type: "h2", text: "Set up your puja corner" },
      { type: "p", text: "Keep your puja thali, diya, kumkum, haldi, rice and incense ready the evening before, so that you are not rushing on the day of Lakshmi Puja or Kali Puja." },
      { type: "h2", text: "Fire safety with diyas" },
      { type: "p", text: "Keep lit diyas away from curtains and within sight, and never leave them burning when you go out or go to sleep. Keep them away from where crackers are stored." },
      { type: "links", title: "Shop decor", items: [{ label: "Rangoli colours", href: "/products/rangoli-colour-set" }, { label: "Rangoli design kit", href: "/products/rangoli-design-kit" }, { label: "Clay diyas", href: "/products/hand-painted-clay-diyas" }, { label: "All decor", href: "/collections/diyas-decor" }] },
    ],
    faq: [
      { q: "How do I make an easy rangoli?", a: "Draw a simple outline with chalk, then fill in two or three colours, working from the outside in." },
      { q: "Can I order rangoli colours with crackers?", a: "Yes. All our products can go in one order, with delivery within Siliguri." },
    ],
  },
  {
    slug: "same-day-delivery-diwali-siliguri",
    title: "Same-Day and Next-Day Diwali Delivery in Siliguri: How It Works",
    seoTitle: "Same-Day Diwali Delivery in Siliguri: How It Works",
    excerpt:
      "How our same-day and next-day delivery works, which areas we cover, and what to do so that your Diwali order reaches you on time.",
    keywords: ["same day delivery Siliguri", "crackers delivery Siliguri", "next day delivery Siliguri", "Diwali home delivery Siliguri", "gift hamper delivery Siliguri"],
    category: "Delivery",
    date: DATE,
    readMinutes: 3,
    image: "/assets/blog-crackers.webp",
    imageAlt: "Diwali crackers packed and ready on a table",
    body: [
      { type: "p", text: "When Diwali is close, nobody wants to wait a week for a parcel. Because Siliguri Pataka delivers only within Siliguri, we can get your order to you the same day or the next day." },
      { type: "h2", text: "How it works" },
      { type: "ol", items: ["Add your crackers, hampers and decor to your cart. The total needs to reach ₹2,000.", "Enter your address in Siliguri, with a landmark and a phone number we can reach.", "Pay by UPI, or choose cash on delivery where it is available.", "We pack your order, and add your free lighter.", "We deliver the same day or the next day, depending on when you order and your area."] },
      { type: "h2", text: "Areas we cover" },
      { type: "p", text: "We deliver across Siliguri, including Hill Cart Road, Sevoke Road, Burdwan Road, Pradhan Nagar, Hakimpara, Subhaspally, Deshbandhu Para, Ashighar, Champasari, Salugara, Matigara and Shivmandir. Not sure about your area? Contact us before you order." },
      { type: "h2", text: "Getting your order on time" },
      { type: "ul", items: ["Order as early as you can. The last days before Diwali are the busiest.", "Share a clear landmark, and keep your phone with you.", "Make sure an adult is at home to receive the order.", "Track your order using your order number or mobile number."] },
      { type: "links", title: "Useful pages", items: [{ label: "Delivery areas", href: "/delivery-areas" }, { label: "Delivery and returns", href: "/shipping-returns" }, { label: "Track your order", href: "/track" }] },
    ],
    faq: [
      { q: "Do you offer same-day delivery in Siliguri?", a: "Yes. We deliver the same day or the next day within Siliguri, depending on when you order and your area." },
      { q: "Is there a delivery charge?", a: "No. Delivery within Siliguri is free, and the minimum order is ₹2,000." },
      { q: "Do you deliver outside Siliguri?", a: "No. We deliver only within Siliguri." },
    ],
  },
  {
    slug: "diwali-2026-dates-shopping-checklist",
    title: "Diwali 2026 Dates and Shopping Checklist for Siliguri Families",
    seoTitle: "Diwali 2026 Dates & Shopping Checklist for Siliguri",
    excerpt:
      "Dhanteras, Choti Diwali, Diwali and Kali Puja dates for 2026, with a day-by-day plan and a full shopping checklist for homes in Siliguri.",
    keywords: ["Diwali 2026 date", "Dhanteras 2026", "Diwali shopping list", "Diwali checklist", "Diwali Siliguri 2026"],
    category: "Local Guide",
    date: DATE,
    readMinutes: 4,
    image: "/assets/blog-diyas.webp",
    imageAlt: "A row of lit clay diyas at Diwali",
    body: [
      { type: "p", text: "Diwali falls later than usual in 2026. Here are the main dates, based on published festival calendars, along with a simple plan so that nothing is left to the last minute." },
      { type: "h2", text: "Main dates" },
      { type: "table", head: ["Day", "Date"], rows: [["Dhanteras", "Friday, 6 November 2026"], ["Choti Diwali", "Saturday, 7 November 2026"], ["Diwali and Kali Puja", "Sunday, 8 November 2026"], ["Bhai Dooj / Bhai Phonta", "10 or 11 November, depending on your panjika"]] },
      { type: "h2", text: "A day-by-day plan" },
      { type: "ol", items: ["By Thursday: order crackers, gift hampers and decor.", "Friday: give your gifts, clean up and put up your toran.", "Saturday: make your rangoli, set up your diyas and get your puja corner ready.", "Sunday: do your puja and enjoy the evening.", "After Diwali: clear away the waste, and store your reusable decor."] },
      { type: "h2", text: "Full shopping checklist" },
      { type: "ul", items: ["Crackers: a mega pack, extra sparklers and flower pots", "Puja: thali, kumkum, haldi, rice, incense and marigolds", "Decor: rangoli colours, clay diyas and a toran", "Gifts: hampers for family, friends and staff", "Safety: a bucket of water, sand and a first aid box"] },
      { type: "tip", text: "Every Siliguri Pataka order comes with 1 lighter free, so that is one less thing on your list." },
      { type: "links", title: "Shop your checklist", items: [{ label: "Mega packs", href: "/collections/mega-packs" }, { label: "Diwali lights and diyas", href: "/collections/home-decor" }, { label: "Rangoli and decor", href: "/collections/diyas-decor" }, { label: "Gift hampers", href: "/collections/gift-hampers" }] },
    ],
    faq: [
      { q: "When is Diwali in 2026?", a: "Diwali is on Sunday, 8 November 2026. Kali Puja falls on the same night." },
      { q: "When should I buy crackers for Diwali 2026?", a: "A few days before is best. Try to order by Thursday, 5 November to avoid the last-minute rush." },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
}

/** A readable id for a heading, used by the "In this guide" links. */
export function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
