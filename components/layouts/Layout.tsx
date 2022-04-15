import { FC } from "react"
import Head from "next/head"
import { NavBar } from '../ui';
import { useRouter } from "next/router";

interface Props {
	title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout: FC<Props> = ({ children, title }) => {

	

	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name="author" content="Camilo Buitrago" />
				<meta name="description" content={`Informacion sobre el pokemon ${title}`} />
				<meta name="keywords" content={`pokedex, pokemon, ${title}`} />
				<meta property="og:title" content={`Data about ${title}`} />
				<meta property="og:description" content={`Tis is the page about ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<NavBar />
			<main style={{
				padding: '0px 20px'
			}}>
				{children}
			</main>
		</>
	)
}

export default Layout