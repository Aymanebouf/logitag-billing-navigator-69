
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { BarChart, AreaChart } from "lucide-react";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

const data = [
  { name: 'Jan', total: 1200 },
  { name: 'Fév', total: 900 },
  { name: 'Mar', total: 1600 },
  { name: 'Avr', total: 1400 },
  { name: 'Mai', total: 2000 },
  { name: 'Juin', total: 1800 },
];

const Rapports = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    
    const chartData = {
      labels: data.map(d => d.name),
      datasets: [
        {
          label: 'Chiffre d\'affaires',
          data: data.map(d => d.total),
          borderColor: '#9b87f5',
          backgroundColor: 'rgba(155, 135, 245, 0.2)',
          tension: 0.4
        }
      ]
    };
    
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 1.5,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12
            }
          },
          grid: {
            color: documentStyle.getPropertyValue('--surface-border')
          }
        },
        y: {
          ticks: {
            font: {
              size: 12
            }
          },
          grid: {
            color: documentStyle.getPropertyValue('--surface-border')
          }
        }
      }
    };

    setChartData(chartData);
    setChartOptions(options);
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Vue d'ensemble de vos activités</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
              <div className="text-sm font-medium text-primary">
                Total Factures
              </div>
              <BarChart className="h-4 w-4 text-primary" />
            </div>
            <div className="p-4 pt-0">
              <div className="text-2xl font-bold text-primary">150</div>
              <p className="text-xs text-primary/70">
                +20.1% par rapport au mois dernier
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
              <div className="text-sm font-medium text-secondary">
                Chiffre d'affaires
              </div>
              <AreaChart className="h-4 w-4 text-secondary" />
            </div>
            <div className="p-4 pt-0">
              <div className="text-2xl font-bold text-secondary">45,231.89 €</div>
              <p className="text-xs text-secondary/70">
                +15% par rapport au mois dernier
              </p>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-4 border-bottom">
            <div className="text-xl font-semibold">Vue Analytique</div>
          </div>
          <div className="p-4">
            <div className="h-[300px]">
              <Chart type="line" data={chartData} options={chartOptions} />
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Rapports;
