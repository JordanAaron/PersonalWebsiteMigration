import { Text } from './_components/atoms/text/Text'
import { logoFont } from './fonts'

export default function Home() {
	return (
		<main>
			<p className={logoFont.className} style={{ fontSize: '28px' }}>
				jaqua
			</p>
			<Text type="heading">Hi, I'm Jordan</Text>
			<Text type="body">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
				eligendi nemo magni. Dolorum quibusdam doloremque vel nulla neque in
				quaerat, obcaecati fuga ratione maiores officia consequatur, expedita,
				libero natus.
			</Text>
		</main>
	)
}
