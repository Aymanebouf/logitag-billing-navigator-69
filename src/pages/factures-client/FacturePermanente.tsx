import { useState } from "react";
import { cn } from "@/lib/utils";
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
  const [selectedFacture, setSelectedFacture] = useState<any>(null);

  const facturesLiees = [
    { id: 1, numero: "F2024-001", date: "01/01/2024", montant: "500 €", statut: "Payée", details: { nbPalettes: 5, prixUnitaire: "40 DH", description: "Location de palettes - Janvier 2024", formule: "5 palettes × 40 DH = 200 DH" } },
    { id: 2, numero: "F2024-002", date: "01/02/2024", montant: "750 €", statut: "Payée", details: { heures: 15, tauxHoraire: "50 DH", description: "Maintenance équipement - Février 2024", formule: "15 heures × 50 DH = 750 DH" } },
    { id: 3, numero: "F2024-003", date: "01/03/2024", montant: "1200 €", statut: "En attente", details: { surface: 60, prixM2: "20 DH", description: "Nettoyage industriel - Mars 2024", formule: "60 m² × 20 DH = 1200 DH" } },
    { id: 4, numero: "F2024-004", date: "01/04/2024", montant: "2000 €", statut: "En attente", details: { nbContainers: 4, prixContainer: "500 DH", description: "Stockage containers - Avril 2024", formule: "4 containers × 500 DH = 2000 DH" } },
    { id: 5, numero: "F2024-005", date: "01/05/2024", montant: "3600 €", statut: "À générer", details: { poidsTotal: 1200, prixKg: "3 DH", description: "Transport marchandises - Mai 2024", formule: "1200 kg × 3 DH = 3600 DH" } },
    { id: 6, numero: "F2024-006", date: "01/06/2024", montant: "900 €", statut: "À générer", details: { nbPersonnes: 6, prixPersonne: "150 DH", description: "Formation sécurité - Juin 2024", formule: "6 personnes × 150 DH = 900 DH" } },
    { id: 7, numero: "F2024-007", date: "01/07/2024", montant: "1500 €", statut: "À générer", details: { nbMachines: 3, prixMaintenance: "500 DH", description: "Maintenance préventive - Juillet 2024", formule: "3 machines × 500 DH = 1500 DH" } },
    { id: 8, numero: "F2024-008", date: "01/08/2024", montant: "4000 €", statut: "À générer", details: { puissance: 2000, prixKw: "2 DH", description: "Consommation électrique - Août 2024", formule: "2000 kW × 2 DH = 4000 DH" } },
    { id: 9, numero: "F2024-009", date: "01/09/2024", montant: "2500 €", statut: "À générer", details: { volume: 50, prixM3: "50 DH", description: "Location espace stockage - Septembre 2024", formule: "50 m³ × 50 DH = 2500 DH" } },
    { id: 10, numero: "F2024-010", date: "01/10/2024", montant: "1800 €", statut: "À générer", details: { distance: 600, prixKm: "3 DH", description: "Service livraison - Octobre 2024", formule: "600 km × 3 DH = 1800 DH" } },
  ];

  const clientsList = [
    { nom: "Client A", description: "Maintenance mensuelle", periodicite: "1 mois", prochaine: "01/04/2024", fin: "-", statut: "Actif" },
    { nom: "Client B", description: "Location matériel", periodicite: "3 mois", prochaine: "15/04/2024", fin: "31/12/2024", statut: "Actif" },
    { nom: "Client C", description: "Support technique", periodicite: "15 jours", prochaine: "01/04/2024", fin: "-", statut: "Actif" },
    { nom: "Client D", description: "Hébergement web", periodicite: "1 an", prochaine: "01/01/2025", fin: "-", statut: "Actif" },
    { nom: "Client E", description: "Maintenance serveurs", periodicite: "1 mois", prochaine: "05/04/2024", fin: "31/12/2024", statut: "Actif" },
    { nom: "Client F", description: "Consulting", periodicite: "6 mois", prochaine: "30/06/2024", fin: "-", statut: "Actif" },
    { nom: "Client G", description: "Formation", periodicite: "3 mois", prochaine: "15/05/2024", fin: "31/12/2024", statut: "Actif" }
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
                {clientsList.map((client, index) => (
                  <TableRow key={index}>
                    <TableCell>{client.nom}</TableCell>
                    <TableCell>{client.description}</TableCell>
                    <TableCell>{client.periodicite}</TableCell>
                    <TableCell>{client.prochaine}</TableCell>
                    <TableCell>{client.fin}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                        {client.statut}
                      </span>
                    </TableCell>
                    <TableCell className="space-x-2">
                      <Button variant="ghost" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Générer
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedClient(client.nom)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Voir
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px]">
                          <DialogHeader>
                            <DialogTitle>Factures liées - {client.nom}</DialogTitle>
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
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button variant="ghost" size="sm" onClick={() => setSelectedFacture(facture)}>
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Détails
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[600px]">
                                          <DialogHeader>
                                            <DialogTitle>Détails de la facture {facture.numero}</DialogTitle>
                                          </DialogHeader>
                                          <div className="mt-4 space-y-4">
                                            <div>
                                              <h3 className="font-medium mb-2">Informations générales</h3>
                                              <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                  <p className="text-muted-foreground">Numéro</p>
                                                  <p>{facture.numero}</p>
                                                </div>
                                                <div>
                                                  <p className="text-muted-foreground">Date</p>
                                                  <p>{facture.date}</p>
                                                </div>
                                                <div>
                                                  <p className="text-muted-foreground">Statut</p>
                                                  <p>{facture.statut}</p>
                                                </div>
                                                <div>
                                                  <p className="text-muted-foreground">Montant total</p>
                                                  <p>{facture.montant}</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <h3 className="font-medium mb-2">Détails de la prestation</h3>
                                              <div className="space-y-2 text-sm">
                                                <p><span className="text-muted-foreground">Description :</span> {facture.details.description}</p>
                                                <p><span className="text-muted-foreground">Nombre de palettes :</span> {facture.details.nbPalettes}</p>
                                                <p><span className="text-muted-foreground">Prix unitaire :</span> {facture.details.prixUnitaire}</p>
                                                <div className="mt-4 p-3 bg-muted rounded-md">
                                                  <p className="font-medium">Formule de calcul :</p>
                                                  <p>{facture.details.formule}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
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
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FacturePermanente;
