import { Header } from "./components/layout/Header"
import './Global.css'

export const App = () => {

  return (
    <section className="container">
      <header> <Header /> </header>
      <aside> Sidebar </aside>
      <main> Content </main>
      <footer> Footer </footer>
    </section>
  )
}
