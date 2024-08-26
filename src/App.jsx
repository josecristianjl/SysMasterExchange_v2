import { useState } from 'react';
import './Global.css'
import { Header } from './components/layout/Header.jsx'
import { Sidebar } from './components/layout/Sidebar.jsx'

export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container">
      <header> <Header onSidebar={onSidebar} sidebarOpen={sidebarOpen}/> </header>
      <aside> <Sidebar sidebarOpen={sidebarOpen} /> </aside>
      <main> Content </main>
      <footer> Footer </footer>
    </div>
  )
}
