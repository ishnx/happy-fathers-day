/**
 * memories.js
 * Single source of truth for all site content.
 * To add a memory: add an entry to the relevant chapter's `memories` array
 * and drop the corresponding media file(s) into assets/.
 */

const SITE_DATA = {

  cover: {
    title: "A Weekend in Bangalore",
    period: "June 2026",
    city: "Bengaluru",
    dedication: "For Dad.",
  },

  chapters: [

    // ─── SATURDAY ────────────────────────────────────────────────────────────
    {
      id: "saturday",
      label: "Saturday",
      intro: "The plan was Pizza 4P’s. Their reservation system was down and the waitlist wasn’t moving. We pivoted.",
      memories: [

        {
          id: "acai-theory",
          place: "Acai Theory",
          time: "Morning",
          media: [
            {
              src: "assets/saturday_1_acai_theory.jpg",
              alt: "An acai bowl at Acai Theory, Bangalore — deep purple, served in a pale bowl on an outdoor table",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "The morning was cool — the kind of Bangalore cool that makes you walk slowly on purpose. We found a table outside and I ordered the OG acai bowl. Dark purple, dense, very cold. I explained the antioxidants, the Amazonian origins, the nutritional argument. He listened patiently, then took a spoonful. The cold hit his teeth before the flavour did. He smiled. Too cold. Too subtle. Not quite his thing. We finished the bowl anyway, the two of us sharing without discussion, watching people and flowers and the morning pass by."
        },

        {
          id: "baan-phadthai",
          place: "Baan Phadthai",
          time: "Late Morning",
          media: [
            {
              src: "assets/saturday_2_bann_phadthai_1.jpg",
              alt: "Pad Thai noodles at Baan Phadthai, Bangalore — Michelin Bib Gourmand recognised",
              type: "photo"
            },
            {
              src: "assets/saturday_2_bann_phadthai_2.jpg",
              alt: "A spiced Thai dish at Baan Phadthai, Bangalore",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "Right after, we walked to Baan Phadthai — a Michelin Bib Gourmand restaurant from Bangkok that I’d been wanting to bring him to for a while. He’d wanted Pizza 4P’s, and here we were at a Thai restaurant instead. He didn’t bring it up once. He tried the Phad Thai, worked through the spicier dishes with genuine curiosity, and ended up liking it. Not politely liking it. Actually liking it. I was more relieved than I needed to be."
        },

        {
          id: "kaori-cafe",
          place: "Kaori Cafe at Izanagi",
          time: "Afternoon",
          media: [
            {
              src: "assets/saturday_3_kaori.jpg",
              alt: "Hojicha ice cream at Kaori Cafe, Izanagi — pale brown-gold Japanese roasted green tea ice cream",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "He wasn’t interested in dessert. I pushed. We walked to Kaori Cafe at Izanagi, a Japanese restaurant nearby, and I ordered him the Hojicha ice cream — roasted green tea, pale brown-gold, nothing like any ice cream he’d had before. One spoonful in and his expression changed. He tried to pace himself. He couldn’t. “This is something else,” he said, somewhere between the second and third bite. His first Japanese ice cream. Probably not his last."
        },

        {
          id: "bier-library",
          place: "The Bier Library",
          time: "Late Afternoon",
          media: [
            {
              src: "assets/saturday_4_bier_library_1.jpg",
              alt: "Beer sample glasses at The Bier Library, Bangalore — a local microbrewery",
              type: "photo"
            },
            {
              src: "assets/saturday_4_bier_library_2.jpg",
              alt: "Seafood curry and garlic bread at The Bier Library, Bangalore",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "He loves craft beer, so The Bier Library was always on the list. Four or five drafts in, these particular ones weren’t quite right. None of them. He was a good sport about each, but they didn’t hit. Then we ordered a Hot Toddy — warm brandy, cloves, the kind of drink that belongs to a different era — and watched everything change. He loved it immediately, the way you love something that feels right rather than impressive. The seafood arrived: prawns for him, squid for me, garlic bread specifically requested to finish the curry with. He ate everything. On the way home, he slept for four hours."
        },

        {
          id: "zlb23",
          place: "ZLB 23 at The Leela Palace",
          time: "Evening",
          media: [
            {
              src: "assets/saturday_5_zlb23.MOV",
              alt: "Inside ZLB 23 — the Kyoto-inspired speakeasy at The Leela Palace, Bangalore. India’s Best Bar at Asia’s 50 Best Bars 2024.",
              type: "video"
            }
          ],
          layout: "text-video",
          narrative: "When he woke up, we drove to The Leela Palace. ZLB 23 is a Kyoto-inspired speakeasy inside the hotel — you need a reservation, and when you arrive, you’re led through a restaurant and then a live kitchen before the bar reveals itself. Voted India’s Best Bar at Asia’s 50 Best Bars 2024. I didn’t mention any of this until we were already seated. The grand piano played. A Sri Lankan bar takeover was running that night — cocktails you drink slowly because there’s no good reason to hurry them, and tiger prawns neither of us could stop thinking about for the rest of the evening. We sat for hours. The conversations were the kind that don’t happen as easily at home — not because they’re difficult, but because home already has its own rhythms and noise. In a place like that, something opens up differently."
        },

        {
          id: "phurr",
          place: "Phurr — Elevated Vegetarian Cuisine",
          time: "Night",
          media: [
            {
              src: "assets/saturday_6_phurr_1.jpg",
              alt: "A beautifully plated starter at Phurr, Bangalore — elevated vegetarian cuisine",
              type: "photo"
            },
            {
              src: "assets/saturday_6_phurr_2.jpg",
              alt: "The welcome drink at Phurr — a porcelain egg cracked open to reveal coconut milk and mango pulp inside",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "After an auto ride home, I showed him a YouTube video about Prohibition — the history, the enforcement, the underground culture he had literally just experienced for the first time. He watched the whole thing. It added something. Then we got ready for our 10:30 PM reservation at Phurr, Elevated Vegetarian Cuisine. He walked in slightly skeptical: it was late, it was vegetarian, and ‘elevated’ could mean anything. A welcome drink arrived first — a porcelain egg placed in a nest, cracked open at the table to reveal coconut milk and mango pulp inside. He laughed. He tried it. Everything that followed — the starters, the mocktails, the desserts — was the finest vegetarian food either of us had ever had. He said so himself, which I wasn’t expecting him to say out loud, which somehow made it more true. We packed leftover starters to take home. Not because we were full. Because we wanted more the next day."
        }

      ]
    },

    // ─── SUNDAY ──────────────────────────────────────────────────────────────
    {
      id: "sunday",
      label: "Sunday",
      intro: "Sunday started earlier on purpose. We’d figured out the rhythm.",
      memories: [

        {
          id: "tanjore-tiffins",
          place: "Tanjore Tiffins",
          time: "Morning",
          media: [
            {
              src: "assets/sunday_1_tanjore_tiffins.jpg",
              alt: "Egg dosa and mutton curry at Tanjore Tiffins, Bangalore",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "Our first morsel of the day was mutton — not coffee, not toast, nothing gradual. Mutton curry on egg dosa at Tanjore Tiffins, a small, unpretentious place that does this combination exceptionally well. He’d never had the two together before. One bite in, and his eyes said everything his full mouth couldn’t. He ordered an extra plain dosa to finish the curry with. Nothing was left. It was also the most affordable meal of the weekend by a significant margin, which seemed to quietly please him."
        },

        {
          id: "umesh-refreshments",
          place: "Umesh Refreshments",
          time: "Morning",
          media: [
            {
              src: "assets/sunday_2_umesh.jpg",
              alt: "Filter coffee in a traditional steel tumbler and saucer at Umesh Refreshments, Bangalore",
              type: "photo"
            }
          ],
          layout: "photo-text",
          narrative: "On the way to finally making it to Pizza 4P’s, we stopped at Umesh Refreshments. There’s nothing decorative about the place — no atmosphere, no pitch. Just very good filter coffee. He’d been here before, with Mom, on one of his first visits to Bangalore. He ordered two. Exactly the right amount of sugar, exactly the right temperature. Some places don’t need to be new to matter. This one is better precisely because it isn’t."
        },

        {
          id: "pizza-4ps",
          place: "Pizza 4P’s",
          time: "Late Morning",
          media: [
            {
              src: "assets/sunday_3_pizza_4ps.jpg",
              alt: "A pizza at Pizza 4P’s Bangalore — the high table near the baking area, the best seat in the house",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "We finally made it. Two days in the making, which probably helped. We got the best table — a high top near the baking area, warm but not too close to the heat. He didn’t love the mocktails. I loved mine. The pizza was what it always is: the kind of food that makes you close your eyes mid-bite, involuntarily. We’d been here before as a family, and again in Ho Chi Minh City on a trip none of us have stopped mentioning since. The garlic shrimp pizza. The burrata. These are things that don’t improve and don’t need to. We ate mostly in silence, which is the correct response to a meal like that."
        },

        {
          id: "toit",
          place: "Toit, Indiranagar",
          time: "Afternoon",
          media: [
            {
              src: "assets/sunday_4_toit_1.jpg",
              alt: "Beer sample flight at Toit microbrewery, Indiranagar, Bangalore",
              type: "photo"
            },
            {
              src: "assets/sunday_4_toit_2.jpg",
              alt: "Afternoon at Toit — the original Bangalore microbrewery, quieter and better on a Sunday afternoon",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "Toit on a Sunday afternoon is calmer than its usual self — less crowded, easier, more room to sit. He tried six or seven sample beers. He genuinely liked two of them. He opened Keep Notes on his phone and logged each one: which were worth remembering, which were fine, which were not worth repeating. He’s going to Germany in September. I thought about him at a Biergarten somewhere, notes open, ordering confidently and actually knowing why — and felt something I can only describe as disproportionate pride.\n\nHe talked about his IIM Bangalore days. Stories I’d heard in pieces before, now more complete — weekends of organized chaos, buses that waited longer than scheduled so the plan could go a little further than permitted. In the places where these things happened, stories feel closer to real. I mostly listened. Some stories get better if you don’t interrupt them.\n\nOn the way out, we ordered one Hot Toddy to go. They used cheaper brandy. He noticed immediately and said so. We laughed about it for the rest of the cab ride."
        },

        {
          id: "wrong-apartment",
          place: "The Wrong Apartment",
          time: "Afternoon",
          media: [
            {
              src: "assets/sunday_4.5_forgot_how_home_looks_after_toit.MOV",
              alt: "Dad navigating the wrong apartment building after Toit — completely certain he was in the right place",
              type: "video"
            }
          ],
          layout: "text-video",
          narrative: "Back home after Toit, he was relaxed — a little tipsy, and completely confident. He walked through the wrong gate, stood in front of the wrong door, and spent a full minute trying to understand why the lock wasn’t responding. The building looked identical to ours. He was entirely certain it was ours. It wasn’t. I stood ten feet behind him and recorded everything. I have never deleted it, and I never will."
        },

        {
          id: "soka",
          place: "Soka",
          time: "Evening",
          media: [
            {
              src: "assets/sunday_5_soka_1.jpg",
              alt: "The intimate bar space at Soka, Bangalore — thirty-eight seats, bartender-led Omakase experience",
              type: "photo"
            },
            {
              src: "assets/sunday_5_soka_2.jpg",
              alt: "A custom cocktail built to specification at Soka, Bangalore",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "Soka has thirty-eight seats. It feels like fewer. He found it slightly claustrophobic, but he noticed everything — the drinks at the other tables, the people, the particular intimacy of the place. “This is where your generation goes on dates,” he observed, looking around. Accurate. The bartenders — there are no waiters here, only bartenders — came to the table and asked him what he wanted. Not what he’d like from the menu. Just: what did he want? They built something for him. He tasted it, asked for two specific adjustments, and received exactly what he’d asked for. Duck skewers, chicken skewers, Thecha Prawns that we ordered twice because the first time wasn’t enough. It was the first time a cocktail had ever been made specifically for him. He seemed quietly pleased, in the way he tends to be pleased by things he didn’t expect to enjoy."
        },

        {
          id: "magnolia-bakery",
          place: "Magnolia Bakery",
          time: "Night",
          media: [
            {
              src: "assets/sunday_6_magonlia_bakery.jpg",
              alt: "A chocolate cupcake from Magnolia Bakery, Bangalore — rich buttercream frosting on a soft base",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "One chocolate cupcake. He ate the cream off the top first — very deliberately, as if it deserved its own moment. Then the rest. Then he reached over and ate some of mine too. I let him. It was the right thing to do."
        }

      ]
    },

    // ─── MONDAY ──────────────────────────────────────────────────────────────
    {
      id: "monday",
      label: "Monday",
      intro: "Both of us had work. We met in the evening. There was no grand plan for the last day — just three more stops before his early flight.",
      memories: [

        {
          id: "filter-coffee",
          place: "The Filter Coffee",
          time: "Evening",
          media: [
            {
              src: "assets/monday_1_the_filter_coffee_1.jpg",
              alt: "Pesarattu — green moong dosa at The Filter Coffee, Bangalore",
              type: "photo"
            },
            {
              src: "assets/monday_1_the_filter_coffee_2.jpg",
              alt: "The table at The Filter Coffee, Bangalore — a restaurant that carries a specific memory for this family",
              type: "photo"
            }
          ],
          layout: "text-photos",
          narrative: "The Filter Coffee carries a specific memory for our family. The last time we came here together — all four of us — my sister and I were both earning for the first time. Something shifted in the air. Our parents understood that a phase had ended, or perhaps that a new one had begun, and both of them had tears in their eyes. We all did, which is not something that happens in our family without meaning something. Coming back wasn’t just about the food — though the food was excellent: his green moong pesarattu, my onion uttapam, the medu vada we shared. It was about standing in the same place and noticing how much had moved since then. We didn’t cry this time. We didn’t need to. The memory of crying was enough."
        },

        {
          id: "fomomo",
          place: "Fomomo",
          time: "Evening",
          media: [
            {
              src: "assets/monday_2_fomomo.jpg",
              alt: "Wok-tossed chicken momos at Fomomo, Bangalore — carefully presented in a minimal restaurant",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "At some point in the past, he had told me he would never eat a momo in his entire life. I remembered this when I suggested the stop. He came in curious and wary in roughly equal measure. Fomomo is minimal and careful — one thing, done very well. He tried the wok-tossed chicken momos. He didn’t love them. He didn’t hate them, which for him is a significant revision from ‘never in my entire life.’ He appreciated the seriousness with which the restaurant treated momos — the clean design, the attention. He walked out having done something he’d said he wouldn’t. He seemed quietly satisfied about this. I was too."
        },

        {
          id: "si-nonnas",
          place: "Si Nonna’s",
          time: "Night",
          media: [
            {
              src: "assets/monday_3_si_nonnas.jpg",
              alt: "Inside Si Nonna’s — the French-Italian interior of the original sourdough pizza restaurant, Bangalore",
              type: "photo"
            }
          ],
          layout: "text-photo",
          narrative: "He was ready to go home. The flight was early the next morning and he had been full for hours. I pushed for one more stop. He resisted, gently. We went anyway. Si Nonna’s — their tiramisu, just to finish properly. It was light and seamless, gone before either of us had fully registered eating it, and it left nothing heavy. He looked around at the interiors — the French-Italian quiet of the room — and said it was a good place to bring family. He was right. We paid and walked out. I put him in a cab. We didn’t say anything important. It was late, and there was an early flight, and some weekends end exactly the way they should — without announcement."
        }

      ]
    }

  ],

  // ─── REFLECTION ──────────────────────────────────────────────────────────
  reflection: {
    paragraphs: [
      "Every time I try to describe this weekend, I find myself describing the restaurants. As if that were the point.",
      "The food was excellent. That’s not the point. The food was an excuse to keep moving — to have something in front of us while we talked about everything else. His IIM years. Germany in September. The time we were all here together and couldn’t stop crying, at a table exactly like one of these, because something had quietly become different.",
      "He is someone who doesn’t keep score. Who doesn’t show disappointment when plans change. Who logs beers in Keep Notes for a trip three months away. Who eats the cream off a cupcake as if it deserves its own moment. Who tries momos when he’s sworn he never would, and is quietly satisfied that he did.",
      "I’ve been spending time with him my whole life.\nI’m still learning things about him."
    ]
  },

  // ─── FATHER'S DAY DEDICATION ─────────────────────────────────────────────
  dedication: {
    salutation: "Dad —",
    lines: [
      "Thank you for flying in.",
      "For trying the Hojicha ice cream.",
      "For the four-hour nap.",
      "For getting completely, confidently lost in the wrong apartment.",
      "For being exactly yourself for three days without adjustment."
    ],
    separator: "You don’t need me to say this. I’m saying it anyway.",
    closing: "Happy Father’s Day.",
    signature: "— Ishan"
  }

};
