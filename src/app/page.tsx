import Link from "next/link";
const professionals = [
  {
    name: "Anna Lee",
    role: "Business Consultant",
    rating: "4.9",
    price: "$40",
    availability: "Available now",
    initials: "AL",
  },
  {
    name: "Daniel Kim",
    role: "Legal Consultant",
    rating: "4.8",
    price: "$55",
    availability: "Today, 17:30",
    initials: "DK",
  },
  {
    name: "Sophia Martin",
    role: "Marketing Expert",
    rating: "5.0",
    price: "$35",
    availability: "Available now",
    initials: "SM",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-950">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-2xl font-bold tracking-tight">ALLAVIN</div>
            <div className="text-xs text-zinc-500">all available in</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#experts" className="hover:text-zinc-500">
              Find experts
            </a>
            <a href="#how" className="hover:text-zinc-500">
              How it works
            </a>
            <button className="rounded-full bg-black px-5 py-2.5 text-white">
              For professionals
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
            Professional services. Available when you need them.
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            The right professional.
            <br />
            At the right time.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
            Find trusted professionals, see their real availability, choose a
            service and book it — all in one place.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experts"
              className="rounded-full bg-black px-7 py-4 text-center font-medium text-white"
            >
              Find a professional
            </a>

            <button className="rounded-full border border-black/10 bg-white px-7 py-4 font-medium">
              Join as a professional
            </button>
          </div>
        </div>
      </section>

      <section id="experts" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500">
              AVAILABLE PROFESSIONALS
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Get help without waiting
            </h2>
          </div>

          <button className="hidden text-sm font-medium md:block">
            View all →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {professionals.map((professional) => (
            <article
              key={professional.name}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 font-semibold">
                  {professional.initials}
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  {professional.availability}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold">{professional.name}</h3>
                <p className="mt-1 text-zinc-500">{professional.role}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                <div>
                  <div className="text-sm text-zinc-500">Rating</div>
                  <div className="font-medium">★ {professional.rating}</div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-zinc-500">From</div>
                  <div className="font-semibold">
                    {professional.price} / session
                  </div>
                </div>
              </div>
<Link
  href="/professional/anna-lee"
  className="mt-6 block w-full rounded-2xl bg-black py-3.5 text-center font-medium text-white"
>
  View profile
</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-medium text-zinc-500">HOW ALLAVIN WORKS</p>

          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Find", "Search for the professional you need."],
              ["02", "Choose", "Compare expertise, price and availability."],
              ["03", "Book", "Select a service and available time."],
              ["04", "Connect", "Receive the service and complete the session."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <div className="text-sm text-zinc-400">{number}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <div className="text-xl font-semibold">ALLAVIN</div>
            <div className="mt-1 text-sm text-white/50">all available in</div>
          </div>

          <div className="text-sm text-white/50">
            Hackathon MVP · 2026
          </div>
        </div>
      </footer>
    </main>
  );
}