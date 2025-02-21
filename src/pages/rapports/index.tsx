
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const data = [
  { name: 'Jan', ventes: 4000, achats: 2400 },
  { name: 'Fév', ventes: 3000, achats: 1398 },
  { name: 'Mar', ventes: 2000, achats: 9800 },
  { name: 'Avr', ventes: 2780, achats: 3908 },
  { name: 'Mai', ventes: 1890, achats: 4800 },
  { name: 'Jun', ventes: 2390, achats: 3800 },
];

const trendData = [
  { name: 'Lun', valeur: 4000 },
  { name: 'Mar', valeur: 3000 },
  { name: 'Mer', valeur: 5000 },
  { name: 'Jeu', valeur: 2780 },
  { name: 'Ven', valeur: 1890 },
  { name: 'Sam', valeur: 2390 },
  { name: 'Dim', valeur: 3490 },
];

const Rapports = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Rapports & Analyses
          </h1>
          <p className="text-muted-foreground mt-2">
            Visualisez vos données et prenez des décisions éclairées
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Ventes vs Achats</CardTitle>
                <Button variant="outline" size="sm">Exporter</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ventes" name="Ventes" fill="#3b82f6" />
                    <Bar dataKey="achats" name="Achats" fill="#ec4899" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Tendance hebdomadaire</CardTitle>
                <Button variant="outline" size="sm">Exporter</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valeur" name="Chiffre d'affaires" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Indicateurs clés de performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Chiffre d'affaires", value: "125,400 €", change: "+12.5%" },
                { label: "Nombre de transactions", value: "1,234", change: "+5.3%" },
                { label: "Panier moyen", value: "89 €", change: "+2.1%" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-gray-50">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-2xl font-bold mt-1">{item.value}</p>
                  <p className="text-sm text-green-600 mt-1">{item.change}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Rapports;
