<script>
	import Lightbox from './Lightbox.svelte';

	let { photos = [] } = $props();

	let active = $state(-1);

	const open = (i) => (active = i);
	const close = () => (active = -1);
	const next = () => (active = (active + 1) % photos.length);
	const prev = () => (active = (active - 1 + photos.length) % photos.length);
</script>

<div class="grid">
	{#each photos as photo, i (photo.id)}
		<button
			class="tile"
			style="aspect-ratio: {photo.w} / {photo.h}"
			onclick={() => open(i)}
			aria-label="View {photo.title}"
		>
			<img src={photo.src} alt={photo.title} loading="lazy" width={photo.w} height={photo.h} />
			<span class="tile__meta">
				<span class="tile__title">{photo.title}</span>
				<span class="tile__cat">{photo.category}</span>
			</span>
		</button>
	{/each}
</div>

{#if active > -1}
	<Lightbox photo={photos[active]} onclose={close} onnext={next} onprev={prev} />
{/if}

<style>
	.grid {
		columns: 3;
		column-gap: 1.25rem;
	}
	.tile {
		display: block;
		width: 100%;
		margin: 0 0 1.25rem;
		padding: 0;
		border: none;
		background: var(--bg-elev);
		position: relative;
		overflow: hidden;
		cursor: pointer;
		break-inside: avoid;
	}
	.tile img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.7s var(--ease), filter 0.7s var(--ease);
		filter: grayscale(0.15);
	}
	.tile:hover img,
	.tile:focus-visible img {
		transform: scale(1.04);
		filter: grayscale(0);
	}
	.tile__meta {
		position: absolute;
		inset: auto 0 0 0;
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.5rem 1.1rem 1rem;
		background: linear-gradient(to top, rgba(8, 8, 10, 0.85), transparent);
		opacity: 0;
		transform: translateY(8px);
		transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
	}
	.tile:hover .tile__meta,
	.tile:focus-visible .tile__meta {
		opacity: 1;
		transform: translateY(0);
	}
	.tile__title {
		font-family: var(--serif);
		font-size: 1.15rem;
	}
	.tile__cat {
		font-size: 0.66rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--accent);
	}

	@media (max-width: 900px) {
		.grid {
			columns: 2;
		}
	}
	@media (max-width: 560px) {
		.grid {
			columns: 1;
		}
	}
</style>
