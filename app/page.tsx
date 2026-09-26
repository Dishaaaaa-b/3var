"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e9] text-[#2b211d]">
      {/* NAVBAR */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-7 py-7 lg:px-12">
        <div className="flex flex-col">
          <div className="font-serif text-[38px] leading-none tracking-[-0.06em]">
            3VAR
          </div>
          <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.28em] text-[#8d7061]">
            Intelligent Hiring
          </div>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {["Home", "Features", "How It Works", "Use Cases", "Pricing"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`relative pb-1 text-[13px] transition ${
                  active === item
                    ? "font-medium text-[#8d4e31]"
                    : "text-[#51443e] hover:text-[#8d4e31]"
                }`}
              >
                {item}

                {active === item && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#8d4e31]" />
                )}
              </button>
            )
          )}
        </nav>

        <button className="rounded-[15px] bg-[#44332c] px-6 py-3 text-[13px] font-medium text-white shadow-[0_8px_25px_rgba(68,51,44,0.12)] transition hover:bg-[#33251f]">
          Get Started <span className="ml-2">→</span>
        </button>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1400px] px-7 pb-16 pt-12 lg:px-12 lg:pb-24 lg:pt-16">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#eadfd3] opacity-60 blur-[2px]" />

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9c674d]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9c674d]">
                Hire smarter. Faster. Fairer.
              </span>
            </div>

            <h1 className="max-w-[650px] font-serif text-[56px] leading-[0.98] tracking-[-0.045em] sm:text-[68px] lg:text-[76px]">
              AI interviews
              <br />
              that see beyond
              <br />
              <span className="italic text-[#a25d3c]">just answers.</span>
            </h1>

            <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-[#74665f]">
              3VAR is an AI-powered video interview platform that helps
              companies assess skills, understand candidate responses and
              identify meaningful signals — all in one intelligent hiring
              workflow.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button className="rounded-[13px] bg-[#9a5a3b] px-7 py-3.5 text-[13px] font-medium text-white shadow-[0_10px_25px_rgba(154,90,59,0.18)] transition hover:bg-[#82492f]">
                Book a Demo <span className="ml-2">→</span>
              </button>

              <button className="flex items-center gap-3 rounded-[13px] border border-[#c8b8ad] bg-[#faf7f2] px-6 py-3.5 text-[13px] font-medium text-[#4d403a] transition hover:bg-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c8b8ad] text-[10px]">
                  ▶
                </span>
                Watch how it works
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-[#81736b]">
              <span>✓ AI-powered</span>
              <span>✓ Skills-based assessment</span>
              <span>✓ Built for global teams</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative z-10 min-h-[510px]">
            {/* Plant-like decorative visual */}
            <div className="absolute bottom-4 left-0 hidden h-[300px] w-[160px] lg:block">
              <div className="absolute bottom-0 left-[70px] h-[230px] w-[12px] rotate-[-10deg] rounded-full bg-[#63765a]" />
              <div className="absolute bottom-[170px] left-[25px] h-[80px] w-[38px] rotate-[-35deg] rounded-[80%_15%_80%_15%] bg-[#718366]" />
              <div className="absolute bottom-[125px] left-[85px] h-[95px] w-[42px] rotate-[28deg] rounded-[15%_80%_15%_80%] bg-[#7f9270]" />
              <div className="absolute bottom-[85px] left-[18px] h-[90px] w-[42px] rotate-[-38deg] rounded-[80%_15%_80%_15%] bg-[#839675]" />
            </div>

            {/* Circle behind card */}
            <div className="absolute right-0 top-4 h-[450px] w-[450px] rounded-full bg-[#e7ded4]" />

            {/* Main interview card */}
            <div className="absolute right-0 top-[65px] w-full max-w-[650px] rounded-[25px] border border-white/80 bg-white/90 p-5 shadow-[0_30px_70px_rgba(75,55,45,0.14)] backdrop-blur-md">
              <div className="flex items-center justify-between px-2 pb-4">
                <div className="font-serif text-[22px]">3VAR</div>

                <div className="flex items-center gap-2 text-[11px] text-[#77706b]">
                  <span className="h-2 w-2 rounded-full bg-[#d95445]" />
                  Recording...
                  <span className="ml-3">00:12:36</span>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_165px]">
                {/* Candidate video */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[17px] bg-[#d8d0c8]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,#eadbd0_0%,#cbb9aa_38%,#8d786a_100%)]" />

                  {/* Stylised candidate */}
                  <div className="absolute left-1/2 top-[52%] h-[190px] w-[145px] -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute left-1/2 top-0 h-[105px] w-[90px] -translate-x-1/2 rounded-[48%_48%_45%_45%] bg-[#4d352b]" />
                    <div className="absolute left-1/2 top-[32px] h-[92px] w-[72px] -translate-x-1/2 rounded-[45%] bg-[#c58d70]" />
                    <div className="absolute left-[34px] top-[70px] h-[5px] w-[7px] rounded-full bg-[#33231e]" />
                    <div className="absolute right-[34px] top-[70px] h-[5px] w-[7px] rounded-full bg-[#33231e]" />
                    <div className="absolute left-1/2 top-[91px] h-[2px] w-[18px] -translate-x-1/2 bg-[#6c3e35]" />
                    <div className="absolute left-1/2 top-[105px] h-[100px] w-[145px] -translate-x-1/2 rounded-t-[60px] bg-[#272521]" />
                  </div>

                  {/* Face detection corners */}
                  <div className="absolute left-[26%] top-[22%] h-8 w-8 border-l-2 border-t-2 border-white/80" />
                  <div className="absolute right-[26%] top-[22%] h-8 w-8 border-r-2 border-t-2 border-white/80" />
                  <div className="absolute bottom-[23%] left-[26%] h-8 w-8 border-b-2 border-l-2 border-white/80" />
                  <div className="absolute bottom-[23%] right-[26%] h-8 w-8 border-b-2 border-r-2 border-white/80" />
                </div>

                {/* Analysis panel */}
                <div className="flex flex-col justify-between py-2">
                  <Signal
                    icon="◉"
                    label="Eye Contact"
                    value="Good"
                    positive
                  />

                  <Signal
                    icon="▣"
                    label="Tab Activity"
                    value="No unusual activity"
                    positive
                  />

                  <Signal
                    icon="⌁"
                    label="Response Quality"
                    value="High"
                    positive
                  />

                  <Signal
                    icon="▥"
                    label="Confidence"
                    value="78%"
                    positive
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <CircleButton>♩</CircleButton>
                <CircleButton>▣</CircleButton>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dc594d] text-white shadow-sm">
                  ×
                </div>
              </div>
            </div>

            {/* AI insight card */}
            <div className="absolute bottom-3 right-[-5px] w-[245px] rounded-[18px] border border-white bg-white/95 p-4 shadow-[0_18px_40px_rgba(70,50,40,0.12)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3e8df] text-[#9a5a3b]">
                  ✦
                </div>

                <div>
                  <div className="text-[12px] font-semibold">
                    AI analysis
                  </div>
                  <div className="mt-0.5 text-[10px] text-[#8b817b]">
                    Assessing skills & responses
                  </div>
                </div>
              </div>
            </div>

            {/* Handwritten-style notes */}
            <div className="absolute -right-2 top-0 hidden rotate-[-5deg] font-serif text-[17px] italic text-[#81513b] lg:block">
              More than just
              <br />
              a resume
              <div className="ml-[-25px] mt-1 text-[28px]">↙</div>
            </div>

            <div className="absolute bottom-0 left-[45%] hidden rotate-[-4deg] font-serif text-[16px] italic text-[#81513b] lg:block">
              Real people.
              <br />
              Better decisions.
              <span className="ml-2 text-[24px]">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="border-y border-[#dfd5cc] bg-[#f9f5ef]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-7 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <Feature
            icon="ϟ"
            title="Automated Interviews"
            text="Save time, interview faster"
          />

          <Feature
            icon="♧"
            title="Skill-Based Evaluation"
            text="Role-specific assessments"
          />

          <Feature
            icon="◇"
            title="Proctoring Signals"
            text="Monitor interview integrity"
          />

          <Feature
            icon="▥"
            title="Detailed Reports"
            text="Make data-driven decisions"
          />
        </div>
      </section>

      {/* SIMPLE VALUE SECTION */}
      <section className="mx-auto max-w-[1200px] px-7 py-24 text-center lg:px-12">
        <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9a674f]">
          One platform. Three perspectives.
        </div>

        <h2 className="mx-auto mt-4 max-w-[800px] font-serif text-[42px] leading-tight tracking-[-0.035em] sm:text-[52px]">
          From interview to insight,
          <br />
          <span className="italic text-[#9a5a3b]">
            everything in one place.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#776c65]">
          3VAR brings together intelligent interviewing, structured
          assessment and recruitment insights into one streamlined workflow.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <ValueCard
            number="01"
            title="Interview"
            text="AI conducts adaptive, role-specific conversations with every candidate."
          />

          <ValueCard
            number="02"
            title="Assess"
            text="Responses are evaluated against the skills and requirements defined by your team."
          />

          <ValueCard
            number="03"
            title="Decide"
            text="Recruiters receive a structured report to support faster, informed decisions."
          />
        </div>
      </section>
    </main>
  );
}

function Signal({
  icon,
  label,
  value,
  positive = false,
}: {
  icon: string;
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f4ef] text-[13px] text-[#658065]">
        {icon}
      </div>

      <div>
        <div className="text-[10px] text-[#837a74]">{label}</div>
        <div
          className={`mt-0.5 text-[10px] ${
            positive ? "text-[#59805e]" : "text-[#6d665f]"
          }`}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function CircleButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd6d0] bg-[#faf8f5] text-[13px] text-[#655b55]">
      {children}
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-[#dfd5cc] px-5 py-4 lg:border-r last:border-r-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1e6dc] text-[21px] text-[#9a5a3b]">
        {icon}
      </div>

      <div>
        <div className="text-[14px] font-semibold">{title}</div>
        <div className="mt-1 text-[11px] text-[#877b73]">{text}</div>
      </div>
    </div>
  );
}

function ValueCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-[#ded4cb] bg-[#faf7f2] p-7 text-left transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(70,50,40,0.08)]">
      <div className="text-[11px] font-medium tracking-[0.18em] text-[#a16b51]">
        {number}
      </div>

      <h3 className="mt-5 font-serif text-[28px]">{title}</h3>

      <p className="mt-3 text-[13px] leading-6 text-[#7b7069]">{text}</p>
    </div>
  );
}