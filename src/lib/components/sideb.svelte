<nav class="side">
	<ul class="show">
		<li class="nav-item nav-tit">
			<a class="nav-link tit" href="/api">API Docs</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/api/characters"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"
					/></svg
				>Characters</a
			>
		</li>

		<li class="nav-item">
			<a class="nav-link" href="/api/families"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
					/></svg
				>Families</a
			>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/api/quotes"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm7 10c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"
					/></svg
				>Quotes</a
			>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/api/media"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"
					/></svg
				>Media</a
			>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/api/schemas"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M17.545 5l-5.545-4-5.545 4-6.455-4v18l6.455 4 5.545-4 5.545 4 6.455-4v-18l-6.455 4zm-10.545 2.073l4-2.886v13.068l-4 2.885v-13.067zm6-2.886l4 2.886v13.068l-4-2.885v-13.069zm-11 .405l4 2.479v13.294l-4-2.479v-13.294zm20 13.295l-4 2.479v-13.295l4-2.479v13.295z"
					/></svg
				>Schemas</a
			>
		</li>
	</ul>
</nav>

<style>
	a {
		display: flex;
		align-items: center;
	}

	ul {
		display: flex;
		width: 30rem;
		justify-content: space-around;
		align-items: center;
	}

	nav {
		width: 100%;
		background-color: var(--darkp);
		height: 4.5rem;
		display: flex;
		align-items: center;
		box-shadow: 0 0 1rem pink;
	}
	a {
		color: var(--light);
	}
	svg {
		fill: var(--light);
	}

	.side {
		width: 12rem;
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
		padding-left: 2rem;
	}
	.nav-item:hover {
		background-color: black;
	}
	.nav-link {
		height: 3rem;
	}
	.nav-link svg {
		margin-right: 1rem;
		min-width: 1.5rem;
	}

	a:hover svg {
		color: orange;
		fill: orange;
	}
	a:hover {
		color: orange;
	}
	.tit {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--light);
	}
	.nav-tit {
		padding: 0;
	}
	@media only screen and (max-width: 500px) {
		/* ul {
			width: 15rem;
		} */
	}
</style>
