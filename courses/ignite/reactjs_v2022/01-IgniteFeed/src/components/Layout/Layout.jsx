import { Sidebar } from '../Sidebar/'
import { Post } from '../Post/'

import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post />
        <Post />
      </main>
    </div>
  )
}
export { Layout }
