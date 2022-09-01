<nav>
	<div class="nav-items">
		<div class="burger">
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" /><path
					d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
				/></svg
			>
		</div>
		<ul>
			<li><a href="/">Home</a></li>
			<li>
				<a href="/api">API <span class="large">Doumentation</span><span class="small">Docs</span></a
				>
			</li>
			<li><a href="/about">About</a></li>
		</ul>
		<div class="dark-mode">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
				/></svg
			>
		</div>
	</div>
</nav>

<style>
	ul {
		display: flex;
		width: 30rem;
		justify-content: space-around;
		padding-top: 0.2rem;
	}
	.nav-items {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	nav {
		width: 100%;
		background-color: var(--darkp);
		height: 4.5rem;
		display: flex;
		align-items: center;
	}
	a {
		color: var(--light);
	}
	svg {
		fill: var(--light);
	}
	.burger {
		width: 3rem;
		padding-left: 1rem;
	}
	.dark-mode {
		width: 3rem;
		padding-right: 1rem;
	}
	.small {
		display: none;
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
		}
	}
</style>
