import { useState } from "react";

const curriculum = {
  intro: {
    title: "Digital Assets: A Curriculum for Policymakers",
    subtitle: "College of Europe, Bruges",
    meta: "Last updated March 2026",
    description: `This is the open-access reading list and reference curriculum for the Digital Assets course taught at the College of Europe in Bruges, Belgium.

The College of Europe was founded in 1949 by founding fathers of the European Union including Winston Churchill, Salvador de Madariaga, Paul-Henri Spaak, and Alcide De Gasperi to train the next generation of European leaders. Its alumni hold positions across the European Commission, the European Central Bank, the European Investment Bank, national governments, and regulatory bodies throughout Europe and beyond. Many are playing active roles in shaping MiCA, the Digital Euro, and other digital finance policies.

This curriculum was designed for that audience: people who will write, interpret, implement, and enforce the rules governing digital financial markets. It is not an introduction for retail investors, a technical guide for developers, or a pitch for any particular technology. It is a framework to help policymakers understand the forces (technological, economic, cultural, and political) that are reshaping financial infrastructure.

The materials deliberately include both advocates and critics. The Bullish Case for Bitcoin sits next to Bertrand Russell's critique of the gold standard. The Cypherpunk Manifesto sits next to the Markets in Crypto-Assets Regulation. The goal is not to persuade, but to equip serious people with the intellectual tools to form their own informed views and make better decisions.

The curriculum is organized in four units: the technological foundations of crypto, the emerging tokenized economy, the crowd psychology and narrative economics that drive financial markets, and the digital asset policy frameworks being built around the world. Each unit combines foundational research, books, essays, manifestos, and video resources.

I maintain and update this curriculum based on how the field evolves. It is shared here as a public good. If you find it useful, whether you are a policymaker, a researcher, a journalist, an industry executive, a student, or simply someone trying to make sense of this space, you are welcome to use it, share it, provide feedback, and build on it.`
  },
  lectureNotes: [
    { unit: "Unit 1", title: "Introduction and Crypto Fundamentals", topics: "Innovation and Technology Paradigm Shifts · Introduction to Bitcoin · Crypto and Price-Innovation Cycles · Programmable Blockchains", url: "https://drive.google.com/file/d/1JPGNpOLESBV7sRj0sNd3Dmej3_qZlFmo/view" },
    { unit: "Unit 2", title: "Tokenized Economy", topics: "Onchain Finance · Onchain Governance, DAOs & Prediction Markets · Onchain Identity, NFTs, Memecoins & AI Agents", url: "https://drive.google.com/file/d/1K1QTIPDt-HVcxFDy6eGvb5RcWsUY6SZQ/view" },
    { unit: "Unit 3", title: "Online Communities & Meme Investing", topics: "Online Subcultures & Crowd Psychology (of Money) · Narrative Economics & Meme Investing · Case Study: r/wallstreetbets vs. GameStop", url: "https://drive.google.com/file/d/1sGh4sHyyZ-16yaid9DygcH4u-2cArw1m/view" },
    { unit: "Unit 4", title: "Digital Assets Policy", topics: "Markets in Crypto-Assets in the EU and Digital Euro · Regulatory Frameworks Around the World · Geopolitics of Digital Assets · Nation States vs. Network States", url: "https://drive.google.com/file/d/1O7fsl--Er1lBYMrpm2uOgFKigISarSh6/view" }
  ],
  units: [
    {
      id: "1",
      title: "Introduction and Crypto Fundamentals",
      sections: [
        {
          title: "1.1 Innovation and Technology Paradigm Shifts",
          items: [
            { cat: "Book", title: "Read Write Own", author: "Chris Dixon (a16z)", desc: "Today startups need permission from anticompetitive gatekeepers to launch new products on the Internet. This book introduces blockchains, a new software movement that can reimagine the Internet; reclaim user ownership; and break the stranglehold big companies have on our lives.", url: "https://readwriteown.com" },
            { cat: "Book", title: "Technological Revolutions and Financial Capital", author: "Carlota Pérez", desc: "The emergence and diffusion of new techno-economic paradigms is closely connected to financial bubbles. This book describes repeated surges of technological development, and the role and behavior of capital on those, over the past three centuries.", url: "https://en.wikipedia.org/wiki/Technological_Revolutions_and_Financial_Capital" },
            { cat: "Manifesto", title: "Industrial Society and Its Future", author: "Theodore Kaczynski", desc: "Also known as the Unabomber Manifesto, this anti-technology manifesto contends that the Industrial Revolution began a harmful process of natural destruction, while forcing humans to adapt to machinery, creating a sociopolitical order that suppresses human freedom and potential.", url: "https://web.cs.ucdavis.edu/~rogaway/classes/188/materials/Industrial%20Society%20and%20Its%20Future.pdf" },
            { cat: "Essay", title: "Navigating Crypto Chaos", author: "Mikel Ayala", desc: "A brief guide to understand technology revolutions from first principles, avoid cognitive biases and outrageous predictions about the future, and survive market crashes.", url: "https://mikelayala.medium.com/navigating-crypto-chaos-dac2f2ce4e63" },
            { cat: "Essay", title: "No One Cares About Your Vision", author: "Mikel Ayala", desc: "Reflections on the \"values\" of innovators and the battle for pristine ideals in technological revolutions (and why they do not matter).", url: "https://mikelayala.medium.com/no-one-cares-about-your-vision-just-chew-glass-and-keep-shipping-faa83cc6c4b0" }
          ]
        },
        {
          title: "1.2 Introduction to Bitcoin",
          items: [
            { cat: "Paper", title: "The Byzantine Generals Problem", author: "Leslie Lamport et al. (SRI International)", desc: "This foundational paper presents how achieving consensus among the components of distributed computing systems is hard, as some components may fail or act maliciously, and introduces the concept of Byzantine faults along with algorithms to tolerate them.", url: "https://lamport.azurewebsites.net/pubs/byz.pdf" },
            { cat: "Paper", title: "Bitcoin: A Peer-to-Peer Electronic Cash System", author: "Satoshi Nakamoto", desc: "The original paper, written under the pseudonym Satoshi Nakamoto, sets the basic structure of the Bitcoin network, an electronic currency that instead of using the centralized server of a custodian institution, is structured to use many servers connected over a peer-to-peer (P2P) network.", url: "https://bitcoin.org/bitcoin.pdf" },
            { cat: "Paper", title: "Bitcoin Primer: Vires in Numeris", author: "Kraken Intelligence", desc: "A primer detailing the history and core design of Bitcoin, a discussion of scaling trends and challenges, and an overview of observed adoption across the Bitcoin network.", url: "https://kraken.docsend.com/view/ecb8q5z" },
            { cat: "Book", title: "The Bullish Case for Bitcoin", author: "Vijay Boyapati", desc: "A comprehensive introduction to Bitcoin through a historical lens on money. First published as a long-form article in 2018, and published as a book in 2021, it has become the most read non-technical introduction to Bitcoin.", url: "https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1" },
            { cat: "Book", title: "Money, Bank Credit and Economic Cycles", author: "Jesús Huerta de Soto", desc: "A treatise aimed at demolishing the case for fiat currency and central banking, that shows how these institutions have compromised economic stability, and, moreover, are intolerable in a free society, and also makes the case that money and banking should be part of the free market.", url: "https://www.mises.at/static/literatur/Buch/huerta-de-soto-money-bank-credit-and-economic-cycles.pdf" },
            { cat: "Book", title: "The Modern Midas", author: "Bertrand Russell", desc: "A radical critic of the gold standard. The central thesis is that society irrationally values gold (a metal with little intrinsic use), and that basing a currency on a finite and often unstable resource like gold artificially constrains the economy to a system that is out of sync with real human needs.", url: "https://www.swt.org/oshare/BertrandRussell/TheModernMidas.pdf" },
            { cat: "Manifesto", title: "The Crypto Anarchist Manifesto", author: "Timothy C. May", desc: "An introduction to the basic principles of crypto-anarchism, encrypted exchanges ensuring total anonymity, total freedom of speech, and total freedom to trade. Read in 1992 at the founding meeting of the cypherpunk movement.", url: "https://nakamotoinstitute.org/library/crypto-anarchist-manifesto/" },
            { cat: "Manifesto", title: "A Cypherpunk's Manifesto", author: "Eric Hughes", desc: "This piece advocates the widespread use of strong cryptography and privacy-enhancing technologies as a means of resisting state or corporate surveillance, and protecting individual autonomy, and freedom from centralized authorities.", url: "https://nakamotoinstitute.org/library/cypherpunk-manifesto/" },
            { cat: "Essay", title: "Gradually, Then Suddenly", author: "Parker Lewis", desc: "A series of articles on the subject of Bitcoin. As Hemingway penned the process of going bankrupt, the author states that it is also the way that government-backed currencies hyper-inflate and often how people come to understand Bitcoin (gradually, then suddenly).", url: "https://nakamotoinstitute.org/mempool/series/gradually-then-suddenly/" },
            { cat: "Essay", title: "Bitcoin: The Greatest Scam Never Told", author: "Jacob King (WhaleWire)", desc: "Bitcoin has been sold as the future of money (an alleged decentralized revolution free from government and central bank control), but beneath the surface a different story emerges: roots in gambling, market manipulation, hidden players, and manias propped up by smoke and mirrors.", url: "https://mail.whalewire.org/p/bitcoin-the-greatest-scam-never-told-7039" },
            { cat: "Essay", title: "Money, Blockchains and Social Scalability", author: "Nick Szabo", desc: "The key thesis is that the secret to Bitcoin's success is not its computational efficiency or its scalability in the consumption of resources, but something more valuable: social scalability, the ability of an institution to motivate or constrain who or how many can successfully participate.", url: "https://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html" },
            { cat: "Video", title: "Why Bitcoin Matters & Why You Should Care", author: "Till Musshoff", desc: "Bitcoin has a profound impact on our understanding of how the economy works and at the same time the technology behind it is an incredible achievement in the field of distributed systems. This video will give you an overview of Bitcoin from technological, economical and ethical perspectives.", url: "https://www.youtube.com/watch?v=Ai5z2T4WhWg" },
            { cat: "Video", title: "10 Years of Bitcoin: Evaluating its Performance as a Monetary System", author: "Nic Carter", desc: "A review of the first decade of Bitcoin and an assessment of its long term sustainability as a monetary system presented at the 2019 Bitcoin Expo held at the MIT.", url: "https://www.youtube.com/watch?v=AyOyNF-bCkA" },
            { cat: "Video", title: "Bitcoin Strategy", author: "Michael Saylor (MicroStrategy)", desc: "A three-minute pitch on why Microsoft should spend $100 billion a year to buy Bitcoin, delivered by MicroStrategy's Chairman & Co-founder (and maximalist Bitcoin advocate) Michael Saylor.", url: "https://www.youtube.com/watch?v=cH2t6VOdgkE" }
          ]
        },
        {
          title: "1.3 Crypto Price-Innovation Cycles",
          items: [
            { cat: "Essay", title: "The Crypto Price-Innovation Cycle", author: "Chris Dixon (a16z)", desc: "People who have been in crypto for a long time view the space as evolving in cycles, alternating between periods of high activity and \"crypto winters\". This essay explores how people first get attracted to the space and then ultimately build startups that push innovation forward.", url: "https://a16z.com/the-crypto-price-innovation-cycle/" }
          ]
        },
        {
          title: "1.4 Programmable Blockchains",
          items: [
            { cat: "Paper", title: "The Idea of Smart Contracts", author: "Nick Szabo", desc: "This brief excerpt of a more comprehensive paper on \"Formalizing and Securing Relationships on Public Networks\" first introduces the foundational concept of smart contracts: self-executing protocols that enforce the terms of an agreement and reduce the need for trusted intermediaries.", url: "https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/idea.html" },
            { cat: "Paper", title: "Ethereum Whitepaper", author: "Vitalik Buterin (Ethereum Foundation)", desc: "This paper was originally published before the project's launch in 2015. Ethereum, like many community-driven, open-source projects, has evolved since its initial inception, but this paper continues to serve as a useful reference and an accurate representation of Ethereum and its vision.", url: "https://ethereum.org/en/whitepaper/" },
            { cat: "Paper", title: "Ethereum Primer: Into the Ether", author: "Kraken Intelligence", desc: "A primer tackling the fundamentals of the Ethereum network, a discussion of key trends and challenges in Ethereum, and an overview of Ethereum 2.0 and scaling solutions.", url: "https://kraken.docsend.com/view/67nzrdf" },
            { cat: "Paper", title: "Solana Whitepaper", author: "Anatoly Yakovenko (Solana Foundation)", desc: "This paper proposes a new blockchain architecture based on Proof of History (a proof for verifying order and passage of time between events) and shows that throughput of hundreds of thousands of transactions per second is possible with today's hardware.", url: "https://solana.com/solana-whitepaper.pdf" },
            { cat: "Paper", title: "Solana Mega Report: Like Apple, but Unlike Apple", author: "Jay Jeong (Four Pillars)", desc: "A comprehensive analysis of Solana, one of the leading integrated blockchains featuring parallel processing, low fees, and fast transactions. It covers its development history, key technologies, and projects within the ecosystem.", url: "https://4pillars.io/en/articles/solana-mega-report-like-apple-but-unlike-apple-v2" },
            { cat: "Paper", title: "Defining Tokens", author: "Miles Jennings et al. (a16z)", desc: "This report provides a comprehensive framework to understand the most common types of blockchain tokens by exploring their unique characteristics, functions, and regulatory implications to help builders, consumers, and policymakers navigate the evolving token ecosystem.", url: "https://a16zcrypto.com/posts/article/defining-tokens/" },
            { cat: "Essay", title: "Credible Neutrality as a Guiding Principle", author: "Vitalik Buterin (Ethereum Foundation)", desc: "This essay explores the idea of credibly neutral mechanisms, algorithms and incentive systems that take in inputs from different parties and come up with outcomes that do not discriminate for or against any specific groups, as a guiding principle for blockchain design.", url: "https://nakamoto.com/credible-neutrality/" },
            { cat: "Essay", title: "The Solana Thesis: Internet Capital Markets", author: "Kyle Samani (Multicoin Capital)", desc: "This essay makes the case that Solana is the leading chain to power Internet Capital Markets. It argues that, as a technology, it can outperform the major financial markets and payments players.", url: "https://multicoin.capital/2025/01/22/the-solana-thesis-internet-capital-markets/" },
            { cat: "Essay", title: "Blockchains are Cities", author: "Haseeb Qureshi (Dragonfly)", desc: "This essay provides a mental model to understand the way competition between different programmable blockchains is evolving the way it is.", url: "https://medium.com/dragonfly-research/blockchains-are-cities-564327013f86" },
            { cat: "Video", title: "Ethereum in 30 Minutes", author: "Vitalik Buterin (Ethereum Foundation)", desc: "A keynote by the founder of Ethereum himself describing what Ethereum is, how it works and introduces key concepts like smart contracts, gas, fees, transactions, proof-of-stake consensus, layer two protocols or forks.", url: "https://www.youtube.com/watch?v=UihMqcj-cqc" },
            { cat: "Video", title: "How Solana Was Built", author: "Anatoly Yakovenko (Solana Foundation)", desc: "Solana co-founder shares his path from engineering to crypto, to building a new kind of blockchain. This conversation also covers the early phases of technical maturation at Solana, growing an audience of users and developers, and building during market cycles.", url: "https://www.youtube.com/watch?v=jnJkQwmZXfA" },
            { cat: "Video", title: "Internet Capital Markets", author: "Akshay BD (Solana Foundation)", desc: "Solana CMO explores how internet-native capital markets are redefining global finance, highlighting the rise of onchain ownership, the social impact of decentralized markets, and the opportunities unlocked by issuing and investing in assets directly on the internet.", url: "https://youtu.be/lait9XoFM_Q" }
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Tokenized Economy",
      sections: [
        {
          title: "2.1 Onchain Finance",
          items: [
            { cat: "Paper", title: "On Smart Contract-Based Financial Markets", author: "Fabian Schär (Federal Reserve Bank of St. Louis)", desc: "This paper explores the opportunities and risks of DeFi, a blockchain-based financial system using smart contracts to offer open, interoperable, and transparent alternatives to traditional services.", url: "https://www.stlouisfed.org/-/media/project/frbstl/stlouisfed/publications/review/pdfs/2021/04/15/decentralized-finance-on-blockchain-and-smart-contract-based-financial-markets.pdf" },
            { cat: "Paper", title: "Crypto and the Evolution of Capital Markets", author: "Tuong Vy Le & Austin Campbell (NYU Stern)", desc: "Drawing on history, this paper argues that blockchain addresses a persistent issue in traditional markets: the absence of a direct, efficient, and trustless method for asset ownership and trading.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5250986" },
            { cat: "Paper", title: "Ponzinomics", author: "Anthony Lee Zhang (University of Chicago Booth School of Business)", desc: "A lecture about tokenomics, emissions, airdrops and yield farming strategies that covers some of the historic moments of crypto: The SushiSwap Vampire Attack, The Curve Wars or Olympus DAO.", url: "https://drive.google.com/file/d/15tBzVLFRD5r0dtxC41WgWyGPECI85okR/view" },
            { cat: "Paper", title: "Uniswap Whitepaper", author: "Hayden Adams (Uniswap)", desc: "Uniswap is an onchain system of smart contracts on the Ethereum blockchain, implementing an automated market maker based on a \"constant product formula\". This technical whitepaper builds upon Uniswap v1 and explains some of the design decisions behind Uniswap v2 contracts.", url: "https://app.uniswap.org/whitepaper.pdf" },
            { cat: "Paper", title: "Curve Whitepaper: Efficient Mechanism for Stablecoin Liquidity", author: "Michael Egorov (Curve)", desc: "This paper describes a fully autonomous market-maker for stablecoins (StableSwap), that provides a mechanism to create cross-markets for stablecoins with minimal price slippage, as well as an efficient \"fiat savings account\" for liquidity providers.", url: "https://curve.fi/files/stableswap-paper.pdf" },
            { cat: "Paper", title: "Binance Exchange Whitepaper", author: "Binance", desc: "Binance is the largest crypto exchange in the world. This paper outlines their original plans and presents BNB, the native token of the exchange, ahead of its initial coin offering (ICO).", url: "https://www.exodus.com/assets/docs/binance-coin-whitepaper.pdf" },
            { cat: "Paper", title: "Aave Protocol Whitepaper", author: "Aave", desc: "This paper introduces Aave, a decentralized protocol that enables lenders to provide liquidity by depositing crypto assets in a pool contract, while the pooled funds can be borrowed by placing a collateral.", url: "https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf" },
            { cat: "Paper", title: "Compound Whitepaper: The Money Market Protocol", author: "Compound", desc: "This paper introduces a decentralized protocol which establishes money markets with algorithmically set interest rates based on supply and demand, allowing users to exchange the time value of digital assets.", url: "https://compound.finance/documents/Compound.Whitepaper.pdf" },
            { cat: "Paper", title: "Tether Whitepaper: Fiat Currencies on the Blockchain", author: "Tether", desc: "The innovation of blockchains is an auditable and cryptographically secured global ledger. Asset-backed token issuers can take advantage of blockchain technology, along with embedded consensus systems, to transact in familiar, less volatile currencies and assets.", url: "https://assets.ctfassets.net/vyse88cgwfbl/5UWgHMvz071t2Cq5yTw5vi/c9798ea8db99311bf90ebe0810938b01/TetherWhitePaper.pdf" },
            { cat: "Paper", title: "Dai Whitepaper: The Dai Stablecoin System", author: "MakerDAO", desc: "MakerDAO (now Sky Money) is a smart contract platform that backs and stabilizes the value of Dai (now USDS) through a dynamic system of collateralized debt positions, autonomous feedback mechanisms, and appropriately incentivized external actors.", url: "https://makerdao.com/en/whitepaper/sai/" },
            { cat: "Essay", title: "Protocols as Minimally Extractive Coordinators", author: "Chris Burniske (Placeholder)", desc: "Protocols provide structure for businesses, but are not businesses themselves; they are systems of logic that coordinate exchange between suppliers and consumers of a service. The less extractive a protocol is in coordinating exchange, the more that form of exchange will happen.", url: "https://www.placeholder.vc/blog/2019/10/6/protocols-as-minimally-extractive-coordinators" },
            { cat: "Essay", title: "The Casino on Mars", author: "Matt Huang (Paradigm)", desc: "This essay argues that, despite its speculative and chaotic beginnings, crypto represents a foundational opportunity to build a more open, inclusive, and decentralized financial and digital system (if we are willing to look past the noise and focus on its long-term potential).", url: "https://www.paradigm.xyz/2023/09/casino-on-mars" },
            { cat: "Essay", title: "Degens are Pioneers", author: "Qiao Wang (Alliance DAO)", desc: "This essay argues that the often criticized speculation is not just inevitable but essential to building a more open financial system. Far from being a moral failing, 'degen' behavior represents early adoption, stress-testing infrastructure, and bootstrapping real-world use cases.", url: "https://alliance.xyz/essays/degens-are-pioneers" },
            { cat: "Essay", title: "Is Crypto Dead?", author: "Mikel Ayala", desc: "Crypto is a start-up industry seeking to boost its traction. This essay argues that there are clear signs of product-market fit, and that crypto provides fundamental utility and a vast improvement over legacy solutions, in very specific dimensions and for precise use cases.", url: "https://medium.datadriveninvestor.com/is-crypto-dead-bfddbfc8dde1" },
            { cat: "Essay", title: "Liquid Venture Investing in Crypto", author: "Arthur0x (Defiance Capital)", desc: "Unlike traditional markets, early stage projects have their tokens publicly listed, and given the nascent nature of this asset class, there is still no universally agreed upon valuation framework. There are perhaps no other frontier markets that are as interesting to investors than crypto.", url: "https://writing.defiance.capital/liquid-venture-investing-in-crypto-59190f1514f2" },
            { cat: "Essay", title: "Stablecoins: Payments without Intermediaries", author: "Chris Dixon (a16z)", desc: "Stablecoins represent a transformative opportunity to rebuild the global financial system for the internet age by replacing today's costly, fragmented infrastructure with open, blockchain-based protocols that make money movement instant, borderless, and nearly free.", url: "https://a16zcrypto.com/posts/article/stablecoins-payments-without-intermediaries/" }
          ]
        },
        {
          title: "2.2 Onchain Governance",
          items: [
            { cat: "Paper", title: "A Flexible Design for Funding Public Goods", author: "Vitalik Buterin (Ethereum Foundation)", desc: "This paper proposes a design for philanthropic or publicly-funded seeding to allow optimal provision of a decentralized, self-organizing ecosystem of public goods. The concept extends ideas from Quadratic Voting to a funding mechanism for community formation.", url: "https://scholar.harvard.edu/files/hitzig/files/buterin_hitzig_weyl_draft.pdf" },
            { cat: "Paper", title: "DAOs: An Incomplete Terminology Guide", author: "Vitalik Buterin (Ethereum Foundation)", desc: "What exactly is a decentralized organization, and what even makes something autonomous in the first place? The intent of this article is to delve into some of these concepts, and see if we can come up with at least the beginnings of a coherent understanding of what all of these things actually are.", url: "https://blog.ethereum.org/2014/05/06/daos-dacs-das-and-more-an-incomplete-terminology-guide" },
            { cat: "Manifesto", title: "Futarchy: Vote on Values, But Bet on Beliefs", author: "Robin Hanson (George Mason University)", desc: "This manifesto proposes the concept of futarchy, a governance model where societies vote to set shared goals but then choose policies that are expected to best achieve those goals, based on prices formed by betting on prediction markets.", url: "https://mason.gmu.edu/~rhanson/futarchy.html" },
            { cat: "Essay", title: "Blockchain Governance: Programming Our Future", author: "Fred Ehrsam (Paradigm)", desc: "This essay describes why blockchain governance design is one of the most important problems out there, its critical components, current approaches, potential future approaches, and suggestions for the community.", url: "https://www.fehrsam.xyz/blog/blockchain-governance-programming-our-future" },
            { cat: "Essay", title: "Coordination, Good and Bad", author: "Vitalik Buterin (Ethereum Foundation)", desc: "Coordination, the ability for large groups of actors to work together for their common interest, is one of the most powerful forces in the universe. Building an effective social system is, in large part, determining the structure of coordination. This essay explores possible coordination techniques.", url: "https://vitalik.eth.limo/general/2020/09/11/coordination.html" },
            { cat: "Essay", title: "Governance Minimization", author: "Fred Ehrsam (Paradigm)", desc: "Governance minimization means reducing the power and reliance on governance wherever possible, and allows stakeholders to depend on a protocol. This essay explains governance minimization and argues that the most widely used protocols will trend towards it.", url: "https://www.fehrsam.xyz/blog/governance-minimization" },
            { cat: "Essay", title: "Cryptonetwork Governance as Capital", author: "Joel Monegro (Placeholder)", desc: "Capital is, in essence, the power to organize the economic resources of a social system, and it is worth a function of how much of those resources can be directed to the holder's benefit. This insight helps us understand tokens with governance rights as new kinds of capital assets.", url: "https://www.placeholder.vc/blog/2019/2/19/cryptonetwork-governance-as-capital" }
          ]
        },
        {
          title: "2.3 Onchain Identity",
          items: [
            { cat: "Paper", title: "Decentralized Society: Finding Web3's Soul", author: "Vitalik Buterin (Ethereum Foundation)", desc: "Web3 centers around transferable assets, rather than encoding relationships of trust. Yet many core economic activities are built on persistent, non-transferable relationships. This paper illustrates how tokens can encode the trust networks of the real economy to establish reputation.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763" },
            { cat: "Essay", title: "Shelling Out: The Origins of Money", author: "Nick Szabo", desc: "This essay argues that money emerged organically as a trust-minimizing tool for social coordination, evolving from collectible objects used in prehistoric gift economies to more abstract forms, driven by human instincts for reciprocity, reputation, and risk reduction.", url: "https://nakamotoinstitute.org/library/shelling-out/" },
            { cat: "Essay", title: "Views on NFTs", author: "punk6529", desc: "This thread (of threads) synthesizes the views of one of the most active advocates of NFTs, and explores a wide variety of issues ranging from what NFTs are, decentralization, property rights, freedom of speech, institutional adoption or the state of crypto in Europe vs. the USA.", url: "https://x.com/punk6529/status/1429399888786333697" },
            { cat: "Essay", title: "Dog Coins, Cat Videos and Disruption", author: "Mikel Ayala", desc: "Memecoins have been making headlines for years. Their explosive growth (and dramatic busts) have earned them both the hostility of those who call them out as Ponzi schemes and irrational bubbles, and the unconditional love of degenerate gamblers. What is all this about?", url: "https://medium.datadriveninvestor.com/dog-coins-cat-videos-and-disruption-79cfa4ff69c0" },
            { cat: "Essay", title: "Crypto Was Not Made for Humans", author: "Haseeb Qureshi (Dragonfly)", desc: "This post argues that crypto never replaced legal contracts for humans because it was not built for us. Crypto was built for machines that prefer deterministic code over messy courts, and will be the native financial system of the agentic economy.", url: "https://x.com/hosseeb/status/2024136762424185208" },
            { cat: "Video", title: "The Memecoin Supercycle", author: "Murad Mahmudov", desc: "Memecoins are evolving from internet jokes into dominant, community-driven financial assets, fueled by cultural resonance and collective belief rather than traditional technological utility.", url: "https://www.youtube.com/watch?v=6nqzwdGxTGc" },
            { cat: "Video", title: "Where NFTs are Going", author: "Luca Netz", desc: "The CEO of Pudgy Penguins NFT collection shares his views on where NFTs are going and his playbook for successfully launching and leveraging NFT communities.", url: "https://x.com/Breezeonhodl/status/1934286964762579256" }
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Online Communities & Meme Investing",
      sections: [
        {
          title: "3. Online Communities & Meme Investing",
          items: [
            { cat: "Paper", title: "The Research Behavior of Individual Investors", author: "Toomas Laarits & Jeffrey Wurgler (NBER)", desc: "This working paper offers a detailed account of how individual investors search for information and make trading decisions, i.e. a very short research process spent mostly on reviewing price charts and analyst opinions, and very little interest in traditional risk statistics.", url: "https://www.nber.org/papers/w33625" },
            { cat: "Book", title: "Narrative Economics", author: "Robert J. Shiller (Yale University)", desc: "Nobel laureate Robert J. Shiller argues that popular stories (such as those about housing booms, cryptocurrency, or financial crises) spread like epidemics and significantly influence economic behavior and outcomes, often more than traditional economic indicators.", url: "https://press.princeton.edu/books/hardcover/9780691182292/narrative-economics" },
            { cat: "Book", title: "The Psychology of Money", author: "Morgan Housel (The Collaborative Fund)", desc: "This book explores how individual psychological factors, like personal experiences, emotions, and acquired behaviors influence financial decision-making and long-term financial well-being.", url: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681" },
            { cat: "Essay", title: "Geeks, MOPs and Sociopaths in Subculture Evolution", author: "David Chapman (MIT AI Lab)", desc: "A brief analysis of subculture dynamics. According to the author, subcultures have a predictable life cycle, in which popularity causes death. The pattern described provides a very useful framework to assess any given online or offline subculture and their participants.", url: "https://meaningness.com/geeks-mops-sociopaths" },
            { cat: "Essay", title: "Meme Investing", author: "Fred Wilson (Union Square Ventures)", desc: "Meme investing, once easily dismissed as irrational speculation, has proven to be a powerful force fueled by online communities and cultural momentum, with the potential to reshape markets and even corporate strategy (despite lacking traditional fundamentals).", url: "https://avc.com/2021/06/meme-investing/" },
            { cat: "Essay", title: "Memetic Investment Tribes", author: "Mikel Ayala", desc: "Online communities coalesce around shared memes, narratives and beliefs, forming influential groups that drive investment decisions and market movements. These digital tribes challenge traditional financial paradigms by leveraging collective culture to influence economic outcomes.", url: "https://mikelayala.medium.com/memetic-investment-tribes-aae743f98a6c" }
          ]
        }
      ]
    },
    {
      id: "4",
      title: "Digital Assets Policy",
      sections: [
        {
          title: "4. Digital Assets Policy",
          items: [
            { cat: "Regulation", title: "Markets in Crypto-Assets (MiCA)", author: "European Commission", desc: "A comprehensive regulatory framework for digital assets and related services aiming to ensure that financial services in the European Union are fit for the digital age.", url: "https://finance.ec.europa.eu/digital-finance/crypto-assets_en" },
            { cat: "Regulation", title: "Digital Euro", author: "European Central Bank", desc: "The ECB is working with the national central banks of the euro area to look into the possible issuance of a digital euro, a central bank digital currency (CBDC) equivalent to cash.", url: "https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html" },
            { cat: "Regulation", title: "Strengthening American Leadership in Digital Financial Technology", author: "US President Trump", desc: "This Executive Order promotes digital assets and blockchain technology in the USA, prohibiting the issuance of CBDCs, revoking prior policies, and pushing for new regulatory frameworks.", url: "https://www.whitehouse.gov/presidential-actions/2025/01/strengthening-american-leadership-in-digital-financial-technology/" },
            { cat: "Regulation", title: "Establishment of the Strategic Bitcoin Reserve", author: "US President Trump", desc: "This Executive Order creates a strategic reserve that will treat Bitcoin as a reserve asset, and a Digital Asset Stockpile to position the United States as a global leader in digital assets.", url: "https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/" },
            { cat: "Regulation", title: "DeFi and the American Spirit", author: "SEC Chairman Paul Atkins", desc: "This speech states that current regulations focused on intermediaries do not contemplate self-executing software, and asks for an \"innovation exemption\" framework for onchain products.", url: "https://x.com/SECGov/status/1932137708068970924" },
            { cat: "Regulation", title: "Guiding and Establishing National Innovation for U.S. Stablecoins Act", author: "US Senator Bill Hagerty", desc: "The GENIUS Act sets rules for stablecoin issuers in the US, and is the first major digital assets bill to ever be cleared by the US Senate (by an overwhelming bipartisan vote).", url: "https://www.congress.gov/bill/119th-congress/senate-bill/1582/text" },
            { cat: "Regulation", title: "Statement on Tokenized Securities", author: "US Securities and Exchange Commission", desc: "This statement clarifies that tokenized securities are securities under federal law, with regulatory treatment depending on whether they represent direct ownership, or synthetic exposure.", url: "https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826" },
            { cat: "Regulation", title: "Regulations & Guidelines", author: "Dubai's Virtual Assets Regulatory Authority", desc: "VARA is the world's first, tailor-made digital asset regime, and it sets out a comprehensive framework built on principles of economic sustainability and cross-border financial security.", url: "https://rulebooks.vara.ae" },
            { cat: "Paper", title: "Policy Briefs", author: "Crypto Council for Innovation", desc: "A collection of analysis of crypto policies around the world and recommendations to shape informed and forward thinking policies.", url: "https://cryptoforinnovation.org/policy-briefs/" },
            { cat: "Book", title: "The Network State", author: "Balaji Srinivasan", desc: "Technology has enabled us to start new companies, new communities, and new currencies. We can also use it to start new cities, or even new countries. This book explains how to build network states, the successors to the nation state.", url: "https://thenetworkstate.com" },
            { cat: "Essay", title: "The Digital Euro and the Structural Reform of Money and Banking", author: "Miguel Fernández Ordóñez", desc: "Notes by the former Governor of the Bank of Spain for a public hearing at the European Parliament, arguing that the Digital Euro can both provide a single digital currency for the Eurozone, open up payments and credit markets to competition, prevent banking crises, and improve monetary policy.", url: "https://www.europarl.europa.eu/cmsdata/279073/2.%20Miguel%20FERNANDEZ%20ORDONEZ%20-%20Introductory%20statement.pdf" },
            { cat: "Essay", title: "Global Leader or Financial Colony? Europe Must Choose", author: "Martin Bruncko (Schuman Financial)", desc: "The former Minister of Innovation of Slovakia argues that the future of finance is moving onchain and, currently, that system is dollar-dominated due to US-backed stablecoin innovation, leaving Europe at a crossroads: embrace private sector-led stablecoins or face financial irrelevance.", url: "https://medium.com/@Schuman_Financial/global-leader-or-financial-colony-europe-must-choose-14054f7cce20" },
            { cat: "Video", title: "Crypto Regulation: A Principles-Based Approach", author: "Can Sun (Backpack Exchange)", desc: "Keynote speech delivered by the co-founder of Backpack and renowned crypto lawyer (co-founded the Blockchain Practice Group at Fenwick & West) where he discusses crypto regulation and the power of Web3 to mitigate many of the risks of traditional financial institutions.", url: "https://www.youtube.com/watch?v=0GzsuRa7x1o" }
          ]
        }
      ]
    }
  ],
  tools: {
    marketData: [
      { n: "CoinGecko", u: "https://www.coingecko.com" },
      { n: "CoinMarketCap", u: "https://coinmarketcap.com" },
      { n: "Birdeye", u: "https://www.birdeye.so" },
      { n: "Arkham Intel", u: "https://intel.arkm.com" },
      { n: "Messari", u: "https://messari.io" }
    ],
    onchain: [
      { n: "The Block", u: "https://www.theblock.co/data/crypto-markets/spot" },
      { n: "Token Terminal", u: "https://tokenterminal.com/explorer" },
      { n: "DefiLlama", u: "https://defillama.com" },
      { n: "Velo", u: "https://velo.xyz" },
      { n: "Electric Capital", u: "https://www.developerreport.com/developer-report" },
      { n: "CBDC Tracker", u: "https://www.atlanticcouncil.org/cbdctracker/" }
    ],
    explorers: [
      { n: "Etherscan", u: "https://etherscan.io" },
      { n: "Solscan", u: "https://solscan.io" }
    ],
    learn: [
      { n: "Crypto Canon (a16z)", u: "https://a16zcrypto.com/posts/article/crypto-readings-resources/" },
      { n: "State of Crypto (a16z)", u: "https://a16zcrypto.com/posts/series/state-of-crypto/" },
      { n: "Bitcoin Literature", u: "https://nakamotoinstitute.org/library/" },
      { n: "Vitalik Buterin", u: "https://vitalik.eth.limo" },
      { n: "Bitcoin Vocabulary", u: "https://bitcoin.org/en/vocabulary" },
      { n: "Ethereum Learn", u: "https://ethereum.org/en/learn/" },
      { n: "Backpack Learn", u: "https://learn.backpack.exchange" },
      { n: "Binance Academy", u: "https://academy.binance.com/en" }
    ],
    podcasts: [
      { n: "The Chopping Block", u: "https://unchainedcrypto.com/the-chopping-block/" },
      { n: "Good Game", u: "https://www.youtube.com/@goodgamepod" },
      { n: "Empire", u: "https://blockworks.co/podcast/empire" }
    ]
  }
};

const catColors = {
  Paper: { bg: "#f0f4f8", text: "#3d5a80", border: "#c1d3e0" },
  Book: { bg: "#faf3eb", text: "#8b6914", border: "#e0d0a8" },
  Essay: { bg: "#f0f7f0", text: "#3a6b35", border: "#b8d4b0" },
  Manifesto: { bg: "#f5f0f7", text: "#6b3a6b", border: "#ccb8d4" },
  Video: { bg: "#faf0f0", text: "#8b3a3a", border: "#d4b0b0" },
  Regulation: { bg: "#f0f3fa", text: "#3a4a8b", border: "#b0b8d4" }
};

function Tag({ cat }) {
  const c = catColors[cat] || catColors.Essay;
  return (
    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: c.text, background: c.bg, border: `1px solid ${c.border}`, borderRadius: 4, padding: "2px 8px", whiteSpace: "nowrap" }}>{cat}</span>
  );
}

function ReadingItem({ item }) {
  return (
    <div style={{ padding: "16px 0", borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
        <Tag cat={item.cat} />
        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 15, textDecoration: "none", lineHeight: 1.3 }}>{item.title}</a>
      </div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4, fontWeight: 500 }}>{item.author}</div>
      <div style={{ fontSize: 14, color: "var(--text-tertiary)", lineHeight: 1.5 }}>{item.desc}</div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [expandedUnit, setExpandedUnit] = useState(null);

  const st = {
    "--bg": "#fafaf8",
    "--bg-card": "#ffffff",
    "--text-primary": "#1a1a1a",
    "--text-secondary": "#4a4a4a",
    "--text-tertiary": "#6a6a6a",
    "--border-color": "#e8e6e2",
    "--accent": "#2c3e50",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "var(--text-primary)",
    background: "var(--bg)",
    minHeight: "100vh",
    maxWidth: 720,
    margin: "0 auto",
    padding: "40px 24px"
  };

  const nav = (
    <nav style={{ display: "flex", gap: 24, marginBottom: 48, paddingBottom: 16, borderBottom: "2px solid var(--text-primary)" }}>
      <span onClick={() => { setPage("home"); setExpandedUnit(null); }} style={{ cursor: "pointer", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", color: page === "home" ? "var(--text-primary)" : "var(--text-tertiary)" }}>Home</span>
      <span onClick={() => { setPage("curriculum"); setExpandedUnit(null); }} style={{ cursor: "pointer", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", color: page === "curriculum" ? "var(--text-primary)" : "var(--text-tertiary)" }}>Curriculum</span>
    </nav>
  );

  if (page === "home") {
    return (
      <div style={st}>
        {nav}
        <h1 style={{ fontSize: 36, fontWeight: 400, marginBottom: 8, lineHeight: 1.2 }}>Mikel Ayala</h1>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 40, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
          General Manager for Europe at <a href="https://backpack.exchange" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)" }}>Backpack</a>, a regulated digital assets exchange and self-custodial wallet. Visiting Professor of Digital Assets at the <a href="https://www.coleurope.eu" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)" }}>College of Europe</a> in Bruges. Ambassador of the <a href="https://solana.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)" }}>Solana Foundation</a>.
        </p>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 16, color: "var(--text-secondary)" }}>About</h2>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-secondary)", fontFamily: "system-ui, sans-serif" }}>
            <p style={{ marginBottom: 16 }}>I build, scale, and operate technology-driven financial businesses in regulated markets.</p>
            <p style={{ marginBottom: 16 }}>Currently leading Backpack's expansion into Europe, from pre-launch to live operations across the European Economic Area under MiFID II and more. Previously, I built and scaled distribution for Atani, a regulated European virtual assets service provider. Earlier, I led transformation programs and digital business building initiatives for global financial institutions as a Managing Director at The Cocktail (WPP) and as a strategy consultant at Boston Consulting Group.</p>
            <p>At the College of Europe, I introduce future European policymakers and regulators to digital assets, programmable blockchains, decentralized finance, tokenization, and global crypto policy frameworks. The full curriculum is <span onClick={() => setPage("curriculum")} style={{ textDecoration: "underline", cursor: "pointer", color: "var(--text-primary)" }}>available as a public resource</span>.</p>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 16, color: "var(--text-secondary)" }}>Selected Writing</h2>
          {[
            { t: "No One Cares About Your Vision", u: "https://mikelayala.medium.com/no-one-cares-about-your-vision-just-chew-glass-and-keep-shipping-faa83cc6c4b0" },
            { t: "Navigating Crypto Chaos", u: "https://mikelayala.medium.com/navigating-crypto-chaos-dac2f2ce4e63" },
            { t: "Is Crypto Dead?", u: "https://medium.datadriveninvestor.com/is-crypto-dead-bfddbfc8dde1" },
            { t: "Memetic Investment Tribes", u: "https://mikelayala.medium.com/memetic-investment-tribes-aae743f98a6c" },
            { t: "Dog Coins, Cat Videos and Disruption", u: "https://medium.datadriveninvestor.com/dog-coins-cat-videos-and-disruption-79cfa4ff69c0" }
          ].map((e, i) => (
            <a key={i} href={e.u} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "12px 0", borderBottom: "1px solid var(--border-color)", color: "var(--text-primary)", textDecoration: "none", fontSize: 16 }}>
              {e.t} <span style={{ color: "var(--text-tertiary)", fontSize: 14 }}>→</span>
            </a>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 16, color: "var(--text-secondary)" }}>Contact</h2>
          <div style={{ fontSize: 15, lineHeight: 2, fontFamily: "system-ui, sans-serif", color: "var(--text-secondary)" }}>
            <a href="https://www.linkedin.com/in/mikel-ayala/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>LinkedIn</a>{" · "}
            <a href="https://x.com/_mikel" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>X</a>{" · "}
            <a href="https://t.me/mikelayala" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>Telegram</a>{" · "}
            <a href="https://calendly.com/mikel-backpack" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>Book a call</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={st}>
      {nav}
      <h1 style={{ fontSize: 32, fontWeight: 400, marginBottom: 4, lineHeight: 1.2 }}>{curriculum.intro.title}</h1>
      <p style={{ fontSize: 15, color: "var(--text-tertiary)", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>{curriculum.intro.subtitle}</p>
      <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 36, fontFamily: "system-ui, sans-serif" }}>{curriculum.intro.meta}</p>

      <div style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 48, fontFamily: "system-ui, sans-serif", whiteSpace: "pre-line" }}>
        {curriculum.intro.description}
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 20, color: "var(--text-secondary)" }}>Lecture Notes</h2>
        {curriculum.lectureNotes.map((ln, i) => (
          <a key={i} href={ln.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "16px 0", borderBottom: "1px solid var(--border-color)", textDecoration: "none" }}>
            <div style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "system-ui, sans-serif", fontWeight: 600, marginBottom: 4 }}>{ln.unit}</div>
            <div style={{ fontSize: 16, color: "var(--text-primary)", fontWeight: 600, marginBottom: 4 }}>{ln.title}</div>
            <div style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "system-ui, sans-serif" }}>{ln.topics}</div>
          </a>
        ))}
      </div>

      <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 20, color: "var(--text-secondary)" }}>Reading List</h2>

      {curriculum.units.map(unit => (
        <div key={unit.id} style={{ marginBottom: 32 }}>
          <div
            onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
            style={{ cursor: "pointer", padding: "16px 0", borderBottom: "2px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 400, margin: 0 }}>{unit.id}. {unit.title}</h3>
            <span style={{ fontSize: 14, color: "var(--text-tertiary)", fontFamily: "system-ui, sans-serif", flexShrink: 0, marginLeft: 16 }}>
              {unit.sections.reduce((a, s) => a + s.items.length, 0)} readings {expandedUnit === unit.id ? "▾" : "▸"}
            </span>
          </div>
          {expandedUnit === unit.id && (
            <div style={{ paddingTop: 8 }}>
              {unit.sections.map((sec, si) => (
                <div key={si} style={{ marginBottom: 24 }}>
                  {unit.sections.length > 1 && (
                    <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", color: "var(--text-tertiary)", marginTop: 24, marginBottom: 8 }}>{sec.title}</h4>
                  )}
                  {sec.items.map((item, ii) => <ReadingItem key={ii} item={item} />)}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div style={{ marginTop: 48, marginBottom: 48 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", marginBottom: 20, color: "var(--text-secondary)" }}>Tools & Reference Links</h2>
        {[
          { label: "Market Data", items: curriculum.tools.marketData },
          { label: "Financial Data & Onchain Activity", items: curriculum.tools.onchain },
          { label: "Blockchain Explorers", items: curriculum.tools.explorers },
          { label: "Learning & Libraries", items: curriculum.tools.learn },
          { label: "Podcasts", items: curriculum.tools.podcasts }
        ].map((group, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", fontFamily: "system-ui, sans-serif" }}>{group.label}: </span>
            <span style={{ fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
              {group.items.map((t, j) => (
                <span key={j}>
                  <a href={t.u} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>{t.n}</a>
                  {j < group.items.length - 1 && <span style={{ color: "var(--text-tertiary)" }}> · </span>}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "2px solid var(--border-color)", paddingTop: 24, marginTop: 32 }}>
        <p style={{ fontSize: 14, color: "var(--text-tertiary)", fontFamily: "system-ui, sans-serif", lineHeight: 1.7 }}>
          <strong style={{ color: "var(--text-secondary)" }}>Mikel Ayala</strong> — Visiting Professor, College of Europe · General Manager Europe, Backpack
        </p>
        <div style={{ fontSize: 14, fontFamily: "system-ui, sans-serif", marginTop: 8 }}>
          <a href="https://www.linkedin.com/in/mikel-ayala/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>LinkedIn</a>{" · "}
          <a href="https://x.com/_mikel" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>X</a>{" · "}
          <a href="https://t.me/mikelayala" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>Telegram</a>{" · "}
          <a href="https://calendly.com/mikel-backpack" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>Book a call</a>
        </div>
      </div>
    </div>
  );
}