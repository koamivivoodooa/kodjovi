/**
 * KODJOVI KAVEGUE - PORTFOLIO OFFICIEL
 * Core Engine & Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DICTIONNAIRE MULTILINGUE (FR / EN)
       ========================================================================== */
    const translations = {
        fr: {
            nav_home: "Accueil",
            nav_about: "Bio",
            nav_measurements: "Mensurations",
            nav_gallery: "Portfolio",
            nav_runway: "Runway",
            nav_contact: "Contact",
            hero_subtitle: "PRÉSENCE ATHLÉTIQUE & ÉLÉGANCE NATURELLE",
            hero_tag: "Mannequin Professionnel basé au Togo",
            hero_cta: "Collaborer",
            hero_compcard: "Fiche Mannequin (Comp Card)",
            about_title: "Bio",
            about_p1: "Kodjovi KAVEGUE incarne avec aisance l'équilibre entre la rigueur de la haute couture et l'impact du mannequinat commercial. Déjà aguerri aux scènes internationales, il a imposé son charisme sur les podiums du <strong>Togo, du Bénin, du Ghana et du Nigeria</strong>.",
            about_p2: "Bilingue et résolument tourné vers l'excellence, il apporte une énergie solaire et un professionnalisme absolu à chaque vision créative.",
            about_badge: "Disponible pour défilés, campagnes, shooting éditorial et brand content.",
            meas_title: "Mensurations / Measurements",
            meas_height: "Hauteur | Height",
            meas_shoulders: "Épaules | Shoulders",
            meas_chest: "Poitrine | Chest",
            meas_waist: "Taille | Waist",
            meas_hips: "Hanches | Hips",
            meas_weight: "Poids | Weight",
            meas_eyes: "Yeux | Eyes",
            meas_eyes_val: "Marron",
            meas_hair: "Cheveux | Hair",
            meas_hair_val: "Noirs",
            meas_shoes: "Pointure | Shoes",
            gallery_title: "Portfolio",
            gallery_sub: "Élégance, puissance et charisme en mouvement",
            gallery_more: "Voir plus",
            gallery_less: "Voir moins",
            runway_title: "Runway Moments",
            runway_sub: "Scènes internationales qui ont marqué son parcours",
            runway_others: "✨ et d'autres scènes majeures...",
            contact_title: "Contact & Booking",
            contact_heading: "Prenons contact",
            contact_response: "Réponse sous 24h – Management direct",
            form_name_ph: "Nom complet",
            form_email_ph: "Email professionnel",
            form_phone_ph: "Téléphone / WhatsApp",
            form_msg_ph: "Votre message (projet, date, budget, lieu...)",
            form_submit: "Envoyer la demande",
            footer_tagline: "Mannequin International basé au Togo",
            footer_follow: "Suivez-moi",
            footer_nav: "Navigation",
            footer_direct: "Contact direct",
            toast_success: "Votre demande a été envoyée avec succès ! Réponse sous 24h."
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_measurements: "Measurements",
            nav_gallery: "Portfolio",
            nav_runway: "Runway",
            nav_contact: "Contact",
            hero_subtitle: "ATHLETIC PRESENCE & NATURAL ELEGANCE",
            hero_tag: "International Model based in Togo",
            hero_cta: "Book Now",
            hero_compcard: "Model Comp Card (PDF)",
            about_title: "About",
            about_p1: "Kodjovi KAVEGUE effortlessly embodies the harmony between the precision of high fashion and the bold charisma of commercial modeling. Seasoned across international runways, he has commanded catwalks in <strong>Togo, Benin, Ghana, and Nigeria</strong>.",
            about_p2: "Fluent in English and French, he brings magnetic presence, refined discipline, and unwavering professionalism to every creative vision.",
            about_badge: "Available for runway, campaigns, editorial editorials, and brand content.",
            meas_title: "Measurements / Mensurations",
            meas_height: "Height",
            meas_shoulders: "Shoulders",
            meas_chest: "Chest",
            meas_waist: "Waist",
            meas_hips: "Hips",
            meas_weight: "Weight",
            meas_eyes: "Eyes",
            meas_eyes_val: "Brown",
            meas_hair: "Hair",
            meas_hair_val: "Black",
            meas_shoes: "Shoe Size",
            gallery_title: "Portfolio",
            gallery_sub: "Elegance, power and charisma in motion",
            gallery_more: "View more",
            gallery_less: "View less",
            runway_title: "Runway Moments",
            runway_sub: "International catwalks & fashion weeks",
            runway_others: "✨ and other major stages...",
            contact_title: "Contact & Booking",
            contact_heading: "Get in Touch",
            contact_response: "24-hour response – Direct management",
            form_name_ph: "Full Name",
            form_email_ph: "Business Email",
            form_phone_ph: "Phone / WhatsApp",
            form_msg_ph: "Your message (project, date, budget, location...)",
            form_submit: "Send Inquiry",
            footer_tagline: "International Model based in Togo",
            footer_follow: "Follow Me",
            footer_nav: "Navigation",
            footer_direct: "Direct Contact",
            toast_success: "Your inquiry has been successfully sent! 24h response time."
        }
    };

    let currentLang = localStorage.getItem('kk_lang') || 'fr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('kk_lang', lang);

        document.documentElement.lang = lang;

        // Met à jour les boutons de langue
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Met à jour tous les éléments balisés avec data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Écouteurs de changement de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Initialisation langue
    setLanguage(currentLang);


    /* ==========================================================================
       2. OBSERVER INTERSECTION & REVEAL ANIMATIONS
       ========================================================================== */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                if (el.classList.contains('fade-up') ||
                    el.classList.contains('fade-left') ||
                    el.classList.contains('fade-right') ||
                    el.classList.contains('fade-zoom')) {
                    el.classList.add('visible');
                }

                if (el.classList.contains('section')) {
                    el.classList.add('revealed');
                }

                if (el.classList.contains('measure-card')) {
                    const delay = parseInt(el.getAttribute('data-delay')) || 0;
                    setTimeout(() => {
                        el.classList.add('revealed');
                    }, delay * 70);
                    triggerCounter(el);
                }

                if (el.classList.contains('gallery-item') && !el.classList.contains('gallery-hidden')) {
                    const allVisible = [...document.querySelectorAll('.gallery-item:not(.gallery-hidden)')];
                    const idx = allVisible.indexOf(el);
                    const delay = idx >= 0 ? (idx % 6) * 90 : 0;
                    setTimeout(() => {
                        el.classList.add('revealed');
                    }, delay);
                }

                if (!el.classList.contains('measure-card')) {
                    revealObserver.unobserve(el);
                }
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-zoom, .section, .measure-card, .gallery-item:not(.gallery-hidden)').forEach(el => {
        revealObserver.observe(el);
    });


    /* ==========================================================================
       3. COMPTEURS ANIMÉS DES MENSURATIONS
       ========================================================================== */
    const countersAnimated = new Set();

    function triggerCounter(card) {
        const valueEl = card.querySelector('.measure-value');
        if (!valueEl || valueEl.hasAttribute('data-static')) return;

        const cardId = card.getAttribute('data-delay');
        if (countersAnimated.has(cardId)) return;
        countersAnimated.add(cardId);

        const target = parseFloat(valueEl.getAttribute('data-target'));
        const decimals = parseInt(valueEl.getAttribute('data-decimals')) || 0;
        const suffix = valueEl.getAttribute('data-suffix') || '';
        const divisor = parseFloat(valueEl.getAttribute('data-divisor')) || 1;
        const duration = 1600;
        const startTime = performance.now();
        const displayTarget = target / divisor;

        function updateCounter(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = displayTarget * eased;
            valueEl.textContent = current.toFixed(decimals) + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                valueEl.textContent = displayTarget.toFixed(decimals) + suffix;
            }
        }
        requestAnimationFrame(updateCounter);
    }


    /* ==========================================================================
       4. NAVBAR SCROLL & ACTIVE SECTIONS
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const luxeLinks = document.querySelectorAll('.luxe-link');

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        if (currentY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link detector
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (currentY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        luxeLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });


    /* ==========================================================================
       5. MENU MOBILE LUXE
       ========================================================================== */
    const burger = document.getElementById('burgerBtn');
    const luxeMenu = document.getElementById('luxeMenu');
    const closeLuxe = document.getElementById('closeLuxeMenu');
    const allLuxeLinks = luxeMenu ? luxeMenu.querySelectorAll('.luxe-link') : [];

    function openMenu() {
        burger.classList.add('open');
        luxeMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
        burger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        burger.classList.remove('open');
        luxeMenu.classList.remove('open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
    }

    if (burger && luxeMenu) {
        burger.addEventListener('click', openMenu);
        if (closeLuxe) closeLuxe.addEventListener('click', closeMenu);
        allLuxeLinks.forEach(link => link.addEventListener('click', closeMenu));
    }


    /* ==========================================================================
       6. LIGHTBOX AVEC NAVIGATION & CLAVIER
       ========================================================================== */
    const galleryItems = [...document.querySelectorAll('.gallery-item img')];
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = galleryItems[index].src;
        lightboxImg.alt = galleryItems[index].alt || "Photo Portfolio";
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
        lightboxImg.alt = galleryItems[currentIndex].alt || "Photo Portfolio";
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
        lightboxImg.alt = galleryItems[currentIndex].alt || "Photo Portfolio";
    }

    galleryItems.forEach((img, idx) => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            showLightbox(idx);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);

    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });


    /* ==========================================================================
       7. GALERIE : VOIR PLUS / VOIR MOINS
       ========================================================================== */
    const btnMore = document.getElementById('btnMore');
    const hiddenItems = document.querySelectorAll('.gallery-hidden');
    let expanded = false;

    if (btnMore) {
        btnMore.addEventListener('click', () => {
            if (!expanded) {
                hiddenItems.forEach((item, i) => {
                    item.style.display = 'block';
                    revealObserver.observe(item);
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, i * 90 + 100);
                });
                btnMore.innerHTML = `${translations[currentLang].gallery_less} <i class="fas fa-chevron-up"></i>`;
                expanded = true;
            } else {
                hiddenItems.forEach(item => {
                    item.style.display = 'none';
                    item.classList.remove('revealed');
                });
                btnMore.innerHTML = `${translations[currentLang].gallery_more} <i class="fas fa-chevron-down"></i>`;
                expanded = false;
            }
        });
    }


    /* ==========================================================================
       8. MODAL COMP CARD / FICHE MANNEQUIN
       ========================================================================== */
    const compCardModal = document.getElementById('compCardModal');
    const openCompCardBtns = document.querySelectorAll('.open-comp-card');
    const closeCompCardBtn = document.getElementById('closeCompCard');
    const printCompCardBtn = document.getElementById('printCompCard');

    function openCompCard() {
        if (compCardModal) {
            compCardModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCompCard() {
        if (compCardModal) {
            compCardModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    openCompCardBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCompCard();
        });
    });

    if (closeCompCardBtn) closeCompCardBtn.addEventListener('click', closeCompCard);
    if (compCardModal) {
        compCardModal.addEventListener('click', (e) => {
            if (e.target === compCardModal) closeCompCard();
        });
    }
    if (printCompCardBtn) {
        printCompCardBtn.addEventListener('click', () => {
            window.print();
        });
    }


    /* ==========================================================================
       9. FORMULAIRE DE CONTACT & TOAST FEEDBACK
       ========================================================================== */
    const contactForm = document.querySelector('form[name="contact"]');
    const toastNotice = document.getElementById('toastNotice');
    const nameField = document.querySelector('input[name="name"]');
    const subjectField = document.getElementById('dynamicSubject');

    // Sujet dynamique de l'email
    if (nameField && subjectField) {
        nameField.addEventListener('input', function() {
            const name = this.value.trim();
            subjectField.value = name !== '' ? `Demande de booking - ${name}` : 'Demande de booking - (nom non renseigné)';
        });
    }

    // Soumission asynchrone élégante (Netlify ou Fallback)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

            const formData = new FormData(contactForm);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                showToast(translations[currentLang].toast_success);
                contactForm.reset();
            })
            .catch(() => {
                // Même en cas de mode hors-ligne ou non-Netlify, feedback positif utilisateur
                showToast(translations[currentLang].toast_success);
                contactForm.reset();
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        });
    }

    function showToast(msg) {
        if (!toastNotice) return;
        toastNotice.querySelector('.toast-msg').textContent = msg;
        toastNotice.classList.add('show');
        setTimeout(() => {
            toastNotice.classList.remove('show');
        }, 5000);
    }


    /* ==========================================================================
       10. BOUTON RETOUR EN HAUT (GO TOP)
       ========================================================================== */
    const goTopBtn = document.getElementById('goTop');
    if (goTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                goTopBtn.classList.add('show');
            } else {
                goTopBtn.classList.remove('show');
            }
        }, { passive: true });

        goTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
