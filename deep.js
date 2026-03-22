// ============================================
// TEMPLATE SNEWS - CÓDIGO COMPLETO E LIMPO
// ============================================

(function($) {
    "use strict";

    // ============================================
    // PARTE 1: CONFIGURAÇÕES E VARIÁVEIS GLOBAIS
    // ============================================
    
    // Configurações principais
    var config = {
        // Elementos
        elmt: document.getElementById('snewshtml'),
        
        // Configurações de post
        summaryLength: $('.varsumlength').length ? parseInt($('.varsumlength').attr('title')) : 100,
        fixMenu: !$('.varfixmenu').length || $('.varfixmenu').attr('title') !== 'n',
        stickyMenu: !$('.varstickymenu').length || $('.varstickymenu').attr('title') !== 'n',
        featPost: !$('.varfeatpost').length || $('.varfeatpost').attr('title') !== 'n',
        
        // Velocidades
        sliderSpeed: $('.varsliderspeed').length ? parseInt($('.varsliderspeed').attr('title')) : 5000,
        postsPerPage: $('.varnavipostpage').length ? parseInt($('.varnavipostpage').attr('title')) : 20,
        
        // Admin
        adminBlog: $('.varadminblog').length && $('.varadminblog').attr('title') !== 'n' ? $('.varadminblog').attr('title') : '',
        
        // Autores
        hideAuthor: !$('.varhideauthor').length || $('.varhideauthor').attr('title') !== 'y',
        
        // Formatos de data
        dateFormat: $('.vardateformat').length ? $('.vardateformat').attr('title') : 'YYYY-MM-DD',
        
        // Textos
        nextText: $('.varntext').length && $('.varntext').attr('title') !== 'n' ? $('.varntext').attr('title') : 'Next',
        prevText: $('.varptext').length && $('.varptext').attr('title') !== 'n' ? $('.varptext').attr('title') : 'Previous',
        moreText: $('.varmtext').length && $('.varmtext').attr('title') !== 'n' ? $('.varmtext').attr('title') : 'More',
        relatedText: $('.varreltext').length && $('.varreltext').attr('title') !== 'n' ? $('.varreltext').attr('title') : 'Related Post',
        recentText: $('.varrectext').length && $('.varrectext').attr('title') !== 'n' ? $('.varrectext').attr('title') : 'Recent Post',
        recommendedText: $('.varrecommendedtext').length && $('.varrecommendedtext').attr('title') !== 'n' ? $('.varrecommendedtext').attr('title') : 'Recommended Post',
        searchText: $('.varsrctext').length && $('.varsrctext').attr('title') !== 'n' ? $('.varsrctext').attr('title') : 'Type and hit enter to search...',
        readMoreText: $('.varreadmoretext').length && $('.varreadmoretext').attr('title') !== 'n' ? $('.varreadmoretext').attr('title') : 'Read more »',
        tweetText: $('.vartweettext').length && $('.vartweettext').attr('title') !== 'n' ? $('.vartweettext').attr('title') : 'Tweet',
        likeText: $('.varliketext').length && $('.varliketext').attr('title') !== 'n' ? $('.varliketext').attr('title') : 'Like',
        shareText: $('.varsharetext').length && $('.varsharetext').attr('title') !== 'n' ? $('.varsharetext').attr('title') : 'Share',
        twitterAuthor: $('.vartwitterauthor').length && $('.vartwitterauthor').attr('title') !== 'n' ? $('.vartwitterauthor').attr('title') : 'MARIthemes',
        
        // Comentários
        disqusShortname: $('.vardisqusshortname').length && $('.vardisqusshortname').attr('title') !== 'n' ? $('.vardisqusshortname').attr('title') : '',
        flickrId: $('.varflickrid').length && $('.varflickrid').attr('title') !== 'n' ? $('.varflickrid').attr('title') : '',
        
        // Posts
        hmainpost: !!$('.varhmainpost').length && $('.varhmainpost').attr('title') === 'y',
        hreview: !!$('.varhreview').length && $('.varhreview').attr('title') === 'y',
        fbappid: $('.varfbappid').length ? $('.varfbappid').attr('title') : '218168578325095',
        relatedStyle: $('.varrelstyle').length ? $('.varrelstyle').attr('title') : 'carousel',
        fblang: $('.varfblang').length ? $('.varfblang').attr('title') : 'en_US',
        
        // Features
        cseid: !!$('.varcseid').length && $('.varcseid').attr('title') === 'n',
        autoplay: !!$('.varautoplay').length && $('.varautoplay').attr('title') === 'y',
        showIframe: !!$('.varshowiframe').length && $('.varshowiframe').attr('title') === 'y',
        showRelated: !$('.varshowrelated').length || $('.varshowrelated').attr('title') !== 'n',
        showRecommended: !!$('.varshowrecommended').length && $('.varshowrecommended').attr('title') === 'y',
        hexcerpt: !$('.varhexcerpt').length || $('.varhexcerpt').attr('title') !== 'n',
        topBreakLine: !!$('.vartopbreakline').length && $('.vartopbreakline').attr('title') === 'y',
        bottomBreakLine: !!$('.varbottombreakline').length && $('.varbottombreakline').attr('title') === 'y',
        topBreakLineLoad: $('.vartopbreaklineload').length ? $('.vartopbreaklineload').attr('title') : 'recent',
        bottomBreakLineLoad: $('.varbottombreaklineload').length ? $('.varbottombreaklineload').attr('title') : 'recent',
        
        // Quantidades por widget
        mx: {
            recentPost: $('.varrecentpost').length ? parseInt($('.varrecentpost').attr('title')) : 4,
            randomPost: $('.varrandompost').length ? parseInt($('.varrandompost').attr('title')) : 4,
            featuredPost: $('.varfeaturedpost').length ? parseInt($('.varfeaturedpost').attr('title')) : 4,
            recentComment: $('.varrecentcomment').length ? parseInt($('.varrecentcomment').attr('title')) : 4,
            fbig1: $('.varfbig1').length ? parseInt($('.varfbig1').attr('title')) : 5,
            fbig2: $('.varfbig2').length ? parseInt($('.varfbig2').attr('title')) : 5,
            gallery1: $('.vargallery1').length ? parseInt($('.vargallery1').attr('title')) : 6,
            gallery2: $('.vargallery2').length ? parseInt($('.vargallery2').attr('title')) : 5,
            gallery3: $('.vargallery3').length ? parseInt($('.vargallery3').attr('title')) : 3,
            column1: $('.varcolumn1').length ? parseInt($('.varcolumn1').attr('title')) : 5,
            column2: $('.varcolumn2').length ? parseInt($('.varcolumn2').attr('title')) : 5,
            newsticker: $('.varnewsticker').length ? parseInt($('.varnewsticker').attr('title')) : 9,
            slider: $('.varslider').length ? parseInt($('.varslider').attr('title')) : 5,
            carousel1: $('.varcarousel1').length ? parseInt($('.varcarousel1').attr('title')) : 9,
            carousel2: $('.varcarousel2').length ? parseInt($('.varcarousel2').attr('title')) : 9,
            related: $('.varrelated').length ? parseInt($('.varrelated').attr('title')) : 9,
            video: $('.varvideo').length ? parseInt($('.varvideo').attr('title')) : 6,
            featured1: $('.varfeatured1').length ? parseInt($('.varfeatured1').attr('title')) : 8,
            featured2: $('.varfeatured2').length ? parseInt($('.varfeatured2').attr('title')) : 10,
            featured3: $('.varfeatured3').length ? parseInt($('.varfeatured3').attr('title')) : 10,
            featured4: $('.varfeatured4').length ? parseInt($('.varfeatured4').attr('title')) : 5,
            featured5: $('.varfeatured5').length ? parseInt($('.varfeatured5').attr('title')) : 7,
            bigpost: $('.varbigpost').length ? parseInt($('.varbigpost').attr('title')) : 4,
            halfpost: $('.varhalfpost').length ? parseInt($('.varhalfpost').attr('title')) : 4,
            animatedpost: $('.varanimatedpost').length ? parseInt($('.varanimatedpost').attr('title')) : 9,
            blogpost: $('.varblogpost').length ? parseInt($('.varblogpost').attr('title')) : 4,
            simplepost: $('.varsimplepost').length ? parseInt($('.varsimplepost').attr('title')) : 4,
            list: $('.varlist').length ? parseInt($('.varlist').attr('title')) : 6,
            timeline: $('.vartimeline').length ? parseInt($('.vartimeline').attr('title')) : 6,
            disquscomment: $('.vardisquscomment').length ? parseInt($('.vardisquscomment').attr('title')) : 4,
            flickrbadge: $('.varflickrbadge').length ? parseInt($('.varflickrbadge').attr('title')) : 8,
            tabsrecent: $('.vartabsrecent').length ? parseInt($('.vartabsrecent').attr('title')) : 5
        }
    };

    // Regex para processamento de conteúdo
    var rgx = [
        /(<|\[)img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?(\>|\])/i,
        /(youtu.be\/|youtube.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&\"\'>]+)/i,
        /\/s\d+(\-c)?\//i,
        /\[youtube +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?\]/i,
        /vimeo.com\/|dailymotion.com\/|youtube.com\/|youtu.be\/|\[dailymotion|\[youtube/i,
        /soundcloud.com\/|\[soundcloud/i,
        /\[gallery\]|\[gallery|\[bgallery/i,
        /\<blockquote\>/i,
        /<(?:script|style)\b[^<]*(?:(?!<\/(?:script|style)>)<[^<]*)*<\/(?:script|style)>/gi,
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /\[item *value=("[^"]+") *\]/g
    ];

    // ============================================
    // PARTE 2: FUNÇÕES AUXILIARES
    // ============================================
    
    // Verificar RTL
    function ts_isRTL() {
        return $('body').css('direction') === 'rtl';
    }

    // Funções de Cookie
    function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    function haveCookie() {
        return 'cookie' in document;
    }

    // Funções de LocalStorage
    function checkLocal() {
        return typeof localStorage !== 'undefined';
    }

    function setLocal(key, value) {
        if (checkLocal()) {
            localStorage.setItem(key, value);
            return true;
        }
        return false;
    }

    function getLocal(key) {
        if (checkLocal()) {
            return localStorage.getItem(key);
        }
        return '';
    }

    function delLocal(key) {
        if (checkLocal()) {
            localStorage.removeItem(key);
        }
    }

    function setCookieLocal(key, value) {
        return checkLocal() ? setLocal(key, value) : haveCookie() ? createCookie(key, value, 30) : false;
    }

    function getCookieLocal(key) {
        return checkLocal() ? getLocal(key) : haveCookie() ? readCookie(key) : '';
    }

    function delCookieLocal(key) {
        return checkLocal() ? delLocal(key) : haveCookie() ? eraseCookie(key) : false;
    }

    // ============================================
    // PARTE 3: FUNÇÕES DE POSTS E THUMBNAILS
    // ============================================
    
    var defaultImage = 'http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s72-c/grey.gif';

    function getThumb(entry, defaultImg) {
        var thumb = defaultImg;
        try {
            if (entry.media$thumbnail) {
                thumb = entry.media$thumbnail.url;
            }
        } catch(e) {
            var div = $('<div>' + entry.content.$t + '</div>');
            var img = div.find('img').attr('src');
            thumb = img ? img : defaultImg;
        }
        return thumb;
    }

    function setLink(element, template, defaultImg, entry) {
        var date = new Date(entry.published.$t.match(/\d+/g));
        var thumb = getThumb(entry, defaultImg);
        var url = $(element).attr('href');
        var summary = $('<div>' + entry.content.$t + '</div>').text().replace(/\[\S[^\]]*\]/g, '');
        
        if (summary.length > config.summaryLength) {
            summary = summary.substring(0, config.summaryLength);
            var lastSpace = summary.lastIndexOf(' ');
            if (lastSpace > 0) {
                summary = summary.substring(0, lastSpace) + '...';
            } else {
                summary = summary + '...';
            }
        }
        
        template = template.replace(/\[title\]/g, entry.title.$t);
        template = template.replace(/\[date\]/g, date.toLocaleDateString());
        template = template.replace(/\[datetime\]/g, date.toLocaleString());
        template = template.replace(/\[summary\]/g, summary);
        template = template.replace(/\[thumburl\]/g, thumb);
        template = template.replace(/\[url\]/g, url);
        
        var imgHtml = '';
        if (thumb !== '') {
            imgHtml = '<img src="' + thumb + '">';
        }
        template = template.replace(/\[img\]/g, imgHtml);
        
        $(element).replaceWith(template);
    }

    function setOlderLink(entry) {
        var template = '<a class="blog-pager-older-link-item oldernewerright" title="Older Post - [title] - posted on [date]" href="[url]"><h6></h6><h5>[title]</h5></a>';
        setLink('a.blog-pager-older-link-item', template, defaultImage, entry);
    }

    function setNewerLink(entry) {
        var template = '<a class="blog-pager-newer-link-item oldernewerleft" title="Newer Post - [title] - posted on [date]" href="[url]"><h6></h6><h5>[title]</h5></a>';
        setLink('a.blog-pager-newer-link-item', template, defaultImage, entry);
    }

    // ============================================
    // PARTE 4: FUNÇÕES DE SIDEBAR E AJUSTES
    // ============================================
    
    function chside(e) {
        if (e.parents('.sidebar-right').length) {
            var h = $('.sidebar-right .innerwrap').height();
            var t = $('#sidebar-top').height();
            var a = $('#sidebar-bottom').height();
            h = h + t + a + 40;
            $('.sidebar-right .innerwrap').css({ height: h });
        } else if (e.parents('.sidebar-bottom').length) {
            var height = $('.sidebar-bottom .innerwrap').height();
            $('.sidebar-bottom .innerwrap').css({ height: height + 20 });
        }
    }

    // ============================================
    // PARTE 5: FUNÇÕES DE MENU
    // ============================================
    
    function cmenu(type, element) {
        var html = '<ul class="' + type + '">';
        $(element).find('li').each(function() {
            var text = $(this).text();
            var firstChar = text.substr(0, 1);
            var rest = text.substr(1);
            var href = $(this).find('a').attr('href');
            
            if (firstChar === '[' || firstChar === '*') {
                html += '<li><a href="' + href + '">' + rest + '</a></li>';
            } else {
                html += '<li><a href="' + href + '">' + text + '</a></li>';
            }
        });
        html += '</ul>';
        $(element).html(html);
        
        $(element).find('li').each(function() {
            if ($(this).html().replace(/\s|&nbsp;/g, '').length === 0) {
                $(this).remove();
            }
        });
        
        $(element).find('li a').each(function() {
            if ($(this).html().replace(/\s|&nbsp;/g, '').length === 0) {
                $(this).remove();
            }
        });
    }

    // ============================================
    // PARTE 6: FUNÇÕES DE SHORTCODES
    // ============================================
    
    var shortcodeTags = ["youtube", "soundcloud", "dailymotion", "gallery", "bgallery", "code", "accordion", "tab", "vtab", "alert", "warning", "info", "success", "error", "review", "lock", "contact", "map", "media", "tooltip", "slide", "carousel", "page"];

    function tagregex(str) {
        var changed = false;
        
        for (var i = 0; i < shortcodeTags.length; i++) {
            var openTag = '[' + shortcodeTags[i];
            var closeTag = '[/' + shortcodeTags[i] + ']';
            var selfClosing = '[' + shortcodeTags[i] + '/]';
            var pos = 0;
            
            for (var j = 0; j < 100; j++) {
                var start = str.indexOf(openTag, pos);
                if (start === -1) break;
                
                var end = str.indexOf(closeTag, start);
                var selfEnd = str.indexOf(selfClosing, start);
                var content = '';
                var endPos = 0;
                var length = 0;
                
                if (end !== -1 && (selfEnd === -1 || selfEnd > end)) {
                    content = str.substring(start, end + closeTag.length);
                    content = content.replace(closeTag, '');
                    endPos = end;
                    length = closeTag.length;
                } else if (end === -1 && selfEnd !== -1) {
                    content = str.substring(start, selfEnd + 2);
                    content = content.replace(selfClosing, '');
                    endPos = selfEnd;
                    length = 2;
                } else {
                    pos++;
                    continue;
                }
                
                // Processar shortcode específico
                var tagName = shortcodeTags[i];
                var attributes = {};
                var attrMatch = content.match(/(\w+)=["']([^"']*)["']/g);
                
                if (attrMatch) {
                    for (var k = 0; k < attrMatch.length; k++) {
                        var parts = attrMatch[k].split('=');
                        attributes[parts[0]] = parts[1].replace(/["']/g, '');
                    }
                }
                
                var innerContent = content.replace(/^\[[^\]]+\]/, '');
                var replacement = '';
                
                switch(tagName) {
                    case 'youtube':
                        var videoId = attributes.src || attributes.id || innerContent.trim();
                        if (videoId) {
                            replacement = '<div class="scode-youtube"><iframe width="100%" height="400" src="https://www.youtube.com/embed/' + videoId + '?rel=0&controls=1&showinfo=0" frameborder="0" allowfullscreen></iframe></div>';
                        }
                        break;
                        
                    case 'soundcloud':
                        var trackId = attributes.src || attributes.id || innerContent.trim();
                        if (trackId) {
                            replacement = '<div class="scode-soundcloud"><iframe width="100%" height="130" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackId + '&color=ff5500&auto_play=false"></iframe></div>';
                        }
                        break;
                        
                    case 'dailymotion':
                        var videoId = attributes.src || attributes.id || innerContent.trim();
                        if (videoId) {
                            replacement = '<div class="scode-dailymotion"><iframe frameborder="0" width="100%" height="270" src="https://www.dailymotion.com/embed/video/' + videoId + '" allowfullscreen></iframe></div>';
                        }
                        break;
                        
                    case 'gallery':
                    case 'bgallery':
                        var images = innerContent.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|gif)/gi);
                        if (images && images.length) {
                            replacement = '<div class="scode-gallery gallery-' + (tagName === 'bgallery' ? 'bgallery' : 'normal') + '">';
                            for (var g = 0; g < images.length; g++) {
                                replacement += '<div class="gallery-item"><img src="' + images[g] + '" alt=""></div>';
                            }
                            replacement += '</div>';
                        }
                        break;
                        
                    case 'code':
                        var language = attributes.lang || 'html';
                        replacement = '<pre class="scode-code"><code class="' + language + '">' + escapeHtml(innerContent) + '</code></pre>';
                        break;
                        
                    case 'accordion':
                        var items = innerContent.split(/\[item\s+value=["']([^"']*)["']\]/);
                        replacement = '<div class="scode-accordion">';
                        for (var a = 1; a < items.length; a += 2) {
                            replacement += '<h3 class="acrd-toggle">' + items[a] + '<span class="anchor"><i class="fa fa-plus"></i></span></h3>';
                            replacement += '<div class="acrd-content">' + items[a + 1] + '</div>';
                        }
                        replacement += '</div>';
                        break;
                        
                    case 'tab':
                    case 'vtab':
                        var tabs = innerContent.split(/\[item\s+value=["']([^"']*)["']\]/);
                        replacement = '<div class="scode-tab ' + (tagName === 'vtab' ? 'vtab' : '') + '"><ul class="tab-headers">';
                        for (var t = 1; t < tabs.length; t += 2) {
                            replacement += '<li><a href="#tab-' + t + '">' + tabs[t] + '</a></li>';
                        }
                        replacement += '</ul><div class="tab-contents">';
                        for (var t2 = 1; t2 < tabs.length; t2 += 2) {
                            replacement += '<div id="tab-' + t2 + '" class="tab-content">' + tabs[t2 + 1] + '</div>';
                        }
                        replacement += '</div></div>';
                        break;
                        
                    case 'alert':
                        replacement = '<div class="scode-message scode-alert"><div class="headline">Alert</div><div class="message-wrapper">' + innerContent + '</div></div>';
                        break;
                        
                    case 'warning':
                        replacement = '<div class="scode-message scode-warning"><div class="headline">Warning</div><div class="message-wrapper">' + innerContent + '</div></div>';
                        break;
                        
                    case 'info':
                        replacement = '<div class="scode-message scode-info"><div class="headline">Info</div><div class="message-wrapper">' + innerContent + '</div></div>';
                        break;
                        
                    case 'success':
                        replacement = '<div class="scode-message scode-success"><div class="headline">Success</div><div class="message-wrapper">' + innerContent + '</div></div>';
                        break;
                        
                    case 'error':
                        replacement = '<div class="scode-message scode-error"><div class="headline">Error</div><div class="message-wrapper">' + innerContent + '</div></div>';
                        break;
                        
                    case 'review':
                        var scores = innerContent.match(/\d+(\.\d+)?/g);
                        if (scores && scores.length) {
                            var total = 0;
                            for (var r = 0; r < scores.length; r++) {
                                total += parseFloat(scores[r]);
                            }
                            var average = (total / scores.length).toFixed(1);
                            var percent = (average / 5) * 100;
                            replacement = '<div class="scode-review"><div class="rev-score">' + average + '</div><div class="rev-bar" style="width:' + percent + '%"></div></div>';
                        }
                        break;
                        
                    case 'lock':
                        replacement = '<div class="locked-content"><div class="inner"><i class="fa fa-lock"></i><h2>PREMIUM CONTENT</h2><h3>Please share to unlock</h3><div class="locked-content-actions"><div class="fb-like" data-href="' + window.location.href + '" data-layout="box_count"></div></div></div></div>';
                        break;
                        
                    case 'contact':
                        replacement = '<div class="scode-contact"><form class="contact-form"><input type="text" name="name" placeholder="Your Name"><input type="email" name="email" placeholder="Your Email"><textarea name="message" placeholder="Your Message"></textarea><button type="submit">Send Message</button></form></div>';
                        break;
                        
                    case 'map':
                        var address = attributes.address || innerContent.trim();
                        if (address) {
                            replacement = '<div class="scode-map"><iframe width="100%" height="300" src="https://maps.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed" frameborder="0"></iframe></div>';
                        }
                        break;
                        
                    case 'tooltip':
                        var title = attributes.title || 'Tooltip';
                        replacement = '<span class="scode-tooltip" title="' + title + '">' + innerContent + '</span>';
                        break;
                        
                    default:
                        replacement = '<div class="scode-' + tagName + '">' + innerContent + '</div>';
                }
                
                if (replacement) {
                    changed = true;
                    str = str.substring(0, start) + replacement + str.substring(endPos + length);
                }
                pos = start + replacement.length;
            }
        }
        
        return changed ? str : '';
    }
    
    function escapeHtml(text) {
        return text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }

    // ============================================
    // PARTE 7: FUNÇÕES DE PAGINAÇÃO
    // ============================================
    
    function pNav(options) {
        var defaults = {
            postperpage: config.postsPerPage,
            numshowpage: 3,
            previous: config.prevText,
            next: config.nextText
        };
        
        var settings = $.extend({}, defaults, options);
        var url = location.href.replace(/(:?\?|\&)m\=(1|0)/g, '');
        var isLabel = url.indexOf('/search/label/') !== -1;
        var labelName = '';
        var currentPage = 1;
        
        // Extrair número da página atual
        var pageMatch = url.match(/start-index=(\d+)/);
        if (pageMatch) {
            currentPage = Math.ceil(parseInt(pageMatch[1]) / settings.postperpage);
        }
        
        if (isLabel) {
            var labelStart = url.indexOf('/search/label/') + 14;
            var labelEnd = url.indexOf('?', labelStart);
            if (labelEnd === -1) labelEnd = url.length;
            labelName = url.substring(labelStart, labelEnd);
        }
        
        function getPageUrl(page) {
            var baseUrl = url.replace(/\?.*$/, '').replace(/\/$/, '');
            var startIndex = (page - 1) * settings.postperpage + 1;
            
            if (isLabel) {
                return baseUrl + '/search/label/' + labelName + '?updated-max=&max-results=' + settings.postperpage + '&start-index=' + startIndex;
            } else {
                return baseUrl + '?start-index=' + startIndex + '&max-results=' + settings.postperpage;
            }
        }
        
        function generatePagination(totalPosts) {
            var html = '';
            var totalPages = Math.ceil(totalPosts / settings.postperpage);
            var current = currentPage;
            var showPages = settings.numshowpage;
            var half = Math.floor(showPages / 2);
            var start = Math.max(1, current - half);
            var end = Math.min(totalPages, current + half);
            
            // Botão anterior
            if (current > 1) {
                html += '<span class="showpageNum"><a href="' + getPageUrl(current - 1) + '">' + settings.previous + '</a></span>';
            }
            
            // Primeira página
            if (start > 1) {
                html += '<span class="showpageNum"><a href="' + getPageUrl(1) + '">1</a></span>';
                if (start > 2) html += '<span class="dotxpage"> ... </span>';
            }
            
            // Páginas do meio
            for (var i = start; i <= end; i++) {
                if (i === current) {
                    html += '<span class="showpagePoint">' + i + '</span>';
                } else {
                    html += '<span class="showpageNum"><a href="' + getPageUrl(i) + '">' + i + '</a></span>';
                }
            }
            
            // Última página
            if (end < totalPages) {
                if (end < totalPages - 1) html += '<span class="dotxpage"> ... </span>';
                html += '<span class="showpageNum"><a href="' + getPageUrl(totalPages) + '">' + totalPages + '</a></span>';
            }
            
            // Botão próximo
            if (current < totalPages) {
                html += '<span class="showpageNum"><a href="' + getPageUrl(current + 1) + '">' + settings.next + '</a></span>';
            }
            
            return html;
        }
        
        var feedUrl = isLabel ? '/feeds/posts/summary/-/' + labelName + '?max-results=1&alt=json-in-script' : '/feeds/posts/summary?max-results=1&alt=json-in-script';
        
        $.ajax({
            url: feedUrl,
            dataType: 'jsonp',
            success: function(data) {
                var total = parseInt(data.feed.openSearch$totalResults.$t, 10);
                var paginationHtml = generatePagination(total);
                $('.blog-pagerindex').html(paginationHtml);
                $('.blog-pagerindex .showpageNum a').click(function(e) {
                    e.preventDefault();
                    window.location.href = $(this).attr('href');
                });
            }
        });
    }

    // ============================================
    // PARTE 8: FUNÇÃO PRINCIPAL DE PROCESSAMENTO DE POSTS
    // ============================================
    
    function processWidgetContent(e, s, n) {
        // Esta função processa o conteúdo dos widgets
        // É a função mais extensa - será implementada separadamente
        if (/[^[\]]+(?=])/g.test(e)) {
            var parts = e.match(/[^[\]]+(?=])/g);
            var tag = parts[0];
            var params = parts[1] || '';
            var color = parts[2] || '';
            var blogUrl = parts[3] || '';
            
            // Detectar tipo de layout
            var isSlider = /slider/.test(params);
            var isGallery = /gallery/.test(params);
            var isFeatured = /featured/.test(params);
            var isCarousel = /carousel/.test(params);
            var isNewsticker = /newsticker/.test(params);
            var isColumn = /column/.test(params);
            var isList = /list/.test(params);
            var isTimeline = /timeline/.test(params);
            var isFbig = /fbig/.test(params);
            var isAnimated = /animated/.test(params);
            
            // Determinar quantidade de posts
            var maxPosts = 5;
            if (isSlider) maxPosts = config.mx.slider;
            else if (isGallery) maxPosts = config.mx.gallery1;
            else if (isFeatured) maxPosts = config.mx.featured1;
            else if (isCarousel) maxPosts = config.mx.carousel1;
            else if (isNewsticker) maxPosts = config.mx.newsticker;
            else if (isColumn) maxPosts = config.mx.column1;
            else if (isList) maxPosts = config.mx.list;
            else if (isTimeline) maxPosts = config.mx.timeline;
            else if (isFbig) maxPosts = config.mx.fbig1;
            
            // Determinar tipo de post
            var postType = '';
            if (isSlider) postType = 'slider';
            else if (isCarousel) postType = 'carousel';
            else if (isNewsticker) postType = 'newsticker';
            else if (isFeatured) postType = 'featured';
            else if (isColumn) postType = 'column';
            else if (isList) postType = 'list';
            else if (isTimeline) postType = 'timeline';
            else if (isFbig) postType = 'fbig';
            
            // Determinar tags
            var tags = null;
            if (tag !== 'recent' && tag !== 'random' && tag !== 'featured' && tag !== 'related') {
                tags = tag.split(',');
            }
            
            // Aplicar cor se existir
            if (color) {
                n.find('.title-wrap').css('color', color);
                n.find('.morepost').css('border-color', color);
            }
            
            // Adicionar classes
            n.addClass('snewidget ' + postType);
            s.addClass('widget-content');
            
            // Inicializar widget
            s.SWidget({
                blogURL: blogUrl || '',
                maxPosts: maxPosts,
                maxPostsPerTag: maxPosts,
                tags: tags,
                random: tag === 'random',
                postType: postType,
                color: color,
                ShowComment: true,
                ShowImage: true,
                ShowTags: isFeatured || isNewsticker,
                ShowAuthor: config.hideAuthor,
                ShowDesc: !(isList || isTimeline),
                ShowIframe: config.showIframe,
                auto: config.autoplay,
                review: config.hreview,
                summary: (isSlider || isFeatured || isNewsticker) ? 200 : 100,
                slideSpeed: config.sliderSpeed,
                fbig: isFbig,
                animated: isAnimated,
                startFirst: isAnimated
            });
        } else {
            // Shortcodes simples
            if (/recentpost/g.test(e)) {
                s.SWidget({
                    maxPostsPerTag: config.mx.recentPost
                });
            } else if (/randompost/g.test(e)) {
                s.SWidget({
                    maxPosts: config.mx.randomPost,
                    random: true
                });
            } else if (/featuredpost/g.test(e)) {
                s.SWidget({
                    maxPosts: config.mx.featuredPost,
                    random: true
                });
            } else if (/disquscomment/g.test(e)) {
                loadDisqusComments(s);
            } else if (/flickrbadge/g.test(e)) {
                loadFlickrBadge(s);
            } else if (/recentcomment/g.test(e)) {
                s.RCom({
                    slideEffect: /slide/g.test(e),
                    slideSpeed: config.sliderSpeed
                });
            } else if (/tabsrecent/g.test(e)) {
                loadTabsRecent(e, s);
            }
        }
        n.addClass('json-process');
    }
    
    function loadDisqusComments($element) {
        if (!config.disqusShortname) return;
        var html = '<div class="rcomment-area"><script type="text/javascript" src="http://' + config.disqusShortname + '.disqus.com/recent_comments_widget.js?num_items=' + config.mx.disquscomment + '&avatar_size=32&excerpt_length=100&hide_mods=0"></script></div>';
        $element.html(html);
    }
    
    function loadFlickrBadge($element) {
        if (!config.flickrId) return;
        var html = '<div class="snews-flickr"><script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=' + config.mx.flickrbadge + '&display=latest&size=s&layout=x&source=user&user=' + config.flickrId + '"></script></div>';
        $element.html(html);
    }
    
    function loadTabsRecent(e, $element) {
        e = e.replace(/tabsrecent\//g, '').split(',');
        var html = '<div class="recent-tab"><ul class="tab-headers">';
        for (var i = 0; i < e.length; i++) {
            html += '<li><a href="#tab-' + i + '">' + e[i] + '</a></li>';
        }
        html += '</ul><div class="tab-contents">';
        for (var j = 0; j < e.length; j++) {
            html += '<div id="tab-' + j + '" class="tab-content"><div class="tab-recent" data-tag="' + e[j] + '"></div></div>';
        }
        html += '</div></div>';
        $element.html(html);
        $element.find('.tab-content .tab-recent').each(function() {
            var tag = $(this).data('tag');
            $(this).SWidget({
                maxPosts: config.mx.tabsrecent,
                tags: [tag],
                fbig: true,
                review: !config.hreview
            });
        });
    }

    // ============================================
    // PARTE 9: PLUGIN SWIDGET COMPLETO
    // ============================================
    
    $.fn.SWidget = function(options) {
        var defaults = {
            blogURL: '',
            maxPosts: 5,
            maxTags: 4,
            maxPostsPerTag: 6,
            tags: null,
            ShowComment: true,
            ShowImage: true,
            ShowTags: false,
            ShowAuthor: true,
            ShowDesc: false,
            ShowPage: false,
            ShowIframe: false,
            auto: false,
            random: false,
            color: '',
            fbig: false,
            startFirst: false,
            animated: false,
            review: false,
            wrapNum: 4,
            summary: 120,
            relatedTitle: config.relatedText,
            first_thumb: '/s1600/',
            thumb: '/s1600/',
            recentTitle: config.recentText,
            postScoreClass: '',
            relevantTip: '',
            slideSpeed: config.sliderSpeed,
            postType: ''
        };
        
        var settings = $.extend({}, defaults, options);
        
        return this.each(function() {
            var $this = $(this);
            var blogUrl = settings.blogURL === '' ? (window.location.protocol + '//' + window.location.host) : settings.blogURL;
            
            // Gerar estrutura HTML base
            $this.html('<div class="items-wrap"></div><div class="pagenavi-place"></div>');
            
            var $itemsWrap = $this.find('.items-wrap');
            var $pagination = $this.find('.pagenavi-place');
            var currentPage = 1;
            var totalItems = 0;
            
            function loadPosts(page) {
                var startIndex = (page - 1) * settings.maxPostsPerTag + 1;
                var feedUrl = '';
                
                if (settings.tags && settings.tags.length > 0 && settings.tags[0] !== null) {
                    feedUrl = blogUrl + '/feeds/posts/default/-/' + encodeURIComponent(settings.tags[0]) + '?start-index=' + startIndex + '&max-results=' + settings.maxPostsPerTag + '&alt=json-in-script';
                } else {
                    feedUrl = blogUrl + '/feeds/posts/default?start-index=' + startIndex + '&max-results=' + settings.maxPostsPerTag + '&alt=json-in-script';
                }
                
                $.ajax({
                    url: feedUrl,
                    dataType: 'jsonp',
                    success: function(data) {
                        var entries = data.feed.entry;
                        if (!entries) {
                            $itemsWrap.html('<div class="no-results">No posts found</div>');
                            return;
                        }
                        
                        if (settings.random) {
                            entries = shuffleArray(entries);
                        }
                        
                        var html = '';
                        for (var i = 0; i < entries.length; i++) {
                            html += generatePostHTML(entries[i], settings, i);
                        }
                        
                        $itemsWrap.html(html);
                        
                        if (settings.ShowPage) {
                            totalItems = parseInt(data.feed.openSearch$totalResults.$t, 10);
                            generatePaginationLinks(page);
                        }
                        
                        // Inicializar carrosséis se necessário
                        if (settings.postType === 'carousel' || settings.postType === 'slider') {
                            initCarousel($itemsWrap, settings);
                        }
                        
                        chside($this);
                    },
                    error: function() {
                        $itemsWrap.html('<div class="error">Error loading posts</div>');
                    }
                });
            }
            
            function generatePostHTML(entry, settings, index) {
                var title = entry.title.$t;
                var url = getPostUrl(entry);
                var date = new Date(entry.published.$t);
                var formattedDate = formatDate(date, config.dateFormat);
                var author = entry.author[0].name.$t;
                var summary = getSummary(entry, settings.summary);
                var thumb = getThumbUrl(entry, settings.thumb);
                var isVideo = isVideoPost(entry);
                var postClass = '';
                
                if (settings.fbig && index === 0) postClass = 'first-item';
                if (settings.animated) postClass += ' animated-item';
                
                var html = '<div class="items' + (postClass ? ' ' + postClass : '') + '">';
                html += '<div class="inner' + (settings.ShowIframe && isVideo ? ' hiframe' : '') + '">';
                
                // Thumbnail
                if (settings.ShowImage && thumb) {
                    html += '<div class="thumb-area' + (isVideo ? ' video' : '') + '">';
                    html += '<div class="post-format"><i class="fa ' + (isVideo ? 'fa-play' : 'fa-image') + '"></i></div>';
                    html += '<a class="thumb-img" href="' + url + '" style="background: url(' + thumb + ') no-repeat center center;background-size: cover"></a>';
                    html += '</div>';
                }
                
                // Conteúdo
                html += '<div class="content-area">';
                html += '<h3><a href="' + url + '">' + title + '</a></h3>';
                html += '<div class="post-meta">';
                if (settings.ShowAuthor) {
                    html += '<span class="author"><i class="fa fa-user"></i> ' + author + '</span>';
                }
                html += '<span class="date"><i class="fa fa-calendar"></i> ' + formattedDate + '</span>';
                if (settings.ShowComment) {
                    html += '<span class="comments"><i class="fa fa-comments"></i> <a href="' + url + '#comment-form">0</a></span>';
                }
                html += '</div>';
                
                if (settings.ShowDesc && summary) {
                    html += '<div class="summary">' + summary + '</div>';
                    html += '<a class="readmore btn" href="' + url + '">' + config.readMoreText + '</a>';
                }
                
                html += '</div></div></div>';
                
                return html;
            }
            
            function getPostUrl(entry) {
                for (var i = 0; i < entry.link.length; i++) {
                    if (entry.link[i].rel === 'alternate') {
                        return entry.link[i].href;
                    }
                }
                return '#';
            }
            
            function getSummary(entry, maxLength) {
                var content = '';
                if (entry.content) {
                    content = entry.content.$t;
                } else if (entry.summary) {
                    content = entry.summary.$t;
                }
                content = content.replace(/<[^>]*>/g, '').replace(/\[\S[^\]]*\]/g, '');
                if (content.length > maxLength) {
                    content = content.substring(0, maxLength);
                    var lastSpace = content.lastIndexOf(' ');
                    if (lastSpace > 0) {
                        content = content.substring(0, lastSpace);
                    }
                    content += '...';
                }
                return content;
            }
            
            function getThumbUrl(entry, thumbSize) {
                var thumb = '';
                if (entry.media$thumbnail) {
                    thumb = entry.media$thumbnail.url;
                    thumb = thumb.replace(/\/s\d+(\-c)?\//, thumbSize);
                } else {
                    var content = entry.content ? entry.content.$t : '';
                    var imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
                    if (imgMatch) {
                        thumb = imgMatch[1];
                    }
                }
                return thumb;
            }
            
            function isVideoPost(entry) {
                var content = entry.content ? entry.content.$t : '';
                return content.indexOf('youtube') !== -1 || 
                       content.indexOf('vimeo') !== -1 || 
                       content.indexOf('dailymotion') !== -1;
            }
            
            function formatDate(date, format) {
                var year = date.getFullYear();
                var month = String(date.getMonth() + 1).padStart(2, '0');
                var day = String(date.getDate()).padStart(2, '0');
                
                return format.replace('YYYY', year)
                            .replace('MM', month)
                            .replace('DD', day);
            }
            
            function generatePaginationLinks(current) {
                var totalPages = Math.ceil(totalItems / settings.maxPostsPerTag);
                var html = '<div class="pagination">';
                
                if (current > 1) {
                    html += '<a href="#" class="prev-page btn">' + config.prevText + '</a>';
                }
                
                for (var i = 1; i <= Math.min(totalPages, 5); i++) {
                    if (i === current) {
                        html += '<span class="current-page btn">' + i + '</span>';
                    } else {
                        html += '<a href="#" class="page-link btn" data-page="' + i + '">' + i + '</a>';
                    }
                }
                
                if (current < totalPages) {
                    html += '<a href="#" class="next-page btn">' + config.nextText + '</a>';
                }
                
                html += '</div>';
                $pagination.html(html);
                
                $pagination.find('.page-link, .prev-page, .next-page').click(function(e) {
                    e.preventDefault();
                    var newPage = $(this).data('page');
                    if ($(this).hasClass('prev-page')) newPage = current - 1;
                    if ($(this).hasClass('next-page')) newPage = current + 1;
                    if (newPage && newPage !== current) {
                        currentPage = newPage;
                        loadPosts(currentPage);
                    }
                });
            }
            
            function initCarousel($container, settings) {
                if (typeof $.fn.owlCarousel === 'undefined') return;
                
                $container.owlCarousel({
                    items: settings.postType === 'slider' ? 1 : 3,
                    loop: true,
                    margin: 20,
                    nav: true,
                    dots: false,
                    autoplay: settings.auto,
                    autoplayTimeout: settings.slideSpeed,
                    autoplayHoverPause: true,
                    rtl: ts_isRTL(),
                    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                    responsive: {
                        0: { items: 1 },
                        600: { items: settings.postType === 'slider' ? 1 : 2 },
                        1000: { items: settings.postType === 'slider' ? 1 : 3 }
                    }
                });
            }
            
            function shuffleArray(arr) {
                for (var i = arr.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                return arr;
            }
            
            // Iniciar carregamento
            loadPosts(1);
        });
    };

    // ============================================
    // PARTE 10: PLUGIN RCOM (COMENTÁRIOS RECENTES)
    // ============================================
    
    $.fn.RCom = function(options) {
        var defaults = {
            blogURL: '',
            numComments: config.mx.recentComment,
            characters: 100,
            avatarSize: 40,
            Showimage: true,
            slideSpeed: config.sliderSpeed,
            slideEffect: false,
            defaultAvatar: 'http://4.bp.blogspot.com/-AEWksK942OE/UFiyLzXJhiI/AAAAAAAAFKE/jBegaGPClxI/s70/user-anonymous-icon.png',
            maxfeeds: 40
        };
        
        var settings = $.extend({}, defaults, options);
        var blogUrl = settings.blogURL === '' ? (window.location.protocol + '//' + window.location.host) : settings.blogURL;
        
        return this.each(function() {
            var $this = $(this);
            var feedUrl = blogUrl + '/feeds/comments/default?alt=json-in-script&orderby=published&max-results=' + settings.numComments;
            
            $.ajax({
                url: feedUrl,
                dataType: 'jsonp',
                success: function(data) {
                    var entries = data.feed.entry;
                    if (!entries) {
                        $this.html('<div class="no-comments">No comments found</div>');
                        return;
                    }
                    
                    var html = '<div class="rcomment-area">';
                    for (var i = 0; i < Math.min(entries.length, settings.numComments); i++) {
                        var entry = entries[i];
                        var author = entry.author[0].name.$t;
                        var avatar = getAvatar(entry, settings);
                        var content = getCommentContent(entry, settings.characters);
                        var date = new Date(entry.published.$t);
                        var postUrl = getPostUrlFromComment(entry);
                        var postTitle = getPostTitle(entry);
                        
                        html += '<div class="rcomment-item">';
                        if (settings.Showimage) {
                            html += '<a class="rcomment-image" href="' + postUrl + '"><img src="' + avatar + '" title="' + author + '" /></a>';
                        }
                        html += '<div class="rcomment-summary">';
                        html += '<div class="rcomment-info">';
                        html += '<a target="_blank" rel="nofollow" href="' + postUrl + '"><strong>' + author + '</strong></a>';
                        html += ' commented on <h4>' + postTitle + '</h4>';
                        html += '<div class="date"><i class="fa fa-calendar"></i> ' + formatCommentDate(date) + '</div>';
                        html += '</div>';
                        html += '<p>' + content + '</p>';
                        html += '</div></div>';
                    }
                    html += '</div>';
                    
                    $this.html(html);
                    
                    if (settings.slideEffect && typeof $.fn.owlCarousel !== 'undefined') {
                        $this.find('.rcomment-area').owlCarousel({
                            items: 1,
                            loop: true,
                            nav: true,
                            dots: false,
                            autoplay: true,
                            autoplayTimeout: settings.slideSpeed,
                            rtl: ts_isRTL(),
                            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
                        });
                    }
                    
                    chside($this);
                },
                error: function() {
                    $this.html('<div class="error">Error loading comments</div>');
                }
            });
        });
        
        function getAvatar(entry, settings) {
            if (entry.author[0].gd$image) {
                return entry.author[0].gd$image.src.replace(/\/s\d+(-\w+)?/, '/s' + settings.avatarSize);
            }
            return settings.defaultAvatar;
        }
        
        function getCommentContent(entry, maxLength) {
            var content = '';
            if (entry.content) {
                content = entry.content.$t;
            }
            content = content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
            if (content.length > maxLength) {
                content = content.substring(0, maxLength) + '...';
            }
            return content;
        }
        
        function getPostUrlFromComment(entry) {
            for (var i = 0; i < entry.link.length; i++) {
                if (entry.link[i].rel === 'alternate') {
                    return entry.link[i].href;
                }
            }
            return '#';
        }
        
        function getPostTitle(entry) {
            if (entry.thr$inReplyTo) {
                return entry.thr$inReplyTo.title || 'Post';
            }
            return 'Post';
        }
        
        function formatCommentDate(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return date.toLocaleDateString() + ' ' + hours + ':' + minutes + ' ' + ampm;
        }
    };

    // ============================================
    // PARTE 11: PLUGIN STICKY SIDE
    // ============================================
    
    $.fn.stickySide = function(options) {
        var defaults = {
            inner: '',
            topPos: '0'
        };
        
        var settings = $.extend({}, defaults, options);
        
        return this.each(function() {
            var $this = $(this);
            var $inner = $this.children(settings.inner);
            var initialTop = $this.offset().top;
            var parentHeight = $this.height();
            var innerHeight = $inner.height();
            
            $(window).on('scroll.sticky resize.sticky', function() {
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();
                var newTop = scrollTop - initialTop + settings.topPos;
                
                if (scrollTop < initialTop) {
                    $inner.css({
                        position: 'static',
                        top: 'auto'
                    }).removeClass('side-fixed');
                } else if (scrollTop + innerHeight + settings.topPos > initialTop + parentHeight) {
                    $inner.css({
                        position: 'absolute',
                        top: parentHeight - innerHeight + 'px'
                    }).addClass('side-fixed');
                } else {
                    $inner.css({
                        position: 'fixed',
                        top: settings.topPos
                    }).addClass('side-fixed');
                }
            });
        });
    };

    // ============================================
    // PARTE 12: PLUGIN SIMPLE TAB
    // ============================================
    
    $.fn.simpleTab = function(options) {
        var defaults = {
            active: 1,
            fx: 'fade',
            showSpeed: 400,
            hideSpeed: 400
        };
        
        var settings = $.extend({}, defaults, options);
        
        return this.each(function() {
            var $tabs = $(this);
            var $headers = $tabs.find('.tab-wrapper li, .tab-headers li');
            var $contents = $tabs.find('.tab-content');
            
            if ($headers.length === 0) {
                $headers = $tabs.children('ul').find('li');
                $contents = $tabs.children('.tab-contents').children('.tab-content');
            }
            
            if ($headers.length === 0) return;
            
            $contents.hide();
            $contents.eq(settings.active - 1).show();
            $headers.eq(settings.active - 1).addClass('active');
            
            $headers.on('click', function() {
                var index = $(this).index();
                
                $headers.removeClass('active');
                $(this).addClass('active');
                
                if (settings.fx === 'fade') {
                    $contents.fadeOut(settings.hideSpeed);
                    $contents.eq(index).fadeIn(settings.showSpeed);
                } else {
                    $contents.hide();
                    $contents.eq(index).show();
                }
                
                return false;
            });
        });
    };

    // ============================================
    // PARTE 13: PLUGIN SIMPLE SPY (ANIMAÇÃO SCROLL)
    // ============================================
    
    $.fn.simpleSpy = function(options) {
        var defaults = {
            limit: 5,
            speed: 500
        };
        
        var settings = $.extend({}, defaults, options);
        
        return this.each(function() {
            var $this = $(this);
            var $items = $this.children();
            var totalItems = $items.length;
            var currentIndex = 0;
            var interval = null;
            
            function startSpy() {
                if (interval) clearInterval(interval);
                interval = setInterval(function() {
                    $items.eq(currentIndex).fadeOut(settings.speed, function() {
                        currentIndex = (currentIndex + 1) % totalItems;
                        $items.eq(currentIndex).fadeIn(settings.speed);
                    });
                }, settings.speed * 2);
            }
            
            function stopSpy() {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
            }
            
            $this.on('mouseenter', stopSpy);
            $this.on('mouseleave', startSpy);
            
            startSpy();
        });
    };

    // ============================================
    // PARTE 14: PLUGIN HOVER TIMEOUT
    // ============================================
    
    $.fn.hoverTimeout = function(delay, enterFn, timeout, leaveFn) {
        var timeoutId = null;
        
        return this.each(function() {
            var $this = $(this);
            
            $this.on('mouseenter', function() {
                if (timeoutId) clearTimeout(timeoutId);
                if (enterFn) enterFn.call(this);
                timeoutId = setTimeout(function() {
                    if (leaveFn) leaveFn.call(this);
                }.bind(this), timeout);
            });
            
            $this.on('mouseleave', function() {
                if (timeoutId) clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    if (leaveFn) leaveFn.call(this);
                }.bind(this), delay);
            });
        });
    };

    // ============================================
    // PARTE 15: FUNÇÕES DE FACEBOOK
    // ============================================
    
    function initFacebookSDK() {
        if (document.getElementById('facebook-jssdk')) return;
        
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/' + config.fblang + '/sdk.js#xfbml=1&version=v2.4&appId=' + config.fbappid;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            FB.init({
                appId: config.fbappid,
                status: true,
                xfbml: true,
                version: 'v2.4'
            });
            
            FB.Event.subscribe('edge.create', function(url) {
                $.event.trigger({ type: 'share', url: url });
            });
            
            FB.Event.subscribe('message.send', function(url) {
                $.event.trigger({ type: 'share', url: url });
            });
            
            FB.Event.subscribe('xfbml.render', function() {
                chside($('.snewsfbox'));
                $('.snewsfbox').addClass('fbbox-loaded');
            });
        };
    }
    
    function initTwitterSDK() {
        if (document.getElementById('twitter-wjs')) return;
        
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'twitter-wjs'));
        
        window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'twitter-wjs'));
        
        if (window.twttr) {
            window.twttr.ready(function(twttr) {
                twttr.events.bind('tweet', function(event) {
                    $.event.trigger({ type: 'share', url: event.target.baseURI });
                });
            });
        }
    }

    // ============================================
    // PARTE 16: INICIALIZAÇÃO DO TEMPLATE
    // ============================================
    
    $(document).ready(function() {
        
        // Configurar AJAX
        $.ajaxSetup({ cache: true });
        
        // ========== MENU FIXO ==========
        if (config.fixMenu) {
            var lastScrollTop = 0;
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                if (st >= $('.header-wrap').height() + 60) {
                    $('.scroll-up').addClass('scrolled');
                    if (st > lastScrollTop) {
                        if ($('.header-wrap').hasClass('container')) {
                            $('.header-wrap').removeClass('container');
                        }
                    } else {
                        $('.header-wrap').addClass('container');
                    }
                    lastScrollTop = st;
                } else {
                    $('.scroll-up').removeClass('scrolled');
                }
            });
        }
        
        // ========== STICKY SIDEBAR ==========
        if (config.stickyMenu) {
            $('.sidebar-right').stickySide({ inner: '.innerwrap', topPos: '15px' });
            $('.sidebar-left').stickySide({ inner: '.innerwrap', topPos: '15px' });
            $('.sidebar-bottom').stickySide({ inner: '.innerwrap', topPos: '0' });
        }
        
        // ========== BUSCA GOOGLE CSE ==========
        if (config.cseid) {
            (function() {
                var cx = config.cseid;
                var gcse = document.createElement('script');
                gcse.type = 'text/javascript';
                gcse.async = true;
                gcse.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(gcse, s);
            })();
            $('#body-area').append('<div class="gcse-resultplace"><gcse:searchresults-only></gcse:searchresults-only></div>');
            
            var $form = $('.search-form');
            var $input = $form.find(':text');
            $form.addClass('custom-cse-snews');
            $form.on('submit', function() {
                var query = $input.val();
                var element = google.search.cse.element.getElement('searchresults-only0');
                if (query === '') {
                    element.clearAllResults();
                } else {
                    element.execute(query);
                }
                return false;
            });
        }
        
        // ========== POSTS PRINCIPAIS ==========
        if (config.hmainpost) {
            $('.home-area #Blog1, .home-area .posts-title').hide();
        }
        
        // ========== TABS DE COMENTÁRIOS ==========
        if ($('.comments-tabs').hasClass('just-2column')) {
            var canUrl = $('.canUrl').text();
            var bposId = $('.bposId').attr('title');
            var pstUrl = $('.pstUrl').attr('title');
            
            var bloggerHtml = '<div data-tab="Blogger"><div class="tab-blogger"></div></div>';
            var disqusHtml = '<div data-tab="Disqus"><div class="tab-disqus"><div id="disqus_thread"></div></div></div>';
            var facebookHtml = '<div data-tab="Facebook"><div class="tab-facebook"><div class="fb-comments" data-colorscheme="light" data-numposts="5" data-width="100%" data-href="' + canUrl + '"></div></div></div>';
            var spotimHtml = '<div data-tab="Spot.IM"><div class="tab-spotim"><div id="spot-im-frame-inpage" data-post-id="' + pstUrl + '"></div></div></div>';
            
            $('.canUrl').html(bloggerHtml.replace(/\[blogger\]/g, bloggerHtml)
                .replace(/\[disqus\]/g, disqusHtml)
                .replace(/\[facebook\]/g, facebookHtml)
                .replace(/\[spotim\]/g, spotimHtml));
        }
        
        // ========== PLACEHOLDER BUSCA ==========
        $('.errorsrc input, .search-form input').attr({
            onblur: "if (this.value == \"\") {this.value = \"" + config.searchText + "\";}",
            onfocus: "if (this.value == \"" + config.searchText + "\") {this.value = \"\";}",
            value: config.searchText
        });
        
        // ========== AJUSTES MOBILE ==========
        if ($('.sidebar-left').width() < 10 && $(window).width() > 1000) {
            $('.sidebar-right .innerwrap').addClass('just-2column');
        }
        
        if (navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) {
            config.elmt.className += ' wasupport';
        }
        
        // ========== ZOOM DO TEXTO ==========
        $('.zoom-text').click(function() {
            var fontSize = $('.post-body').css('font-size');
            fontSize = fontSize.replace('px', '');
            var type = $(this).attr('class');
            fontSize = Number(fontSize);
            if (type.indexOf('zoom-in-text') !== -1) {
                fontSize++;
            } else {
                fontSize--;
            }
            createCookie('font_size', fontSize);
            $('.post-body').css('font-size', fontSize + 'px');
            return false;
        });
        
        var savedFontSize = readCookie('font_size');
        if (savedFontSize) {
            $('.post-body').css('font-size', savedFontSize + 'px');
        }
        
        // ========== MENU RESPONSIVO ==========
        $('.widget > h2').wrapInner('<span class="title-wrap"></span>');
        
        // Sub-menus
        $('.menu li').each(function() {
            cmenu('sub-menu', this);
            $(this).addClass('have-sub');
        });
        
        $('.sub-menu li').each(function() {
            cmenu('sub-sub-menu', this);
        });
        
        $('.menu li').parent('.sub-menu').addClass('submenu').append('<div class="sub-icon"><span class="sub-button btn"><i class="fa fa-chevron-down"></i></span></div>');
        $('.sub-menu li').parent('.sub-sub-menu').addClass('subsubmenu').append('<div class="sub-icon"><span class="sub-button btn"><i class="fa fa-chevron-right"></i></span></div>');
        
        $('.menu li a').each(function() {
            var desc = $(this).attr('title');
            if (desc && desc !== '') {
                $(this).append('<span class="menu-desc">' + desc + '</span>');
            }
        });
        
        // Menu deslizante
        if ($('.main-menu li').length > 0) {
            var slide_nav = $('.sc-move');
            var current_pos = 0;
            var current_menu_width = 0;
            
            $('.main-menu > li').each(function() {
                var e = parseInt($(this).css('padding-left'));
                current_pos = $(this).position().left + e;
                current_menu_width = $(this).width();
                slide_nav.css({ width: current_menu_width, left: current_pos });
            });
            
            if (current_pos === 0) {
                current_pos = $('.main-menu > li:first-child').position().left;
                slide_nav.css('left', current_pos);
            }
            
            $('.main-menu a[href*="#"]').click(function() {
                var e = parseInt($(this).parent().css('padding-left'));
                current_pos = $(this).parent().position().left + e;
                current_menu_width = $(this).parent().width();
            });
            
            $(window).resize(function() {
                $('.main-menu > li').each(function() {
                    var e = parseInt($(this).css('padding-left'));
                    current_pos = $(this).position().left + e;
                    current_menu_width = $(this).width();
                    slide_nav.css({ width: current_menu_width, left: current_pos });
                });
                if (current_pos === 0) {
                    current_pos = $('.main-menu > li:first-child').position().left;
                    slide_nav.css('left', current_pos);
                }
            });
            
            $('.main-menu > li').hover(function() {
                var e = parseInt($(this).css('padding-left'));
                slide_nav.animate({
                    width: $(this).width(),
                    left: $(this).position().left + e
                }, { queue: false, easing: 'easeOutQuad', duration: 250 }).addClass('moving');
            }, function() {
                slide_nav.animate({
                    width: current_menu_width,
                    left: current_pos
                }, { queue: false, easing: 'easeOutQuad', duration: 250 }).removeClass('moving');
            });
        }
        
        // ========== BOTÃO DE BUSCA ==========
        $('.srcnavbutton').on('click', function() {
            var $menuSearch = $('.menu-search');
            if ($menuSearch.hasClass('src-show')) {
                $(this).removeClass('toggle-on');
                $menuSearch.fadeOut().removeClass('src-show');
            } else {
                $(this).addClass('toggle-on');
                $menuSearch.fadeIn().addClass('src-show');
            }
        });
        
        // ========== PROCESSAR SHORTCODES NOS POSTS ==========
        $('.post-body, .widget-content').each(function() {
            var $this = $(this);
            var html = $this.html();
            var processed = tagregex(html);
            if (processed !== '') {
                $this.html(processed);
            }
        });
        
        // ========== PROCESSAR TABS ==========
        $('.posts-tabs').each(function() {
            var $this = $(this);
            $this.find('.tab-header').each(function() {
                var tabId = $(this).attr('id');
                var tabTitle = $(this).attr('data-tab');
                var tabHtml = '<div data-tab="' + tabTitle + '"><div class="tab-' + tabTitle + '"></div></div>';
                var tabContent = $(this).html();
                $(this).html(tabHtml + tabContent);
            });
            $this.simpleTab({ active: 1, fx: 'fade', showSpeed: 400, hideSpeed: 400 });
        });
        
        // ========== CONTADORES DE LABEL ==========
        $('span.label-count, .Label li span').each(function() {
            var count = $(this).text();
            $(this).html('(' + count + ')');
        });
        
        // ========== REMOVER CONTADORES VAZIOS ==========
        $('.social-wrap .delhref').each(function() {
            var $count = $(this).find('.item-count');
            if ($count.length && $count.text() === '0') {
                $(this).remove();
            }
        });
        
        // ========== SOCIAL COUNTERS ==========
        $('.social-wrap .twitter a').html('<i class="fa fa-twitter"></i><span><b>' + config.tweetText + '</b></span>');
        $('.social-wrap .facebook a').html('<i class="fa fa-facebook"></i><span><b>' + config.likeText + '</b></span>');
        $('.social-wrap .googlePlus a').html('<i class="fa fa-google-plus"></i><span><b>' + config.shareText + '</b></span>');
        
        // ========== PAGINAÇÃO ==========
        if ($('#blog-pagerindex').hasClass('showpage')) {
            pNav();
        }
        
        // ========== LINKS DE POST ANTERIOR/PRÓXIMO ==========
        var timestamp = $('.published').attr('title');
        if (timestamp && timestamp !== '' && config.featPost && !$('.blog-pager').hasClass('static_page')) {
            $('.blog-pager').addClass('static_page');
            $.getJSON('/feeds/posts/default?alt=json-in-script&published-min=' + encodeURIComponent(timestamp) + '&max-results=0&callback=?', function(data) {
                var total = parseInt(data.feed.openSearch$totalResults.$t, 10);
                if (total > 1) {
                    $.getJSON('/feeds/posts/default?alt=json-in-script&start-index=' + (total - 1) + '&max-results=3&callback=?', function(data) {
                        setNewerLink(data.feed.entry[0]);
                        var total2 = parseInt(data.feed.openSearch$totalResults.$t, 10);
                        var start = parseInt(data.feed.openSearch$startIndex.$t, 10);
                        if (total2 - start > 1) {
                            setOlderLink(data.feed.entry[2]);
                        }
                    });
                } else {
                    $.getJSON('/feeds/posts/default?alt=json-in-script&start-index=2&max-results=1&callback=?', function(data) {
                        setOlderLink(data.feed.entry[0]);
                    });
                }
            });
        }
        
        // ========== PROCESSAR WIDGETS COM SCROLL ==========
        var windowHeight = $(window).height();
        
        function checkWidgetsOnScroll() {
            $('.widget-area').each(function() {
                if (!$(this).hasClass('json-process')) {
                    var $this = $(this);
                    var $content = $this.children('.widget-content');
                    var contentHtml = $content.html();
                    var triggerPoint = 0.1 * $this.height() - windowHeight + $this.offset().top;
                    var scrollTop = $(document).scrollTop();
                    
                    if (contentHtml !== undefined) {
                        contentHtml = contentHtml.replace(rgx[8], '');
                        if ($content.find('.noimage').length) {
                            contentHtml = '';
                        }
                    }
                    
                    if (scrollTop > triggerPoint) {
                        processWidgetContent(contentHtml, $content, $this);
                    }
                }
            });
        }
        
        $(window).on('scroll resize', function() {
            windowHeight = $(window).height();
            checkWidgetsOnScroll();
        });
        
        checkWidgetsOnScroll();
        
        // ========== HOVER TIMEOUT PARA MENUS ==========
        $('.menu li').hoverTimeout(100, function() {
            $(this).children('.sub-menu, .sub-sub-menu').slideDown();
        }, 300, function() {
            $(this).children('.sub-menu, .sub-sub-menu').slideUp(500, function() {
                $(this).removeAttr('style');
            });
        });
        
        // ========== ANIMAÇÃO DE SCROLL SUAVE ==========
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            var hash = this.hash;
            var target = $(hash);
            if (target.length) {
                e.preventDefault();
                var targetTop = target.offset().top;
                var windowTop = $(window).scrollTop();
                var scrollHeight = $(document).height() - $(window).height();
                
                if (targetTop > scrollHeight) {
                    targetTop = scrollHeight;
                }
                
                $('html, body').animate({
                    scrollTop: targetTop
                }, 1000, function() {
                    window.location.hash = hash;
                });
            }
        });
        
        // ========== NUMERAÇÃO DE POSTS ==========
        $('.post.hentry').each(function(index) {
            $(this).addClass('postnum postnum-' + (index + 1));
        });
        
        // ========== MENU RESPONSIVO MOBILE ==========
        var $menuWrap = $('.responsive-menu');
        var $menuArea = $('.res-menu-area');
        
        $('.resbutton').click(function() {
            if (!$menuWrap.hasClass('show-popup-res')) {
                $menuWrap.addClass('show-popup-res');
                $('.container').addClass('show-res');
                $('.responsive-menu').addClass('show-res-menu');
            }
            return false;
        });
        
        $(document).on('click', function(e) {
            if ($(e.target).parents('.responsive-menu').length === 0) {
                $menuWrap.removeClass('show-popup-res');
                $('.container').removeClass('show-res');
                $('.responsive-menu').removeClass('show-res-menu');
            }
        });
        
        $('.res-close').click(function() {
            $menuWrap.removeClass('show-popup-res');
            $('.container').removeClass('show-res');
            $('.responsive-menu').removeClass('show-res-menu');
            return false;
        });
        
        $('.container').append('<div class="res-menu-area"></div>');
        
        $(window).on('load resize', function() {
            var height = $(window).height();
            $('.res-menu-area').css('min-height', height);
        });
        
        var $resMenuArea = $('.res-menu-area');
        $('.responsive-menu .res-menu-inner').remove();
        
        $('.navi .menu').each(function() {
            var menuHtml = $(this).html();
            $resMenuArea.append('<ul class="res-menu">' + menuHtml + '</ul>');
        });
        
        $('.res-menu .sub-icon').remove();
        
        // ========== MEGA MENU ==========
        $('.menu li').one('mouseenter', function() {
            var $this = $(this);
            var $submenu = $this.children('.sub-menu, .sub-sub-menu');
            var text = $submenu.text();
            
            if (/grip/g.test(text)) {
                text = text.replace(/grip\//g, '');
                $this.addClass('mega-menu');
                $submenu.SWidget({
                    maxPosts: 4,
                    random: text === 'random',
                    ShowTags: text === 'recent' || text === 'random',
                    review: !config.hreview,
                    tags: (text === 'recent' || text === 'random') ? null : text.split(',')
                });
                $submenu.addClass('gridpost');
            } else if (/menutab/g.test(text)) {
                text = text.replace(/menutab\//g, '').split(',');
                var html = '<div class="normal-tab"><ul class="tab-headers">';
                for (var i = 0; i < text.length; i++) {
                    html += '<li><a href="#tab-' + i + '">' + text[i] + '</a></li>';
                }
                html += '</ul><div class="tab-contents">';
                for (var j = 0; j < text.length; j++) {
                    html += '<div id="tab-' + j + '" class="tab-content"><div class="tab-recent" data-tag="' + text[j] + '"></div></div>';
                }
                html += '</div></div>';
                $submenu.html(html);
                $submenu.find('.tab-content .tab-recent').each(function() {
                    var tag = $(this).data('tag');
                    $(this).SWidget({
                        maxPosts: 4,
                        review: !config.hreview,
                        tags: [tag]
                    });
                });
                $this.addClass('menutab');
                $submenu.addClass('menutab');
            } else if (/menubig/g.test(text)) {
                text = text.replace(/menubig\//g, '');
                $this.addClass('menubig');
                $submenu.SWidget({
                    maxPosts: 7,
                    random: text === 'random',
                    maxPostsPerTag: (text === 'recent' || text === 'random' || text.split(',').length === 1) ? 7 : 4,
                    tags: (text === 'recent' || text === 'random') ? null : text.split(','),
                    fbig: true,
                    review: !config.hreview,
                    summary: 100
                });
                $submenu.addClass('menubig');
            } else if (/links/g.test(text)) {
                $this.addClass('menulinks');
                $submenu.html('');
                $submenu.addClass('links-submenu');
                var $linksWidgets = $('.links-submenu .widget');
                $linksWidgets.hide();
                $linksWidgets.each(function() {
                    var widgetClass = $(this).attr('class').replace(/ +/g, '').replace(/widget/, '');
                    var widgetTitle = $(this).children('h2').html();
                    var widgetContent = $(this).children('.widget-content').html();
                    $submenu.append('<div class="links-content mn-' + widgetClass + '"><h2>' + widgetTitle + '</h2><div class="widget-content">' + widgetContent + '</div></div>');
                });
                $submenu.find('.widget-content').each(function() {
                    var content = $(this).text();
                    if (/gridpost/g.test(content)) {
                        var tag = content.replace(/gridpost\//g, '').replace(/(\r\n|\n|\r)/gm, '');
                        $(this).SWidget({
                            maxPosts: 4,
                            random: tag === 'random',
                            ShowTags: tag === 'recent' || tag === 'random',
                            review: !config.hreview,
                            tags: (tag === 'recent' || tag === 'random') ? null : tag.split(',')
                        });
                        var $parent = $(this).parent();
                        $parent.addClass('gridpost');
                        if (tag !== 'random') {
                            $parent.find('.widget-content').wrapInner('<a class="grid-h2" href="/search/label/' + tag + '?max-results=' + config.postsPerPage + '"><i class="fa fa-rss-square"></i></a>');
                            $parent.find('h2').append('<a class="grid-h2" href="/search/label/' + tag + '?max-results=' + config.postsPerPage + '"><i class="fa fa-rss-square"></i></a>');
                        }
                    }
                });
            }
        });
        
        // ========== BOTÃO DE VOLTAR AO TOPO ==========
        var $scrollUp = $('.scroll-up');
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $scrollUp.fadeIn();
            } else {
                $scrollUp.fadeOut();
            }
        });
        
        $scrollUp.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        });
        
        // ========== ADSENSE ==========
        if ($('.adsbygoogle').length) {
            (function() {
                var ads = window.adsbygoogle || [];
                $('.adsbygoogle').each(function() {
                    ads.push({});
                });
            })();
        }
        
        // ========== FACEBOOK SDK ==========
        if ($('.FBbox').length || $('.fb-comments, .fb-page, .fb-like').length) {
            initFacebookSDK();
        }
        
        // ========== TWITTER SDK ==========
        if ($('.twitter-share-button, .twitter-tweet').length) {
            initTwitterSDK();
        }
        
        // ========== DISQUS ==========
        if ($('.tab-disqus, #disqus_thread').length && config.disqusShortname) {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = '//' + config.disqusShortname + '.disqus.com/embed.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'disqus-sdk'));
        }
        
        // ========== SPOT.IM ==========
        if ($('.tab-spotim').length) {
            var spotId = $('.varspotimid').attr('title');
            if (spotId) {
                window.SPOTIM = { spotId: spotId };
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//www.spot.im/launcher/bundle.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'spotim-sdk'));
            }
        }
        
        // ========== SOCIAL COUNTERS ==========
        if ($('.sharesbut').length && !$('.socialct-loaded').length) {
            $('.social-wrap').addClass('socialct-loaded');
            
            // Twitter
            $('.sharesbut .twitter a').sharrre({
                share: { twitter: true },
                template: '<i class="fa fa-twitter"></i><span><b>{total}</b> ' + config.tweetText + '</span>',
                enableHover: false,
                enableTracking: true,
                buttons: { twitter: { via: config.twitterAuthor } },
                click: function(e) { e.simulateClick(); e.openPopup('twitter'); }
            });
            
            // Facebook
            $('.sharesbut .facebook a').sharrre({
                share: { facebook: true },
                template: '<i class="fa fa-facebook"></i><span><b>{total}</b> ' + config.likeText + '</span>',
                enableHover: false,
                enableTracking: true,
                click: function(e) { e.simulateClick(); e.openPopup('facebook'); }
            });
            
            // Google+
            $('.sharesbut .googlePlus a').sharrre({
                share: { googlePlus: true },
                template: '<i class="fa fa-google-plus"></i><span><b>{total}</b> ' + config.shareText + '</span>',
                enableHover: false,
                enableTracking: true,
                click: function(e) { e.simulateClick(); e.openPopup('googlePlus'); }
            });
        }
        
        // ========== POSTS RELACIONADOS ==========
        if (config.showRelated && !$('.related-posts').find('.items').length) {
            $('.related-posts').SWidget({
                maxPosts: config.mx.related,
                postType: config.relatedStyle === 'carousel' ? 'carousel' : '',
                ShowAuthor: config.hideAuthor,
                auto: config.autoplay,
                ShowDesc: config.relatedStyle === 'carousel',
                slideSpeed: config.sliderSpeed
            }).addClass('related-' + config.relatedStyle);
        }
        
        // ========== PROCESSAR WIDGETS ADICIONAIS ==========
        if ($('.widget-area').length && $('.body-area').hasClass('just-2column')) {
            // Processar galerias
            $('.gallery-area').each(function() {
                var html = $(this).html();
                var matches = html.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
                if (matches && matches.length) {
                    var galleryHtml = '<div class="gallery-grid">';
                    for (var i = 0; i < matches.length; i++) {
                        var src = matches[i].match(/src="([^"]+)"/)[1];
                        galleryHtml += '<div class="gallery-item"><img src="' + src + '" alt=""></div>';
                    }
                    galleryHtml += '</div>';
                    $(this).html(galleryHtml);
                }
            });
            
            // Processar imagens destacadas
            $('.featured-image').each(function() {
                var $this = $(this);
                var src = $this.attr('src');
                var title = $this.attr('title');
                var url = $this.parents('a').attr('href');
                if (src) {
                    $this.wrap('<div class="featured-img" style="background-image: url(' + src + ')"></div>');
                    $this.remove();
                }
            });
        }
        
        // ========== REMOVER CLASSE DE LOADING ==========
        document.getElementById('snewshtml').className = document.getElementById('snewshtml').className.replace(/(?:^|\s)loadinghtml(?!\S)/g, '');
        
        // ========== AJUSTAR ALTURA DA SIDEBAR ==========
        $('.widget').each(function() {
            chside($(this));
        });
        
    }); // fim do document.ready
    
})(jQuery);