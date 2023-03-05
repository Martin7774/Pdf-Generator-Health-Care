import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import PersonalInformationForm from "./components/PersonalInformationForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/personal-data-form',
        element: <PersonalInformationForm />
    }
];

export default AppRoutes;
