export interface ChapterContent {
  id: string;
  title: string;
  mainMessage: string;
  supportingMessage: string;
  optionalMessage?: string;
  closingLine?: string;
  imagePath?: string;
  bgImagePath?: string;
  accentColor?: string;
}

export const chaptersData: ChapterContent[] = [
  {
    id: "chapter-01",
    title: "THE NANO EFFECT",
    mainMessage: "Some people don't even realize how much warmth they bring into the lives of people around them.",
    supportingMessage: "And you're very much one of those people.",
    accentColor: "#E9BFA8", // soft peach
    bgImagePath: "/photos/test1.png.jpeg",
  },
  {
    id: "chapter-02",
    title: "THE LORE 😂",
    mainMessage: "Teri life ke plot twists Netflix waalon ko bhi competition de sakte hain. Nayi job join karna, phir decide karna ki \"Yaar, ye toh mere liye hai hi nahi.\" 😭",
    supportingMessage: "Career mein bhi madam ko sab kuch apni terms pe chahiye. Pasand aaya toh theek, nahi aaya toh \"Thank you, next!\" 😂",
    optionalMessage: "Par ek baat hai, tujhe pata hai ki tujhe life mein kya chahiye, aur uske liye tu compromise karne waalon mein se nahi hai.",
    closingLine: "Bas, har doosre din career ka naya season launch mat kar diya kar. 😭❤️",
    accentColor: "#D8C5F0", // pastel lavender
    bgImagePath: "/photos/test2.png.jpeg",
  },

  {
    id: "chapter-04",
    title: "THE FIRE WITHIN ✨",
    mainMessage: "Bade sapne, unhe poora karne ka junoon, aur ek aisi zidd jo tujhe kabhi rukne nahi deti.",
    supportingMessage: "Tu sirf apne dreams ke peeche nahi bhaagti, tu unhe reality banane ke liye apna 100% deti hai. AIML se lekar DRDO mein Data Analyst Intern banne tak, tune har step pe apni mehnat se apni jagah banayi hai.",
    optionalMessage: "Aur sabse khaas baat? Tu kabhi sirf \"itna kaafi hai\" pe nahi rukti. Hamesha kuch naya seekhna, kuch aur karna, khud ko aur better banana.\n\nBas ek baat yaad rakhna, apne dreams ko chase karte hue kabhi uss spark ko mat khona jo tujhe tu banata hai.",
    closingLine: "The world hasn't seen everything you're capable of yet. ❤️",
    accentColor: "#F3D58A", // pastel yellow
    bgImagePath: "/photos/test4.png.jpeg",
  },
  {
    id: "chapter-05",
    title: "THE DARING",
    mainMessage: "Some people stay quiet to keep things comfortable.",
    supportingMessage: "You? Not really.",
    optionalMessage: "If something feels wrong, you speak up. If something isn't right, you stand your ground.\nAnd if a place doesn't deserve you, you know when it's time to walk away. Even if it's a brand-new job.",
    closingLine: "That's the Nano kind of courage.",
    accentColor: "#F5AFAF", // dusty pink
    bgImagePath: "/photos/test5.png.jpeg",
  },
  {
    id: "chapter-06",
    title: "THE US CHAPTER 🫂",
    mainMessage : "Pehli baar coaching mein mile the, tab honestly bilkul nahi laga tha ki is insaan se meri itni achhi dosti ho jayegi. Matlab first impression kuch khaas tha bhi nahi... aur somehow dosti survive kar rhi hai abhi tak. Impressive, honestly. 😂",
    supportingMessage: "Hum bhale hi zyada nahi milte, but recently jab itne time baad mile, toh laga hi nahi ki itna gap ho gaya tha. Wahi pagalpan, wahi hasi-mazaak, wahi  irritate karna... matlab kuch log time ke saath badalte hain, hum dono bas aur zyada pagal ho gaye hain. 😂",
    optionalMessage: "I think humari dosti ki sabse achhi baat ye hai ki hum kitne bhi time tak na mile, milte hi koi catch-up session nahi hota. Seedha wahi purani bakwas pe wapas. 😂 Zero awkwardness, zero formalities — bas 5 minute milo aur lagta hai haan, kuch cheezein abhi bhi bilkul nahi badli. Aur tu un rare logon mein se hai jinke saath zyada effort nahi lagta. Milna ho toh mil lo, baat karni ho toh kar lo, warna mahino tak gayab raho... dosti ko koi farak hi nahi padta. Basically, low maintenance friendship ka premium version. 🤝😂",
    closingLine: "Bas apni yehi cruel personality maintain rakhna. Zyada decent banne ki zarurat nahi hai, waise bhi suit nahi karega. 😂 Aur kabhi-kabhi darshan de diya kar... har baar milne ke liye calendar event create karna zaroori nahi hota. ❤️",
    accentColor: "#A8DDE8", // soft ice blue
    bgImagePath: "/photos/test6.png.jpeg",
      }
];

