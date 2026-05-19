import { useState, useRef, useEffect } from "react";

const NAV = [
  { id: "dashboard", label: "Home", icon: "⌂" },
  { id: "learn", label: "Learn", icon: "📖" },
  { id: "drills", label: "Drills", icon: "🎯" },
  { id: "coach", label: "AI Coach", icon: "💬" },
  { id: "library", label: "Library", icon: "📚" },
];

const TOPICS = [
  {
    id: "trinity", title: "The Holy Trinity", icon: "☩", tag: "Foundation",
    summary: "One God existing eternally as three distinct Persons — Father, Son, and Holy Spirit.",
    content: [
      { heading: "Core Statement", body: "There is one God who exists as three distinct Persons. Each Person is fully God. Not three gods, not three parts of one God — one God in three Persons." },
      { heading: "Common Errors", body: "Modalism: God wearing three masks (wrong). Tritheism: Three separate gods (wrong). Hierarchy: The Son as a lesser created being (wrong)." },
      { heading: "Key Scripture", body: "John 1:1 — The Word was God. Matthew 3:16-17 — Father, Son, and Spirit all present simultaneously at Jesus's baptism. Matthew 28:19 — Baptize in the name (singular) of all three." },
      { heading: "Street Response", body: "When challenged about Nicaea: 'The Council of Nicaea defended what Scripture already taught — it didn't create the doctrine. John 1:1 was written 300 years before Nicaea. The Trinity is in the text, not the council.'" },
    ],
    quiz: [
      { q: "The Council of Nicaea CREATED the doctrine of the Trinity in 325 AD.", answer: false, explain: "Nicaea defended the Trinity against Arius — the doctrine was already present in Scripture centuries earlier. Nicaea didn't create it; it defended it." },
      { q: "The Trinity means Christians worship three separate gods.", answer: false, explain: "Christianity is strictly monotheistic. The Trinity is one God in three Persons — not three gods. That error is called tritheism." },
      { q: "All three Persons of the Trinity are present simultaneously at Jesus's baptism.", answer: true, explain: "Matthew 3:16-17 — Son in the water, Spirit descending as a dove, Father speaking from heaven. Three distinct Persons at the same moment." },
    ]
  },
  {
    id: "jesus", title: "The Nature of Jesus", icon: "✝", tag: "Christology",
    summary: "Jesus is fully God and fully human — two natures, one Person. The Hypostatic Union.",
    content: [
      { heading: "Fully God", body: "John 8:58 — 'Before Abraham was, I AM' (using God's own name from Exodus 3:14 — the crowd immediately tried to stone Him). John 10:30 — 'I and the Father are one.' Colossians 2:9 — The whole fullness of deity dwells in Him bodily." },
      { heading: "Fully Human", body: "John 1:14 — The Word BECAME flesh. He got tired (John 4:6), wept (John 11:35), felt anguish (Luke 22:44), and physically died. He wasn't acting — He entered the full human experience." },
      { heading: "Why He Had to Be Both", body: "Had to be human: the debt was owed by humanity — had to come from within. Had to be God: only an infinite Being could make an infinite payment for all sin. Had to be sinless: a guilty man cannot pay for another." },
      { heading: "Street Response", body: "'If Jesus was God, who was He praying to?' — Prayer is communication between Persons of the Trinity. Jesus voluntarily limited His divine prerogatives to walk in full dependence on the Father — modeling the relationship He was inviting us into. (Philippians 2:5-8)" },
    ],
    quiz: [
      { q: "Jesus is 50% God and 50% human.", answer: false, explain: "Jesus is 100% God and 100% human — two complete natures in one Person. This is the Hypostatic Union. Not a mixture, but a union." },
      { q: "In John 8:58 Jesus uses the divine name 'I AM' for Himself.", answer: true, explain: "This is God's own name from Exodus 3:14. The crowd immediately tried to stone Him for blasphemy — they understood exactly what He was claiming." },
      { q: "Jesus had to be sinless because a guilty man cannot pay for another.", answer: true, explain: "Correct. He owed nothing — so He could pay everything on our behalf. This is why the virgin birth and sinless life matter theologically." },
    ]
  },
  {
    id: "spirit", title: "The Holy Spirit", icon: "🕊", tag: "Pneumatology",
    summary: "The third Person of the Trinity — fully God, living inside every believer permanently.",
    content: [
      { heading: "He Is a Person — Not a Force", body: "He can be grieved (Ephesians 4:30), lied to (Acts 5:3-4), quenched (1 Thessalonians 5:19), and has His own will (1 Corinthians 12:11). He intercedes for you right now with groanings too deep for words (Romans 8:26-27)." },
      { heading: "Indwelt vs. Filled", body: "INDWELT: Spirit lives IN you at salvation. Permanent. Every believer. (Romans 8:9). FILLED: Spirit has full control of you. Ongoing. Requires your cooperation. Ephesians 5:18 commands 'keep being filled' — present continuous tense." },
      { heading: "His 6 Roles in You", body: "Seals you at salvation (Eph 1:13). Convicts of sin (John 16:8). Teaches you through Scripture (John 14:26). Guides your steps (Romans 8:14). Empowers your witness (Acts 1:8). Produces fruit in your character (Galatians 5:22-23)." },
      { heading: "Daily Practice", body: "Don't grieve Him — deal with sin quickly. Don't quench Him — respond to His prompts when He nudges you. Stay in Scripture — He works through the Word. Pray in dependence — acknowledge you cannot do this without Him." },
    ],
    quiz: [
      { q: "The Holy Spirit is a force or energy — not a Person.", answer: false, explain: "He is a Person with a mind, emotions, and will. You cannot grieve a force — only a person. Acts 5 says lying to the Spirit is lying to God." },
      { q: "Being indwelt and being filled with the Spirit are the same thing.", answer: false, explain: "Indwelt = Spirit lives in you permanently at salvation. Filled = Spirit has full control — ongoing and requires your active cooperation." },
      { q: "Acts 1:8 directly connects the Holy Spirit to the power for evangelism.", answer: true, explain: "'You will receive power when the Holy Spirit comes upon you, and you will be my witnesses.' The boldness for street work is received from the Spirit, not manufactured by you." },
    ]
  },
  {
    id: "salvation", title: "Salvation", icon: "⚓", tag: "Soteriology",
    summary: "Three phases — Justification (past), Sanctification (present), Glorification (future).",
    content: [
      { heading: "Justification — Past", body: "A legal declaration: 'Not guilty.' Your sin credited to Christ's account. His righteousness credited to yours (2 Corinthians 5:21). Saved from the PENALTY of sin. By grace through faith alone — never by works (Ephesians 2:8-9). Done. Final. Permanent." },
      { heading: "Sanctification — Present", body: "The ongoing process of being made like Christ. God works IN you, you work IT OUT simultaneously (Philippians 2:12-13). The Spirit is the primary agent. You will still sin — confess quickly (1 John 1:9). Suffering is one of God's sanctifying tools (Romans 5:3-4)." },
      { heading: "Glorification — Future", body: "The final phase — sin completely eradicated, resurrection body received. Romans 8:29-30 puts glorification in past tense because from God's eternal perspective it is as certain as done. You will be fully conformed to the image of Christ." },
      { heading: "Street Response", body: "'Once saved always saved sounds like a license to sin.' — Real justification produces real sanctification. A person with no change over time has reason to examine whether genuine salvation occurred. The two cannot be permanently separated." },
    ],
    quiz: [
      { q: "Justification means God gradually makes you better over time.", answer: false, explain: "That's sanctification. Justification is an instant, complete legal declaration — 'Not guilty' — at the moment of saving faith. It is not a process." },
      { q: "Sanctification requires both God's work and your active cooperation.", answer: true, explain: "Philippians 2:12-13 — 'Work out your salvation... for it is God who works in you.' Your effort and God's power operate simultaneously. Not passive, not self-sufficient." },
      { q: "Glorification refers to becoming well-known for your faith.", answer: false, explain: "Glorification is the future phase of salvation — receiving a resurrection body and being fully conformed to Christ's image with the sin nature completely eradicated." },
    ]
  },
  {
    id: "manuscripts", title: "Manuscript Reliability", icon: "📜", tag: "Apologetics",
    summary: "The Bible is the most historically documented piece of ancient literature in existence.",
    content: [
      { heading: "The Dead Sea Scrolls", body: "Discovered 1947 near the Dead Sea. Over 900 manuscripts dated 250 BC–68 AD — over 1,000 years older than previously available manuscripts. When compared to the Masoretic Text, the Isaiah scroll (all 66 chapters) matched with 95% accuracy across 1,000 years of hand-copying." },
      { heading: "NT Manuscript Evidence", body: "24,000+ NT manuscripts. Earliest copy ~125 AD — gap of only 25-50 years from original. Compare: Julius Caesar — 10 manuscripts, 1,000-year gap. Homer's Iliad — 1,900 manuscripts, 500-year gap. No historian questions Caesar's words. Same standard must apply to the NT — it wins by a landslide." },
      { heading: "On the '400,000 Variants'", body: "A 'variant' includes spelling differences and word order changes. Even skeptic Bart Ehrman admits they are 'completely trivial' and that 'no Christian doctrine is founded on a textually disputed passage.' 99% of NT text is undisputed. The 1% affects zero core doctrines." },
      { heading: "Street Response", body: "'The Bible was changed.' Your answer: 'We have physical evidence — the Dead Sea Scrolls show 1,000 years of copying with virtually no change. And the NT has 24,000 manuscripts vs. 10 for Julius Caesar. Where specifically was it changed? Because the manuscripts don't show it.'" },
    ],
    quiz: [
      { q: "The Dead Sea Scrolls were discovered in the 20th century.", answer: true, explain: "Discovered in 1947 by a Bedouin shepherd boy near the Dead Sea — one of the most significant archaeological finds in history, transforming biblical scholarship." },
      { q: "The New Testament has fewer surviving manuscripts than the works of Julius Caesar.", answer: false, explain: "The NT has 24,000+ manuscripts. Caesar's works have about 10. The NT wins by every measure of ancient document reliability." },
      { q: "The 400,000 variants in NT manuscripts mean its core doctrines are unreliable.", answer: false, explain: "Most variants are trivial. 99% of NT text is undisputed. Zero core doctrines rest on a disputed passage. Even skeptic Bart Ehrman confirms this." },
    ]
  },
  {
    id: "god", title: "The Definition of God", icon: "∞", tag: "Theology Proper",
    summary: "God is self-existent, eternal, omniscient, omnipotent, perfectly holy, and perfectly loving.",
    content: [
      { heading: "Incommunicable Attributes", body: "Belong to God ALONE: Self-Existence — no source (Exodus 3:14). Immutability — never changes (Malachi 3:6). Eternality — outside time (Psalm 90:2). Omnipresence — everywhere (Psalm 139:7-8). Omniscience — all-knowing (Hebrews 4:13). Omnipotence — all-powerful (Jeremiah 32:17). Sovereignty — governs all things (Isaiah 46:9-10)." },
      { heading: "Communicable Attributes", body: "Shared in finite form with humans: Love (1 John 4:8 — He IS love). Holiness — 'Holy, holy, holy' Isaiah 6:3, the most emphasized attribute in Scripture. Justice — every sin accounted for (Deuteronomy 32:4). Mercy and Grace (Exodus 34:6-7). Faithfulness (Lamentations 3:22-23). Wrath — His settled holy opposition to evil (Romans 1:18)." },
      { heading: "Street Response", body: "'My God would never send anyone to hell.' — They have invented a god built from what they prefer. A God with no justice is not loving — He is indifferent. The same holiness that makes hell real is what makes heaven worth wanting." },
      { heading: "One-Sentence Definition", body: "God is the self-existent, eternal, all-knowing, all-powerful, perfectly holy, perfectly loving Creator and Sustainer of everything that exists — revealed most fully through Jesus Christ." },
    ],
    quiz: [
      { q: "God's immutability means He cannot respond to prayer.", answer: false, explain: "Immutability means His CHARACTER never changes — His promises, nature, and purposes remain eternally consistent. He still hears and responds to prayer within His unchanging will." },
      { q: "In Isaiah 6:3 'holy' is repeated three times — the highest emphasis in Hebrew.", answer: true, explain: "Repeating a word twice is emphasis in Hebrew. Three times (found nowhere else in Scripture for any other attribute) is the absolute highest emphasis. God is supremely, uniquely holy." },
      { q: "God's wrath is emotional and unpredictable like human anger.", answer: false, explain: "God's wrath is His settled, holy opposition to everything evil — not volatile or irrational. It flows from His justice and love, not from mood." },
    ]
  },
];

const VERSE_CATS = [
  {
    id: "gospel", label: "The Gospel", icon: "✝", color: "#c9a96e",
    verses: [
      { ref: "Romans 3:23", text: "For all have sinned and fall short of the glory of God.", use: "Establish that everyone needs the gospel — not just 'bad' people. This levels the playing field." },
      { ref: "Romans 6:23", text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.", use: "Show the consequence AND the solution in a single verse. Wages vs. gift is the key contrast." },
      { ref: "Romans 5:8", text: "But God shows his love for us in that while we were still sinners, Christ died for us.", use: "Prove God's love is unconditional — He didn't wait for us to clean up first." },
      { ref: "John 3:16", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.", use: "The anchor verse. Most people recognize it — use it to open the door to deeper conversation." },
      { ref: "Ephesians 2:8-9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.", use: "Shut down 'I'll earn it' thinking immediately. Salvation is a gift received, not a reward earned." },
      { ref: "Romans 10:9", text: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.", use: "The invitation — what responding to the gospel actually looks like in practical terms." },
    ]
  },
  {
    id: "boldness", label: "Your Boldness", icon: "🔥", color: "#da6a4a",
    verses: [
      { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control.", use: "Say this before you approach anyone. Fear in evangelism is not from God — go out in His power." },
      { ref: "1 Peter 3:15", text: "Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.", use: "Your mandate as an apologist. Three components: prepared, gentle, respectful — all three matter." },
      { ref: "Acts 1:8", text: "You will receive power when the Holy Spirit has come upon you, and you will be my witnesses.", use: "The boldness you need is received from the Spirit, not manufactured by you. Pray before you go out." },
      { ref: "Romans 1:16", text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.", use: "Memorize this and say it out loud before every street conversation. Own it." },
    ]
  },
  {
    id: "objections", label: "Answering Objections", icon: "🛡", color: "#4a9eda",
    verses: [
      { ref: "John 14:6", text: "I am the way, and the truth, and the life. No one comes to the Father except through me.", use: "Against 'all religions are the same.' Jesus made this exclusive claim Himself — this isn't Christians being narrow, this is Jesus's own words." },
      { ref: "Acts 4:12", text: "And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.", use: "Salvation is not one option among many. This is Peter's declaration before a hostile council." },
      { ref: "James 2:10", text: "For whoever keeps the whole law but fails in one point has become guilty of all of it.", use: "Against 'I'm a good person.' Nobody gets partial credit before a perfectly holy God. One violation = guilty." },
      { ref: "Isaiah 40:8", text: "The grass withers, the flower fades, but the word of our God will stand forever.", use: "Against 'the Bible was changed.' God's word endures. The Dead Sea Scrolls confirm it physically." },
      { ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", use: "Against the suffering objection. Not that everything IS good — but God works THROUGH everything for good." },
    ]
  },
  {
    id: "invitation", label: "Under Conviction", icon: "💛", color: "#da4a8a",
    verses: [
      { ref: "John 6:37", text: "Whoever comes to me I will never cast out.", use: "When someone thinks they are too far gone or too sinful. Nobody is disqualified who comes to Jesus." },
      { ref: "Romans 10:13", text: "For everyone who calls on the name of the Lord will be saved.", use: "Simple, clear, no exceptions. Everyone means everyone. Use when someone is close but hesitant." },
      { ref: "Isaiah 1:18", text: "Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow.", use: "God Himself invites the reasoning. Perfect verse for the skeptic — God is not afraid of your questions." },
      { ref: "Revelation 3:20", text: "Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him.", use: "Jesus is the one pursuing them. They just have to open the door. Use when someone is under conviction." },
    ]
  },
];

const SCENARIOS = [
  {
    id: "hebrew", label: "Hebrew Israelite", icon: "✡", color: "#e07040",
    persona: "a Hebrew Israelite street preacher who believes Christianity is the white man's religion, the Trinity was invented at Nicaea, and that Jesus came only for the children of Israel",
    opening: "So you out here telling people about that European religion? That's not for us. The Most High is for the children of Israel. And that Trinity you believe in — show me 'Trinity' in the Bible. You can't, because Constantine made that up at Nicaea. Your whole religion was used to enslave our people."
  },
  {
    id: "muslim", label: "Muslim", icon: "☪", color: "#4a9eda",
    persona: "a devout Muslim who believes Jesus was only a prophet, that Christians worship three gods, and that the Bible has been corrupted",
    opening: "Brother, we respect Isa — Jesus — as a great prophet. But calling him God? That's shirk — associating partners with Allah. Allah has no partners, no sons. Your Bible says Jesus prayed to God — how can God pray to God? And your Bible has been changed. The original Injeel is long gone. Islam is the final and complete revelation."
  },
  {
    id: "jw", label: "Jehovah's Witness", icon: "📖", color: "#9a4eda",
    persona: "a Jehovah's Witness who believes Jesus is Michael the Archangel — the first creation of Jehovah — not God Himself, and that the Trinity is a pagan teaching",
    opening: "We appreciate your zeal, but the Trinity is pagan — not in Scripture. Jesus himself said 'The Father is greater than I am' — John 14:28. And in the proper translation of John 1:1, it says the Word was 'a god' — showing Jesus is a god, but not Almighty God. Jehovah alone is the Most High."
  },
  {
    id: "skeptic", label: "Skeptic / Atheist", icon: "🔬", color: "#4eda9a",
    persona: "a confident secular skeptic who thinks religion is a human invention, science has disproven God, and the Bible is full of contradictions written by primitive people",
    opening: "Look, I respect your right to believe what you want. But the Bible was written thousands of years ago by people who didn't know about evolution or neuroscience. We have rational explanations for everything now. There's zero evidence for God, and the Bible contradicts itself constantly. Why would any intelligent, thinking person believe this stuff in 2025?"
  },
  {
    id: "goodperson", label: "\"Good Person\"", icon: "⚖", color: "#eda04a",
    persona: "a friendly, moral person who believes being a good person is enough — they volunteer, treat people well, and can't see why they'd need Jesus",
    opening: "I think you're doing a good thing, and I respect your faith. But honestly, I don't feel like I need all that. I'm a good person — I help people, I don't hurt anyone, I give to charity. I think if there is a God, He'd look at my life and see I'm genuinely trying. A loving God wouldn't reject someone who's just trying to do right."
  },
  {
    id: "suffering", label: "Suffering Objector", icon: "☁", color: "#da4a8a",
    persona: "someone who experienced real personal tragedy and uses that pain as their primary reason for rejecting God — not hostile, just genuinely hurt",
    opening: "I used to believe. I really did. But I lost my daughter — she was only seven years old. Cancer. I prayed every single day. My whole church prayed. And she still died. Where was God? If He's all-powerful and all-loving like you say, why didn't He save her? I can't worship a God who lets that happen to an innocent little girl."
  },
];

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("dashboard");
  const [completedTopics, setCompletedTopics] = useState([]);
  const [masteredVerses, setMasteredVerses] = useState({});
  const [coachSessions, setCoachSessions] = useState(0);
  const [readList, setReadList] = useState({});

  const totalMastered = Object.values(masteredVerses).flat().length;
  const totalVerses = VERSE_CATS.reduce((a, c) => a + c.verses.length, 0);
  const totalRead = Object.values(readList).filter(Boolean).length;
  const totalBooks = LEVELS.reduce((a, l) => a + l.books.length, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#090c14", color: "#e0d4c0", fontFamily: "'Georgia', 'Times New Roman', serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .fade-up { animation: fadeUp 0.3s ease both; }
        button:hover { opacity: 0.85; }
        textarea:focus, input:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0d1020; } ::-webkit-scrollbar-thumb { background: #2a3a4a; border-radius: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: "#0a0e1a", borderBottom: "1px solid #1a2232", padding: "0 4px", display: "flex", alignItems: "stretch", position: "sticky", top: 0, zIndex: 100 }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setScreen(n.id)} style={{
            flex: 1, background: "none", border: "none",
            borderBottom: screen === n.id ? "2px solid #c9a96e" : "2px solid transparent",
            padding: "10px 4px 8px", color: screen === n.id ? "#c9a96e" : "#3a4a5a",
            cursor: "pointer", fontFamily: "inherit", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, transition: "all 0.2s",
          }}>
            <span style={{ fontSize: 14 }}>{n.icon}</span>
            <span style={{ fontSize: 8, letterSpacing: 0.5, fontFamily: "'Arial', sans-serif" }}>{n.label.toUpperCase()}</span>
          </button>
        ))}
      </nav>

      <div style={{ flex: 1 }}>
        {screen === "dashboard" && <Dashboard completedTopics={completedTopics} totalMastered={totalMastered} totalVerses={totalVerses} coachSessions={coachSessions} totalRead={totalRead} totalBooks={totalBooks} setScreen={setScreen} />}
        {screen === "learn" && <Learn completedTopics={completedTopics} setCompletedTopics={setCompletedTopics} />}
        {screen === "drills" && <Drills masteredVerses={masteredVerses} setMasteredVerses={setMasteredVerses} />}
        {screen === "coach" && <Coach coachSessions={coachSessions} setCoachSessions={setCoachSessions} />}
        {screen === "library" && <Library readList={readList} setReadList={setReadList} />}
      </div>
    </div>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard({ completedTopics, totalMastered, totalVerses, coachSessions, totalRead, totalBooks, setScreen }) {
  const handleFeedback = () => {
    const subject = encodeURIComponent("StreetReady Feedback");
    const body = encodeURIComponent(
      "1. What section did you spend the most time on?\n\n" +
      "2. Is there anything theologically that concerned you?\n\n" +
      "3. What is one thing missing that you wish was here?\n\n"
    );
    window.open(`mailto:streetreadyapp@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>

      {/* MISSION STATEMENT */}
      <div className="fade-up" style={{ background: "linear-gradient(135deg,#0d1428 0%,#1a1000 100%)", border: "1px solid #2a2010", borderLeft: "3px solid #c9a96e", borderRadius: 12, padding: "20px 18px", marginBottom: 16 }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#c9a96e", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Arial',sans-serif" }}>StreetReady Apologetics</div>
        <div style={{ fontSize: 20, fontWeight: "bold", color: "#fff", marginBottom: 10, fontStyle: "italic" }}>Your Training Platform</div>
        <div style={{ height: 1, background: "#2a2010", marginBottom: 10 }} />
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#c9a96e", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Arial',sans-serif" }}>Our Mission</div>
        <div style={{ fontSize: 13, color: "#c9a96e", fontWeight: "bold", marginBottom: 4, lineHeight: 1.6 }}>Always be prepared — 1 Peter 3:15.</div>
        <div style={{ fontSize: 13, color: "#8a7a5a", lineHeight: 1.7 }}>StreetReady trains everyday believers to be ready before the conversation finds them.</div>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { label: "Topics Done", value: `${completedTopics.length}/${TOPICS.length}`, icon: "📖", color: "#c9a96e", s: "learn" },
          { label: "Verses Mastered", value: `${totalMastered}/${totalVerses}`, icon: "🎯", color: "#4a9eda", s: "drills" },
          { label: "Coach Sessions", value: coachSessions, icon: "💬", color: "#9a4eda", s: "coach" },
          { label: "Books Read", value: `${totalRead}/${totalBooks}`, icon: "📚", color: "#4eda9a", s: "library" },
        ].map((s, i) => (
          <div key={i} onClick={() => setScreen(s.s)} className="fade-up" style={{ flex: "1 1 120px", background: "#111827", border: "1px solid #1a2232", borderRadius: 10, padding: "12px 10px", cursor: "pointer", textAlign: "center", animationDelay: `${i * 0.07}s` }}>
            <div style={{ fontSize: 16, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 16, fontWeight: "bold", color: s.color, marginBottom: 3 }}>{s.value}</div>
            <div style={{ fontSize: 9, color: "#3a4a5a", letterSpacing: 1, fontFamily: "'Arial',sans-serif" }}>{s.label.toUpperCase()}</div>
          </div>
        ))}
      </div>

      {/* QUICK START */}
      <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Arial',sans-serif" }}>Quick Start</div>
      {[
        { label: "Study a Topic", sub: "Build your theological foundation", icon: "📖", s: "learn", c: "#c9a96e" },
        { label: "Drill Verses", sub: "Practice key Scripture by function", icon: "🎯", s: "drills", c: "#4a9eda" },
        { label: "Practice with AI Coach", sub: "Face real objections — AI coaches your responses", icon: "💬", s: "coach", c: "#9a4eda" },
        { label: "Study Library", sub: "17 curated books — Beginner to Advanced", icon: "📚", s: "library", c: "#4eda9a" },
      ].map((a, i) => (
        <button key={i} onClick={() => setScreen(a.s)} className="fade-up" style={{
          width: "100%", background: "#111827", border: "1px solid #1a2232", borderLeft: `3px solid ${a.c}`,
          borderRadius: 10, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
          color: "inherit", fontFamily: "inherit", textAlign: "left", marginBottom: 8, animationDelay: `${(i + 4) * 0.07}s`,
        }}>
          <span style={{ fontSize: 22 }}>{a.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d4c0", marginBottom: 2 }}>{a.label}</div>
            <div style={{ fontSize: 11, color: "#3a4a5a" }}>{a.sub}</div>
          </div>
          <span style={{ color: "#2a3a4a", fontSize: 16 }}>›</span>
        </button>
      ))}

      {/* DAILY ANCHOR — rotating verses */}
      {(() => {
        const anchors = [
          { text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.", ref: "Romans 1:16" },
          { text: "We destroy every proud obstacle that keeps people from knowing God. We capture their rebellious thoughts and teach them to obey Christ.", ref: "2 Corinthians 10:5" },
          { text: "But you are his chosen people — he chose you to tell about the wonderful things he has done.", ref: "1 Peter 2:9" },
          { text: "Greater is He who is in you than he who is in the world.", ref: "1 John 4:4" },
          { text: "If you need wisdom, ask our generous God, and he will give it to you.", ref: "James 1:5" },
          { text: "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need.", ref: "Matthew 6:33" },
          { text: "The word of God is alive and powerful — sharper than the sharpest two-edged sword.", ref: "Hebrews 4:12" },
        ];
        const today = anchors[new Date().getDay() % anchors.length];
        return (
          <div className="fade-up" style={{ marginTop: 8, background: "#080e08", border: "1px solid #1a3a1a", borderRadius: 10, padding: "14px 16px", animationDelay: "0.6s" }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#4eda7a", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Arial',sans-serif" }}>Daily Anchor</div>
            <div style={{ fontSize: 14, color: "#b0c8a0", lineHeight: 1.8, fontStyle: "italic" }}>"{today.text}"</div>
            <div style={{ fontSize: 11, color: "#3a6a3a", marginTop: 6 }}>— {today.ref}</div>
          </div>
        );
      })()}

      {/* FEEDBACK BUTTON */}
      <button onClick={handleFeedback} className="fade-up" style={{
        width: "100%", background: "#0d1520", border: "1px solid #2a3a5a",
        borderRadius: 10, padding: "13px 16px", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 12,
        color: "inherit", fontFamily: "inherit", textAlign: "left",
        marginTop: 8, animationDelay: "0.7s",
      }}>
        <span style={{ fontSize: 18 }}>✉</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: "bold", color: "#4a9eda", marginBottom: 2 }}>Submit Feedback</div>
          <div style={{ fontSize: 11, color: "#3a4a5a" }}>Theology concerns, missing content, suggestions</div>
        </div>
        <span style={{ color: "#2a3a4a", fontSize: 14 }}>›</span>
      </button>

      {/* LEGAL FOOTER */}
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #1a2232", display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
        <a href="https://www.termsfeed.com/live/09683278-4865-41b2-b591-a052097dde5e" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: "#2a3a4a", textDecoration: "none", fontFamily: "'Arial',sans-serif", letterSpacing: 1 }}>TERMS OF SERVICE</a>
        <span style={{ color: "#1a2232", fontSize: 10 }}>|</span>
        <a href="https://docs.google.com/document/d/1C_YNmsEhTrYl4zLpTj7R2qKog0HKMJFa8x0zsO7ZlPI/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: "#2a3a4a", textDecoration: "none", fontFamily: "'Arial',sans-serif", letterSpacing: 1 }}>PRIVACY POLICY</a>
        <span style={{ color: "#1a2232", fontSize: 10 }}>|</span>
        <span style={{ fontSize: 10, color: "#2a3a4a", fontFamily: "'Arial',sans-serif", letterSpacing: 1 }}>© 2026 STREETREADY LLC</span>
      </div>

    </div>
  );
}

// ── FAITHS DATA ───────────────────────────────────────────────────────────────
const FAITHS = [
  {
    id: "islam", title: "Islam", icon: "☪", color: "#4a9eda", bg: "#000e1a",
    tag: "Fastest Growing Urban Presence",
    summary: "Islam holds Jesus (Isa) was a great prophet — but not God. The Bible was corrupted. Muhammad is the final prophet. The Quran is God's final word.",
    sections: [
      {
        heading: "Core Beliefs",
        body: "One God (Allah) — no partners, no sons (Tawhid). Muhammad is the final prophet. The Quran is God's literal word. Five Pillars: Shahada (declaration of faith), Salat (prayer 5x daily), Zakat (charity), Sawm (fasting in Ramadan), Hajj (pilgrimage to Mecca). Jesus (Isa) is a prophet and messiah — but not divine, not crucified. Salvation through submission and good works."
      },
      {
        heading: "What the Quran Says About Jesus",
        body: "Jesus was born of a virgin (Surah 19) — Islam affirms the virgin birth. He performed miracles. He was a prophet and messiah. He was NOT crucified — someone else died in His place (Surah 4:157). He will return at the end of times. He is NOT the Son of God — that is considered shirk (the worst sin — associating partners with Allah)."
      },
      {
        heading: "Their Key Arguments Against Christianity",
        body: "1. The Trinity means three gods — shirk. 2. The Bible has been corrupted and changed. 3. Paul invented Christianity — Jesus never claimed to be God. 4. Jesus prayed to God — how can God pray to God? 5. The original gospel (Injeel) has been lost and replaced."
      },
      {
        heading: "The Bible Corruption Argument — Full Response",
        body: "This is their most common and most important argument. Here is how to dismantle it step by step.\n\nSTEP 1 — Ask when it was corrupted. The Quran was written in the 600s AD. The New Testament was written 25–50 years after Jesus — approximately 50–100 AD. The Old Testament manuscripts (Dead Sea Scrolls) date to 250 BC. All of this existed 500–600 years before Muhammad. If the Bible was corrupted — it had to happen before Islam arrived. So ask: 'When exactly was it corrupted and who did it?'\n\nSTEP 2 — Use the Quran against the argument. Surah 5:47 tells Christians to 'judge by what Allah revealed in the Gospel.' Surah 10:94 tells Muhammad himself — if in doubt, ask those who read the Scripture before you. If the Bible was corrupted, why does the Quran tell people to read it and judge by it? The Quran's own words collapse the corruption argument.\n\nSTEP 3 — Present the manuscript evidence. We have over 24,000 New Testament manuscripts — more than any other ancient document by a massive margin. Homer's Iliad has 643. Caesar's Gallic Wars has 10. The Dead Sea Scrolls (discovered 1947) contain Isaiah scrolls from 250 BC that are word-for-word identical to modern translations. No corruption. The manuscripts before Islam and after Islam match.\n\nSTEP 4 — Ask for the original. 'Show me the uncorrupted version.' No such document exists. No Muslim scholar has ever produced an original uncorrupted Bible because there is no evidence one ever existed that differed from what we have.\n\nSTEP 5 — Timeline closes it. Jesus lived approximately 4 BC – 30 AD. Muhammad was born 570 AD. That is a 570+ year gap. The New Testament was circulating throughout the Roman Empire, North Africa, and the Middle East for centuries before Islam. For the corruption to work — thousands of manuscripts across dozens of countries and languages would all have to have been changed identically with no surviving originals and no record of the change. That is historically impossible."
      },
      {
        heading: "Your Counter-Response",
        body: "On the Trinity: We agree there is one God. The question is the nature of that one God — which Scripture reveals as Father, Son, and Spirit. One God — three persons. On Jesus never claiming divinity: John 8:58, John 10:30, John 14:9 — He claimed it repeatedly and was nearly stoned for it every time. His enemies understood exactly what He was claiming. On Jesus praying to the Father: This is the Son communicating within the Trinity and expressing His genuine humanity during the incarnation — not proof He is not God."
      },
      {
        heading: "Key Verses to Know",
        body: "Surah 5:47 — Allah tells Christians to judge by the Gospel (their own text). Surah 4:157 — denies the crucifixion (contradicts all historical sources). Surah 5:116 — misidentifies the Trinity as Father, Son, and Mary (no Christian has ever believed this). Isaiah 9:6 — the child born will be called 'Mighty God, Everlasting Father.' John 1:1,14 — the Word was God and became flesh."
      },
      {
        heading: "Recommended Resource",
        body: "Seeking Allah Finding Jesus by Nabeel Qureshi — a former Muslim who became a Christian apologist. Gives you the argument from the inside. Essential reading before engaging Muslims on the street."
      }
    ]
  },
  {
    id: "hebrew", title: "Hebrew Israelites", icon: "✡", color: "#e07040", bg: "#1a0800",
    tag: "Primary Urban Challenge",
    summary: "Black Americans are the true Israelites of Scripture. Jesus came only for Israel. Christianity as practiced is a white European corruption of the original Hebrew faith.",
    sections: [
      {
        heading: "Core Beliefs",
        body: "Black Americans, Hispanics, and Native Americans are the true descendants of the 12 tribes of Israel. The curses of Deuteronomy 28 identify Black people as the true Israelites (slavery, oppression, etc.). Jesus came only for the lost sheep of Israel (Matthew 15:24). The name 'Jesus' is pagan — the true name is Yahshua or Yeshua. Christianity as practiced is a white Roman religion. The Most High is the God of Israel specifically — not a universal God."
      },
      {
        heading: "Their Key Arguments",
        body: "1. Deuteronomy 28:68 — 'You will be brought back to Egypt in ships' — they say this refers to the slave trade. 2. Matthew 15:24 — Jesus came only for the lost sheep of Israel. 3. Revelation 2:9 — those who say they are Jews but are not. 4. The physical descriptions of biblical figures (hair like wool, feet like bronze) indicate Black identity. 5. Christianity was forced on enslaved Africans — it is not our religion."
      },
      {
        heading: "Your Counter-Response",
        body: "On Matthew 15:24: Read in context. Jesus also healed the Canaanite woman (Matthew 15:28), the Roman centurion's servant (Matthew 8:10-13), and commissioned His disciples to ALL nations (Matthew 28:19). His earthly focus on Israel was strategic — not the scope of the gospel. On Galatians 3:28-29: 'There is neither Jew nor Greek...if you are Christ's then you are Abraham's offspring.' Identity in Christ transcends ethnicity entirely. On Christianity being white: The Ethiopian eunuch (Acts 8) was an African convert around 30 AD. Africa had the gospel before Europe did. The church in Alexandria Egypt was one of the earliest and most influential in history."
      },
      {
        heading: "Key Verses to Know",
        body: "Galatians 3:28-29 — No Jew or Greek in Christ. Romans 10:12-13 — No distinction, everyone who calls on Him will be saved. Acts 8:26-39 — African man receives the gospel directly from Philip. Matthew 28:19 — Go to ALL nations. Genesis 12:3 — All families of the earth blessed through Abraham. Revelation 7:9 — Every nation, tribe, people, and language before the throne."
      },
      {
        heading: "Important Distinction",
        body: "Hebrew Israelite groups range widely. Some are peaceful and focused on identity and culture. Others (1 West Camp, Israelite School of Universal Practical Knowledge) are militant, confrontational, and openly hostile. Know which camp you are dealing with before engaging. With militant camps — ask questions and listen first. With moderate camps — build relationship before doctrine."
      },
      {
        heading: "Recommended Resource",
        body: "Urban Apologetics by Eric Mason — already on your reading list. The most thorough and culturally credible treatment of this challenge available. Written by Black scholars for the urban context."
      }
    ]
  },
  {
    id: "jw", title: "Jehovah's Witnesses", icon: "📖", color: "#9a4eda", bg: "#0e001a",
    tag: "Will Come to Your Door",
    summary: "Jesus is Michael the Archangel — the first creation of Jehovah, not God Himself. The Trinity is a pagan teaching. Only 144,000 go to heaven. The soul is not immortal.",
    sections: [
      {
        heading: "Core Beliefs",
        body: "Jehovah alone is God. Jesus is Michael the Archangel — the first and greatest creation, not co-equal with God. The Holy Spirit is a force not a person. The Trinity is a pagan invention. Only 144,000 go to heaven — the rest of faithful JWs live on a paradise earth. Hellfire does not exist — the dead are simply unconscious (soul sleep). Blood transfusions are forbidden. Holidays and birthdays are pagan. The Watchtower Society is God's sole channel of truth on earth."
      },
      {
        heading: "Their Primary Weapon — The New World Translation",
        body: "The Watchtower produced their own Bible translation (NWT) that alters key verses to support their theology. John 1:1 — original Greek: 'the Word was God.' NWT adds 'a' to read 'the Word was a god.' Colossians 1:15-17 — they insert the word 'other' four times to make Jesus a created being ('all OTHER things'). No respected Greek scholar — Christian or secular — supports these alterations."
      },
      {
        heading: "Their Key Arguments",
        body: "1. Jesus himself said 'The Father is greater than I' (John 14:28) — proving He is not equal to God. 2. John 1:1 in Greek justifies 'a god.' 3. The Trinity word is not in the Bible. 4. Proverbs 8:22 — Wisdom (Jesus) was 'produced' by God, proving He was created. 5. Revelation 3:14 — Jesus is 'the beginning of God's creation.'"
      },
      {
        heading: "Your Counter-Response",
        body: "On John 14:28 ('The Father is greater'): This refers to positional subordination during the incarnation — not ontological inferiority. Philippians 2:5-8 explains this. Jesus voluntarily took a lower position. On John 1:1: Every major Greek grammar expert rejects the NWT addition of 'a.' The construction in Greek (without the article before theos) emphasizes the nature of the Word — not make it indefinite. On Jesus being created: Colossians 1:17 — 'He is before all things and in Him all things hold together.' If Jesus was the first creation, He cannot also be before all things. The logic collapses."
      },
      {
        heading: "Your Best Verses Against JW Theology",
        body: "John 20:28 — Thomas calls Jesus 'My Lord and my God.' Jesus accepts it without correction. If Jesus were not God — correction was mandatory. Hebrews 1:6 — God commands all angels to worship the Son. If Jesus is an angel — God commanded angels to worship an angel (Deuteronomy 6:13 forbids worshiping anyone but God). Isaiah 44:6 + Revelation 1:17 — God calls Himself 'the first and the last.' Jesus uses the identical title for Himself. Two beings cannot independently be the first and last unless they are the same being. John 8:58 — 'Before Abraham was, I AM.' Jesus uses God's own eternal name (Exodus 3:14)."
      },
      {
        heading: "How to Engage JWs at the Door",
        body: "They are trained and will have responses ready. Do not try to overwhelm them with verses. Pick ONE argument and stay on it. The best opening: ask them to read John 20:28 in their own NWT and explain why Jesus did not correct Thomas. Then ask: 'If Jesus is not God, what should He have said?' Let them wrestle with it. Never be hostile — they are people Jesus died for who have been misled by an organization. Gentleness opens more doors than winning arguments."
      }
    ]
  }
];

// ── LEARN ─────────────────────────────────────────────────────────────────────
function Learn({ completedTopics, setCompletedTopics }) {
  const [mode, setMode] = useState("ours"); // "ours" | "theirs"
  const [topic, setTopic] = useState(null);
  const [faith, setFaith] = useState(null);
  const [quiz, setQuiz] = useState(false);
  const [qi, setQi] = useState(0);
  const [ans, setAns] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const startQuiz = () => { setQuiz(true); setQi(0); setAns(null); setScore(0); setDone(false); };
  const answer = (a) => {
    const correct = a === topic.quiz[qi].answer;
    setAns({ given: a, correct });
    if (correct) setScore(s => s + 1);
  };
  const next = () => {
    if (qi + 1 >= topic.quiz.length) {
      setDone(true);
      if (!completedTopics.includes(topic.id)) setCompletedTopics(p => [...p, topic.id]);
    } else { setQi(i => i + 1); setAns(null); }
  };

  // ── QUIZ VIEW ──
  if (topic && quiz) {
    const q = topic.quiz[qi];
    return (
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
        <button onClick={() => { setQuiz(false); setDone(false); }} style={backBtn}>← Back</button>
        {done ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }} className="fade-up">
            <div style={{ fontSize: 48, marginBottom: 12 }}>{score === topic.quiz.length ? "🏆" : "📖"}</div>
            <div style={{ fontSize: 22, fontWeight: "bold", color: "#c9a96e", marginBottom: 8 }}>{score}/{topic.quiz.length} Correct</div>
            <div style={{ fontSize: 14, color: "#4a5a6a", marginBottom: 24 }}>{score === topic.quiz.length ? "Perfect — topic marked complete!" : "Review the content and try again."}</div>
            <button onClick={() => { setTopic(null); setQuiz(false); setDone(false); }} style={{ background: "#0a1a0a", border: "1px solid #4eda7a", borderRadius: 8, color: "#4eda7a", cursor: "pointer", padding: "12px 24px", fontFamily: "inherit", fontSize: 14 }}>Back to Topics</button>
          </div>
        ) : (
          <div className="fade-up">
            <div style={{ fontSize: 11, color: "#3a4a5a", marginBottom: 16, fontFamily: "'Arial',sans-serif" }}>QUESTION {qi + 1} OF {topic.quiz.length}</div>
            <div style={{ background: "#111827", border: "1px solid #1a2232", borderRadius: 12, padding: "22px 18px", marginBottom: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#c9a96e", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Arial',sans-serif" }}>True or False?</div>
              <div style={{ fontSize: 17, color: "#e0d4c0", lineHeight: 1.7 }}>{q.q}</div>
            </div>
            {ans === null ? (
              <div style={{ display: "flex", gap: 10 }}>
                {[true, false].map(opt => (
                  <button key={String(opt)} onClick={() => answer(opt)} style={{ flex: 1, padding: "16px", borderRadius: 10, background: opt ? "#0a2a0a" : "#2a0a0a", border: `2px solid ${opt ? "#2a4a2a" : "#4a2a2a"}`, color: opt ? "#4eda7a" : "#da4a4a", cursor: "pointer", fontSize: 17, fontFamily: "inherit" }}>
                    {opt ? "✓ True" : "✗ False"}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div style={{ background: ans.correct ? "#0a2a0a" : "#2a0a0a", border: `2px solid ${ans.correct ? "#4eda7a" : "#da4a4a"}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: "bold", color: ans.correct ? "#4eda7a" : "#da4a4a", marginBottom: 6 }}>{ans.correct ? "✓ Correct!" : "✗ Not quite"}</div>
                  <div style={{ fontSize: 13, color: "#b0a898", lineHeight: 1.7 }}>{q.explain}</div>
                </div>
                <button onClick={next} style={{ width: "100%", background: "#1a2a3a", border: "1px solid #c9a96e", borderRadius: 10, color: "#c9a96e", cursor: "pointer", padding: "14px", fontFamily: "inherit", fontSize: 15 }}>
                  {qi + 1 >= topic.quiz.length ? "See Results" : "Next →"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── DOCTRINE DETAIL VIEW ──
  if (topic) {
    return (
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
        <button onClick={() => setTopic(null)} style={backBtn}>← Topics</button>
        <div className="fade-up">
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#c9a96e", textTransform: "uppercase", marginBottom: 4, fontFamily: "'Arial',sans-serif" }}>{topic.tag}</div>
          <h2 style={{ fontSize: 24, fontWeight: "bold", color: "#fff", margin: "0 0 6px", fontStyle: "italic" }}>{topic.title}</h2>
          <p style={{ fontSize: 13, color: "#4a5a6a", marginBottom: 20, lineHeight: 1.7 }}>{topic.summary}</p>
          {topic.content.map((s, i) => (
            <div key={i} style={{ marginBottom: 12, background: "#111827", border: "1px solid #1a2232", borderRadius: 10, padding: "16px 18px" }}>
              <div style={{ fontSize: 10, fontWeight: "bold", color: "#c9a96e", marginBottom: 8, letterSpacing: 2, fontFamily: "'Arial',sans-serif" }}>{s.heading.toUpperCase()}</div>
              <div style={{ fontSize: 13, color: "#b8b0a0", lineHeight: 1.85 }}>{s.body}</div>
            </div>
          ))}
          <button onClick={startQuiz} style={{ width: "100%", background: "linear-gradient(135deg,#1a2010,#0a1a2a)", border: "2px solid #c9a96e", borderRadius: 12, color: "#c9a96e", cursor: "pointer", padding: "16px", fontFamily: "inherit", fontSize: 15, marginTop: 6 }}>
            Take the Quiz →
          </button>
        </div>
      </div>
    );
  }

  // ── FAITH DETAIL VIEW ──
  if (faith) {
    return (
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
        <button onClick={() => { setFaith(null); setOpenSection(null); }} style={backBtn}>← Faiths</button>
        <div className="fade-up">
          <div style={{ background: faith.bg, border: `1px solid ${faith.color}`, borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: faith.color, textTransform: "uppercase", marginBottom: 4, fontFamily: "'Arial',sans-serif" }}>{faith.icon} {faith.tag}</div>
            <h2 style={{ fontSize: 22, fontWeight: "bold", color: "#fff", margin: "0 0 6px", fontStyle: "italic" }}>{faith.title}</h2>
            <p style={{ fontSize: 13, color: "#8a9a8a", margin: 0, lineHeight: 1.7 }}>{faith.summary}</p>
          </div>
          {faith.sections.map((s, i) => {
            const isOpen = openSection === i;
            const isCounter = s.heading.toLowerCase().includes("counter") || s.heading.toLowerCase().includes("verses to know");
            return (
              <div key={i} style={{ marginBottom: 10, background: "#0f1520", border: `1px solid ${isOpen ? faith.color : "#1a2232"}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button onClick={() => setOpenSection(isOpen ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", color: "inherit", fontFamily: "inherit", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {isCounter && <span style={{ fontSize: 14 }}>🛡</span>}
                    <span style={{ fontSize: 13, fontWeight: "bold", color: isOpen ? faith.color : "#c0b8a8" }}>{s.heading}</span>
                  </div>
                  <span style={{ color: faith.color, fontSize: 14, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                </button>
                {isOpen && (
                  <div style={{ borderTop: `1px solid ${faith.color}22`, padding: "12px 16px 14px" }}>
                    <div style={{ fontSize: 13, color: "#a8a098", lineHeight: 1.85 }}>{s.body}</div>
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ marginTop: 12, background: "#0a1a0a", border: "1px solid #1a3a1a", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontSize: 11, color: "#4a6a4a", lineHeight: 1.7, fontStyle: "italic" }}>
              ⚠️ Study to understand — not to win. The person who feels understood is far more likely to listen than the person who feels attacked. Gentleness and respect first. Always.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── MAIN LIST VIEW ──
  return (
    <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>

      {/* TOGGLE */}
      <div style={{ display: "flex", background: "#0f1520", border: "1px solid #1a2232", borderRadius: 10, padding: 4, marginBottom: 18, gap: 4 }}>
        {[
          { key: "ours", label: "What We Believe", icon: "✝" },
          { key: "theirs", label: "What Others Believe", icon: "🌐" },
        ].map(opt => (
          <button key={opt.key} onClick={() => setMode(opt.key)} style={{
            flex: 1, background: mode === opt.key ? (opt.key === "ours" ? "#1a2010" : "#0e001a") : "none",
            border: mode === opt.key ? `1px solid ${opt.key === "ours" ? "#c9a96e" : "#9a4eda"}` : "1px solid transparent",
            borderRadius: 8, padding: "10px 8px", cursor: "pointer", color: mode === opt.key ? "#e0d4c0" : "#3a4a5a",
            fontFamily: "inherit", fontSize: 13, fontWeight: mode === opt.key ? "bold" : "normal",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.2s",
          }}>
            <span>{opt.icon}</span> {opt.label}
          </button>
        ))}
      </div>

      {/* WHAT WE BELIEVE */}
      {mode === "ours" && (
        <>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 14, fontFamily: "'Arial',sans-serif" }}>Doctrine Modules</div>
          {TOPICS.map((t, i) => {
            const done = completedTopics.includes(t.id);
            return (
              <button key={t.id} onClick={() => setTopic(t)} className="fade-up" style={{
                width: "100%", background: "#111827", border: `1px solid ${done ? "#1a3a1a" : "#1a2232"}`,
                borderLeft: `4px solid ${done ? "#4eda7a" : "#c9a96e"}`, borderRadius: 10,
                padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center",
                gap: 12, color: "inherit", fontFamily: "inherit", textAlign: "left", marginBottom: 8, animationDelay: `${i * 0.06}s`,
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{t.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: "bold", color: "#e0d4c0" }}>{t.title}</span>
                    {done && <span style={{ fontSize: 9, background: "#0a2a0a", color: "#4eda7a", padding: "1px 6px", borderRadius: 3, letterSpacing: 1, fontFamily: "'Arial',sans-serif" }}>✓ DONE</span>}
                  </div>
                  <div style={{ fontSize: 10, color: "#c9a96e", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3, fontFamily: "'Arial',sans-serif" }}>{t.tag}</div>
                  <div style={{ fontSize: 11, color: "#3a4a5a" }}>{t.summary.substring(0, 65)}...</div>
                </div>
                <span style={{ color: "#2a3a4a", fontSize: 16 }}>›</span>
              </button>
            );
          })}
        </>
      )}

      {/* WHAT OTHERS BELIEVE */}
      {mode === "theirs" && (
        <>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Arial',sans-serif" }}>Comparative Religion</div>
          <div style={{ background: "#0d1520", border: "1px solid #1e2a3e", borderRadius: 10, padding: "11px 14px", marginBottom: 8, fontSize: 12, color: "#4a6a8a", lineHeight: 1.7 }}>
            Know what others believe — from their own sources. Study to understand, not to win. The person who feels understood is far more likely to listen.
          </div>
          <div style={{ background: "#0a0e1a", border: "1px solid #2a2a4a", borderRadius: 10, padding: "11px 14px", marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: "#5a5a8a", lineHeight: 1.7, fontStyle: "italic" }}>"Our fight is not against people on earth — we are fighting against spiritual powers of evil in the heavenly places."</div>
            <div style={{ fontSize: 10, color: "#3a3a5a", marginTop: 5, fontFamily: "'Arial',sans-serif" }}>— Ephesians 6:12 · Engage people. Not defeat them.</div>
          </div>
          {FAITHS.map((f, i) => (
            <button key={f.id} onClick={() => { setFaith(f); setOpenSection(null); }} className="fade-up" style={{
              width: "100%", background: "#111827", border: "1px solid #1a2232",
              borderLeft: `4px solid ${f.color}`, borderRadius: 10,
              padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center",
              gap: 12, color: "inherit", fontFamily: "inherit", textAlign: "left", marginBottom: 8, animationDelay: `${i * 0.06}s`,
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{f.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d4c0", marginBottom: 2 }}>{f.title}</div>
                <div style={{ fontSize: 10, color: f.color, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3, fontFamily: "'Arial',sans-serif" }}>{f.tag}</div>
                <div style={{ fontSize: 11, color: "#3a4a5a" }}>{f.summary.substring(0, 65)}...</div>
              </div>
              <span style={{ color: "#2a3a4a", fontSize: 16 }}>›</span>
            </button>
          ))}
          <div style={{ marginTop: 8, background: "#1a1000", border: "1px solid #2a2010", borderRadius: 10, padding: "11px 14px" }}>
            <div style={{ fontSize: 11, color: "#5a4a2a", lineHeight: 1.7, fontStyle: "italic" }}>
              🔜 Nation of Islam, Mormonism, and Afrocentric Spirituality coming in a future update.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ── DRILLS ────────────────────────────────────────────────────────────────────
function Drills({ masteredVerses, setMasteredVerses }) {
  const [cat, setCat] = useState(null);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showUse, setShowUse] = useState(false);

  const toggle = (ref) => {
    const key = cat.id;
    const cur = masteredVerses[key] || [];
    setMasteredVerses(p => ({ ...p, [key]: cur.includes(ref) ? cur.filter(r => r !== ref) : [...cur, ref] }));
  };
  const go = (dir) => { setFlipped(false); setShowUse(false); setTimeout(() => setIdx(i => (i + dir + cat.verses.length) % cat.verses.length), 100); };

  if (cat) {
    const card = cat.verses[idx];
    const mastered = (masteredVerses[cat.id] || []).includes(card.ref);
    return (
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <button onClick={() => { setCat(null); setIdx(0); setFlipped(false); }} style={backBtn}>← Categories</button>
          <span style={{ fontSize: 12, color: "#3a4a5a", marginLeft: "auto" }}>{idx + 1} / {cat.verses.length}</span>
        </div>

        <div onClick={() => setFlipped(f => !f)} className="fade-up" style={{
          background: flipped ? "#111827" : "linear-gradient(145deg,#0d1520,#111a0a)",
          border: `2px solid ${flipped ? cat.color : "#1a2232"}`, borderRadius: 16,
          padding: "30px 22px", cursor: "pointer", minHeight: 190,
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          textAlign: "center", transition: "all 0.25s", marginBottom: 12, position: "relative",
          boxShadow: flipped ? `0 0 30px ${cat.color}18` : "none",
        }}>
          {mastered && <div style={{ position: "absolute", top: 10, right: 10, background: cat.color, color: "#000", fontSize: 9, fontWeight: "bold", padding: "2px 7px", borderRadius: 3, fontFamily: "'Arial',sans-serif" }}>✓ MASTERED</div>}
          {!flipped ? (
            <>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 14, fontFamily: "'Arial',sans-serif" }}>Reference</div>
              <div style={{ fontSize: 28, color: cat.color, fontStyle: "italic", marginBottom: 10 }}>{card.ref}</div>
              <div style={{ fontSize: 11, color: "#2a3a2a", animation: "pulse 2s infinite" }}>tap to reveal</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 10, letterSpacing: 2, color: cat.color, textTransform: "uppercase", marginBottom: 14, fontFamily: "'Arial',sans-serif" }}>{card.ref}</div>
              <div style={{ fontSize: 15, color: "#d0c8b8", lineHeight: 1.85, fontStyle: "italic" }}>"{card.text}"</div>
            </>
          )}
        </div>

        {flipped && (
          <div style={{ marginBottom: 12 }}>
            <button onClick={() => setShowUse(s => !s)} style={{ width: "100%", background: showUse ? "#0d1520" : "#111827", border: `1px solid ${showUse ? cat.color : "#1a2232"}`, borderRadius: "10px 10px 0 0", padding: "11px 14px", color: showUse ? cat.color : "#3a4a5a", cursor: "pointer", fontFamily: "inherit", fontSize: 12, textAlign: "left", transition: "all 0.2s" }}>
              {showUse ? "▾" : "▸"} &nbsp;When to use this on the street
            </button>
            {showUse && <div style={{ background: "#0d1520", border: `1px solid ${cat.color}`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: "13px 16px", fontSize: 13, color: "#8aaa7a", lineHeight: 1.8 }}>{card.use}</div>}
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => go(-1)} style={navBtn}>← Prev</button>
          <button onClick={() => toggle(card.ref)} style={{ flex: 1, background: mastered ? "#0a2a0a" : "#080e08", border: `1px solid ${mastered ? cat.color : "#2a4a2a"}`, borderRadius: 8, color: mastered ? cat.color : "#3a5a3a", cursor: "pointer", padding: "11px", fontFamily: "inherit", fontSize: 13 }}>
            {mastered ? "✓ Mastered" : "Mark Mastered"}
          </button>
          <button onClick={() => go(1)} style={navBtn}>Next →</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 14, fontFamily: "'Arial',sans-serif" }}>Verse Drill Categories</div>
      {VERSE_CATS.map((c, i) => {
        const m = (masteredVerses[c.id] || []).length;
        return (
          <button key={c.id} onClick={() => { setCat(c); setIdx(0); setFlipped(false); setShowUse(false); }} className="fade-up" style={{ width: "100%", background: "#111827", border: "1px solid #1a2232", borderLeft: `4px solid ${c.color}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, color: "inherit", fontFamily: "inherit", textAlign: "left", marginBottom: 8, animationDelay: `${i * 0.07}s` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d4c0", marginBottom: 8 }}>{c.label}</div>
              <div style={{ height: 3, background: "#1a2232", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(m / c.verses.length) * 100}%`, background: c.color, borderRadius: 2, transition: "width 0.5s" }} />
              </div>
              <div style={{ fontSize: 10, color: "#3a4a5a", marginTop: 5, fontFamily: "'Arial',sans-serif" }}>{m}/{c.verses.length} mastered</div>
            </div>
            <span style={{ color: "#2a3a4a", fontSize: 16 }}>›</span>
          </button>
        );
      })}
    </div>
  );
}

// ── AI COACH ──────────────────────────────────────────────────────────────────
function Coach({ coachSessions, setCoachSessions }) {
  const [scenario, setScenario] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastInput, setLastInput] = useState("");
  const [hasError, setHasError] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  const startSession = (sc) => {
    setScenario(sc);
    setMsgs([{ role: "objector", content: sc.opening }]);
    setCoachSessions(n => n + 1);
  };

  const send = async (retryText) => {
    const textToSend = retryText || input;
    if (!textToSend.trim() || loading) return;
    setHasError(false);
    if (!retryText) {
      const userMsg = { role: "user", content: textToSend };
      setMsgs(p => [...p, userMsg]);
      setLastInput(textToSend);
      setInput("");
    }
    setLoading(true);

    const currentMsgs = retryText
      ? msgs
      : [...msgs, { role: "user", content: textToSend }];

    const history = currentMsgs.map(m => `${m.role === "user" ? "EVANGELIST" : m.role === "objector" ? "OBJECTOR" : "COACH"}: ${m.content}`).join("\n");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a street evangelism training assistant running a role-play session.

ROLE 1 — OBJECTOR: Play the role of ${scenario.persona}. Stay fully in character. Be realistic — make authentic objections this person would genuinely make. Push back but don't be cruel. Keep your in-character response to 3-4 sentences.

ROLE 2 — COACH: After your objector response, give honest, specific coaching feedback (2-3 sentences) on how well the evangelist responded. Note what was strong, what could be sharper, and one concrete suggestion if needed.

FORMAT EXACTLY LIKE THIS — no deviation:
[Your in-character objector response]

---COACH---
[Your coaching feedback on the evangelist's response]

Conversation so far:
${history}`,
          messages: [{ role: "user", content: `The evangelist just said: "${textToSend}"\n\nRespond as the objector then give coaching feedback.` }],
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "Error connecting. Try again.";
      const parts = text.split("---COACH---");
      const objPart = parts[0]?.trim() || text;
      const coachPart = parts[1]?.trim() || "";
      setMsgs(p => [...p,
        { role: "objector", content: objPart },
        ...(coachPart ? [{ role: "coach", content: coachPart }] : [])
      ]);
      setHasError(false);
    } catch {
      setHasError(true);
      setMsgs(p => [...p, { role: "error", content: "Connection error. Tap Retry to try again." }]);
    }
    setLoading(false);
  };

  if (!scenario) {
    return (
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "20px 14px 60px" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#3a4a5a", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Arial',sans-serif" }}>AI Street Coach</div>
        <div style={{ fontSize: 13, color: "#3a4a5a", marginBottom: 12, lineHeight: 1.7 }}>Select who you want to practice with. The AI plays the objector in real time — and coaches you on every response.</div>
        <div style={{ background: "#0d1520", border: "1px solid #2a3a5a", borderRadius: 10, padding: "12px 14px", marginBottom: 18 }}>
          <div style={{ fontSize: 12, color: "#6a8aaa", lineHeight: 1.7, fontStyle: "italic" }}>"We destroy every proud obstacle that keeps people from knowing God. We capture their rebellious thoughts and teach them to obey Christ."</div>
          <div style={{ fontSize: 10, color: "#3a4a5a", marginTop: 5, fontFamily: "'Arial',sans-serif" }}>— 2 Corinthians 10:5</div>
        </div>
        {SCENARIOS.map((sc, i) => (
          <button key={sc.id} onClick={() => startSession(sc)} className="fade-up" style={{ width: "100%", background: "#111827", border: "1px solid #1a2232", borderLeft: `4px solid ${sc.color}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, color: "inherit", fontFamily: "inherit", textAlign: "left", marginBottom: 8, animationDelay: `${i * 0.06}s` }}>
            <span style={{ fontSize: 26, flexShrink: 0 }}>{sc.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d4c0", marginBottom: 4 }}>{sc.label}</div>
              <div style={{ fontSize: 11, color: "#3a4a5a", lineHeight: 1.5 }}>{sc.persona.substring(0, 75)}...</div>
            </div>
            <span style={{ color: "#2a3a4a", fontSize: 16 }}>›</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 56px)" }}>
      <div style={{ background: "#0a0e1a", borderBottom: "1px solid #1a2232", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={() => { setScenario(null); setMsgs([]); setHasError(false); setLastInput(""); }} style={backBtn}>← Back</button>
        <span style={{ fontSize: 18 }}>{scenario.icon}</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: "bold", color: "#e0d4c0" }}>Practicing: {scenario.label}</div>
          <div style={{ fontSize: 10, color: "#3a4a5a", fontFamily: "'Arial',sans-serif" }}>AI PLAYS OBJECTOR · COACHES YOUR RESPONSES</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
        {msgs.map((m, i) => (
          <div key={i} className="fade-up">
            {m.role === "user" ? (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "#1a2a3a", border: "1px solid #2a3a5a", borderRadius: "12px 12px 2px 12px", padding: "11px 14px", maxWidth: "80%", fontSize: 14, color: "#b8cce0", lineHeight: 1.7 }}>{m.content}</div>
              </div>
            ) : m.role === "coach" ? (
              <div style={{ background: "#060e06", border: "1px solid #1a3a1a", borderRadius: 10, padding: "11px 14px", fontSize: 13, color: "#80c880", lineHeight: 1.75 }}>
                <span style={{ fontWeight: "bold", fontSize: 10, letterSpacing: 2, fontFamily: "'Arial',sans-serif" }}>🎯 COACH: </span>{m.content}
              </div>
            ) : m.role === "error" ? (
              <div style={{ background: "#1a0808", border: "1px solid #4a2a2a", borderRadius: 10, padding: "11px 14px", fontSize: 13, color: "#da6a4a", lineHeight: 1.75, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span>⚠ {m.content}</span>
                <button onClick={() => {
                  setMsgs(p => p.filter((_, idx) => idx !== i));
                  send(lastInput);
                }} style={{ background: "#2a1010", border: "1px solid #da6a4a", borderRadius: 6, color: "#da6a4a", cursor: "pointer", padding: "5px 12px", fontFamily: "inherit", fontSize: 12, flexShrink: 0 }}>
                  ↺ Retry
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: scenario.color + "18", border: `1px solid ${scenario.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{scenario.icon}</div>
                <div style={{ background: "#111827", border: "1px solid #1a2232", borderRadius: "2px 12px 12px 12px", padding: "11px 14px", maxWidth: "80%", fontSize: 14, color: "#b8b0a0", lineHeight: 1.75 }}>{m.content}</div>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#3a4a5a", fontSize: 13 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: scenario.color + "18", border: `1px solid ${scenario.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{scenario.icon}</div>
            <span style={{ animation: "pulse 1.5s infinite" }}>Responding...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={{ background: "#0a0e1a", borderTop: "1px solid #1a2232", padding: "10px 14px", display: "flex", gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()} placeholder="Type your response to the objection..." style={{ flex: 1, background: "#111827", border: "1px solid #2a3a4a", borderRadius: 8, padding: "11px 13px", color: "#e0d4c0", fontFamily: "inherit", fontSize: 14 }} />
        {hasError ? (
          <button onClick={() => { setMsgs(p => p.filter(m => m.role !== "error")); send(lastInput); }} style={{ background: "#2a1010", border: "1px solid #da6a4a", borderRadius: 8, color: "#da6a4a", cursor: "pointer", padding: "11px 16px", fontFamily: "inherit", fontSize: 13 }}>↺ Retry</button>
        ) : (
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{ background: loading || !input.trim() ? "#111827" : "#1a2a4a", border: `1px solid ${loading || !input.trim() ? "#1a2232" : "#4a7aae"}`, borderRadius: 8, color: loading || !input.trim() ? "#2a3a4a" : "#c9a96e", cursor: loading || !input.trim() ? "not-allowed" : "pointer", padding: "11px 16px", fontFamily: "inherit", fontSize: 13 }}>Send</button>
        )}
      </div>
    </div>
  );
}

// ── LIBRARY DATA ──────────────────────────────────────────────────────────────
const LEVELS = [
  {
    id: "beginner", label: "Beginner", subtitle: "Start Here — No Prior Knowledge Required",
    icon: "🌱", color: "#4eda9a", bg: "#001a0e",
    description: "These books assume nothing. Written for people new to the faith or apologetics. Plain language. High impact. Start here.",
    books: [
      { title: "The Holy Bible", author: "God — Breathed Through 40 Human Authors", year: "~1400 BC – 96 AD", pages: "66 books · 1,189 chapters · 31,102 verses", tag: "The Foundation of Everything", why: "Every book on this list exists to help you understand this one better. The Bible is not a resource that points to the truth — it is the truth everything else points back to. Start in the Gospel of John. Then Romans. Then Ephesians. Then Psalms. Read it slowly. Read it daily. Let the Holy Spirit who inspired it teach you through it. Recommended translation for study: ESV. Recommended for readability: NIV. Get a Study Bible with notes.", street: "Every argument you make on the street, every verse you drill, every objection you answer — it all flows from here. The person who knows their Bible is never truly cornered. 2 Timothy 3:16-17 — 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.'", get: "Free on YouVersion app. Free on Bible Gateway (biblegateway.com). ESV Study Bible ~$35–45 and worth every dollar. Never out of print. Never out of date." },
      { title: "Mere Christianity", author: "C.S. Lewis", year: "1952", pages: "227 pages", tag: "Faith & Reason", why: "The single best entry point for the logical case for Christianity. Lewis was an atheist who followed the arguments to faith. Originally BBC radio broadcasts for ordinary people under pressure. Still unmatched.", street: "Lewis's 'Liar, Lunatic, or Lord' argument is one of the most effective street tools. When someone says Jesus was just a good teacher — this is your answer.", get: "Free on many library apps (Libby). ~$10–12 new." },
      { title: "The Case for Christ", author: "Lee Strobel", year: "1998", pages: "352 pages", tag: "Evidence & History", why: "Strobel was a legal journalist and atheist who set out to disprove the resurrection by interviewing leading scholars. Written like an investigation, not a sermon. Strong on historical evidence.", street: "Best preparation for the skeptic who wants historical evidence. Gives you names, dates, and manuscript arguments in plain language.", get: "~$10–14. Also a film adaptation." },
      { title: "Questioning Evangelism", author: "Randy Newman", year: "2004", pages: "240 pages", tag: "Street Evangelism", why: "Teaches you to answer questions with questions — the method Jesus used. Practical and directly applicable to street encounters. Shows how to engage people who are hostile, hurting, or curious.", street: "The most practical book on this list for actual street conversations. Read early.", get: "~$12–15." },
      { title: "Urban Apologetics", author: "Eric Mason (Editor)", year: "2021", pages: "320 pages", tag: "Urban Context", why: "The only major apologetics book built specifically for urban communities. Covers Hebrew Israelites, Nation of Islam, Afrocentric objections, and the 'white man's religion' challenge directly.", street: "Essential if you are doing street work in any urban environment. Nobody else covers this ground at this level.", get: "~$15–18." },
      { title: "The Purpose Driven Life", author: "Rick Warren", year: "2002", pages: "368 pages", tag: "New Believer Foundation", why: "Foundational for new believers who need to understand why they exist and what the Christian life is about before they can defend it. Answers: 'What now?' Simple, structured, biblically grounded.", street: "Not a street tool — but the person who knows why they live for God is far more compelling in conversation.", get: "~$10–12. One of the bestselling Christian books of all time." },
    ]
  },
  {
    id: "intermediate", label: "Intermediate", subtitle: "Deepen Your Foundation — For the Growing Believer",
    icon: "📖", color: "#c9a96e", bg: "#1a1200",
    description: "These books assume you have the basics and are ready to go deeper. More theological depth, more detailed argumentation. Read these after the Beginner list.",
    books: [
      { title: "Tactics", author: "Greg Koukl", year: "2009", pages: "208 pages", tag: "Conversation Strategy", why: "The most practical apologetics book for real conversations. Koukl teaches the Columbo tactic and how to navigate any spiritual conversation without getting cornered or flustered. Reads like a field manual.", street: "This book will change how you handle every objection you face. The Columbo tactic alone is worth the price. Read this before you go out.", get: "~$12–15." },
      { title: "The Screwtape Letters", author: "C.S. Lewis", year: "1942", pages: "209 pages", tag: "Spiritual Warfare", why: "Fictional letters from a senior demon to a junior demon on how to corrupt a new believer. One of the most insightful books on spiritual warfare and temptation ever written.", street: "The believer who understands how spiritual opposition works is far harder to discourage or derail.", get: "Free on Project Gutenberg. ~$8–10 new." },
      { title: "I Don't Have Enough Faith to Be an Atheist", author: "Geisler & Turek", year: "2004", pages: "448 pages", tag: "Apologetics", why: "A systematic case for Christianity from the ground up — from God's existence to Scripture reliability to the resurrection. Dense but extremely thorough.", street: "Best preparation for the intellectual atheist or skeptic who wants a rigorous argument.", get: "~$14–18." },
      { title: "Surprised by Joy", author: "C.S. Lewis", year: "1955", pages: "238 pages", tag: "Conversion & Testimony", why: "Lewis's own journey from atheism to Christianity. Intellectual, honest, and deeply personal. Shows how one of the sharpest minds of the 20th century was brought to faith reluctantly.", street: "Useful for conversations with intellectual skeptics who believe faith requires abandoning reason.", get: "~$10–13." },
      { title: "The Problem of Pain", author: "C.S. Lewis", year: "1940", pages: "176 pages", tag: "Suffering & Evil", why: "Lewis's theological treatment of why a good God allows pain and suffering. Read alongside A Grief Observed for the complete picture — theory then lived experience.", street: "Essential for the suffering objection — one of the most common and emotionally charged objections you will face.", get: "~$10–13." },
      { title: "A Grief Observed", author: "C.S. Lewis", year: "1961", pages: "96 pages", tag: "Suffering & Doubt", why: "Written after his wife died of cancer. Raw, unfiltered, and honest. Lewis wrestles with doubt in real time — and comes through it. One of the most honest books about faith and pain ever written.", street: "Read this before you talk to anyone who has lost someone and uses that loss as their reason to reject God.", get: "~$8–10. Short — one sitting read." },
    ]
  },
  {
    id: "advanced", label: "Advanced", subtitle: "For the Serious Student — Deep Theological Roots",
    icon: "🔥", color: "#4a9eda", bg: "#000e1a",
    description: "These books are for believers who want to go deep. Systematic theology, technical apologetics, and scholarly treatments of the faith. Take your time — these are reference works you return to for years.",
    books: [
      { title: "Systematic Theology", author: "Wayne Grudem", year: "1994", pages: "1,291 pages", tag: "Systematic Theology", why: "The most comprehensive and accessible systematic theology for non-seminary students. Covers every major doctrine in depth with Scripture, history, and application. Not read cover to cover — lived in.", street: "When a doctrine question comes up you can't fully answer — Grudem is where you build the complete response.", get: "~$35–45. Worth every dollar. Will be in your library for life." },
      { title: "The Reason for God", author: "Timothy Keller", year: "2008", pages: "352 pages", tag: "Apologetics", why: "Keller pastored Redeemer Presbyterian in Manhattan for decades engaging educated, skeptical New Yorkers. Addresses the most sophisticated objections from a highly intellectual but deeply pastoral perspective.", street: "Best preparation for the educated professional or post-Christian who still respects intellectual discourse.", get: "~$13–16." },
      { title: "The Resurrection of the Son of God", author: "N.T. Wright", year: "2003", pages: "817 pages", tag: "Historical Apologetics", why: "The most thorough scholarly treatment of the resurrection ever written. Wright builds the case from first-century historical context. Definitive.", street: "When someone challenges the resurrection with historical arguments — this is the deepest preparation available.", get: "~$30–40." },
      { title: "Knowing God", author: "J.I. Packer", year: "1973", pages: "284 pages", tag: "Theology Proper", why: "Takes the attributes of God and drives them deep into the heart. Not just information about God — a book that changes how you relate to God. One of the most beloved theology books of the 20th century.", street: "The believer who has read Knowing God carries a different weight in every conversation.", get: "~$12–15." },
      { title: "The Moody Handbook of Theology", author: "Paul Enns", year: "1989", pages: "768 pages", tag: "Reference Theology", why: "A comprehensive theological reference covering biblical, systematic, historical, and contemporary theology in one volume. A second reference anchor alongside Grudem.", street: "Not a street book — a reference. When building a new module or preparing for a specific objection.", get: "~$30–40." },
      { title: "Stealing from God", author: "Frank Turek", year: "2014", pages: "256 pages", tag: "Apologetics", why: "Turek's argument that atheists borrow from the Christian worldview to argue against it. Covers science, morality, evil, and reason. Sharp, readable, and devastating to the secular case.", street: "Best for the atheist who uses science or morality as their primary objection. The CRIMES acronym is a memorizable street framework.", get: "~$13–16." },
    ]
  }
];

// ── LIBRARY ───────────────────────────────────────────────────────────────────
function Library({ readList, setReadList }) {
  const [activeLevel, setActiveLevel] = useState(0);
  const [expandedBook, setExpandedBook] = useState(null);
  const totalBooks = LEVELS.reduce((a, l) => a + l.books.length, 0);
  const totalRead = Object.values(readList).filter(Boolean).length;
  const level = LEVELS[activeLevel];
  const toggleRead = (key) => setReadList(p => ({ ...p, [key]: !p[key] }));
  const toggleExpand = (key) => setExpandedBook(prev => prev === key ? null : key);

  return (
    <div style={{ minHeight: "100vh", background: "#090c14", paddingBottom: 60 }}>
      <div style={{ background: "linear-gradient(160deg,#0a0e1a 0%,#1a1000 100%)", borderBottom: "2px solid #c9a96e", padding: "24px 16px 18px", textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 5, color: "#c9a96e", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Arial',sans-serif" }}>StreetReady</div>
        <h2 style={{ fontSize: "clamp(20px,4vw,28px)", fontStyle: "italic", fontWeight: "bold", color: "#fff", margin: "0 0 4px" }}>Study Library</h2>
        <p style={{ fontSize: 12, color: "#6a7a5a", margin: "0 0 14px", fontFamily: "'Arial',sans-serif" }}>Curated reading for every level of the journey</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a1a0a", border: "1px solid #c9a96e", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#c9a96e", fontFamily: "'Arial',sans-serif" }}>
          📚 {totalRead} / {totalBooks} books read
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, padding: "14px 14px 0", maxWidth: 720, margin: "0 auto" }}>
        {LEVELS.map((l, i) => (
          <button key={l.id} onClick={() => { setActiveLevel(i); setExpandedBook(null); }} style={{ flex: 1, background: activeLevel === i ? l.bg : "#0f1520", border: `2px solid ${activeLevel === i ? l.color : "#1a2232"}`, borderRadius: 10, padding: "10px 6px", cursor: "pointer", color: "inherit", fontFamily: "inherit", textAlign: "center", transition: "all 0.2s" }}>
            <div style={{ fontSize: 16, marginBottom: 3 }}>{l.icon}</div>
            <div style={{ fontSize: 12, fontWeight: "bold", color: activeLevel === i ? "#fff" : "#4a5a6a" }}>{l.label}</div>
            <div style={{ fontSize: 10, color: activeLevel === i ? l.color : "#2a3a4a", fontFamily: "'Arial',sans-serif", marginTop: 2 }}>{l.books.length} books</div>
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "12px auto 0", padding: "0 14px" }}>
        <div style={{ background: level.bg, border: `1px solid ${level.color}`, borderRadius: 12, padding: "14px 16px", marginBottom: 14 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: level.color, textTransform: "uppercase", marginBottom: 3, fontFamily: "'Arial',sans-serif" }}>{level.icon} {level.label}</div>
          <div style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginBottom: 6 }}>{level.subtitle}</div>
          <div style={{ fontSize: 12, color: "#8a9a8a", lineHeight: 1.7 }}>{level.description}</div>
        </div>

        {level.books.map((book, bi) => {
          const key = `${level.id}-${bi}`;
          const isRead = !!readList[key];
          const isOpen = expandedBook === key;
          return (
            <div key={key} className="fade-up" style={{ background: isRead ? "#0a150a" : "#0f1520", border: `1px solid ${isRead ? "#2a4a2a" : "#1a2232"}`, borderLeft: `4px solid ${isRead ? "#4eda7a" : level.color}`, borderRadius: 10, overflow: "hidden", marginBottom: 10, animationDelay: `${bi * 0.06}s` }}>
              <div style={{ padding: "13px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: 5 }}>
                    <span style={{ fontSize: 9, fontWeight: "bold", letterSpacing: 1.5, color: level.color, background: "rgba(0,0,0,0.4)", padding: "2px 7px", borderRadius: 3, fontFamily: "'Arial',sans-serif" }}>{book.tag.toUpperCase()}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: "bold", color: isRead ? "#4eda7a" : "#e0d4c0", marginBottom: 2 }}>{book.title}</div>
                  <div style={{ fontSize: 11, color: "#5a6a7a", fontFamily: "'Arial',sans-serif" }}>{book.author}  ·  {book.year}  ·  {book.pages}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, flexShrink: 0, alignItems: "flex-end" }}>
                  <button onClick={() => toggleRead(key)} style={{ background: isRead ? "#0a2a0a" : "transparent", border: `1px solid ${isRead ? "#4eda7a" : "#2a3a2a"}`, borderRadius: 6, color: isRead ? "#4eda7a" : "#3a4a3a", cursor: "pointer", padding: "3px 9px", fontSize: 10, fontFamily: "'Arial',sans-serif" }}>{isRead ? "✓ Read" : "Mark Read"}</button>
                  <button onClick={() => toggleExpand(key)} style={{ background: "none", border: "none", color: isOpen ? level.color : "#3a4a5a", cursor: "pointer", fontSize: 11, fontFamily: "'Arial',sans-serif" }}>{isOpen ? "less ▲" : "more ▼"}</button>
                </div>
              </div>
              {isOpen && (
                <div style={{ borderTop: `1px solid ${level.color}22`, padding: "12px 14px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Why Read It", content: book.why, bg: level.bg, color: level.color, textColor: "#b0a890" },
                    { label: "🛡 Street Application", content: book.street, bg: "#0d1520", color: "#4a9eda", textColor: "#8aaaca" },
                    { label: "📦 Where to Get It", content: book.get, bg: "#0a1a0a", color: "#4eda7a", textColor: "#8aaa8a" },
                  ].map((section, si) => (
                    <div key={si} style={{ background: section.bg, border: `1px solid ${section.color}33`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 9, fontWeight: "bold", letterSpacing: 2, color: section.color, textTransform: "uppercase", marginBottom: 5, fontFamily: "'Arial',sans-serif" }}>{section.label}</div>
                      <div style={{ fontSize: 12, color: section.textColor, lineHeight: 1.8 }}>{section.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: 8, background: "#0d1428", border: "1px solid #1e2a5e", borderRadius: 12, padding: "14px 16px" }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: "#4a9eda", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Arial',sans-serif" }}>📋 Recommended Reading Order</div>
          {[
            { label: "First", text: "The Holy Bible — Start in John, then Romans, Ephesians, Psalms" },
            { label: "Then", text: "Mere Christianity → Urban Apologetics → Questioning Evangelism" },
            { label: "Deepen", text: "Tactics → The Case for Christ → The Problem of Pain + A Grief Observed" },
            { label: "Further", text: "I Don't Have Enough Faith to Be an Atheist → The Reason for God → Knowing God" },
            { label: "Master", text: "Systematic Theology (Grudem) → The Resurrection of the Son of God → Stealing from God" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <span style={{ background: "#1e2a5e", color: "#4a9eda", fontSize: 9, fontWeight: "bold", padding: "3px 7px", borderRadius: 4, flexShrink: 0, fontFamily: "'Arial',sans-serif", letterSpacing: 1, marginTop: 2 }}>{row.label}</span>
              <span style={{ fontSize: 12, color: "#8a9aaa", lineHeight: 1.7 }}>{row.text}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, background: "#0a1a0a", border: "1px solid #1a3a1a", borderRadius: 10, padding: "11px 14px" }}>
          <div style={{ fontSize: 11, color: "#5a7a5a", lineHeight: 1.7, fontStyle: "italic" }}>💡 Most of these books are available free through your local library or the Libby app. The Beginner list can be completed for under $50 total if you buy used.</div>
        </div>
      </div>
    </div>
  );
}

// ── SHARED STYLES ─────────────────────────────────────────────────────────────
const backBtn = { background: "none", border: "1px solid #1a2232", borderRadius: 6, color: "#4a5a6a", cursor: "pointer", padding: "5px 10px", fontFamily: "inherit", fontSize: 12, marginBottom: 16, display: "block" };
const navBtn = { background: "#111827", border: "1px solid #1a2232", borderRadius: 8, color: "#4a5a6a", cursor: "pointer", padding: "11px 16px", fontFamily: "inherit", fontSize: 13 };
