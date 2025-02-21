
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
import { FileText, Download, Plus } from "lucide-react";
import { useState } from "react";

const Factures = () => {
  const [isExportOpen, setIsExportOpen] = useState(false);

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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">
                      <Plus className="w-4 h-4 mr-2" />
                      Nouvelle Facture
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Créer une nouvelle facture</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="client">Client</Label>
                        <Input id="client" placeholder="Nom du client" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date de facturation</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Montant (€)</Label>
                        <Input id="amount" type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" placeholder="Description de la facture" />
                      </div>
                      <Button type="submit" className="w-full">
                        Créer la facture
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exporter
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Exporter la facture</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="invoice-number">Numéro de facture</Label>
                        <Input id="invoice-number" placeholder="FAC-2024-XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="format">Format d'export</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir un format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="excel">Excel</SelectItem>
                            <SelectItem value="csv">CSV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
