var nav = '\
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\
<div class="container-fluid">\
<div class="navbar-header">\
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\
<span class="sr-only">Toggle navigation</span>\
<span class="icon-bar"></span>\
<span class="icon-bar"></span>\
<span class="icon-bar"></span>\
</button>\
<a class="navbar-brand" id="AppName"></a>\
</div>\
<div id="navbar" class="navbar-collapse collapse">\
<ul class="nav navbar-nav navbar-right">\
<li class="dropdown">\
<a id="dictname" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-globe"></span><span class="caret"></span></a>\
<ul class="dropdown-menu" role="menu">\
<li><a onclick="switchLang(\'en-US\')">English (US)</a></li>\
<li><a onclick="switchLang(\'zh-TW\')">繁體中文</a></li>\
</ul>\
</li>\
</ul>\
</div>\
</div>\
</nav>'
$("body").prepend(nav);
