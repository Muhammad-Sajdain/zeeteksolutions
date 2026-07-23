const sharedHeaderMarkup = `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-lg-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about-us.html">About Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="services.html" role="button">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="logo-and-branding.html">Logo and Brand Visibility</a></li>
                        <li><a class="dropdown-item" href="web-design.html">Web Design and Development</a></li>
                        <li><a class="dropdown-item" href="animation.html">Animation</a></li>
                        <li><a class="dropdown-item" href="mobile-application.html">Mobile Application Development</a></li>
                        <li><a class="dropdown-item" href="seo.html">Search Engine Optimization</a></li>
                        <li><a class="dropdown-item" href="illustration-and-art.html">Illustration and Art</a></li>
                        <li><a class="dropdown-item" href="content-marketing.html">Content Marketing</a></li>
                        <li><a class="dropdown-item" href="bpo-services.html">BPO Services</a></li>
                        <li><a class="dropdown-item" href="video-animation.html">Video Animation</a></li>
                        <li><a class="dropdown-item" href="digital-marketing.html">Digital Marketing</a></li>
                        <li><a class="dropdown-item" href="ml-services.html">Machine learning Services</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="packages.html">Packages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact-us.html">Contact Us</a>
                </li>
            </div>
            <div class="d-flex align-items-lg-center">
                <a href="javascript:;" class="btn btn-sm btn-primary w-full w-lg-auto w-btn various">Get a Quote</a>
            </div>
        </div>
    </div>
</nav>`;

const sharedScriptSources = [
    './cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    './cdn.jsdelivr.net/npm/bootstrap%405.0.1/dist/js/bootstrap.bundle.min.js',
    './cdn.jsdelivr.net/gh/michalsnik/aos%401.0.1/dist/aos.js',
    './unpkg.com/aos%402.3.0/dist/aos.js',
    './cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
    './cdn.jsdelivr.net/npm/swiper%409/swiper-bundle.min.js',
    './cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
    './cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/js/fontawesome.min.js',
    './static.zdassets.com/ekr/snippet82a7.js?key=cb0f074a-fed2-429d-953d-ab53aee123aa'
];

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        const existing = document.querySelector('script[src="' + src + '"]');

        if (existing) {
            if (existing.dataset.loaded === '1') {
                resolve();
                return;
            }

            existing.addEventListener('load', function() {
                resolve();
            }, { once: true });

            existing.addEventListener('error', function() {
                reject(new Error('Script failed to load: ' + src));
            }, { once: true });

            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.defer = false;
        script.onload = function() {
            script.dataset.loaded = '1';
            resolve();
        };
        script.onerror = function() {
            reject(new Error('Script failed to load: ' + src));
        };

        document.head.appendChild(script);
    });
}

async function loadSharedHeader() {
    const headerTarget = document.querySelector('#header-row');

    if (!headerTarget || !window.fetch) {
        return;
    }

    try {
        const response = await fetch('header.html');

        if (!response.ok) {
            throw new Error('Unable to load shared header');
        }

        headerTarget.innerHTML = await response.text();
    } catch (error) {
        console.warn('Shared header fetch failed, using local fallback markup.', error);
        headerTarget.innerHTML = sharedHeaderMarkup;
    }
}

async function loadSharedPageScripts() {
    for (const src of sharedScriptSources) {
        try {
            await loadScript(src);
        } catch (error) {
            console.warn(error.message);
        }
    }
}

function initSharedPageFeatures() {
    const $ = window.jQuery;

    if (!$) {
        return;
    }

    $.fn.jQuerySimpleCounter = function(options) {
        const settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options);

        const thisElement = $(this);

        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                const mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $('#number1').jQuerySimpleCounter({ end: 400, duration: 3000 });
    $('#number2').jQuerySimpleCounter({ end: 500, duration: 3000 });
    $('#number3').jQuerySimpleCounter({ end: 100, duration: 3000 });

    if (window.jQuery.fn.owlCarousel) {
        jQuery('#testi-carousel').owlCarousel({
            autoplay: true,
            rewind: false,
            margin: 20,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            dots: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1024: { items: 2 },
                1366: { items: 3 }
            }
        });

        jQuery('#port-carousel').owlCarousel({
            autoplay: true,
            rewind: false,
            margin: 20,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            dots: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1024: { items: 2 },
                1366: { items: 5 }
            }
        });
    }

    if (window.AOS) {
        AOS.init({ duration: 1200 });
    }

    if (window.zE) {
        zE(function() {
            if (window.$zopim) {
                $zopim(function() {
                    $zopim.livechat.setOnUnreadMsgs(function(number) {
                        if (number >= 1) {
                            $zopim.livechat.window.show();
                        }
                    });
                });
            }
        });
    }

    window.addEventListener('load', function() {
        setTimeout(function() {
            if (window.zE) {
                zE('webWidget', 'open');
            }
        }, 30000);
    });

    $(document).ready(function() {
        setTimeout(function() {
            if ($('#staticBackdrop').length) {
                $('#staticBackdrop').modal('show');
            }
        }, 10000);

        $('.various').on('click', function() {
            if ($('#staticBackdrop').length) {
                $('#staticBackdrop').modal('show');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadSharedHeader();
    await loadSharedPageScripts();
    initSharedPageFeatures();
});