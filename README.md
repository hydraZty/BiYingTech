# BitUniverse
web for BitUniverse

# 文章上传
-- 文章首页自动显示前四个

-- ~/js/article_**.xml 为文章存储文件

-- 一个 article 标签为一篇文章

-- 最新的文章放在最上面


    <article>
        <title>文章标题</title>
        <date>文章日期(2018-05-02)</date>

        <keyword>关 键 词：区块链 区块链金融</keyword>
        <thumbnail>./article/default.png</thumbnail>
        <banner>./article/default.png</banner>

        <sign1>署名1</sign1>
        <sign2>署名2</sign2>

        <section>
              文章内容
              <br></br>第二行
              <br></br>第三行
              <br></br>
              <br></br>上面空一行
        </section>
    </article>



    -- <section></section> 内可用 <br></br>换行

    -- 默认图片可更改,直接上传图片到  i18n/article/default.png

    -- 图片可用网络图片与本地图片
    -- 网络图片格式:
        -- http://www.xxx.com/file/xxx.jpg
    -- 本地图片格式:
        -- ./article/xxxx.jpg
        -- 本地图片存储到 i18n/article/xxxx.jpg


#招聘上传

    -- 修改文件路径 zh-hans/team.html
    -- 直接添加整段代码 自动显示
    -- 模板
                <li>
                    <div class="recruitment-title">
                        运营专员（实习生)
                        <span class="gt">&gt;</span>
                    </div>
                    <ul class="recruitment" style="display: none">
                        <li>学历：大学本科以上学历</li>
                        <li>薪资范围：4000-5000</li>
                        <li>工作地点：北京市朝阳区雅宝路E园共享办公</li>
                        <li>技能要求：产品运营、社区运营、用户运营</li>
                        <li>&nbsp;</li>
                        <li>职位描述：</li>
                        <li>1、产品针对海外用户，要求应聘者是外语好的计算机、金融专业背景（外语主要指：英、法、俄、日、韩、德、印尼语）</li>
                        <li>2、具有良好人际交往、客户沟通能力，能用外语对话、书写；</li>
                        <li>3、有意愿学习探索相较于经典互联网的新领域。</li>
                        <li>&nbsp;</li>
                        <li>联系方式：</li>
                        <li>wangzheng@bituniverse.org</li>
                    </ul>
                </li>

    --  替换其中中文部分
