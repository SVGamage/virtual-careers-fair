-- CreateEnum
CREATE TYPE "INTERVIEW_STATUS" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "REQUEST_STATUS" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "USER_TYPE" AS ENUM ('STUDENT', 'COMPANY', 'UNIVERSITY');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "UserAccount" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "USER_TYPE" NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "gender" "GENDER" NOT NULL,
    "dob" TIMESTAMPTZ NOT NULL,
    "age" INTEGER NOT NULL,
    "profilePic" TEXT NOT NULL,
    "userAccountId" INTEGER NOT NULL,
    "degreeProgrammeId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" SERIAL NOT NULL,
    "universityName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "userAccountId" INTEGER NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "departmentName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "universityId" INTEGER NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DegreeProgramme" (
    "id" SERIAL NOT NULL,
    "degreeName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "intake" INTEGER NOT NULL,
    "academicYears" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "DegreeProgramme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "employeeCount" INTEGER NOT NULL,
    "industryFieldId" INTEGER NOT NULL,
    "userAccountId" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryField" (
    "id" SERIAL NOT NULL,
    "industryName" TEXT NOT NULL,

    CONSTRAINT "IndustryField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartneredCompany" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "universityId" INTEGER NOT NULL,
    "partnershipStatus" "REQUEST_STATUS" NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "PartneredCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareersDay" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMPTZ NOT NULL,
    "end" TIMESTAMPTZ NOT NULL,
    "universityId" INTEGER NOT NULL,

    CONSTRAINT "CareersDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareersDayStudent" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "careersDayId" INTEGER NOT NULL,
    "registerStatus" "REQUEST_STATUS" NOT NULL,

    CONSTRAINT "CareersDayStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareersDayCompany" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "careersDayId" INTEGER NOT NULL,
    "registerStatus" "REQUEST_STATUS" NOT NULL,

    CONSTRAINT "CareersDayCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" SERIAL NOT NULL,
    "interviewRequestId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "careerDayId" INTEGER NOT NULL,
    "start" TIMESTAMPTZ NOT NULL,
    "end" TIMESTAMPTZ NOT NULL,
    "interviewStatus" "INTERVIEW_STATUS" NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewRequest" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "careerDayId" INTEGER NOT NULL,
    "requestStatus" "REQUEST_STATUS" NOT NULL,
    "requestDateTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "InterviewRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userAccountId_key" ON "Student"("userAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "University_userAccountId_key" ON "University"("userAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_userAccountId_key" ON "Company"("userAccountId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "UserAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_degreeProgrammeId_fkey" FOREIGN KEY ("degreeProgrammeId") REFERENCES "DegreeProgramme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "University" ADD CONSTRAINT "University_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "UserAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DegreeProgramme" ADD CONSTRAINT "DegreeProgramme_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industryFieldId_fkey" FOREIGN KEY ("industryFieldId") REFERENCES "IndustryField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "UserAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartneredCompany" ADD CONSTRAINT "PartneredCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartneredCompany" ADD CONSTRAINT "PartneredCompany_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareersDay" ADD CONSTRAINT "CareersDay_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareersDayStudent" ADD CONSTRAINT "CareersDayStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareersDayStudent" ADD CONSTRAINT "CareersDayStudent_careersDayId_fkey" FOREIGN KEY ("careersDayId") REFERENCES "CareersDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareersDayCompany" ADD CONSTRAINT "CareersDayCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CareersDayCompany" ADD CONSTRAINT "CareersDayCompany_careersDayId_fkey" FOREIGN KEY ("careersDayId") REFERENCES "CareersDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_interviewRequestId_fkey" FOREIGN KEY ("interviewRequestId") REFERENCES "InterviewRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_careerDayId_fkey" FOREIGN KEY ("careerDayId") REFERENCES "CareersDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewRequest" ADD CONSTRAINT "InterviewRequest_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewRequest" ADD CONSTRAINT "InterviewRequest_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewRequest" ADD CONSTRAINT "InterviewRequest_careerDayId_fkey" FOREIGN KEY ("careerDayId") REFERENCES "CareersDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
