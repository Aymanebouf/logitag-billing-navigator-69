
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plus, FileText, Calendar } from "lucide-react";

const FacturePermanente = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Factures Permanentes
          </h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos abonnements et facturations périodiques
          </p>
        </header>

        <div className="flex justify-between items-center mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle facture permanente
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Créer une facture permanente</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Input id="client" placeholder="Nom du client" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description de la prestation</Label>
                  <Input id="description" placeholder="Description" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="montant">Montant (€)</Label>
                  <Input id="montant" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="periodicite">Périodicité</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une périodicité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15j">15 jours</SelectItem>
                      <SelectItem value="1m">1 mois</SelectItem>
                      <SelectItem value="3m">3 mois</SelectItem>
                      <SelectItem value="6m">6 mois</SelectItem>
                      <SelectItem value="1a">1 an</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facturation">Moment de facturation</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir le moment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="avant">Avant la période</SelectItem>
                      <SelectItem value="apres">Après la période</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="debut">Date de début</Label>
                  <Input id="debut" type="date" />
                </div>
                <Button type="submit" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Créer l'abonnement
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="w-64">
            <Input placeholder="Rechercher..." />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des factures permanentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Périodicité</TableHead>
                  <TableHead>Prochaine facture</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Client A</TableCell>
                  <TableCell>Maintenance mensuelle</TableCell>
                  <TableCell>500 €</TableCell>
                  <TableCell>1 mois</TableCell>
                  <TableCell>01/04/2024</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      Actif
                    </span>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="ghost" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Générer
                    </Button>
                    <Button variant="ghost" size="sm">
                      Voir
                    </Button>
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

export default FacturePermanente;
