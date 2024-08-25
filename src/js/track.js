import { delegateEvent } from './utilities/eventDelegation';

export default class Track {

    // Private properties

    #trackList = document.querySelectorAll('.track');
    #scrollTimeout = null;

    // Private methods
    
    #updateLiveRegion(trackElement, currentIndex, totalPages) {
        const liveRegion = trackElement.querySelector('.liveregion');
        if (liveRegion) {
            liveRegion.textContent = `Page ${currentIndex + 1} of ${totalPages}`;
        }
    }

    #calculateTotalPages(trackElement) {
        const trackContainer = trackElement.querySelector('.track__panels');
        const containerWidth = trackContainer.offsetWidth;

        // Calculate the total number of pages
        return Math.ceil(trackContainer.scrollWidth / containerWidth);
    }

    #updatePagination(trackElement, paginationItems) {
        const trackContainer = trackElement.querySelector('.track__panels');
        const scrollLeft = trackContainer.scrollLeft;
        const containerWidth = trackContainer.offsetWidth;

        // Calculate the active index directly based on scroll position
        let activeIndex = Math.round(scrollLeft / containerWidth);

        // Ensure activeIndex doesn't go out of bounds
        activeIndex = Math.min(activeIndex, paginationItems.length - 1);
        activeIndex = Math.max(activeIndex, 0);

        paginationItems.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
        });

        this.#updateLiveRegion(trackElement, activeIndex, paginationItems.length);
    }

    #scrollByAmount(trackContainer, amount) {
        trackContainer.scrollBy({ left: amount, behavior: 'smooth' });
    }

    #resetPagination(trackElement) {
        this.#generatePagination(trackElement);
        this.#updatePagination(trackElement, trackElement.querySelectorAll('.track__pagination__item'));
    }

    #initEventListeners(trackElement) {
        const trackContainer = trackElement.querySelector('.track__panels');
        const scrollAmount = trackContainer.offsetWidth;

        trackElement.querySelector('.track__prev').addEventListener('click', (event) => {
            event.stopPropagation();
            this.#scrollByAmount(trackContainer, -scrollAmount);
        });

        trackElement.querySelector('.track__next').addEventListener('click', (event) => {
            event.stopPropagation();
            this.#scrollByAmount(trackContainer, scrollAmount);
        });

        delegateEvent(trackElement, 'click', '.track__pagination__item', (event) => {
            const newIndex = parseInt(event.target.getAttribute('data-item'));
            trackContainer.scrollTo({ left: newIndex * scrollAmount, behavior: 'smooth' });
        });

        trackContainer.addEventListener('scroll', () => {
            clearTimeout(this.#scrollTimeout);
            this.#scrollTimeout = setTimeout(() => {
                const paginationItems = trackElement.querySelectorAll('.track__pagination__item');
                this.#updatePagination(trackElement, paginationItems);
            }, 150);  // Debounce delay to ensure scroll has stopped
        });

        trackElement.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.#scrollByAmount(trackContainer, -scrollAmount);
                    break;
                case 'ArrowRight':
                    this.#scrollByAmount(trackContainer, scrollAmount);
                    break;
                default:
                    break;
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.#resetPagination(trackElement);
        });
    }

    #generatePagination(trackElement) {
        const totalPages = this.#calculateTotalPages(trackElement);

        const paginationContainer = trackElement.querySelector('.track__pagination');
        if (!paginationContainer) return;

        // Only update if the number of pages changes
        if (paginationContainer.childElementCount !== totalPages) {
            paginationContainer.innerHTML = '';

            Array.from({ length: totalPages }).forEach((_, i) => {
                const button = document.createElement('button');
                
                button.className = 'track__pagination__item';
                button.setAttribute('data-item', i);

                if (i === 0) {
                    button.classList.add('active');
                }
                
                paginationContainer.appendChild(button);
            });
        }
    }

    #initLiveRegion(trackElement) {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.classList.add('liveregion', 'screen-reader-only');
        trackElement.appendChild(liveRegion);
    }

    // Public methods
    init() {
        this.#trackList.forEach((trackElement) => {
            this.#generatePagination(trackElement);
            this.#initLiveRegion(trackElement);
            this.#initEventListeners(trackElement);
        });
    }
}