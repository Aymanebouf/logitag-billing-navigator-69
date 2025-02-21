
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Upload, FileText } from "lucide-react";
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Nouvelle facture
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Ajouter une facture fournisseur</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="supplier">Fournisseur</Label>
                        <Input id="supplier" placeholder="Nom du fournisseur" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invoice-number">N° Facture</Label>
                        <Input id="invoice-number" placeholder="FOUR-2024-XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date de facturation</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Montant HT (€)</Label>
                        <Input id="amount" type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tva">TVA (%)</Label>
                        <Input id="tva" type="number" placeholder="20" />
                      </div>
                      <Button type="submit" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Créer la facture
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Importer des factures
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Importer des factures</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="file-name">Nom du fichier</Label>
                        <Input id="file-name" placeholder="Nom du fichier à importer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="format">Format du fichier</Label>
                        <Select>
                          <SelectTrigger id="format">
                            <SelectValue placeholder="Sélectionner un format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="excel">Excel</SelectItem>
                            <SelectItem value="csv">CSV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="file">Fichier</Label>
                        <Input id="file" type="file" />
                      </div>
                      <Button type="submit" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Importer
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
