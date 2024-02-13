// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './components/gallery'
import Profile_mistake from "@/pages/qcomps/profile_mistake";
import {MyComp} from "@/pages/qcomps/firstcomp";
import Bio from "@/pages/qcomps/bios";
import TodoList from "@/pages/qcomps/todos";
import Profile_try from "@/pages/components/profile_props";
import Holder from "@/pages/components/square";


export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
        <Profile_mistake/>
        <MyComp/>
        <Bio/>
        <TodoList/>
        <Profile_try/>
        <Holder/>
    </div>
  )
}
