"use client";

import {
  Globe,
  HeartHandshake,
  Users,
  Play,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')", // Replace with your generated image
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-white">
              <span className="font-semibold text-amber-400">LIGHT</span> TO
              LIFE
            </h2>
            <p className="text-xs uppercase tracking-[4px] text-gray-300">
              International Ministries
            </p>
          </div>

          {/* Menu */}
          <nav className="hidden gap-10 text-sm font-medium text-white lg:flex">
            <a href="#" className="text-amber-400">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">Ministries</a>
            <a href="#">Missions</a>
            <a href="#">Get Involved</a>
            <a href="#">Resources</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-full border border-amber-400 px-7 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black">
            Donate
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="leading-none">
              <span className="block text-6xl font-light text-white md:text-8xl">
                Bringing
              </span>
              <span className="block text-6xl font-light text-amber-400 md:text-8xl">
                Light.
              </span>
              <span className="block text-6xl font-light text-white md:text-8xl">
                Changing
              </span>
              <span className="block text-6xl font-light text-amber-400 md:text-8xl">
                Lives.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              Taking the love and hope of Jesus Christ to the nations and
              transforming communities through the power of the Gospel.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="flex items-center gap-2 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">
                Our Mission
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-3 rounded-lg border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black">
                <Play size={18} />
                Watch Our Story
              </button>
            </div>

            {/* Feature Cards */}
            <div className="mt-20 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
              <div className="space-y-4">
                <Globe
                  className="text-amber-400"
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
                  className="text-amber-400"
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
                  className="text-amber-400"
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