
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

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Paramètres généraux
          </h1>
          <p className="text-muted-foreground mt-2">
            Configurez les paramètres généraux de votre application
          </p>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences Générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Langue</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une langue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Fuseau horaire</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un fuseau horaire" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
                      <SelectItem value="europe-london">Europe/London (UTC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="exemple@domaine.com" />
                </div>
                <div className="space-y-2">
                  <Label>Fréquence des notifications</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immédiate</SelectItem>
                      <SelectItem value="daily">Quotidienne</SelectItem>
                      <SelectItem value="weekly">Hebdomadaire</SelectItem>
                    </SelectContent>
                  </Select>
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

export default Settings;
