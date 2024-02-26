// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/queueUpdates'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/list_keys_id'
import BucketList from './qcomps/arrObj'
import RequestTracker from './qcomps/shoppingCart'
import RecipeList from './qcomps/recipes'



export default function Home() {
    return (
        <div className={styles.main}>
            <Gallery />
            <Form />
            <FeedbackForm />
            <Counter />
            <Scoreboard />
            <BucketList />
            <RequestTracker />
            <RecipeList />
            <List />
        </div>
    )
}