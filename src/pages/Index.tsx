
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { FileText, Truck, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: 'January', tagged: 65, enter: 28, exit: 20 },
  { name: 'February', tagged: 59, enter: 48, exit: 90 },
  { name: 'March', tagged: 80, enter: 40, exit: 30 },
  { name: 'April', tagged: 81, enter: 19, exit: 39 },
  { name: 'May', tagged: 56, enter: 86, exit: 77 },
  { name: 'June', tagged: 55, enter: 27, exit: 15 },
  { name: 'July', tagged: 40, enter: 90, exit: 50 }
];

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const StatCard = ({ title, value, icon, description }: StatCardProps) => (
  <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Tableau de bord
        </h1>
        <p className="text-muted-foreground mt-2">
          Bienvenue sur votre espace de gestion des factures de transport.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
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

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-6">Activité mensuelle</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tagged" name="Engin Tagged" fill="#3b82f6" />
              <Bar dataKey="enter" name="Engin Enter" fill="#ec4899" />
              <Bar dataKey="exit" name="Engin Exit" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Layout>
  );
};

export default Index;
