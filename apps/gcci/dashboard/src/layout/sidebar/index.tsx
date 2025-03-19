
import { sidebarRoutes } from './routes';
import  {Sidebar as SidebarComponent} from './subcomponents/Sidebar'
const Sidebar = () => {
  return <SidebarComponent items={sidebarRoutes} />;
}

export default Sidebar