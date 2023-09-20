

export function load({ params }) {


  const list = fetch('https://rickandmortyapi.com/api')
		.then(res => res.json());
		// .then(data => console.log(data));
	return {
		list
	};
}
