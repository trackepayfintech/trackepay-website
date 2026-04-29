import type { Metadata } from "next";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";
import {
  ShoppingCart,
  LayoutDashboard,
  ChefHat,
  UtensilsCrossed,
  Package,
  BarChart3,
  Users,
  PieChart,
  Armchair,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Restaurant Management Software India — POS, Kitchen & Inventory",
  description:
    "All-in-one restaurant management software for orders, billing, kitchen workflow, inventory, and staff. Trusted by single outlets and chains across India.",
  path: "/hotel-management-system",
  keywords: [
    "restaurant management software india",
    "restaurant pos software",
    "restaurant billing software",
    "hotel management software india",
    "kitchen management system",
  ],
});

export default function RestaurantManagementSystemPage() {
  return (
    <ProductPageTemplate
      heroTitle="Restaurant Management System"
      heroHighlight="Management"
      heroDescription="A smart and efficient solution to manage restaurant operations including orders, billing, kitchen workflow, inventory control, staff management, and customer engagement—all from one powerful platform."
      breadcrumbLabel="Restaurant Management System"
      contentTitle="Restaurant Management System"
      contentDescription="Our Restaurant Management System simplifies your daily operations with intuitive tools for order processing, table management, kitchen coordination, and business analytics. Whether you run a single outlet or a chain, our solution scales with your needs."
      heroImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/restaurant-management.webp"
      ImageSrc="https://pub-29088a4621cd4b7ab23bef1697349075.r2.dev/web-assets/restaurant-management-system.webp"
      featureChecklist={[
        "Order & Billing Automation",
        "Table Reservation System",
        "Kitchen Display System (KDS)",
        "Inventory & Stock Control",
        "Staff & Shift Management",
        "Customer Feedback & Loyalty",
      ]}
      solutionCards={[
        {
          title: "Manage Order",
          description:
            "Streamline your order management with real-time order tracking, split billing, discount management, and seamless integration with your POS system.",
          icon: ShoppingCart,
        },
        {
          title: "Counter Dashboard",
          description:
            "A centralized counter dashboard for cashiers and managers to monitor active orders, handle payments, generate receipts, and track daily revenue in real time.",
          icon: LayoutDashboard,
        },
        {
          title: "Kitchen Dashboard",
          description:
            "A dedicated kitchen display system that shows incoming orders, preparation priorities, and order status updates to keep your kitchen running smoothly.",
          icon: ChefHat,
        },
        {
          title: "Food Management",
          description:
            "Manage your menu items, categories, pricing, recipes, and nutritional information. Easily update menus across all outlets from one place.",
          icon: UtensilsCrossed,
        },
        {
          title: "Purchase Management",
          description:
            "Track vendor orders, manage supplier relationships, automate purchase orders, and monitor stock levels to minimize waste and reduce costs.",
          icon: Package,
        },
        {
          title: "Reporting",
          description:
            "Comprehensive reports on sales, revenue, expenses, staff performance, and customer trends to help you make data-driven business decisions.",
          icon: BarChart3,
        },
        {
          title: "HR Management",
          description:
            "Manage restaurant staff with shift scheduling, attendance tracking, payroll processing, and performance evaluation all in one module.",
          icon: Users,
        },
        {
          title: "Analysis Dashboard",
          description:
            "Visual analytics dashboard with charts and graphs showing peak hours, popular items, revenue trends, and customer behavior patterns.",
          icon: PieChart,
        },
        {
          title: "Table Reservation",
          description:
            "Online and walk-in table reservation system with real-time availability, waitlist management, and automated confirmation notifications.",
          icon: Armchair,
        },
      ]}
    />
  );
}
