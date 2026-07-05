<script>
	let { photo, onclose, onnext, onprev } = $props();

	function onkey(e) {
		if (e.key === 'Escape') onclose();
		else if (e.key === 'ArrowRight') onnext();
		else if (e.key === 'ArrowLeft') onprev();
	}
</script>

<svelte:window onkeydown={onkey} />

<div
	class="lb"
	role="dialog"
	aria-modal="true"
	aria-label={photo.title}
	tabindex="-1"
>
	<button class="lb__backdrop" aria-label="Close" onclick={onclose}></button>

	<button class="lb__nav lb__nav--prev" aria-label="Previous" onclick={onprev}>‹</button>

	<figure class="lb__figure">
		<img src={photo.src} alt={photo.title} />
		<figcaption>
			<span class="lb__title">{photo.title}</span>
			<span class="lb__cat">{photo.category}</span>
		</figcaption>
	</figure>

	<button class="lb__nav lb__nav--next" aria-label="Next" onclick={onnext}>›</button>

	<button class="lb__close" aria-label="Close" onclick={onclose}>✕</button>
</div>

<style>
	.lb {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		padding: clamp(1rem, 4vw, 3rem);
	}
	.lb__backdrop {
		position: absolute;
		inset: 0;
		border: none;
		background: rgba(6, 6, 8, 0.94);
		backdrop-filter: blur(6px);
		cursor: zoom-out;
		animation: fade 0.3s var(--ease);
	}
	.lb__figure {
		position: relative;
		z-index: 1;
		margin: 0;
		max-width: min(1000px, 100%);
		max-height: 86vh;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		animation: rise 0.4s var(--ease);
	}
	.lb__figure img {
		max-height: 78vh;
		width: auto;
		margin-inline: auto;
		object-fit: contain;
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
	}
	figcaption {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 1rem;
		color: var(--fg-muted);
	}
	.lb__title {
		font-family: var(--serif);
		font-size: 1.25rem;
		color: var(--fg);
	}
	.lb__cat {
		font-size: 0.66rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.lb__nav {
		position: relative;
		z-index: 1;
		background: none;
		border: none;
		color: var(--fg-muted);
		font-size: 3rem;
		line-height: 1;
		cursor: pointer;
		padding: 1rem;
		transition: color 0.3s var(--ease);
	}
	.lb__nav:hover {
		color: var(--accent);
	}
	.lb__close {
		position: absolute;
		top: clamp(1rem, 3vw, 2rem);
		right: clamp(1rem, 3vw, 2rem);
		z-index: 2;
		background: none;
		border: none;
		color: var(--fg-muted);
		font-size: 1.4rem;
		cursor: pointer;
		transition: color 0.3s var(--ease);
	}
	.lb__close:hover {
		color: var(--accent);
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}

	@media (max-width: 720px) {
		.lb {
			grid-template-columns: 1fr;
		}
		.lb__nav {
			position: absolute;
			top: 50%;
			z-index: 2;
			transform: translateY(-50%);
		}
		.lb__nav--prev {
			left: 0.25rem;
		}
		.lb__nav--next {
			right: 0.25rem;
		}
	}
</style>
