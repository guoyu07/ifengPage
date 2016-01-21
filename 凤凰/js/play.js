function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
    var information_play=$('information').getElementsByTagName('li');
    var photo_play=$('photo_play').getElementsByTagName('li');
    for(var i=0;i<information_play.length;i++){
        information_play[i].id=i;
        information_play[i].onmouseover=function(){
            photo_play[this.id].style.display='block';
            for(var j=0;j<information_play.length;j++){
                if(j==this.id)
                    continue;
                photo_play[j].style.display='none';
            }
        }
    }
    var titles=$('notice-tit').getElementsByTagName('li');
    var divs=$('notice-con').getElementsByTagName('div');
    if(titles.length!=divs.length)
        return;
    //遍历titles下所有li
    for(var i=0;i<titles.length;i++){
        titles[i].value=i;
        titles[i].onmouseover=function(){
            for(var j=0;j<titles.length;j++){
                titles[j].className='';
                divs[j].style.display='none';
            }
            this.className='select';
            divs[this.value].style.display='block';
        }

    }

}