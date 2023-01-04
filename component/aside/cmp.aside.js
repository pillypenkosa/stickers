//console.log( 'aside' );









class ComponentAside {


	static arrBtns = [

		{ title: 'kppDeadBody' 			, id: 'kpp_dead_body' 		, href: 'kpp_dead_body', },

		//{ title: 'Err 404' 			, id: 'err404_djs' 	, href: 'left-set-err', }, // id левый, чтоб как пример не сработала подсветка ( чтоб подсветка сработала прописать id: 'err404' )

	];



	static html() {

		let innerHTML = '';

		this.arrBtns.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 													, },
					{ k: 'title' 	, v: k.title 												, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }', '${ k.href }' )` 	, },
				], 
			});
		});

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( id, href ) {

		// подсветка кнопок
		//btnLight( 'cmp-aside', id );

		//alert( id );
		//alert( href );


		Router.link( href );

/*
		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';



		if ( id == 'any' ) 
			content.innerHTML = ComponentAny.html();

*/


	} 








}















