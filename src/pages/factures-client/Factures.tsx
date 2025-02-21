
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Factures = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Gestion des Factures
          </h1>
          <p className="text-muted-foreground mt-2">
            Consultez et gérez vos factures clients
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Liste des Factures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <Button variant="default">Nouvelle Facture</Button>
                <Button variant="outline">Exporter</Button>
              </div>
              <div className="w-64">
                <Input placeholder="Rechercher une facture..." />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Numéro</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>FAC-2024-001</TableCell>
                  <TableCell>01/03/2024</TableCell>
                  <TableCell>Client A</TableCell>
                  <TableCell>1,500 €</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      Payée
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Voir</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Factures;
