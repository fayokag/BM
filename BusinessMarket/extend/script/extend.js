$(function(){

    $.extend({

        /**
         * 遮找层
         */

        overLay :function(dom){
            var html = "";
            html += "<div class='overLay'></div>";
            $(dom).append(html);
        },

        /**
         * 导入弹出层
         */

        boxExport :function(dom){
            var html = "";
            html += "<div class='box'>";
            html +=     "<div class='boxFile'><input type='file' class='exportFile'></div>";
            html +=     "<div class='confirm ovh'>";
            html +=         "<p class='confirmYes fl'>确认</p>";
            html +=         "<p class='confirmCancel fr'>取消</p>";
            html +=     "</div>";
            html += "</div>";
            $(dom).append(html);

            /**
             * 弹出层确认按钮
             */

            $(".confirmYes").click(function(){
                var file = $(".exportFile").val();
                var file_type=file.replace(/.+\./,"");
                if(!file_type){
                    alert("您未选择文件")
                }
            });

            /**
             * 弹出层取消按钮
             */

            $(".confirmCancel").click(function(){
                $(".overLay,.box").remove();
            });
        },

        /**
         * 敏感弹出层
         */

        boxSen :function(dom,e){
            var html = "";
            html += "<div class='boxSen'>";
            html +=     "<div class='boxSenConfirm ovh'>";
            html +=         "<p class='confirmYes fl'>确认</p>";
            html +=         "<p class='confirmCancel fr'>取消</p>";
            html +=     "</div>";
            html += "</div>";
            $(dom).append(html);

            /**
             * 弹出层确认按钮
             */

            $(".confirmYes").click(function(){
                $(".overLay,.boxSen").remove();
                $(e).closest(".listData1").remove();
            });

            /**
             * 弹出层取消按钮
             */

            $(".confirmCancel").click(function(){
                $(".overLay,.boxSen").remove();
            });

        }
    })

})

