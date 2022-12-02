import Link from "next/link";
import Head from 'next/head'
import { useEffect } from "react";
import router, { useRouter } from "next/router"
const NorFound = () => {

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Onur | 404</title>
                <meta name='keywords' content='onur' />
            </Head>
            <div className="not-found">
                <h1>Ooooppsss.....</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the
                    <Link href="/" legacyBehavior>
                        <a> Homepage</a>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default NorFound;