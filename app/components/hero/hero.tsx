"use client";

import {
  Globe,
  HeartHandshake,
  Users,
  Play,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import LocationCarousel from "@/app/components/LocationCarousel/LocationCarousel";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

      {/* Location Carousel */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <LocationCarousel />
      </div>

      {/* Navigation - Using Navbar Component */}
      <div className="absolute top-16 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="leading-none font-cormorant">
              <span className="block whitespace-nowrap text-6xl font-light text-white md:text-8xl">
                Bringing <span style={{ color: "var(--gold)" }}>Light.</span>
              </span>
              <span className="block whitespace-nowrap text-6xl font-light text-white md:text-8xl">
                Changing <span style={{ color: "var(--gold)" }}>Lives.</span>
              </span>
            </h1>

            <p className="font-inter mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              Taking the love and hope of Jesus Christ to the nations and
              transforming communities through the power of the Gospel.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <a href="/#features" className="flex items-center gap-2 rounded-lg px-8 py-4 font-semibold text-black transition" style={{ backgroundColor: "var(--gold)", background: "var(--nav-cta-bg)" }}>
                Our Mission
                <ArrowRight size={18} />
              </a>

              <a href="/news" className="flex items-center gap-3 rounded-lg border-2 px-8 py-4 font-semibold transition hover:text-black" style={{ borderColor: "var(--gold)", color: "var(--gold)", backgroundColor: "transparent" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.color = "#000"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}>
                <Play size={18} />
                Our Stories
              </a>
            </div>

            {/* Feature Cards */}
            <div className="mt-20 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
              <div className="space-y-4">
                <Globe
                  style={{ color: "var(--gold)" }}
                  size={42}
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-white">
                  Global Reach
                </h3>
                <p className="text-gray-300">
                  Reaching nations with the Gospel and planting churches
                  worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <HeartHandshake
                  style={{ color: "var(--gold)" }}
                  size={42}
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-white">
                  Transforming Lives
                </h3>
                <p className="text-gray-300">
                  Bringing healing, hope and restoration through Christ.
                </p>
              </div>

              <div className="space-y-4">
                <Users
                  style={{ color: "var(--gold)" }}
                  size={42}
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-white">
                  Make a Difference
                </h3>
                <p className="text-gray-300">
                  Join us in spreading the light of God across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}