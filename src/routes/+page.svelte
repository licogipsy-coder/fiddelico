<script>
	import { base } from '$app/paths';
	import { site, featured, categories } from '$lib/data/site.js';
	import Gallery from '$lib/components/Gallery.svelte';
</script>

<svelte:head>
	<title>{site.name} — {site.role}</title>
	<meta
		name="description"
		content="{site.name}, {site.role} based in {site.location}. Portrait, landscape and street photography."
	/>
</svelte:head>

<section class="hero">
	<div class="hero__bg" aria-hidden="true"></div>
	<div class="wrap hero__inner">
		<p class="eyebrow">{site.role} — {site.location}</p>
		<h1 class="hero__title">{site.tagline}</h1>
		<p class="hero__lead">
			A portfolio of portrait, landscape and street work by {site.name}.
		</p>
		<div class="hero__cta">
			<a class="btn btn--solid" href="{base}/gallery/">View Gallery</a>
			<a class="btn" href="{base}/contact/">Book a Session</a>
		</div>
	</div>
	<span class="hero__scroll" aria-hidden="true">Scroll</span>
</section>

<section class="wrap block">
	<header class="block__head">
		<p class="eyebrow">Selected Work</p>
		<h2>Featured frames</h2>
	</header>
	<Gallery photos={featured} />
	<div class="block__more">
		<a class="btn" href="{base}/gallery/">See the full gallery</a>
	</div>
</section>

<section class="wrap block">
	<header class="block__head">
		<p class="eyebrow">Disciplines</p>
		<h2>What I photograph</h2>
	</header>
	<ul class="disciplines">
		{#each categories as c}
			<li>
				<a href="{base}/gallery/#{c.id}">
					<span class="disciplines__label">{c.label}</span>
					<span class="disciplines__arrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(88vh, 820px);
		display: flex;
		align-items: flex-end;
		padding-block: 6rem 4rem;
		overflow: hidden;
	}
	.hero__bg {
		position: absolute;
		inset: 0;
		background-image: url('https://picsum.photos/seed/lico-hero/1920/1200');
		background-size: cover;
		background-position: center;
		filter: grayscale(0.35) brightness(0.55);
		transform: scale(1.03);
	}
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, var(--bg) 4%, rgba(14, 14, 16, 0.2) 60%);
	}
	.hero__inner {
		position: relative;
		z-index: 1;
	}
	.hero__title {
		font-size: clamp(2.6rem, 7vw, 5.5rem);
		max-width: 16ch;
		margin: 1rem 0 1.25rem;
	}
	.hero__lead {
		color: var(--fg-muted);
		font-size: 1.05rem;
		max-width: 46ch;
		margin: 0 0 2rem;
	}
	.hero__cta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.hero__scroll {
		position: absolute;
		right: var(--pad);
		bottom: 2rem;
		z-index: 1;
		font-size: 0.68rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--fg-faint);
		writing-mode: vertical-rl;
	}

	.block {
		padding-block: clamp(3.5rem, 8vw, 6rem);
	}
	.block__head {
		margin-bottom: 2.5rem;
	}
	.block__head h2 {
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		margin-top: 0.6rem;
	}
	.block__more {
		margin-top: 2.5rem;
		text-align: center;
	}

	.disciplines {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--line);
	}
	.disciplines a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.6rem 0.25rem;
		border-bottom: 1px solid var(--line);
		transition: padding 0.4s var(--ease), color 0.4s var(--ease);
	}
	.disciplines a:hover {
		padding-inline: 1rem 0.25rem;
		color: var(--accent);
	}
	.disciplines__label {
		font-family: var(--serif);
		font-size: clamp(1.5rem, 4vw, 2.4rem);
	}
	.disciplines__arrow {
		font-size: 1.4rem;
		opacity: 0;
		transform: translateX(-8px);
		transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
	}
	.disciplines a:hover .disciplines__arrow {
		opacity: 1;
		transform: translateX(0);
	}
</style>
