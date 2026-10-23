"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 text-white">
      <main className="w-full max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-3">
            WordPlay
          </h1>
          <p className="text-lg text-white/80 mb-10">
            Make as many words as you can from the letters above. Longer words = more points.
          </p>

          <div className="flex justify-center gap-2 mb-10">
            {["W", "O", "R", "D", "S"].map((letter) => (
              <div
                key={letter}
                className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white/90 text-purple-600 text-2xl font-bold shadow-lg"
              >
                {letter}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/game"
              className="inline-flex items-center justify-center rounded-full bg-white text-purple-600 px-8 py-3 text-lg font-semibold shadow-md hover:bg-purple-50 transition"
            >
              Start Game
            </Link>

            <div className="flex gap-3 text-sm text-white/85">
              <button className="rounded-full border border-white/40 px-4 py-2 backdrop-blur hover:bg-white/10">
                How to Play
              </button>
              <button className="rounded-full border border-white/40 px-4 py-2 backdrop-blur hover:bg-white/10">
                Stats
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
