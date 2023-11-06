import { Kumbh_Sans, Quicksand, Urbanist } from 'next/font/google'

export const bodyFont = Urbanist({
	subsets: ['latin'],
	variable: '--body-font',
})

export const headingFont = Quicksand({
	subsets: ['latin'],
	variable: '--heading-font',
})

export const logoFont = Kumbh_Sans({
	subsets: ['latin'],
	variable: '--logo-font',
})
