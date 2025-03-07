
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { PrimeAdapter } from "@/components/PrimeAdapter";

const Archive = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Archives
          </h1>
          <p className="text-muted-foreground mt-2">
            Consultez les factures archivées
          </p>
        </header>

        <Card className={PrimeAdapter.cardClass("bg-gradient-to-br from-white to-gray-50")}>
          <div className="flex flex-col space-y-1.5 p-6 border-b">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Recherche dans les archives
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Année</label>
                <Dropdown
                  className={PrimeAdapter.selectClass()}
                  options={[
                    { label: '2024', value: '2024' },
                    { label: '2023', value: '2023' },
                    { label: '2022', value: '2022' }
                  ]}
                  placeholder="Sélectionnez une année"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Client</label>
                <Dropdown
                  className={PrimeAdapter.selectClass()}
                  options={[
                    { label: 'Client A', value: 'client1' },
                    { label: 'Client B', value: 'client2' }
                  ]}
                  placeholder="Tous les clients"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Numéro de facture</label>
                <InputText className={PrimeAdapter.inputClass()} placeholder="Ex: FAC-2024-001" />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className={PrimeAdapter.cardClass("hover:shadow-md transition-shadow")}>
              <div className="pt-6 p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">FAC-2023-00{i}</p>
                      <p className="text-xs text-muted-foreground">15/12/2023</p>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                      Archivée
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm font-medium">Client {String.fromCharCode(64 + i)}</p>
                    <p className="text-2xl font-bold">{1500 * i} €</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
