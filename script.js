var link_button_1=document.querySelector(".link-button-1");
            var e_table=document.querySelector(".hide-more-education");
            link_button_1.addEventListener('click',()=>{
                e_table.classList.toggle("display-more-education")
                if(link_button_1.innerHTML=="Show more...")
                {
                    link_button_1.innerHTML="Show less..."
                }
                else
                {
                    link_button_1.innerHTML="Show more..."
                }

            })
            var link_button_2=document.querySelector(".link-button-2");
            var p_table=document.querySelector(".hide-more-project");
            link_button_2.addEventListener('click',()=>{
                p_table.classList.toggle("display-more-project")
                if(link_button_2.innerHTML=="Show more...")
                {
                    link_button_2.innerHTML="Show less..."
                }
                else
                {
                    link_button_2.innerHTML="Show more..."
                }

            })
            window.addEventListener('scroll', reveal);
            var heading_line = document.querySelector(".heading-line");
            function reveal() {
                var reveals = document.querySelectorAll('.reveal-right');
                var reveals1 = document.querySelectorAll('.reveal-left');
                var reveals2 = document.querySelectorAll(".arrow-up-hide");
                var topdown = document.querySelectorAll('.top-down');
                var downtop = document.querySelectorAll('.down-top');
                for (i = 0; i < reveals.length; i++) {
                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 200;
                    if (revealtop < windowheight - revealpoint) {
                        reveals[i].classList.add('right-to-left');
                    }
                    else {
                        reveals[i].classList.remove('right-to-left');

                    }
                }
                for (i = 0; i < topdown.length; i++) {
                    var windowheight = window.innerHeight;
                    var revealtop = topdown[i].getBoundingClientRect().top;
                    var revealpoint = 300;
                    if (revealtop < windowheight - revealpoint) {
                        topdown[i].classList.add('color1');
                    }
                    else {
                        topdown[i].classList.remove('color1');

                    }
                }
                for (i = 0; i < downtop.length; i++) {
                    var windowheight = window.innerHeight;
                    var revealtop = downtop[i].getBoundingClientRect().top;
                    var revealpoint = 300;
                    if (revealtop < windowheight - revealpoint) {
                        downtop[i].classList.add('color2');
                    }
                    else {
                        downtop[i].classList.remove('color2');

                    }
                }
                for (i = 0; i < reveals1.length; i++) {
                    var windowheight = window.innerHeight;
                    var revealtop = reveals1[i].getBoundingClientRect().top;
                    var revealpoint = 200;
                    if (revealtop < windowheight - revealpoint) {
                        reveals1[i].classList.add('left-to-right');
                    }
                    else {
                        reveals1[i].classList.remove('left-to-right');
                    }
                }
                for (i = 0; i < reveals2.length; i++) {
                    var windowheight = window.innerHeight;
                    var revealtop = reveals1[i].getBoundingClientRect().top;
                    var revealpoint = 80;
                    if (revealtop < windowheight - revealpoint) {
                        reveals2[i].classList.add('arrow-up');

                    }
                    else {
                        reveals2[i].classList.remove('arrow-up');
                    }
                }
            }
            var typed = new Typed('#element', {
                strings: ['Shiva Aleti', 'a Web Developer', 'a Web Designer'],
                typeSpeed: 50,
                loop: true,
                backDelay: 900,
                backSpeed: 30,
            });