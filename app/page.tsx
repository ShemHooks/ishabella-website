"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Wind,
  Sun,
  Truck,
  Settings2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
const history = [
  [
    "2015",
    "The beginning",
    "Home-based HVACR supply and mobile retail service in Batangas and Laguna.",
  ],
  [
    "2017",
    "Regional expansion",
    "Operations expanded into Cavite and Bulacan, with a Bacolod partnership.",
  ],
  [
    "2020",
    "A new identity",
    "Ishabella Aircon and Refrigeration Parts Trading succeeded JCAR.",
  ],
  ["2021", "PILI-Aire", "A new partner branch in San Pedro, Laguna."],
  ["2022", "Aton Aire", "A branch opened in Bacoor, Cavite."],
  ["2023", "Daikin dealer", "Ishabella became an authorized Daikin dealer."],
  [
    "2025",
    "Solar partnerships",
    "Sunnix Energy and Yinergy partnerships expanded energy offerings.",
  ],
];

const services = [
  {
    name: "HVACR Parts & Supplies",
    icon: Wind,
    desc: "Air-conditioning and refrigeration components.",
    image: "/images/services/hvacr.png",
  },
  {
    name: "Solar Energy Solutions",
    icon: Sun,
    desc: "Energy storage, batteries and solar inverters.",
    image: "/images/services/solar.png",
  },
  {
    name: "Automotive A/C Parts",
    icon: Settings2,
    desc: "Parts distributed to automotive professionals nationwide.",
    image: "/images/services/automotive.png",
  },
  {
    name: "Installation & Service",
    icon: Truck,
    desc: "A/C installation, cleaning and delivery support.",
    image: "/images/services/installation.png",
  },
];

const brands = [
  "Sunnix Energy",
  "Yinergy",
  "Daikin",
  "Hailiang",
  "Eufron",
  "Solfron",
  "STAL",
  "Insulflex",
  "M-Flex",
];
export default function Home() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from(".hero-enter", {
          opacity: 0,
          y: 50,
          stagger: 0.14,
          duration: 1,
          ease: "power3.out",
        });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            opacity: 0,
            y: 35,
            duration: 0.8,
          }),
        );
      });
      cleanup = () => ctx.revert();
    })();
    return () => cleanup();
  }, []);

  const marqueeWords = [
    "HVACR SUPPLIES",
    "SOLAR ENERGY",
    "REFRIGERATION",
    "AIR CONDITIONING",
    "ENERGY STORAGE",
  ];
  return (
    <main>
      <header>
        <a className="logo" href="#home">
          <Image src="/logo.png" alt="Ishabella Corp" width={54} height={54} />
          <strong>
            ISHABELLA <small>CORP.</small>
          </strong>
        </a>
        <nav className={menu ? "open" : ""}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Our Story", "#story"],
            ["Solutions", "#solutions"],
            ["Brands", "#brands"],
          ].map(([t, h]) => (
            <a key={h} href={h} onClick={() => setMenu(false)}>
              {t}
            </a>
          ))}
        </nav>
        <a className="top-contact" href="#contact">
          Let's Talk <ArrowUpRight size={18} />
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <section className="hero" id="home">
        <div className="hero-bg">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/ishabella-solar-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content">
          <div className="kicker hero-enter">ISHABELLA CORP. / PHILIPPINES</div>
          <h1 className="hero-enter">
            POWERING
            <br />
            <em>WHAT MATTERS.</em>
          </h1>
          <p className="hero-enter">
            From essential cooling systems to tomorrow's energy solutions. Built
            on reliability. Driven by progress.
          </p>
          <div className="hero-buttons hero-enter">
            <a className="btn solid" href="#solutions">
              Explore solutions <ArrowUpRight />
            </a>
            <a className="btn ghost" href="#about">
              Discover Ishabella <ArrowDown />
            </a>
          </div>
        </div>
        <div className="hero-caption">EST. 2015 — HVACR & SOLAR SOLUTIONS</div>
      </section>
      <div className="marquee" aria-label={marqueeWords.join(", ")}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden="true">
              {marqueeWords.map((word) => (
                <span className="marquee-item" key={word}>
                  {word}
                  <span className="marquee-star">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section about" id="about">
        <div className="about-background" aria-hidden="true" />

        <div className="about-content">
          <div className="section-label reveal">01 / WHO WE ARE</div>

          <div className="split">
            <h2 className="reveal">
              DEPENDABLE
              <br />
              <em>BY DESIGN.</em>
            </h2>

            <div className="reveal">
              <p>
                Since 2015, Ishabella has grown from a home-based HVACR supply
                business into a provider of air-conditioning, refrigeration and
                energy solutions.
              </p>

              <p>
                Our foundation is practical expertise, strong partnerships and
                dependable service.
              </p>

              <a className="underlink" href="#story">
                Explore our story <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="metrics reveal">
            <div>
              <b>2015</b>
              <span>OUR BEGINNING</span>
            </div>

            <div>
              <b>HVACR</b>
              <span>OUR FOUNDATION</span>
            </div>

            <div>
              <b>SOLAR</b>
              <span>OUR NEXT CHAPTER</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section story" id="story">
        <div className="section-label reveal">02 / OUR JOURNEY</div>
        <h2 className="reveal">
          ROOTED IN EXPERIENCE.
          <br />
          <em>GROWING WITH PURPOSE.</em>
        </h2>
        <div className="timeline">
          {history.map(([year, title, desc], i) => (
            <div className="timeline-row reveal" key={year}>
              <strong>{year}</strong>
              <span className="dot" />
              <div>
                <small>0{i + 1}</small>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowUpRight size={20} />
            </div>
          ))}
        </div>
      </section>
      <section className="section solutions" id="solutions">
        <div className="section-label reveal">03 / WHAT WE DO</div>
        <h2 className="reveal">
          SOLUTIONS THAT
          <br />
          <em>MOVE YOU FORWARD.</em>
        </h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.name}>
              <div
                className="service-card-image"
                style={{
                  backgroundImage: `url("${service.image}")`,
                }}
              />

              <div className="service-card-overlay" />

              <div className="service-top">
                <service.icon size={36} strokeWidth={1.5} />
                <span>0{index + 1}</span>
              </div>

              <div className="service-bottom">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commitment">
        <div className="commitment-background" aria-hidden="true" />

        <div className="commitment-content">
          <div className="commitment-label reveal">OUR COMMITMENT</div>

          <h2 className="reveal">
            RELIABILITY ISN'T
            <br />
            A PROMISE.
            <br />
            <em>IT'S OUR PRACTICE.</em>
          </h2>
        </div>
      </section>

      <section className="section brands" id="brands">
        <div className="section-label reveal">04 / OUR NETWORK</div>
        <h2 className="reveal">
          STRONGER
          <br />
          <em>TOGETHER.</em>
        </h2>
        <p className="section-sub reveal">
          Brands represented in the company profile.
        </p>

        <div className="brands-grid">
          {[
            "Sunnix Energy",
            "Yinergy",
            "Daikin",
            "Hailiang",
            "Eufron",
            "Solfron",
            "STAL",
            "Insulflex",
            "M-Flex",
          ].map((brand, index) => (
            <div className="brand-reveal reveal" key={brand}>
              <div className="brand-card">
                <span className="brand-card-name">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section contact" id="contact">
        <div className="section-label reveal">05 / CONTACT</div>
        <div className="split">
          <div className="reveal">
            <h2>
              LET'S TALK
              <br />
              <em>POSSIBILITIES.</em>
            </h2>
            <p>Find the right products and solutions for your next project.</p>
            <a className="btn solid" href="mailto:ishabella2020@gmail.com">
              Send an inquiry <ArrowUpRight />
            </a>
          </div>
          <div className="contact-details reveal">
            <div>
              <MapPin />
              #78 Main Avenue, Socorro, Cubao, Quezon City, Philippines
            </div>
            <div>
              <Phone />
              <a href="tel:+639665212881">0966 521 2881</a>
            </div>
            <div>
              <Mail />
              <a href="mailto:ishabella2020@gmail.com">
                ishabella2020@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <b>ISHABELLA CORP.</b>
        <span>© {new Date().getFullYear()} Ishabella Corp.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
