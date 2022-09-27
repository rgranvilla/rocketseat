import { Sidebar } from '../Sidebar/Sidebar'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <h1>Ricardo G.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          mollitia, neque blanditiis ipsum iusto quos molestiae sint minima
          laboriosam commodi itaque magni velit voluptates eius odio fugit iste
          animi! Sed.
        </p>
      </main>
    </div>
  )
}
export { Layout }
