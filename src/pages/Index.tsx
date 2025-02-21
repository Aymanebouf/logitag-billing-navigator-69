
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { FileText, Truck, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const StatCard = ({ title, value, icon, description }: StatCardProps) => (
  <Card className="p-6">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </Card>
);

const Index = () => {
  return (
    <Layout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground mt-2">
          Bienvenue sur votre espace de gestion des factures de transport.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Prestations en attente"
          value="24"
          icon={<Truck className="w-6 h-6" />}
          description="Prestations à facturer"
        />
        <StatCard
          title="Clients actifs"
          value="12"
          icon={<Users className="w-6 h-6" />}
          description="Sur le mois en cours"
        />
        <StatCard
          title="Factures en cours"
          value="8"
          icon={<FileText className="w-6 h-6" />}
          description="Non clôturées"
        />
      </div>
    </Layout>
  );
};

export default Index;
