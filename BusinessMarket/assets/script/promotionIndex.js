$(function(){

    /**
     * 预加载列表
     */

    allFun.initList();

    /**
     * 删除按钮
     */

    allFun.promotionDel();

    /**
     * 编辑按钮
     */

    allFun.promotionEdit();

    /**
     * 新增按钮
     */

    $(".add").click(function(){

        if($(".all").hasClass("mark")){
            return;
        }

        $(".all").addClass("mark");

        var html = "";

        html += "<div class='listData1'>";
        html +=     "<div class='listDataNormal editName mr3 fl'><input type='text' class='tein1'></div>";
        html +=     "<div class='listDataNormal editPhone mr3 fl'><input type='text' class='tein1'></div>";
        html +=     "<div class='listDataNormal editScore mr3 fl'><input type='text' class='tein1'></div>";
        html +=     "<div class='listDataNormal editState mr3 tc fl'><select class='tein1'><option value='0'>请选择</option><option value='1'>待邀约</option><option value='2'>已邀约</option></select></div>";
        html +=     "<div class='listDataNormal editSource mr3 fl'><input type='text' class='tein1'></div>";
        html +=     "<div class='listDataNormal fl ovh'>";
        html +=         "<select class='editSign tein1 fl'><option value='0'>请选择</option><option value='1'>签约</option><option value='1'>详情</option></select>";
        html +=         "<img src='/common/images/yes.png' class='gou ml10 mt6 fl'>";
        html +=         "<img src='/common/images/wrong.png' class='cha ml10 mt6 fl'>";
        html +=     "</div>";
        html += "</div>";

        $(".listData").append(html);

        /**
         * 编辑状态确认按钮
         */

        allFun.promotionEditConfirm();

        /**
         * 编辑状态删除按钮
         */

        allFun.promotionEditDel();

    });

});

var allFun = {

    /**
     * 推广首页数据
     */

    initList :function(){
        var html = "";

        $.each(list_import,function(i,item){
            var tel = item.phone.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");
            html += "<div class='listData1 ovh'>";
            html +=     "<div class='listDataNormal listName mr3 fl'>"+item.name+"</div>";
            html +=     "<div class='listDataNormal listPhone mr3 fl'>"+tel+"</div>";
            html +=     "<div class='listDataNormal mr3 fl'>"+item.score+"</div>";
            html +=     "<div class='listDataNormal mr3 fl'>"+item.state+"</div>";
            html +=     "<div class='listDataNormal mr3 fl'>"+item.source+"</div>";
            html +=     "<div class='listDataNormal fl ovh'>";
            html +=         "<p class='listSign fl'>"+item.oper+"</p>";
            html +=         "<img src='/common/images/edit.png' class='edit fl'>";
            html +=         "<img src='/common/images/delete.png' class='delete fl'>";
            html +=     "</div>";
            html += "</div>";
        });

        $(".listData").append(html);
    },

    /**
     * 运营推广删除功能
     */

    promotionDel :function(){
        $(".delete").click(function(){
            $.overLay(".all");
            $.boxSen(".all",this);

            $(".all").removeClass("mark");
        });
    },

    /**
     * 运营推广编辑功能
     */

    promotionEdit :function(){
        $(".edit").click(function(){

            var html = "";
            var father = $(this).closest(".listData1");

            father.empty();

            html +=     "<div class='listDataNormal editName mr3 fl'><input type='text' class='tein1'></div>";
            html +=     "<div class='listDataNormal editPhone mr3 fl'><input type='text' class='tein1'></div>";
            html +=     "<div class='listDataNormal editScore mr3 fl'><input type='text' class='tein1'></div>";
            html +=     "<div class='listDataNormal editState mr3 tc fl'><select class='tein1'><option value='0'>请选择</option><option value='1'>待邀约</option><option value='2'>已邀约</option></select></div>";
            html +=     "<div class='listDataNormal editSource mr3 fl'><input type='text' class='tein1'></div>";
            html +=     "<div class='listDataNormal fl ovh'>";
            html +=         "<select class='editSign tein1 fl'><option value='0'>请选择</option><option value='1'>签约</option><option value='1'>详情</option></select>";
            html +=         "<img src='/common/images/yes.png' class='gou ml10 mt6 fl'>";
            html +=         "<img src='/common/images/wrong.png' class='cha ml10 mt6 fl'>";
            html +=     "</div>";

            father.append(html);

            $(".all").removeClass("mark");

            allFun.promotionEditConfirm();

            allFun.promotionEditDel();
        })
    },

    /**
     * 运营推广编辑状态确认按钮
     */

    promotionEditConfirm :function(){
        $(".gou").click(function(){

            var html = "";
            var father = $(this).closest(".listData1");
            var name = father.find(".editName input").val();
            var phone = father.find(".editPhone input").val();
            var score = father.find(".editScore input").val();
            var state = father.find(".editState select").val();
            var stateHtml = father.find(".editState option:selected").text();
            var source = father.find(".editSource input").val();
            var sign = father.find(".editSign option:selected").text();

            if(name==""||phone==""||state==0||sign==0){
                alert("您有未选项");
            }
            else{
                father.remove();

                html += "<div class='listData1 ovh'>";
                html +=     "<div class='listDataNormal listName mr3 fl'>"+name+"</div>";
                html +=     "<div class='listDataNormal listPhone mr3 fl'>"+phone+"</div>";
                html +=     "<div class='listDataNormal mr3 fl'>"+score+"</div>";
                html +=     "<div class='listDataNormal mr3 fl'>"+stateHtml+"</div>";
                html +=     "<div class='listDataNormal mr3 fl'>"+source+"</div>";
                html +=     "<div class='listDataNormal fl ovh'>";
                html +=         "<p class='listSign fl'>"+sign+"</p>";
                html +=         "<img src='/common/images/edit.png' class='edit fl'>";
                html +=         "<img src='/common/images/delete.png' class='delete fl'>";
                html +=     "</div>";
                html += "</div>";

                $(".listData").append(html);

                $(".all").removeClass("mark");
            }

            allFun.promotionDel();

            allFun.promotionEdit();
        });
    },

    /**
     * 编辑状态删除按钮
     */

    promotionEditDel :function(){
        $(".cha").click(function(){
            $(this).closest(".listData1").remove();

            $(".all").removeClass("mark");

            allFun.promotionDel();

            allFun.promotionEdit();
        });
    }

}

