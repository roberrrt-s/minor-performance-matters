(function () {
    "use strict";

    var global = (function() {
        var init = function() {
            navigation.init();
            observer.init()
        }
        return {
            init: init
        }
    }());

    var navigation = (function() {
        var init = function() {
            events();
        };
        var events = function() {
            window.addEventListener("hashchange", url, false);
            window.addEventListener("load", url, false);
        };
        var url = function() {
            var hash = window.location.hash;
            var href = window.location.href;
            var split = href.split('/');

            if(href.indexOf('/#') === -1) {
                console.log('invalid hash')
                if(split[3] === "") {
                    window.location.hash = '#home'
                }
                return false;
            }
            else if(split.length > 4) {
                if(split[3] === "#appearance") {
                    var uuid = hash.replace('#appearance/', '')
                    api.renderAppearance(uuid);
                }
                else {
                    console.log('invalid url');
                    return false;
                }
            }
            else {
                if (!hash) {
                    window.location.hash = '#home';
                } else {
                    if (hash == '#home') {
                        api.init();
                    }
                    else {
                        window.location.hash = '#home';
                    }
                }                
            }

        }
        return {
            init: init
        }
    }());

    var products = (function() {
        var init = function() {
            checkProduct();
        }
        var change = function(e) {
            var id = e.currentTarget.attributes[2].value;
            document.querySelector('.main__appearance__img__product-indicator-active').classList.remove('main__appearance__img__product-indicator-active');
            e.currentTarget.classList.add('main__appearance__img__product-indicator-active');
            document.querySelector('.main__appearance__info__products__inner__product-active').classList.remove('main__appearance__info__products__inner__product-active');
            document.querySelector('.main__appearance__info__products__inner__product[data-uuid="' + id + '"]').classList.add('main__appearance__info__products__inner__product-active');
        }
        var checkProduct = function() {
            if ('querySelector' in document  && 'addEventListener' in window) {
        
                if (document.querySelector('.main__appearance__info__products__inner__product')) {
             
                    var product = document.querySelector('.main__appearance__info__products__inner__product'),
                        indicator = document.querySelector('.main__appearance__img__product-indicator[data-uuid="' + product.attributes[1].value + '"]'),
                        indicators = document.getElementsByClassName('main__appearance__img__product-indicator'),
                        i = 0;

                    product.classList.add('main__appearance__info__products__inner__product-active');
                    indicator.classList.add('main__appearance__img__product-indicator-active');

                    for (i; i < indicators.length; i += 1) {
                        indicators[i].addEventListener('click', change, false);
                    }
                }
            }
        }
        return {
            init: init
        }
    }());
        
    var api = (function() {
        var init = function() {
            renderFeed()
        }
        var feed = function() {
            var promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', '/api/feed', true); 
                xhr.send(null);

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var status = xhr.status;
                        if( (status >= 200 && status < 300) || status === 304 ) {
                            var html = xhr.responseText;
                            resolve(html);
                        } else {
                            reject(html);
                        }
                    }
                }
            })
            return promise;
        };
        var appearance = function(uuid) {
            var promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', '/api/appearance/'+uuid, true);
                xhr.send(null);

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var status = xhr.status;
                        if( (status >= 200 && status < 300) || status === 304 ) {
                            var html = xhr.responseText;
                            resolve(html);
                        } else {
                            reject(html);
                        }
                    }
                }
            })
            return promise;
        };
        var renderFeed = function() {
            feed()
                .then(function (html) {
                    document.querySelector('main').innerHTML = html;
                })
                .catch(function() {
                    alert('Something went wrong')
                });
        };
        var renderAppearance = function(uuid) {
            appearance(uuid)
                .then(function (html) {
                    document.querySelector('main').innerHTML = html;
                    products.init()
                })
                .catch(function() {
                    alert('Something went wrong')
                });
        }
        return {
            init: init,
            renderAppearance: renderAppearance
        }
    }());

    var fontFaceObserver = (function() {
        var init = function() {
            observe();
        };
        var observe = function() {
            var observer = new FontFaceObserver('Raleway');

            observer.check().then(function () {
                document.documentElement.className += " fonts-loaded";
            });
        }
        return {
            init: init
        }
    }());

    var observer = (function() {
        var init = function() {
            observe();
        };
        var observe = function() {
            var observer = new FontFaceObserver('Raleway');

            observer.check().then(function () {
                document.documentElement.className += " fonts-loaded";
            });
        }
        return {
            init: init
        }
    }());

    global.init();
              
}());