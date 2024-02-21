// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import List from "@/pages/qcomps/list_keys_id";
 // import List from "@/pages/components/list_plain";
 //  import List from "@/pages/components/list_keys";
import List from "@/pages/qcomps/recipes";
import RecipeList from "@/pages/qcomps/recipes";
// import Profile from './components/whyState'
import Gallery from "./components/whyState";
import Form from "@/pages/components/updObjects";
import Scoreboard from "@/pages/qcomps/updObjectsForm";
export default function Home() {
  return (
    <div className={styles.main}>
        {/*<List/>*/}
        {/*<RecipeList/>*/}
       {/*<Gallery/>*/}
       {/* <Form/>*/}
        <Scoreboard/>
    </div>
  )
}
