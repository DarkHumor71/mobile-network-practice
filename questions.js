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
    options: ["22.5 dB", "19.2 dB", "23.334 dB", "17 dB", "18 dB"],
    answer: [2],
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
  {
    topic: "Cellular architecture",
    type: "single",
    prompt:
      "What is the repeating geographic building block used to extend cellular service across a wide area?",
    options: [
      "A cell",
      "A frequency band",
      "A paging group",
      "A switching center",
    ],
    answer: [0],
    explanation:
      "A service area is divided into cells. The planned reuse pattern can then be repeated across the region.",
    tip: "The network is called cellular because its coverage is organized into cells.",
  },
  {
    topic: "Frequency reuse",
    type: "single",
    prompt:
      "What is the main trade-off engineers must manage when the same frequencies are reused in different cells?",
    options: [
      "Co-channel interference",
      "A lack of mobile antennas",
      "The need to convert voice into video",
      "The disappearance of handoffs",
    ],
    answer: [0],
    explanation:
      "Reusing frequencies makes better use of limited spectrum, but transmissions on the same channel can interfere with one another.",
    tip: "Reuse helps capacity; interference is the price to keep under control.",
  },
  {
    topic: "Reuse geometry",
    type: "single",
    prompt:
      "For a hexagonal layout with shift parameters i = 3 and j = 2, what cluster size K follows from K = i² + ij + j²?",
    options: ["19", "13", "25", "7"],
    answer: [0],
    explanation:
      "Substitute the shift parameters: K = 3² + (3 × 2) + 2² = 9 + 6 + 4 = 19.",
    tip: "Square both shifts, then add their product.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "In a trunked system, Grade of Service (GOS) is commonly expressed as the probability that a call is…",
    options: [
      "blocked",
      "handed off",
      "answered by a different cell",
      "transmitted in two directions",
    ],
    answer: [0],
    explanation:
      "GOS commonly describes the probability that a call attempt is blocked because no channel is available.",
    tip: "A blocked call never gets a traffic channel; that probability is a standard service-grade measure.",
  },
  {
    topic: "Antennas",
    type: "single",
    prompt: "How is a transmitting antenna's radiation efficiency defined?",
    options: [
      "Total radiated power divided by input power",
      "Input power divided by receiver sensitivity",
      "Antenna height divided by wavelength",
      "Received power divided by occupied bandwidth",
    ],
    answer: [0],
    explanation:
      "Radiation efficiency is the fraction of input power that is actually radiated: total radiated power divided by input power.",
    tip: "Efficiency compares useful radiated output with the power supplied.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "Which assignment strategy can activate smaller overlapping cells as needed and is suited to gradual, long-term growth?",
    options: [
      "Overlapped-cells-based channel assignment",
      "Pure ALOHA",
      "Fixed paging",
      "Hard handoff",
    ],
    answer: [0],
    explanation:
      "Overlapped-cell assignment can add smaller cells as demand grows, offering a gradual alternative to immediately splitting every cell.",
    tip: "Think of the smaller cells as extra capacity that can be brought online when needed.",
  },
  {
    topic: "Handoffs",
    type: "single",
    prompt: "What is one resource advantage of a hard handoff?",
    options: [
      "The call uses only one channel at a time during the transfer.",
      "The mobile always stays connected to two base stations.",
      "It eliminates the need to select a target cell.",
      "It allows the call to use every channel in the cluster.",
    ],
    answer: [0],
    explanation:
      "A hard handoff breaks the old radio link as the new one is established, so the call uses one channel at a time rather than maintaining overlapping links.",
    tip: "Hard handoff is often summarized as break-before-make.",
  },
  {
    topic: "Voice quality",
    type: "single",
    prompt:
      "On the Mean Opinion Score scale cited in the study guide, what value is typical of telephone voice quality?",
    options: ["About 1", "About 3", "About 4.8", "About 5.5"],
    answer: [1],
    explanation:
      "The study guide uses an MOS of approximately 3 as a typical telephone-voice quality reference.",
    tip: "MOS is a listener-rated quality scale; higher scores indicate better perceived speech.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt:
      "Under heavy offered load, what happens to average packet delay as successful throughput collapses toward zero?",
    options: [
      "It approaches infinity.",
      "It approaches zero.",
      "It stays exactly one frame time.",
      "It becomes independent of traffic.",
    ],
    answer: [0],
    explanation:
      "When heavy contention drives successful throughput toward zero, packets can wait and retry for increasingly long periods, so average delay grows without bound in the idealized model.",
    tip: "Little useful throughput plus persistent demand means an ever-growing queue or retry wait.",
  },
  {
    topic: "Reuse geometry",
    type: "single",
    prompt:
      "Using A = (3√3/2)R², what is the area of a regular hexagonal cell with center-to-edge radius R = 2 km?",
    options: [
      "About 10.4 km²",
      "About 6.9 km²",
      "About 20.8 km²",
      "About 2.6 km²",
    ],
    answer: [0],
    explanation: "A = (3√3/2) × 2² = 6√3 ≈ 10.39 km².",
    tip: "Square the radius first; the factor 3√3/2 is about 2.598.",
  },
  {
    topic: "Interference math",
    type: "single",
    prompt:
      "For the three-sector, K = 7, path-loss-exponent-4 case in the study guide, what approximate C/I result is reported?",
    options: ["20 dB", "11.26 dB", "18 dB", "24.76 dB"],
    answer: [0],
    explanation:
      "The guide's worked result for the three-sector system with K = 7 is approximately 20 dB.",
    tip: "Sector orientation changes which first-tier interferers contribute; use the stated sectoring model.",
  },
  {
    topic: "Interference math",
    type: "single",
    prompt:
      "For the six-sector, K = 4, path-loss-exponent-4 case in the study guide, what approximate C/I is reported?",
    options: ["18.57 dB", "20 dB", "24.76 dB", "11.26 dB"],
    answer: [2],
    explanation:
      "The guide reports approximately 24.76 dB for the six-sector system with K = 4 in this worked example.",
    tip: "Don't compare C/I values without keeping both the reuse size and sector pattern in view.",
  },
  {
    topic: "Interference math",
    type: "single",
    prompt:
      "A design needs practical C/I of 25 dB. Two candidate designs produce 20 dB and 24.76 dB. Do either meet the target?",
    options: [
      "Yes, both",
      "Yes, only the 20 dB design",
      "Yes, only the 24.76 dB design",
      "No, neither",
    ],
    answer: [3],
    explanation:
      "The practical target is 18 dB theoretical plus a 7 dB margin, or 25 dB. Both 20 dB and 24.76 dB fall short.",
    tip: "Compare each candidate against the full practical requirement, not just the theoretical baseline.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "A 2 MHz setup-channel band uses full-duplex channels made from two 30 kHz simplex channels. How many complete setup channels fit?",
    options: ["33", "66", "100", "200"],
    answer: [0],
    explanation:
      "Each full-duplex channel uses 60 kHz. Dividing 2,000 kHz by 60 kHz gives 33 complete channels, with some bandwidth left over.",
    tip: "Pair the uplink and downlink bandwidth before dividing.",
  },
  {
    topic: "Capacity math",
    type: "single",
    prompt:
      "A system covers 5,000 km² using cells that each cover 10 km². Ignoring boundary effects, how many cells are needed?",
    options: ["500", "50", "5,000", "50,000"],
    answer: [0],
    explanation:
      "Divide total coverage area by the area per cell: 5,000 / 10 = 500 cells.",
    tip: "This is an area ratio; the units cancel to leave a count of cells.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "An analog FDMA cluster has 12.5 MHz bandwidth, 30 kHz channel spacing, 10 kHz guards at both band edges, and 21 control channels. Approximately how many data channels are in the cluster?",
    options: ["395", "416", "21", "500"],
    answer: [0],
    explanation:
      "The band fits (12,500 − 20) / 30 = 416 channels before control allocation. Subtract 21 control channels to get 395 data channels.",
    tip: "Remove both edge guards, count channel slots, then subtract the control channels.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "If a call occupies a channel for an average of 120 seconds, about how many calls per hour can one continuously available channel serve?",
    options: ["30", "12", "60", "120"],
    answer: [0],
    explanation:
      "There are 3,600 seconds in an hour. At 120 seconds per call, 3,600 / 120 = 30 calls per hour.",
    tip: "Calls per hour per channel = 3,600 seconds divided by the average holding time in seconds.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "One subscriber makes one call per hour, and the average call lasts six minutes. What is the offered traffic per subscriber?",
    options: ["0.1 Erlang", "0.01 Erlang", "1 Erlang", "6 Erlangs"],
    answer: [0],
    explanation:
      "Offered traffic is call rate × holding time: 1 call/hour × 6/60 hour = 0.1 Erlang.",
    tip: "Convert minutes to hours before multiplying by calls per hour.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "System A has 25 channels per cell, 2% blocking, and users each offer 0.1 Erlang. Using the study guide's Erlang-B table value, about how many users fit per cell?",
    options: ["175", "25", "19", "250"],
    answer: [0],
    explanation:
      "At 25 channels and 2% blocking, the guide uses about 17.5 Erlangs. Dividing by 0.1 Erlang per user gives about 175 users per cell.",
    tip: "Find the offered Erlangs at the blocking target, then divide by traffic per user.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "System B has 27 channels per cell and supports about 19.3 Erlangs at 2% blocking. If each user offers 0.1 Erlang, approximately how many users fit?",
    options: ["193", "27", "81", "2,000"],
    answer: [0],
    explanation:
      "19.3 Erlangs divided by 0.1 Erlang per user gives approximately 193 users per cell.",
    tip: "The Erlang value is aggregate traffic; dividing by per-user traffic gives the subscriber count.",
  },
  {
    topic: "Capacity planning",
    type: "single",
    prompt:
      "A 400 km² region has 100 users/km². If each cell supports about 193 users, how many cells are needed at minimum?",
    options: ["208", "193", "40", "400"],
    answer: [0],
    explanation:
      "The region has 400 × 100 = 40,000 users. Dividing by 193 gives about 207.3, so round up to 208 whole cells.",
    tip: "When planning coverage, round a fractional required cell count up.",
  },
  {
    topic: "Antenna diversity",
    type: "single",
    prompt:
      "Base-station receive antennas are often separated to obtain which kind of diversity?",
    options: [
      "Space diversity",
      "Time division",
      "Frequency reuse",
      "Code diversity",
    ],
    answer: [0],
    explanation:
      "Spatially separated receive antennas can experience different fading conditions, providing space diversity.",
    tip: "The antennas are separated in physical space, so the name is a direct clue.",
  },
  {
    topic: "Interference reduction",
    type: "multi",
    prompt:
      "Which techniques can reduce co-channel interference in a cellular network? Select every valid answer.",
    options: [
      "Increase the separation between co-channel cells.",
      "Lower cell-site antenna heights where appropriate.",
      "Use directional antennas at cell sites.",
      "Use receiver diversity.",
      "Place every co-channel transmitter closer to the same mobile.",
    ],
    answer: [0, 1, 3],
    explanation:
      "Greater co-channel separation, careful antenna heights, directional patterns, and receiver diversity are all established interference-reduction methods.",
    tip: "The first four manage distance, propagation, direction, or fading; the last option worsens interference.",
  },
  {
    topic: "Cell planning",
    type: "multi",
    prompt:
      "What complications commonly come with deploying smaller cells? Select every valid answer.",
    options: [
      "More cell sites are needed.",
      "Mobiles cross cell boundaries more often, increasing handoffs.",
      "The network must make measurements and decisions more quickly.",
      "High-speed mobiles can face excessive handoffs in very small cells.",
      "Co-channel interference becomes impossible.",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Smaller cells require more infrastructure and create more frequent handoffs. They also demand faster control, and very high mobility can make handoff rates impractical.",
    tip: "More cells improve spatial reuse, but mobility and control overhead rise too.",
  },
  {
    topic: "Channel assignment",
    type: "multi",
    prompt:
      "Which are advantages of dynamic channel assignment? Select every valid answer.",
    options: [
      "Better use of available channel resources.",
      "Adaptation to changing traffic loads.",
      "Improved load balancing between cells.",
      "Better performance under some low-traffic conditions.",
      "No need to check channels for interference.",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Dynamic assignment can improve utilization, adapt to traffic, and balance load. It does require interference checks and more management.",
    tip: "Dynamic means responsive to demand; it does not mean free of coordination work.",
  },
  {
    topic: "Channel assignment",
    type: "multi",
    prompt:
      "What are possible costs or complications of dynamic channel assignment? Select every valid answer.",
    options: [
      "Exhaustive interference checking.",
      "Tracking which channels are currently in use.",
      "More complex channel management.",
      "Delay while a channel is selected.",
      "A need for equipment that can tune across assigned frequencies.",
    ],
    answer: [0, 1, 2, 3, 4],
    explanation:
      "Dynamic assignment improves flexibility at the cost of extra tracking, interference checking, selection delay, and equipment or management complexity.",
    tip: "Flexibility needs information: the system must know which channels are free and safe to use.",
  },
  {
    topic: "Radio system limits",
    type: "multi",
    prompt:
      "Which are recognized limitations of conventional radio communication systems? Select every valid answer.",
    options: [
      "Inefficient use of spectrum.",
      "Limited ability to serve a wide area.",
      "Insufficient system capacity.",
      "A lower grade of service than desired.",
      "Unlimited channels for every user.",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Limited spectrum efficiency, coverage, capacity, and service quality are all challenges that motivated cellular network design.",
    tip: "Cellular architecture was developed to make scarce spectrum serve more people over larger areas.",
  },
  {
    topic: "Frequency reuse",
    type: "multi",
    prompt:
      "With a fixed amount of spectrum, what are typical effects of reducing the cluster size K? Select every valid answer.",
    options: [
      "More channels can be assigned to each cell.",
      "Capacity per cell can increase.",
      "Co-channel cells are closer, so interference tends to increase.",
      "Co-channel interference is guaranteed to disappear.",
    ],
    answer: [0, 1, 2],
    explanation:
      "A smaller cluster reuses frequencies more often, increasing channels and capacity per cell while bringing co-channel cells closer and raising interference.",
    tip: "Smaller K trades more reuse and capacity for tighter interference constraints.",
  },
  {
    topic: "LTE",
    type: "multi",
    prompt:
      "Which technologies are key enablers of LTE in the study guide? Select both.",
    options: [
      "Orthogonal Frequency Division Multiplexing (OFDM)",
      "Multiple-Input Multiple-Output (MIMO)",
      "Pure ALOHA",
      "Analog frequency modulation",
    ],
    answer: [0, 1],
    explanation:
      "LTE uses OFDM-family radio techniques and MIMO antenna technology to provide efficient broadband transmission and higher performance.",
    tip: "Think multicarrier modulation plus multiple antenna paths.",
  },
  {
    topic: "Interference",
    type: "single",
    prompt:
      "In the conventional seven-cell reuse pattern, how many co-channel cells are in the second interference tier?",
    options: ["12", "6", "7", "18"],
    answer: [0],
    explanation:
      "The standard hexagonal seven-cell reuse layout has six first-tier co-channel cells and twelve in the second tier.",
    tip: "The first ring has six positions; the next ring has twice as many.",
  },
  {
    topic: "Control channels",
    type: "single",
    prompt:
      "When a mobile originates a call in the cellular control-channel model from the study guide, which channel carries its request?",
    options: [
      "Reverse control channel",
      "Forward paging channel",
      "Traffic channel only",
      "Broadcast TV channel",
    ],
    answer: [0],
    explanation:
      "A mobile-originated setup request travels from the mobile toward the network on the reverse control channel.",
    tip: "Reverse means the mobile is sending toward the base station.",
  },
  {
    topic: "GSM",
    type: "single",
    prompt:
      "Which GSM database keeps temporary subscriber and location information for the area a mobile is currently visiting?",
    options: [
      "Visitor Location Register (VLR)",
      "Home Location Register (HLR)",
      "Equipment Identity Register (EIR)",
      "Short Message Service Center (SMSC)",
    ],
    answer: [0],
    explanation:
      "The VLR stores temporary subscriber information for mobiles currently in its service area; the HLR is the subscriber's home record.",
    tip: "Visitor = currently roaming in this region; Home = primary subscriber record.",
  },
  {
    topic: "GSM",
    type: "single",
    prompt:
      "Which identifier is assigned to a mobile handset's equipment, rather than to the subscriber's SIM account?",
    options: ["IMEI", "VLR", "MSC", "MCC"],
    answer: [0],
    explanation:
      "The International Mobile Equipment Identity (IMEI) identifies the mobile equipment itself.",
    tip: "IMEI identifies the device; subscriber identity numbers identify the subscription.",
  },
  {
    topic: "GSM",
    type: "single",
    prompt:
      "In the GSM architecture described by the guide, which network element handles call setup and mobility management?",
    options: [
      "Mobile Switching Center (MSC)",
      "Visitor Location Register (VLR)",
      "Base Transceiver Station (BTS)",
      "Equipment Identity Register (EIR)",
    ],
    answer: [0],
    explanation:
      "The MSC coordinates switching, call setup, and mobility management across the cellular network.",
    tip: "The BTS provides radio access; the MSC coordinates switching and mobility.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt:
      "Which access method is used by IEEE 802.11 wireless LANs to help avoid collisions on the shared radio medium?",
    options: ["CSMA/CA", "CSMA/CD", "Pure ALOHA", "FDMA only"],
    answer: [0],
    explanation:
      "Wi-Fi uses CSMA/CA, which attempts to avoid collisions because a radio generally cannot reliably detect a collision while transmitting.",
    tip: "Wireless LANs avoid collisions; classic shared Ethernet used collision detection.",
  },
  {
    topic: "Mobile services",
    type: "multi",
    prompt:
      "Which are common subscriber features offered by cellular networks? Select every valid answer.",
    options: [
      "Automatic roaming between service areas",
      "Call waiting during an active call",
      "Call forwarding to another destination",
      "SMS messaging",
      "Voice blocking as a subscriber feature",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Roaming, call waiting, call forwarding, and SMS are common cellular services. Voice blocking is not a subscriber feature in this list.",
    tip: "Think about services a user can enable or use—not network problems such as congestion.",
  },
  {
    topic: "TDMA efficiency",
    type: "single",
    prompt:
      "A TDMA frame contains 156.25 total bits, of which 40.25 are overhead. About what percentage remains for useful frame content?",
    options: ["74.2%", "25.8%", "80.5%", "96.0%"],
    answer: [0],
    explanation:
      "Useful fraction = (156.25 − 40.25) / 156.25 = 116 / 156.25 ≈ 0.742, or 74.2%.",
    tip: "Subtract overhead first, then divide useful bits by total bits.",
  },
  {
    topic: "TDMA efficiency",
    type: "single",
    prompt:
      "A 5 ms TDMA slot has 0.25 ms of pilot overhead and 0.25 ms of guard time. What fraction of the slot remains for payload timing?",
    options: ["90%", "10%", "80%", "95%"],
    answer: [0],
    explanation:
      "Slot efficiency = (5 − 0.25 − 0.25) / 5 = 4.5 / 5 = 0.90, or 90%.",
    tip: "Remove both overhead intervals before dividing by the full slot duration.",
  },
  {
    topic: "Mobile registration",
    type: "single",
    prompt:
      "After a newly powered-on mobile scans the control channels, what should it do next to select a serving cell?",
    options: [
      "Choose the cell site with the strongest received signal.",
      "Transmit on every voice channel at once.",
      "Connect directly to the PSTN.",
      "Wait for a handoff before registering.",
    ],
    answer: [0],
    explanation:
      "The mobile compares received signal strength on the scanned control channels, selects a suitable strongest cell site, and then registers.",
    tip: "Scan first, compare signal strength, then register with the selected site.",
  },
  {
    topic: "Call setup",
    type: "single",
    prompt:
      "A mobile's call request has reached the switching office. What normally happens before a traffic channel is assigned?",
    options: [
      "The request is authenticated.",
      "The mobile is removed from the location register.",
      "All neighboring cells are shut down.",
      "The call is immediately routed to a paging receiver.",
    ],
    answer: [0],
    explanation:
      "The network authenticates the request before directing the serving cell site to allocate a voice or traffic channel.",
    tip: "Authentication is part of call setup, before the traffic connection is granted.",
  },
  {
    topic: "Call setup",
    type: "single",
    prompt:
      "When the network originates a call to a mobile, how does the handset recognize that a page is intended for it?",
    options: [
      "It matches the identity carried in the page to its own ID.",
      "It detects a change in its battery voltage.",
      "It reads the called party's voice channel before paging.",
      "It compares the page with an IMEI broadcast by every cell.",
    ],
    answer: [0],
    explanation:
      "The network sends pages over control channels, and the intended handset recognizes its own identity in the page.",
    tip: "Paging is an addressed alert: the mobile listens for its own identifier.",
  },
  {
    topic: "Network architecture",
    type: "multi",
    prompt:
      "Which functions can be coordinated by a Mobile Telephone Switching Office (MTSO)? Select every valid answer.",
    options: [
      "Switching calls",
      "Managing subscriber mobility",
      "Billing support",
      "Charging the mobile handset battery over the air",
    ],
    answer: [0, 1, 2],
    explanation:
      "The MTSO coordinates switching, mobility management, and related billing functions; charging the handset is not a switching-office role.",
    tip: "The MTSO coordinates the network side of a call, not the handset's physical power supply.",
  },
  {
    topic: "Network architecture",
    type: "single",
    prompt:
      "Which public network can carry a call between mobile subscribers served by different MTSOs?",
    options: [
      "PSTN",
      "Reverse access channel",
      "VLR",
      "Radio paging transmitter",
    ],
    answer: [0],
    explanation:
      "The Public Switched Telephone Network (PSTN) interconnects switching offices and other telephone networks.",
    tip: "When two mobile systems need an external network path, think telephone-network interconnection.",
  },
  {
    topic: "Cell-site equipment",
    type: "multi",
    prompt:
      "Which equipment can be found at a cellular cell site? Select every valid answer.",
    options: [
      "Transmit/receive antennas",
      "Radio transceivers",
      "Data links toward the switching office",
      "Power equipment",
      "A subscriber's SIM card",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Cell-site equipment includes antennas, transceivers, backhaul/data links, and power systems. A SIM belongs in a subscriber device.",
    tip: "The site provides radio access and a network connection; subscriber credentials stay with the user.",
  },
  {
    topic: "Mobile equipment",
    type: "single",
    prompt:
      "What is the primary purpose of the SIM in a mobile subscriber unit?",
    options: [
      "Identify the subscriber and subscription",
      "Amplify the cell site's transmitted signal",
      "Assign frequencies to the cellular cluster",
      "Replace the cell-site transceiver",
    ],
    answer: [0],
    explanation:
      "The Subscriber Identity Module stores information used to identify and authenticate the subscriber's service.",
    tip: "A SIM is about subscriber identity, not radio coverage or cell planning.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "Seven calls, each lasting six minutes, are offered during a 30-minute interval. What is the average offered traffic?",
    options: ["1.4 Erlangs", "0.7 Erlangs", "2.3 Erlangs", "42 Erlangs"],
    answer: [0],
    explanation:
      "Total offered call time is 7 × 6 = 42 minutes. Divide by the 30-minute observation interval: 42 / 30 = 1.4 Erlangs.",
    tip: "Erlangs are busy-time divided by observation-time.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "Which statement correctly distinguishes offered traffic from effective traffic?",
    options: [
      "Offered traffic is requested load; effective traffic is the load successfully carried.",
      "Offered traffic is only successful calls; effective traffic includes blocked calls.",
      "They are always equal, even when every channel is busy.",
      "Effective traffic measures average call duration only.",
    ],
    answer: [0],
    explanation:
      "Offered load represents demand presented to the system. Effective or carried load is the traffic that the system actually serves.",
    tip: "Demand offered can exceed what limited channels successfully carry.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "What does one Erlang of traffic mean in practical channel-occupancy terms?",
    options: [
      "One channel is occupied continuously on average.",
      "One call is made every second.",
      "One channel is idle for an entire hour.",
      "One user is assigned one permanent channel.",
    ],
    answer: [0],
    explanation:
      "One Erlang represents a continuous average occupancy equivalent to one channel being busy for the whole observation period.",
    tip: "Erlang measures occupancy, not a count of calls by itself.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "If 120 users each offer 0.1 Erlang, what is the system's total offered traffic?",
    options: ["12 Erlangs", "1.2 Erlangs", "120 Erlangs", "0.1 Erlang"],
    answer: [0],
    explanation:
      "Total traffic is the number of users times the average traffic per user: 120 × 0.1 = 12 Erlangs.",
    tip: "Add many equal user loads by multiplying the per-user Erlangs by the user count.",
  },
  {
    topic: "Traffic engineering",
    type: "single",
    prompt:
      "Using ηtr = At / Nd, what is the trunking-efficiency ratio for 18 Erlangs carried across 24 channels?",
    options: ["0.75", "1.33", "6", "42"],
    answer: [0],
    explanation:
      "Divide carried traffic by the channel count: 18 / 24 = 0.75 Erlangs per channel.",
    tip: "Keep the numerator as traffic and the denominator as the number of data channels.",
  },
  {
    topic: "Random access",
    type: "single",
    prompt:
      "How does Reservation ALOHA reduce contention for later data transmissions?",
    options: [
      "Users reserve future slots before sending their data.",
      "Every user receives a permanent frequency band.",
      "The base station retransmits every collided packet itself.",
      "Users transmit only after a handoff.",
    ],
    answer: [0],
    explanation:
      "Reservation ALOHA uses a reservation step to assign future transmission slots, reducing repeated contention for those reserved data transmissions.",
    tip: "The name gives the clue: reserve a slot, then use it.",
  },
  {
    topic: "Multiple access",
    type: "multi",
    prompt:
      "Which statements describe contention-based access? Select every valid answer.",
    options: [
      "Users may attempt access without a dedicated prior allocation.",
      "Random access and collision-resolution methods are examples.",
      "The approach can have relatively low coordination overhead.",
      "Collisions can occur when users transmit together.",
      "Every user is guaranteed a private frequency before attempting access.",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Contention-based methods avoid assigning every transmission a dedicated resource in advance. This reduces coordination overhead but allows collisions.",
    tip: "Less pre-coordination is convenient, but simultaneous attempts can collide.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt:
      "How does SDMA (also called beam division in some material) separate users who may share time and frequency?",
    options: [
      "By serving them in different spatial directions with antenna beams",
      "By assigning each user a different call duration",
      "By requiring every user to transmit on a different carrier frequency",
      "By giving each user a separate telephone network",
    ],
    answer: [0],
    explanation:
      "Space Division Multiple Access separates users spatially, often using directional beams or advanced multi-antenna techniques.",
    tip: "SDMA adds space as a resource dimension.",
  },
  {
    topic: "FDMA",
    type: "multi",
    prompt:
      "Which are characteristics or trade-offs of FDMA? Select every valid answer.",
    options: [
      "Guard bands help separate adjacent channels.",
      "Uneven traffic can leave fixed bandwidth underused.",
      "The technique is relatively straightforward to implement.",
      "All users must share one carrier in synchronized time slots.",
    ],
    answer: [0, 1, 2],
    explanation:
      "FDMA divides spectrum into frequency channels and uses guard spacing. It is straightforward, but fixed allocations can waste capacity when traffic is uneven.",
    tip: "FDMA separates by frequency; TDMA separates by time.",
  },
  {
    topic: "TDMA",
    type: "single",
    prompt:
      "What timing requirement is a notable TDMA implementation challenge?",
    options: [
      "Precise synchronization between transmitters and time slots",
      "Permanent separation of every user into a unique frequency band",
      "A different spreading code for every packet",
      "An inability to encrypt digital signals",
    ],
    answer: [0],
    explanation:
      "TDMA users share a carrier in different time slots, so their transmissions must be synchronized to avoid overlapping slots.",
    tip: "When time is divided into slots, timing errors can make users collide.",
  },
  {
    topic: "FDMA capacity",
    type: "single",
    prompt:
      "A 5 MHz allocation is divided into 25 kHz simplex channels. Ignoring guard bands, how many full-duplex calls can it support?",
    options: ["100", "200", "25", "400"],
    answer: [0],
    explanation:
      "Each full-duplex call needs two 25 kHz simplex channels, so 5,000 / (2 × 25) = 100 calls.",
    tip: "Count both directions for every full-duplex call.",
  },
  {
    topic: "AMPS",
    type: "single",
    prompt:
      "A system has 400 full-duplex channels and a reuse cluster of K = 4. How many channels are assigned to each cell in the cluster?",
    options: ["100", "400", "1,600", "4"],
    answer: [0],
    explanation:
      "Divide the cluster's 400 channels among four cells: 400 / 4 = 100 channels per cell.",
    tip: "With an even reuse plan, channels per cell equal total cluster channels divided by K.",
  },
  {
    topic: "AMPS",
    type: "single",
    prompt:
      "In the AMPS frequency plan described in the Gizmo material, what duplex spacing separates the mobile and cell-site transmit bands?",
    options: ["45 MHz", "5 MHz", "25 kHz", "200 kHz"],
    answer: [0],
    explanation:
      "The cited AMPS plan places mobile and cell-site transmit bands 45 MHz apart.",
    tip: "Duplex spacing is the frequency separation between the paired uplink and downlink bands.",
  },
  {
    topic: "Channel assignment",
    type: "multi",
    prompt:
      "Which statements correctly distinguish fixed, dynamic, and hybrid channel assignment? Select every valid answer.",
    options: [
      "Fixed assignment gives cells predetermined channels.",
      "Dynamic assignment selects an available channel from a shared pool as needed.",
      "Hybrid assignment combines fixed and dynamic approaches.",
      "Dynamic assignment means every cell permanently keeps the same channels.",
    ],
    answer: [0, 1, 2],
    explanation:
      "FCA preassigns channels, DCA chooses from available resources when needed, and HCA combines features of both.",
    tip: "Fixed = planned in advance; dynamic = selected as demand occurs; hybrid = a mix.",
  },
  {
    topic: "Channel borrowing",
    type: "single",
    prompt:
      "In a borrowing scheme, what are the overloaded cell and the cell lending a channel called?",
    options: [
      "Acceptor and donor, respectively",
      "Donor and acceptor, respectively",
      "Serving and paging, respectively",
      "Mobile and switching, respectively",
    ],
    answer: [0],
    explanation:
      "The overloaded acceptor cell borrows a channel from a neighboring donor cell, provided reuse constraints remain satisfied.",
    tip: "The acceptor receives; the donor lends.",
  },
  {
    topic: "Channel borrowing",
    type: "single",
    prompt:
      "When prioritizing channels for local calls and borrowing, which order best preserves flexibility?",
    options: [
      "Keep high-priority channels for local calls and consider lower-priority channels for borrowing first.",
      "Borrow the highest-priority channel first and reserve the lowest for local calls.",
      "Borrow only channels already in use.",
      "Assign every channel to the same cell permanently.",
    ],
    answer: [0],
    explanation:
      "The material's prioritization approach uses higher-priority channels for local calls and begins borrowing from lower-priority channels.",
    tip: "Protect the most valuable channels for the cell's own traffic.",
  },
  {
    topic: "Channel sharing",
    type: "multi",
    prompt:
      "Which statements describe temporary channel sharing between sectors? Select every valid answer.",
    options: [
      "It can improve trunking efficiency.",
      "A cyclic sharing pattern may be used.",
      "A shared channel can be returned when it becomes available to its original sector.",
      "It permanently increases the licensed spectrum.",
    ],
    answer: [0, 1, 2],
    explanation:
      "Temporary sharing lets sectors use spare resources more efficiently; cyclic rules can coordinate sharing, and channels can return to their home sector.",
    tip: "Sharing redistributes existing channels; it does not create new spectrum.",
  },
  {
    topic: "Cell planning",
    type: "single",
    prompt: "What is the key idea of an underlaid-cell arrangement?",
    options: [
      "A smaller cell at a large-cell site can use a second frequency-reuse pattern.",
      "Every large cell is replaced by a single omnidirectional antenna.",
      "Two mobile subscribers must share one SIM.",
      "The network disables frequency reuse.",
    ],
    answer: [0],
    explanation:
      "An underlaid arrangement places a smaller cell within a larger-cell footprint, allowing two reuse patterns to serve different demand conditions.",
    tip: "Underlaid means a smaller coverage layer exists inside a larger one.",
  },
  {
    topic: "Channel assignment",
    type: "multi",
    prompt:
      "Besides the available channel count, which inputs can affect channel assignment? Select every valid answer.",
    options: [
      "Call-arrival rate",
      "Call duration",
      "Target call-blocking probability",
      "Target call-dropping rate",
      "Channels reserved for handoffs",
      "Handset color",
    ],
    answer: [0, 1, 2, 3, 4],
    explanation:
      "Assignment decisions account for offered traffic, service targets, and handoff reserves as well as the channel supply.",
    tip: "Think demand, quality targets, and protected handoff capacity.",
  },
  {
    topic: "Handoff control",
    type: "multi",
    prompt:
      "Which statements correctly describe NCHO, MAHO, and MCHO? Select every valid answer.",
    options: [
      "In NCHO, the network makes the handoff decision using network measurements.",
      "In MAHO, the mobile measures neighboring signals and reports them; the network decides.",
      "In MCHO, the mobile makes the handoff decision.",
      "In MAHO, the mobile always makes the final handoff decision.",
    ],
    answer: [0, 1, 2],
    explanation:
      "NCHO places measurement and decision in the network, MAHO has the mobile provide measurements while the network decides, and MCHO gives the decision to the mobile.",
    tip: "For MAHO, remember: mobile-assisted measurements, network-controlled decision.",
  },
  {
    topic: "Handoffs",
    type: "multi",
    prompt:
      "Which are characteristics of a soft handoff? Select every valid answer.",
    options: [
      "The new connection is established before the old one is released.",
      "The mobile may use more than one channel or cell connection briefly.",
      "The overlap can improve call continuity.",
      "The old connection must always be broken before a new one begins.",
    ],
    answer: [0, 1, 2],
    explanation:
      "Soft handoff is make-before-break: overlapping connections can improve reliability, though they may consume multiple resources temporarily.",
    tip: "Soft handoff keeps the old link while the new link is brought up.",
  },
  {
    topic: "Handoffs",
    type: "multi",
    prompt:
      "Which situations may trigger a handoff? Select every valid answer.",
    options: [
      "The mobile crosses a cell boundary.",
      "A coverage hole or weak signal threatens the call.",
      "A channel change is needed to address interference.",
      "A cell needs to free capacity for another call.",
      "The network wants to increase the mobile's screen brightness.",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Handoffs can maintain coverage, manage interference, or move a connection to free capacity—not only follow geographic movement.",
    tip: "A handoff is a connection-management tool, not just a map-boundary event.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "What distinguishes dynamic cell splitting from a permanent split planned in advance?",
    options: [
      "Dynamic splitting responds to current traffic demand.",
      "Dynamic splitting never changes cell size.",
      "Permanent splitting requires no frequency-plan changes.",
      "Dynamic splitting is performed only when a call ends.",
    ],
    answer: [0],
    explanation:
      "Dynamic splitting adjusts the use of cell resources according to real-time traffic, while permanent splitting is planned and installed ahead of time.",
    tip: "Dynamic means the network can react to demand as it changes.",
  },
  {
    topic: "Frequency management",
    type: "multi",
    prompt:
      "Which tasks belong to frequency management? Select every valid answer.",
    options: [
      "Designating control and traffic channels",
      "Numbering channels",
      "Grouping channels for cell use",
      "Planning channel allocation to improve spectrum efficiency",
      "Measuring each subscriber's screen size",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Frequency management organizes, numbers, groups, and assigns the available channels to meet interference, capacity, and service goals.",
    tip: "It is the planning and organization of radio channels—not handset specifications.",
  },
  {
    topic: "Random access",
    type: "single",
    prompt:
      "What are the ideal maximum throughputs of pure ALOHA and slotted ALOHA, respectively?",
    options: [
      "About 0.184 and 0.368",
      "About 0.368 and 0.184",
      "About 0.5 and 1.0",
      "Both are exactly 1.0",
    ],
    answer: [0],
    explanation:
      "Pure ALOHA peaks at 1/(2e) ≈ 0.184, while slotted ALOHA peaks at 1/e ≈ 0.368 because slot alignment shortens the vulnerable period.",
    tip: "Slotted ALOHA approximately doubles the ideal peak throughput.",
  },
  {
    topic: "FDD",
    type: "single",
    prompt: "In an FDD link, what separates uplink and downlink transmissions?",
    options: [
      "A fixed frequency spacing between paired bands",
      "A time slot on the same carrier only",
      "A different SIM card for each direction",
      "A paging message between every symbol",
    ],
    answer: [0],
    explanation:
      "Frequency Division Duplex uses separate uplink and downlink frequency bands, separated by a duplex spacing.",
    tip: "FDD separates directions by frequency; TDD separates them by time.",
  },
  {
    topic: "Cellular fundamentals",
    type: "multi",
    prompt:
      "Cellular communication is designed to enhance which of the following? Select every valid answer.",
    options: [
      "System capacity",
      "Spectrum efficiency",
      "Coverage area",
      "Desired signal quality",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "Cellular design uses many techniques to improve capacity, spectrum use, coverage, and the quality of the desired signal.",
    tip: "Cellular systems balance several goals rather than optimizing only one.",
  },
  {
    topic: "Cellular fundamentals",
    type: "multi",
    prompt:
      "Which limitations are associated with conventional radio communication systems? Select every valid answer.",
    options: [
      "Low-power transmission",
      "Limited services",
      "Small coverage area",
      "Inefficient spectrum utilization",
    ],
    answer: [1, 2, 3],
    explanation:
      "The supplied answer key identifies limited services, small coverage, and inefficient spectrum use as limitations; low-power transmission is not selected.",
    tip: "Cellular architecture was developed in part to improve service, coverage, and reuse of scarce spectrum.",
  },
  {
    topic: "Cell planning",
    type: "multi",
    prompt:
      "Why is a hexagon used as the theoretical cell shape in cellular planning? Select every valid answer.",
    options: [
      "It reduces the occurrence of handovers.",
      "For a given radius, it has the largest area.",
      "It offers a practical, non-overlapping approximation of radio coverage.",
      "It matches the shape of real-world coverage.",
    ],
    answer: [1, 2],
    explanation:
      "Hexagons tile a plane without gaps and are a useful idealization of a circular coverage area. Real cells do not have perfectly regular boundaries.",
    tip: "The hexagon is a planning model, not a claim that real radio coverage is hexagonal.",
  },
  {
    topic: "Cell planning",
    type: "multi",
    prompt:
      "Which constraints affect the shape of actual cells? Select every valid answer.",
    options: [
      "None of them",
      "Non-uniform population densities",
      "Man-made structures",
      "Natural irregular terrain",
    ],
    answer: [1, 2, 3],
    explanation:
      "Population distribution, buildings, and terrain all affect propagation and the practical boundaries of cells.",
    tip: "Actual coverage follows propagation and demand, not a geometric template.",
  },
  {
    topic: "Cellular fundamentals",
    type: "single",
    prompt: "What is a major factor affecting cellular system design?",
    options: ["Noise", "Power consumption", "Geographic area", "Interference"],
    answer: [3],
    explanation:
      "Best-effort key: interference is the most likely intended answer because frequency reuse makes interference a central cellular-design constraint. The source marking was unclear.",
    tip: "Reuse improves capacity, but co-channel interference must be controlled.",
  },
  {
    topic: "Cell sectoring",
    type: "single",
    prompt: "What is the main aim of cell sectoring?",
    options: [
      "Reduce co-channel interference and decrease C/I",
      "Reduce co-channel interference and increase C/I by increasing cluster size K",
      "Reduce co-channel interference and decrease C/I by decreasing cluster size K",
      "Reduce co-channel interference and increase C/I without increasing cluster size K",
    ],
    answer: [3],
    explanation:
      "Directional sector antennas reduce the number of interfering co-channel cells seen by a sector, improving C/I without requiring a larger cluster.",
    tip: "Sectoring improves the interference environment while preserving the reuse cluster size.",
  },
  {
    topic: "Cell sectoring",
    type: "single",
    prompt: "Which listed advantage of cell sectoring is correct?",
    options: [
      "Enhancing trunking efficiency",
      "Lowering transmission power",
      "Increasing coverage area",
      "Enhancing spectrum efficiency",
    ],
    answer: [3],
    explanation:
      "Sectoring can improve spectrum efficiency by reducing interference and allowing more aggressive frequency reuse.",
    tip: "Sectoring is chiefly an interference and capacity technique.",
  },
  {
    topic: "Frequency reuse",
    type: "single",
    prompt:
      "When cluster size K is minimized, what happens to overall system capacity C?",
    options: [
      "It increases.",
      "It decreases.",
      "It remains unchanged.",
      "It becomes zero.",
    ],
    answer: [0],
    explanation:
      "A smaller reuse cluster allows the available channels to be reused more frequently, increasing capacity, though co-channel interference also rises.",
    tip: "Smaller K means more frequent reuse and greater capacity, with an interference trade-off.",
  },
  {
    topic: "Frequency reuse",
    type: "single",
    prompt: "Minimizing cluster size K will have which effects?",
    options: [
      "Increase co-channel interference and decrease system capacity",
      "Decrease co-channel interference and system capacity",
      "Increase co-channel interference and system capacity",
      "Decrease co-channel interference and increase system capacity",
    ],
    answer: [2],
    explanation:
      "A smaller cluster increases how often frequencies are reused, which raises both capacity and co-channel interference.",
    tip: "Frequency reuse trades a higher interference level for more capacity.",
  },
  {
    topic: "Frequency reuse",
    type: "single",
    prompt:
      "What is a likely effect of increasing capacity through frequency reuse?",
    options: [
      "Wider coverage",
      "A decrease in co-channel interference",
      "Better signal quality",
      "An increase in co-channel interference",
    ],
    answer: [3],
    explanation:
      "More aggressive reuse places co-channel cells closer together, which generally increases co-channel interference.",
    tip: "Capacity gains from reuse can come with a signal-quality cost.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "With the supplied cell-splitting model, how do the number of clusters over the coverage area and overall system capacity change?",
    options: [
      "Clusters increase; capacity decreases.",
      "Clusters decrease; capacity remains the same.",
      "Clusters increase; capacity increases.",
      "Clusters decrease; capacity increases.",
    ],
    answer: [2],
    explanation:
      "The supplied answer key indicates that splitting increases the number of smaller cells, so fewer complete reuse clusters are needed across the same coverage area while capacity increases.",
    tip: "Cell splitting adds smaller cells to serve higher traffic density.",
  },
  {
    topic: "Cell splitting",
    type: "single",
    prompt:
      "After one cell split, what is the new capacity relative to the old capacity?",
    options: [
      "The same",
      "Twice as high",
      "Three times as high",
      "Half as high",
    ],
    answer: [1],
    explanation:
      "In the simplified model, dividing one cell into two smaller cells doubles the number of cells reusing the channel set and therefore doubles capacity.",
    tip: "This twofold result assumes the simplified one-cell-to-two model.",
  },
  {
    topic: "Co-channel interference",
    type: "single",
    prompt: "Which method reduces co-channel interference?",
    options: [
      "Lowering antenna heights at the cell site",
      "Using omnidirectional antennas at the cell site",
      "Increasing the separation between two co-channel cells",
      "All of them",
    ],
    answer: [2],
    explanation:
      "Increasing the separation between co-channel cells reduces the interference power received from the other cell.",
    tip: "Greater reuse distance generally means less co-channel interference.",
  },
  {
    topic: "Antennas",
    type: "single",
    prompt: "At what point is antenna Half Power Beamwidth (HPBW) measured?",
    options: [
      "Where the pattern decreases by 50% from the peak of a side lobe",
      "Where the pattern decreases by 3 dB from the peak of the main beam",
      "Where the pattern increases by 3 dB from the peak of a side lobe",
      "Where the pattern increases by 50% from the peak of the main beam",
    ],
    answer: [1],
    explanation:
      "HPBW is the angular width between the points where power falls to half its peak value, corresponding to -3 dB from the main-beam peak.",
    tip: "Half power corresponds to a 3 dB decrease in power.",
  },
  {
    topic: "Antennas",
    type: "single",
    prompt: "What does using two antennas at a base station provide?",
    options: [
      "Reduction in interference",
      "Security",
      "Diversity",
      "Enhancement in the coverage area",
    ],
    answer: [2],
    explanation:
      "A pair of antennas can provide diversity reception, helping mitigate fading by combining or selecting signals with different propagation paths.",
    tip: "Antenna diversity combats fading; it is not simply an increase in coverage area.",
  },
  {
    topic: "Mobile initialization",
    type: "single",
    prompt:
      "After a mobile is switched on, which channels does it first scan during initialization?",
    options: [
      "All reverse control channels, selecting the strongest",
      "All voice channels, selecting the strongest",
      "All forward control channels, selecting the strongest",
      "All forward control channels, selecting the weakest",
    ],
    answer: [2],
    explanation:
      "The mobile scans forward control channels and selects the strongest suitable one to begin system acquisition.",
    tip: "Initialization starts by finding a usable forward control channel.",
  },
  {
    topic: "Handoffs",
    type: "boolean",
    prompt:
      "An intra-cell handover takes place when a mobile moves from one sector to another within the same cell.",
    options: ["True", "False"],
    answer: [0],
    explanation:
      "A transition between sectors belonging to the same cell is an intra-cell handover.",
    tip: "A sector change can require a handover even when the cell site remains the same.",
  },
  {
    topic: "Handoffs",
    type: "boolean",
    prompt:
      "If a mobile reaches a signal-strength hole not covered by any cell, a handoff is made automatically.",
    options: ["True", "False"],
    answer: [1],
    explanation:
      "Best-effort key: likely false. A handoff needs a suitable target cell; if no cell covers the area, the connection may be lost instead. The source wording and marked answer were unclear.",
    tip: "Handoff can move a connection to another available cell, but cannot create coverage where none exists.",
  },
  {
    topic: "Channel borrowing",
    type: "single",
    prompt:
      "What is temporary channel sharing between a cell and a neighboring cell called?",
    options: ["Cell sectoring", "Channel borrowing", "Cell splitting"],
    answer: [1],
    explanation:
      "Channel borrowing temporarily lets an overloaded cell use an available channel from a donor cell, subject to interference constraints.",
    tip: "The overloaded cell borrows; the donor cell lends.",
  },
  {
    topic: "Channel borrowing",
    type: "multi",
    prompt:
      "In a cellular network, from where can a cell borrow additional channels? Select every valid answer.",
    options: [
      "Another sector of the same cell site",
      "Another cell in the same cluster that has free channels",
      "Another communication system such as Wi-Fi",
      "A cell in a different cluster that has free channels",
    ],
    answer: [0, 1],
    explanation:
      "Best-effort key: the supplied notes identify another sector at the same site and a cell in the same cluster as sources. The scan does not clearly establish the selected choices; actual borrowing is constrained by the frequency plan and interference rules.",
    tip: "A donor must have a compatible free channel that can be used without violating reuse constraints.",
  },
  {
    topic: "Channel assignment",
    type: "single",
    prompt:
      "In an overlapped-cells channel-assignment scheme, smaller cells are activated or deactivated according to what?",
    options: [
      "Interference",
      "Number of channels",
      "Traffic",
      "Total power consumption",
    ],
    answer: [2],
    explanation:
      "The smaller cells can be activated or deactivated in response to traffic demand.",
    tip: "Overlaid cell layers help adapt capacity to changing demand.",
  },
  {
    topic: "Frequency management",
    type: "boolean",
    prompt:
      "Frequency management and channel assignment help achieve spectrum-utilization objectives and adapt to traffic density.",
    options: ["True", "False"],
    answer: [0],
    explanation:
      "Frequency management organizes channel use, while assignment methods can adapt available channels to traffic and system requirements.",
    tip: "Good channel planning balances efficient spectrum use with changing demand.",
  },
  {
    topic: "FDD",
    type: "single",
    prompt: "What does Frequency Division Duplex (FDD) separate?",
    options: [
      "Subscribers in the same cell on the downlink",
      "Subscribers in the same cell on the uplink",
      "The uplink and downlink of the same subscriber",
      "None of the choices",
    ],
    answer: [2],
    explanation:
      "FDD uses separate frequency bands for uplink and downlink transmission by the same subscriber.",
    tip: "FDD separates communication directions by frequency.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt: "Which multiple-access technique requires precise synchronization?",
    options: ["FDMA", "TDMA", "CDMA"],
    answer: [1],
    explanation:
      "TDMA users share a carrier in assigned time slots, so transmissions must be synchronized to avoid overlap.",
    tip: "Time-slot boundaries make synchronization essential in TDMA.",
  },
  {
    topic: "Random access",
    type: "single",
    prompt:
      "A subscriber senses the medium and, if it is idle, transmits with probability p or defers with probability (1-p) until the next slot. Which protocol is this?",
    options: [
      "CSMA/CD",
      "(1-p)-persistent CSMA",
      "p-persistent CSMA",
      "CSMA/CA",
    ],
    answer: [2],
    explanation:
      "In p-persistent CSMA, a station transmits with probability p when the channel is idle and defers with probability 1-p.",
    tip: "The probability p in the protocol name is the chance of transmitting in an idle slot.",
  },
  {
    topic: "Multiple access",
    type: "single",
    prompt:
      "Packet Radio Multiple Access schemes can be which of the following?",
    options: [
      "Contention-free only",
      "Both contention-free and contention-based",
      "Contention-based only",
    ],
    answer: [1],
    explanation:
      "Packet Radio Multiple Access schemes include both contention-based and contention-free approaches.",
    tip: "Packet radio access is a family of schemes, not a single access strategy.",
  },
  {
    topic: "Multiple access",
    type: "multi",
    prompt:
      "Which statements correctly describe SDMA, TDMA, and CDMA? Select every valid answer.",
    options: [
      "SDMA separates users by their different spatial positions or directions.",
      "TDMA lets users share a frequency, assigning each a time slot.",
      "CDMA lets users share a frequency at the same time using different codes.",
    ],
    answer: [0, 1, 2],
    explanation:
      "SDMA separates spatially, TDMA separates in time, and CDMA separates users using codes on shared time and frequency resources.",
    tip: "Remember the resource dimension: space, time, or code.",
  },
  {
    topic: "Cellular generations",
    type: "multi",
    prompt:
      "Which switching technique is matched with each generation or standard? Select every correct match.",
    options: [
      "GSM — circuit switching",
      "EDGE — packet switching",
      "UMTS — circuit and packet switching",
      "LTE — packet switching",
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "The supplied matching associates GSM with circuit switching, EDGE with packet switching, UMTS with both circuit- and packet-switched services, and LTE with packet switching.",
    tip: "LTE is all-IP packet-switched; earlier generations supported circuit-switched voice.",
  },
  {
    topic: "Cellular architecture",
    type: "single",
    prompt:
      "What is the call path between two mobile stations served by different base stations but the same BSC and MSC?",
    options: [
      "MS1 → BS1 → BS2 → MS2",
      "MS1 → BS1 → BSC → BS2 → MS2",
      "MS1 → BS1 → BSC → MSC → BSC → BS2 → MS2",
      "None of the above",
    ],
    answer: [2],
    explanation:
      "The call is routed from the first mobile through its base station and the controller/core switching path to the destination base station and mobile.",
    tip: "Trace the call through the network elements connecting the two base stations.",
  },
  {
    topic: "Cellular architecture",
    type: "single",
    prompt: "In a basic cellular system, what are data links used for?",
    options: [
      "Carrying multiple-channel data from the cell site to the MTSO",
      "Serving as the air interface between the BTS and BSC",
      "Serving as an air interface between the CSE and MSU",
      "Carrying data between PSTNs",
    ],
    answer: [0],
    explanation:
      "Backhaul data links carry aggregated traffic and signaling between cell sites and the Mobile Telephone Switching Office (MTSO).",
    tip: "The radio air interface connects a mobile and base station; data links connect network infrastructure.",
  },
  {
    topic: "Cellular architecture",
    type: "boolean",
    prompt:
      "A cellular system establishes calls among mobile subscribers and provides connectivity with landline subscribers.",
    options: ["True", "False"],
    answer: [0],
    explanation:
      "Cellular networks support calls between mobile users and interconnection with the public landline telephone network.",
    tip: "The mobile network connects both its own subscribers and external telephone networks.",
  },
  {
    topic: "Random access",
    type: "single",
    prompt:
      "Which listed mechanism reserves access opportunities to help prevent potential packet collisions before data transmission?",
    options: ["Pure ALOHA", "PRMA", "Slotted ALOHA"],
    answer: [1],
    explanation:
      "Packet Reservation Multiple Access (PRMA) uses reservation opportunities to reduce contention for subsequent packet transmissions.",
    tip: "PRMA combines packet access with reservation of transmission slots.",
  },
  {
    topic: "5G",
    type: "single",
    prompt:
      "Which beam-based multiple-access technique is identified as a way to improve spectrum efficiency with massive MIMO?",
    options: ["FDMA", "TDMA", "CDMA", "BDMA"],
    answer: [3],
    explanation:
      "The supplied description refers to Beam Division Multiple Access (BDMA), which separates transmissions by spatial beams.",
    tip: "Beam-based access uses spatial separation to serve users.",
  },
  {
    topic: "FDD",
    type: "single",
    prompt: "Frequency Division Duplex (FDD) can be used in which systems?",
    options: ["TDMA systems", "All of them", "Only analog FDMA systems"],
    answer: [1],
    explanation:
      "FDD is a duplexing arrangement and can be used alongside different multiple-access methods, including TDMA.",
    tip: "Duplexing (FDD/TDD) and multiple access (FDMA/TDMA/CDMA) describe different aspects of a radio system.",
  },
  {
    topic: "AMPS",
    type: "single",
    prompt:
      "In FDMA cellular systems such as AMPS, how are voice channels used?",
    options: [
      "Only for signaling data",
      "As setup channels when needed",
      "Only for voice traffic",
    ],
    answer: [2],
    explanation:
      "In the supplied AMPS model, voice channels carry voice traffic; setup signaling uses control channels.",
    tip: "Distinguish voice channels from the dedicated control channels used for setup.",
  },
  {
    topic: "Frequency reuse",
    type: "single",
    prompt:
      "As cluster size K increases, what happens to C/I and spectrum efficiency?",
    options: [
      "C/I increases and spectrum efficiency decreases.",
      "C/I decreases and spectrum efficiency increases.",
      "Both C/I and spectrum efficiency increase.",
      "Both C/I and spectrum efficiency decrease.",
    ],
    answer: [0],
    explanation:
      "A larger cluster increases co-channel separation and typically improves C/I, but each cell receives a smaller share of the available channels, reducing spectrum efficiency.",
    tip: "Larger reuse clusters improve interference conditions at the cost of capacity per unit area.",
  },
];
