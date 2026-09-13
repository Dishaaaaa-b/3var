"use client";

import { useState } from "react";

const interviews = [
  {
    candidate: "Aarav Sharma",
    role: "Data Analyst",
    status: "Completed",
    score: 86,
    date: "Today, 10:42 AM",
  },
  {
    candidate: "Emily Carter",
    role: "Business Analyst",
    status: "In Progress",
    score: null,
    date: "Today, 9:18 AM",
  },
  {
    candidate: "Rohan Mehta",
    role: "Power BI Developer",
    status: "Completed",
    score: 78,
    date: "Yesterday",
  },
  {
    candidate: "Sophia Williams",
    role: "Data Analyst",
    status: "Scheduled",
    score: null,
    date: "Tomorrow, 2:00 PM",
  },
];

export default function Home() {
  const [active, setActive] = useState("Overview");

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#172033]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-[250px] border-r border-[#e5e7eb] bg-white lg:flex lg:flex-col">
          <div className="flex h-[76px] items-center border-b border-[#e5e7eb] px-7">
            <div>
              <div className="text-[23px] font-semibold tracking-[-0.04em]">
                3VAR
              </div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7b8494]">
                Intelligent Hiring
              </div>
            </div>
          </div>

          <div className="px-4 py-6">
            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9aa1ad]">
              Workspace
            </div>

            <nav className="space-y-1">
              {["Overview", "Interviews", "Candidates", "Reports"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`flex w-full items-center rounded-md px-3 py-2.5 text-left text-[14px] transition ${
                      active === item
                        ? "bg-[#eef2f7] font-medium text-[#172033]"
                        : "text-[#687181] hover:bg-[#f5f6f8]"
                    }`}
                  >
                    <span
                      className={`mr-3 h-1.5 w-1.5 rounded-full ${
                        active === item ? "bg-[#26364f]" : "bg-transparent"
                      }`}
                    />
                    {item}
                  </button>
                )
              )}
            </nav>

            <div className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9aa1ad]">
              Management
            </div>

            <nav className="space-y-1">
              {["Team", "Settings"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`flex w-full items-center rounded-md px-3 py-2.5 text-left text-[14px] transition ${
                    active === item
                      ? "bg-[#eef2f7] font-medium text-[#172033]"
                      : "text-[#687181] hover:bg-[#f5f6f8]"
                  }`}
                >
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-transparent" />
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t border-[#e5e7eb] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25344b] text-[12px] font-semibold text-white">
                HR
              </div>
              <div>
                <div className="text-[13px] font-medium">HR Workspace</div>
                <div className="text-[11px] text-[#8a92a0]">
                  Administrator
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-[#e5e7eb] bg-white px-6 lg:px-10">
            <div>
              <div className="text-[13px] text-[#8a92a0]">Workspace</div>
              <h1 className="text-[17px] font-semibold">Overview</h1>
            </div>

            <button className="flex items-center gap-2 rounded-md bg-[#25344b] px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#1e2a3d]">
              <span className="text-[18px] leading-none">+</span>
              Create Interview
            </button>
          </header>

          <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10">
            {/* Welcome */}
            <div className="mb-8">
              <h2 className="text-[26px] font-semibold tracking-[-0.025em]">
                Good morning.
              </h2>
              <p className="mt-1 text-[14px] text-[#737c8b]">
                Here&apos;s an overview of your recruitment activity.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Total Interviews", "124", "+12 this month"],
                ["Completed", "87", "70.2% completion"],
                ["In Progress", "8", "6.4% of interviews"],
                ["Average Score", "82.4", "Across completed interviews"],
              ].map(([label, value, note]) => (
                <div
                  key={label}
                  className="border border-[#e3e6eb] bg-white p-5"
                >
                  <div className="text-[12px] font-medium text-[#7d8695]">
                    {label}
                  </div>
                  <div className="mt-3 text-[27px] font-semibold tracking-[-0.03em]">
                    {value}
                  </div>
                  <div className="mt-1 text-[11px] text-[#9299a5]">{note}</div>
                </div>
              ))}
            </div>

            {/* Recent interviews */}
            <div className="mt-8 border border-[#e3e6eb] bg-white">
              <div className="flex items-center justify-between border-b border-[#e8eaee] px-5 py-4">
                <div>
                  <h3 className="text-[15px] font-semibold">
                    Recent Interviews
                  </h3>
                  <p className="mt-0.5 text-[12px] text-[#8a92a0]">
                    Latest candidate activity
                  </p>
                </div>

                <button className="text-[12px] font-medium text-[#45556d] hover:underline">
                  View all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b border-[#edf0f3] text-[11px] uppercase tracking-[0.08em] text-[#969daa]">
                      <th className="px-5 py-3 font-medium">Candidate</th>
                      <th className="px-5 py-3 font-medium">Role</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium">Score</th>
                      <th className="px-5 py-3 font-medium">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {interviews.map((interview) => (
                      <tr
                        key={interview.candidate}
                        className="border-b border-[#f0f1f3] last:border-0 hover:bg-[#fafbfc]"
                      >
                        <td className="px-5 py-4">
                          <div className="text-[13px] font-medium">
                            {interview.candidate}
                          </div>
                        </td>

                        <td className="px-5 py-4 text-[13px] text-[#687181]">
                          {interview.role}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${
                              interview.status === "Completed"
                                ? "text-[#4d705d]"
                                : interview.status === "In Progress"
                                  ? "text-[#876e3f]"
                                  : "text-[#66738a]"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                interview.status === "Completed"
                                  ? "bg-[#5d806b]"
                                  : interview.status === "In Progress"
                                    ? "bg-[#aa8c50]"
                                    : "bg-[#8994a5]"
                              }`}
                            />
                            {interview.status}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-[13px] font-medium">
                          {interview.score ? `${interview.score}/100` : "—"}
                        </td>

                        <td className="px-5 py-4 text-[12px] text-[#8a92a0]">
                          {interview.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-3">
              <div className="border border-[#e3e6eb] bg-white p-6 xl:col-span-2">
                <div className="text-[14px] font-semibold">
                  Recruitment activity
                </div>
                <div className="mt-1 text-[12px] text-[#8a92a0]">
                  Interview volume over the last 30 days
                </div>

                <div className="mt-7 flex h-[150px] items-end gap-2 border-b border-[#edf0f3]">
                  {[35, 52, 44, 67, 58, 76, 64, 82, 71, 91, 78, 86, 72, 96].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-[#d8dee7] transition hover:bg-[#aeb9c9]"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-[#a0a7b1]">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
              </div>

              <div className="border border-[#e3e6eb] bg-white p-6">
                <div className="text-[14px] font-semibold">
                  Interview integrity
                </div>
                <div className="mt-1 text-[12px] text-[#8a92a0]">
                  Proctoring observations
                </div>

                <div className="mt-7">
                  <div className="flex items-end gap-2">
                    <span className="text-[31px] font-semibold">96.8%</span>
                    <span className="mb-1 text-[11px] text-[#5d806b]">
                      Clear
                    </span>
                  </div>

                  <div className="mt-5 h-1.5 bg-[#edf0f3]">
                    <div className="h-full w-[96.8%] bg-[#5d806b]" />
                  </div>

                  <div className="mt-4 text-[11px] leading-5 text-[#8a92a0]">
                    Based on recorded proctoring observations across completed
                    interviews.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}