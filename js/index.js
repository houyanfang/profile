$(document).ready(function(){
				$('#fullpage').fullpage({
					controlArrowColor:'#666',
					anchors:['page1','page2','page3','page4','page5'],
					css3:true,
					fixedElements:'#header',
					keyboardScrolling:true,
					touchSensitivity:5,
					menu:'#menu',
					navigation:true,
					navigationPosition:'right',
					navigationTooltips:['About','Skills','Works','Education','Experience'],
					showActiveTooltip:true,
					slidesNavigation:true,
					slidesNavPosition:'bottom',
					afterLoad:function(link,index){
						switch(index){
							case 1:
								move('.section1 h1').scale(0.5).end();
								move('.section1 .wrap').set('opacity','1').end();
								break;
							case 2:
							    move('.section2 h1').set('margin-left','0').end();
							    move('.section2 .data-skill').set('margin-top','0').end();
								break;
							case 3:
								break;
							case 4:
								break;
							case 5:
							    move('.section5 .sec-exprience').set('opacity','.7').end();
							    break;
							default:
							break;
						}
					},
					onLeave:function(link,index){
						switch(index){
							case 1:
							    move('.section1 h1').scale(1).end();
							    move('.section1 .wrap').set('opacity','0').end();
								break;
							case 2:
							    move('.section2 h1').set('margin-left','-1500px').end();
							    move('.section2 .data-skill').set('margin-top','1000px').end();
								break;
							case 3:
								break;
							case 4:
								break;
							case 5:
							    move('.section5 .sec-exprience').set('opacity','0').end();
								break;
							default:
								break;	
						}
					}
				});
			})