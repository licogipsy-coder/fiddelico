<script>
	import { site } from '$lib/data/site.js';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let sent = $state(false);

	function submit(e) {
		e.preventDefault();
		// Static hosting has no backend — compose an email via the visitor's client.
		const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
		const href =
			`mailto:${site.email}` +
			`?subject=${encodeURIComponent(subject || 'Enquiry from portfolio')}` +
			`&body=${encodeURIComponent(body)}`;
		window.location.href = href;
		sent = true;
	}
</script>

<svelte:head>
	<title>Contact — {site.name}</title>
	<meta name="description" content="Get in touch with {site.name} for commissions and enquiries." />
</svelte:head>

<section class="wrap contact">
	<div class="contact__intro">
		<p class="eyebrow">Contact</p>
		<h1>Let's make something.</h1>
		<p class="contact__lead">
			Available for editorial, commercial and personal commissions worldwide.
			Tell me about your project and I'll get back to you within a couple of days.
		</p>

		<ul class="contact__details">
			<li>
				<span class="k">Email</span>
				<a href="mailto:{site.email}">{site.email}</a>
			</li>
			<li>
				<span class="k">Based in</span>
				<span>{site.location}</span>
			</li>
			<li>
				<span class="k">Social</span>
				<span class="contact__social">
					<a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
					<a href={site.behance} target="_blank" rel="noreferrer">Behance</a>
				</span>
			</li>
		</ul>
	</div>

	<form class="form" onsubmit={submit}>
		<div class="field">
			<label for="name">Name</label>
			<input id="name" type="text" bind:value={name} required autocomplete="name" />
		</div>
		<div class="field">
			<label for="email">Email</label>
			<input id="email" type="email" bind:value={email} required autocomplete="email" />
		</div>
		<div class="field">
			<label for="subject">Subject</label>
			<input id="subject" type="text" bind:value={subject} />
		</div>
		<div class="field">
			<label for="message">Message</label>
			<textarea id="message" rows="5" bind:value={message} required></textarea>
		</div>
		<button class="btn btn--solid" type="submit">Send message</button>
		{#if sent}
			<p class="form__note">
				Opening your email client… if nothing happens, write to
				<a href="mailto:{site.email}">{site.email}</a>.
			</p>
		{/if}
	</form>
</section>

<style>
	.contact {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 6vw, 5rem);
		padding-block: clamp(3rem, 7vw, 5.5rem);
		align-items: start;
	}
	.contact__intro h1 {
		font-size: clamp(2.4rem, 5.5vw, 4rem);
		margin: 0.5rem 0 1rem;
	}
	.contact__lead {
		color: var(--fg-muted);
		max-width: 42ch;
		margin: 0 0 2.5rem;
	}
	.contact__details {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--line);
	}
	.contact__details li {
		display: flex;
		gap: 1.5rem;
		padding: 1.1rem 0;
		border-bottom: 1px solid var(--line);
	}
	.contact__details .k {
		flex: 0 0 100px;
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--fg-faint);
		padding-top: 0.15rem;
	}
	.contact__details a:hover {
		color: var(--accent);
	}
	.contact__social {
		display: flex;
		gap: 1.25rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		background: var(--bg-elev);
		border: 1px solid var(--line);
		padding: clamp(1.5rem, 4vw, 2.5rem);
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.field label {
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--fg-muted);
	}
	.field input,
	.field textarea {
		font-family: inherit;
		font-size: 0.95rem;
		color: var(--fg);
		background: var(--bg);
		border: 1px solid var(--line);
		padding: 0.85rem 1rem;
		resize: vertical;
		transition: border-color 0.3s var(--ease);
	}
	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--accent);
	}
	.form__note {
		font-size: 0.85rem;
		color: var(--fg-muted);
		margin: 0;
	}
	.form__note a {
		color: var(--accent);
	}

	@media (max-width: 820px) {
		.contact {
			grid-template-columns: 1fr;
		}
	}
</style>
