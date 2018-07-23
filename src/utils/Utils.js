const Utils = {
	timeFormat (date) {
		let [y, m, d, h, min] = [
			date.getFullYear(), 
			date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1), 
			date.getDay() > 9 ? date.getDay() : '0'+date.getDay(),
			date.getHours() > 9 ? date.getHours() : '0'+date.getHours(),
			date.getMinutes() > 9 ? date.getMinutes() : '0'+date.getMinutes()
		];

		return y+'-'+m+'-'+d+' '+h+':'+min;
	}
}
export {Utils};