
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FileText, FileCheck } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const AFacturer = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Client.AFacturer</h1>
          <Dropdown
            className="w-[200px]"
            options={[
              { label: 'Liste 1', value: 'list1' },
              { label: 'Liste 2', value: 'list2' }
            ]}
            placeholder="Select List"
          />
        </div>

        <div className="space-y-4">
          <Card>
            <div className="flex flex-col space-y-1.5 p-6 border-b">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Client</h3>
            </div>
            <div className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Dropdown
                    className="w-full"
                    options={[
                      { label: 'Client 1', value: 'client1' },
                      { label: 'Client 2', value: 'client2' }
                    ]}
                    placeholder="Sélectionnez un client"
                  />
                </div>
                <Button className="p-button-secondary" label="Facture.overt" icon={<FileText className="w-4 h-4 mr-2" />}>
                  <span className="ml-2 bg-gray-200 px-2 rounded">0</span>
                </Button>
                <Button className="p-button-secondary" label="C.Affaire" icon={<FileCheck className="w-4 h-4 mr-2" />}>
                  <span className="ml-2 bg-gray-200 px-2 rounded">0</span>
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-0">
              <div className="p-4 border-b flex items-center gap-4">
                <Button className="p-button-secondary p-button-sm" label="Edit" />
                <Button className="p-button-secondary p-button-sm" label="Facturer" />
                <Button className="p-button-outlined p-button-sm" label="Clear" />
                <div className="flex-1" />
                <div className="relative w-64">
                  <InputText className="w-full" placeholder="Recherche..." />
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-6 gap-4 font-medium text-sm border-b pb-2">
                  <div>Parametre</div>
                  <div>N°.de.BL</div>
                  <div>Historique</div>
                  <div>Produit</div>
                  <div>Prix</div>
                  <div>Prix.Cout</div>
                </div>
                <div className="py-8 text-center text-gray-500">
                  No results found
                </div>
                <div className="flex items-center justify-between pt-4 text-sm">
                  <div>éléments par table: 10</div>
                  <div>0 à 0 de 0 élément</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AFacturer;
