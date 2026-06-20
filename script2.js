const PLACE_THEMES = {
  'acai-theory': {
    gradient: 'linear-gradient(160deg, #2D0054 0%, #6B21A8 45%, #C084FC 80%, #F3E8FF 100%)',
    accent: '#9333ea', markBg: 'rgba(107,33,168,0.7)', markText: 'AT', chimeFreq: 440,
    tagline: "Too cold. Too subtle. Finished anyway.",
    widgets: [
      { type: 'stat', number: '4×', label: 'antioxidants of blueberries' },
      { type: 'chip', text: 'Cool Bangalore morning' },
      { type: 'chip', text: 'Amazonian açaí berry' },
      { type: 'chip', text: 'Shared without discussion' },
      { type: 'chip', text: 'First pivot of the trip' },
    ],
    pullQuote: "Too cold. Too subtle. Not quite his thing. We finished the bowl anyway.",
    storyLines: [
      "The morning was cool — the kind of Bangalore cool that makes you walk slowly on purpose.",
      "Flowers on the footpath. Sunday light. We found a table outside and I ordered the OG açaí bowl.",
      "Dark purple, dense, very cold. I explained the antioxidants, the Amazonian origins. He listened patiently.",
      "The cold hit his teeth before the flavour did. He smiled. Too cold. Too subtle. Not quite his thing.",
      "We finished the bowl anyway, the two of us sharing without discussion, watching people and the morning pass by."
    ]
  },
  'baan-phadthai': {
    gradient: 'linear-gradient(160deg, #7C2D12 0%, #C2410C 30%, #F59E0B 70%, #FEF3C7 100%)',
    accent: '#d97706', markBg: 'rgba(194,65,12,0.7)', markText: 'BP', chimeFreq: 494,
    tagline: "He didn’t bring it up. Not once.",
    widgets: [
      { type: 'badge', text: 'Michelin Bib Gourmand' },
      { type: 'chip', text: 'Bangkok origin, Bangalore chapter' },
      { type: 'chip', text: 'Phad Thai + the spicier dishes' },
      { type: 'chip', text: 'The detour he never mentioned' },
    ],
    pullQuote: "He tried the Phad Thai, worked through the spicier dishes with genuine curiosity. I was more relieved than I needed to be.",
    storyLines: [
      "A Michelin Bib Gourmand restaurant from Bangkok, now open in Bangalore.",
      "He’d wanted Pizza 4P’s, and here we were at a Thai restaurant instead.",
      "He didn’t bring it up once. Not a word.",
      "He tried the Phad Thai, worked through the spicier dishes with genuine curiosity.",
      "He actually liked it. Not politely liking it. Actually liking it.",
      "I was more relieved than I needed to be."
    ]
  },
  'kaori-cafe': {
    gradient: 'linear-gradient(160deg, #052e16 0%, #065F46 40%, #34D399 75%, #D1FAE5 100%)',
    accent: '#059669', markBg: 'rgba(6,95,70,0.7)', markText: 'KC', chimeFreq: 392,
    tagline: "He tried to pace himself. He couldn’t.",
    widgets: [
      { type: 'quote', text: '“This is something else”' },
      { type: 'chip', text: 'Hojicha — roasted green tea' },
      { type: 'chip', text: 'Pale brown-gold, nothing like before' },
      { type: 'chip', text: 'First Japanese ice cream' },
    ],
    pullQuote: "“This is something else,” he said, somewhere between the second and third bite.",
    storyLines: [
      "He wasn’t interested in dessert. I pushed.",
      "Hojicha ice cream — roasted green tea, pale brown-gold, nothing like anything he’d had before.",
      "One spoonful in and his expression changed.",
      "He tried to pace himself. He couldn’t.",
      "“This is something else,” he said, somewhere between the second and third bite.",
      "His first Japanese ice cream. Probably not his last."
    ]
  },
  'bier-library': {
    gradient: 'linear-gradient(160deg, #3D1100 0%, #92400E 35%, #D97706 65%, #FEF3C7 100%)',
    accent: '#b45309', markBg: 'rgba(146,64,14,0.7)', markText: 'BL', chimeFreq: 330,
    tagline: "He loves craft beer. These ones weren’t quite right. Then came the Hot Toddy.",
    widgets: [
      { type: 'stat', number: '4–5', label: 'drafts tried, none right' },
      { type: 'chip', text: 'Hot Toddy: warm brandy + cloves' },
      { type: 'chip', text: 'Loved it immediately' },
      { type: 'chip', text: 'Prawns + squid + garlic bread' },
      { type: 'stat', number: '4 hrs', label: 'nap that followed' },
    ],
    pullQuote: "He loves craft beer. Four or five drafts in, none were right. Then we ordered a Hot Toddy — and watched everything change.",
    storyLines: [
      "He loves craft beer, so The Bier Library was always on the list.",
      "Four or five drafts in, these particular ones weren’t quite right. None of them. He was a good sport.",
      "Then we ordered a Hot Toddy — warm brandy, cloves, the kind of drink that belongs to a different era.",
      "He loved it immediately, the way you love something that feels right rather than impressive.",
      "The seafood arrived: prawns for him, squid for me, garlic bread specifically requested to finish the curry.",
      "He ate everything. On the way home, he slept for four hours. Deeply. Without apology."
    ]
  },
  'zlb23': {
    gradient: 'linear-gradient(160deg, #0F0820 0%, #1E1044 30%, #3730A3 65%, #6366F1 85%, #A5B4FC 100%)',
    accent: '#818cf8', markBg: 'rgba(55,48,163,0.7)', markText: 'ZLB', chimeFreq: 370,
    tagline: "In a place like that, something opens up differently.",
    widgets: [
      { type: 'badge', text: "India’s Best Bar 2024" },
      { type: 'badge', text: "Asia’s 50 Best Bars" },
      { type: 'chip', text: 'Kyoto-inspired speakeasy, The Leela' },
      { type: 'chip', text: 'Hidden entrance through a live kitchen' },
      { type: 'chip', text: 'Grand piano. Sri Lankan bar takeover.' },
    ],
    pullQuote: "I didn’t mention any of this — the ranking, the accolades — until we were already seated.",
    anchorQuote: "We sat for hours. The conversations were the kind that don’t happen as easily at home — not because they’re difficult, but because home already has its own rhythms and noise.",
    storyLines: [
      "When he woke up, we drove to The Leela Palace.",
      "ZLB 23: a Kyoto-inspired speakeasy. You need a reservation. You enter through a restaurant, then a live kitchen. Then the bar reveals itself.",
      "Grand piano playing. A Sri Lankan bar takeover that night. Tiger prawns neither of us could stop thinking about.",
      "I didn’t mention the ranking or the accolades until we were already seated.",
      "Cocktails you drink slowly because there’s no good reason to hurry them.",
      "We sat for hours. The conversations were the kind that don’t happen as easily at home."
    ]
  },
  'phurr': {
    gradient: 'linear-gradient(160deg, #0A2E1A 0%, #14532D 35%, #4ADE80 75%, #DCFCE7 100%)',
    accent: '#16a34a', markBg: 'rgba(20,83,45,0.7)', markText: 'PH', chimeFreq: 392,
    tagline: "He said so himself. That’s how you know it was true.",
    widgets: [
      { type: 'stat', number: '10:30', label: 'PM reservation' },
      { type: 'chip', text: 'Porcelain egg welcome drink' },
      { type: 'chip', text: 'Coconut milk + mango “yolk”' },
      { type: 'chip', text: 'Finest vegetarian food ever' },
      { type: 'chip', text: 'Packed starters to take home' },
    ],
    pullQuote: "He said so himself, which I wasn’t expecting him to say out loud, which somehow made it more true.",
    anchorQuote: "We packed leftover starters to take home. Not because we were full. Because we wanted more the next day.",
    storyLines: [
      "First, I showed him a YouTube video about Prohibition — the history, the underground culture he’d just experienced.",
      "He watched the whole thing. It added something. Then we got ready for our 10:30 PM reservation at Phurr.",
      "He walked in slightly skeptical: late, vegetarian, and “elevated” could mean anything.",
      "A welcome drink arrived — a porcelain egg cracked open to reveal coconut milk and mango pulp inside. He laughed. He tried it.",
      "Everything that followed — the starters, the mocktails, the desserts — was the finest vegetarian food either of us had ever had.",
      "He said so himself, which I wasn’t expecting him to say out loud, which somehow made it more true.",
      "We packed leftover starters to take home. Not because we were full. Because we wanted more the next day."
    ]
  },
  'tanjore-tiffins': {
    gradient: 'linear-gradient(160deg, #7C2D12 0%, #C2410C 35%, #FB923C 70%, #FEF3C7 100%)',
    accent: '#ea580c', markBg: 'rgba(194,65,12,0.7)', markText: 'TT', chimeFreq: 440,
    tagline: "Our first mouthful of Sunday was mutton. No apology needed.",
    widgets: [
      { type: 'chip', text: 'Egg dosa + mutton curry' },
      { type: 'chip', text: 'A first — never had them together' },
      { type: 'chip', text: 'Could cut the meat with a spoon' },
      { type: 'chip', text: 'Nothing was left' },
      { type: 'chip', text: 'Most affordable meal all weekend' },
    ],
    pullQuote: "One bite in, his eyes said everything his full mouth couldn’t.",
    storyLines: [
      "Our first mouthful of Sunday was mutton — not coffee, not toast. Mutton curry on egg dosa.",
      "He’d never had the two together before.",
      "One bite in, his eyes said everything his full mouth couldn’t.",
      "The meat was tender enough to cut with a spoon.",
      "He ordered an extra plain dosa to finish the curry with. Nothing was left.",
      "It was also the most affordable meal of the weekend by a significant margin, which seemed to quietly please him."
    ]
  },
  'umesh-refreshments': {
    gradient: 'linear-gradient(160deg, #1C0A00 0%, #431407 30%, #92400E 65%, #E7D5C0 100%)',
    accent: '#92400e', markBg: 'rgba(67,20,7,0.7)', markText: 'UR', chimeFreq: 370,
    tagline: "Some places don’t need to be new to matter.",
    widgets: [
      { type: 'stat', number: '2', label: 'filter coffees' },
      { type: 'chip', text: 'Exactly the right sugar' },
      { type: 'chip', text: 'He’d been here before — with Mom' },
      { type: 'chip', text: 'A memory inside the memory' },
    ],
    pullQuote: "Some places don’t need to be new to matter. This one is better precisely because it isn’t.",
    storyLines: [
      "On the way to finally making it to Pizza 4P’s, we stopped at Umesh Refreshments.",
      "Nothing decorative about the place — no atmosphere, no pitch. Just very good filter coffee.",
      "He’d been here before, with Mom, on one of his first visits to Bangalore.",
      "He ordered two. Exactly the right amount of sugar, exactly the right temperature.",
      "Some places don’t need to be new to matter. This one is better precisely because it isn’t."
    ]
  },
  'pizza-4ps': {
    gradient: 'linear-gradient(160deg, #450A0A 0%, #991B1B 30%, #EF4444 65%, #FEE2E2 100%)',
    accent: '#dc2626', markBg: 'rgba(153,27,27,0.7)', markText: '4P’s', chimeFreq: 494,
    tagline: "Two days in the making. Worth every one.",
    widgets: [
      { type: 'chip', text: 'Day 2. Finally made it.' },
      { type: 'chip', text: 'Best table — high top near the baking area' },
      { type: 'chip', text: 'Burrata salad + garlic shrimp pizza' },
      { type: 'chip', text: 'Also had this in Ho Chi Minh City' },
      { type: 'chip', text: 'Ate mostly in silence' },
    ],
    pullQuote: "The kind of food that makes you close your eyes mid-bite, involuntarily. We ate mostly in silence — which is the correct response.",
    storyLines: [
      "We finally made it. Two days in the making, which probably helped.",
      "Best table: a high top near the baking area, warm but not too close to the heat.",
      "He didn’t love the mocktails. I loved mine.",
      "The pizza was what it always is: the kind of food that makes you close your eyes mid-bite, involuntarily.",
      "We’d been here before as a family, and again in Ho Chi Minh City on a trip none of us have stopped mentioning.",
      "The garlic shrimp pizza. The burrata salad pizza. These are things that don’t improve and don’t need to.",
      "We ate mostly in silence, which is the correct response to a meal like that."
    ]
  },
  'toit': {
    gradient: 'linear-gradient(160deg, #052E16 0%, #14532D 30%, #A16207 65%, #FEF3C7 100%)',
    accent: '#a16207', markBg: 'rgba(20,83,45,0.7)', markText: 'TOIT', chimeFreq: 440,
    tagline: "He opened Keep Notes. Germany is in September.",
    widgets: [
      { type: 'stat', number: '6–7', label: 'samples, 2 keepers' },
      { type: 'chip', text: 'Logged in Keep Notes for Germany' },
      { type: 'chip', text: 'IIM Bangalore stories — more complete now' },
      { type: 'chip', text: 'Makhanas on the side' },
      { type: 'chip', text: 'Cheaper Hot Toddy on way out — he noticed' },
    ],
    pullQuote: "He liked two. He opened Keep Notes and logged both. He’s going to Germany in September.",
    storyLines: [
      "Toit on a Sunday afternoon is calmer than its usual self — less crowded, more room to sit.",
      "He tried six or seven samples. He genuinely liked two of them.",
      "He opened Keep Notes on his phone and logged each one: which were worth remembering, which were not.",
      "He talked about his IIM Bangalore days — stories I’d heard in pieces, now more complete.",
      "Weekends of organised chaos. Buses that waited longer so the plan could go a little further than permitted.",
      "In the places where these things happened, stories feel closer to real. I mostly listened.",
      "On the way out: one Hot Toddy to go. Cheaper brandy. He noticed immediately and said so. We laughed."
    ]
  },
  'wrong-apartment': {
    gradient: 'linear-gradient(160deg, #4C1D95 0%, #7C3AED 35%, #EC4899 70%, #FDF2F8 100%)',
    accent: '#9333ea', markBg: 'rgba(124,58,237,0.7)', markText: '?', chimeFreq: 523,
    tagline: "Completely. Confidently. Wrong apartment.",
    widgets: [
      { type: 'stat', number: '1 min', label: 'of confident confusion' },
      { type: 'chip', text: 'Wrong gate. Wrong door.' },
      { type: 'chip', text: 'Building was identical to ours' },
      { type: 'chip', text: 'Completely certain it was ours' },
      { type: 'chip', text: 'I recorded everything. Never deleted it.' },
    ],
    pullQuote: "He was entirely certain it was ours. It wasn’t. I stood ten feet behind him and recorded everything.",
    storyLines: [
      "Back home after Toit — relaxed. A little tipsy, and completely confident.",
      "He walked through the wrong gate, stood in front of the wrong door.",
      "Spent a full minute trying to understand why the lock wasn’t responding.",
      "The building looked absolutely identical to ours.",
      "He was entirely certain it was ours. It wasn’t.",
      "I stood ten feet behind him and recorded everything. I have never deleted it, and I never will."
    ]
  },
  'soka': {
    gradient: 'linear-gradient(160deg, #0C4A6E 0%, #0369A1 35%, #38BDF8 70%, #E0F2FE 100%)',
    accent: '#0284c7', markBg: 'rgba(3,105,161,0.7)', markText: 'SOKA', chimeFreq: 370,
    tagline: "They built him a drink. He asked for adjustments. They adjusted.",
    widgets: [
      { type: 'stat', number: '38', label: 'seats. Feels like fewer.' },
      { type: 'quote', text: '“This is where your generation goes on dates”' },
      { type: 'chip', text: 'No waiters — only bartenders' },
      { type: 'chip', text: 'Custom cocktail, two adjustments requested' },
      { type: 'chip', text: 'Thecha Prawns — ordered twice' },
    ],
    pullQuote: "“This is where your generation goes on dates,” he observed, looking around. Accurate.",
    storyLines: [
      "Soka has thirty-eight seats. It feels like fewer. He found it slightly claustrophobic — but he noticed everything.",
      "The bartenders — there are no waiters here, only bartenders — came to the table.",
      "They asked him what he wanted. Not what he’d like from the menu. Just: what did he want?",
      "“This is where your generation goes on dates,” he observed, looking around. Accurate.",
      "They built something for him. He tasted it, asked for two specific adjustments, received exactly what he’d asked for.",
      "Duck skewers, chicken skewers, Thecha Prawns that we ordered twice.",
      "First time a cocktail had ever been made specifically for him. He seemed quietly pleased."
    ]
  },
  'magnolia-bakery': {
    gradient: 'linear-gradient(160deg, #4A044E 0%, #86198F 35%, #F0ABFC 70%, #FDF4FF 100%)',
    accent: '#a21caf', markBg: 'rgba(134,25,143,0.7)', markText: 'MB', chimeFreq: 440,
    tagline: "He ate the cream first. Deliberately. Then some of mine.",
    widgets: [
      { type: 'chip', text: 'One chocolate cupcake' },
      { type: 'chip', text: 'Ate the cream first — its own moment' },
      { type: 'chip', text: 'Buttery, sweet but not overly sweet' },
      { type: 'chip', text: 'Reached over. Ate some of mine.' },
    ],
    pullQuote: "He ate the cream off the top first — very deliberately, as if it deserved its own moment. Then he reached over and ate some of mine.",
    storyLines: [
      "One chocolate cupcake. That was the plan.",
      "He ate the cream off the top first — very deliberately, as if it deserved its own moment.",
      "Buttery chocolate frosting. Sweet but not overly sweet. Nothing heavy about it.",
      "Then the rest of the cake.",
      "Then he reached over and ate some of mine too. I let him. It was the right thing to do."
    ]
  },
  'filter-coffee': {
    gradient: 'linear-gradient(160deg, #1C0A00 0%, #44201C 30%, #78350F 65%, #FEF3C7 100%)',
    accent: '#92400e', markBg: 'rgba(68,32,28,0.7)', markText: 'TFC', chimeFreq: 330,
    tagline: "We didn’t cry this time. We didn’t need to.",
    widgets: [
      { type: 'chip', text: 'A restaurant that carries a memory' },
      { type: 'chip', text: 'First time both siblings were earning' },
      { type: 'chip', text: 'All four of us cried together' },
      { type: 'quote', text: '“The memory of crying was enough”' },
    ],
    pullQuote: "We didn’t cry this time. We didn’t need to. The memory of crying was enough.",
    storyLines: [
      "The Filter Coffee carries a specific memory for our family.",
      "The last time we were all here — all four of us — my sister and I were both earning for the first time.",
      "Something shifted in the air. Our parents understood that a phase had ended. Both of them had tears in their eyes. We all did.",
      "Coming back: his green moong pesarattu, my onion uttapam, the medu vada we shared.",
      "It was about standing in the same place and noticing how much had moved since then.",
      "We didn’t cry this time. We didn’t need to. The memory of crying was enough."
    ]
  },
  'fomomo': {
    gradient: 'linear-gradient(160deg, #7C1D0A 0%, #C2410C 35%, #FB923C 65%, #FEF3C7 100%)',
    accent: '#c2410c', markBg: 'rgba(194,65,12,0.7)', markText: 'FM', chimeFreq: 392,
    tagline: "“I will never eat a momo.” He ate momos.",
    widgets: [
      { type: 'quote', text: '“I will never eat a momo in my entire life”' },
      { type: 'chip', text: 'He ate momos.' },
      { type: 'chip', text: 'Wok-tossed chicken (pork was planned)' },
      { type: 'chip', text: "Didn’t love. Didn’t hate. Significant revision." },
      { type: 'chip', text: 'Fine-dining treatment for momos' },
    ],
    pullQuote: "He walked out having done something he’d said he wouldn’t. He seemed quietly satisfied about this. I was too.",
    storyLines: [
      "At some point in the past, he had told me he would never eat a momo in his entire life.",
      "I remembered this when I suggested the stop. He came in curious and wary in roughly equal measure.",
      "Fomomo is minimal and careful — the design, the attention, one thing done very well.",
      "He tried the wok-tossed chicken momos.",
      "He didn’t love them. He didn’t hate them — which for him is a significant revision from “never in my entire life.”",
      "He walked out having done something he’d said he wouldn’t. He seemed quietly satisfied about this."
    ]
  },
  'si-nonnas': {
    gradient: 'linear-gradient(160deg, #1C1917 0%, #292524 30%, #78716C 65%, #F5F5F4 100%)',
    accent: '#78716c', markBg: 'rgba(41,37,36,0.7)', markText: 'SN', chimeFreq: 330,
    tagline: "He was ready to go home. We went anyway.",
    widgets: [
      { type: 'chip', text: 'Last stop. Last evening.' },
      { type: 'chip', text: 'He had resisted, gently' },
      { type: 'chip', text: 'Tiramisu — light and seamless' },
      { type: 'chip', text: 'Gone before either of us realised' },
      { type: 'quote', text: '“Good place to bring family”' },
    ],
    pullQuote: "Some weekends end exactly the way they should — without announcement.",
    storyLines: [
      "He was ready to go home. The flight was early the next morning and he’d been full for hours.",
      "I pushed for one more stop. He resisted, gently. We went anyway.",
      "Their tiramisu: light and seamless, gone before either of us had fully registered eating it. Nothing heavy.",
      "He looked around at the interiors — the French-Italian quiet of the room.",
      "“Good place to bring family,” he said. He was right.",
      "We paid and walked out. I put him in a cab. We didn’t say anything important.",
      "Some weekends end exactly the way they should — without announcement."
    ]
  }
};


const DAY_INTROS = {
  saturday: {
    label: 'Day 01',
    name: 'Saturday',
    stats: ['6 stops', 'Morning to after midnight', 'The plan changed at 8am'],
    copy: 'The plan was Pizza 4P\'s. Their system was down and the waitlist wasn\'t moving. We pivoted — and built a better day than the one we\'d planned.',
    stops: ['Acai Theory', 'Baan Phadthai', 'Kaori Cafe', 'The Bier Library', 'ZLB 23', 'Phurr']
  },
  sunday: {
    label: 'Day 02',
    name: 'Sunday',
    stats: ['7 stops', 'Morning to night', 'We\'d found the rhythm'],
    copy: 'We started earlier this time. The rhythm was there now. A brewery in the afternoon, a wrong apartment, the best cocktail bar either of us has been to.',
    stops: ['Tanjore Tiffins', 'Umesh Refreshments', 'Pizza 4P\'s', 'Toit', 'The Wrong Apartment', 'Soka', 'Magnolia Bakery']
  },
  monday: {
    label: 'Day 03',
    name: 'Monday',
    stats: ['3 stops', 'Work first, then evening', 'Early flight the next morning'],
    copy: 'Both of us had work. We met in the evening. No grand plan — just three more stops before his flight. One of them he\'d sworn he\'d never do. He did it.',
    stops: ['The Filter Coffee', 'Fomomo', 'Si Nonna\'s']
  }
};

/* Chapter label mapping */
const CHAPTER_ID_MAP = {
  'saturday': 'Saturday',
  'sunday': 'Sunday',
  'monday': 'Monday'
};

/* Place → chapter */
const PLACE_CHAPTER = {};
if (typeof SITE_DATA !== 'undefined') {
  SITE_DATA.chapters.forEach(ch => {
    ch.memories.forEach(m => {
      PLACE_CHAPTER[m.id] = ch.id;
    });
  });
}

/* Place → coordinates on the Bangalore map SVG (280×380 viewBox) */
const MAP_COORDS = {
  'acai-theory':        [198, 90],
  'baan-phadthai':      [210, 108],
  'kaori-cafe':         [200, 120],
  'bier-library':       [220, 82],
  'zlb23':              [232, 152],
  'phurr':              [72, 262],
  'tanjore-tiffins':    [192, 100],
  'umesh-refreshments': [182, 115],
  'pizza-4ps':          [205, 94],
  'toit':               [215, 86],
  'wrong-apartment':    [218, 93],
  'soka':               [206, 116],
  'magnolia-bakery':    [226, 124],
  'filter-coffee':      [76, 274],
  'fomomo':             [210, 106],
  'si-nonnas':          [80, 320]
};

const JOURNEY_ORDER = [
  'acai-theory','baan-phadthai','kaori-cafe','bier-library','zlb23','phurr',
  'tanjore-tiffins','umesh-refreshments','pizza-4ps','toit','wrong-apartment',
  'soka','magnolia-bakery','filter-coffee','fomomo','si-nonnas'
];

/* -------------------------------------------------------------
   AUDIO SYSTEM — Web Audio API ambient synthesizer
   ------------------------------------------------------------- */
let audioCtx = null;
let masterGain = null;
let audioRunning = false;

function initAudio() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);

    // Reverb impulse
    const revLen = audioCtx.sampleRate * 3.5;
    const revBuf = audioCtx.createBuffer(2, revLen, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = revBuf.getChannelData(ch);
      for (let i = 0; i < revLen; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / revLen, 3.5);
      }
    }
    const convolver = audioCtx.createConvolver();
    convolver.buffer = revBuf;
    convolver.connect(masterGain);

    // A major pentatonic pad: A2, C#3, E3, A3, C#4
    const notes = [110, 138.59, 164.81, 220, 277.18];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const oGain = audioCtx.createGain();
      oGain.gain.value = i === 0 ? 0.14 : 0.07 / (i + 0.5);
      osc.type = 'sine';
      osc.frequency.value = freq;

      // Subtle LFO wobble for warmth
      const lfo = audioCtx.createOscillator();
      const lfoG = audioCtx.createGain();
      lfo.frequency.value = 0.08 + i * 0.04;
      lfoG.gain.value = freq * 0.004;
      lfo.connect(lfoG);
      lfoG.connect(osc.frequency);
      lfo.start();

      osc.connect(oGain);
      oGain.connect(convolver);
      osc.start();
    });

    return true;
  } catch (e) {
    console.warn('Audio init failed:', e);
    return false;
  }
}

function startAudio() {
  if (!audioCtx) {
    if (!initAudio()) return;
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 2.5);
  audioRunning = true;
}

function stopAudio() {
  if (!masterGain) return;
  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
  audioRunning = false;
}

function playChime(freq) {
  if (!audioCtx || !audioRunning) return;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.connect(g);
  g.connect(masterGain);
  osc.type = 'sine';
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.18, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.2);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 2.4);
}

function initSoundButton() {
  const btn = document.getElementById('sound-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (audioRunning) {
      stopAudio();
      btn.classList.remove('playing');
      btn.classList.add('muted');
      btn.innerHTML = '🔇';
      btn.title = 'Play ambient sound';
    } else {
      startAudio();
      btn.classList.add('playing');
      btn.classList.remove('muted');
      btn.innerHTML = '♫';
      btn.title = 'Mute ambient sound';
    }
  });
  btn.innerHTML = '♪';
  btn.title = 'Play ambient sound';
}

/* -------------------------------------------------------------
   BANGALORE MAP — SVG generation & management
   ------------------------------------------------------------- */
let activePinId = null;

function buildMap() {
  const svg = document.getElementById('bangalore-map');
  if (!svg) return;

  const NS = 'http://www.w3.org/2000/svg';

  function svgEl(tag, attrs) {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  // Background
  svg.appendChild(svgEl('rect', { width: 280, height: 380, fill: 'transparent' }));

  // Simplified road network
  const roads = [
    // N-S Indiranagar spine
    'M200,60 L205,180',
    // Old Airport Rd (diagonal to The Leela)
    'M205,140 L240,165',
    // Diagonal south (CMH Road → Outer Ring)
    'M200,140 L120,230 L85,300',
    // Cross roads
    'M175,95 L240,88',
    'M178,118 L235,115',
    'M68,255 L110,255',
    'M70,290 L115,285',
  ];

  roads.forEach(d => {
    svg.appendChild(svgEl('path', {
      d, stroke: 'rgba(255,255,255,0.08)', 'stroke-width': 1.5,
      fill: 'none', 'stroke-linecap': 'round'
    }));
  });

  // Journey path (full, dim)
  const pathPoints = JOURNEY_ORDER.map(id => MAP_COORDS[id] ? MAP_COORDS[id].join(',') : '').filter(Boolean);
  svg.appendChild(svgEl('polyline', {
    points: pathPoints.join(' '),
    stroke: 'rgba(255,255,255,0.12)', 'stroke-width': 1,
    fill: 'none', 'stroke-dasharray': '3,4', 'stroke-linecap': 'round'
  }));

  // Neighborhood labels
  const labels = [
    [185, 68, 'Indiranagar'],
    [238, 168, 'The Leela'],
    [42, 250, 'Jayanagar'],
    [44, 316, 'JP Nagar'],
  ];
  labels.forEach(([x, y, text]) => {
    const t = svgEl('text', {
      x, y, fill: 'rgba(255,255,255,0.2)',
      'font-size': 7, 'font-family': 'Inter, sans-serif',
      'font-weight': '500', 'letter-spacing': '0.08em'
    });
    t.textContent = text;
    svg.appendChild(t);
  });

  // Pins for each place
  JOURNEY_ORDER.forEach((id, i) => {
    const coords = MAP_COORDS[id];
    if (!coords) return;
    const [cx, cy] = coords;
    const theme = PLACE_THEMES[id];
    const accent = theme ? theme.accent : '#888';

    // Outer glow ring (hidden by default, shown when active)
    const ring = svgEl('circle', {
      cx, cy, r: 7, fill: 'none',
      stroke: accent, 'stroke-width': 1.5,
      opacity: 0, id: `map-ring-${id}`
    });
    svg.appendChild(ring);

    // Pin dot
    const dot = svgEl('circle', {
      cx, cy, r: 3.5,
      fill: 'rgba(255,255,255,0.25)',
      stroke: accent, 'stroke-width': 1,
      id: `map-pin-${id}`,
      style: 'transition: all 0.4s;'
    });
    svg.appendChild(dot);

    // Stop number label (tiny)
    const num = svgEl('text', {
      x: cx + 5, y: cy + 3,
      fill: 'rgba(255,255,255,0.3)',
      'font-size': 5.5, 'font-family': 'Inter, sans-serif',
      'font-weight': '600'
    });
    num.textContent = i + 1;
    svg.appendChild(num);
  });
}

function updateMapPin(placeId) {
  if (placeId === activePinId) return;
  // Deactivate old
  if (activePinId) {
    const oldPin = document.getElementById(`map-pin-${activePinId}`);
    const oldRing = document.getElementById(`map-ring-${activePinId}`);
    if (oldPin) { oldPin.setAttribute('r', 3.5); oldPin.setAttribute('fill', 'rgba(255,255,255,0.25)'); }
    if (oldRing) oldRing.setAttribute('opacity', 0);
  }
  activePinId = placeId;
  const pin = document.getElementById(`map-pin-${placeId}`);
  const ring = document.getElementById(`map-ring-${placeId}`);
  const theme = PLACE_THEMES[placeId];
  if (pin) {
    pin.setAttribute('r', 5);
    pin.setAttribute('fill', theme ? theme.accent : '#fff');
  }
  if (ring) {
    ring.setAttribute('opacity', 0.8);
  }
  const nameEl = document.getElementById('map-place-name');
  if (nameEl && theme) {
    const memory = findMemory(placeId);
    nameEl.textContent = memory ? memory.place : placeId;
  }
}

function findMemory(id) {
  for (const chapter of SITE_DATA.chapters) {
    const m = chapter.memories.find(m => m.id === id);
    if (m) return m;
  }
  return null;
}

/* Map toggle */
function initMapToggle() {
  const toggle = document.getElementById('map-toggle');
  const overlay = document.getElementById('map-overlay');
  if (!toggle || !overlay) return;

  // Set initial height
  const fullH = overlay.scrollHeight;
  overlay.style.height = fullH + 'px';

  toggle.addEventListener('click', () => {
    overlay.classList.toggle('minimized');
    toggle.textContent = overlay.classList.contains('minimized') ? '▴' : '▾';
  });
}

/* -------------------------------------------------------------
   SCROLL SYSTEM
   ------------------------------------------------------------- */
let currentChapterId = null;
let currentPlaceId = null;

function initScroll() {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function onScroll() {
  updateProgress();
  updateSectionTracking();
}

function updateProgress() {
  const fill = document.getElementById('progress-fill');
  if (!fill) return;
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (scrolled / total) * 100 : 0;
  fill.style.width = pct + '%';
}

function updateSectionTracking() {
  const label = document.getElementById('chapter-label');
  const text = document.getElementById('chapter-text');

  // Find which chapter is in view
  const chapterSections = document.querySelectorAll('.v2-day-intro');
  let newChapter = null;
  chapterSections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6 && rect.bottom > 0) {
      newChapter = el.dataset.chapterId;
    }
  });

  // Walk through place sections to find current
  const placeSections = document.querySelectorAll('.place-hero-screen');
  let newPlace = null;
  placeSections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
      newPlace = el.dataset.placeId;
      newChapter = PLACE_CHAPTER[newPlace] || newChapter;
    }
  });

  if (newPlace && newPlace !== currentPlaceId) {
    currentPlaceId = newPlace;
    updateAccentColor(newPlace);
    updateMapPin(newPlace);
  }

  if (newChapter && newChapter !== currentChapterId) {
    currentChapterId = newChapter;
    if (text) text.textContent = CHAPTER_ID_MAP[newChapter] || newChapter;
    if (label) label.classList.add('visible');
  }

  // Hide label on hero
  if (window.scrollY < window.innerHeight * 0.7) {
    if (label) label.classList.remove('visible');
  }
}

function updateAccentColor(placeId) {
  const theme = PLACE_THEMES[placeId];
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-dim', `color-mix(in srgb, ${theme.accent} 12%, transparent)`);
  root.style.setProperty('--place-gradient', theme.gradient);
}

/* -------------------------------------------------------------
   REVEAL SYSTEM — IntersectionObserver
   ------------------------------------------------------------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('revealed');

        // Stagger chips within this element
        el.querySelectorAll('.chip').forEach((chip, i) => {
          chip.style.transitionDelay = `${i * 0.05}s`;
          chip.classList.add('revealed');
        });

        // Stagger list items
        el.querySelectorAll('.dedication-lines li').forEach((li, i) => {
          setTimeout(() => li.classList.add('revealed'), i * 80);
        });

        observer.unobserve(el);

        // Play chime if this is a place hero
        if (el.classList.contains('place-hero-screen')) {
          const pid = el.dataset.placeId;
          const theme = PLACE_THEMES[pid];
          if (theme) setTimeout(() => playChime(theme.chimeFreq), 400);
        }
      });
    },
    { threshold: 0.12, rootMargin: '-40px 0px' }
  );

  // Observe all reveal targets
  const targets = document.querySelectorAll(
    '.place-hero-screen, .v2-day-intro, .story-pull-quote, ' +
    '.story-line, .anchor-quote-text, .anchor-attribution, ' +
    '.reflection-p, .dedication-salutation, .dedication-sep, ' +
    '.dedication-closing, .dedication-sig, .journey-card'
  );
  targets.forEach(el => observer.observe(el));

  // Separate observer for story text col (to stagger chips + lines)
  const storyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const col = entry.target;
        col.querySelectorAll('.chip').forEach((chip, i) => {
          setTimeout(() => chip.classList.add('revealed'), i * 55);
        });
        col.querySelectorAll('.story-pull-quote, .story-line').forEach((el, i) => {
          setTimeout(() => el.classList.add('revealed'), i * 90 + 150);
        });
        storyObserver.unobserve(col);
      });
    },
    { threshold: 0.08, rootMargin: '-20px 0px' }
  );
  document.querySelectorAll('.story-text-col').forEach(el => storyObserver.observe(el));

  // Fix: reveal widget items in story panels
  const widgetObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.reveal-widget').forEach((w, i) => {
        setTimeout(() => w.classList.add('revealed'), i * 60);
      });
      entry.target.querySelectorAll('.story-pull-quote, .story-line').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), i * 85 + 200);
      });
      widgetObserver.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '-10px 0px' });
  document.querySelectorAll('.story-text-col').forEach(el => widgetObserver.observe(el));

  // Video autoplay observer
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => { video.controls = true; });
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.25 }
  );
  document.querySelectorAll('video').forEach(v => {
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    videoObserver.observe(v);
  });
}

/* -------------------------------------------------------------
   DOM HELPERS
   ------------------------------------------------------------- */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k === 'style') node.setAttribute('style', v); // setAttribute handles CSS custom props
    else if (k.startsWith('data-')) node.setAttribute(k, v);
    else node[k] = v;
  });
  children.flat(Infinity).forEach(child => {
    if (child == null) return;
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  });
  return node;
}

/* -------------------------------------------------------------
   RENDER — HERO
   ------------------------------------------------------------- */
function renderHero() {
  return el('section', { class: 'v2-hero', id: 'v2-hero' },
    el('span', { class: 'hero-eyebrow' }, "A Father’s Day Gift"),

    el('div', { class: 'hero-title-block' },
      el('span', { class: 'hero-prefix' }, 'A Weekend in'),
      el('span', { class: 'hero-city' }, 'Bangalore')
    ),

    el('span', { class: 'hero-date' }, 'June 2026 · For Dad'),

    el('div', { class: 'hero-narrative' },
      el('p', {}, 'Before the restaurants. Before the reservations. Before the carefully planned route from morning to midnight — there was just a simple fact.'),
      el('p', {}, 'My father flew to Bangalore to spend the weekend with me.'),
      el('p', {}, 'An ordinary weekend, without any announcement, quietly became one I\'ll remember for a long time.'),
      el('span', { class: 'hero-kicker' }, 'Sixteen stops · Three days · One story')
    ),

    el('div', { class: 'hero-scroll' },
      el('span', {}, 'Begin'),
      el('div', { class: 'scroll-line' })
    )
  );
}

/* -------------------------------------------------------------
   RENDER — JOURNEY OVERVIEW
   ------------------------------------------------------------- */
function renderJourneyOverview() {
  const dayColors = { saturday: '#7a5f3a', sunday: '#3b5a7a', monday: '#2a6640' };

  const cards = SITE_DATA.chapters.flatMap(chapter =>
    chapter.memories.map(memory => {
      const theme = PLACE_THEMES[memory.id];
      const mark = el('div', {
        class: 'jcard-mark',
        style: `background:${theme ? theme.markBg : '#555'};`
      }, theme ? theme.markText : '?');

      return el('div', { class: 'journey-card' },
        mark,
        el('div', { class: 'jcard-info' },
          el('div', { class: 'jcard-name' }, memory.place),
          el('div', { class: 'jcard-meta' }, `${chapter.label} · ${memory.time}`)
        )
      );
    })
  );

  return el('section', { class: 'v2-journey' },
    el('div', { class: 'journey-header' },
      el('h2', {}, 'Sixteen stops. Three days. A city that feels like home.'),
      el('p', {}, 'From açaí in the morning to tiramisu at midnight — here\'s everything, in order.')
    ),
    el('div', { class: 'journey-stops' }, ...cards)
  );
}

/* -------------------------------------------------------------
   RENDER — DAY INTRO
   ------------------------------------------------------------- */
function renderDayIntro(chapter) {
  const data = DAY_INTROS[chapter.id];
  if (!data) return el('div');

  const accentColors = { saturday: '#d97706', sunday: '#4f46e5', monday: '#16a34a' };
  const accent = accentColors[chapter.id] || '#7a5f3a';

  const pills = data.stops.map(name =>
    el('span', { class: 'day-pill' }, name)
  );

  const statsEls = data.stats.map(s => el('div', { class: 'day-stat' }, s));

  const section = el('section', {
    class: `v2-day-intro day-${chapter.id}`,
    'data-chapter-id': chapter.id
  },
    el('div', { class: 'day-intro-inner' },
      el('div', { class: 'day-eyebrow', style: `color:${accent}` }, data.label),
      el('div', { class: 'day-name' }, data.name),
      el('div', { class: 'day-stats' }, ...statsEls),
      el('p', { class: 'day-intro-copy' }, data.copy),
      el('div', { class: 'day-stop-pills', style: `--accent:${accent}` }, ...pills)
    )
  );

  // Set accent for this day section
  section.style.setProperty('--accent', accent);
  return section;
}

/* -------------------------------------------------------------
   RENDER — PLACE MARK (initials badge)
   ------------------------------------------------------------- */
function renderPlaceMark(theme) {
  return el('div', {
    class: 'place-mark',
    style: `background:${theme.markBg};`
  }, theme.markText);
}

/* -------------------------------------------------------------
   RENDER — PLACE HERO SCREEN
   ------------------------------------------------------------- */
function renderPlaceHeroScreen(memory, theme, chapterId) {
  const screen = el('div', {
    class: 'place-hero-screen',
    'data-place-id': memory.id,
    'data-chapter-id': chapterId,
    style: `--place-gradient:${theme.gradient}; --accent:${theme.accent};`
  },
    el('div', { class: 'place-hero-inner' },
      el('div', { class: 'place-time-tag' }, memory.time),
      renderPlaceMark(theme),
      el('h2', { class: 'place-name-large' }, memory.place),
      el('p', { class: 'place-tagline' }, theme.tagline)
    )
  );
  return screen;
}

/* -------------------------------------------------------------
   RENDER — MEDIA ELEMENT (photo or video)
   ------------------------------------------------------------- */
function renderMediaEl(mediaObj) {
  if (!mediaObj) return null;
  const ext = (mediaObj.src || '').split('.').pop().toLowerCase();
  if (mediaObj.type === 'video' || ext === 'mov' || ext === 'mp4') {
    const mime = (ext === 'mov') ? 'video/mp4' : `video/${ext}`;
    const vid = document.createElement('video');
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    const src = document.createElement('source');
    src.src = mediaObj.src;
    src.type = mime;
    vid.appendChild(src);
    vid.setAttribute('aria-label', mediaObj.alt || '');
    return vid;
  }
  const img = document.createElement('img');
  img.src = mediaObj.src;
  img.alt = mediaObj.alt || '';
  img.loading = 'lazy';
  img.decoding = 'async';
  return img;
}

/* -------------------------------------------------------------
   RENDER — PLACE STORY SCREEN
   ------------------------------------------------------------- */
/* -------------------------------------------------------------
   RENDER — WIDGETS (stat / quote / badge / chip)
   ------------------------------------------------------------- */
function renderWidgets(theme) {
  if (!theme.widgets || !theme.widgets.length) return el('div', {});
  const items = theme.widgets.map((w, i) => {
    const delay = `${i * 0.06}s`;
    if (w.type === 'stat') {
      return el('div', { class: 'w-stat reveal-widget', style: `transition-delay:${delay}` },
        el('span', { class: 'w-stat-num' }, w.number),
        el('span', { class: 'w-stat-label' }, w.label)
      );
    }
    if (w.type === 'quote') {
      return el('div', { class: 'w-quote reveal-widget', style: `transition-delay:${delay}` }, w.text);
    }
    if (w.type === 'badge') {
      return el('div', { class: 'w-badge reveal-widget', style: `transition-delay:${delay}` }, w.text);
    }
    return el('div', { class: 'w-chip reveal-widget', style: `transition-delay:${delay}` }, w.text);
  });
  return el('div', { class: 'story-widgets' }, ...items);
}

function renderPlaceStoryScreen(memory, theme) {
  const widgetsEl = renderWidgets(theme);
  const lines = (theme.storyLines || []).map(line =>
    el('p', { class: 'story-line' }, line)
  );

  const textCol = el('div', { class: 'story-text-col', style: `--accent:${theme.accent};` },
    widgetsEl,
    el('blockquote', { class: 'story-pull-quote', style: `border-color:${theme.accent};` }, theme.pullQuote),
    el('div', { class: 'story-lines' }, ...lines)
  );

  let layoutClass = `layout-${memory.layout || 'text-photo'}`;
  let mediaContent;

  if (memory.layout === 'text-photos' || memory.layout === 'text-videos') {
    if (memory.media.length >= 2) {
      const dbl = el('div', { class: 'story-media-double' },
        renderMediaEl(memory.media[0]),
        renderMediaEl(memory.media[1])
      );
      mediaContent = el('div', { class: 'story-media-col' }, dbl);
    } else {
      mediaContent = el('div', { class: 'story-media-col' }, renderMediaEl(memory.media[0]));
    }
  } else if (memory.layout === 'text-video') {
    const videoEl = renderMediaEl(memory.media[0]);
    layoutClass = 'layout-text-video';
    return el('div', { class: `place-story-screen ${layoutClass}` },
      el('div', { class: 'story-text-col', style: `--accent:${theme.accent};` },
        widgetsEl,
        el('blockquote', { class: 'story-pull-quote', style: `border-color:${theme.accent};` }, theme.pullQuote),
        el('div', { class: 'story-lines' }, ...lines)
      ),
      el('div', { class: 'place-video-strip' }, videoEl)
    );
  } else {
    mediaContent = el('div', { class: 'story-media-col' }, renderMediaEl(memory.media[0]));
  }

  return el('div', { class: `place-story-screen ${layoutClass}` }, textCol, mediaContent);
}


/* -------------------------------------------------------------
   RENDER — PLACE ANCHOR (large quote + gradient wash)
   ------------------------------------------------------------- */
function renderPlaceAnchor(memory, theme) {
  const quoteText = theme.anchorQuote || theme.pullQuote;
  return el('div', {
    class: 'place-anchor-screen',
    style: `--place-gradient:${theme.gradient}; --accent:${theme.accent};`
  },
    el('div', { class: 'anchor-bg-wash' }),
    el('blockquote', { class: 'anchor-quote-text' }, quoteText),
    el('div', { class: 'anchor-attribution', style: `color:${theme.accent}` }, memory.place)
  );
}


/* -------------------------------------------------------------
   RENDER — FULL PLACE SECTION
   ------------------------------------------------------------- */
function renderPlace(memory, chapterId) {
  const theme = PLACE_THEMES[memory.id] || {
    gradient: 'linear-gradient(160deg, #1a1208, #3d2a0e)',
    accent: '#7a5f3a',
    markBg: '#3d2a0e',
    markText: '?',
    chimeFreq: 440,
    tagline: '',
    widgets: [],
    pullQuote: '',
    storyLines: []
  };

  const wrapper = el('section', {
    class: 'v2-place',
    id: memory.id,
    'data-place-id': memory.id
  });

  // Screen 1: Hero
  wrapper.appendChild(renderPlaceHeroScreen(memory, theme, chapterId));

  // Screen 2: Story + media
  wrapper.appendChild(renderPlaceStoryScreen(memory, theme));

  // Screen 3: Anchor (key quote, for emotional places)
  const emotionalPlaces = ['zlb23', 'filter-coffee', 'phurr', 'toit', 'si-nonnas', 'soka', 'wrong-apartment'];
  if (emotionalPlaces.includes(memory.id)) {
    wrapper.appendChild(renderPlaceAnchor(memory, theme));
  }

  return wrapper;
}

/* -------------------------------------------------------------
   RENDER — CHAPTER (day intro + places)
   ------------------------------------------------------------- */
function renderChapter(chapter, index) {
  const wrap = el('div', {
    class: `v2-chapter chapter-${chapter.id}`,
    'data-chapter-id': chapter.id
  });
  wrap.appendChild(renderDayIntro(chapter));
  chapter.memories.forEach(memory => {
    wrap.appendChild(renderPlace(memory, chapter.id));
  });
  return wrap;
}

/* -------------------------------------------------------------
   RENDER — REFLECTION
   ------------------------------------------------------------- */
function renderReflection() {
  const paras = SITE_DATA.reflection.paragraphs.map((text, i) =>
    el('p', { class: 'reflection-p' }, text)
  );
  return el('section', { class: 'v2-reflection' },
    el('div', { class: 'reflection-inner' }, ...paras)
  );
}

/* -------------------------------------------------------------
   RENDER — DEDICATION
   ------------------------------------------------------------- */
/* -------------------------------------------------------------
   RENDER — HAPPY FATHER'S DAY (replaces plain dedication)
   ------------------------------------------------------------- */
function renderFathersDay() {
  const d = SITE_DATA.dedication;
  const items = d.lines.map(line => el('li', { class: 'fday-line' }, line));

  return el('section', { class: 'v2-fathers-day' },
    el('div', { class: 'fday-glow' }),
    el('div', { class: 'fday-inner' },
      el('div', { class: 'fday-eyebrow' }, 'Father’s Day · June 2026'),
      el('h2', { class: 'fday-heading' }, 'Happy Father’s Day.'),
      el('p', { class: 'fday-sub' },
        'Three days. Sixteen places. One city. One weekend that quietly became something worth keeping.'
      ),
      el('div', { class: 'fday-card' },
        el('span', { class: 'fday-salutation' }, d.salutation),
        el('ul', { class: 'fday-lines' }, ...items),
        el('span', { class: 'fday-separator' }, d.separator),
        el('span', { class: 'fday-closing' }, d.closing),
        el('span', { class: 'fday-sig' }, d.signature)
      )
    )
  );
}


/* -------------------------------------------------------------
   RENDER — FOOTER
   ------------------------------------------------------------- */
function renderFooter() {
  return el('footer', { class: 'v2-footer' },
    el('p', {}, 'Made with love · Bengaluru · June 2026')
  );
}

/* -------------------------------------------------------------
   INIT
   ------------------------------------------------------------- */
function init() {
  const root = document.getElementById('v2-root');
  if (!root) return;

  root.appendChild(renderHero());
  root.appendChild(renderJourneyOverview());

  SITE_DATA.chapters.forEach((chapter, i) => {
    root.appendChild(renderChapter(chapter, i));
  });

  root.appendChild(renderReflection());
  root.appendChild(renderFathersDay());
  root.appendChild(renderFooter());

  requestAnimationFrame(() => {
    buildMap();
    initMapToggle();
    const overlay = document.getElementById('map-overlay');
    if (overlay) overlay.style.height = overlay.scrollHeight + 'px';
  });

  initSoundButton();
  initReveal();
  initScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
