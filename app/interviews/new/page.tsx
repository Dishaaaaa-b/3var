"use client";

import { useState } from "react";

export default function NewInterview() {
  const [difficulty, setDifficulty] = useState("Intermediate");
  const [questions, setQuestions] = useState<string[]>([
    "",
  ]);

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const updateQuestion = (index: number, value: string) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  const removeQuestion = (index: number) => {
    if (questions.length === 1) return;
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#172033]">
      <header className="flex h-[76px] items-center justify-between border-b border-[#e5e7eb] bg-white px-6 lg:px-10">
        <div>
          <div className="text-[13px] text-[#8a92a0]">3VAR</div>
          <h1 className="text-[17px] font-semibold">Create Interview</h1>
        </div>

        <button className="text-[13px] text-[#687181] hover:text-[#172033]">
          Cancel
        </button>
      </header>

      <div className="mx-auto max-w-[900px] px-6 py-10">
        <div className="mb-8">
          <h2 className="text-[25px] font-semibold tracking-[-0.025em]">
            Create a new interview
          </h2>
          <p className="mt-1 text-[14px] text-[#737c8b]">
            Configure the role and assessment requirements for the candidate.
          </p>
        </div>

        <div className="space-y-5">
          <section className="border border-[#e3e6eb] bg-white p-6">
            <h3 className="text-[15px] font-semibold">Role details</h3>
            <p className="mt-1 text-[12px] text-[#8a92a0]">
              Define what the AI interviewer should evaluate.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Job title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Data Analyst"
                  className="w-full border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] outline-none focus:border-[#7d899a]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Department
                </label>
                <input
                  type="text"
                  placeholder="e.g. Analytics"
                  className="w-full border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] outline-none focus:border-[#7d899a]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[12px] font-medium">
                Required skills
              </label>
              <input
                type="text"
                placeholder="e.g. Power BI, SQL, Excel, Data Analysis"
                className="w-full border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] outline-none focus:border-[#7d899a]"
              />
              <p className="mt-2 text-[11px] text-[#969daa]">
                Separate skills with commas.
              </p>
            </div>
          </section>

          <section className="border border-[#e3e6eb] bg-white p-6">
            <h3 className="text-[15px] font-semibold">Interview settings</h3>
            <p className="mt-1 text-[12px] text-[#8a92a0]">
              Control the difficulty and interview structure.
            </p>

            <div className="mt-6">
              <label className="mb-2 block text-[12px] font-medium">
                Difficulty
              </label>

              <div className="grid grid-cols-3 gap-2">
                {["Basic", "Intermediate", "Expert"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`border px-4 py-3 text-[12px] font-medium transition ${
                      difficulty === level
                        ? "border-[#25344b] bg-[#25344b] text-white"
                        : "border-[#dfe3e8] bg-white text-[#687181] hover:bg-[#f7f8fa]"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Interview duration
                </label>
                <select className="w-full border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] outline-none">
                  <option>15 minutes</option>
                  <option>20 minutes</option>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Maximum questions
                </label>
                <select className="w-full border border-[#dfe3e8] bg-white px-3 py-2.5 text-[13px] outline-none">
                  <option>8 questions</option>
                  <option>10 questions</option>
                  <option>12 questions</option>
                  <option>15 questions</option>
                </select>
              </div>
            </div>
          </section>

          <section className="border border-[#e3e6eb] bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[15px] font-semibold">
                  Mandatory questions
                </h3>
                <p className="mt-1 text-[12px] text-[#8a92a0]">
                  Add questions that must be covered during the interview.
                </p>
              </div>

              <button
                onClick={addQuestion}
                className="border border-[#d9dee5] px-3 py-2 text-[12px] font-medium text-[#45556d] hover:bg-[#f7f8fa]"
              >
                + Add question
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {questions.map((question, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center border border-[#dfe3e8] text-[12px] font-medium text-[#7d8695]">
                    {index + 1}
                  </div>

                  <input
                    value={question}
                    onChange={(e) =>
                      updateQuestion(index, e.target.value)
                    }
                    type="text"
                    placeholder="Enter a mandatory question"
                    className="flex-1 border border-[#dfe3e8] px-3 text-[13px] outline-none focus:border-[#7d899a]"
                  />

                  <button
                    onClick={() => removeQuestion(index)}
                    className="px-3 text-[12px] text-[#969daa] hover:text-[#4f5968]"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-[#e3e6eb] bg-white p-6">
            <h3 className="text-[15px] font-semibold">
              Candidate access
            </h3>

            <div className="mt-5 flex items-start gap-3 border border-[#e7e9ed] bg-[#fafbfc] p-4">
              <div className="mt-0.5 h-4 w-4 border border-[#6f7b8c]" />
              <div>
                <div className="text-[13px] font-medium">
                  One-time interview attempt
                </div>
                <div className="mt-1 text-[11px] leading-5 text-[#8a92a0]">
                  The candidate will receive a unique interview link. Once
                  completed, the same attempt cannot be restarted.
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-3 pt-2">
            <button className="border border-[#d9dee5] bg-white px-5 py-2.5 text-[13px] font-medium text-[#687181] hover:bg-[#f7f8fa]">
              Save as draft
            </button>

            <button className="bg-[#25344b] px-5 py-2.5 text-[13px] font-medium text-white hover:bg-[#1e2a3d]">
              Create Interview
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}