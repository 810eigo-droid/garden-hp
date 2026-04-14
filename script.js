 <script>
        /* =========================================
           ここから下を script.js に貼り付けてください
           ========================================= */
        document.addEventListener('DOMContentLoaded', () => {
            const heroText = document.querySelector('.hero-text');
            const heroIllust = document.querySelector('.hero-illust');

            if(heroText && heroIllust) {
                heroText.style.opacity = '0';
                heroText.style.transform = 'translateY(20px)';
                heroText.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

                heroIllust.style.opacity = '0';
                heroIllust.style.transform = 'translateY(20px)';
                heroIllust.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';

                setTimeout(() => {
                    heroText.style.opacity = '1';
                    heroText.style.transform = 'translateY(0)';
                    heroIllust.style.opacity = '1';
                    heroIllust.style.transform = 'translateY(0)';
                }, 100);
            }
        });
        /* =========================================
           ここから上を script.js に貼り付けてください
           ========================================= */
    </script>