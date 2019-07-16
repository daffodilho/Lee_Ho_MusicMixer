(()=>{
	console.log("Trevor");
<<<<<<< HEAD


	const sodaCan = document.querySelector(".can"),
		  dropZone =  document.querySelectorAll("#dropzone");
	
	dropZone.forEach (zone =>{
		zone.addEventListener("dragover", function(e) {
			e.preventDefault(); 
            console.log('dragged sumpin over me');
		});
	
			zone.addEventListener("drop", function(e) {
            	e.preventDefault(); // don't do your default behaviour,
            	// instead, do the following:
            
            	console.log('you dropped sumpin on me');
			
				let draggedElement = e.dataTransfer.getData("text/plain");
            	console.log('you dragged: ', draggedElement);
				e.target.appendChild(document.querySelector(`#${draggedElement}`));
			});
	
	})
	
})();
=======
})();

const bottleCan = document.querySelector(".can"),
	  dropZone =  document.querySelector("#zone");
>>>>>>> 5ed24ebe0f8d3261c3a1849e15fcae27d596e87d
