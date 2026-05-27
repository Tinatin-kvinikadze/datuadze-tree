/* ============================================================
   DATUADZE FAMILY HERITAGE — MAIN SCRIPT
   Visual family tree with SVG connection lines

   HOW TO EDIT YOUR FAMILY DATA:
   - Find the NODES object below
   - Replace placeholder names, years, professions and bios
   - To add a real photo: put image in images/ folder and set
     photo: 'images/your-file.jpg' on that person's object
   - The tree structure (who connects to whom) is in CONNECTIONS
   ============================================================ */

'use strict';

/* ============================================================
   LAYOUT CONSTANTS
   NW   = node card pixel width
   NH   = node card pixel height
   VGAP = vertical gap between generation rows
   GY   = top Y pixel for each generation row
   ============================================================ */
const NW   = 110;
const NH   = 158;
const VGAP = 80;

const GY = {
    4: 20,
    3: 20 + NH + VGAP,
    2: 20 + NH + VGAP + NH + VGAP,
    1: 20 + NH + VGAP + NH + VGAP + NH + VGAP
};

function jY(fromGen) {
    return GY[fromGen] + NH + Math.floor(VGAP / 2);
}

/* ============================================================
   FAMILY DATA
   cx  = horizontal center X position (pixels)
   gen = generation (4 oldest, 1 youngest)

   X POSITION DESIGN:
   Gen4 pairs (140px apart): 90,230 | 370,510 | 680,820 | 960,1100
   Gen3 midpoints:           160      440       750       1030
   Gen2 midpoints:           300                 890
   Gen1 midpoint:                      595
   ============================================================ */

const NODES = {

    // GREAT-GRANDPARENTS (Gen 4)
    ggf_pp: {
        id:'ggf_pp', gen:4, cx:90,
        name:'Great-Grandfather', years:'1885 - 1960',
        relation:'Great-Grandfather\n(Paternal)',
        profession:'Farmer', professionIcon:'fas fa-seedling',
        bio:'A hardworking man of the land who built the foundation of our family through dedication and resilience.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#7a5c3c', photo:''
    },
    ggm_pp: {
        id:'ggm_pp', gen:4, cx:230,
        name:'Great-Grandmother', years:'1890 - 1968',
        relation:'Great-Grandmother\n(Paternal)',
        profession:'Homemaker', professionIcon:'fas fa-home',
        bio:'The heart of the household, known for her wisdom, warm hospitality, and gift for storytelling.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#8B9E6E', photo:''
    },
    ggf_mp: {
        id:'ggf_mp', gen:4, cx:370,
        name:'Great-Grandfather', years:'1880 - 1955',
        relation:'Great-Grandfather\n(Paternal side)',
        profession:'Teacher', professionIcon:'fas fa-chalkboard-teacher',
        bio:'An educator who believed that knowledge was the greatest gift one could pass to the next generation.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#5C8A3C', photo:''
    },
    ggm_mp: {
        id:'ggm_mp', gen:4, cx:510,
        name:'Great-Grandmother', years:'1888 - 1972',
        relation:'Great-Grandmother\n(Paternal side)',
        profession:'Craftsperson', professionIcon:'fas fa-hands',
        bio:'Skilled in traditional Georgian crafts, she preserved cultural heritage and passed it on with love.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#C4972B', photo:''
    },
    ggf_pm: {
        id:'ggf_pm', gen:4, cx:680,
        name:'Great-Grandfather', years:'1882 - 1958',
        relation:'Great-Grandfather\n(Maternal side)',
        profession:'Blacksmith', professionIcon:'fas fa-hammer',
        bio:'A skilled craftsman respected throughout his village for honesty and the quality of his work.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#6B4C2A', photo:''
    },
    ggm_pm: {
        id:'ggm_pm', gen:4, cx:820,
        name:'Great-Grandmother', years:'1887 - 1965',
        relation:'Great-Grandmother\n(Maternal side)',
        profession:'Healer', professionIcon:'fas fa-leaf',
        bio:'Renowned in her community for her knowledge of herbal remedies and her kind, healing spirit.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#8B9E6E', photo:''
    },
    ggf_mm: {
        id:'ggf_mm', gen:4, cx:960,
        name:'Great-Grandfather', years:'1878 - 1952',
        relation:'Great-Grandfather\n(Maternal)',
        profession:'Merchant', professionIcon:'fas fa-store',
        bio:'A resourceful merchant who built lasting connections across towns and provided for his family with grace.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#5C8A3C', photo:''
    },
    ggm_mm: {
        id:'ggm_mm', gen:4, cx:1100,
        name:'Great-Grandmother', years:'1883 - 1960',
        relation:'Great-Grandmother\n(Maternal)',
        profession:'Schoolteacher', professionIcon:'fas fa-apple-alt',
        bio:'She shaped the minds of generations of children and was beloved for her gentle wisdom.',
        genLabel:'Great-Grandparents', initials:'GG', color:'#C4972B', photo:''
    },

    // GRANDPARENTS (Gen 3)
    gf_p: {
        id:'gf_p', gen:3, cx:160,
        name:'Grandfather', years:'1920 - 2002',
        relation:'Grandfather\n(Paternal)',
        profession:'Engineer', professionIcon:'fas fa-cogs',
        bio:'A skilled engineer who dedicated his career to building the infrastructure of modern Georgia.',
        genLabel:'Grandparents', initials:'GP', color:'#2D5016', photo:''
    },
    gm_p: {
        id:'gm_p', gen:3, cx:440,
        name:'Grandmother', years:'1925 - 2008',
        relation:'Grandmother\n(Paternal)',
        profession:'Nurse', professionIcon:'fas fa-stethoscope',
        bio:'A devoted nurse who cared for her community and her family with equal compassion and love.',
        genLabel:'Grandparents', initials:'GM', color:'#8B9E6E', photo:''
    },
    gf_m: {
        id:'gf_m', gen:3, cx:750,
        name:'Grandfather', years:'1918 - 1995',
        relation:'Grandfather\n(Maternal)',
        profession:'Doctor', professionIcon:'fas fa-user-md',
        bio:'A respected physician known throughout the community for his dedication to healing.',
        genLabel:'Grandparents', initials:'GP', color:'#6B4C2A', photo:''
    },
    gm_m: {
        id:'gm_m', gen:3, cx:1030,
        name:'Grandmother', years:'1924 - 2014',
        relation:'Grandmother\n(Maternal)',
        profession:'School Teacher', professionIcon:'fas fa-apple-alt',
        bio:'She shaped the minds of generations of children and was beloved by all who knew her.',
        genLabel:'Grandparents', initials:'GM', color:'#5C8A3C', photo:''
    },

    // PARENTS (Gen 2)
    father: {
        id:'father', gen:2, cx:300,
        name:"Father's Name", years:'1960 - Present',
        relation:'Father',
        profession:'Add Profession', professionIcon:'fas fa-briefcase',
        bio:'Replace this with a short description of your father — his work, passions, and personality.',
        genLabel:'Parents', initials:'F', color:'#2D5016', photo:''
    },
    mother: {
        id:'mother', gen:2, cx:890,
        name:"Mother's Name", years:'1963 - Present',
        relation:'Mother',
        profession:'Add Profession', professionIcon:'fas fa-heart',
        bio:'Replace this with a short description of your mother — her work, passions, and personality.',
        genLabel:'Parents', initials:'M', color:'#C4972B', photo:''
    },

    // MY GENERATION (Gen 1)
    me: {
        id:'me', gen:1, cx:595,
        name:'OTARI DATUADZE', years:'1991 - Present',
        relation:'Family Historian',
        profession:'ფოტოგრაფი', professionIcon:'fas fa-book-open',
        bio:'The keeper of the family story — dedicated to preserving and sharing the rich history of the Datuadze family for generations to come.',
        genLabel:'My Generation', initials:'TD', color:'#5C8A3C', photo:'images/father.jpg'
    }
};

/* ============================================================
   CONNECTIONS: each entry = two parents + their shared child
   This defines the SVG lines to draw
   ============================================================ */
const CONNECTIONS = [
    { p1:'ggf_pp', p2:'ggm_pp', child:'gf_p'   },
    { p1:'ggf_mp', p2:'ggm_mp', child:'gm_p'   },
    { p1:'ggf_pm', p2:'ggm_pm', child:'gf_m'   },
    { p1:'ggf_mm', p2:'ggm_mm', child:'gm_m'   },
    { p1:'gf_p',   p2:'gm_p',   child:'father' },
    { p1:'gf_m',   p2:'gm_m',   child:'mother' },
    { p1:'father', p2:'mother',  child:'me'     }
];

/* ============================================================
   RENDER TREE
   ============================================================ */
function renderTree() {
    const canvas = document.getElementById('tree-canvas');
    if (!canvas) return;

    const maxCX = Math.max(...Object.values(NODES).map(n => n.cx));
    const SVG_W = maxCX + Math.ceil(NW / 2) + 40;
    const SVG_H = GY[1] + NH + 30;

    canvas.style.width  = SVG_W + 'px';
    canvas.style.height = SVG_H + 'px';

    // SVG for connector lines
    const ns  = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width',  SVG_W);
    svg.setAttribute('height', SVG_H);
    svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:visible';

    CONNECTIONS.forEach(function(conn) {
        var p1    = NODES[conn.p1];
        var p2    = NODES[conn.p2];
        var child = NODES[conn.child];

        var p1Bot    = GY[p1.gen] + NH;
        var p2Bot    = GY[p2.gen] + NH;
        var childTop = GY[child.gen];
        var jy       = jY(p1.gen);
        var midX     = Math.round((p1.cx + p2.cx) / 2);

        var lc = '#8B9E6E', lw = '2';

        addLine(svg, p1.cx, p1Bot,   p1.cx, jy,       lc, lw);
        addLine(svg, p2.cx, p2Bot,   p2.cx, jy,       lc, lw);
        addLine(svg, p1.cx, jy,      p2.cx, jy,       lc, lw);
        addLine(svg, midX,  jy,      child.cx, childTop, lc, lw);

        // Gold dot at couple midpoint (marriage marker)
        var dot = document.createElementNS(ns, 'circle');
        dot.setAttribute('cx', midX);
        dot.setAttribute('cy', jy);
        dot.setAttribute('r',  5);
        dot.setAttribute('fill',         '#C4972B');
        dot.setAttribute('stroke',       '#fff');
        dot.setAttribute('stroke-width', '1.5');
        svg.appendChild(dot);
    });

    canvas.appendChild(svg);

    // Person nodes
    Object.values(NODES).forEach(function(node) {
        canvas.appendChild(createNodeEl(node));
    });
}

function addLine(svg, x1, y1, x2, y2, stroke, width) {
    var ns   = 'http://www.w3.org/2000/svg';
    var line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke',          stroke);
    line.setAttribute('stroke-width',    width);
    line.setAttribute('stroke-linecap',  'round');
    svg.appendChild(line);
}

function createNodeEl(node) {
    var div = document.createElement('div');
    div.className = 'tree-node';
    div.style.left  = (node.cx - Math.floor(NW / 2)) + 'px';
    div.style.top   = GY[node.gen] + 'px';
    div.style.width = NW + 'px';
    div.setAttribute('role',      'button');
    div.setAttribute('tabindex',  '0');
    div.setAttribute('aria-label', node.name + ', ' + node.relation.replace('\n', ' '));

    var frameInner = node.photo
        ? '<img src="' + safeAttr(node.photo) + '" alt="' + safeAttr(node.name) + '" onerror="this.style.display=\'none\'">'
          + '<span style="display:none">' + safeText(node.initials) + '</span>'
        : safeText(node.initials);

    div.innerHTML =
        '<div class="tn-frame" style="background:' + safeAttr(node.color) + '">' + frameInner + '</div>' +
        '<div class="tn-name">'     + safeText(node.name)     + '</div>' +
        '<div class="tn-years">'    + safeText(node.years)    + '</div>' +
        '<div class="tn-relation">' + safeText(node.relation) + '</div>';

    div.addEventListener('click',   function() { openPopup(node); });
    div.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopup(node); }
    });
    return div;
}

/* ============================================================
   MEMBER POPUP
   ============================================================ */
function openPopup(node) {
    var popup   = document.getElementById('member-popup');
    var overlay = document.getElementById('popup-overlay');
    if (!popup || !overlay) return;

    var av = document.getElementById('popup-avatar');
    av.style.background = node.color;
    av.innerHTML = node.photo
        ? '<img src="' + safeAttr(node.photo) + '" alt="' + safeAttr(node.name) + '">'
        : safeText(node.initials);

    setText('popup-gen-label',  node.genLabel);
    setText('popup-name',       node.name);
    setText('popup-years',      node.years);
    setText('popup-relation',   node.relation.replace('\n', ' — '));
    setText('popup-bio',        node.bio);
    document.getElementById('popup-profession').innerHTML =
        '<i class="' + safeAttr(node.professionIcon) + '" aria-hidden="true"></i> ' + safeText(node.profession);

    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    var popup   = document.getElementById('member-popup');
    var overlay = document.getElementById('popup-overlay');
    if (!popup || !overlay) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
}

/* ============================================================
   DRAG-TO-SCROLL on tree wrapper
   ============================================================ */
function initTreeDrag() {
    var wrapper = document.querySelector('.tree-scroll-wrapper');
    if (!wrapper) return;
    var isDown = false, startX = 0, scrollLeft = 0;

    wrapper.addEventListener('mousedown', function(e) {
        isDown     = true;
        startX     = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });
    wrapper.addEventListener('mouseleave', function() { isDown = false; });
    wrapper.addEventListener('mouseup',    function() { isDown = false; });
    wrapper.addEventListener('mousemove',  function(e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - wrapper.offsetLeft;
        wrapper.scrollLeft = scrollLeft - (x - startX) * 1.2;
    });

    // Touch events for mobile swipe
    var touchStartX = 0, touchScrollLeft = 0;
    wrapper.addEventListener('touchstart', function(e) {
        touchStartX    = e.touches[0].pageX;
        touchScrollLeft = wrapper.scrollLeft;
    }, { passive: true });
    wrapper.addEventListener('touchmove', function(e) {
        var dx = touchStartX - e.touches[0].pageX;
        wrapper.scrollLeft = touchScrollLeft + dx;
    }, { passive: true });
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
}

/* ============================================================
   HAMBURGER
   ============================================================ */
function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', function() {
        var open = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
var galleryCaptions = [
    'Family gathering, circa 1960',
    "Grandparents' wedding day",
    'Family home in Georgia',
    "Parents' anniversary",
    'Summer family reunion',
    'A cherished family portrait'
];

function initGallery() {
    var items     = document.querySelectorAll('.gallery-item');
    var lightbox  = document.getElementById('lightbox');
    var lbClose   = document.getElementById('lightbox-close');
    var lbImg     = document.getElementById('lightbox-img');
    var lbPH      = document.getElementById('lightbox-placeholder');
    var lbCaption = document.getElementById('lightbox-caption');
    if (!lightbox) return;

    items.forEach(function(item) {
        var img = item.querySelector('img');
        if (img) img.addEventListener('load', function() { item.classList.add('has-img'); });
    });

    items.forEach(function(item, idx) {
        item.addEventListener('click', function() {
            var img     = item.querySelector('img');
            var caption = galleryCaptions[idx] || item.dataset.caption || '';
            if (img || item.classList.contains('has-img')) {
                lbImg.src           = img.src;
                lbImg.alt           = caption;
                lbImg.style.display = 'block';
                lbPH.style.display  = 'none';
            } else {
                lbImg.style.display = 'none';
                lbPH.style.display  = 'block';
            }
            lbCaption.textContent = caption;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLB() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lbImg.src = '';
    }
    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { closeLB(); closePopup(); }
    });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
    var form    = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    var error   = document.getElementById('form-error');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var nameEl    = form.querySelector('#name');
        var emailEl   = form.querySelector('#email');
        var messageEl = form.querySelector('#message');
        var name    = nameEl    ? nameEl.value.trim()    : '';
        var email   = emailEl   ? emailEl.value.trim()   : '';
        var message = messageEl ? messageEl.value.trim() : '';

        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !message || !emailRe.test(email)) {
            if (error)   error.style.display   = 'flex';
            if (success) success.style.display = 'none';
            return;
        }
        if (error)   error.style.display   = 'none';
        if (success) success.style.display = 'flex';
        form.reset();
        setTimeout(function() { if (success) success.style.display = 'none'; }, 6000);
    });
}

/* ============================================================
   SCROLL FADE-IN
   ============================================================ */
function initScrollAnimations() {
    var targets = document.querySelectorAll('.section-header, .about-text, .about-tree-visual');
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    targets.forEach(function(el) {
        if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
        obs.observe(el);
    });
}

/* ============================================================
   SECURITY HELPERS
   ============================================================ */
function safeText(str) {
    if (typeof str !== 'string') return '';
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}
function safeAttr(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
              .replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
    renderTree();
    initTreeDrag();
    initNavbar();
    initHamburger();
    initGallery();
    initContactForm();
    initScrollAnimations();

    var closeBtn = document.getElementById('popup-close');
    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    var overlay = document.getElementById('popup-overlay');
    if (overlay) overlay.addEventListener('click', closePopup);
});
