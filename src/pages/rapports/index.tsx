
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileText, Download, BarChart } from "lucide-react";

const Rapports = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Rapports analytiques
          </h1>
          <p className="text-muted-foreground mt-2">
            Générez et consultez vos rapports d'activité
          </p>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Rapport de facturation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Période</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une période" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Mois en cours</SelectItem>
                      <SelectItem value="quarter">Trimestre en cours</SelectItem>
                      <SelectItem value="year">Année en cours</SelectItem>
                      <SelectItem value="custom">Période personnalisée</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Type de rapport</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Synthèse globale</SelectItem>
                      <SelectItem value="detailed">Détaillé par client</SelectItem>
                      <SelectItem value="comparison">Comparatif périodique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Générer le rapport
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analyse financière</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Indicateurs</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez les indicateurs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Chiffre d'affaires</SelectItem>
                      <SelectItem value="margin">Marges</SelectItem>
                      <SelectItem value="expenses">Dépenses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Format</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Format du rapport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="secondary" className="w-full">
                  <BarChart className="w-4 h-4 mr-2" />
                  Analyser les données
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Rapports enregistrés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Rapport mensuel - Mars 2024</p>
                      <p className="text-sm text-muted-foreground">Généré le 01/03/2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Rapports;
