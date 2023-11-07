import styles from './Text.module.scss'

interface TextProps {
	children: React.ReactNode
	type: 'heading' | 'body'
}

export const Text = ({ children, type }: TextProps) => {
	switch (type) {
		case 'heading':
			return <div className={`${styles.headingText}`}>{children}</div>
		default:
			return <div className={`${styles.bodyText}`}>{children}</div>
	}
}
