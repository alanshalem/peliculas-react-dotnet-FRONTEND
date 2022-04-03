import IndiceGeneros from "./components/generos/IndiceGeneros";
import Home from "./pages/Home";

const rutas: rutasProps[] = [
  {
    path: "/",
    componente: Home,
    index: true,
    exact: true,
  },
  {
    path: "/generos",
    componente: IndiceGeneros,
  },
];

export default rutas;

interface rutasProps {
  path: string;
  index?: boolean;
  componente: any;
  exact?: boolean;
}
