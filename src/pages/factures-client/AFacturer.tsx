
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileCheck } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AFacturer = () => {
  const [pageTitle, setPageTitle] = useState("Génération factures");
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Logitag - Génération factures";
  }, []);

  return (
    <Layout>
      <div className="space-y-6">
        <div className={`${isMobile ? 'flex flex-col space-y-3' : 'flex justify-between items-center'}`}>
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
          <Select>
            <SelectTrigger className={`${isMobile ? 'w-full' : 'w-[200px]'}`}>
              <SelectValue placeholder="Select List" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="list1">Liste 1</SelectItem>
              <SelectItem value="list2">Liste 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`${isMobile ? 'flex flex-col space-y-3' : 'flex gap-4'}`}>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client1">Client 1</SelectItem>
                      <SelectItem value="client2">Client 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className={`${isMobile ? 'flex justify-between' : ''}`}>
                  <Button variant="secondary" className="mr-2">
                    <FileText className="w-4 h-4 mr-2" />
                    Facture.overt
                    <span className="ml-2 bg-gray-200 px-2 rounded">0</span>
                  </Button>
                  <Button variant="secondary">
                    <FileCheck className="w-4 h-4 mr-2" />
                    C.Affaire
                    <span className="ml-2 bg-gray-200 px-2 rounded">0</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className={`p-4 border-b ${isMobile ? 'flex flex-wrap' : 'flex items-center'} gap-2`}>
                <Button variant="secondary" size="sm">Edit</Button>
                <Button variant="secondary" size="sm">Facturer</Button>
                <Button variant="outline" size="sm">Clear</Button>
                <div className={`${isMobile ? 'w-full mt-2' : 'flex-1'}`} />
                <div className={`${isMobile ? 'w-full' : 'relative w-64'}`}>
                  <Input placeholder="Recherche..." />
                </div>
              </div>
              <div className={`p-4 ${isMobile ? 'overflow-x-auto' : ''}`}>
                <div className={`${isMobile ? 'w-[800px]' : ''} grid grid-cols-6 gap-4 font-medium text-sm border-b pb-2`}>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AFacturer;
