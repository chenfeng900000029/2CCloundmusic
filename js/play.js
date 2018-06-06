$(function() {
let id=parseInt( location.search.match(/\bid=([^&]*)/)[1],10)
 //console.log(id)
$.get('song.json').then(function(response){
	let songs=response
	console.log(songs.length)
	let song=songs.filter((s)=>{return s.id===id})[0]
	let currentId=song.id
	let {url}=song
	let {img}=song
	let imgs =$('#coverimg').attr('src',img)
	//console.log(imgs)
	console.log(response.length)
	console.log(currentId)
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
	
		
		$('#nextsong').on('click',function(){


			//window.location.href="?id="+nextsong 
			
			let sId=currentId+=1  //也许用户实在滴3首歌进来的 不能改
			let sNumber=songs.length
			let sNext=sId%sNumber
			
			console.log(sNext)
			console.log(sId )
			let song=songs.filter((s)=>{return s.id===sNext})[0]
			 let {url}=song
			 let {img}=song
			 audio.src=url
			 let imgs =$('#coverimg').attr('src',img)
			 console.log(img,url,song)
			 $('.musiccontrol').addClass('playing')
			$('.disc').addClass('playing')
			 audio.play()
			
		})
		 
		 
		$('#lastsong').on('click',function(){
			let sId=Math.abs(currentId-=1)
			let sNumber=songs.length
			let sNext=sId%sNumber
			 if(sId==0){
				sId=4
			}
			
			console.log(sNext)
			let song=songs.filter((s)=>{return s.id===sNext})[0]
			 let {url}=song
			 let {img}=song
			 audio.src=url
			 let imgs =$('#coverimg').attr('src',img)
			 console.log(img,url,song)
			 $('.musiccontrol').addClass('playing')
		     $('.disc').addClass('playing')
			 audio.play()
			
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
		


