document.write(`

      <!-- ################################################################
         
		 								       header
         
         ##################################################################-->

   <a class="text-center font-bold hover:text-secondary-content" href="#">
   <h1  x-data="{
            startingAnimation: { opacity: 0, scale: 5 },
            endingAnimation: { opacity: 1, scale: 1, stagger: 0.2, duration: 2, ease: 'expo.out' },
            addCNDScript: true,
            animateText() {
                $el.classList.remove('invisible');
                gsap.fromTo($el.children, this.startingAnimation, this.endingAnimation);
            },
            splitCharactersIntoSpans(element) {
                text = element.innerHTML;
                modifiedHTML = [];
                for (var i = 0; i < text.length; i++) {
                    attributes = '';
                    if(text[i].trim()){ attributes = 'class=\'inline-block\''; }
                    modifiedHTML.push('<span ' + attributes + '>' + text[i] + '</span>');
                }
                element.innerHTML = modifiedHTML.join('');
            },
            addScriptToHead(url) {
                script = document.createElement('script');
                script.src = url;
                document.head.appendChild(script);
            }
        }"
        x-init="
            splitCharactersIntoSpans($el);
            if(addCNDScript){
                addScriptToHead('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js');
            }
            gsapInterval = setInterval(function(){
                if(typeof gsap !== 'undefined'){
                    animateText();
                    clearInterval(gsapInterval);
                }
            }, 5);
        "
        class="invisible flex justify-center text-5xl font-bold custom-font mt-16">
   UniqueEncyclopedia
   </h1>
   </a>
	
	  <!-- ################################################################
         
		 							     End header
         
      ##################################################################-->
	
`);