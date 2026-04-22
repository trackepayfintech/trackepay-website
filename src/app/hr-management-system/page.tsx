import type { Metadata } from "next";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";
import {
  Users,
  UserPlus,
  Wallet,
  Target,
  Clock,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR Management System | Trackepay",
  description:
    "Optimize your workforce with a powerful HR Management System that streamlines recruitment, payroll, attendance, employee records, and compliance—all in one unified platform.",
};

export default function HRManagementSystemPage() {
  return (
    <ProductPageTemplate
      heroTitle="HR Management System"
      heroHighlight="Management"
      heroDescription="Optimize your workforce with a powerful HR Management System that streamlines recruitment, payroll, attendance, employee records, and compliance—all in one unified platform."
      heroImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/hr-manegement.webp"
      ImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/hr-management-system.webp"
      breadcrumbLabel="HR Management System"
      contentTitle="HR Management System"
      contentDescription="Our HR Management System is a comprehensive platform that centralizes all your human resource operations. From hiring to retirement, manage every aspect of the employee lifecycle with ease and efficiency."
      featureChecklist={[
        "Employee Lifecycle Management",
        "Attendance & Shift Scheduling",
        "Payroll & Salary Processing",
        "Leave & Holiday Management",
        "Performance Evaluation",
        "Centralized Staff Records",
      ]}
      solutionCards={[
        {
          title: "Core HR Modules",
          description:
            "Job postings, applicant tracking, digital contracts, and centralized employee database to manage your entire HR workflow from a single dashboard.",
          icon: Users,
        },
        {
          title: "Recruitment & Onboarding",
          description:
            "Centralized job posting, applicant tracking, interview scheduling, and seamless onboarding workflows to bring new talent on board faster.",
          icon: UserPlus,
        },
        {
          title: "Payroll & Finance",
          description:
            "Automated salary processing, deductions, payslips, tax calculations, and compliance reports to ensure accurate and timely payroll every month.",
          icon: Wallet,
        },
        {
          title: "Performance & Training",
          description:
            "Employee performance tracking, goal setting, 360-degree feedback, training program management, and skill gap analysis for workforce development.",
          icon: Target,
        },
        {
          title: "Time & Attendance",
          description:
            "Real-time check-ins, shift schedules, overtime tracking, and biometric integration for accurate time management across your organization.",
          icon: Clock,
        },
        {
          title: "Event Management",
          description:
            "Schedule meetings, corporate events, trainings, and team-building activities with automated notifications and calendar integration.",
          icon: CalendarDays,
        },
      ]}
    />
  );
}
