import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      jobTitle,
      department,
      skills,
      difficulty,
      duration,
      maxQuestions,
      mandatoryQuestions,
    } = body;

    if (!jobTitle || !skills) {
      return NextResponse.json(
        { error: "Job title and required skills are required." },
        { status: 400 }
      );
    }

    const interview = {
      id: crypto.randomUUID(),
      jobTitle,
      department: department || "",
      skills,
      difficulty: difficulty || "Intermediate",
      duration: duration || "30 minutes",
      maxQuestions: maxQuestions || "10 questions",
      mandatoryQuestions: mandatoryQuestions || [],
      status: "draft",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        interview,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}