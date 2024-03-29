import { useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

export const scrollToTop = (): void =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const useWindowSize = (): {width: number, height: number} => {
	const [dimensions, setWidth] = useState({ width: window.innerWidth, height: window.innerHeight })

	useEffect(() => {
		const handler = debounce(() => {
			setWidth({ width: window.innerWidth, height: window.innerHeight })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return dimensions
}

export const getScrollY = (): {scroll: number} => {
	const [scroll, setScroll] = useState({ scroll: window.scrollY })

	useEffect(() => {
		const handler = debounce(() => {
			setScroll({ scroll: window.scrollY })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return scroll
}

export const setVariableCssVars = (): void => {
	useEffect(() => {
		const setVh = debounce(() => {
			document.documentElement.style.setProperty('--vh', `${window.innerWidth}px`)
		}, 10)

		window.addEventListener('resize', setVh)

		return () => {
			window.removeEventListener('resize', setVh)
		}
	})
}


function getWindowDimensions(): {width: number, height: number} {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

export default function useWindowDimensions(): {width: number, height: number} {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		setWindowDimensions(getWindowDimensions())
	}, [])

	return windowDimensions
}

export function convertToTileCase(text: string): string {
	const result = text.replace(/([A-Z])/g, ' $1')
	return result.charAt(0).toUpperCase() + result.slice(1)
}
