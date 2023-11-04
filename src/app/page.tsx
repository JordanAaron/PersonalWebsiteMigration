import styles from '@/app/page.module.scss'
import { heading } from '@/app/fonts'

export default function Home() {
	return (
		<main>
			<p className={styles.p}>New Website!</p>
			<p className={`${heading.className} ${styles.description}`}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
				eligendi nemo magni. Dolorum quibusdam doloremque vel nulla neque in
				quaerat, obcaecati fuga ratione maiores officia consequatur, expedita,
				libero natus.
			</p>
		</main>
	)
}
