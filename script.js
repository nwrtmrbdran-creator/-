 //mobile menu
 var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }

        // Dark Mode Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fa fa-toggle-on"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fa fa-toggle-off"></i>';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark-mode';
                themeToggle.innerHTML = '<i class="fa fa-toggle-on"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fa fa-toggle-off"></i>';
            }
            localStorage.setItem('theme', theme);
        });