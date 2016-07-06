$(function(){

    /**
     * 查询
     */

    $(".select").click(function(){
        $(".listData1 .listName,.listData1 .listPhone").removeClass("mark");

        //搜索框
        var name = $(".textName").val();
        var tel = $(".textPhone").val();

        $.each($(".listData1"),function(){
            //姓名值
            var allName = $(this).find(".listName").text();
            //手机值
            var allPhone = $(this).find(".listPhone").text();

            //姓名查询
            if(name){
                if(allName.indexOf(name)!=-1){
                    $(this).find(".listName").addClass("mark");
                }
            }

            //手机号查询
           if(tel){
               if(allPhone.indexOf(tel)!=-1){
                   $(this).find(".listPhone").addClass("mark");
               }
           }

        })
    });

    /**
     * 查询取消选中DIV
     */

    $(".textName").blur(function(){
        fun.findDivCancel(this,".listName");
    });

    $(".textPhone").blur(function(){
        fun.findDivCancel(this,".listPhone");
    });

    /**
     * 导航HOVER
     */

    $(".navNormal,.navAll").hover(function(){
        var index = $(this).index();

        $(".navSon"+index+"").show();
    },function(){
        $(".navAll").hide();
    });

})

var fun = {
    findDivCancel :function(e,dom){
        var _this = $(e).val();
        if(_this==""){
            $(dom).removeClass("mark");
        }
    }
}