document.write(`

      <!-- ################################################################
         
		 								       content
         
         ##################################################################-->

      <div class="flex justify-center w-96">
         <!-- You can open the modal using ID.showModal() method -->
         <details class="collapse">
         <summary class="collapse-title font-semibold">mysterious places</summary>
         <div class="collapse-content text-sm" onclick="my_modal_1.showModal()">
            lost cities
         </div>
         <div class="collapse-content text-sm" onclick="my_modal_1.showModal()">
            ancient city
         </div>
         </details>
         <dialog id="my_modal_1" class="modal">
         <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">✕</button>
            </form>
            <div class="card bg-base-100 top-3 shadow-sm">
            <figure>
               <img
               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
               alt="Shoes" />
            </figure>
            <div class="card-body">
               <h2 class="card-title">Card Title</h2>
               <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
               <div class="card-actions justify-end">
               <button class="btn btn-primary">Buy Now</button>
               </div>
            </div>
            </div>
         </div>
         <form method="dialog" class="modal-backdrop">
            <button>close</button>
         </form>
         </dialog>
      </div>
	
	  <!-- ################################################################
         
		 							     End content
         
      ##################################################################-->
	
`);