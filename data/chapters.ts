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
    // mainMessage: "Pehli baar coaching mein mile the, tab honestly nahi laga tha ki humari kabhi itni achhi dosti hogi. Par tu itni achhi nikli ki pata hi nahi chala kab tu ek stranger se meri life ka itna special part ban gayi.",
    // supportingMessage: "Hum bhale hi zyada nahi milte. Par jab recently itne time baad mile, toh sach mein aisa laga hi nahi ki itne din ho gaye the. Wahi baatein, wahi hasi-mazaak, wahi ek dusre ko chidhana... jaise beech mein koi gap aaya hi nahi tha.",
    // optionalMessage: "Aur shayad yahi toh sabse special hai humari dosti mein. Ki chahe kitna bhi time beet jaaye, tere saath sab kuch utna hi apna sa lagta hai.\n\nPata nahi tujhe iska ehsaas hai ya nahi, par tu mere liye un logon mein se hai jinse milkar lagta hai woooo kya hi loggg hai :)",
    // closingLine: "Bas aise hi rehna, apni issi pagal si personality ke saath. Aur haan, milna thoda zyada kar diya kar... ❤️",
    // accentColor: "#A8DDE8", // soft ice blue
    // bgImagePath: "/photos/test6.png.jpeg",
    mainMessage: "This is private :)",
    supportingMessage: "Hello ARYAN",
    optionalMessage: "Bye Aryan",
    closingLine: "HAHAHAHAHAHAHAHAHAHAHA",
    accentColor: "#A8DDE8",
    bgImagePath: "/photos/image.png",
  }
];

