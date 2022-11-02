import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../src/Navbar'
import CartaLibro from '../src/CartaLibro'

const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 2,
}
export default function Home() {
    return (
        <div>
            <Head>
                <title>Libreria Fatima</title>
                <meta name="description" content="Libreria Fatima" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CartaLibro libro = {property}></CartaLibro>
        </div>
    )
}
