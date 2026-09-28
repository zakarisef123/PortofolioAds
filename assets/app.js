(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ---------- FR / EN ---------- */
  var FR = {
    'Zakari Sefta — Ads Portfolio': 'Zakari Sefta — Portfolio Ads & Web',
    'Websites': 'Sites web',
    'Switch language': 'Changer de langue',
    'Toggle dark mode': 'Mode sombre',
    'Ads & Web Portfolio': 'Portfolio Ads & Web',
    'Freelance digital acquisition: Google Ads, Local Services Ads & Google My Business campaigns, plus the conversion-focused websites they point to. From bidding strategy and tracking to design, local SEO and continuous CPA and ROAS optimization.': 'Acquisition digitale en freelance : campagnes Google Ads, Local Services Ads et Google My Business, et les sites web qui convertissent derrière. De la stratégie d’enchères et du tracking jusqu’au design, au SEO local et à l’optimisation continue du CPA et du ROAS.',
    'Ad budget managed / quarter': 'Budget pub géré / trimestre',
    'Reported conversions (cumulative)': 'Conversions remontées (cumul)',
    'Cost / conversion (by account)': 'Coût / conversion (selon compte)',
    'Accounts managed autonomously': 'Comptes gérés en autonomie',
    'Websites designed & shipped': 'Sites web conçus & livrés',
    'Local SEO city sites for trade networks': 'Sites SEO locaux pour réseaux d’artisans',
    'Paid acquisition': 'Acquisition payante',
    'Google Ads (Search, Performance Max), Local Services Ads and Google Business Profile. Account structure, bidding, budgets and weekly CPA / ROAS optimization.': 'Google Ads (Search, Performance Max), Local Services Ads et fiche Google Business. Structure de compte, enchères, budgets et optimisation hebdomadaire du CPA / ROAS.',
    'Websites that convert': 'Des sites qui convertissent',
    'Custom, mobile-first sites for restaurants, therapists, local shops and tradespeople: click-to-call, quote forms, booking, online ordering, FR/EN versions.': 'Sites sur mesure, pensés mobile d’abord, pour restaurants, thérapeutes, commerces et artisans : appel en un clic, formulaires de devis, réservation, commande en ligne, versions FR/EN.',
    'Tracking & local SEO': 'Tracking & SEO local',
    'GTM / GA4 call and form tracking wired into every site, plus city-by-city landing pages built to rank locally and feed the ad campaigns.': 'Suivi des appels et formulaires via GTM / GA4 sur chaque site, et pages locales ville par ville pensées pour se positionner et alimenter les campagnes.',
    'Part 1': 'Partie 1',
    'Part 2': 'Partie 2',
    'Accounts I manage end to end. Figures are taken directly from the Google Ads and LSA dashboards shown below each case.': 'Des comptes que je gère de A à Z. Les chiffres viennent directement des tableaux de bord Google Ads et LSA affichés sous chaque cas.',
    'March 23 – August 31, 2026': '23 mars – 31 août 2026',
    'Freelance — Google Ads & Local Services Ads': 'Freelance — Google Ads & Local Services Ads',
    'Full management of a €60,000/quarter ad budget across a multi-city network (Toulon, Bordeaux, Nice, Perpignan, Montpellier, Toulouse). Conversion-focused bidding strategy, with full call and form tracking via GTM/GA4.': 'Gestion complète d’un budget de 60 000 €/trimestre sur un réseau multi-villes (Toulon, Bordeaux, Nice, Perpignan, Montpellier, Toulouse). Stratégie d’enchères orientée conversions, avec suivi complet des appels et formulaires via GTM/GA4.',
    'Cost / conversion': 'Coût / conversion',
    'Average CTR': 'CTR moyen',
    'Amount invested over the period': 'Montant investi sur la période',
    'Google Ads account overview — SOS France Interventions & SOS Serrurier': 'Vue d’ensemble du compte Google Ads — SOS France Interventions & SOS Serrurier',
    'Account overview': 'Vue d’ensemble du compte',
    'Google Ads breakdown by city — SOS France Interventions & SOS Serrurier (1/3)': 'Google Ads par ville — SOS France Interventions & SOS Serrurier (1/3)',
    'Breakdown by city (1/3)': 'Détail par ville (1/3)',
    'Google Ads breakdown by city — SOS France Interventions & SOS Serrurier (2/3)': 'Google Ads par ville — SOS France Interventions & SOS Serrurier (2/3)',
    'Breakdown by city (2/3)': 'Détail par ville (2/3)',
    'Google Ads breakdown by city — SOS France Interventions & SOS Serrurier (3/3)': 'Google Ads par ville — SOS France Interventions & SOS Serrurier (3/3)',
    'Breakdown by city (3/3)': 'Détail par ville (3/3)',
    'Since June 2025': 'Depuis juin 2025',
    'Management of Search and Local Services Ads (LSA) campaigns to generate high-intent calls and leads, with a conversion-focused bidding strategy and full tracking via GTM/GA4.': 'Gestion des campagnes Search et Local Services Ads (LSA) pour générer des appels et des leads très qualifiés, avec une stratégie d’enchères orientée conversions et un suivi complet via GTM/GA4.',
    'As the Artisans France account holder does not wish to share their Google Ads statistics, performance figures are not disclosed publicly in this portfolio.': 'Le titulaire du compte Artisans France ne souhaitant pas partager ses statistiques Google Ads, les résultats ne sont pas publiés dans ce portfolio.',
    'May 11 – August 31, 2026': '11 mai – 31 août 2026',
    'Management of a €100,000/quarter budget for a multi-trade network (locksmithing, plumbing, electrical, HVAC, drainage) across several geographic areas (Marseille, Var, Alpes-Maritimes). Performance reporting segmented by trade.': 'Gestion d’un budget de 100 000 €/trimestre pour un réseau multi-métiers (serrurerie, plomberie, électricité, climatisation, débouchage) sur plusieurs zones (Marseille, Var, Alpes-Maritimes). Reporting des performances par métier.',
    "At the client's request, Google Ads only tracks call conversions (contact forms are not tracked on this account), which skews the cost per conversion shown in the tool. Counting all channels, the actual total number of conversions over the period is 1023.": 'À la demande du client, Google Ads ne suit que les appels (les formulaires de contact ne sont pas suivis sur ce compte), ce qui fausse le coût par conversion affiché dans l’outil. Tous canaux confondus, le nombre réel de conversions sur la période est de 1023.',
    'Conversions (all channels)': 'Conversions (tous canaux)',
    'Actual cost / conversion': 'Coût réel / conversion',
    'Google Ads account overview — Inter Pro 24': 'Vue d’ensemble du compte Google Ads — Inter Pro 24',
    'Google Ads breakdown by trade — Inter Pro 24': 'Google Ads par métier — Inter Pro 24',
    'Breakdown by trade': 'Détail par métier',
    'Feb 2 – August 31, 2026': '2 février – 31 août 2026',
    'Management of Search and Performance Max campaigns, as well as Local Services Ads (LSA), for an independent plumber operating in Isère, Rhône and Loire. Call and form tracking via GTM/GA4.': 'Gestion des campagnes Search et Performance Max ainsi que des Local Services Ads (LSA) pour un plombier indépendant en Isère, Rhône et Loire. Suivi des appels et formulaires via GTM/GA4.',
    'Google Ads account overview — Ets Gilles': 'Vue d’ensemble du compte Google Ads — Ets Gilles',
    'Google Ads campaign breakdown — Ets Gilles': 'Détail des campagnes Google Ads — Ets Gilles',
    'Campaign breakdown': 'Détail des campagnes',
    'Billed leads': 'Leads facturés',
    'Cost / lead': 'Coût / lead',
    '1st position impression share': 'Part d’impressions en 1re position',
    'Local Services Ads account overview — Ets Gilles': 'Vue d’ensemble Local Services Ads — Ets Gilles',
    'Account overview (LSA)': 'Vue d’ensemble du compte (LSA)',
    'Clicks': 'Clics',
    'Aug 26 – Sept 26, 2026': '26 août – 26 septembre 2026',
    'Freelance — Google Ads & website': 'Freelance — Google Ads & site web',
    'Launch of Google Ads for an independent electrician: a Search campaign plus a local Performance Max campaign covering Saint-Étienne and Lyon, with call tracking. I also built the website the ads point to.': 'Lancement de Google Ads pour un électricien indépendant : une campagne Search et une campagne Performance Max locale sur Saint-Étienne et Lyon, avec suivi des appels. J’ai aussi réalisé le site vers lequel pointent les annonces.',
    'Average CPC': 'CPC moyen',
    'Electrician · Saint-Étienne & Lyon': 'Électricien · Saint-Étienne & Lyon',
    "Emergency electrician site built to convert Google Ads traffic: 30-second answer promise, services, areas served, reviews and FAQ. It's the landing site for the Michel Elec campaigns in Part 1.": 'Site d’électricien d’urgence conçu pour convertir le trafic Google Ads : réponse en 30 secondes, services, zones d’intervention, avis et FAQ. C’est le site d’arrivée des campagnes Michel Elec de la Partie 1.',
    'Ads landing': 'Page d’atterrissage Ads',
    'Reviews & FAQ': 'Avis & FAQ',
    'Google Ads campaign breakdown — Michel Elec': 'Détail des campagnes Google Ads — Michel Elec',
    'Jan 1 – August 31, 2026': '1er janvier – 31 août 2026',
    'Management of Local Services Ads (LSA) for a renovation specialist tradesperson. Tracking of billed leads (calls and messages) and optimization of the ad impression share.': 'Gestion des Local Services Ads (LSA) pour un artisan spécialisé en rénovation. Suivi des leads facturés (appels et messages) et optimisation de la part d’impressions.',
    'Local Services Ads account overview — Bati Nov Rénovation': 'Vue d’ensemble Local Services Ads — Bati Nov Rénovation',
    'Jan 1 – Sept 2, 2026': '1er janvier – 2 septembre 2026',
    'Management of a Search campaign with a target CPA strategy for a premium photo book e-commerce site. Conversion tracking (purchases and calls) via GTM/GA4.': 'Gestion d’une campagne Search en CPA cible pour un site e-commerce de livres photo haut de gamme. Suivi des conversions (achats et appels) via GTM/GA4.',
    'Google Ads account overview — Milenia Création': 'Vue d’ensemble du compte Google Ads — Milenia Création',
    'Google Ads campaign breakdown — Milenia Création': 'Détail des campagnes Google Ads — Milenia Création',
    'Sites I design, build and maintain for local businesses. Each one is custom-made, mobile-first and built around one goal: turning visitors into calls, bookings, orders or quote requests.': 'Des sites que je conçois, développe et maintiens pour des entreprises locales. Chacun est fait sur mesure, pensé mobile d’abord et construit autour d’un seul objectif : transformer les visiteurs en appels, réservations, commandes ou demandes de devis.',
    'Filter websites': 'Filtrer les sites',
    'All': 'Tous',
    'Restaurants & shops': 'Restaurants & boutiques',
    'Wellness & services': 'Bien-être & services',
    'Tradespeople': 'Artisans',
    'Web app': 'Application',
    'Restaurants & e-commerce': 'Restauration & e-commerce',
    'Smash burger restaurant near Geneva. Bold street-food identity, full menu, a "build your smash" configurator and online ordering.': 'Restaurant de smash burgers près de Genève. Identité street-food affirmée, carte complète, configurateur « build ton smash » et commande en ligne.',
    'Online ordering': 'Commande en ligne',
    'Burger builder': 'Configurateur burger',
    'Opening hours live': 'Horaires en direct',
    'Korean street-food spot with a playful K-culture design: animated intro, bilingual menu and delivery links.': 'Street-food coréenne avec un design ludique inspiré de la K-culture : intro animée, carte bilingue et liens de livraison.',
    'Animated intro': 'Intro animée',
    'Delivery links': 'Liens de livraison',
    'Indian & Pakistani restaurant site with menu, table booking, takeaway ordering, photo gallery, loyalty programme and reviews.': 'Site d’un restaurant indien et pakistanais : carte, réservation de table, commande à emporter, galerie photo, programme de fidélité et avis.',
    'Booking & takeaway': 'Réservation & à emporter',
    'E-commerce · Handmade': 'E-commerce · Fait main',
    'Online shop for handmade, colourful accessories: product catalogue, category pages, cart and free-shipping threshold messaging.': 'Boutique en ligne d’accessoires colorés faits main : catalogue produits, pages catégories, panier et seuil de livraison offerte.',
    'Product catalogue': 'Catalogue produits',
    'Cart': 'Panier',
    'Wellness, services & agency': 'Bien-être, services & agence',
    'Wellness · Geneva': 'Bien-être · Genève',
    'Kobido massage and aesthetic acupuncture practice. Premium look, treatment pages, blog, discovery offer and online booking.': 'Cabinet de massage Kobido et d’acupuncture esthétique. Univers haut de gamme, pages de soins, blog, offre découverte et réservation en ligne.',
    'Booking': 'Réservation',
    'Health · Divonne-les-Bains': 'Santé · Divonne-les-Bains',
    'Juliette Paccani — Lymphotherapist': 'Juliette Paccani — Lymphothérapeute',
    'One-page site for a Dr Vodder-certified lymphotherapist: treatments, how a session works, reviews and appointment booking.': 'Site one-page pour une lymphothérapeute diplômée Dr Vodder : soins, déroulement d’une séance, avis et prise de rendez-vous.',
    'Appointment CTA': 'Prise de rendez-vous',
    'Reviews': 'Avis',
    'Agency · Divonne & Geneva': 'Agence · Divonne & Genève',
    'Digital marketing agency site: services, pricing, portfolio, blog and a free-audit funnel.': 'Site d’agence marketing digital : services, tarifs, portfolio, blog et tunnel d’audit gratuit.',
    'Lead funnel': 'Tunnel de leads',
    'Visit site ↗': 'Voir le site ↗',
    'Automotive · Saint-Étienne': 'Automobile · Saint-Étienne',
    'Independent garage: servicing, bodywork, windscreens, used-car listings and quote requests, built as a React single-page app.': 'Garage indépendant : entretien, carrosserie, pare-brise, véhicules d’occasion et demandes de devis, développé en application React.',
    'Used-car listings': 'Annonces d’occasion',
    'Quote form': 'Formulaire de devis',
    'Leisure · Montélimar': 'Loisirs · Montélimar',
    'Karting track with 4 circuits: prices, gallery, challenges, group & corporate events, click-to-call booking.': 'Karting avec 4 circuits : tarifs, galerie, challenges, événements de groupe et d’entreprise, réservation par appel en un clic.',
    'Click-to-call': 'Appel en un clic',
    'Events': 'Événements',
    'Independent tradespeople': 'Artisans indépendants',
    'Plumbing · Béziers & Narbonne': 'Plomberie · Béziers & Narbonne',
    'Emergency plumbing site for a family business covering Hérault and Aude: services, Béziers and Narbonne sections, pricing, reviews, FAQ and a call-first layout.': 'Site de plomberie d’urgence pour une entreprise familiale dans l’Hérault et l’Aude : services, sections Béziers et Narbonne, tarifs, avis, FAQ et mise en page pensée pour l’appel.',
    'Local SEO': 'SEO local',
    'Pricing & FAQ': 'Tarifs & FAQ',
    "Separate site for the same company's façade business: rendering, cleaning and painting services, before/after projects and quote requests.": 'Site dédié à l’activité façade de la même entreprise : ravalement, nettoyage et peinture, réalisations avant/après et demandes de devis.',
    'Before / after': 'Avant / après',
    'Service area': 'Zone d’intervention',
    'Web application': 'Application web',
    'LOCKR: desktop login screen': 'LOCKR : écran de connexion ordinateur',
    'LOCKR: mobile login screen': 'LOCKR : écran de connexion mobile',
    'Marketplace · Home services': 'Marketplace · Services à domicile',
    'A full web app connecting homeowners with vetted plumbers, electricians, locksmiths and heating engineers. Separate spaces for individuals, tradespeople and businesses, pro account verification, job tracking, invoicing, and online payments with commission handled automatically.': 'Une application web complète qui met en relation les particuliers avec des plombiers, électriciens, serruriers et chauffagistes vérifiés. Espaces séparés particuliers, artisans et entreprises, vérification des comptes pro, suivi des interventions, facturation et paiement en ligne avec commission gérée automatiquement.',
    'Lead-generation networks for tradespeople': 'Réseaux de génération de leads pour artisans',
    'Locksmith · Plumbing · Electrical · Drainage': 'Serrurerie · Plomberie · Électricité · Assainissement',
    'A network of emergency-repair sites, one per city and per trade, each built to rank locally and to turn a Google search into a phone call within seconds.': 'Un réseau de sites de dépannage d’urgence, un par ville et par métier, chacun construit pour se positionner localement et transformer une recherche Google en appel en quelques secondes.',
    'Cities': 'Villes',
    'Trades': 'Métiers',
    'Paris & Île-de-France, Hauts-de-Seine (92), Nantes, Rennes, Saint-Brieuc, Angers, Bordeaux, Toulouse, Pau, Mont-de-Marsan, Toulon, Annecy, Chambéry.': 'Paris & Île-de-France, Hauts-de-Seine (92), Nantes, Rennes, Saint-Brieuc, Angers, Bordeaux, Toulouse, Pau, Mont-de-Marsan, Toulon, Annecy, Chambéry.',
    '24/7 urgency UX': 'Parcours urgence 24h/24',
    'Locksmith · Plumbing': 'Serrurerie · Plomberie',
    'Emergency locksmith and plumbing sites for the Artisans France network, which I also run Google Ads and LSA for (see Part 1). Each city site targets its own local search area.': 'Sites de serrurerie et plomberie d’urgence pour le réseau Artisans France, dont je gère aussi les Google Ads et LSA (voir Partie 1). Chaque site cible sa propre zone de recherche locale.',
    'Cookie consent': 'Gestion des cookies',
    'Plumbing · Switzerland': 'Plomberie · Suisse',
    'Emergency plumbing sites for the cantons of Geneva and Vaud, plus a separate SOS Plomberie Genève site: 24/7 call-first layout, service area and quote request.': 'Sites de plomberie d’urgence pour les cantons de Genève et Vaud, plus un site SOS Plomberie Genève dédié : parcours pensé pour l’appel 24h/24, zone d’intervention et demande de devis.',
    'Geneva, Lausanne and the canton of Vaud.': 'Genève, Lausanne et le canton de Vaud.',
    'Call-first UX': 'Parcours orienté appel',
    'Swiss market': 'Marché suisse',
    'Call': 'Appeler',
    'Contact me': 'Me contacter',
    "Let's work together": 'Travaillons ensemble',
    'Open to new opportunities in paid acquisition and web. I usually reply within the day.': 'Ouvert à de nouvelles opportunités en acquisition payante et web. Je réponds en général dans la journée.',
    'Tools I use daily': 'Mes outils au quotidien',
    'Cost per conversion by account': 'Coût par conversion selon le compte',
    'Lower is better. LSA figures are cost per billed lead; HOMEOMED is in CHF. Click a bar to open the case.': 'Plus c’est bas, mieux c’est. Pour les LSA, il s’agit du coût par lead facturé ; HOMEOMED est en CHF. Cliquez sur une barre pour voir le cas.',
    'Oct 1, 2025 – Sept 28, 2026': '1er octobre 2025 – 28 septembre 2026',
    'Management of a Search campaign for a Swiss account billed in CHF, on a 23 CHF/day budget. Conversion-focused setup with a 5.38% conversion rate and a cost per conversion kept around 21 CHF.': 'Gestion d’une campagne Search pour un compte suisse facturé en CHF, avec un budget de 23 CHF/jour. Configuration orientée conversions, avec un taux de conversion de 5,38 % et un coût par conversion maintenu autour de 21 CHF.',
    'LSA · per lead': 'LSA · par lead',
    'All channels': 'Tous canaux',
    'billed leads': 'leads facturés',
    'Close': 'Fermer',
    'September 2026': 'Septembre 2026'
  };
  // Screenshot alt texts follow one pattern: "<Name>: desktop homepage"
  function altFr(t) {
    return t.replace(/: desktop homepage$/, ' : page d’accueil ordinateur')
            .replace(/: mobile homepage$/, ' : page d’accueil mobile');
  }

  var textNodes = [];
  var attrNodes = [];
  (function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        if (p === 'SCRIPT' || p === 'STYLE') return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var key = n.nodeValue.replace(/\s+/g, ' ').trim();
      if (FR[key]) textNodes.push({ node: n, en: n.nodeValue, fr: FR[key] });
    }
    document.querySelectorAll('[alt],[aria-label]').forEach(function (el) {
      ['alt', 'aria-label'].forEach(function (a) {
        var v = el.getAttribute(a);
        if (!v) return;
        var fr = FR[v] || (a === 'alt' ? altFr(v) : null);
        if (fr && fr !== v) attrNodes.push({ el: el, attr: a, en: v, fr: fr });
      });
    });
  })();

  var titleEn = document.title;
  var langBtn = document.getElementById('lang-btn');

  function setLang(lang) {
    var fr = lang === 'fr';
    textNodes.forEach(function (t) { t.node.nodeValue = fr ? t.fr : t.en; });
    attrNodes.forEach(function (t) { t.el.setAttribute(t.attr, fr ? t.fr : t.en); });
    document.title = fr ? FR[titleEn] || titleEn : titleEn;
    root.setAttribute('lang', lang);
    if (langBtn) langBtn.textContent = fr ? 'EN' : 'FR';
    store('lang', lang);
  }

  var saved = store('lang');
  var nav = (navigator.language || 'fr').toLowerCase();
  setLang(saved || (nav.indexOf('en') === 0 ? 'en' : 'fr'));
  if (langBtn) langBtn.addEventListener('click', function () {
    setLang(root.getAttribute('lang') === 'fr' ? 'en' : 'fr');
  });

  /* ---------- Dark mode ---------- */
  var themeBtn = document.getElementById('theme-btn');
  var savedTheme = store('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Animated counters ---------- */
  function countUp(el) {
    var m = el.textContent.trim().match(/^(\d+)(\D*)$/);
    if (!m || reduceMotion) return;
    var target = parseInt(m[1], 10), suffix = m[2], start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = '0' + suffix;
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.service, .case, .site, .network, .offer, .contact-block, .section-head');
  if ('IntersectionObserver' in window && !reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });

    var counters = document.querySelectorAll('.summary-num');
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        countUp(e.target);
        co.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- Hover scroll on site screenshots ---------- */
  function measure(img) {
    var screen = img.parentNode;
    var shift = screen.clientHeight - img.clientHeight;
    if (shift >= 0) { img.style.removeProperty('--shift'); return; }
    img.style.setProperty('--shift', shift + 'px');
    img.style.setProperty('--dur', Math.max(2, -shift / 220).toFixed(1) + 's');
  }
  var screens = document.querySelectorAll('.screen img');
  screens.forEach(function (img) {
    if (img.complete) measure(img); else img.addEventListener('load', function () { measure(img); });
  });
  window.addEventListener('resize', function () { screens.forEach(measure); });

  /* ---------- Website filters ---------- */
  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      document.querySelectorAll('.site-group').forEach(function (g) {
        g.hidden = cat !== 'all' && g.getAttribute('data-cat') !== cat;
        if (!g.hidden) {
          g.querySelectorAll('.reveal').forEach(function (r) { r.classList.add('in'); });
          g.querySelectorAll('.screen img').forEach(measure);
        }
      });
    });
  });

  /* ---------- Lightbox ---------- */
  var box = document.getElementById('lightbox');
  if (box) {
    var boxImg = box.querySelector('img');
    var lastFocus = null;
    function close() {
      box.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }
    document.addEventListener('click', function (e) {
      var hit = e.target.closest('.shots img, .screen');
      if (!hit) return;
      var img = hit.tagName === 'IMG' ? hit : hit.querySelector('img');
      lastFocus = document.activeElement;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      box.querySelector('.lightbox-close').focus();
    });
    box.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) close();
    });
  }
})();
