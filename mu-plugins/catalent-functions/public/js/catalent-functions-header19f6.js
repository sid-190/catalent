document.addEventListener("DOMContentLoaded", function(){

    // trigger dropdown menu when hover menu items at header
    const headerDropdowns = document.querySelectorAll('.catalent-header .dropdown, .catalent-header .dropdown .subdropdown');
    headerDropdowns.forEach(function(everyitem){

        everyitem.addEventListener('mouseover', function(e){
            let el_link = this.querySelector('a[data-bs-toggle], button[data-bs-toggle]');
            bootstrap.Dropdown.getOrCreateInstance(el_link).show();
        })
        everyitem.addEventListener('mouseleave', function(e){
            let el_link = this.querySelector('a[data-bs-toggle], button[data-bs-toggle]');
            bootstrap.Dropdown.getOrCreateInstance(el_link).hide();
        })

    });

    const DD_CLASS_NAME = 'has-sub-dropdown-opened';
    document.querySelectorAll('.sec-top-menu .dropdown .dropdown button[data-bs-toggle]').forEach(function(subBtn) {
        subBtn.addEventListener('click', function(e){
            const topSec = this.closest('.sec-top-menu');
            const dDinSection = topSec.querySelectorAll('.dropdown');
            dDinSection.forEach(function(ddItem){
                ddItem.classList.add(DD_CLASS_NAME);
            })
        })
    })

    document.querySelectorAll('.sec-top-menu .dropdown').forEach(function(dd) {
        dd.addEventListener('hide.bs.dropdown', function(e) {
            if (this.classList.contains(DD_CLASS_NAME)) {
                this.classList.remove(DD_CLASS_NAME);
                e.preventDefault();
            }
        });
    });

    const DD_HOVER_CLASS_NAME = 'opened';
    document.querySelectorAll('.sec-top-menu .dropdown').forEach(function(dd) {
        dd.addEventListener('shown.bs.dropdown', function (e) {
            if (this.querySelector('.dropdown-menu').classList.contains('show')) {
                this.classList.add(DD_HOVER_CLASS_NAME);
            }
        })
    })
    document.querySelectorAll('.sec-top-menu .dropdown').forEach(function(dd) {
        dd.addEventListener('hidden.bs.dropdown', function (e) {
            if (!this.querySelector('.dropdown-menu').classList.contains('show')) {
                this.classList.remove(DD_HOVER_CLASS_NAME);
            }
        })
    })

    // add click event to btn-search at header
    const showHeaderSearchForm = function(){

        // show search form
        const searchForm = document.querySelector('.catalent-header .sec-sup-menu > .search-form');
        searchForm.classList.add('show');
        setTimeout(function () {
            searchForm.classList.add('animate');
            searchForm.querySelector('input[name="s"]').focus();
        }, 10);

        // hide other elements
        const topMenuSections = document.querySelectorAll('.catalent-header .sec-sup-menu > .extra-menu, .catalent-header .sec-sup-menu > .regional-menu, .catalent-header .sec-sup-menu > .search-button');
        topMenuSections.forEach(function(topMenuSection){
            topMenuSection.classList.remove('animate');
            setTimeout(function () {
                topMenuSection.classList.remove('show');
            }, 370);
        })

    }

    const hideHeaderSearchForm = function(){

        // hide search form
        const searchForm = document.querySelector('.catalent-header .sec-sup-menu > .search-form');
        searchForm.classList.remove('animate');
        setTimeout(function () {
            searchForm.classList.remove('show');
        }, 370);

        // show other elements
        const topMenuSections = document.querySelectorAll('.catalent-header .sec-sup-menu > .extra-menu, .catalent-header .sec-sup-menu > .regional-menu, .catalent-header .sec-sup-menu > .search-button');
        topMenuSections.forEach(function(topMenuSection){
            topMenuSection.classList.add('show');
            setTimeout(function () {
                topMenuSection.classList.add('animate');
                topMenuSection.querySelector('.show-search-form-action').focus();
            }, 20);
        })

    }

    const btnShowSearchFormAction = document.querySelector('.catalent-header .sec-sup-menu .search-button button.show-search-form-action');
    btnShowSearchFormAction.addEventListener('click', showHeaderSearchForm);

    const btnHideSearchFormAction = document.querySelector('.catalent-header .sec-sup-menu .search-form button.hide-search-form-action');
    btnHideSearchFormAction.addEventListener('click', hideHeaderSearchForm);

    // set focus to search input using collapse
    var searchCollapse = document.querySelector('.catalent-header .sec-sup-menu .search-form');
    searchCollapse.addEventListener('hidden.bs.collapse', function () {
        document.querySelector('.catalent-header .sec-mobile-buttons .show-search-form-action').focus();

        let mobileButton = document.querySelector('.catalent-header .sec-mobile-buttons .show-search-form-action');
        mobileButton.querySelector('span').classList.remove('ch-icon-close');
        mobileButton.querySelector('span').classList.add('ch-icon-search');
    })
    searchCollapse.addEventListener('shown.bs.collapse', function () {
        this.querySelector('input[name="s"]').focus();

        let mobileButton = document.querySelector('.catalent-header .sec-mobile-buttons .show-search-form-action');
        mobileButton.querySelector('span').classList.remove('ch-icon-search');
        mobileButton.querySelector('span').classList.add('ch-icon-close');
    })

}); // DOMContentLoaded  end