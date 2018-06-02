$(function() {
let id=parseInt( location.search.match(/\bid=([^&]*)/)[1],10)
 //console.log(id)
$.get('song.json').then(function(response){
	let songs=response
	let song=songs.filter((s)=>{return s.id===id})[0]
	let {url}=song
	let {img}=song
	console.log(response.length)
	let audio=document.createElement('audio')
		//audio.autoplay='autoplay'  自动播放  手机无效
		audio.src=url
		//  进入页面自动播放 手机无效
		// audio.oncanplay=function(){
        // audio.play() 
        //$('.disc').addClass('playing')
		//}
		$('.btn-stop').on('click',function(){
			audio.pause()
			$('.musiccontrol').removeClass('playing')
			$('.disc').removeClass('playing')
			
		})
		$('.btn-play').on('click',function(){
			audio.play()
			$('.musiccontrol').addClass('playing')
			$('.disc').addClass('playing')
		})
		let imgs =$('#coverimg').attr('src',img)
		//console.log(imgs)
		
		$('#nextsong').on('click',function(){
			let nextsong=id+=1
			if(nextsong>response.length){
				nextsong=1
			}
			window.location.href="?id="+nextsong
		})
		$('#lastsong').on('click',function(){
			let nextsong=id-1
			if(nextsong<1){
				nextsong=4
			}
			window.location.href="?id="+nextsong
		})
		
		$('#back').on('click',function(){
			window.history.back();
		
		})
	


})



$.get('lyric.json').then(function(object) {
	let {lyric} = object
	let array=lyric.split('\n')
	let regex = /^\[(.+)\](.*)$/
	array = array.map(function(string, index) {
		let matches = string.match(regex)
		if(matches) {
			return {time: matches[1],words: matches[2]}
		}
	})
	let $lyric = $('.lyric')
	array.map(function(object) {
		if(!object){return}
			let $p = $('<p/>')
		$p.attr('data-time', object.time).text(object.words)
		$p.appendTo($lyric)
		})
})
	
})

$(contaiter).on('click',function(){
	$(contaiter).hide()
	$(description).hide()
	$(lyrics).show()
})
$(lyrics).on('click',function(){
	$(contaiter).show()
	$(description).show()
	$(lyrics).hide()
})


//  topcroll

	window.onscroll=function(x){
		var scrollHeight=window.scrollY
			
			if (scrollHeight>15) {
				topNavBar.classList.add('addbar')
			} else{
				topNavBar.classList.remove('addbar')
			}
			//console.log(window.scrollY)	
		}
		
