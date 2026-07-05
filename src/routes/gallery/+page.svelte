<script>
	import { onMount } from 'svelte';
	import { site, photos, categories } from '$lib/data/site.js';
	import Gallery from '$lib/components/Gallery.svelte';

	let filter = $state('all');

	const filters = [{ id: 'all', label: 'All' }, ...categories];

	// Preselect a category when arriving via /gallery/#portrait etc.
	onMount(() => {
		const hash = window.location.hash.slice(1);
		if (filters.some((f) => f.id === hash)) filter = hash;
	});
	let shown = $derived(
		filter === 'all' ? photos : photos.filter((p) => p.category === filter)
	);
</script>

<svelte:head>
	<title>Gallery — {site.name}</title>
	<meta name="description" content="Full photography gallery by {site.name}." />
</svelte:head>

<section class="wrap page-head">
	<p class="eyebrow">Portfolio</p>
	<h1>Gallery</h1>
	<p class="page-head__lead">
		A rotating selection of recent and archival work. Click any frame to enlarge.
	</p>

	<div class="filters" role="tablist" aria-label="Filter by category">
		{#each filters as f}
			<button
				id={f.id}
				role="tab"
				aria-selected={filter === f.id}
				class="filters__btn"
				class:active={filter === f.id}
				onclick={() => (filter = f.id)}
			>
				{f.label}
			</button>
		{/each}
	</div>
</section>

<section class="wrap gallery-wrap">
	{#key filter}
		<Gallery photos={shown} />
	{/key}
</section>

<style>
	.page-head {
		padding-block: clamp(3rem, 7vw, 5rem) 2rem;
	}
	.page-head h1 {
		font-size: clamp(2.4rem, 6vw, 4rem);
		margin: 0.5rem 0 0.75rem;
	}
	.page-head__lead {
		color: var(--fg-muted);
		max-width: 44ch;
		margin: 0 0 2.5rem;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.filters__btn {
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		padding: 0.6rem 1.15rem;
		background: none;
		color: var(--fg-muted);
		border: 1px solid var(--line);
		border-radius: 999px;
		cursor: pointer;
		transition: all 0.3s var(--ease);
	}
	.filters__btn:hover {
		color: var(--fg);
		border-color: var(--fg-faint);
	}
	.filters__btn.active {
		color: #17130c;
		background: var(--accent);
		border-color: var(--accent);
	}
	.gallery-wrap {
		padding-block: 1rem 2rem;
	}
</style>
