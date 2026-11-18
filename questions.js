window.quizQuestions = [
  {
    topic: "Mobile history",
    type: "single",
    prompt:
      "AT&T's first public mobile telephone service arrived in 1946. Which limitation did the assessment highlight?",
    options: [
      "Mobile transmitters had insufficient power.",
      "It lacked cellular coverage in urban areas.",
      "Receiver antennas were unavailable.",
      "It used the same frequency to transmit and receive.",
    ],
    answer: [0],
    explanation:
      "The assessment identifies insufficient transmitter power in mobile devices as a major limitation of the early service.",
    tip: "Keep the historical limitation distinct from duplexing: the keyed issue here is transmitter power.",
  },
  {
    topic: "Wireless basics",
    type: "single",
    prompt:
      "Which best describes the kinds of information wireless links can carry?",
    options: [
      "Only digital files",
      "Only video and images",
      "Voice, data, e-mail, video, and many other services",
      "Only human voice",
    ],
    answer: [2],
    explanation:
      "Wireless is the transmission medium, not a limit on the content. It can carry voice, digital data, messages, video, and more.",
    tip: "The air interface transports information; the application decides what that information means.",
  },
  {
    topic: "Duplexing",
    type: "single",
    prompt: "A half-duplex radio link lets its users…",
    options: [
      "take turns transmitting and receiving.",
      "transmit and receive simultaneously on separate frequencies.",
      "receive only, with no return path.",
      "send data only after every packet is acknowledged.",
    ],
    answer: [0],
    explanation:
      "Half-duplex supports communication in both directions, but not at the same time. Each side takes a turn.",
    tip: "Walkie-talkies are the classic half-duplex example: over to you, then over to me.",
  },
  {
    topic: "Duplexing",
    type: "single",
    prompt:
      "What is a practical engineering consideration when using TDD (Time Division Duplex)?",
    options: [
      "It requires separate frequency bands for uplink and downlink.",
      "Transmit and receive timing must be synchronized accurately.",
      "It needs no timing coordination at all.",
      "It is only suitable for long-range outdoor links.",
    ],
    answer: [1],
    explanation:
      "TDD shares a frequency band by assigning uplink and downlink different time slots. Those time slots need accurate timing and coordination.",
    tip: "TDD separates directions in time; FDD separates them in frequency.",
  },
  {
    topic: "5G",
    type: "single",
    prompt:
      "Which 5G service goal is eMBB (enhanced Mobile Broadband) designed to deliver?",
    options: [
      "Ultra-reliable, mission-critical control",
      "Very high data rates for rich broadband use",
      "Only low-power sensor connectivity",
      "A huge number of low-rate IoT devices",
    ],
    answer: [1],
    explanation:
      "eMBB focuses on high throughput and a richer broadband experience. Massive IoT connectivity is mMTC, while time-critical reliability is associated with URLLC.",
    tip: "The first B in eMBB is your clue: think broadband and bandwidth.",
  },
  {
    topic: "Standards",
    type: "single",
    prompt: "What does 3GPP mainly do for cellular communications?",
    options: [
      "Operate mobile networks for subscribers",
      "Develop and maintain technical specifications for cellular systems",
      "Allocate all radio spectrum worldwide",
      "Sell cellular handsets to manufacturers",
    ],
    answer: [1],
    explanation:
      "3GPP is a collaboration that develops and maintains detailed technical specifications for mobile systems such as GSM, LTE, and 5G NR.",
    tip: "3GPP writes the technical playbook; operators and vendors build services and equipment around it.",
  },
  {
    topic: "Wireless benefits",
    type: "single",
    prompt:
      "Why can wireless connectivity be especially useful when an office layout changes?",
    options: [
      "Devices can be moved without rerouting a cable to every desk.",
      "It makes every network connection more reliable than fiber.",
      "It keeps every worker at a fixed location.",
      "It eliminates the need for network planning.",
    ],
    answer: [0],
    explanation:
      "Wireless access can make moves and layout changes easier because endpoint connections do not each need a physical cable run.",
    tip: "Flexibility is a core wireless advantage; it does not mean planning is unnecessary.",
  },
  {
    topic: "Generations",
    type: "single",
    prompt:
      "Which technology best characterizes first-generation (1G) mobile systems?",
    options: [
      "Analog mobile voice",
      "Digital voice and packet data",
      "High-speed mobile internet",
      "Compact smartphones with long battery life",
    ],
    answer: [0],
    explanation:
      "1G systems used analog radio technology primarily for voice calls. Digital cellular came with 2G.",
    tip: "A quick generation map: 1G analog voice, 2G digital voice, then increasingly capable data.",
  },
  {
    topic: "Wireless basics",
    type: "single",
    prompt: "In a simplex communication system, information flows…",
    options: [
      "in one direction only.",
      "in both directions at once.",
      "in both directions, but only one at a time.",
      "only after a collision is detected.",
    ],
    answer: [0],
    explanation:
      "Simplex communication has a single direction of transmission. A traditional broadcast radio is a familiar example.",
    tip: "Simplex = one-way; half-duplex = taking turns; full-duplex = simultaneous two-way.",
  },
  {
    topic: "Generations",
    type: "single",
    prompt: "Which is a hallmark of third-generation (3G) mobile technology?",
    options: [
      "Analog voice only",
      "High-rate data, improved security, and internet-oriented services",
      "Lower-cost voice with no data service",
      "Only one-way paging",
    ],
    answer: [1],
    explanation:
      "3G brought substantially improved data capability and supported a broader range of internet and multimedia services, alongside stronger security features.",
    tip: "3G was the big shift from mobile voice toward practical mobile internet.",
  },
  {
    topic: "Generations",
    type: "multi",
    prompt:
      "Why did cellular systems move from analog toward digital technology? Select every valid reason.",
    options: [
      "Digital systems could interoperate more naturally with other digital networks.",
      "Analog systems were always cheaper to operate.",
      "Digital signals can be processed to improve robustness against noise and distortion.",
      "Growing demand called for more system capacity.",
    ],
    answer: [0, 2, 3],
    explanation:
      "Digital cellular offered improved processing and service quality, compatibility with digital networks, and a path to greater capacity. Analog's lower cost was not the general driver.",
    tip: "Look for interoperability, signal processing, and capacity pressure.",
  },
  {
    topic: "Paging",
    type: "multi",
    prompt:
      "Which statements correctly describe traditional paging and messaging systems? Select every valid answer.",
    options: [
      "Every received page is always acknowledged by the recipient.",
      "They support simultaneous two-way conversations.",
      "Traditional paging is a simplex service.",
      "Fixed transmitters can send short text or alphanumeric messages.",
    ],
    answer: [2, 3],
    explanation:
      "Classic paging is one-way: fixed transmitters broadcast short messages to pagers. A pager generally does not send an acknowledgment back over the same service.",
    tip: "A pager receives the page; it does not normally join a two-way conversation.",
  },
  {
    topic: "Wireless basics",
    type: "multi",
    prompt:
      "Which statements about mobile and wireless communication are true? Select every valid answer.",
    options: [
      "A wireless system does not have to be mobile.",
      "Wireless links can be simplex, half-duplex, or full-duplex.",
      "Mobile communication relies on wireless links.",
      "Every mobile communication system is simplex.",
    ],
    answer: [0, 1, 2],
    explanation:
      "Wireless describes the link; mobile describes the ability to communicate while moving. A wireless office LAN may be stationary, while mobile systems use wireless links and can have different duplex modes.",
    tip: "Wireless and mobile overlap, but they are not synonyms.",
  },
  {
    topic: "Capacity math",
    type: "single",
    prompt:
      "A system has 50 MHz of spectrum, 25 kHz channels, 100 cells, and a reuse cluster of 4. Assuming one user per voice channel, what is the system capacity?",
    options: ["50,000 users", "100,000 users", "25,000 users", "None of these"],
    answer: [0],
    explanation:
      "There are 50,000/25 = 2,000 channels total. With a cluster size of 4, each cell gets 2,000/4 = 500 channels; across 100 cells that is 50,000 simultaneous users.",
    tip: "Convert MHz to kHz first. Then divide by cluster size and multiply by the number of cells.",
  },
  {
    topic: "Interference",
    type: "multi",
    prompt:
      "Which can be consequences of interference in a cellular system? Select every valid answer.",
    options: [
      "Greater system capacity",
      "Clearer voice channels",
      "A lower noise floor",
      "Cross-talk or degraded voice quality",
      "Missed or blocked calls on control channels",
    ],
    answer: [3, 4],
    explanation:
      "Interference corrupts wanted signals. It can degrade voice channels and make signaling unreliable, contributing to missed or blocked calls.",
    tip: "Interference is unwanted energy: expect quality and reliability to get worse, not better.",
  },
  {
    topic: "Interference",
    type: "multi",
    prompt:
      "Which are plausible sources of radio interference to a cellular receiver? Select every valid answer.",
    options: [
      "Another mobile transmitting on the same channel in the same cell",
      "An unrelated system safely operating in a distant, non-overlapping band",
      "A co-channel call in a neighboring cell",
      "The serving base station's intended signal",
      "Buildings that merely block or reflect the signal",
    ],
    answer: [0, 2],
    explanation:
      "A same-channel mobile and a co-channel transmission in a neighboring cell are interference sources. An unrelated signal in a non-overlapping band is not; buildings affect propagation rather than acting as radio transmitters.",
    tip: "Ask whether the candidate is an unwanted signal source, rather than a feature of the propagation path.",
  },
  {
    topic: "Interference math",
    type: "single",
    prompt:
      "At a cell edge, six first-tier co-channel cells contribute equally. If the reuse ratio is Q = 6 and the path-loss exponent is 4, what is C/I approximately?",
    options: ["22.5 dB", "19.2 dB", "None of these", "17 dB", "18 dB"],
    answer: [0],
    explanation:
      "For the six first-tier interferers in this assessment, the expected approximate C/I is 22.5 dB.",
    tip: "This is an approximate first-tier co-channel estimate; use the answer convention specified for this exercise.",
  },
  {
    topic: "Antennas",
    type: "multi",
    prompt:
      "Which are the basic antenna types listed in this assessment? Select every valid answer.",
    options: [
      "Parabolic",
      "Omnidirectional",
      "Isotropic (ideal reference)",
      "Directional",
      "Helical",
    ],
    answer: [1, 2, 3],
    explanation:
      "The basic categories here are omnidirectional, isotropic, and directional. Parabolic and helical describe particular antenna constructions, rather than the three basic types in this question.",
    tip: "The isotropic antenna is the theoretical one; the others can be built.",
  },
  {
    topic: "Channels",
    type: "multi",
    prompt:
      "In a typical cellular control-channel setup, which statements are correct? Select every valid answer.",
    options: [
      "Paging channels alert a mobile about an incoming call.",
      "Paging channels are for originating a call from the mobile.",
      "A mobile can receive access-channel information through the forward control/paging channel.",
      "Access channels are used by mobiles to originate requests.",
      "Access channels are used for incoming-call paging.",
      "A mobile-originated setup request uses the access path.",
    ],
    answer: [0, 2, 3],
    explanation:
      "Paging is used for mobile-terminating calls, and the forward paging/control channel carries access information. Mobiles use access channels to originate requests; setup channels are not limited to outgoing calls.",
    tip: "Incoming call? The network pages the handset. Outgoing request? The handset uses an access channel.",
  },
  {
    topic: "Channel assignment",
    type: "multi",
    prompt:
      "Which factors can inform how many channels to assign in a cellular network? Select every valid answer.",
    options: [
      "The total number of available channels",
      "The target call-blocking probability",
      "The call-arrival rate",
      "The target call-dropping rate",
      "The area and coverage to be served",
    ],
    answer: [0, 1, 2, 4],
    explanation:
      "The assessment considers total available channels, desired blocking probability, call-arrival rate, and the area to cover. Call-dropping rate is not one of the listed channel-assignment parameters.",
    tip: "Capacity planning combines supply (spectrum), demand (traffic), service goals, and geography.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "A cell is split into cells of half the original radius. With path-loss exponent n = 4, how should the new site's transmit power compare to the original to keep the same received power at the cell edge?",
    options: [
      "3 dB less",
      "12 dB more",
      "6 dB more",
      "6 dB less",
      "12 dB less",
      "3 dB more",
    ],
    answer: [4],
    explanation:
      "Received power scales approximately as P·R⁻ⁿ. Halving the radius requires (1/2)⁴ = 1/16 of the transmit power, which is about 12 dB less.",
    tip: "Power ratio = (new radius / old radius)ⁿ. Convert 1/16 to decibels with 10 log₁₀.",
  },
  {
    topic: "Handoffs",
    type: "multi",
    prompt:
      "Which statements describe a cellular handoff? Select every valid answer.",
    options: [
      "An ongoing call is transferred to another channel or cell.",
      "The transfer helps a call continue as the subscriber moves between cells.",
      "It is the process of starting a brand-new call.",
      "It can be triggered as a mobile moves toward an adjacent cell.",
      "The network monitors signal or other measurements to decide when a transfer is needed.",
    ],
    answer: [0, 1, 3, 4],
    explanation:
      "A handoff transfers an active connection as conditions change, often because a user moves between cells. Measurements help the network determine when and where to transfer it.",
    tip: "Handoff preserves an existing call; call setup starts a new one.",
  },
  {
    topic: "Handoffs",
    type: "multi",
    prompt:
      "Which are established handoff-control approaches? Select every valid answer.",
    options: [
      "Mobile-controlled handoff (MCHO)",
      "Network-controlled handoff (NCHO)",
      "Soft handoff (SHO)",
      "Landline handoff",
      "Wi-Fi handoff",
      "Mobile-assisted handoff (MAHO)",
    ],
    answer: [0, 1, 2, 5],
    explanation:
      "MCHO, NCHO, MAHO, and soft handoff are recognized approaches or handoff types. Landline handoff and Wi-Fi handoff are not the named cellular control algorithms in this list.",
    tip: "MCHO, NCHO, and MAHO describe who measures or controls; soft handoff describes how connections overlap.",
  },
  {
    topic: "GSM capacity",
    type: "single",
    prompt:
      "A GSM forward band is 25 MHz, with 200 kHz radio channels and a 100 kHz guard band. With 8 time slots per radio channel, how many simultaneous subscribers fit?",
    options: ["1,000", "1,008", "1,018", "1,016", "992"],
    answer: [4],
    explanation:
      "After the 100 kHz guard band, 24.9 MHz remains. That fits 124 complete 200 kHz carriers; at 8 time slots each, 124 × 8 = 992 simultaneous traffic channels.",
    tip: "Count complete radio carriers first, then multiply by the number of time slots per carrier.",
  },
  {
    topic: "Multiple access",
    type: "multi",
    prompt:
      "Which are typically classified as contention-free channelization or access schemes? Select every valid answer.",
    options: [
      "OFDMA",
      "CDMA",
      "ALOHA",
      "FDMA",
      "Slotted ALOHA",
      "CSMA",
      "SDMA",
    ],
    answer: [0, 1, 3, 6],
    explanation:
      "OFDMA, CDMA, FDMA, and SDMA separate users by orthogonal resources, codes, frequencies, or spatial patterns. ALOHA, slotted ALOHA, and CSMA contend for shared access.",
    tip: "If users are assigned a distinct resource, it is generally contention-free; random access means they contend.",
  },
  {
    topic: "Multiple access",
    type: "multi",
    prompt:
      "Which are real varieties of CSMA (Carrier Sense Multiple Access)? Select every valid answer.",
    options: [
      "CSMA with Collision Avoidance (CSMA/CA)",
      "CSMA with Frequency Modulation (CSMA/FM)",
      "Nonpersistent CSMA",
      "CSMA with Collision Detection (CSMA/CD)",
      "Persistent CSMA",
    ],
    answer: [0, 2, 3, 4],
    explanation:
      "Common CSMA variants include persistent and nonpersistent strategies, plus CSMA/CD and CSMA/CA. Frequency modulation is not a CSMA access variant.",
    tip: "The suffixes describe what a station does about channel access or collisions—not how it modulates a carrier.",
  },
  {
    topic: "Handoffs",
    type: "multi",
    prompt:
      "Put the key handoff events in the right sequence by selecting all events that belong in the procedure.",
    options: [
      "The network switches the active call to a channel at a new cell site.",
      "The mobile moves toward the edge of its serving cell and its signal weakens.",
      "The serving cell requests or coordinates a handoff through the controller.",
      "The call must be disconnected immediately whenever a handoff begins.",
    ],
    answer: [0, 1, 2],
    explanation:
      "As the serving signal weakens near a cell edge, the system coordinates a new channel and transfers the call. A successful handoff aims to avoid disconnecting it.",
    tip: "Signal change → coordination → switch. A dropped call is the failure case, not a required step.",
  },
  {
    topic: "Call quality",
    type: "multi",
    prompt: "Which situations count as a dropped call? Select all that apply.",
    options: [
      "A call that could not start because the network was congested",
      "An established call that ends unexpectedly before the user properly terminates it",
      "An established call that ends unexpectedly after losing signal",
      "A call attempt blocked because no voice channel was available",
    ],
    answer: [1, 2],
    explanation:
      "A dropped call was established and then ended unexpectedly; loss of signal is one common reason. A blocked call never gets connected in the first place.",
    tip: "First ask: did the call connect? If yes, but then ended unexpectedly, it was dropped.",
  },
  {
    topic: "Reuse and capacity",
    type: "single",
    prompt:
      "In a cellular reuse plan, what usually happens as cluster size K increases?",
    options: [
      "C/I rises and spectrum efficiency rises.",
      "C/I rises, but spectrum efficiency falls.",
      "C/I falls while spectrum efficiency rises.",
      "Both C/I and spectrum efficiency fall.",
    ],
    answer: [1],
    explanation:
      "A larger reuse cluster spaces co-channel cells farther apart, improving C/I. But each cell receives a smaller share of the available channels, reducing spectrum efficiency.",
    tip: "More separation helps interference; more reuse distance usually costs capacity per area.",
  },
  {
    topic: "Cell sectoring",
    type: "single",
    prompt:
      "Compared with an omnidirectional cell, directional sector antennas generally make co-channel interference…",
    options: ["increase.", "decrease.", "stay exactly the same."],
    answer: [1],
    explanation:
      "Sector antennas focus energy into narrower directions, reducing the number of co-channel interferers seen by a sector.",
    tip: "Sectoring narrows the antenna pattern, so fewer unwanted cells fall into the receive direction.",
  },
  {
    topic: "Antennas",
    type: "single",
    prompt: "Which statement about a directional antenna is correct?",
    options: [
      "It radiates equally in every direction.",
      "It concentrates more of its radiated power toward selected directions.",
      "It can only receive and cannot transmit.",
      "It has no radiation pattern.",
    ],
    answer: [1],
    explanation:
      "A directional antenna has greater gain in selected directions rather than radiating equally in every direction.",
    tip: "Omnidirectional spreads around; directional focuses.",
  },
  {
    topic: "Antennas",
    type: "multi",
    prompt:
      "For ordinary passive antennas, which properties are generally true? Select every valid answer.",
    options: [
      "They are active devices that generate extra power.",
      "They are reciprocal.",
      "They are passive devices.",
    ],
    answer: [1, 2],
    explanation:
      "A conventional antenna is passive and reciprocal: its transmit and receive patterns are closely related. Active amplification is performed by associated electronics, not the antenna element itself.",
    tip: "Reciprocity links transmit and receive behavior; passive means the antenna does not create energy.",
  },
  {
    topic: "Antennas",
    type: "single",
    prompt:
      "One antenna is shared by a radio's transmitter and receiver. What component safely separates the transmit and receive paths?",
    options: ["Amplifier", "Multiplexer", "Duplexer", "Repeater"],
    answer: [2],
    explanation:
      "A duplexer allows a transmitter and receiver to share an antenna while isolating their paths, often using separate frequency bands.",
    tip: "A duplexer is specifically associated with sharing an antenna between transmit and receive.",
  },
  {
    topic: "Cell sectoring",
    type: "single",
    prompt: "Which bundle of effects best describes cell sectoring?",
    options: [
      "It can improve signal quality, increase handoffs, and reduce trunking efficiency.",
      "It enlarges cells and eliminates handoffs.",
      "It improves trunking efficiency without changing signal quality.",
      "It only changes the color of the coverage map.",
    ],
    answer: [0],
    explanation:
      "Sectoring reduces interference and can improve signal quality. It also creates more sector boundaries and partitions resources, which can increase handoffs and trunking inefficiency.",
    tip: "Sectoring is a tradeoff: cleaner directional coverage, but more boundaries and resource partitions.",
  },
  {
    topic: "Cell sectoring",
    type: "multi",
    prompt:
      "Which are advantages associated with cell sectoring? Select every valid answer.",
    options: [
      "Improved trunking efficiency",
      "A larger coverage area by itself",
      "Potentially lower required transmit power",
      "Improved spectrum efficiency through reduced interference",
    ],
    answer: [2, 3],
    explanation:
      "By reducing interference, sectoring can enable lower power and more efficient frequency reuse. It does not inherently expand the geographic footprint, and dividing channels among sectors can reduce trunking efficiency.",
    tip: "The main gain is interference reduction—not a larger cell or a bigger channel pool.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "Temporarily taking an unused channel from a neighboring cell is called…",
    options: ["cell splitting.", "cell sectoring.", "channel borrowing."],
    answer: [2],
    explanation:
      "Channel borrowing temporarily assigns an idle channel from a neighboring cell to a cell experiencing higher demand.",
    tip: "The name says it: borrow a channel, rather than permanently redesign the cell.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "In an FDMA cellular system such as AMPS, how can a voice channel be treated?",
    options: [
      "It can be used as a setup channel when needed.",
      "It can only ever carry voice traffic.",
      "It can only carry signaling data.",
    ],
    answer: [0],
    explanation:
      "In a flexible assignment, a voice channel can be temporarily repurposed for setup or signaling when needed.",
    tip: "Dynamic channel use lets a system adapt resources to current demand.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "As cells get smaller in an FDMA system, what happens to the theoretical need for setup channels?",
    options: ["It decreases.", "It is not affected.", "It increases."],
    answer: [2],
    explanation:
      "Smaller cells mean more cell boundaries and more frequent handoffs. That increases signaling and setup activity.",
    tip: "More, smaller cells mean mobiles cross cell boundaries more often.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "In an overlapped-cells channel assignment scheme, when are the smaller cells activated?",
    options: [
      "Based on the number of channels available",
      "Based on the interference level",
      "Based on total power consumption",
      "Based on the traffic demand",
    ],
    answer: [3],
    explanation:
      "Overlapped-cell schemes activate smaller cells in response to traffic demand, adding capacity where and when it is needed.",
    tip: "Think demand-driven coverage: bring the smaller cell online when traffic grows.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt: "Channel borrowing is most useful as a way to handle…",
    options: [
      "short-term demand in a fast-growing system.",
      "long-term growth in a slow-growing system.",
      "short-term demand in a slow-growing system.",
      "long-term growth in a fast-growing system.",
    ],
    answer: [2],
    explanation:
      "Channel borrowing is a short-term way to accommodate localized demand without permanently changing the channel plan; the assessment associates it with slow-growing systems.",
    tip: "Borrowing is temporary relief. Lasting growth usually calls for a longer-term redesign.",
  },
  {
    topic: "Handoffs",
    type: "single",
    prompt:
      "A mobile reaches a signal-strength hole that no neighboring cell covers. What is the handoff situation?",
    options: [
      "A handoff is needed, but no suitable target cell is available.",
      "The call hands off automatically to the empty area.",
      "A handoff is unnecessary.",
      "The mobile can choose any distant cell with no coordination.",
    ],
    answer: [0],
    explanation:
      "A handoff needs a viable target cell. If no adjacent cell covers the gap, the system cannot transfer the call to a suitable destination.",
    tip: "A handoff can move a call only into another usable coverage area.",
  },
  {
    topic: "Interference",
    type: "single",
    prompt:
      "What is generally the major performance-limiting factor in cellular radio systems?",
    options: [
      "The geographic area alone",
      "Battery power consumption",
      "Noise",
      "Interference",
    ],
    answer: [3],
    explanation:
      "Because frequencies are reused to increase capacity, co-channel and other interference are major practical limits on cellular performance.",
    tip: "Frequency reuse adds capacity, but makes interference management essential.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "When a coverage area is subdivided by cell splitting, what happens to the number of clusters and overall capacity?",
    options: [
      "Both increase.",
      "Clusters increase but capacity decreases.",
      "Clusters decrease while capacity stays the same.",
      "Clusters decrease while capacity increases.",
    ],
    answer: [0],
    explanation:
      "Splitting adds smaller cells, allowing the same reuse pattern to be repeated more often across the area and increasing total system capacity.",
    tip: "More smaller cells means more opportunities to reuse the channel set.",
  },
  {
    topic: "Cell planning",
    type: "single",
    prompt: "Good cellular system design balances which two goals?",
    options: [
      "Extending coverage and increasing interference",
      "Extending coverage and reducing interference",
      "Reducing both coverage and interference",
      "Reducing coverage while increasing interference",
    ],
    answer: [1],
    explanation:
      "A network must provide broad, reliable coverage while controlling interference between reused channels. Planning balances both goals.",
    tip: "Coverage and interference are linked design constraints, not independent wishes.",
  },
  {
    topic: "Capacity",
    type: "single",
    prompt:
      "Which set of techniques can help increase cellular network capacity?",
    options: [
      "Use more spectrum when available",
      "Use smart antennas",
      "Use suitable multiple-access techniques",
      "All of these",
    ],
    answer: [3],
    explanation:
      "Additional spectrum, spatial processing with smart antennas, and efficient multiple access can each help improve capacity.",
    tip: "Capacity can improve through more spectrum, better spatial reuse, or more efficient sharing.",
  },
  {
    topic: "Cell planning",
    type: "single",
    prompt: "Which cell-size pairing is typical in a cellular network?",
    options: [
      "Macrocells cover large areas; picocells serve smaller areas.",
      "Femtocells are for highways; megacells are for indoor rooms.",
      "Both cell types always cover the same area.",
      "Macrocells are smaller than picocells.",
    ],
    answer: [0],
    explanation:
      "Macrocells typically provide broad-area coverage, while picocells cover smaller localized spaces such as parts of buildings or busy venues.",
    tip: "The prefix helps: macro means large; pico means small.",
  },
  {
    topic: "Handoffs",
    type: "single",
    prompt:
      "The mobile measures received signal strength and periodically reports the measurements; the network makes the handover decision. Which approach is this?",
    options: ["MCHO", "None of these", "NCHO", "MAHO"],
    answer: [3],
    explanation:
      "In Mobile-Assisted Handoff (MAHO), the mobile measures neighboring signals and reports them; the network uses those reports to decide when to hand over.",
    tip: "Assisted means the mobile helps with measurements; control remains with the network.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "In the idealized case, splitting a cell once into four smaller cells changes that region's capacity by what factor?",
    options: ["Four times", "Two times", "Five times", "Three times"],
    answer: [0],
    explanation:
      "If one original cell is replaced by four cells, the available channel set can be reused in each smaller cell, giving roughly four times the local capacity under the idealized model.",
    tip: "Count the new cells: four cells can reuse the original allocation four times.",
  },
  {
    topic: "Duplexing",
    type: "single",
    prompt: "What does TDD distinguish in a wireless link?",
    options: [
      "A subscriber's uplink and downlink by assigning them different times",
      "Different subscribers in the same cell by their uplink data",
      "A subscriber's uplink and downlink using different frequencies",
      "Different subscribers in the downlink only",
    ],
    answer: [0],
    explanation:
      "Time Division Duplex separates the uplink and downlink in time. Using different frequency bands for each direction is FDD.",
    tip: "TDD: time. FDD: frequency.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt:
      "A station listens for the channel and immediately aborts after detecting a collision while transmitting. Which protocol is it?",
    options: ["ALOHA", "CSMA/CA", "CSMA/CD", "PRMA"],
    answer: [2],
    explanation:
      "CSMA/CD detects a collision during transmission and stops transmitting. It is associated with classic shared-medium Ethernet.",
    tip: "CD stands for Collision Detection; CA tries to avoid collisions before they happen.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt: "Packet Radio Multiple Access (PRMA) can use which kind of access?",
    options: [
      "Both contention-based and contention-free",
      "Contention-based",
      "Contention-free",
    ],
    answer: [1],
    explanation:
      "In PRMA, users contend for access to an available slot. Once a slot is reserved, later packet transmissions can use that allocation.",
    tip: "The initial slot request is the key: users contend to gain access.",
  },
  {
    topic: "Duplexing",
    type: "single",
    prompt: "What does FDD distinguish?",
    options: [
      "Different subscribers in the same cell's downlink",
      "The uplink and downlink of the same subscriber using separate frequency bands",
      "Different subscribers in the same cell's uplink",
      "None of these",
    ],
    answer: [1],
    explanation:
      "Frequency Division Duplex uses separate frequency bands for uplink and downlink, allowing both directions to operate at the same time.",
    tip: "The paired frequencies are the signature of FDD.",
  },
  {
    topic: "Random access",
    type: "single",
    prompt: "Which comparison between pure ALOHA and slotted ALOHA is correct?",
    options: [
      "Pure ALOHA needs slot synchronization; slotted ALOHA does not.",
      "Pure ALOHA can transmit at any time; slotted ALOHA starts only at slot boundaries.",
      "Both require collision-free reservations before transmitting.",
      "Slotted ALOHA has a longer vulnerable period than pure ALOHA.",
    ],
    answer: [1],
    explanation:
      "Pure ALOHA transmits whenever a frame is ready. Slotted ALOHA synchronizes transmissions to slot boundaries, reducing the vulnerable period and improving peak throughput.",
    tip: "Slots add timing discipline; the maximum ideal throughput rises from about 18% to about 37%.",
  },
  {
    topic: "Network architecture",
    type: "single",
    prompt:
      "In a basic cellular system, what do the links from cell sites to the mobile switching office carry?",
    options: [
      "The air interface between the mobile and the cell site",
      "Aggregated traffic and control links from cell sites toward the switching office",
      "Only the interface between two handsets",
      "Data between two public telephone networks",
    ],
    answer: [1],
    explanation:
      "Backhaul links connect cell sites to the switching center and carry aggregated traffic and signaling. The radio air interface is between the mobile and its serving site.",
    tip: "Air interface = handset to site. Backhaul = site to the core.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "Which trunking model assumes blocked call requests are cleared rather than queued?",
    options: ["Erlang C", "Erlang B", "Analog", "Wireless"],
    answer: [1],
    explanation:
      "Erlang B models a loss system with no waiting queue: if all channels are busy, a call attempt is blocked or cleared.",
    tip: "B for blocked calls; Erlang C includes a queue.",
  },
  {
    topic: "Network architecture",
    type: "boolean",
    prompt:
      "A cellular system is designed to connect mobile subscribers to one another and to landline subscribers.",
    options: ["True", "False"],
    answer: [0],
    explanation:
      "Cellular networks support calls between mobile users and interconnect with the public switched telephone network for landline calls.",
    tip: "The mobile network is connected to the wider telephone network.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "A subscriber makes an average of 4 calls per hour, each lasting 4.5 minutes. What traffic intensity does that generate?",
    options: ["0.066 Erlangs", "0.3 Erlangs", "0.166 Erlangs", "0.2 Erlangs"],
    answer: [1],
    explanation:
      "Offered traffic A = call rate × average holding time = 4 calls/hour × 4.5 minutes ÷ 60 minutes/hour = 0.3 Erlangs.",
    tip: "Convert holding time to hours before multiplying by calls per hour.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "A cell has 20 channels, a 100-second average call, and 2% blocking. Approximately how many call attempts per minute can it handle?",
    options: ["7.9", "10.5", "18.59", "13.15"],
    answer: [0],
    explanation:
      "At 20 channels and 2% Erlang B blocking, the offered load is about 13.2 Erlangs. Each Erlang supports 60/100 = 0.6 call starts per minute, so about 13.2 × 0.6 ≈ 7.9 attempts/minute.",
    tip: "First find offered Erlangs at the blocking target, then multiply by 60 divided by call duration in seconds.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "A cluster has 84 channels and reuse size K = 4. With three sectors per cell, 0.15 Erlangs per subscriber, and 0.5% blocking, about how many subscribers can one sector support?",
    options: ["35.97", "10.07", "None of these", "25.18", "14.38"],
    answer: [4],
    explanation:
      "There are 84/4 = 21 channels per cell, or 7 per sector. Seven channels at 0.5% blocking carry about 2.16 Erlangs; dividing by 0.15 Erlangs per subscriber gives about 14.4 subscribers per sector.",
    tip: "Divide cluster channels by K and then by three sectors; use Erlang B for the offered load per sector.",
  },
  //off other
];
