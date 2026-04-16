import type { Metadata } from "next";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";
import {
  ScanLine,
  CalendarOff,
  FileBarChart,
  Bell,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Attendance Management System | Trackepay",
  description:
    "Our Attendance Management System automates check-ins, shift tracking, and leave records to ensure accurate workforce management and compliance.",
};

export default function AttendanceManagementSystemPage() {
  return (
    <ProductPageTemplate
      heroTitle="Attendance Management System"
      heroHighlight="Management"
      heroDescription="Our Attendance Management System automates check-ins, shift tracking, and leave records to ensure accurate workforce management, policy compliance, and streamlined HR operations."
      breadcrumbLabel="Attendance Management System"
      contentTitle="Attendance Management System"
      contentDescription="Take control of your workforce attendance with a robust system that integrates seamlessly with biometric devices, mobile apps, and web portals. Get real-time visibility into employee attendance, leaves, and shifts."
      heroImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/biometric-attendance-system.webp"
      featureChecklist={[
        "Real-Time Check-In/Out",
        "Leave Management",
        "Attendance Reports",
        "Automated Alerts",
        "Policy Compliance",
        "Shift Scheduling",
      ]}
      solutionCards={[
        {
          title: "Real-Time Check-In/Out",
          description:
            "Enable employees to check in and out using biometric scanners, mobile GPS, QR codes, or web portals. Get real-time data on who is present, late, or absent across all locations.",
          icon: ScanLine,
        },
        {
          title: "Leave Management",
          description:
            "Automate leave requests, approvals, and balance tracking. Support multiple leave types including casual, sick, earned, and compensatory leave with configurable policies.",
          icon: CalendarOff,
        },
        {
          title: "Attendance Reports",
          description:
            "Generate detailed attendance reports by employee, department, or time period. Export data for payroll processing, audits, and management review.",
          icon: FileBarChart,
        },
        {
          title: "Automated Alerts",
          description:
            "Set up automatic notifications for late arrivals, early departures, missed punches, and leave approvals. Keep managers and HR informed in real time.",
          icon: Bell,
        },
        {
          title: "Policy Compliance",
          description:
            "Configure attendance policies including grace periods, overtime rules, and minimum working hours. Ensure organization-wide compliance with labor regulations.",
          icon: ShieldCheck,
        },
        {
          title: "Shift Scheduling",
          description:
            "Create and manage multiple shift patterns, rotational schedules, and flexible timings. Assign shifts to employees or teams with drag-and-drop simplicity.",
          icon: Clock,
        },
      ]}
    />
  );
}
