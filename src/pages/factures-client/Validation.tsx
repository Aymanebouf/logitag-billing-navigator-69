
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { CheckCircle, XCircle } from "lucide-react";
import { PrimeAdapter } from "@/components/PrimeAdapter";

const Validation = () => {
  const toast = useRef(null);

  const showSuccessToast = (message) => {
    toast.current.show({
      severity: 'success',
      summary: 'Succès',
      detail: message,
      life: 3000
    });
  };

  const showErrorToast = (message) => {
    toast.current.show({
      severity: 'error',
      summary: 'Erreur',
      detail: message,
      life: 3000
    });
  };

  const handleValidate = (factureId) => {
    showSuccessToast(`Facture #${factureId} validée avec succès`);
  };

  const handleReject = (factureId) => {
    showErrorToast(`Facture #${factureId} rejetée`);
  };

  return (
    <Layout>
      <Toast ref={toast} />
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Validation des Factures
          </h1>
          <p className="text-muted-foreground mt-2">
            Validez les factures en attente
          </p>
        </header>

        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className={PrimeAdapter.cardClass("hover:shadow-md transition-shadow")}>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Facture #{i}</h3>
                    <p className="text-sm text-muted-foreground">Client {String.fromCharCode(64 + i)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className={PrimeAdapter.buttonClass("outline", "sm")} 
                      label="Rejeter" 
                      icon={() => <XCircle className="w-4 h-4 mr-1" />}
                      onClick={() => handleReject(i)}
                    />
                    <Button 
                      className={PrimeAdapter.buttonClass("default", "sm")} 
                      label="Valider" 
                      icon={() => <CheckCircle className="w-4 h-4 mr-1" />}
                      onClick={() => handleValidate(i)}
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Montant</p>
                    <p className="font-medium">{1500 * i} €</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">01/03/2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Échéance</p>
                    <p className="font-medium">31/03/2024</p>
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

export default Validation;
