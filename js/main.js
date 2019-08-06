(()=>{
	console.log("Trevor");



	const sodaCan = document.querySelector(".can"),
		  dropZone =  document.querySelectorAll("#dropzone");

	let draggablePieces = sodaCan.querySelectorAll("img");


	draggablePieces.forEach(piece => {
        piece.addEventListener("dragstart", function(e){
            console.log('draggin...');
            
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
            console.log('dragged sumpin over me');
		});
	
			zone.addEventListener("drop", function(e) {
            	e.preventDefault(); // don't do your default behaviour,
            	// instead, do the following:
            
            	console.log('you dropped sumpin on me');

            	const currentDrop = document.querySelector(`img[data-drop="${e}"]`); //this data-drop// //`audio[data-key=`

            

			
				let draggablePieces = e.dataTransfer.getData("text/plain");
            	console.log('you dragged: ', draggablePieces);
				//e.target.appendChild(document.querySelector(`#${draggablePieces}`));

				let newImage = document.createElement("img");
				newImage.src = document.querySelector(`#${draggablePieces}`).getAttribute("src");
				e.target.appendChild(newImage);

				//debugger;

				let audioDrop = document.querySelector(`#${draggablePieces}`).dataset.drop;
				let currentAudioClip = document.querySelector((`audio[data-drop="${audioDrop}"]`));
				//let currentAudioClip = document.querySelector(`audio[data-drop="${e}"]`);

				currentAudioClip.play();
				
	 			 currentAudioClip.loop = true;
	 			//debugger;

			});
		
	})
	
})();

