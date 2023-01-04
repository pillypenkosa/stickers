//console.log( '' );






class ComponentKppDeadBody {



	static arrArgs = [ 
		//{ id: 'id1', title: 'ID-1', name: 'ID 01', },
		//{ id: 'id2', title: 'ID-2', name: 'ID 02', },
		//{ id: 'id3', title: 'ID-3', name: 'ID 03', },
	]; 



	static img = [ 

		{ id: 'danger_air' 		, title: 'Повітряна тривога' 	, alt: 'Повітряна тривога' 	, },
		{ id: 'danger_missile' 	, title: 'Ракетна небезпека' 	, alt: 'Ракетна небезпека' 	, },
		{ id: 'danger_cancel' 	, title: 'Відбій тривоги' 		, alt: 'Відбій тривоги' 	, },

		{ id: 'baza1' 			, title: '1 на базі' 			, alt: '1 на базі' 			, },
		{ id: 'baza2' 			, title: '2 на базі' 			, alt: '2 на базі' 			, },
		{ id: 'baza3' 			, title: '3 на базі' 			, alt: '3 на базі' 			, },

		{ id: 'go1' 			, title: '1 виїхала' 			, alt: '1 виїхала' 			, },
		{ id: 'go2' 			, title: '2 виїхав' 			, alt: '2 виїхав' 			, },
		{ id: 'go3' 			, title: '3 виїхав' 			, alt: '3 виїхав' 			, },

		{ id: 'bez_prigod_26' 	, title: 'КПП 26 без пригод' 	, alt: 'КПП 26 без пригод' 	, },
		{ id: 'bez_prigod_28' 	, title: 'КПП 28 без пригод' 	, alt: 'КПП 28 без пригод' 	, },
		{ id: 'bez_prigod_315' 	, title: 'КПП 315 без пригод' 	, alt: 'КПП 315 без пригод' , },

	]; 




	static html() {

		const title = 'kppDeadBody';

		document.title = appProjectName + ' ' + title;


		let imgHtml = '';
		this.img.forEach( k => {
			imgHtml += `<div class="each" onclick="ComponentKppDeadBody.clc( '${ k.id }' )">
				<img src="img/stickers/kpp-dead-body/${ k.id }.jpg" title="${ k.title }" alt="${ k.alt }">


			</div>`;
		});





		let data = {
			tag: 'kpp-dead-body',
			param: [
				//{ k: 'class' 		, v: 'active' 										, },
				//{ k: 'name' 		, v: 'Имя Розы' 									, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 						, },
				//{ k: 'data-id' 		, v: 'anyData' 										, },
				//{ k: 'selected' 	, v: '' 											, }, // без значений
				//{ k: 'defer' 		, v: '' 											, }, // без значений

				// onclick - прописать строкой с соблюдением кавычек ( т.е. без них ) как здесь // в аргумент попадет массив this.arrArgs
				//{ k: 'onclick' 		, v: 'ComponentAny.clc( ComponentAny.arrArgs )' 	, },
/*
				// в аргумент попадет строка ( указывать в кавычках )
				{ k: 'onclick' 		, v: `ComponentAny.clc( 'левый текст' )` 	, }, 
				// ли так
				{ k: 'onclick' 		, v: `ComponentAny.clc( '${ txt }' )` 	, }, 
*/

			],
			innerHTML: `<div>${ imgHtml }</div>`,
		};




		return getComponentHtml( data );
	}



	static clc( id ) {

		//console.log( data );
		//alert( id );

		window.open( 'img/stickers/kpp-dead-body/' + id + '.jpg' );

	}










}























