$(document).ready(()=> {
	let collaspeValue1= false;
	let collaspeValue2= true;
	let collaspeValue3= true;


	$('#accordion1').show();
	$('#accordion2').hide();
	$('#accordion3').hide();

	$('#collapse1').click(()=> {
		if(collaspeValue1) {
			$('#accordion1').slideDown('fast');
			$('#accordion2').slideUp('fast');
			$('#accordion3').slideUp('fast');
			collaspeValue1= false;
			collaspeValue2  = true;
			collaspeValue3 = true;

			

		}
		else {
			$('#accordion1').slideUp('fast');
			collaspeValue1 = true;
			
		}
	})
	$('#collapse2').click(()=> {
		if(collaspeValue2) {
			$('#accordion2').slideDown('fast');
			$('#accordion1').slideUp('fast');
			$('#accordion3').slideUp('fast');

			collaspeValue2= false;
			collaspeValue1 = true;
			collaspeValue3 = true;

		
		}
		else {
			$('#accordion2').slideUp('fast');
			collaspeValue2 = true;
			
		}
	})
	$('#collapse3').click(()=> {
		if(collaspeValue3) {
			$('#accordion3').slideDown('fast');
			$('#accordion1').slideUp('fast');
			$('#accordion2').slideUp('fast');
			collaspeValue3= false;
			collaspeValue1 = true;
			collaspeValue2 = true;

			
		}
		else {
			$('#accordion3').slideUp('fast');
			collaspeValue3 = true;
			
		}
	})
})