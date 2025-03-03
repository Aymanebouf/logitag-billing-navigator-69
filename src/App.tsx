
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AFacturer from "./pages/factures-client/AFacturer";
import Factures from "./pages/factures-client/Factures";
import Archive from "./pages/factures-client/Archive";
import Validation from "./pages/factures-client/Validation";
import Parametres from "./pages/factures-client/Parametres";
import FacturePermanente from "./pages/factures-client/FacturePermanente";
import FactureFournisseur from "./pages/facture-fournisseur";
import Inventory from "./pages/inventory";
import Rapports from "./pages/rapports";
import Settings from "./pages/settings";

// PrimeReact imports
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/factures-client/a-facturer" element={<AFacturer />} />
        <Route path="/factures-client/factures" element={<Factures />} />
        <Route path="/factures-client/permanentes" element={<FacturePermanente />} />
        <Route path="/factures-client/archive" element={<Archive />} />
        <Route path="/factures-client/validation" element={<Validation />} />
        <Route path="/factures-client/parametres" element={<Parametres />} />
        <Route path="/factures-fournisseur" element={<FactureFournisseur />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/rapports" element={<Rapports />} />
        <Route path="/parametres" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
