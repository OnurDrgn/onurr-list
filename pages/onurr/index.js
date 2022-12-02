import styles from '../../styles/onurr.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: { onurr: data }
    }
}

const Onurr = ({ onurr }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {onurr.map(onur => (
                <Link href={'/onurr/' + onur.id} key={onur.id} legacyBehavior>
                    <a className={styles.single}>
                        <h3>{onur.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Onurr;
