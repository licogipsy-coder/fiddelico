<script>
	import { base } from '$app/paths';
	import { site } from '$lib/data/site.js';
	const year = 2026;
</script>

<footer class="foot">
	<div class="wrap foot__grid">
		<div>
			<p class="foot__brand">{site.name}</p>
			<p class="foot__tag">{site.tagline}</p>
		</div>

		<nav class="foot__links" aria-label="Footer">
			<a href="{base}/gallery/">Gallery</a>
			<a href="{base}/about/">About</a>
			<a href="{base}/contact/">Contact</a>
		</nav>

		<div class="foot__social">
			<a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
			<a href={site.behance} target="_blank" rel="noreferrer">Behance</a>
			<a href="mailto:{site.email}">Email</a>
		</div>
	</div>

	<div class="wrap foot__base">
		<span>© {year} {site.name}. All rights reserved.</span>
		<span>{site.location}</span>
	</div>
</footer>

<style>
	.foot {
		border-top: 1px solid var(--line);
		margin-top: clamp(4rem, 10vw, 8rem);
		padding-block: clamp(3rem, 6vw, 5rem) 2rem;
	}
	.foot__grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 2.5rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--line);
	}
	.foot__brand {
		font-family: var(--serif);
		font-size: 1.5rem;
		margin: 0 0 0.5rem;
	}
	.foot__tag {
		color: var(--fg-muted);
		max-width: 26ch;
		margin: 0;
	}
	.foot__links,
	.foot__social {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.foot__links a,
	.foot__social a {
		font-size: 0.82rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--fg-muted);
		width: fit-content;
		transition: color 0.3s var(--ease);
	}
	.foot__links a:hover,
	.foot__social a:hover {
		color: var(--accent);
	}
	.foot__base {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 2rem;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		color: var(--fg-faint);
	}
	@media (max-width: 720px) {
		.foot__grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
