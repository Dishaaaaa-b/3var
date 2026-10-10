-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL DEFAULT '',
    "skills" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL DEFAULT 'Intermediate',
    "duration" TEXT NOT NULL DEFAULT '30 minutes',
    "maxQuestions" TEXT NOT NULL DEFAULT '10 questions',
    "mandatoryQuestions" TEXT NOT NULL DEFAULT '[]',
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
