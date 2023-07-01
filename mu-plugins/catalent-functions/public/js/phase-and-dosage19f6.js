document.addEventListener("DOMContentLoaded", function(){

    // apply mobile filter when selected a phase
    const MOBILE_PHASE_SELECT = '#select-phases';
    const phase_select = document.querySelector(MOBILE_PHASE_SELECT);

    if (phase_select) {
        phase_select.addEventListener('change', function () {

            const PHASE_CONTENT = '.phase-content';
            const phase = document.querySelector(PHASE_CONTENT);

            phase.classList.remove('view-phase-0');
            phase.classList.remove('view-phase-1');
            phase.classList.remove('view-phase-2');
            phase.classList.remove('view-phase-3');
            phase.classList.remove('view-phase-4');
            phase.classList.add('view-' + this.value);

        });

        phase_select.dispatchEvent(new Event('change'));
    }

}); // DOMContentLoaded  end