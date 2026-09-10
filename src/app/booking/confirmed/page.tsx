import Link from "next/link";

export default function BookingConfirmedPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-950">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ALLAVIN
          </Link>

          <Link href="/" className="text-sm text-zinc-600">
            Back to home
          </Link>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">
          ✓
        </div>

        <p className="mt-8 text-sm font-medium text-zinc-500">
          BOOKING CONFIRMED
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Your session is booked.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
          You have successfully booked a business consultation with Anna Lee.
        </p>

        <div className="mt-10 w-full rounded-3xl bg-white p-7 text-left shadow-sm">
          <div className="flex items-center justify-between border-b border-black/5 pb-5">
            <div>
              <div className="font-semibold">Anna Lee</div>
              <div className="mt-1 text-sm text-zinc-500">
                Business Consultant
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold">$40</div>
              <div className="mt-1 text-sm text-zinc-500">30 minutes</div>
            </div>
          </div>

          <div className="grid gap-5 pt-5 sm:grid-cols-2">
            <div>
              <div className="text-sm text-zinc-500">Service</div>
              <div className="mt-1 font-medium">Business consultation</div>
            </div>

            <div>
              <div className="text-sm text-zinc-500">Format</div>
              <div className="mt-1 font-medium">Video session</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex-1 rounded-2xl bg-black px-6 py-4 font-medium text-white"
          >
            Back to ALLAVIN
          </Link>

          <Link
            href="/professional/anna-lee"
            className="flex-1 rounded-2xl border border-black/10 bg-white px-6 py-4 font-medium"
          >
            View professional
          </Link>
        </div>
      </section>
    </main>
  );
}