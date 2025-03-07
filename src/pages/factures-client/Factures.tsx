
import { Layout } from "@/components/Layout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FileText, Download, Plus } from "lucide-react";
import { useState } from "react";

const Factures = () => {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);

  const invoices = [
    {
      number: 'FAC-2024-001',
      date: '01/03/2024',
      client: 'Client A',
      amount: '1,500 €',
      status: 'Payée'
    }
  ];

  const statusBodyTemplate = (rowData) => {
    return (
      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
        {rowData.status}
      </span>
    );
  };

  const actionBodyTemplate = () => {
    return <Button label="Voir" className="p-button-text p-button-sm" />;
  };

  const footerExportDialog = (
    <div>
      <Button label="Télécharger" icon={<Download className="w-4 h-4 mr-2" />} onClick={() => setIsExportOpen(false)} />
    </div>
  );

  const footerNewInvoiceDialog = (
    <div>
      <Button label="Créer la facture" onClick={() => setIsNewInvoiceOpen(false)} />
    </div>
  );

  return (
    <Layout>
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Gestion des Factures
          </h1>
          <p className="text-muted-foreground mt-2">
            Consultez et gérez vos factures clients
          </p>
        </header>

        <Card>
          <div className="p-4 border-bottom">
            <div className="text-xl font-semibold">Liste des Factures</div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <Button 
                  label="Nouvelle Facture" 
                  icon={<Plus className="w-4 h-4 mr-2" />} 
                  onClick={() => setIsNewInvoiceOpen(true)} 
                />
                <Button 
                  label="Exporter" 
                  icon={<Download className="w-4 h-4 mr-2" />} 
                  className="p-button-outlined" 
                  onClick={() => setIsExportOpen(true)} 
                />
              </div>
              <div className="w-64">
                <InputText placeholder="Rechercher une facture..." className="w-full" />
              </div>
            </div>
            
            <DataTable value={invoices} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
              <Column field="number" header="Numéro"></Column>
              <Column field="date" header="Date"></Column>
              <Column field="client" header="Client"></Column>
              <Column field="amount" header="Montant"></Column>
              <Column field="status" header="Statut" body={statusBodyTemplate}></Column>
              <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>
          </div>
        </Card>

        <Dialog 
          header="Exporter la facture" 
          visible={isExportOpen} 
          style={{ width: '425px' }} 
          footer={footerExportDialog}
          onHide={() => setIsExportOpen(false)}
        >
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Numéro de facture</label>
              <InputText id="invoice-number" placeholder="FAC-2024-XXX" className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Format d'export</label>
              <Dropdown
                options={[
                  { label: 'PDF', value: 'pdf' },
                  { label: 'Excel', value: 'excel' },
                  { label: 'CSV', value: 'csv' }
                ]}
                placeholder="Choisir un format"
                className="w-full"
              />
            </div>
          </div>
        </Dialog>

        <Dialog 
          header="Créer une nouvelle facture" 
          visible={isNewInvoiceOpen} 
          style={{ width: '425px' }} 
          footer={footerNewInvoiceDialog}
          onHide={() => setIsNewInvoiceOpen(false)}
        >
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Client</label>
              <InputText id="client" placeholder="Nom du client" className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date de facturation</label>
              <InputText id="date" type="date" className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Montant (€)</label>
              <InputText id="amount" type="number" placeholder="0.00" className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <InputText id="description" placeholder="Description de la facture" className="w-full" />
            </div>
          </div>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Factures;
