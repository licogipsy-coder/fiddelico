<script>
	import { page } from '$app/stores';
	import { site } from '$lib/data/site.js';

	let open = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/gallery/', label: 'Gallery' },
		{ href: '/about/', label: 'About' },
		{ href: '/contact/', label: 'Contact' }
	];

	let path = $derived($page.url.pathname);
	const isActive = (href) => (href === '/' ? path === '/' : path.startsWith(href));
</script>

<header class="nav">
	<div class="wrap nav__bar">
		<a class="nav__brand" href="/" onclick={() => (open = false)}>
			{site.name}<span>.</span>
		</a>

		<nav class="nav__links" aria-label="Primary">
			{#each links as link}
				<a href={link.href} class:active={isActive(link.href)}>{link.label}</a>
			{/each}
		</nav>

		<button
			class="nav__toggle"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span class:open></span>
			<span class:open></span>
		</button>
	</div>

	{#if open}
		<nav class="nav__mobile" aria-label="Mobile">
			{#each links as link}
				<a
					href={link.href}
					class:active={isActive(link.href)}
					onclick={() => (open = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--line);
	}

	.nav__bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}

	.nav__brand {
		font-family: var(--serif);
		font-size: 1.4rem;
		letter-spacing: 0.02em;
	}
	.nav__brand span {
		color: var(--accent);
	}

	.nav__links {
		display: flex;
		gap: 2.2rem;
	}
	.nav__links a {
		position: relative;
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--fg-muted);
		padding: 0.4rem 0;
		transition: color 0.3s var(--ease);
	}
	.nav__links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.4s var(--ease);
	}
	.nav__links a:hover,
	.nav__links a.active {
		color: var(--fg);
	}
	.nav__links a:hover::after,
	.nav__links a.active::after {
		transform: scaleX(1);
	}

	.nav__toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 6px;
		width: 40px;
		height: 40px;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
	}
	.nav__toggle span {
		display: block;
		height: 1.5px;
		width: 24px;
		background: var(--fg);
		transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
	}
	.nav__toggle span.open:first-child {
		transform: translateY(7.5px) rotate(45deg);
	}
	.nav__toggle span.open:last-child {
		transform: translateY(-7.5px) rotate(-45deg);
	}

	.nav__mobile {
		display: flex;
		flex-direction: column;
		padding: 0.5rem var(--pad) 1.5rem;
		border-top: 1px solid var(--line);
	}
	.nav__mobile a {
		padding: 1rem 0;
		font-size: 0.9rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--fg-muted);
		border-bottom: 1px solid var(--line);
	}
	.nav__mobile a.active {
		color: var(--accent);
	}

	@media (max-width: 720px) {
		.nav__links {
			display: none;
		}
		.nav__toggle {
			display: flex;
		}
	}
</style>
