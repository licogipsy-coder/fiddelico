<script>
	import { base } from '$app/paths';
	import { site } from '$lib/data/site.js';

	const stats = [
		{ n: '12+', l: 'Years shooting' },
		{ n: '40+', l: 'Editorial features' },
		{ n: '15', l: 'Countries' }
	];

	const services = [
		{ t: 'Portraiture', d: 'Studio and on-location portraits for individuals, artists and brands.' },
		{ t: 'Editorial', d: 'Story-driven shoots for magazines, journals and campaigns.' },
		{ t: 'Landscape', d: 'Fine-art prints and commissioned location work.' },
		{ t: 'Events', d: 'Documentary coverage with a quiet, unobtrusive eye.' }
	];
</script>

<svelte:head>
	<title>About — {site.name}</title>
	<meta name="description" content="About {site.name}, {site.role} in {site.location}." />
</svelte:head>

<section class="wrap about">
	<div class="about__portrait">
		<img
			src="https://picsum.photos/seed/lico-about/900/1100"
			alt="Portrait of {site.name}"
			width="900"
			height="1100"
			loading="lazy"
		/>
	</div>

	<div class="about__text">
		<p class="eyebrow">About</p>
		<h1>{site.name}</h1>
		<p class="about__role">{site.role} · {site.location}</p>
		{#each site.about as para}
			<p>{para}</p>
		{/each}

		<div class="stats">
			{#each stats as s}
				<div class="stats__item">
					<span class="stats__n">{s.n}</span>
					<span class="stats__l">{s.l}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="wrap services">
	<header class="services__head">
		<p class="eyebrow">Services</p>
		<h2>How we can work together</h2>
	</header>
	<div class="services__grid">
		{#each services as s}
			<article class="service">
				<h3>{s.t}</h3>
				<p>{s.d}</p>
			</article>
		{/each}
	</div>
	<div class="services__cta">
		<a class="btn btn--solid" href="{base}/contact/">Start a project</a>
	</div>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 0.85fr 1fr;
		gap: clamp(2rem, 6vw, 5rem);
		align-items: center;
		padding-block: clamp(3rem, 7vw, 5.5rem);
	}
	.about__portrait img {
		width: 100%;
		object-fit: cover;
		filter: grayscale(0.2);
	}
	.about__text h1 {
		font-size: clamp(2.4rem, 5vw, 3.6rem);
		margin: 0.5rem 0 0.4rem;
	}
	.about__role {
		color: var(--accent);
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin: 0 0 1.75rem;
	}
	.about__text p {
		color: var(--fg-muted);
		margin: 0 0 1.1rem;
		max-width: 54ch;
	}
	.stats {
		display: flex;
		gap: 2.5rem;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid var(--line);
	}
	.stats__item {
		display: flex;
		flex-direction: column;
	}
	.stats__n {
		font-family: var(--serif);
		font-size: 2.2rem;
		color: var(--fg);
	}
	.stats__l {
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--fg-faint);
	}

	.services {
		padding-block: clamp(2rem, 6vw, 4rem) clamp(3rem, 7vw, 5rem);
	}
	.services__head {
		margin-bottom: 2.5rem;
	}
	.services__head h2 {
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		margin-top: 0.6rem;
	}
	.services__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
	}
	.service {
		padding: 2rem 1.75rem;
		border: 1px solid var(--line);
		background: var(--bg-elev);
		transition: border-color 0.4s var(--ease), transform 0.4s var(--ease);
	}
	.service:hover {
		border-color: var(--accent);
		transform: translateY(-4px);
	}
	.service h3 {
		font-size: 1.4rem;
		margin-bottom: 0.6rem;
	}
	.service p {
		color: var(--fg-muted);
		margin: 0;
		font-size: 0.92rem;
	}
	.services__cta {
		margin-top: 2.5rem;
	}

	@media (max-width: 820px) {
		.about {
			grid-template-columns: 1fr;
		}
		.about__portrait {
			max-width: 420px;
		}
	}
</style>
