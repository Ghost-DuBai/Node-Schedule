# Node-Schedule

<!-- wp:paragraph -->
<p>笔者因为答应一个朋友每天提醒他早睡，但是又怕有天自己忙或者忘记，就想到了用node做一个定时任务，然后托管，那么"node-schedule"是个不错的选择，然后再用"nodemailer"发送邮件，然后就可以起到一个每日定时发送邮件的任务了，不过只这样又有些许单调，笔者又想到要不要爬取一下天气，然后一起发送。这个时候，我又想到了"cheerio"，通过cheerio我们就可以爬取页面数据如何再按照标签获取自己想要的数据，因为做爬虫要设计http请求，那么"superagent"就必不可少了，"superagent"是一个是一个轻量的Ajax API，具有学习曲线低、使用简单、可读性好的特点，同时也支持Server端和Client端。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>node-schedule</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/node-schedule/node-schedule" target="_blank" rel="noreferrer noopener">Node Schedule </a>是适用于 Node.js 的灵活的类似 cron 且不类似 cron 的作业调度程序。它允许您安排作业（任意函数）以在特定日期执行，并带有可选的重复规则。它在任何给定时间只使用一个计时器（而不是每秒/分钟重新评估即将到来的工作）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Node Schedule 用于基于时间的调度，而不是基于间隔的调度。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>虽然您可以轻松地将其弯曲到您的意愿，但如果您只想执行“每 5 分钟运行一次此功能”之类的操作，那么<a href="https://github.com/kibertoad/toad-scheduler">toad-scheduler</a>将是一个更好的选择。但是，如果您想“在每个月的第三个星期二的每小时 :20 和 :50 运行此功能”，您会发现 Node Schedule 更适合您的需求。此外，与 true 不同，Node Schedule 具有 Windows 支持，<code>cron</code>因为现在完全支持节点运行时。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>请注意，节点调度是为进程内调度而设计的，即调度作业只会在您的脚本运行时触发，并且在执行完成时调度将消失。如果您需要安排即使您的脚本<em>未</em>运行也将持续存在的作业，请考虑使用实际的<a href="http://unixhelp.ed.ac.uk/CGI/man-cgi?crontab+5">cron</a>。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>如果您需要在重新启动和锁定系统与多节点部署兼容的情况下持续存在的持久作业，请尝试<a href="https://github.com/agenda/agenda">议程</a>或<a href="https://github.com/breejs/bree">bree</a>。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>安装</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm i node-schedule</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>nodemailer</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Nodemailer</strong>是一个用于 Node.js 应用程序的模块，可以轻松发送电子邮件。该项目早在 2010 年就开始了，当时还没有明智的选择来发送电子邮件，今天它是大多数 Node.js 用户默认使用的解决方案。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>安装</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm i nodemailer</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>cheerio</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。通过这句话我们可以知道他是基于jQuery封装的，那么使用也可以直接用jQuery的语法，这样就减少了我们一些使用的麻烦。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>安装</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm i cheerio</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>superagent</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SuperAgent 是一个轻量的Ajax API，服务器端（Node.js）客户端（浏览器端）均可使用,SuperAgent具有学习曲线低、使用简单、可读性好的特点,可作为客户端请求代理模块使用，当你想处理get,post,put,delete,head请求时，可以考虑使用SuperAgent。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>安装</h3>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm i superagent</code></pre>
<!-- /wp:code -->