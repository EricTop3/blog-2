/*! bh-lay.com 2014-06-07 */
define(function(a){function b(a,b){var c=a.replace(/\{(\w*)}/g,function(){return b[arguments[1]]||""});return c}function c(a,b){a||b&&b("missing arguments"),$.ajax({url:"/ajax/share",type:"GET",data:{act:"get_detail",id:a},success:function(a){1!=a.code?b&&b("data error"):b&&b(null,a.detail)}})}function d(a,d){if(!d){var f=b(e,{});return a.html(f),void admin.formToAjax(a,{onSubmit:function(){UI.prompt("正在提交分享修改！")},onResponse:function(){UI.prompt("分享发布完毕"),admin.push("/admin/"),admin.refresh()}})}c(d,function(c,d){if(c)return void a.html("数据异常！");var f=b(e,d);a.html(f),admin.formToAjax(a,{onSubmit:function(){UI.prompt("正在提交分享修改！")},onResponse:function(){UI.prompt("分享修改完毕"),admin.push("/admin/"),admin.refresh()}})})}a("/frontEnd/publish/publish.css"),a("/frontEnd/mditor/mditor.js"),a("/frontEnd/gallery/index.js");var e=['<div class="pub_share">','<form action="/ajax/add_edit" method="post" target="_self">','<div class="pub_row_input">','<input type="text" placeholder="分享主题" name="title" value="{title}"/>',"</div>",'<div class="pub_row_input">','<textarea name="intro" placeholder="分享简介" cols="50" rows="5">{intro}</textarea>',"</div>",'<div class="pub_row_input">','<textarea name="content" placeholder="分享详情" cols="50" rows="10" >{content}</textarea>',"</div>","<div>",'<input type="text" placeholder="缩略图" name="cover" value="{cover}" />','<input type="text" placeholder="标签" name="tags" value="{tags}" />','<input type="text" placeholder="发表时间" name="time_show" value="{time_show}" />','<input type="text" placeholder="分享来自" name="from" value="{from}" />','<input type="text" placeholder="分享地址" name="from_url" value="{from_url}" />',"</div>","<div>",'<input type="hidden" name="id" value="{id}" />','<input type="hidden" name="category" value="share" />','<button type="submit" class="btn btn-primary">提交</button>',"</div>","</form>","</div>"].join("");return d});