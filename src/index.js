module.exports = function zeros(expression) {
  let answer = 0;
	let firstF,secondF;

	firstF = expression.split('*');
	firstF =firstF.filter(el => (el.slice(-2) !== '!!'));
	firstF =firstF.map(el => parseInt(el,10));

	secondF = expression.split('*');
	secondF=secondF.filter(el => (el.slice(-2) === '!!'));
	secondF=secondF.map(el => parseInt(el,10));
  
	function firstZeros(x) 
	{
		answer = answer + (Math.floor(x/5) + Math.floor(x/25));
	} 
  
	function secondZeros(x) 
	{
	  	if (x%2 === 0) 
	  	{
			answer = answer + Math.floor(x/10) + Math.floor(x/50);
		} 
		  
	 	else 
		{
			answer = answer + Math.floor(x/10);
			if (x%10 >= 5) answer++;
			if (x >= 25) answer++;
			if (x >= 75) answer++;
		}
	}
  
	firstF.forEach(x => firstZeros(x));
  
	if  (secondF.some(el => el%2 === 0) || firstF.length) 
	{
		secondF.forEach(x => secondZeros(x));
	}
  
	return answer;
  }
  
}
