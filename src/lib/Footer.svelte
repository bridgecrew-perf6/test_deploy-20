<script>
	import { base } from '$app/paths';
</script>

<footer>
	<div>
		<hr />
		<span>@2022 iBID</span> <a href={base + '/imprint'}>Imprint</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
		color: gray;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
