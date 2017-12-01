// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.folio-main-grid');
    $container.isotope({
        layoutMode: "masonry",
        itemSelector: '.folio-main-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.folio-main-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-main-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.folio-main-grid2');
    $container.isotope({
        layoutMode: "masonry",
        itemSelector: '.folio-main-item2',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.folio-main-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {

        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-main-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
            alert('click');
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

$(window).resize(function() {
    $('.folio-main-filter').isotope('layout');
});


// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.folio-full');
    $container.isotope({
        layoutMode: "masonry",
        itemSelector: '.folio-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.folio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

// Home Masonry
$(window).load(function() {
    "use strict";
    var $container = $('.home-blog-masonry');
    $container.isotope({
        layoutMode: "masonry",
        itemSelector: '.postcontent-gird-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.postcontent-gird-item-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.postcontent-gird-item-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});
