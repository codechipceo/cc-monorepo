import Sidebar from '../layout/sidebar';
import './_app.scss';
export function App() {

  return (
    <div className="body">
      <Sidebar />

      <div>page content</div>
    </div>
  );
}

export default App;
