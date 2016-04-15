
function cal(ele) {
	var date = '';
	ele.day.addEventListener('click',function (e) {
		date = select(ele,e.target.innerText)
		ele.input.innerText = date
	})
	var select = function (ele,day) {
		var year = ele.year.value
		var mon = ele.mon.value
		var day = day

		var newdate = new Date(year, mon-1, day)

		return newdate
	}
	return date
}