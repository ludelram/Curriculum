(function($){
	$(document).ready(function(){

		$(document).on('click','.tag-filter',function(){
			var $this = $(this);
		
			if( $(this).hasClass('active')){				
				$('span.tag-filter').removeClass("active");
				$('.not-show').removeClass('not-show');
				/* $('.project-item').showAll();				
				$('.jsEmpresas').showAll();				
				$('.jsEstudios').showAll(); */								 
			}
			else{
				$('span.tag-filter').removeClass("active");
				//$this.addClass("active");
				$("span.tag-filter[data-tag='" + $this.data('tag') +"'").addClass("active");
				$('.tag-group').children().each(function(){
					if( $(this).data('tag') ==  $this.data('tag')){
						$(this).addClass("active");
					}
				});
				$('.not-show').removeClass('not-show');
				if( $(this).hasClass('all')){									
				/* 	$('.project-item').showAll();				
					$('.jsEmpresas').showAll();				
					$('.jsEstudios').showAll();		 */						 
				}
				else{
					$('.jsEstudios').addClass('not-show');
					$('.jsEmpresas').addClass('not-show');
					$('.site-item').addClass('not-show');
					$('.project-item').filterTags( $(this).data('tag') );
				}
			}
		});

	});

	$.fn.extend({
	  filterTags: function(tagName) {
	  	//this.removeClass('not-show');
	    return this.each(function() {
	    	var itemTagArray = JSON.parse( $(this).attr('data-tags') );
			if($.inArray(tagName, itemTagArray) === -1){
				$(this).addClass('not-show');				
			}
			else{
				$(this).prevAll(".site-item").first().removeClass('not-show');
			}
	    });
	  },
	  showAll: function(){
	  	return this.each(function() {
			if($(this).hasClass('not-show')){
				$(this).removeClass('not-show');
			}
	    });
	  }
	});
})(jQuery)