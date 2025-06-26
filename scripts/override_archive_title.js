// scripts/override_archive_title.js
'use strict';

hexo.extend.filter.register('after_render:html', (str, data) => {
  if (data.path === 'archives/index.html') {
    return str.replace(
      /<h1[^>]*>[\s\S]*?<\/h1>/,
      `<h1 class="archive-title"
           style="text-align:center;
                  color:#fff;
                  font-size:36px;  /* 36px 即 2号字体 */
                  line-height:1.2;">
         能源声声入归档 基建步步记春秋
       </h1>`
    );
  }
  return str;
});
