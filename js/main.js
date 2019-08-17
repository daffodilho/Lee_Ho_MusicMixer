(()=>{
	console.log("Trevor");



	const sodaCan = document.querySelector(".can"),
		  dropZone =  document.querySelectorAll("#dropzone"),
		  resetButton = document.querySelector("#reset"),
		  popupButton = document.querySelector("#popup"),
		  lightBox = document.querySelector(".lightbox"),
		  closeButton = document.querySelector(".closebox");


	let draggablePieces = sodaCan.querySelectorAll("img");



	function reFresh(){
		location.reload();
	}

	function showLightbox(){
		lightBox.classList.add("show-lightbox");

	}

	function closeLightbox(){
		lightBox.classList.remove("show-lightbox");
	}

	draggablePieces.forEach(piece => {
        piece.addEventListener("dragstart", function(e){
            console.log("it's cold");
            
            //the dataTransfer object has two methods, a setter and getter
            //set data on the drag, and retrieve it on the drop
            e.dataTransfer.setData("text/plain",this.id);
        });
       //debugger;
        
    });

    draggablePieces.forEach((piece,index) => {
            //log the image and the current index
            //console.log(image,index);

            
           // debugger;
        });


	
	dropZone.forEach (zone =>{
		zone.addEventListener("dragover", function(e) {
			e.preventDefault(); 
            console.log('clink!');
		});
	
			zone.addEventListener("drop", function(e) {
            	e.preventDefault(); 

            	console.log('clank!');

            
            	const currentDrop = document.querySelector(`img[data-drop="${e}"]`); //this data-drop// //`audio[data-key=`

            	

			
				let draggablePieces = e.dataTransfer.getData("text/plain");
            	console.log('you dragged: ', draggablePieces);


				let newImage = document.createElement("img");
				newImage.src = document.querySelector(`#${draggablePieces}`).getAttribute("src");
				e.target.appendChild(newImage);
				
		
				
				//e.target.removeChild(newImage);


				let audioDrop = document.querySelector(`#${draggablePieces}`).dataset.drop;
				let currentAudioClip = document.querySelector((`audio[data-drop="${audioDrop}"]`));
				//let currentAudioClip = document.querySelector(`audio[data-drop="${e}"]`);

				currentAudioClip.play();
				
	 			 currentAudioClip.loop = true;
	 			//debugger;

			});
			
	})

		resetButton.addEventListener("click",reFresh);
		popupButton.addEventListener("click",showLightbox);
		closeButton.addEventListener("click",closeLightbox);
})();

