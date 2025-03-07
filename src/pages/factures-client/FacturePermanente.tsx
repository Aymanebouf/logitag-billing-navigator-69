
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
    { 
      id: 1, 
      numero: "F2024-001", 
      date: "01/01/2024", 
      montant: "500 €", 
      statut: "Payée", 
      details: { 
        nbPalettes: 5, 
        prixUnitaire: "100 €", 
        description: "Location de palettes - Janvier 2024", 
        formule: "5 palettes × 100 € = 500 €", 
        typePrestation: "location-palettes"
      } 
    },
    { 
      id: 2, 
      numero: "F2024-002", 
      date: "01/02/2024", 
      montant: "750 €", 
      statut: "Payée", 
      details: { 
        heures: 15, 
        tauxHoraire: "50 €", 
        description: "Maintenance équipement - Février 2024", 
        formule: "15 heures × 50 € = 750 €", 
        typePrestation: "maintenance"
      } 
    },
    { 
      id: 3, 
      numero: "F2024-003", 
      date: "01/03/2024", 
      montant: "1200 €", 
      statut: "En attente", 
      details: { 
        surface: 60, 
        prixM2: "20 €", 
        description: "Nettoyage industriel - Mars 2024", 
        formule: "60 m² × 20 € = 1200 €", 
        typePrestation: "nettoyage"
      } 
    },
    { 
      id: 4, 
      numero: "F2024-004", 
      date: "01/04/2024", 
      montant: "2000 €", 
      statut: "En attente", 
      details: { 
        nbContainers: 4, 
        prixContainer: "500 €", 
        description: "Stockage containers - Avril 2024", 
        formule: "4 containers × 500 € = 2000 €", 
        typePrestation: "stockage-containers" 
      } 
    },
    { 
      id: 5, 
      numero: "F2024-005", 
      date: "01/05/2024", 
      montant: "3600 €", 
      statut: "À générer", 
      details: { 
        poidsTotal: 1200, 
        prixKg: "3 €", 
        description: "Transport marchandises - Mai 2024", 
        formule: "1200 kg × 3 € = 3600 €", 
        typePrestation: "transport" 
      } 
    },
    { 
      id: 6, 
      numero: "F2024-006", 
      date: "01/06/2024", 
      montant: "900 €", 
      statut: "À générer", 
      details: { 
        nbPersonnes: 6, 
        prixPersonne: "150 €", 
        description: "Formation sécurité - Juin 2024", 
        formule: "6 personnes × 150 € = 900 €", 
        typePrestation: "formation" 
      } 
    },
    { 
      id: 7, 
      numero: "F2024-007", 
      date: "01/07/2024", 
      montant: "1500 €", 
      statut: "À générer", 
      details: { 
        nbMachines: 3, 
        prixMaintenance: "500 €", 
        description: "Maintenance préventive - Juillet 2024", 
        formule: "3 machines × 500 € = 1500 €", 
        typePrestation: "maintenance-machines" 
      } 
    },
    { 
      id: 8, 
      numero: "F2024-008", 
      date: "01/08/2024", 
      montant: "4000 €", 
      statut: "À générer", 
      details: { 
        puissance: 2000, 
        prixKw: "2 €", 
        description: "Consommation électrique - Août 2024", 
        formule: "2000 kW × 2 € = 4000 €", 
        typePrestation: "electricite" 
      } 
    },
    { 
      id: 9, 
      numero: "F2024-009", 
      date: "01/09/2024", 
      montant: "2500 €", 
      statut: "À générer", 
      details: { 
        volume: 50, 
        prixM3: "50 €", 
        description: "Location espace stockage - Septembre 2024", 
        formule: "50 m³ × 50 € = 2500 €", 
        typePrestation: "stockage-espace" 
      } 
    },
    { 
      id: 10, 
      numero: "F2024-010", 
      date: "01/10/2024", 
      montant: "1800 €", 
      statut: "À générer", 
      details: { 
        distance: 600, 
        prixKm: "3 €", 
        description: "Service livraison - Octobre 2024", 
        formule: "600 km × 3 € = 1800 €", 
        typePrestation: "livraison" 
      } 
    },
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

  // Fonction pour afficher les détails selon le type de prestation
  const renderDetailsFields = (facture) => {
    const details = facture.details;
    
    switch(details.typePrestation) {
      case "location-palettes":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Nombre de palettes :</span> {details.nbPalettes}</p>
            <p><span className="text-muted-foreground">Prix unitaire :</span> {details.prixUnitaire}</p>
          </>
        );
      case "maintenance":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Heures de travail :</span> {details.heures}</p>
            <p><span className="text-muted-foreground">Taux horaire :</span> {details.tauxHoraire}</p>
          </>
        );
      case "nettoyage":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Surface nettoyée :</span> {details.surface} m²</p>
            <p><span className="text-muted-foreground">Prix au m² :</span> {details.prixM2}</p>
          </>
        );
      case "stockage-containers":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Nombre de containers :</span> {details.nbContainers}</p>
            <p><span className="text-muted-foreground">Prix par container :</span> {details.prixContainer}</p>
          </>
        );
      case "transport":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Poids total :</span> {details.poidsTotal} kg</p>
            <p><span className="text-muted-foreground">Prix au kg :</span> {details.prixKg}</p>
          </>
        );
      case "formation":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Nombre de participants :</span> {details.nbPersonnes}</p>
            <p><span className="text-muted-foreground">Prix par personne :</span> {details.prixPersonne}</p>
          </>
        );
      case "maintenance-machines":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Nombre de machines :</span> {details.nbMachines}</p>
            <p><span className="text-muted-foreground">Prix par machine :</span> {details.prixMaintenance}</p>
          </>
        );
      case "electricite":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Puissance consommée :</span> {details.puissance} kW</p>
            <p><span className="text-muted-foreground">Prix au kW :</span> {details.prixKw}</p>
          </>
        );
      case "stockage-espace":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Volume :</span> {details.volume} m³</p>
            <p><span className="text-muted-foreground">Prix au m³ :</span> {details.prixM3}</p>
          </>
        );
      case "livraison":
        return (
          <>
            <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
            <p><span className="text-muted-foreground">Distance parcourue :</span> {details.distance} km</p>
            <p><span className="text-muted-foreground">Prix au km :</span> {details.prixKm}</p>
          </>
        );
      default:
        return (
          <p><span className="text-muted-foreground">Description :</span> {details.description}</p>
        );
    }
  };

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
                  <Label htmlFor="typePrestation">Type de prestation</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="location-palettes">Location de palettes</SelectItem>
                      <SelectItem value="maintenance">Services de maintenance</SelectItem>
                      <SelectItem value="nettoyage">Nettoyage industriel</SelectItem>
                      <SelectItem value="stockage-containers">Stockage de containers</SelectItem>
                      <SelectItem value="transport">Transport de marchandises</SelectItem>
                      <SelectItem value="formation">Formation</SelectItem>
                      <SelectItem value="maintenance-machines">Maintenance de machines</SelectItem>
                      <SelectItem value="electricite">Consommation électrique</SelectItem>
                      <SelectItem value="stockage-espace">Location d'espace de stockage</SelectItem>
                      <SelectItem value="livraison">Service de livraison</SelectItem>
                    </SelectContent>
                  </Select>
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
                                                {renderDetailsFields(facture)}
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
