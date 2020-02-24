function showme(){
	var oli=document.getElementsByTagName('h4');
	var oncount=document.getElementById("challenges-board");
	var odiv=oncount.getElementsByClassName("challenges-wai");
	var i=0;
	var len = oli.length; 
        for(i=0;i<len;i++){
            oli[i].index=i;//打开时候i=0
        }
        for(i=0;i<len;i++){
            oli[i].className='';
            odiv[i].id='hide';
        }

        for(i=0;i<len;i++){
            oli[i].onclick=function(){//遍历每一个元素，并设置相应的class属性值
        for(i=0;i<len;i++){
            oli[i].className='';
            odiv[i].id='hide';
        }
            oli[this.index].className='act';//设置选项卡的样式和将当前内容显示出来。
            odiv[this.index].id='';
        }

    }
            oli[0].click();
}

