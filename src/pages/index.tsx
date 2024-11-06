import Image from 'next/image';
import localFont from 'next/font/local';
import { ManageButton } from '@js-smart/react-kit';
import { Button, useTheme } from '@mui/material';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export default function Home() {
	const theme = useTheme();

	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<div></div>
					<h1>Vite + React</h1>
					<div className="card">
						<ManageButton onClick={() => console.log('Button clicked')}>Click me</ManageButton>
						<Button variant="contained" color="primary" sx={{ mx: 2 }}>
							Test Button{' '}
						</Button>

						<p>Primary Color: {theme.palette.primary.main}</p>
					</div>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
