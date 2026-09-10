import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-950">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ALLAVIN
          </Link>

          <Link href="/" className="text-sm text-zinc-600">
            ← Back to professionals
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-xl font-semibold shadow-sm">
                AL
              </div>

              <div>
                <div className="mb-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Available now
                </div>

                <h1 className="text-4xl font-semibold tracking-tight">
                  Anna Lee
                </h1>

                <p className="mt-2 text-lg text-zinc-500">
                  Business Consultant
                </p>

                <p className="mt-3 text-sm">
                  ★ 4.9 · 126 sessions
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold">About</h2>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                Business consultant helping founders and small companies with
                strategy, business models, market entry and investor
                preparation.
              </p>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold">Services</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-black/5 p-5">
                  <div>
                    <div className="font-medium">
                      Business consultation
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">
                      Video · 30 minutes
                    </div>
                  </div>

                  <div className="font-semibold">$40</div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-black/5 p-5">
                  <div>
                    <div className="font-medium">
                      Pitch deck review
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">
                      Video · 45 minutes
                    </div>
                  </div>

                  <div className="font-semibold">$60</div>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-8 rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm text-zinc-500">Starting from</p>
              <div className="mt-1 text-3xl font-semibold">$40</div>

              <div className="mt-7">
                <p className="text-sm font-medium">Available times</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["14:00", "15:30", "17:00", "18:30"].map((time) => (
                    <button
                      key={time}
                      className="rounded-xl border border-black/10 py-3 hover:bg-zinc-50"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

             <Link
  href="/booking/confirmed"
  className="mt-7 block w-full rounded-2xl bg-black py-4 text-center font-medium text-white"
>
  Book session
</Link>

              <p className="mt-4 text-center text-xs text-zinc-400">
                No payment required for this demo
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
