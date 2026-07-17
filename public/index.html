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
      { heading: "Core Statement", body: "There is one God who exists as three distinct Persons — Father, Son, and Holy Spirit. Each Person is fully God. Not three gods, not three parts of one God, not one God wearing three masks — one God in three Persons. The word Trinity does not appear in Scripture. The doctrine does — on every page." },
      { heading: "Was the Trinity Made Up 300 Years After Christ?", body: "This is the most common objection and it is historically false. Here is the timeline:\n\nIgnatius of Antioch — 107 AD — called Jesus our God in writing. He died 218 years before Nicaea.\n\nJustin Martyr — 150 AD — wrote extensively about the Father, Son, and Holy Spirit as three distinct persons within one God. 175 years before Nicaea.\n\nTertullian — 200 AD — was the first person to use the Latin word Trinitas meaning Trinity. He was writing 125 years before Nicaea. He did not invent the concept — he gave the existing concept a name.\n\nOrigen — 225 AD — wrote detailed theology about the three persons of the Godhead. 100 years before Nicaea.\n\nThe Council of Nicaea in 325 AD was called because a man named Arius was teaching something NEW — that Jesus was a created being, not fully God. The bishops gathered to evaluate Arius against Scripture and against what the church had always believed. They rejected him — because his teaching contradicted the New Testament and three centuries of consistent church teaching.\n\nNicaea did not create the Trinity. It defended what was already there against a new attack. That is the historical record." },
      { heading: "The Word Trinity Is Not in the Bible — Does That Matter?", body: "No. The word Bible is not in the Bible. The word omniscient is not in the Bible. The word incarnation is not in the Bible. We routinely use words to describe biblical realities that Scripture does not label by that name.\n\nThe doctrine of the Trinity simply puts a label on what the Bible clearly teaches across both Testaments:\n— There is one God\n— The Father is God\n— The Son is God\n— The Holy Spirit is God\n— They are not the same person\n\nAll five of those statements come directly from Scripture. Trinity is just the package label." },
      { heading: "God Is One — Agreed. But What Kind of Oneness?", body: "Deuteronomy 6:4 — Hear O Israel the Lord our God the Lord is one. This is the Shema — the foundational confession of monotheism. Every Christian affirms it without reservation.\n\nBut the Hebrew word for one here is echad — which means a unified one, not an absolute singular one. The same word is used in Genesis 2:24 — a man and woman shall become one flesh. Two persons becoming one. Echad allows for plurality within unity.\n\nThe Hebrew word for absolute singular oneness — yachid — is never used of God in the Shema. This is not a small detail. God chose echad. That choice matters." },
      { heading: "The Son Is God — Scripture", body: "John 1:1 — In the beginning was the Word and the Word was with God and the Word was God. Written approximately 90 AD — 235 years before Nicaea. The Word identified as Jesus in verse 14. Not a god. Not god-like. Was God.\n\nJohn 8:58 — Before Abraham was I AM. I AM is the name God gave Himself at the burning bush in Exodus 3:14. The Jews immediately picked up stones to kill Him. They understood exactly what He was claiming.\n\nJohn 10:30 — I and the Father are one. The Jews picked up stones again. Ask anyone who says Jesus never claimed to be God — why did people keep trying to kill Him for blasphemy?\n\nJohn 20:28 — Thomas sees the risen Jesus and says My Lord and my God. Jesus does not correct him. If Jesus were not God this was the moment to say Thomas you are wrong. He said nothing. He accepted the worship.\n\nColossians 2:9 — In Christ all the fullness of the Deity lives in bodily form. Not some of deity. Not a portion. All the fullness. Paul writing approximately 61 AD — 264 years before Nicaea.\n\nTitus 2:13 — Our great God and Savior Jesus Christ.\n\nHebrews 1:8 — The Father speaking of the Son: Your throne O God will last forever and ever. God calling the Son God." },
      { heading: "The Holy Spirit Is God — Scripture", body: "Acts 5:3-4 — Peter tells Ananias he lied to the Holy Spirit — then immediately says he lied to God. The Holy Spirit and God equated in consecutive sentences.\n\nGenesis 1:2 — The Spirit of God was hovering over the face of the waters. Present at creation alongside the Father and the Word.\n\n1 Corinthians 3:16 — Do you not know that you are God's temple and that God's Spirit dwells in you? The Spirit of God equals God dwelling in you.\n\n2 Corinthians 3:17 — The Lord is the Spirit." },
      { heading: "Three Persons Distinguished From Each Other", body: "Matthew 3:16-17 — At Jesus's baptism: Jesus comes out of the water. The Spirit descends like a dove. The Father speaks from heaven. Three persons. One moment. All present simultaneously. How can Jesus be in the water while the Father speaks from heaven and the Spirit descends as a dove if they are all the same single person?\n\nJohn 17:1 — Jesus prays to the Father. If Jesus is the Father He is praying to Himself. That is not prayer. That is a monologue.\n\nJohn 14:16 — Jesus says He will ask the Father and the Father will send another Helper — the Spirit. Three persons. One sending another at the request of a third.\n\nJohn 17:24 — Father you loved me before the foundation of the world. Love requires a relationship. A relationship requires more than one person. Before creation — within the eternal Godhead — there was already love between persons. That is the Trinity.\n\nMatthew 28:19 — Baptize in the name — singular — of the Father and of the Son and of the Holy Spirit. One name. Three persons." },
      { heading: "What the Apostles Taught", body: "The claim that the apostles never taught Trinitarian theology is directly contradicted by the New Testament.\n\nPeter in Acts 2 — calls Jesus Lord and God immediately after Pentecost. Acts 2 was written and the events occurred decades before Nicaea.\n\nPaul in Philippians 2:5-11 — Christ Jesus who being in very nature God did not consider equality with God something to be grasped. Paul calls Jesus God in very nature — equal with the Father. Written approximately 61 AD.\n\nPaul in Colossians 1:15-20 — He is the image of the invisible God... by him all things were created in heaven and on earth. Written approximately 62 AD.\n\nJohn in John 1:1 — The Word was God. Written approximately 90 AD.\n\nThomas in John 20:28 — My Lord and my God. The first post-resurrection confession from an apostle who saw the risen Jesus in person. He called Him God.\n\nThe apostles taught it. The early church fathers defended it. Nicaea formally articulated it against a new attack. That is the sequence." },
      { heading: "Common Errors", body: "Modalism — God wearing three masks or appearing in three modes at different times. Wrong. The Father speaks from heaven while the Son is in the water and the Spirit descends as a dove simultaneously. They are not the same person appearing in different forms.\n\nTritheism — Three separate gods. Wrong. Scripture is consistent — there is one God. The Trinity is not three gods. It is one God in three persons.\n\nArianism — Jesus is the first and greatest created being but not fully God. Wrong. Colossians 1:16 says all things were created through Him. You cannot be created and also be the one through whom all things were created. John 1:1 says He was God — not a god, not god-like, not almost God." },
      { heading: "Street Response", body: "When someone says the Trinity was made up at Nicaea 300 years after Christ:\n\n'Tertullian was the first person to use the word Trinity — and he was writing 125 years before Nicaea. Ignatius of Antioch called Jesus our God in 107 AD — 218 years before Nicaea. Nicaea did not create the Trinity. It defended it against a guy named Arius who was teaching something new. The Trinity is in John 1:1 — written 90 AD. It is in Philippians 2 — written 61 AD. It is in Matthew 3 where the Father speaks, the Spirit descends, and the Son comes out of the water all at the same time. Three persons. One moment. That is the Trinity — and it was there from the beginning.'" },
    ],
    quiz: [
      { q: "The Council of Nicaea created the doctrine of the Trinity in 325 AD.", answer: false, explain: "Nicaea defended the Trinity against Arianism — a new teaching that contradicted what Scripture and three centuries of church teaching had already established. The doctrine was not created at Nicaea — it was defended there." },
      { q: "The Hebrew word for 'one' in Deuteronomy 6:4 (the Shema) is yachid — meaning absolute singular oneness.", answer: false, explain: "The Hebrew word is echad — which means unified oneness and is used elsewhere for two becoming one. The absolute singular word yachid is never used of God in the Shema." },
      { q: "Tertullian was the first person to use the word Trinity — and he was writing 125 years before the Council of Nicaea.", answer: true, explain: "Tertullian wrote around 200 AD — 125 years before Nicaea in 325 AD. He did not invent the concept — he gave the existing biblical concept a name." },
      { q: "In John 20:28 Thomas calls Jesus 'My Lord and my God' and Jesus corrects him.", answer: false, explain: "Jesus says nothing. He accepts the worship. If Jesus were not God this was the moment to correct Thomas. His silence is one of the most powerful implicit claims to divinity in the Gospels." },
      { q: "All three Persons of the Trinity are present simultaneously at Jesus's baptism.", answer: true, explain: "Matthew 3:16-17 — Son in the water, Spirit descending as a dove, Father speaking from heaven. Three distinct Persons at the same moment — impossible if they were the same single person." },
      { q: "The apostles never taught that Jesus was God — that was invented later by the church.", answer: false, explain: "Paul calls Jesus God in very nature in Philippians 2 written in 61 AD. John opens his Gospel with the Word was God written around 90 AD. Thomas calls Jesus My Lord and my God in John 20:28. The apostles consistently taught the full divinity of Christ." },
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
      { heading: "The Apocrypha — What It Is", body: "The Apocrypha refers to 7 books (Tobit, Judith, 1 & 2 Maccabees, Wisdom, Sirach, Baruch) included in Catholic Bibles but not in Protestant Bibles. Catholics call them 'deuterocanonical' meaning second canon. Protestants and Jews call them non-canonical. The argument used against Protestants: 'Your church removed books from the Bible.'" },
      { heading: "The Apocrypha — Why It Was Never Canonical", body: "1. THE JEWISH CANON EXCLUDED IT: Jesus was Jewish. The Hebrew canon — the Tanakh — never included the Apocrypha. Jewish scholars at Jamnia (90 AD) confirmed a canon that excluded these books. Jesus and the apostles quoted from the Old Testament over 300 times — not once from the Apocrypha.\n\n2. THE EARLY CHURCH DEBATED IT: Jerome, who translated the Bible into Latin (the Vulgate around 400 AD), explicitly stated the Apocrypha was not equal to canonical Scripture. He included it under pressure but marked it as secondary.\n\n3. COUNCIL OF TRENT ADDED IT IN 1546: The Catholic Church officially added the Apocrypha to their canon at the Council of Trent — in 1546 AD. This was 1,500 years after Christ and happened in direct response to the Protestant Reformation. Martin Luther had challenged Catholic doctrines like purgatory — which Catholics support using 2 Maccabees 12:46. The timing is not coincidental.\n\n4. THE BOOKS THEMSELVES CLAIM NO DIVINE AUTHORITY: 1 Maccabees 9:27 says there were no prophets in Israel at that time. The books do not claim prophetic inspiration the way canonical Scripture does.\n\n5. DOCTRINAL PROBLEMS: The Apocrypha contains teachings that contradict canonical Scripture — praying for the dead (2 Maccabees 12:46), salvation by almsgiving (Tobit 12:9), and historical errors documented by scholars." },
      { heading: "Street Response to the Apocrypha Argument", body: "'You removed books from the Bible.' — RESPONSE: 'Actually those books were never in the original Jewish canon that Jesus used. He quoted the Old Testament over 300 times and never quoted from those books once. The Catholic Church officially added them in 1546 — 1,500 years after Christ — specifically to defend the doctrine of purgatory during the Reformation. The question is not why Protestants removed them. The question is why they were added 1,500 years later.'\n\nFollow-up question to ask: 'If Jesus never quoted them and the Jewish scholars never accepted them — on what authority were they added in 1546?'" },
      { heading: "Street Response", body: "'The Bible was changed.' Your answer: 'We have physical evidence — the Dead Sea Scrolls show 1,000 years of copying with virtually no change. And the NT has 24,000 manuscripts vs. 10 for Julius Caesar. Where specifically was it changed? Because the manuscripts don't show it.'" },
      { heading: "Did King James Write a Book About Demonology?", body: "Yes — and this objection comes up frequently in Hebrew Israelite circles and among people challenging the KJV. Here is the full truth.\n\nKing James VI of Scotland — who became King James I of England — wrote a book called Daemonologie in 1597. He wrote it to defend the reality of witchcraft and demonic activity after becoming convinced that witches had conspired against him during a storm at sea in 1590. He personally participated in the North Berwick witch trials.\n\nThe timeline:\n1597 — James writes Daemonologie\n1603 — James becomes King of England\n1604 — James orders a new Bible translation\n1611 — The King James Bible is completed\n\nThe argument used against the KJV: King James was involved in the occult therefore the Bible he commissioned is corrupted or tainted.\n\nHere is why that argument fails:\n\nFirst — the motivation of the king who commissioned it is irrelevant to the accuracy of the translation. The KJV was translated by a committee of 47 of the finest biblical scholars in England divided into six translation companies working independently and cross-checking each other. James's personal beliefs did not enter the translation room.\n\nSecond — using this logic you would have to reject large portions of Scripture itself. Solomon wrote much of Proverbs and Ecclesiastes — and later worshipped false gods. David wrote the Psalms — and committed adultery and murder. The character of the human instrument does not invalidate what God produced through them.\n\nThird — the manuscript evidence behind the KJV is completely independent of James. The KJV is based on the Textus Receptus and the Masoretic text — ancient manuscript traditions that existed for centuries before James was born. Those manuscripts are what you are evaluating — not James's character.\n\nFourth — Daemonologie actually affirms biblical truth. James was not arguing against Scripture. He was arguing for the reality of demonic activity and spiritual warfare — which is entirely consistent with what the Bible teaches in Ephesians 6:12, 1 Peter 5:8, and throughout the Gospels. He was defending a supernatural biblical worldview against secular skeptics who denied the existence of demons. That is not an occult position — that is a biblical one.\n\nKey question to ask: If we reject the KJV because of the man who commissioned it — do we reject the Psalms because David was an adulterer and murderer? Do we reject Proverbs because Solomon became an idolater? Or do we evaluate a text on the basis of its manuscript evidence and internal consistency — not the personal failures of the humans involved in its history?" },
    ],
    quiz: [
      { q: "The Dead Sea Scrolls were discovered in the 20th century.", answer: true, explain: "Discovered in 1947 by a Bedouin shepherd boy near the Dead Sea — one of the most significant archaeological finds in history, transforming biblical scholarship." },
      { q: "The New Testament has fewer surviving manuscripts than the works of Julius Caesar.", answer: false, explain: "The NT has 24,000+ manuscripts. Caesar's works have about 10. The NT wins by every measure of ancient document reliability." },
      { q: "The 400,000 variants in NT manuscripts mean its core doctrines are unreliable.", answer: false, explain: "Most variants are trivial. 99% of NT text is undisputed. Zero core doctrines rest on a disputed passage. Even skeptic Bart Ehrman confirms this." },
      { q: "The Catholic Church officially added the Apocrypha to their canon at the Council of Trent in 1546.", answer: true, explain: "1,500 years after Christ, in direct response to the Protestant Reformation. Protestant and Jewish canons follow the Hebrew Tanakh which never included these books." },
      { q: "Jesus quoted from the Apocrypha multiple times in the Gospels.", answer: false, explain: "Jesus quoted the Old Testament over 300 times — never once from the Apocrypha. The Jewish canon He used and affirmed did not include those books." },
      { q: "King James writing Daemonologie means the King James Bible is an occult or corrupted translation.", answer: false, explain: "The KJV was translated by 47 scholars in six independent companies. James's personal writings did not enter the translation process. The manuscript evidence behind the KJV — the Textus Receptus and Masoretic text — is completely independent of James. Daemonologie also defended biblical truth about demonic reality — not occult practice." },
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
  {
    id: "kalam", title: "The Kalam Argument", icon: "🌌", tag: "Apologetics",
    summary: "Everything that begins to exist has a cause. The universe began to exist. Therefore the universe has a cause — and that cause is God.",
    content: [
      { heading: "The Argument in Full", body: "The Kalam Cosmological Argument is one of the most powerful philosophical proofs for God's existence. It uses logic and science — not Scripture — making it effective with skeptics, atheists, and anyone who claims science has disproved God.\n\nPremise 1: Everything that begins to exist has a cause.\nPremise 2: The universe began to exist.\nConclusion: Therefore the universe has a cause.\n\nThat cause — by definition — must be outside space, outside time, uncaused, immensely powerful, and personal. That description fits God and nothing else." },
      { heading: "Premise 1 — Everything That Begins to Exist Has a Cause", body: "This is almost universally accepted. Nothing comes from nothing. You have never seen something appear from nowhere with no cause. Every effect has a cause — this is basic logic and basic science.\n\nThe most common objection: 'Then what caused God?' Answer: The premise says everything that BEGINS to exist has a cause. God by definition did not begin — He is eternal. He has no beginning so He needs no cause. Only things with beginnings need causes. God is not a thing that began — He is the eternal cause behind all things that began." },
      { heading: "Premise 2 — The Universe Began to Exist", body: "This is where science supports the argument directly.\n\nThe Big Bang — Scientific consensus is that all matter, energy, space, and time came into existence approximately 13.8 billion years ago from a single point. Before the Big Bang there was literally nothing — no space, no time, no matter. Something caused it to begin.\n\nThe Second Law of Thermodynamics — The universe is running out of usable energy. If the universe were eternal it would have already run out completely. The fact that it has not means it has not been running forever. It had a beginning.\n\nBorde-Guth-Vilenkin Theorem — Even inflationary multiverse models require a beginning. In 2003 three leading cosmologists — including atheist Alexander Vilenkin — proved mathematically that any universe that has been expanding on average must have had an absolute beginning." },
      { heading: "The Conclusion — What the Cause Must Be", body: "If the universe — including all space, time, matter, and energy — began to exist, its cause must be:\n\nOutside space — because space itself began at the Big Bang. The cause cannot be spatial.\n\nOutside time — because time itself began at the Big Bang. The cause must be timeless — eternal.\n\nUncaused — because it is the first cause. If it had a cause that cause would be the real first cause.\n\nImmensely powerful — because it produced all matter and energy in the universe from nothing.\n\nPersonal — this is the most important point. An impersonal force — a law, a principle, a mathematical equation — does not choose anything. It cannot decide to act. Only a personal agent with will and intentionality can choose to create. The cause of the universe chose to create — which means it is personal.\n\nTimeless + spaceless + uncaused + all-powerful + personal = the God of the Bible." },
      { heading: "Where the Argument Comes From", body: "The word Kalam comes from Arabic — it means Islamic theology. The argument was originally developed by the medieval Muslim philosopher Al-Ghazali in the 12th century as a proof for Allah. The irony is that the argument is now one of the most powerful tools in Christian apologetics.\n\nIn the modern era philosopher and apologist William Lane Craig has developed and defended the Kalam extensively. His debates with atheists Christopher Hitchens, Sam Harris, and Lawrence Krauss using this argument are widely available on YouTube and worth watching before using the argument in conversation." },
      { heading: "Street Response", body: "When someone says science has disproved God — respond with this:\n\n'Actually science points directly to God. The Big Bang tells us the universe had a beginning — all matter, energy, space, and time came from nothing. That means whatever caused the universe has to exist outside space and time, be uncaused itself, and be powerful enough to create everything from nothing. The only thing that fits that description is what most people call God. What do you think caused the Big Bang?'\n\nThen stop talking. The burden of proof just shifted to them. Let them answer. Their options are:\n1. Something caused it — which opens the door to God\n2. Nothing caused it — which violates everything we know about cause and effect\n3. The universe is eternal — which modern science has effectively disproved\n\nNone of those three options are comfortable for the atheist." },
      { heading: "Common Objections and Responses", body: "Objection: 'Who made God?'\nResponse: The premise is that everything that BEGINS to exist has a cause. God is eternal — He never began. An eternal being needs no cause.\n\nObjection: 'Maybe the universe created itself.'\nResponse: For something to create itself it would have to exist before it existed. That is a logical contradiction. Nothing creates itself.\n\nObjection: 'Maybe there are infinite past universes — a multiverse.'\nResponse: The Borde-Guth-Vilenkin theorem shows that even inflationary multiverse models must have had an absolute beginning. You cannot escape the beginning by adding more universes.\n\nObjection: 'Quantum mechanics shows things can happen without causes.'\nResponse: Quantum events still happen within space and time and within a quantum vacuum that is not nothing — it is a sea of fluctuating energy governed by physical laws. That is not nothing. The first cause must precede space, time, matter, and physical laws entirely." },
    ],
    quiz: [
      { q: "The Kalam argument was originally developed by a Christian philosopher.", answer: false, explain: "The Kalam argument was developed by the medieval Muslim philosopher Al-Ghazali in the 12th century. The word Kalam means Islamic theology in Arabic. William Lane Craig popularized it in modern Christian apologetics." },
      { q: "The Borde-Guth-Vilenkin theorem proves that even multiverse models require an absolute beginning.", answer: true, explain: "In 2003 three leading cosmologists including atheist Alexander Vilenkin proved mathematically that any universe expanding on average must have had an absolute beginning. You cannot escape the beginning by adding more universes." },
      { q: "According to the Kalam argument the cause of the universe must be personal.", answer: true, explain: "An impersonal force cannot choose to create. Only a personal agent with will and intentionality can choose to act. Since the universe began — something chose to cause it. That requires a personal cause." },
      { q: "The Second Law of Thermodynamics supports an eternal universe.", answer: false, explain: "The opposite is true. The universe is running down — losing usable energy. If it were eternal it would have run out completely. The fact that it still has usable energy means it has not been running forever — it had a beginning." },
    ]
  },
  {
    id: "church_history", title: "Church History", icon: "⛪", tag: "History",
    summary: "Understanding where the church came from, how it spread, and what it endured gives believers a foundation that deepens everything else. You cannot know where you are going if you do not know where you came from.",
    content: [
      { heading: "Why Church History Matters for Apologetics", body: "The most common attack on Christianity is that it is a recent human invention — that the church corrupted Jesus's original message, that the Bible was assembled by men with political motives, or that Christianity only spread through colonial force. Church history is the answer to all of these arguments. When you know what actually happened — the evidence demolishes the revision.\n\nChurch history also gives you identity. You are not a lone believer in 2026. You are part of a two-thousand-year chain of men and women who believed the same gospel, faced the same challenges, and were faithful under pressure greater than most of us will ever face. That history is yours." },
      { heading: "Jerusalem — Where It Began", body: "Acts 2 — Pentecost. Fifty days after the resurrection the Holy Spirit fell on approximately 120 believers gathered in Jerusalem. Peter preached to a crowd of Jewish pilgrims from across the known world. Three thousand people were added to the church in a single day.\n\nThis was not a slow gradual movement. It exploded from the beginning — in the same city where Jesus was crucified, in front of the same people who witnessed the events. The apostles were not hiding in a remote location telling stories. They were in Jerusalem telling the same people who could have walked to the empty tomb and checked.\n\nThe church in Jerusalem was Jewish and Torah-observant in its early years. The tension between Jewish tradition and the new covenant in Christ would define the first generation of church history." },
      { heading: "Antioch — Where the Church Became Global", body: "Acts 11:26 — In Antioch the disciples were first called Christians. This is one of the most significant verses in church history.\n\nAntioch of Syria — the third largest city in the Roman Empire — became the first genuinely multicultural church. Jews and Gentiles worshipping together as equals. Five leaders listed in Acts 13:1: Barnabas from Cyprus, Simeon called Niger likely African, Lucius of Cyrene from North Africa, Manaen who grew up with Herod, and Saul. Five men. Five different backgrounds. One church.\n\nAll three of Paul's missionary journeys began and ended in Antioch. It was the sending base of the Gentile mission. Without Antioch — the gospel may have stayed confined to Jewish communities in the Middle East. The urban multicultural church at Antioch is the reason the gospel reached Europe, Asia, and eventually the entire world." },
      { heading: "The Jerusalem Council — Acts 15", body: "The first major theological crisis of the church. False teachers came from Jerusalem to Antioch claiming Gentile believers had to be circumcised and follow the Law of Moses to be saved. Paul and Barnabas opposed them fiercely.\n\nThe church sent them to Jerusalem to resolve the dispute. The apostles and elders gathered — the first church council in history. After significant debate Peter stood and declared: We believe it is through the grace of our Lord Jesus that we are saved — just as they are. Acts 15:11.\n\nJames — the brother of Jesus and leader of the Jerusalem church — gave the final decision: Do not burden the Gentiles with the Law. The gospel is for all people by grace through faith.\n\nThis decision was not just theological — it was world-changing. It meant the gospel was not a Jewish sect. It was a universal message for every nation, tribe, and tongue. The Jerusalem Council is why you and I can be Christians today without converting to Judaism first." },
      { heading: "Paul and the Spread to the Gentiles", body: "Paul of Tarsus is the most important human figure in early church history after Jesus. Trained under the top rabbi of his generation — Gamaliel. A Pharisee of Pharisees. A persecutor of the church who witnessed the stoning of Stephen.\n\nThen — on the road to Damascus — Jesus appeared to him personally. Acts 9:3-6. Everything changed.\n\nThree missionary journeys spanning approximately 46-57 AD. Paul took the gospel from Jerusalem through Turkey, Greece, and ultimately to Rome. He planted churches in Philippi, Thessalonica, Corinth, Ephesus, and dozens of other cities. He wrote 13 letters — nearly half the New Testament.\n\nHis missionary strategy was deliberately urban. He went to major cities — trade hubs — because the gospel would spread from cities along trade routes to surrounding regions. That strategy is why Christianity spread so rapidly across the Roman world in a single generation." },
      { heading: "The Persecution Era — 64-313 AD", body: "The Roman Emperor Nero blamed Christians for the great fire of Rome in 64 AD and launched the first imperial persecution of the church. Peter and Paul are traditionally believed to have been martyred in Rome during this period.\n\nTen major waves of imperial persecution followed over the next two and a half centuries. Christians were fed to lions in the Colosseum. They were burned as torches to light Nero's garden parties. They were beheaded, crucified, and publicly executed for refusing to worship Roman gods or declare Caesar as Lord.\n\nTheir response to persecution became one of the most powerful apologetics tools in history. Tertullian — a church father writing around 200 AD — said: the blood of the martyrs is the seed of the church. Every execution produced more believers. The Roman Empire could not stop the church by killing its members — because Christians died differently. They died with peace, forgiveness on their lips, and hope in their eyes. The pagans watching could not explain it.\n\nA faith you are willing to die for is worth investigating. The persecution era is why the early church was impossible to dismiss as wishful thinking." },
      { heading: "Constantine and the Edict of Milan — 313 AD", body: "In 313 AD Emperor Constantine issued the Edict of Milan — making Christianity legal throughout the Roman Empire. For the first time in history Christians could worship publicly without fear of execution.\n\nConstantine's conversion and the legalization of Christianity is one of the most debated moments in church history. The positive: persecution ended. Christianity spread openly. Church buildings were built. Scripture was copied and preserved on a massive scale.\n\nThe complication: when Christianity became the official religion of the empire — it became politically advantageous to be Christian. Cultural Christians entered the church in large numbers. The line between the church and the empire blurred. Some historians argue this created problems the church is still dealing with today.\n\nFor apologetics purposes — understanding Constantine answers the Muslim and skeptic claim that the church invented its doctrines at the Council of Nicaea in 325 AD under Constantine's influence. The truth: Nicaea was called to settle a dispute about whether Jesus was fully divine — and the overwhelming consensus of bishops from across the empire affirmed what the church had always believed. Constantine did not create the doctrine of the Trinity — he provided the space for the church to formally articulate what it already believed." },
      { heading: "The Council of Nicaea — 325 AD", body: "The most important theological council in church history. Called to address Arianism — the teaching of a priest named Arius who claimed Jesus was the first and greatest created being but not fully God.\n\nApproximately 300 bishops gathered from across the Roman Empire. The debate was fierce. Athanasius — a young deacon who would become the defining defender of orthodox Christianity — opposed Arius directly. His phrase against Arianism: the Son is of the same substance as the Father — homoousios in Greek.\n\nThe council affirmed by an overwhelming majority that Jesus is fully God — not a lesser being, not a created thing, not a god in a lower category. The Nicene Creed produced at this council is still recited in churches around the world today.\n\nWhy this matters for apologetics: Jehovah's Witnesses claim the Trinity was invented at Nicaea. This is historically false. The doctrine was not invented at Nicaea — it was defended there against a new teaching that contradicted what the church had always believed. The bishops were not creating doctrine — they were protecting it." },
      { heading: "The Reformation — 1517 AD", body: "On October 31 1517 a German monk named Martin Luther nailed 95 Theses to the door of the Wittenberg Castle Church — challenging the Catholic Church's practice of selling indulgences (the idea that you could pay money to reduce time in purgatory for yourself or a loved one).\n\nLuther's deeper challenge was theological: salvation is by grace alone through faith alone in Christ alone — not through the sacraments, the church, or the Pope. His foundation was Scripture alone as the final authority.\n\nThe Reformation produced the Protestant church — which is the tradition most urban evangelical believers today stand in. It also produced one of the most important developments in Christian history: the Bible translated into the language of ordinary people. Before the Reformation most Christians could not read Scripture for themselves. Luther translated the Bible into German. William Tyndale translated it into English — and was burned at the stake for it.\n\nFor apologetics: understanding the Reformation answers the Catholic argument that Protestantism is a 500-year-old invention. The Reformers argued — and the evidence supports — that they were not inventing a new church. They were recovering what the original church believed and what had been buried under centuries of tradition." },
      { heading: "Key People Every Believer Should Know", body: "Polycarp (69-155 AD) — Bishop of Smyrna. Disciple of the Apostle John. Martyred at 86 years old. When asked to deny Christ to save his life he said: Eighty-six years I have served Him and He has done me no wrong. How then can I blaspheme my King who saved me?\n\nAthanasius (296-373 AD) — Defender of the Trinity against Arianism. Exiled five times by emperors who sided with the Arians. His phrase describes his ministry: Athanasius contra mundum — Athanasius against the world. He won.\n\nAugustine (354-430 AD) — Bishop of Hippo in North Africa. Former pagan and sexual libertine who came to faith through the prayers of his mother Monica and the preaching of Ambrose. His Confessions is the first autobiography in Western literature. His City of God established the theological framework for how Christians understand the relationship between faith and culture. His theology shaped virtually every major theological tradition that followed him.\n\nWilliam Tyndale (1494-1536) — Translated the Bible into English so ordinary people could read it. Said to a scholar who opposed him: If God spare my life, ere many years I will cause a boy that driveth the plough to know more of the Scripture than thou dost. He was strangled and burned at the stake for it. His translation became the foundation of the King James Bible.\n\nMartin Luther King Jr. (1929-1968) — The church history of Black Americans is inseparable from the civil rights movement. King's theology was deeply rooted in the Exodus narrative, the prophets, and the Sermon on the Mount. His Letter from Birmingham Jail is one of the most theologically rich documents in American history. Understanding King's theology is essential for urban apologetics — because the attack on Christianity as the white man's religion ignores the fact that Black Christian theology produced the most powerful moral reform movement in American history." },
    ],
    quiz: [
      { q: "Christians were first called Christians in Jerusalem.", answer: false, explain: "Acts 11:26 — believers were first called Christians in Antioch, the multicultural church that became the sending base for Paul's missionary journeys." },
      { q: "The Edict of Milan in 313 AD made Christianity the official religion of the Roman Empire.", answer: false, explain: "The Edict of Milan made Christianity legal — ending persecution. Christianity did not become the official state religion until later under Emperor Theodosius in 380 AD." },
      { q: "The Council of Nicaea invented the doctrine of the Trinity in 325 AD.", answer: false, explain: "Nicaea defended the doctrine of the Trinity against Arianism — a new teaching that contradicted what the church had always believed. The council did not create the doctrine — it protected it." },
      { q: "Athanasius was exiled multiple times for defending the full divinity of Christ.", answer: true, explain: "Athanasius was exiled five times by emperors who sided with the Arians. His faithfulness under pressure earned him the description Athanasius contra mundum — Athanasius against the world. He outlasted all his opponents." },
      { q: "William Tyndale was executed for translating the Bible into English.", answer: true, explain: "Tyndale was strangled and burned at the stake in 1536 for translating the Bible into English so ordinary people could read it. His translation became the foundation of the King James Bible." },
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
      { ref: "John 1:12", text: "But to all who did receive him, who believed in his name, he gave the right to become children of God.", use: "Salvation is received not achieved. Use when someone asks what becoming a Christian actually means." },
      { ref: "2 Corinthians 5:21", text: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.", use: "The great exchange — His righteousness credited to us. Use when explaining how a holy God can forgive sinners." },
      { ref: "Isaiah 53:6", text: "All we like sheep have gone astray; we have turned — every one — to his own way; and the Lord has laid on him the iniquity of us all.", use: "Powerful with Jewish friends and skeptics. Written 700 years before Jesus — describes the cross precisely." },
    ]
  },
  {
    id: "boldness", label: "Your Boldness", icon: "🔥", color: "#da6a4a",
    verses: [
      { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control.", use: "Say this before you approach anyone. Fear in evangelism is not from God — go out in His power." },
      { ref: "1 Peter 3:15", text: "Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.", use: "Your mandate as an apologist. Three components: prepared, gentle, respectful — all three matter." },
      { ref: "Acts 1:8", text: "You will receive power when the Holy Spirit has come upon you, and you will be my witnesses.", use: "The boldness you need is received from the Spirit, not manufactured by you. Pray before you go out." },
      { ref: "Romans 1:16", text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.", use: "Memorize this and say it out loud before every street conversation. Own it." },
      { ref: "Proverbs 28:1", text: "The wicked flee when no one pursues, but the righteous are bold as a lion.", use: "Boldness is the natural state of a righteous man. You have nothing to run from. Walk in it." },
      { ref: "Jeremiah 1:8", text: "Do not be afraid of them, for I am with you to deliver you, declares the Lord.", use: "God said this to Jeremiah before sending him to a hostile audience. He says it to you too." },
      { ref: "Matthew 10:19-20", text: "Do not be anxious how you are to speak or what you are to say, for what you are to say will be given to you in that hour. For it is not you who speak, but the Spirit of your Father speaking through you.", use: "When you feel unprepared in the moment — relax. The Spirit shows up when you open your mouth in faith." },
      { ref: "Philippians 4:13", text: "I can do all things through him who strengthens me.", use: "Not a sports verse — a suffering and endurance verse. Paul wrote it from prison. Real strength for hard conversations." },
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
      { ref: "Hebrews 4:12", text: "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit.", use: "Against 'the Bible is just an old book.' The Word is alive — it does something when it is spoken and heard." },
      { ref: "2 Timothy 3:16", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.", use: "Against 'the Bible was written by men.' Men wrote it — God breathed it. The origin is divine." },
      { ref: "1 Corinthians 15:3-4", text: "Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.", use: "The resurrection as historical fact. Paul wrote this within 25 years of the event — this is eyewitness-era testimony." },
      { ref: "Psalm 19:1", text: "The heavens declare the glory of God, and the sky above proclaims his handiwork.", use: "Against 'science disproved God.' Creation itself testifies. The complexity of the universe demands a Creator." },
    ]
  },
  {
    id: "invitation", label: "Under Conviction", icon: "💛", color: "#da4a8a",
    verses: [
      { ref: "John 6:37", text: "Whoever comes to me I will never cast out.", use: "When someone thinks they are too far gone or too sinful. Nobody is disqualified who comes to Jesus." },
      { ref: "Romans 10:13", text: "For everyone who calls on the name of the Lord will be saved.", use: "Simple, clear, no exceptions. Everyone means everyone. Use when someone is close but hesitant." },
      { ref: "Isaiah 1:18", text: "Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow.", use: "God Himself invites the reasoning. Perfect verse for the skeptic — God is not afraid of your questions." },
      { ref: "Revelation 3:20", text: "Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him.", use: "Jesus is the one pursuing them. They just have to open the door. Use when someone is under conviction." },
      { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.", use: "When someone is afraid their past is too much. Confession is the only requirement — God handles the rest." },
      { ref: "Hebrews 7:25", text: "Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.", use: "To the uttermost — completely, fully, with nothing left out. Use when someone feels beyond saving." },
      { ref: "Ezekiel 36:26", text: "And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh.", use: "When someone says 'I can't change.' God does not ask you to change — He promises to change you from the inside." },
      { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.", use: "The prodigal son. The father ran — not walked. God is not waiting for you to get close enough. He runs toward you." },
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .fade-up { animation: fadeUp 0.3s ease both; }
        button:hover { opacity: 0.85; }
        textarea:focus, input:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0d1020; } ::-webkit-scrollbar-thumb { background: #2a3a4a; border-radius: 2px; }
        .sr-street { font-family: 'Bebas Neue', sans-serif !important; }
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

      {/* STACKED LOGO HEADER */}
      <div className="fade-up" style={{ background: "linear-gradient(135deg,#0d1428 0%,#1a1000 100%)", border: "1px solid #2a2010", borderRadius: 12, padding: "24px 18px 20px", marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 0, position: "relative", overflow: "hidden" }}>

        {/* Background glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        {/* Footsteps SVG */}
        <svg width="260" height="28" viewBox="0 0 260 28" fill="none" style={{ marginBottom: 10, position: "relative", zIndex: 1 }}>
          <ellipse cx="12" cy="20" rx="9" ry="5.5" fill="#c9a96e" opacity="0.25"/>
          <ellipse cx="16" cy="12" rx="5" ry="3" fill="#c9a96e" opacity="0.18"/>
          <ellipse cx="42" cy="22" rx="10" ry="6" fill="#ffffff" opacity="0.18"/>
          <ellipse cx="47" cy="13" rx="5.5" ry="3.2" fill="#ffffff" opacity="0.12"/>
          <ellipse cx="76" cy="20" rx="11" ry="6.5" fill="#c9a96e" opacity="0.4"/>
          <ellipse cx="82" cy="11" rx="6" ry="3.5" fill="#c9a96e" opacity="0.28"/>
          <ellipse cx="114" cy="22" rx="12" ry="7" fill="#ffffff" opacity="0.28"/>
          <ellipse cx="121" cy="12" rx="6.5" ry="3.8" fill="#ffffff" opacity="0.2"/>
          <ellipse cx="154" cy="20" rx="13" ry="7.5" fill="#c9a96e" opacity="0.55"/>
          <ellipse cx="162" cy="10" rx="7" ry="4" fill="#c9a96e" opacity="0.4"/>
          <ellipse cx="196" cy="22" rx="14" ry="8" fill="#ffffff" opacity="0.38"/>
          <ellipse cx="205" cy="11" rx="7.5" ry="4.5" fill="#ffffff" opacity="0.27"/>
          <ellipse cx="240" cy="20" rx="15" ry="8.5" fill="#c9a96e" opacity="0.7"/>
          <ellipse cx="250" cy="9" rx="8" ry="4.5" fill="#c9a96e" opacity="0.55"/>
        </svg>

        {/* Stacked wordmark */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, position: "relative", zIndex: 1 }}>
          <div className="sr-street" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 12vw, 72px)", color: "#ffffff", letterSpacing: "0.15em", lineHeight: 0.95, textAlign: "center" }}>STREET</div>
          <div style={{ width: "85%", height: "2px", background: "linear-gradient(90deg, transparent, #c9a96e 20%, #e8c97e 50%, #c9a96e 80%, transparent)", margin: "4px 0" }} />
          <div className="sr-street" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 12vw, 72px)", color: "#c9a96e", letterSpacing: "0.15em", lineHeight: 0.95, textAlign: "center" }}>READY</div>
        </div>

        {/* Tagline */}
        <div style={{ height: 1, background: "#2a2010", margin: "14px 0 10px", width: "100%", position: "relative", zIndex: 1 }} />
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#c9a96e", textTransform: "uppercase", marginBottom: 4, fontFamily: "'Arial',sans-serif", position: "relative", zIndex: 1 }}>Our Mission</div>
        <div style={{ fontSize: 13, color: "#c9a96e", fontWeight: "bold", marginBottom: 4, lineHeight: 1.6, textAlign: "center", position: "relative", zIndex: 1 }}>Always be prepared — 1 Peter 3:15.</div>
        <div style={{ fontSize: 13, color: "#8a7a5a", lineHeight: 1.7, textAlign: "center", position: "relative", zIndex: 1 }}>Study. Drill. Practice. Be ready to defend your faith anywhere.</div>
      </div>

      {/* WHAT IS APOLOGETICS */}
      <div className="fade-up" style={{ background: "#080c18", border: "1px solid #1a2a1a", borderRadius: 10, padding: "16px 16px", marginBottom: 16, animationDelay: "0.2s" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#4eda7a", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Arial',sans-serif" }}>What Is Apologetics?</div>
        <div style={{ fontSize: 14, color: "#c9a96e", fontWeight: "bold", marginBottom: 8, lineHeight: 1.6 }}>It is not about arguing. It is about being ready.</div>
        <div style={{ fontSize: 13, color: "#8a9a8a", lineHeight: 1.8, marginBottom: 10 }}>
          Apologetics comes from the Greek word <span style={{ color: "#c9a96e", fontStyle: "italic" }}>apologia</span> — meaning a reasoned defense. Peter used it in 1 Peter 3:15 when he said to always be prepared to give a reason for the hope that is in you. It is the discipline of knowing what you believe, why you believe it, and how to explain it clearly when someone challenges it.
        </div>
        <div style={{ fontSize: 13, color: "#8a9a8a", lineHeight: 1.8, marginBottom: 10 }}>
          Apologetics is not arguing people into the Kingdom. It is removing the intellectual roadblocks that keep people from considering the gospel seriously. It is answering the Muslim who says the Bible was corrupted. The Hebrew Israelite who says Jesus only came for Israel. The skeptic who says science has disproved God. Not to win — but to open a door.
        </div>
        <div style={{ height: 1, background: "#1a2a1a", margin: "12px 0" }} />
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#4eda7a", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Arial',sans-serif" }}>Why StreetReady?</div>
        <div style={{ fontSize: 13, color: "#8a9a8a", lineHeight: 1.8, marginBottom: 8 }}>
          Most apologetics resources are written for seminary students — dense, academic, and disconnected from the conversations happening on street corners, in barbershops, at front doors, and in DMs. StreetReady was built for the everyday believer who knows the gospel is true but freezes when someone challenges it face to face.
        </div>
        <div style={{ fontSize: 13, color: "#8a9a8a", lineHeight: 1.8, marginBottom: 10 }}>
          The founder of this platform spent fourteen years in the streets of Brooklyn before coming to faith. He knows the conversations that happen in urban communities — and he built this tool specifically for those conversations. Not theory. Not academia. Street-level. Faith-grounded. Ready.
        </div>
        <div style={{ height: 1, background: "#1a2a1a", margin: "12px 0" }} />
        <div style={{ fontSize: 10, letterSpacing: 3, color: "#4eda7a", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Arial',sans-serif" }}>How to Use This App</div>
        {[
          { step: "01", title: "Study", desc: "Start with the doctrine modules. Know what you believe before you learn what others believe. The Trinity, the nature of Jesus, salvation, and manuscript reliability are your foundation." },
          { step: "02", title: "Learn What Others Believe", desc: "Go through the faith profiles. Understand Islam, Hebrew Israelites, JWs, Mormonism, and Judaism from their own perspective — not a caricature. The person who feels understood is more likely to listen." },
          { step: "03", title: "Drill Scripture", desc: "Memorize the verses that matter most in street conversations. Organized by function — not alphabetically. The Gospel. Boldness. Answering Objections. Under Conviction." },
          { step: "04", title: "Practice with the AI Coach", desc: "Face real objections before you face them in real life. The AI plays the objector and coaches your responses simultaneously. Practice until the answers come naturally." },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#c9a96e", opacity: 0.4, fontFamily: "'Arial',sans-serif", minWidth: 28, lineHeight: 1.4 }}>{item.step}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: "bold", color: "#c9a96e", marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: "#6a7a6a", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          </div>
        ))}
        <div style={{ background: "#0d1a0d", border: "1px solid #1a3a1a", borderRadius: 8, padding: "12px 14px", marginTop: 4 }}>
          <div style={{ fontSize: 12, color: "#6a9a6a", lineHeight: 1.7, fontStyle: "italic" }}>"Our fight is not against people on earth — we are fighting against spiritual powers of evil in the heavenly places." — Ephesians 6:12</div>
          <div style={{ fontSize: 11, color: "#3a5a3a", marginTop: 6, fontFamily: "'Arial',sans-serif", letterSpacing: 1 }}>Engage people. Not defeat them.</div>
        </div>
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
        body: "This is their most common and most important argument. Here is how to dismantle it step by step.\n\nSTEP 1 — Ask when it was corrupted. The Quran was written in the 600s AD. The New Testament was written 25–50 years after Jesus — approximately 50–100 AD. The Old Testament manuscripts (Dead Sea Scrolls) date to 250 BC. All of this existed 500–600 years before Muhammad. If the Bible was corrupted — it had to happen before Islam arrived. So ask: 'When exactly was it corrupted and who did it?'\n\nSTEP 2 — Use the Quran against the argument. Surah 5:47 tells Christians to 'judge by what Allah revealed in the Gospel.' Surah 10:94 tells Muhammad himself — if in doubt, ask those who read the Scripture before you. If the Bible was corrupted, why does the Quran tell people to read it and judge by it? The Quran's own words collapse the corruption argument.\n\nSTEP 3 — Present the manuscript evidence. We have over 24,000 New Testament manuscripts — more than any other ancient document by a massive margin. Homer's Iliad has 643. Caesar's Gallic Wars has 10. The Dead Sea Scrolls (discovered 1947) contain Isaiah scrolls from 250 BC that are word-for-word identical to modern translations. No corruption. The manuscripts before Islam and after Islam match. Additionally the Septuagint — the Greek translation of the Hebrew Old Testament completed by Jewish scholars 250 years before Jesus — contains every Messianic prophecy intact. Isaiah 53. Psalm 22. Daniel 9. Jewish scholars locked these prophecies in writing before Jesus was born and before Muhammad received any revelation. If the Bible was corrupted — when exactly did it happen and why does every manuscript we have agree?\n\nSTEP 4 — Ask for the original. 'Show me the uncorrupted version.' No such document exists. No Muslim scholar has ever produced an original uncorrupted Bible because there is no evidence one ever existed that differed from what we have.\n\nSTEP 5 — Timeline closes it. Jesus lived approximately 4 BC – 30 AD. Muhammad was born 570 AD. That is a 570+ year gap. The New Testament was circulating throughout the Roman Empire, North Africa, and the Middle East for centuries before Islam. For the corruption to work — thousands of manuscripts across dozens of countries and languages would all have to have been changed identically with no surviving originals and no record of the change. That is historically impossible."
      },
      {
        heading: "The Q Source Argument — Advanced Response",
        body: "In formal debates Muslims sometimes use academic-sounding arguments to challenge the reliability of the Gospels. One of the most common is the Q Source argument. Here is what it is and how to respond.\n\nWHAT IS Q? Q comes from the German word Quelle meaning source. It is a theoretical document that some biblical scholars believe Matthew and Luke both drew from when writing their Gospels — in addition to Mark. The argument goes that since Matthew and Luke share material not found in Mark, they must have used a common written source which scholars call Q.\n\nCRITICAL POINT — Q has never been found. No manuscript. No fragment. No archaeological evidence of any kind. It is a hypothetical reconstruction. No scholar has ever seen Q because it may never have existed.\n\nWHY MUSLIMS USE IT: They use Q to argue that the original teachings of Jesus have been lost or altered — and that what we have in the Gospels is later invention. The argument sounds like this: 'Even your own Christian scholars admit the Gospels are compiled from sources like Q that no longer exist. Therefore the Bible cannot be trusted.'\n\nHOW TO RESPOND:\n\n1. Q is a hypothesis not a document. Using a hypothetical that has never been found as historical evidence is not scholarship — it is speculation. You cannot use a theory to disprove 24,000 physical manuscripts.\n\n2. The agreement between Matthew and Luke actually strengthens reliability. If two independent sources share common material it means they were drawing from real early traditions about Jesus — not inventing them. The overlap confirms the core of His teaching.\n\n3. The manuscript evidence stands regardless of Q. Whether Q existed or not — 24,000 New Testament manuscripts predating Islam by centuries all agree with each other. Q has no bearing on that evidence.\n\n4. Q is a Christian internal debate — not a Muslim advantage. This is an academic conversation among New Testament scholars about Gospel composition. It says nothing about whether Jesus rose from the dead, whether His claims were true, or whether the text we have is reliable.\n\n5. Ask the question back: 'If Q is your evidence for corruption — where is Q? You are asking me to doubt 24,000 manuscripts because of a document nobody has ever seen. That is not historical evidence. That is a theory being used as a weapon.'"
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
      },
      {
        heading: "What Is the Injeel?",
        body: "The Injeel is the Arabic word for Gospel — derived from the Greek euangelion meaning good news. In Islamic theology the Injeel refers to the divine scripture Allah revealed directly to Jesus (Isa) during his earthly ministry. Muslims believe Allah revealed four major books to four major prophets — the Tawrat to Moses, the Zabur to David, the Injeel to Jesus, and the Quran to Muhammad.\n\nThe problem for Islam — the Injeel does not exist. Muslims claim the original divine revelation to Jesus was corrupted and replaced by the four Gospels written by his followers. This is the entire foundation of the Bible corruption argument. Understanding the Injeel is the key to dismantling it.\n\nSurah 5:46 — We sent Jesus the son of Mary confirming what came before him in the Torah and We gave him the Gospel in which was guidance and light.\n\nSurah 5:47 — Let the People of the Gospel judge by what Allah has revealed therein.\n\nThis is the most important verse in the entire Bible corruption debate. Allah commands Christians to judge by the Gospel — present tense, at the time of Muhammad. If the Injeel was already corrupted before Muhammad received this command — why did Allah tell Christians to judge by it? Either Allah did not know it was corrupted — which contradicts Islamic theology — or it was not corrupted at the time of Muhammad. If it was not corrupted at the time of Muhammad then it was corrupted after the Quran confirmed it — which means the Quran endorsed a document and then that document was changed. That creates an insurmountable theological problem for Islam.\n\nSurah 10:94 — Allah tells Muhammad himself: if you are in doubt ask those who have been reading the Scripture before you. Allah is directing Muhammad to consult the Bible for verification. You do not send someone to a corrupted text for verification.\n\nThe historical impossibility — the four Gospels were written within 30-65 years of Jesus and were circulating throughout the Roman Empire, North Africa, and the Middle East in the first century. We have thousands of manuscripts from before and after the rise of Islam that all agree with each other. For the original Injeel to have been replaced — every copy in every country in every language would have had to be changed simultaneously with no surviving originals and no historical record of the conspiracy. No manuscript exists. No historian references it. No archaeological evidence supports it.\n\nKey question to ask: Can you show me any historical evidence — not from the Quran but from any external source — that a different Gospel existed before the four we have today? Any manuscript fragment, any reference from any historian, any archaeological evidence at all? We have 24,000 manuscripts of the New Testament and not one of them shows a different Gospel. If the Injeel existed and was replaced — where is the evidence of the replacement?"
      },
      {
        heading: "📖 Know Their Scripture — Bible vs Quran",
        body: "The Quran affirms more about Jesus than most Muslims realize. Use their own scripture to open the conversation.\n\nSurah 3:45 — The Quran calls Jesus the Word of God (Kalimatullah) and a Spirit from God. No other prophet in the Quran receives these titles. Compare John 1:1,14 — In the beginning was the Word and the Word was God... the Word became flesh.\n\nSurah 19 (Maryam) — The Quran affirms the virgin birth of Jesus in full detail. This is common ground. Start here.\n\nSurah 4:157 — The Quran denies the crucifixion. This contradicts every historical source including Roman and Jewish records (Tacitus, Josephus). Ask: if every historical source confirms the crucifixion and only the Quran — written 600 years later — denies it, which source carries more weight?\n\nSurah 5:47 — Allah tells Christians to judge by the Gospel. If the Gospel was already corrupted when Muhammad received this command, why did Allah tell Christians to judge by it?\n\nSurah 10:94 — Allah tells Muhammad himself: if you are in doubt, ask those who read the Scripture before you. This affirms the Bible's authority at the time of Muhammad.\n\nKey question to ask: The Quran calls Jesus the Word of God and a Spirit from God. Can you show me any other prophet who receives those titles? Let them search. They will not find one. Then ask what those titles mean."
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
      },
      {
        heading: "📖 Know Their Scripture — The Bible in Full Context",
        body: "Hebrew Israelites use the Bible exclusively but read it selectively. Their entire argument collapses when you read the same passages in full context.\n\nMatthew 15:24 — Their anchor verse: I was sent only to the lost sheep of Israel. Full context: Matthew 28:19 in the same Gospel — Go and make disciples of ALL NATIONS. Jesus himself expanded the mission before He ascended. The same author. The same book. The temporary limitation became the universal commission.\n\nActs 8:26-40 — Philip and the Ethiopian eunuch. The Ethiopian is an African convert to Judaism reading Isaiah. Philip explains the gospel to him and baptizes him immediately — no requirement to be a genetic Israelite. This is one of the earliest gentile conversions in Acts.\n\nRomans 2:28-29 — For no one is a Jew who is merely one outwardly, nor is circumcision outward and physical. But a Jew is one inwardly. Paul defines Israel spiritually not ethnically. This directly dismantles genetic identity claims.\n\nGalatians 3:28-29 — There is neither Jew nor Greek, slave nor free, male nor female, for you are all one in Christ Jesus. And if you are Christ's then you are Abraham's offspring and heirs according to promise. Belonging to Christ — not ethnicity — makes you an heir of the promise.\n\nGenesis 12:3 — God told Abraham: in you all the families of the earth shall be blessed. The blessing was always intended for all nations. Israel was the vehicle, not the destination.\n\nKey question to ask: If the gospel is only for genetic Israelites, why did Paul spend his entire ministry bringing it to Greeks, Romans, and Gentiles? And why did the Holy Spirit fall on Cornelius — a Roman centurion — in Acts 10 before he was circumcised or converted to Judaism?"
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
      },
      {
        heading: "📖 Know Their Scripture — Bible vs New World Translation",
        body: "The Watchtower altered specific Greek words to change the meaning of key verses. Knowing the original language exposes the changes.\n\nJohn 1:1 — Original Greek: kai theos en ho logos — and the Word was God. NWT changes this to: and the Word was a god. The problem: Greek grammar does not support this translation. When a predicate noun precedes the verb without the article (as here) it emphasizes the nature or quality of the subject — not make it indefinite. Every major Greek scholar including non-Christian scholars reject the NWT rendering here.\n\nColossians 1:15-17 — NWT inserts the word other four times: he is before all OTHER things, all OTHER things were created through him. The word other does not appear in any Greek manuscript. It was inserted to make Jesus a created being. The original text says he is before all things — meaning before creation itself, which is impossible if he is part of creation.\n\nPhilippians 2:9 — NWT: God exalted him to a superior position. Original: God highly exalted him. The NWT downgrades the exaltation language to avoid the implication of full deity.\n\nKey question to ask: Can you show me a single Greek scholar — not affiliated with the Watchtower — who agrees with the translation of John 1:1 in the NWT? If the translation is accurate it should be supported by scholarship outside the organization. The Watchtower refuses to name the translators of the NWT. Ask why."
      }
    ]
  },
  {
    id: "mormon", title: "Mormonism (LDS)", icon: "⛪", color: "#4eda9a", bg: "#001a0e",
    tag: "400,000+ Members in Texas",
    summary: "God was once a man who progressed to godhood. Jesus and Lucifer are spirit brothers. Salvation requires LDS temple ordinances. The Book of Mormon is Scripture equal to the Bible.",
    sections: [
      {
        heading: "Who They Are",
        body: "The Church of Jesus Christ of Latter-day Saints (LDS). Founded 1830 by Joseph Smith in New York. Over 17 million members worldwide. Approximately 400,000 in Texas alone — one of the highest concentrations outside Utah. The young men and women in white shirts and ties or modest dresses going door to door are LDS missionaries. They study for months before going out and are among the most trained religious conversationalists you will encounter. They use Christian language — Jesus, grace, salvation, gospel — but fill those words with completely different meanings. This is what makes them uniquely dangerous for unprepared believers."
      },
      {
        heading: "Core Beliefs",
        body: "God the Father has a physical body of flesh and bones. He was once a man who progressed to become God — this is called eternal progression. There are multiple gods. Jesus and Lucifer are spirit brothers — both children of Heavenly Father before coming to earth. The Holy Spirit is a separate god. Salvation has two tiers: general resurrection for all through Jesus, and exaltation (becoming a god) through LDS ordinances. The Book of Mormon, Doctrine and Covenants, and Pearl of Great Price are Scripture alongside the Bible. The Bible is only authoritative 'as far as it is translated correctly' — a qualifier that lets them dismiss any passage contradicting LDS teaching."
      },
      {
        heading: "The LDS Godhead — Why It Is Not the Christian Trinity",
        body: "The LDS Godhead and the Christian Trinity use the same words — Father, Son, and Holy Ghost — but they describe completely different beings. This distinction is the most important thing to understand before engaging a Mormon.\n\nThe Christian Trinity: One God — one Being — existing as three distinct co-equal persons who share the same divine nature and substance. Three persons. One God. One being. The Father is not the Son. The Son is not the Spirit. But all three are fully the same one God.\n\nThe LDS Godhead: Three completely separate and distinct gods who are unified only in purpose, will, and agreement — not in nature, substance, or being. Three gods. Three separate beings. The Father has a physical body of flesh and bones. The Son has a physical body of flesh and bones. The Holy Ghost has no physical body — he is a spirit person but still a separate god.\n\nThis is not the Trinity. This is polytheism — the belief in multiple gods.\n\nThe Foundation — Joseph Smith's First Vision: In 1820 Joseph Smith claimed God the Father and Jesus Christ appeared to him as two separate physical beings of flesh and bone. This vision is the cornerstone of all LDS theology. Everything in LDS doctrine about the nature of God flows from this single claimed experience. If the Father and Son appeared as two separate physical beings — they cannot be the same one God of Scripture.\n\nDoctrinal Proofs from LDS Scripture:\n\nDoctrine and Covenants 130:22 — The Father has a body of flesh and bones as tangible as man's. The Son also. But the Holy Ghost has not a body of flesh and bones but is a personage of Spirit. Three separate beings. Two physical. One spirit.\n\nTeachings of the Prophet Joseph Smith p. 370 — I will preach on the plurality of Gods. I have always declared God to be a distinct personage, Jesus Christ a separate and distinct personage from God the Father, and the Holy Ghost was a distinct personage and or Spirit — and these three constitute three distinct personages and three Gods. Joseph Smith's own words — three Gods.\n\nBiblical Response:\n\nDeuteronomy 6:4 — The Lord our God the Lord is one. Not three gods unified in purpose. One God.\n\nIsaiah 43:10 — Before me no god was formed nor shall there be any after me. There are no other gods — not in the past, not in the future. The LDS Father was formed — he was once a man before becoming a god. Isaiah says that is impossible.\n\nIsaiah 44:6 — I am the first and I am the last and besides me there is no god. No other gods exist. Period.\n\nJohn 4:24 — God is spirit. The biblical God does not have a physical body. The LDS Father has a body of flesh and bones. These are not the same God.\n\nNumbers 23:19 — God is not a man that he should lie nor a son of man that he should change his mind. The LDS Father was literally a man before becoming God. The Bible says God is not a man and never was.\n\nColossians 1:17 — He is before all things and in him all things hold together. Jesus holds all things together — he cannot be a separate god among many. He is the source and sustainer of all existence.\n\nKey question to ask: In Isaiah 43:10 God says before me no god was formed. Eternal progression teaches your Heavenly Father was once a man who was himself a spirit child of another god before him — meaning a god was formed before the current God. How do you reconcile those two things?"
      },
        body: "Joseph Smith claimed an angel named Moroni revealed golden plates buried in New York in 1823. He claimed to translate them using seer stones placed in a hat — the plates were not even present during much of the translation. The Book of Mormon claims ancient Israelites migrated to the Americas around 600 BC and that Jesus appeared there after the resurrection.\n\nProblems: No archaeological evidence for the civilizations described — millions of people with horses, steel, chariots, elephants, wheat, and barley in ancient America have left zero trace. DNA evidence consistently shows Native American ancestry traces to Asia — not the Middle East. The original 1830 Book of Mormon has been revised thousands of times despite Smith calling it 'the most correct book on earth.' The golden plates disappeared — claimed to have been taken back by the angel."
      },
      {
        heading: "Joseph Smith — False Prophet Test",
        body: "Deuteronomy 18:22 — a prophet whose words do not come true is a false prophet.\n\nSmith prophesied the New Jerusalem would be built in Missouri in his generation — it never happened. He prophesied he would not die until Jesus returned — he was killed in 1844. He practiced polygamy — marrying at least 33 women including teenagers as young as 14 and women already married to living husbands.\n\nThe First Vision — the foundational story of Mormonism — was told in multiple contradictory versions. In some accounts Smith saw only Jesus. In others the Father and Son. In others an angel. In the earliest written account there is no mention of seeing God at all."
      },
      {
        heading: "Their Key Arguments",
        body: "1. We are the restored true church — the original church apostatized and needed restoration through Joseph Smith. 2. The Bible has been corrupted and is incomplete — the Book of Mormon restores lost truth. 3. We believe in Jesus Christ — we are Christians too. 4. Eternal progression — becoming like God is the purpose of human existence. 5. Families are forever — LDS temple sealing binds families eternally."
      },
      {
        heading: "Your Counter-Response",
        body: "On God once being a man: Isaiah 43:10 — 'Before me no god was formed nor shall there be any after me.' God says He was never preceded by another god and will never be followed by one. Eternal progression directly contradicts this.\n\nOn Jesus and Lucifer as spirit brothers: Colossians 1:16 — 'By him all things were created — things in heaven and on earth, visible and invisible.' Jesus created everything. He cannot be the sibling of something He created.\n\nOn salvation requiring temple ordinances: Ephesians 2:8-9 — 'By grace you have been saved through faith — not by works so that no one can boast.' Galatians 1:8 — any gospel adding requirements to grace is a different gospel — accursed.\n\nOn being Christians too: Ask them directly — 'Was God always God or was He once a man?' Their answer reveals immediately that the God of Mormonism is not the God of Scripture."
      },
      {
        heading: "Three Questions That Open the Conversation",
        body: "Go straight to the nature of God and salvation. Do not get drawn into Book of Mormon archaeology debates — that is their territory.\n\n1. 'Has God always been God or was He once a man who progressed to godhood?' — Let them answer. Then go to Isaiah 43:10.\n\n2. 'Are Jesus and Lucifer spirit brothers?' — Let them answer. Then go to Colossians 1:16.\n\n3. 'Can a person be fully saved — enter the highest kingdom — without LDS temple ordinances?' — They will say no. Then go to Ephesians 2:8-9 and Galatians 1:8.\n\nPick ONE and stay on it. Do not jump around. One argument held firmly is more powerful than five arguments scattered."
      },
      {
        heading: "The Tone to Use",
        body: "Mormons are among the most morally serious, family-oriented people you will encounter. They are not hostile. They genuinely believe what they are teaching and have often never heard a serious biblical challenge to their theology.\n\nDo not say 'your church is a cult' even though it meets the theological definition. Say: 'I respect how seriously you take your faith. I want to show you something from Scripture that concerns me about what you have been taught.'\n\nGentleness disarms them because they are trained to expect aggressive confrontation. A believer who engages with genuine curiosity and specific Scripture is more effective than any debate strategy."
      },
      {
        heading: "Key Verses to Know",
        body: "Isaiah 43:10 — No god before or after God. Colossians 1:16 — Jesus created all things — He cannot be a created being. Ephesians 2:8-9 — Grace through faith alone — not works. Galatians 1:8-9 — Any other gospel is accursed. John 4:24 — God is spirit — He does not have a physical body. Deuteronomy 18:22 — False prophet test. Revelation 22:18 — Warning against adding to Scripture."
      },
      {
        heading: "Recommended Resource",
        body: "Mormonism 101 by Bill McKeever and Eric Johnson — the most thorough and fair-minded treatment of LDS theology from an evangelical perspective. Also helpful: the testimony of former LDS members on the Mormon Stories Podcast and the CES Letter — a document written by a former believing Mormon that documents the historical and theological problems with LDS claims."
      },
      {
        heading: "📖 Know Their Scripture — Bible vs LDS Additional Scriptures",
        body: "Mormons use the Bible but add three additional scriptures: the Book of Mormon, Doctrine and Covenants, and Pearl of Great Price. These texts directly contradict the Bible on foundational doctrines.\n\nOn the nature of God — Doctrine and Covenants 130:22 teaches God the Father has a body of flesh and bones as tangible as man. Compare John 4:24 — God is spirit. Numbers 23:19 — God is not a man. The LDS God is a physical exalted man. The biblical God is eternal spirit who has always been God.\n\nOn eternal progression — Lorenzo Snow (5th LDS prophet) taught: As man now is, God once was. As God now is, man may become. Compare Isaiah 43:10 — Before me no god was formed, nor shall there be any after me. If God was once a man who became God — then a god was formed before the current God. Isaiah says that is impossible.\n\nOn salvation — 2 Nephi 25:23 (Book of Mormon): it is by grace that we are saved after all we can do. Compare Ephesians 2:8-9 — For by grace you have been saved through faith, not a result of works. The Book of Mormon adds after all we can do — making grace conditional on human effort. Paul says grace is not a result of works at all.\n\nKey question to ask: Joseph Smith taught all existing churches were corrupt and God told him not to join any of them. If that is true — why does the early Book of Mormon quote the King James Version of the Bible, produced by one of those corrupt churches, word for word including its translation errors?"
      }
    ]
  },
  {
    id: "judaism", title: "Judaism", icon: "✡", color: "#daa520", bg: "#1a1400",
    tag: "The Root We Are Grafted Into",
    summary: "Judaism and Christianity share the same Scriptures and the same God. The single point of disagreement is the most important question in history: Is Jesus of Nazareth the promised Messiah?",
    sections: [
      {
        heading: "Read This First — The Right Posture",
        body: "This profile requires a different posture than every other section in this app. The history between Christians and Jewish people includes the Crusades, the Inquisition, forced conversions, pogroms, and the Holocaust — carried out in a historically Christian nation. Jewish people have legitimate reasons to be deeply suspicious of Christians who approach them with theological arguments.\n\nRomans 11:18 — Paul explicitly warns Gentile believers: 'Do not be arrogant toward the branches.' The branches are Israel. We are grafted in. We do not stand over them — we stand alongside them as recipients of the same covenant promises.\n\nThe approach to a Jewish person is never debate. It is always relationship, respect, and genuine love — then a conversation that begins with what you share, not where you disagree. Go in with humility. The Jewish people gave us the Scriptures, the Messiah, and the apostles. We owe them a debt we cannot repay."
      },
      {
        heading: "Who They Are",
        body: "Judaism is the world's oldest monotheistic religion — the covenant people of God through Abraham, Isaac, and Jacob. Approximately 15 million Jewish people worldwide. Major concentrations in New York City (the largest Jewish population outside Israel), Los Angeles, Miami, Chicago, and throughout New Jersey.\n\nNew York City alone has approximately 1.1 million Jewish residents — the largest Jewish community in the world outside Israel. Brooklyn specifically — Crown Heights, Borough Park, Williamsburg — has some of the most concentrated Orthodox and Hasidic Jewish communities in the world. If you are from Brooklyn you have grown up alongside this community your entire life.\n\nModern Judaism has several expressions: Orthodox (strictly observant of Torah law), Conservative (moderately traditional), Reform (liberal, emphasizes ethics over ritual), Reconstructionist (cultural and philosophical), and Secular Jewish (culturally Jewish, not religiously practicing). Most Jewish people you encounter in urban settings are secular or Reform — culturally Jewish but not necessarily Torah-observant."
      },
      {
        heading: "Core Beliefs",
        body: "One God — absolute, indivisible, incorporeal. The Shema — Deuteronomy 6:4: 'Hear O Israel the Lord our God the Lord is one.' This is the central confession of Judaism recited twice daily.\n\nThe Torah — the five books of Moses — is the foundational Scripture. The Tanakh (Torah, Prophets, Writings) is what Christians call the Old Testament. Jewish tradition also includes the Talmud — centuries of rabbinic commentary and legal discussion.\n\nThe covenant — God made specific covenant promises to Abraham and his descendants. The Jewish people are in a unique covenant relationship with God as His chosen people.\n\nThe Messiah — Judaism expects a future Messiah who will bring world peace, rebuild the temple, gather all Jewish people to Israel, and usher in a golden age. Most Jewish denominations do not believe the Messiah has come yet."
      },
      {
        heading: "Why Most Jewish People Reject Jesus as Messiah",
        body: "These are serious theological objections — not excuses. Understand them deeply before engaging.\n\n1. THE MESSIAH DID NOT BRING WORLD PEACE: Isaiah 2:4 describes a world where nations beat swords into plowshares. The world has not experienced this. Wars continued after Jesus. The temple was destroyed in 70 AD. Jewish people were scattered further — not gathered.\n\n2. THE MESSIAH DID NOT REBUILD THE TEMPLE: Ezekiel 37:26-28 describes a permanent temple. No temple was built during Jesus's lifetime.\n\n3. GOD CANNOT BECOME A MAN: Numbers 23:19 — 'God is not a man that he should lie nor a son of man that he should change his mind.' The incarnation — God becoming flesh — is considered theologically impossible and a violation of strict Jewish monotheism.\n\n4. ISAIAH 53 IS ABOUT ISRAEL — NOT JESUS: Jewish scholars argue the suffering servant in Isaiah 53 refers to Israel collectively suffering among the nations — not an individual Messiah.\n\n5. THE VIRGIN BIRTH MISTRANSLATION: Isaiah 7:14 uses the Hebrew word almah — meaning young woman — not necessarily virgin. The Hebrew word for virgin is betulah. Therefore the Matthew 1:23 application is considered a mistranslation.\n\n6. JESUS DID NOT FULFILL THE MESSIANIC PROPHECIES: The unfulfilled prophecies above disqualify Jesus under Jewish messianic expectations."
      },
      {
        heading: "Isaiah 53 — The Key to Everything",
        body: "This is the most important passage in the entire Jewish-Christian conversation. Written approximately 700 years before Jesus. Read it slowly:\n\n'He was despised and rejected by men, a man of sorrows and acquainted with grief. Surely he has borne our griefs and carried our sorrows. He was pierced for our transgressions. He was crushed for our iniquities. Upon him was the chastisement that brought us peace and with his wounds we are healed. All we like sheep have gone astray and the Lord has laid on him the iniquity of us all. He was oppressed and afflicted yet he opened not his mouth. Like a lamb that is led to the slaughter. By oppression and judgment he was taken away. He was cut off out of the land of the living, stricken for the transgression of my people.'\n\nEvery major detail matches the life and death of Jesus with stunning precision — rejected, silent before accusers, pierced, bearing the sins of others, dying for 'my people.'\n\nThe Jewish response: Isaiah 53 refers to Israel collectively as the suffering servant — not an individual.\n\nThe Christian response: The text uses singular pronouns throughout — he, him, his. It describes the servant dying FOR 'my people' — meaning dying on behalf of Israel, not as Israel. A nation cannot atone for itself. An innocent substitute bearing the guilt of the guilty is the entire logic of the Levitical sacrificial system Israel practiced for centuries. The servant is an individual dying in the place of the nation.\n\nAsk: 'In Isaiah 53 the servant bears the iniquity of 'my people.' If the servant IS Israel — who is the 'my people' Israel is dying for? The text requires a distinction between the servant and the people on whose behalf he suffers.'"
      },
      {
        heading: "Your Counter-Response",
        body: "ON THE UNFULFILLED PROPHECIES: The New Testament presents a two-stage messianic fulfillment. First coming — suffering servant, atonement for sin (Isaiah 53, Psalm 22). Second coming — ruling king, world peace, restored temple, gathered Israel (Isaiah 2, Ezekiel 37, Zechariah 14). Jewish expectation combined both into one event. The New Testament separates them across two advents. The prophecies are not unfulfilled — they are not yet fully fulfilled.\n\nON GOD BECOMING MAN: Numbers 23:19 means God does not lie or change His mind the way fallen humans do — not that God cannot take on human nature. The incarnation is not God changing His divine nature. It is God adding human nature. Colossians 2:9 — in Christ the whole fullness of deity dwells bodily. Both natures fully present simultaneously.\n\nON THE ALMAH ARGUMENT: The Jewish scholars who translated the Hebrew Scriptures into Greek (the Septuagint) approximately 200 years BEFORE Jesus used the Greek word parthenos — which specifically means virgin. Jewish scholars before Jesus understood the word to indicate a virgin. Matthew quotes their own translation.\n\nON ISAIAH 53 BEING ABOUT ISRAEL: Ask — 'Who is the 'we' and 'my people' on whose behalf the servant suffers and dies? If the servant IS Israel then Israel is dying for Israel — which makes no sense. The passage requires an innocent individual dying in the place of the guilty nation. That is the entire logic of the sacrificial system God gave Israel.'"
      },
      {
        heading: "Messianic Prophecies Fulfilled by Jesus",
        body: "These were written centuries before Jesus and are documented in the Hebrew Scriptures:\n\nMicah 5:2 — Born in Bethlehem. Zechariah 9:9 — Entering Jerusalem on a donkey. Psalm 41:9 — Betrayed by a close friend. Zechariah 11:12-13 — Betrayed for 30 pieces of silver. Psalm 22:16 — Hands and feet pierced. Psalm 22:18 — Garments divided by casting lots. Isaiah 53:9 — Buried with the rich. Psalm 16:10 — Not abandoned to the grave (resurrection). Isaiah 53:3-12 — The full suffering servant passage.\n\nThe statistical probability of one person fulfilling all messianic prophecies by chance has been calculated at 1 in 10 to the 157th power. For context there are approximately 10 to the 80th power atoms in the observable universe."
      },
      {
        heading: "The Street Approach",
        body: "In Brooklyn and New York you will encounter two very different Jewish communities:\n\nORTHODOX AND HASIDIC COMMUNITIES — Crown Heights, Borough Park, Williamsburg. These are deeply insular communities. Unsolicited theological conversation is rarely welcomed. Build relationship first. Respect boundaries. Let curiosity develop organically over time. These conversations take years not minutes.\n\nSECULAR JEWISH PEOPLE — Culturally Jewish, not necessarily practicing. More open to conversation. The most effective approach:\n\nStep 1 — Establish common ground: 'We worship the same God — the God of Abraham, Isaac, and Jacob. We read the same Scriptures. The difference between us comes down to one question.'\n\nStep 2 — Ask the one question: 'Have you ever read Isaiah 53? I would love to hear your interpretation of it.' Hand them a Bible open to that passage. Let them read it. Let the text do the work.\n\nStep 3 — Listen more than you speak. Ask questions. Understand their perspective before you share yours.\n\nStep 4 — Never pressure. Plant seeds. The Jewish people as a whole will not embrace their Messiah until He returns — Romans 11:25-26. Your role is to be a faithful witness, not to produce conversion on your timeline."
      },
      {
        heading: "Key Verses to Know",
        body: "Isaiah 53 — The suffering servant passage. The most powerful single chapter in Jewish apologetics. Memorize it.\n\nMicah 5:2 — Messiah born in Bethlehem. Zechariah 9:9 — Messiah enters Jerusalem on a donkey. Psalm 22 — Written 1,000 years before crucifixion was invented — describes crucifixion in detail. Daniel 9:24-26 — The 70 weeks prophecy — gives a timeline for the Messiah's coming that points precisely to the first century.\n\nRomans 11:17-18 — We are grafted branches. Do not be arrogant toward the natural branches. Romans 1:16 — Gospel to the Jew first. Genesis 12:3 — God promised to bless all nations through Abraham's seed."
      },
      {
        heading: "Recommended Resources",
        body: "The Case for the Real Jesus by Lee Strobel — includes a chapter on Jewish objections to Jesus. Answering Jewish Objections to Jesus by Michael Brown — the most comprehensive scholarly treatment of this subject in four volumes. Brown is a Jewish believer who engages these questions at the highest academic level.\n\nAlso powerful: the testimonies of Jewish believers in Jesus — Messianic Jews who came to faith through the Hebrew Scriptures. Their stories are some of the most compelling apologetics content available."
      },
      {
        heading: "What Is the Septuagint?",
        body: "The Septuagint is the Greek translation of the Hebrew Old Testament — abbreviated LXX from the Roman numeral for 70 because approximately 70 Jewish scholars produced it. It was completed around 250-280 BC in Alexandria Egypt where a large Jewish population had lost fluency in Hebrew under Greek rule and needed Scripture in the dominant language of the ancient world.\n\nWhy it matters for apologetics — the Septuagint is one of the most powerful pieces of evidence available and most believers have never heard of it.\n\nIt predates Jesus by 200-300 years. Every Messianic prophecy it contains was written down and translated before Jesus was born. Nobody can accuse Christians of writing the prophecies after the fact to fit Jesus. The LXX locks the prophecies in writing centuries before His arrival.\n\nJesus and the Apostles quoted from it. Most New Testament quotes of the Old Testament come from the Septuagint not directly from the Hebrew. This was the Bible of the Greek-speaking Jewish and early Christian world.\n\nIt validates the Isaiah 7:14 virgin argument. When Matthew quotes Isaiah 7:14 — a virgin shall conceive — he uses the Greek word parthenos which means virgin specifically. The Hebrew word almah can mean young woman or virgin. But the Jewish translators 250 years before Jesus chose the more specific Greek word for virgin. This was not a Christian translation decision — it was a Jewish translation decision made two centuries before Christ was born.\n\nIt validates the Psalm 22 piercing argument. The Septuagint renders the Hebrew of Psalm 22:16 as pierced — 200 years before Jesus and before crucifixion was even a common Roman practice. The Jewish translators saw piercing in the Hebrew text long before the Romans crucified anyone.\n\nThe Dead Sea Scrolls confirmed it. When the Dead Sea Scrolls were discovered in 1947 scholars compared Hebrew manuscripts with the Septuagint translation made 200 years later. The agreement was remarkable — proving faithful transmission across centuries.\n\nKey question to ask: The Septuagint was translated by Jewish scholars 250 years before Jesus was born. It contains Isaiah 53, Psalm 22, and Daniel 9 exactly as we have them. Are you saying Jewish scholars 250 years before Jesus inserted prophecies about Jesus into their own Scriptures? Because that is what the corruption argument requires."
      },
      {
        heading: "📖 Know Their Scripture — Bible vs Rabbinic Interpretation",
        body: "Jewish objections to Jesus as Messiah are rooted in rabbinic reinterpretations that developed after the first century — often directly in response to Christian claims. The plain reading of the Hebrew text consistently points to Jesus.\n\nIsaiah 53 — Rabbinic interpretation claims the suffering servant is the nation of Israel. Problems: Israel cannot be called sinless (verse 9 — he had done no violence, no deceit in his mouth). Israel cannot bear the sins of others (verses 4-6 — he bore our griefs and carried our sorrows). The servant is an individual — the text uses singular pronouns throughout. The Babylonian Talmud (Sanhedrin 98b) identifies the Messiah as one who bears diseases — the same language as Isaiah 53:4.\n\nPsalm 22 — Written by David 1,000 years before crucifixion was invented. Verse 16 — they have pierced my hands and my feet. The Septuagint (Greek translation of the Hebrew OT made 200 years before Jesus) renders the Hebrew word as pierced. This Psalm describes in precise detail what happens at a crucifixion.\n\nDaniel 9:24-26 — The 70 weeks prophecy says the Messiah will come and be cut off after 483 years from the decree to rebuild Jerusalem. The decree came from Artaxerxes in 444 BC. Adding 483 years lands at approximately 33 AD — the time of Jesus. Daniel then says after the Messiah is cut off the city and sanctuary will be destroyed. Jerusalem and the temple were destroyed in 70 AD. The Messiah had to come before 70 AD. Jewish tradition has no other candidate.\n\nKey question to ask: Daniel 9 says the Messiah must come and be cut off before the temple is destroyed in 70 AD. If Jesus is not the Messiah — who was? Every candidate must be identified by name and must have appeared before 70 AD."
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
              🔜 Nation of Islam, Scientology, and Afrocentric Spirituality coming in a future update.
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
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "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",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
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
                <span>⚠ Connection error. Tap Retry to try again.</span>
                <button onClick={() => {
                  const saved = lastInput;
                  setMsgs(p => p.filter(msg => msg.role !== "error"));
                  setHasError(false);
                  setTimeout(() => send(saved), 50);
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
          <button onClick={() => {
            const saved = lastInput;
            setMsgs(p => p.filter(m => m.role !== "error"));
            setHasError(false);
            setTimeout(() => send(saved), 50);
          }} style={{ background: "#2a1010", border: "1px solid #da6a4a", borderRadius: 8, color: "#da6a4a", cursor: "pointer", padding: "11px 16px", fontFamily: "inherit", fontSize: 13 }}>↺ Retry</button>
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
