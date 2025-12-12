// Mobile nav toggle
(function () {
	var toggle = document.getElementById('nav-toggle');
	var nav = document.getElementById('site-nav');
	if (!toggle || !nav) return;
	toggle.addEventListener('click', function () {
		var expanded = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', (!expanded).toString());
		nav.style.display = expanded ? 'none' : 'block';
	});
})();

// Smooth scroll for anchor links
(function () {
	var links = document.querySelectorAll('a[href^="#"]');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (e) {
			var targetId = this.getAttribute('href');
			if (!targetId || targetId === '#') return;
			var el = document.querySelector(targetId);
			if (!el) return;
			e.preventDefault();
			window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
		});
	}
})();


