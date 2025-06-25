// scripts/override_archive_title.js
'use strict';

hexo.extend.filter.register('after_render:html', (str, data) => {
  if (data.path === 'archives/index.html') {
    return str.replace(
      /<h1[^>]*>[\s\S]*?<\/h1>/,
      // 带上 style 让它居中、白色
      `<h1 class="archive-title" style="text-align:center;color:#fff;">
         欢迎来到我的时间胶囊，挖宝请自备锹
       </h1>`
    );
  }
  return str;
});
