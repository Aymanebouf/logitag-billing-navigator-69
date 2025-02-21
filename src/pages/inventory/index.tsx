
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, BarChart2, AlertTriangle } from "lucide-react";

const Inventory = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Gestion des Stocks
          </h1>
          <p className="text-muted-foreground mt-2">
            Suivez et gérez votre inventaire
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Articles</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valeur Stock</p>
                  <p className="text-2xl font-bold">45,678 €</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stock Faible</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Inventaire</CardTitle>
              <div className="flex gap-4">
                <Input className="w-64" placeholder="Rechercher un article..." />
                <Button>Nouvel Article</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Article {i}</h3>
                        <p className="text-sm text-muted-foreground">REF-00{i}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        i % 3 === 0 ? 'bg-red-100 text-red-800' : 
                        i % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {i % 3 === 0 ? 'Stock bas' : 
                         i % 2 === 0 ? 'Moyen' : 
                         'En stock'}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Quantité</span>
                        <span className="font-medium">{i * 15}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-muted-foreground">Prix unitaire</span>
                        <span className="font-medium">{i * 10}.00 €</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Inventory;
