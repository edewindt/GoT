<script>
	import { slide } from 'svelte/transition';
	import { lightm } from '$lib/darkmode';
	let navclicked = false;
	const navclick = () => {
		navclicked = !navclicked;
	};
	const mode = () => {
		if ($lightm === true) {
			lightm.set(false);
		} else {
			lightm.set(true);
		}
	};
</script>

<nav>
	<div class="nav-items">
		<div class="burger" on:click={navclick}>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" /><path
					d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
				/></svg
			><span class="link-text">Menu</span>
		</div>
		<ul>
			<li>
				<a href="/"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
						/></svg
					><span class="link-text">Home</span></a
				>
			</li>
			<li>
				<a href="/api"
					><span class="start">API</span> <span class="large"> Documentation</span><span
						class="small">Docs</span
					></a
				>
			</li>
			<li>
				<a href="/about"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"
						/></svg
					>
					<span class="link-text">About</span></a
				>
			</li>
		</ul>
		<div on:click={mode} class="dark-mode">
			{#if $lightm}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
					/></svg
				>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z"
					/></svg
				>
			{/if}
		</div>
	</div>
</nav>
{#if navclicked}
	<nav class="side" transition:slide>
		<ul class="show">
			<li class="nav-item" on:click={navclick}>
				<p class="nav-link close" href="#none">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
						/></svg
					> CLOSE MENU
				</p>
			</li>
			<li class="nav-item" on:click={navclick}>
				<a data-sveltekit-prefetch class="nav-link" href="/characters"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"
						/></svg
					>Characters</a
				>
			</li>
			<li class="nav-item" on:click={navclick}>
				<a data-sveltekit-prefetch class="nav-link" href="/houses"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
						/></svg
					>Houses</a
				>
			</li>
			<li class="nav-item" on:click={navclick}>
				<a data-sveltekit-prefetch class="nav-link" href="/quotes"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm7 10c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"
						/></svg
					>Quotes</a
				>
			</li>
			<li class="nav-item" on:click={navclick}>
				<a data-sveltekit-prefetch class="nav-link" href="/media"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"
						/></svg
					>Media</a
				>
			</li>
			<li class="nav-item" on:click={navclick}>
				<a data-sveltekit-prefetch class="nav-link" href="/feedback"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm7 10c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"
						/></svg
					>Feedback</a
				>
			</li>
		</ul>
	</nav>
{/if}

<style>
	a {
		display: flex;
		align-items: center;
	}

	.link-text {
		padding-left: 1rem;
		color: var(--light);
	}

	ul {
		display: flex;
		width: 30rem;
		justify-content: space-around;
		align-items: center;
	}
	.nav-items {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}
	nav {
		width: 100%;
		background-color: var(--darkp);
		height: 4.5rem;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 2;
		box-shadow: 0 0 1rem pink;
	}
	a {
		color: var(--light);
	}
	svg {
		fill: var(--light);
	}
	.burger {
		width: 8rem;
		padding-left: 1rem;
		display: flex;
		align-items: center;
		transition: 0.7s;
	}
	.burger:hover {
		cursor: pointer;
		background-color: var(--black);
		filter: contrast(150%);
	}
	.dark-mode {
		width: 3rem;
		padding-right: 1rem;
		display: flex;
		align-items: center;
	}
	.large {
		padding-left: 1rem;
	}
	.small {
		display: none;
	}
	.side {
		width: 15rem;
		height: 100vh;
		background-color: var(--darkp);
		display: block;
	}
	.show {
		display: flex;
		padding: 0;
		margin: 0;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nav-item {
		width: 100%;
		transition: 0.7s;
		padding-left: 3rem;
	}
	.nav-item:hover {
		background-color: var(--black);
		filter: contrast(150%);
	}
	.nav-link {
		height: 5rem;
	}
	.nav-link svg {
		margin-right: 1rem;
		min-width: 1.5rem;
	}
	.link-text:hover {
		color: var(--orange);
	}
	a:hover svg {
		color: var(--orange);
		fill: var(--orange);
	}
	a:hover {
		color: var(--orange);
	}
	.close {
		display: flex;
		align-items: center;
		color: var(--light);
	}
	.close:hover {
		color: var(--orange);
		cursor: pointer;
	}
	.close:hover svg {
		color: var(--orange);
		fill: var(--orange);
	}
	@media only screen and (max-width: 550px) {
		/* nav {
			background-color: aqua;
		} */
		.large {
			display: none;
		}
		.small {
			display: inline;
			padding-left: 1rem;
		}
		.burger .link-text {
			display: none;
		}
		.burger {
			width: 3.7rem;
		}
	}
	@media only screen and (max-width: 500px) {
		/* nav {
			background-color: aqua;
		} */
		.link-text {
			display: none;
		}
		ul {
			width: 15rem;
		}
	}
	@media only screen and (max-width: 300px) {
		/* nav {
			background-color: aqua;
		} */
		.start {
			display: none;
		}
		ul {
			width: 8.5rem;
		}
		.small {
			padding-left: 0;
		}
	}
</style>
