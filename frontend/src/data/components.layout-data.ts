import { LayoutDashboard, Mails, Settings, Paperclip } from "lucide-react";

export const DashboardSidebarNavLinks = [
    {
        title: "Dashboard Overview",
        icon: LayoutDashboard,
        path: "/dashboard/overview",
    },
    {
        title: "Email Sender: 01",
        icon: Mails,
        path: "/dashboard/sender-01",
    },
    {
        title: "Email Sender: Template",
        icon: Paperclip,
        path: "/dashboard/template-sender",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/dashboard/settings",
    },
];
