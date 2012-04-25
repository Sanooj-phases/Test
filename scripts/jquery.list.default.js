(function($){  
  
	$.fn.Default_list = function(){ 
	    var element = $(this);
		$(element).find('ul li').addClass('items');
		$(element).find('ul li:first-child').addClass('first-item').removeClass('items');
		$(element).find('ul li:last-child').addClass('first-item').removeClass('items');
		$(element).find('ul li:nth-child(odd)').addClass('odd');
		$(element).find('ul li:nth-child(even)').addClass('even');
	};
})(jQuery); 