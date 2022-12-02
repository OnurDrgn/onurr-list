import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Onur | Home</title>
        <meta name='keywords' content='onur'/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Astatin; simgesi At, atom numarası 85 olan radyoaktif bir elementtir. Yalnızca bazı ağır elementlerin bozunma ürünü olarak meydana gelir ve Dünya'nın yerkabuğunda doğal yollarla oluşan elementlerin en nadir olanıdır.</p>
        <p className={styles.text}> En kararlı izotopu, 8,1 saatlik yarı ömre sahip astatin-210'dur. Kendi radyoaktivitesinin ürettiği ısı ile anında buharlaşmasından ötürü elementin saf bir örneği elde edilememiştir.</p>
        <p className={styles.text}>85 atom numaralı elemente dair ortaya atılan ilk görüş, 1922 yılında böyle bir elementin varlığının tespit edilemediği ve var olmadığı yönündeydi. </p>
        <p className={styles.text}> İlki 1931'de olmak üzere keşfine dair çeşitli iddialar ortaya atılsa da bunlar ya kabul görmedi ya da teyit edilmedi.</p>
        <Link href="/onurr/" legacyBehavior>
          <a className={styles.btn}>See Onurr Listing</a>
        </Link>
      </div>
    </>
  )
}
