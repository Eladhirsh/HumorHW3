import { requireSuperAdmin } from "@/lib/auth";
import AppShell from "@/components/AppShell";

export default async function FlavorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await requireSuperAdmin();

  return (
    <AppShell
      profile={{
        id: profile.id,
        display_name: profile.first_name
          ? `${profile.first_name} ${profile.last_name || ""}`.trim()
          : undefined,
        email: profile.email,
      }}
    >
      {children}
    </AppShell>
  );
}
