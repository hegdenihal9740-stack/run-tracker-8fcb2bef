import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BriefcaseBusiness, ChartNoAxesCombined, Wallet, Files } from "lucide-react";
import { Button } from "@/components/ui/button";
const navigation = [
  { to: "/" as const, label: "Hiring", icon: BriefcaseBusiness },
  { to: "/performance" as const, label: "Performance", icon: ChartNoAxesCombined },
  { to: "/payroll" as const, label: "Payroll", icon: Wallet },
  { to: "/records" as const, label: "Records", icon: Files },
];
export function HRShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const current = navigation.find((item) => item.to === pathname);
  return (
    <div className="hr-shell">
      <aside className="hr-sidebar">
        <Link to="/" className="hr-brand">
          HR Management
        </Link>
        <div className="hr-nav-label">HR</div>
        <nav aria-label="HR navigation">
          {navigation.map((item) => (
            <Button
              asChild
              variant="ghost"
              className={`hr-nav-item ${pathname === item.to ? "hr-nav-active" : ""}`}
              key={item.to}
            >
              <Link to={item.to} aria-current={pathname === item.to ? "page" : undefined}>
                <item.icon size={18} />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </aside>
      <div className="hr-main">
        <header className="hr-header">
          <h1>{current?.label ?? "HR Management"}</h1>
        </header>
        <main className="hr-content">{children}</main>
      </div>
    </div>
  );
}
