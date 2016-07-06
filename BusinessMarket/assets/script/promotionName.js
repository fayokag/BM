$(function(){

    /**
     * 预加载
     */

    initList();

    /**
     * 邀约名单，用户详情
     */

    $(".inviteName,.userExport").click(function(){
        $.overLay(".all");
        $.boxExport(".all");
    });

    /**
     * 名单详情,省份加载
     */

    $(".listPhone").click(function(){

        var htmlProvince = "";
        var name = $(this).prev().text();
        var phone = $(this).text();

        $(".list").hide();
        $(".promotionDetail").show();

        $(".basicName input").attr("placeholder",name);
        $(".basicPhone input").attr("placeholder",phone);

        $.each(arrCity,function(i,item){
            htmlProvince += "<option value='"+i+"'>"+item.name+"</option>";
        });

        $(".basicProvince").append(htmlProvince);
    });

    /**
     * 城市加载
     */

    $(".basicProvince").change(function(){
        $(this).siblings("select").empty();
        $(this).siblings("select").html("");

        var index = $(this).val();
        var htmlCity = "";

        if(index!=0){

            $.each(arrCity[index].sub,function(i,item){
                htmlCity +=     "<option value='"+i+"'>"+item.name+"</option>";
            });

        }

        $(this).siblings(".basicCity").append(htmlCity);
    });

    /**
     * 区域加载
     */

    $(".basicCity").change(function(){
        $(this).siblings(".basicArea").empty();
        $(this).siblings(".basicArea").html("");

        var index = $(this).siblings(".basicProvince").val();
        var son = $(this).val();
        var htmlArea = "";

        if(son!=0){

            $.each(arrCity[index].sub[son].sub,function(i,item){
                htmlArea +=     "<option value='"+i+"'>"+item.name+"</option>";
            });

        }

        $(this).siblings(".basicArea").append(htmlArea);
    });

    /**
     * 推广名单数据
     */

    function initList(){
        var html = "";
        $.each(list_import,function(i,item){
            var tel = item.phone.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");
            html += "<div class='listData1 ovh'>";
            if(i%2==1){
                html +=     "<div class='proNameSpecial listName mr3 fl'>"+item.name+"</div>";
                html +=     "<div class='proNameSpecial listPhone mr3 cur_point fl'>"+tel+"</div>";
                html +=     "<div class='proNameSpecial mr3 fl'>"+item.source+"</div>";
                html +=     "<div class='proNameSpecial fl'>"+item.state+"</div>";
            }
            else{
                html +=     "<div class='proNameNormal listName mr3 fl'>"+item.name+"</div>";
                html +=     "<div class='proNameNormal listPhone mr3 cur_point fl'>"+tel+"</div>";
                html +=     "<div class='proNameNormal mr3 fl'>"+item.source+"</div>";
                html +=     "<div class='proNameNormal fl'>"+item.state+"</div>";
            }
            html += "</div>";
        });

        $(".listData").append(html);

        /*
        var htmlBot = "";
        var windowHeight = $(window).height();
        var docHeight = $("html").height();

        docHeight += 100;
        htmlBot += "<div class='footer w100'></div>";

        if(docHeight<windowHeight){
            $(".all").css("height",windowHeight);
        }
        else{
            $(".all").css("height",docHeight);
        }
        $(".all").append(htmlBot);
        */
    }

})

