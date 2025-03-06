/* Project Setup
The setup for this project is simple. There is just div with some paragraphs in it.
When the page loads, the div will be empty. Then the first paragraph fades in over two
seconds. It stays on the screen for seven seconds, then fades out over two seconds.
Then the next paragraph fades in, waits seven seconds and then fades out.
After the last paragraph fades out, go back and fade the first paragraph in 
and repeat the process, indefinitely. */



(function(){
	"use strict";

	let counter = 1; //note we start at 1 and not 0 because the nth child selector is indexed with one

	function contentRotator(){
		//1. Fade in a paragraph
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function(){
			//And the if/else statement 
			if($(this).is("#container p:last-child")){
				//wait seven seconds
				//fade the paragraph out 
				//set the counter back to 1
				//run the contentRotator again
				setTimeout( function(){
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
						// when fade out is done we add another callback function
						counter = 1;
						contentRotator();
					});
				}, 7000);
			}
			else{
				//wait seven seconds
				//fade the paragraph out
				//increment the counter
				//run the contentRotator again
				setTimeout( function(){
					$(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
						// when fade out is done we add another callback function
						counter++;
						contentRotator();
					});
				}, 7000);
			}
		});
	}

	contentRotator();

}());
