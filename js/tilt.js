$(document).ready(function() {
            var $body = $('body'),
                $panel = $('.panel'),
                $pContent = $('.panel__content'),
                $img = $('.panel__img-col');

            function initTilt() {
                gsap.set([$pContent, $img], { transformStyle: "preserve-3d" });

                $body.mousemove(function(e) {
                    tilt(e.pageX, e.pageY);
                });
            }

            function tilt(cx, cy) {
                var sLeft = (cx / $body.width() * 100 - 50) * 2;
                var sRight = (cy / $body.height() * 100 - 50) * 2;
                gsap.to($pContent, 2, {
                    rotationY: -0.03 * sLeft,
                    rotationX: 0.03 * sRight,
                    transformPerspective: 500,
                    transformOrigin: "center center -400",
                    ease: "expo.out"
                });
                gsap.to($img, 2, {
                    rotationY: -0.03 * sLeft,
                    rotationX: 0.03 * sRight,
                    transformPerspective: 500,
                    transformOrigin: "center center -200",
                    ease: "expo.out"
                });
            }

            $body.mouseleave(function() {
                tilt($body.width() / 2, $body.height() / 2);
            });

            initTilt();

            console.clear();
        });

