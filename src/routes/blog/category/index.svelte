<script>
	import Head from 'svelte-seo';
	import { snakeCase } from '$utils';
	/** @type {Array<any>}*/
	export let categories;
	const meta = {
		title: 'Blog Category • Kudadam',
		description: 'This page displays all the blog categories',
		canonical: 'https://www.kudadam.com/blog/category',
		image: 'https://ik.imagekit.io/kudadam/logo/logo.png'
	};
</script>

<Head
	title={meta.title}
	nofollow={true}
	noindex={true}
	description={meta.description}
	openGraph={{
		title: `${meta.title}`,
		description: `${meta.description}`,
		url: `${meta.canonical}`,
		type: 'website',
		images: [
			{
				url: `${meta.image}`,
				width: 850,
				height: 650,
				alt: 'Logo'
			}
		]
	}}
	twitter={{
		site: '@kudadam_',
		title: `${meta.title}`,
		description: `${meta.description}`,
		image: `${meta.image}`,
		imageAlt: 'Logo of Kudadam'
	}}
/>

<main>
	<div>
		<h1 class="text-center font-bold dark:text-white text-red-500 my-4">Blog Category</h1>
		<p class="text-black dark:text-white text-center"><i>Various categories for the blog</i></p>
		<div class="flex flex-wrap mt-10 justify-center mx-auto h-screen">
			{#each categories as category}
				<a
					sveltekit:prefetch
					href="/blog/category/{snakeCase(category)}"
					class="hover:animate-pulse"
				>
					<span class="m-4 p-3 rounded-md border border-gray-300 dark:border-gray-800"
						>{category}</span
					>
				</a>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr min(65ch, 100%) 1fr;
	}

	main > div {
		grid-column: 2/3;
	}
</style>
