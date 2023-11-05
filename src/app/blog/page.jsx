import CardList from "@/components/cardlList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/menu/Menu"
const page = ({searchParams}) => {
  const page = parseInt(searchParams) || 1;
  const {cat} = searchParams
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}

export default page