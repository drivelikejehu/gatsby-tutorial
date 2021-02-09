import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Anim fugiat anim excepteur cupidatat quis velit in nulla mollit
          reprehenderit. Non aliquip cupidatat ex dolore nisi aliqua sit ut
          cillum non mollit laborum aliqua sunt. Et laboris nostrud aliqua
          veniam pariatur adipisicing ad pariatur. Ea et ea cillum id quis
          incididunt nulla.
        </p>
      </div>
    </Layout>
  )
}

export default blog
