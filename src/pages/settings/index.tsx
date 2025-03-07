
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

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
            <div className="flex flex-col space-y-1.5 p-6 border-b">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Préférences Générales
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Langue</label>
                  <Dropdown
                    options={[
                      { label: 'Français', value: 'fr' },
                      { label: 'English', value: 'en' }
                    ]}
                    placeholder="Sélectionnez une langue"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fuseau horaire</label>
                  <Dropdown
                    options={[
                      { label: 'Europe/Paris (UTC+1)', value: 'europe-paris' },
                      { label: 'Europe/London (UTC)', value: 'europe-london' }
                    ]}
                    placeholder="Sélectionnez un fuseau horaire"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col space-y-1.5 p-6 border-b">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Notifications
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <InputText type="email" placeholder="exemple@domaine.com" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fréquence des notifications</label>
                  <Dropdown
                    options={[
                      { label: 'Immédiate', value: 'immediate' },
                      { label: 'Quotidienne', value: 'daily' },
                      { label: 'Hebdomadaire', value: 'weekly' }
                    ]}
                    placeholder="Sélectionnez une fréquence"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button label="Enregistrer les modifications" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
