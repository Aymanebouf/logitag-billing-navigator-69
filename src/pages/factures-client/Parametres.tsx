
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

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
          <Card className="shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 border-b">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Informations de l'entreprise
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
                  <InputText className="w-full" placeholder="Votre entreprise" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">SIRET</label>
                  <InputText className="w-full" placeholder="123 456 789 00001" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">TVA Intracommunautaire</label>
                  <InputText className="w-full" placeholder="FR 12 345678900" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Devise par défaut</label>
                  <Dropdown 
                    className="w-full" 
                    options={[
                      { label: 'EUR (€)', value: 'eur' },
                      { label: 'USD ($)', value: 'usd' }
                    ]} 
                    placeholder="Sélectionnez une devise" 
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 border-b">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Numérotation des factures
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Préfixe</label>
                  <InputText className="w-full" placeholder="FAC-" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Numéro suivant</label>
                  <InputText className="w-full" placeholder="2024001" />
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="p-button" label="Enregistrer les modifications" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Parametres;
