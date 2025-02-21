
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Parametres = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Paramètres de Facturation
          </h1>
          <p className="text-muted-foreground mt-2">
            Configurez vos préférences de facturation
          </p>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de l'entreprise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nom de l'entreprise</Label>
                  <Input placeholder="Votre entreprise" />
                </div>
                <div className="space-y-2">
                  <Label>SIRET</Label>
                  <Input placeholder="123 456 789 00001" />
                </div>
                <div className="space-y-2">
                  <Label>TVA Intracommunautaire</Label>
                  <Input placeholder="FR 12 345678900" />
                </div>
                <div className="space-y-2">
                  <Label>Devise par défaut</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une devise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Numérotation des factures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Préfixe</Label>
                  <Input placeholder="FAC-" />
                </div>
                <div className="space-y-2">
                  <Label>Numéro suivant</Label>
                  <Input placeholder="2024001" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button>
              Enregistrer les modifications
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Parametres;
