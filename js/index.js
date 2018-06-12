$(function(){
	$('.siteNav').on('click','ol.tab-items>li',function(e){
		let $li=$(e.currentTarget).addClass('active')
		$li.siblings().removeClass('active')	
		let index=$li.index()
		$li.trigger('tabChange',index)
		$('.tabContent > li').eq(index).addClass('active').siblings().removeClass('active')
	})
	$('.siteNav').on('tabChange',function(e,index){
		let $li=$('.tabContent> li').eq(index)
		if($li.attr('data-downloaded')==='yes'){
			return
			}
		if(index === 1){
			$.get('./page2.json').then((response)=>{
				console.log(response)
			$li.text(response.content)	
			$li.attr('data-downloaded','yes')
			})
		}
	})
})
