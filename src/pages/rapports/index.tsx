
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, AreaChart } from "lucide-react";
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', total: 1200 },
  { name: 'Fév', total: 900 },
  { name: 'Mar', total: 1600 },
  { name: 'Avr', total: 1400 },
  { name: 'Mai', total: 2000 },
  { name: 'Juin', total: 1800 },
];

const Rapports = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Vue d'ensemble de vos activités</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary">
                Total Factures
              </CardTitle>
              <BarChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">150</div>
              <p className="text-xs text-primary/70">
                +20.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-secondary">
                Chiffre d'affaires
              </CardTitle>
              <AreaChart className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">45,231.89 €</div>
              <p className="text-xs text-secondary/70">
                +15% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Vue Analytique</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888"
                    tick={{ fill: '#888888' }}
                  />
                  <YAxis 
                    stroke="#888888"
                    tick={{ fill: '#888888' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone"
                    dataKey="total"
                    stroke="#9b87f5"
                    strokeWidth={2}
                    dot={{ fill: '#9b87f5', strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: '#9b87f5' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Rapports;
