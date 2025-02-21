
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Upload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FactureFournisseur = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Factures Fournisseurs
          </h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos factures fournisseurs
          </p>
        </header>

        <div className="grid gap-6 mb-6">
          <Card className="bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvelle facture
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Importer des factures
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Liste des factures</CardTitle>
            <Input className="w-64" placeholder="Rechercher..." />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fournisseur</TableHead>
                  <TableHead>N° Facture</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant HT</TableHead>
                  <TableHead>TVA</TableHead>
                  <TableHead>Total TTC</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <TableCell>Fournisseur {i}</TableCell>
                    <TableCell>FOUR-2024-00{i}</TableCell>
                    <TableCell>01/03/2024</TableCell>
                    <TableCell>{1000 * i} €</TableCell>
                    <TableCell>{200 * i} €</TableCell>
                    <TableCell>{1200 * i} €</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                        En attente
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FactureFournisseur;
