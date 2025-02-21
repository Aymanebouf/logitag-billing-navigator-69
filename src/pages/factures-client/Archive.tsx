
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

        <Card className="bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle>Recherche dans les archives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Année</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Client</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tous les clients" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client1">Client A</SelectItem>
                    <SelectItem value="client2">Client B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Numéro de facture</label>
                <Input placeholder="Ex: FAC-2024-001" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
