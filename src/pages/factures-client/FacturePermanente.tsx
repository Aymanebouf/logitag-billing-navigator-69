
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
import { Plus, FileText, Calendar, Eye, ExternalLink } from "lucide-react";

const FacturePermanente = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const facturesLiees = [
    { id: 1, numero: "F2024-001", date: "01/01/2024", montant: "500 €", statut: "Payée" },
    { id: 2, numero: "F2024-002", date: "01/02/2024", montant: "500 €", statut: "Payée" },
    { id: 3, numero: "F2024-003", date: "01/03/2024", montant: "500 €", statut: "En attente" },
    { id: 4, numero: "F2024-004", date: "01/04/2024", montant: "500 €", statut: "En attente" },
    { id: 5, numero: "F2024-005", date: "01/05/2024", montant: "500 €", statut: "À générer" },
    { id: 6, numero: "F2024-006", date: "01/06/2024", montant: "500 €", statut: "À générer" },
    { id: 7, numero: "F2024-007", date: "01/07/2024", montant: "500 €", statut: "À générer" },
    { id: 8, numero: "F2024-008", date: "01/08/2024", montant: "500 €", statut: "À générer" },
    { id: 9, numero: "F2024-009", date: "01/09/2024", montant: "500 €", statut: "À générer" },
    { id: 10, numero: "F2024-010", date: "01/10/2024", montant: "500 €", statut: "À générer" },
  ];

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
                <div className="space-y-2">
                  <Label htmlFor="fin">Date de fin (optionnelle)</Label>
                  <Input id="fin" type="date" />
                  <p className="text-xs text-muted-foreground">
                    Laissez vide pour un abonnement sans date de fin
                  </p>
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
                  <TableHead>Périodicité</TableHead>
                  <TableHead>Prochaine facture</TableHead>
                  <TableHead>Date de fin</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Client A</TableCell>
                  <TableCell>Maintenance mensuelle</TableCell>
                  <TableCell>1 mois</TableCell>
                  <TableCell>01/04/2024</TableCell>
                  <TableCell>-</TableCell>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedClient("Client A")}>
                          <Eye className="w-4 h-4 mr-2" />
                          Voir
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px]">
                        <DialogHeader>
                          <DialogTitle>Factures liées - Client A</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Numéro</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Montant</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {facturesLiees.map((facture) => (
                                <TableRow key={facture.id}>
                                  <TableCell>{facture.numero}</TableCell>
                                  <TableCell>{facture.date}</TableCell>
                                  <TableCell>{facture.montant}</TableCell>
                                  <TableCell>
                                    <span
                                      className={cn(
                                        "px-2 py-1 rounded-full text-xs font-medium",
                                        {
                                          "bg-green-100 text-green-800": facture.statut === "Payée",
                                          "bg-yellow-100 text-yellow-800": facture.statut === "En attente",
                                          "bg-blue-100 text-blue-800": facture.statut === "À générer",
                                        }
                                      )}
                                    >
                                      {facture.statut}
                                    </span>
                                  </TableCell>
                                  <TableCell>
                                    <Button variant="ghost" size="sm">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      Détails
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </DialogContent>
                    </Dialog>
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
