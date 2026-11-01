# Portfolio Officiel — Kodjovi KAVEGUE

Site vitrine officiel de **Kodjovi KAVEGUE**, mannequin professionnel international basé au Togo (Lomé) et intervenant au Bénin (Cotonou), au Ghana (Accra, Kumasi) et au Nigeria (Lagos).

---

## 🌟 Fonctionnalités

- **Direction Artistique "Luxe & Dark Fashion"** : palette noir `#0a0a0a` & or `#D4AF37`, typographie haute couture (*Playfair Display* & *Montserrat*).
- **Performance de pointe** :
  - Images converties au format moderne **WebP** avec fallback automatique **JPEG**.
  - Poids de l'image d'en-tête réduit de **4,3 Mo à 216 Ko** (-95%).
  - Chargement différé (*lazy-loading*) sur toute la galerie.
  - Balises `<link rel="preconnect">` pour un chargement instantané des polices.
- **Bilingue FR / EN en temps réel** : bascule de langue instantanée sans rechargement de page, avec persistance du choix utilisateur dans le navigateur (`localStorage`).
- **Fiche Mannequin / Comp Card Digitale (Sedcard)** : modal interactive prête à imprimer ou à exporter en PDF via le raccourci navigateur (`window.print()`).
- **Mensurations interactives** : compteurs animés au scroll avec double unité de mesure (Système métrique & impérial : cm/in, kg/lbs, EU/US).
- **Galerie & Lightbox complète** : navigation au clavier (flèches gauche/droite, touche Échap), visionneuse plein écran.
- **Formulaire de booking avec accusé de réception** :
  - Compatible Netlify Forms (`data-netlify="true"`).
  - Champ anti-spam Honeypot inclus.
  - Notification toast élégante confirmant l'envoi.
- **Accessibilité & SEO** :
  - Balises Open Graph et Twitter Cards configurées.
  - Données structurées **Schema.org (Person)** intégrées.
  - Prise en charge des préférences de réduction de mouvement (`prefers-reduced-motion`).

---

## 📁 Architecture du Projet

```text
├── index.html              # Page principale nettoyée et sémantique
├── favicon.png             # Favicon racine
├── .gitignore              # Exclusion des archives et médias bruts
├── css/
│   └── style.css           # Feuilles de styles modulaires et optimisées
├── js/
│   └── main.js             # Moteur JavaScript (i18n, compteurs, modal, lightbox)
├── assets/
│   ├── icons/
│   │   └── favicon.png     # Icône or monogramme haute résolution
│   └── images/
│       ├── hero-bg.webp    # Image d'arrière-plan compressée
│       ├── hero-bg.jpg     # Fallback JPEG
│       ├── portrait.webp   # Portrait bio
│       ├── portrait.jpg    # Fallback portrait
│       └── gallery-1..12   # Versions WebP et JPEG optimisées
└── _archive/               # Sauvegarde des originaux haute résolution et copies
```

---

## 🚀 Déploiement

Le site est statique et peut être déployé en 1 clic sur :
- **Netlify** : Glisser-déposer le dossier racine (hors `_archive`). Les formulaires de contact fonctionnent immédiatement sans configuration de serveur.
- **Vercel** / **GitHub Pages** / **Cloudflare Pages** : Déploiement instantané.

---

## ✍️ Crédits

- **Direction & Sujet** : Kodjovi KAVEGUE (Lomé, Togo)
- **Développement & Optimisation** : Refactorisation et audit technique 2026
